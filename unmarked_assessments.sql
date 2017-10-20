/*
	Working query, finds all assign submissions from ICT courses
	that have not been assigned a grade.
	Can be either fully submitted, or drafts.
*/
SELECT DISTINCT CONCAT(u.firstname, ' ', u.lastname) Name,
	  CONCAT('<a target="_new" href="%%WWWROOT%%/course/view.php',char(63),'id=',c.id,'">',c.shortname,'</a>') Course,
	  a.name Assessment, DATE_FORMAT( FROM_UNIXTIME(asub.timemodified), '%Y/%m/%d' ) SubmitTime, asub.status Status
  
FROM prefix_assign_submission asub
JOIN prefix_assign a ON a.id = asub.assignment
JOIN prefix_user u ON u.id = asub.userid
JOIN prefix_course c ON c.id = a.course
LEFT JOIN prefix_assign_grades ag ON ag.userid = u.id AND ag.assignment = a.id

WHERE c.fullname LIKE '%ICT%'
AND a.name LIKE 'Assessment - %'
AND Status NOT LIKE 'new'
AND ag.timemodified IS NULL
%%FILTER_STARTTIME:asub.timemodified:>%%
%%FILTER_ENDTIME:asub.timemodified:<%%

/*
	Working query, finds all assign submissions from ICT courses
	that have an outstanding submission that needs marking, 
	both first attempts and resubmits.
	Can be either fully submitted, or drafts.
*/

SELECT DISTINCT CONCAT(u.firstname, ' ', u.lastname) Name,
	CONCAT('<a target="_new" href="%%WWWROOT%%/course/view.php',char(63),'id=',c.id,'">',c.shortname,'</a>') Course,
	a.name Assessment, DATE_FORMAT( FROM_UNIXTIME(asub.timemodified), '%Y/%m/%d' ) SubmitTime, asub.status Status,
	gg.finalgrade, DATE_FORMAT( FROM_UNIXTIME(gg.timemodified), '%Y/%m/%d' ) GradeDate

FROM prefix_assign_submission asub
JOIN prefix_assign a ON a.id = asub.assignment
JOIN prefix_user u ON u.id = asub.userid
JOIN prefix_course c ON c.id = a.course
JOIN prefix_grade_items gi ON gi.itemname = a.name
JOIN prefix_grade_grades gg ON gg.userid = u.id AND gg.itemid = gi.id
LEFT JOIN prefix_assign_grades ag ON ag.userid = u.id AND ag.assignment = a.id

WHERE c.fullname LIKE '%ICT%'
AND a.name LIKE 'Assessment - %'
AND Status NOT LIKE 'new'
AND ( ag.timemodified IS NULL OR ( ( ROUND(gg.finalgrade / gg.rawgrademax * 100, 2) < 70 ) AND (gg.timemodified < asub.timemodified) ) )
%%FILTER_STARTTIME:asub.timemodified:>%%
%%FILTER_ENDTIME:asub.timemodified:<%%

ORDER BY SubmitTime DESC, Course, u.lastname

/* Selecting trainer names:

select t.firstname, t.lastname
from
	prefix_user t
	inner join prefix_context x on x.contextlevel = 50
	inner join prefix_role_assignments ra on ra.contextid = x.id and ra.userid = t.id and ra.roleid != 5
	right outer join prefix_course c on c.id = x.instanceid
where t.lastname like '%trainer%'
order by t.lastname, t.firstname

*/

/*

SELECT Name, Surname, Course, ItemName, Outcome, DateModified, UserModified, Submission
FROM (
  SELECT u.firstname AS Name , u.lastname AS Surname,
  concat('<a target="_new" href="%%WWWROOT%%/course/view.php',char(63),'id=',c.id,'">',c.shortname,'</a>') AS Course,
  gi.itemname AS ItemName, asub.timemodified AS Submission,
  CASE
	   WHEN ROUND(gg.finalgrade / gg.rawgrademax * 100, 2) > 70 THEN 'C'
	   WHEN ROUND(gg.finalgrade / gg.rawgrademax * 100, 2) = 70 THEN 'RPL'
	   WHEN ROUND(gg.finalgrade / gg.rawgrademax * 100, 2) < 70 THEN 'NYC'
	   ELSE 'Pending'
  END AS Outcome,
  DATE_FORMAT( FROM_UNIXTIME( gi.timemodified ),  '%Y/%m/%d' ) AS DateModified,
  gg.usermodified AS UserModified
  
  FROM prefix_course AS c 
  JOIN prefix_context AS ctx ON c.id = ctx.instanceid 
  JOIN prefix_role_assignments AS ra ON ra.contextid = ctx.id 
  JOIN prefix_user AS u ON u.id = ra.userid 
  JOIN prefix_grade_grades AS gg ON gg.userid = u.id 
  JOIN prefix_grade_items AS gi ON gi.id = gg.itemid 
  JOIN prefix_course_categories AS cc ON cc.id = c.category 
  JOIN prefix_user_info_data AS uid ON uid.userid = u.id
  JOIN prefix_user_info_field AS uif ON uid.fieldid = uif.id
  JOIN prefix_assignment_submissions AS asub ON asub.userid = u.id
  JOIN prefix_assignment AS a ON a.id = asub.assignment
  
  WHERE  gi.courseid = c.id 
  AND (gi.itemmodule != 'SCORM' OR gi.itemname = 'Assessment - SOHO Router/WAP') 
  AND gi.itemname != 'Attendance' 
  AND gi.itemname != 'Upload your completed RPL form'
  AND gi.itemname != 'Upload your completed credit transfer form'
  AND gi.itemname != 'Upload additional RPL-CT evidence'
  AND gi.itemname != 'LLN Assessment Part A Quiz'
  AND gi.itemname != 'LLN Assessment Part B Quiz'
  AND gi.itemname != 'Upload your Identification Evidence'
  AND gi.itemname != 'Participant Handbook Acknowledgement'
  ) result
WHERE Outcome = 'Pending'
AND DateModified > '2016/01/01'
AND Course LIKE '%ICT%'
AND UserModified IS NOT NULL

ORDER BY Course DESC, Surname ASC

*/