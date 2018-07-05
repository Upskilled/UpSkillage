SELECT DISTINCT CONCAT( u.firstname, ' ', u.lastname ) student,
	GROUP_CONCAT( DISTINCT ' ', CONCAT( t.firstname, ' ', t.lastname ) ) trainer, c.shortname course,
  CONCAT( '<a target="_new" href="%%WWWROOT%%/mod/assign/view.php', char(63), 'id=', cm.id, '">', assess.name, '</a>' ) assessment_link,
	FROM_UNIXTIME(assess.submittime) time_submitted

FROM (
	SELECT s.assignment as assignment, s.userid as userid, s.timemodified as submittime,
		s.id as id, s.status as status, g.timemodified as timegraded, a.name as name, a.id as assessid
	FROM prefix_assign_submission s
	LEFT JOIN prefix_assign_grades g ON s.userid = g.userid AND s.assignment = g.assignment AND g.attemptnumber = s.attemptnumber
	LEFT JOIN prefix_assign a ON a.id = s.assignment
	WHERE ( g.timemodified is NULL OR s.timemodified >= g.timemodified OR g.grade IS NULL OR (g.grade = -1 AND a.grade < 0) )
	AND s.timemodified IS NOT NULL
	AND s.status = 'submitted'
	AND s.latest = 1
	AND g.grade < 70
	AND ( a.name LIKE 'Assessment%' OR a.name LIKE 'kCheck%' )
) assess
JOIN prefix_user u ON u.id = assess.userid
JOIN prefix_user_enrolments ue ON ue.userid = u.id
JOIN prefix_enrol e ON e.id = ue.enrolid
JOIN prefix_course_modules cm ON cm.course = e.courseid AND cm.instance = assess.assessid
JOIN prefix_course c ON c.id = e.courseid
JOIN prefix_enrol e2 ON e2.courseid = c.id
JOIN prefix_user_enrolments ue2 ON ue2.enrolid = e2.id
JOIN prefix_user t ON t.id = ue2.userid AND t.lastname LIKE '%trainer%'
JOIN prefix_course_categories cc ON cc.id = c.category

WHERE cc.name LIKE '% insert faculty %'
AND c.shortname NOT LIKE '%LLN%'
AND ue.status = 0
AND ue.timeend = ''

%%FILTER_STARTTIME:assess.submittime:>%%
%%FILTER_ENDTIME:assess.submittime:<%%
%%FILTER_SEARCHTEXT:CONCAT(t.firstname, ' ', t.lastname):~%%

GROUP BY student, course, assessment_link, time_submitted
ORDER BY assess.submittime DESC