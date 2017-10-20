select *
from (
	select
		trainer_name,
		course,
		student_name,
		from_unixtime(last_grade_timestamp) as last_grade,
		case when ((completed_assessment_items >= 3) && (completed_assessment_items < round(total_assessment_items * 0.6))) then 'yes' else 'no' end as completed_3_items,
		completed_assessment_items,
		total_assessment_items,
		case when (completed_assessment_items = total_assessment_items) then 'yes' else 'no' end as completed_all_assessment_items
	from (
		select
			(select group_concat(t.firstname, ' ', t.lastname)
			 from prefix_user t inner join prefix_context x
			 on x.contextlevel = 50
			 inner join prefix_role_assignments ra
			 on ra.contextid = x.id
			 and ra.userid = t.id
			 and ra.roleid != 5
			 where x.instanceid = c.id
			) as trainer_name,
			concat(e.courseid, ' : ', c.shortname) as course,
			case when u.idnumber <> '' then concat(u.idnumber, ' ', u.firstname, ' ', u.lastname) else ''end as student_name,
			count(gi.iteminstance) as total_assessment_items,
			sum(case when (gg.finalgrade/gg.rawgrademax >= 0.71) then 1 else 0 end) as completed_assessment_items,
			max(gg.timemodified) as last_grade_timestamp,
			case when cc.timecompleted is not null then 'yes' else 'no' end as completed_course
		from
			prefix_user u inner join prefix_user_enrolments ue
			on u.id = ue.userid
			inner join prefix_enrol e
			on e.id = ue.enrolid
			inner join prefix_course c
			on c.id = e.courseid
			and c.shortname not like '%LLN%'
			and c.startdate >= unix_timestamp('2017-01-01')
			inner join prefix_grade_items gi 
			on c.id = gi.courseid
			left outer join prefix_grade_grades gg
			on gi.id = gg.itemid
			and gg.userid = u.id			
			left outer join prefix_course_completions cc
			on cc.userid = u.id
			and cc.course = c.id
		where
			gi.itemtype = 'mod' 
			and lower(gi.itemname) like 'assessment%'
			and gi.hidden = 0
			and gi.itemname <> 'Assessment - IT Foundations Course'
		group by course, student_name, completed_course
	) cmp
	where
		student_name is not null		
		%%FILTER_SEARCHTEXT:cmp.trainer_name:~%%
		%%FILTER_STARTTIME:cmp.last_grade_timestamp:>%%
		%%FILTER_ENDTIME:cmp.last_grade_timestamp:<%%
	order by
		cmp.last_grade_timestamp desc
) cmp3items
where cmp3items.completed_3_items = 'yes'