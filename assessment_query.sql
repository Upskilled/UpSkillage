SELECT CONCAT( FirstName, ' ', LastName ) Name, Trainer, Course, Assessment, SubmitTime, Status, FinalGrade, GradeDate
FROM
(
    SELECT DISTINCT u.lastname LastName, u.firstname FirstName,
    (
        SELECT DISTINCT GROUP_CONCAT( t.firstname, ' ', t.lastname )
        FROM prefix_user t
        JOIN prefix_context x ON x.contextlevel = 50
        JOIN prefix_role_assignments ra ON ra.contextid = x.id AND ra.userid = t.id AND ra.roleid != 5
        WHERE x.instanceid = c.id
        AND t.firstname IS NOT NULL
        AND t.lastname IS NOT NULL
    ) Trainer,
    CONCAT( '<a target="_new" href="%%WWWROOT%%/course/view.php', char(63), 'id=', c.id, '">', c.shortname,'</a>' ) Course, a.name Assessment, 
    DATE_FORMAT( FROM_UNIXTIME(asub.timemodified), '%Y/%m/%d' ) SubmitTime, asub.status Status, gg.finalgrade FinalGrade, 
    DATE_FORMAT( FROM_UNIXTIME(gg.timemodified), '%Y/%m/%d' ) GradeDate
  
  FROM prefix_assign_submission asub
  JOIN prefix_assign a ON a.id = asub.assignment
  JOIN prefix_user u ON u.id = asub.userid
  JOIN prefix_course c ON c.id = a.course
  JOIN prefix_grade_items gi ON gi.itemname = a.name AND gi.courseid = a.course
  JOIN prefix_grade_grades gg ON gg.userid = u.id AND gg.itemid = gi.id
  JOIN prefix_assign_grades ag ON ag.userid = u.id AND ag.assignment = a.id
  
  WHERE c.shortname LIKE '%ICT%'
  AND ( a.name LIKE 'Assessment - %' OR a.name LIKE 'kCheck - %' )
  /*AND Status NOT LIKE 'new'*/
  AND u.lastname NOT LIKE '%trainer%'
  AND UNIX_TIMESTAMP(asub.timemodified) <= SYSDATE()
  AND ( ag.timemodified IS NULL OR ( (ROUND( gg.finalgrade / gg.rawgrademax * 100, 2 ) < 70) AND (gg.timemodified < asub.timemodified) ) )
  %%FILTER_STARTTIME:asub.timemodified:>%%
  %%FILTER_ENDTIME:asub.timemodified:<%%
) res
WHERE res.SubmitTime IS NOT NULL
%%FILTER_SEARCHTEXT:res.Trainer:~%%

ORDER BY SubmitTime DESC, Course, res.LastName