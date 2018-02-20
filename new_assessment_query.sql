SELECT DISTINCT CONCAT( u.firstname, ' ', u.lastname ) StudentName,
CONCAT( Tfirst, ' ', Tlast ) TrainerName,
CONCAT( '<a target="_new" href="%%WWWROOT%%/course/view.php', char(63), 'id=', Courses.Cid, '">', Courses.short, '</a>' ) Course,
a.name, asub.status, 
FROM_UNIXTIME(asub.timemodified) SubmitTime,
FROM_UNIXTIME(ag.timemodified) GradeModifyTime,
ag.grade
FROM
(
	SELECT DISTINCT Trainer.firstname Tfirst, Trainer.lastname Tlast, c.shortname Short, c.id Cid
	FROM
	(
		SELECT DISTINCT t.firstname firstname, t.lastname lastname, t.id id
		FROM prefix_user t
		JOIN prefix_context x ON x.contextlevel = 50
		JOIN prefix_role_assignments ra ON ra.contextid = x.id AND ra.userid = t.id AND ra.roleid != 5
		RIGHT OUTER JOIN prefix_course c ON c.id = x.instanceid
		WHERE t.lastname LIKE '%trainer%'
		AND t.firstname IS NOT NULL
		AND t.lastname IS NOT NULL
	) Trainer
	JOIN prefix_user_enrolments ue ON Trainer.id = ue.userid
	JOIN prefix_enrol e ON e.id = ue.enrolid
	JOIN prefix_course c ON c.id = e.courseid 

) Courses
JOIN prefix_assign a ON ( a.course = Courses.Cid AND ( a.name LIKE 'Assessment - %' OR a.name LIKE 'kCheck - %' ) ) 
JOIN prefix_assign_submission asub ON ( asub.assignment = a.id AND asub.status NOT LIKE 'new' )
JOIN prefix_assign_grades ag ON ( ag.assignment = a.id AND ag.grade < 70 )
JOIN prefix_user u ON u.id = ag.userid

WHERE ( ag.timemodified IS NULL OR ag.timemodified < asub.timemodified )
AND Courses.short NOT LIKE '%LLN%'
AND Courses.short LIKE '%ICT%'
AND Courses.short IS NOT NULL
%%FILTER_STARTTIME:asub.timemodified:>%%
%%FILTER_ENDTIME:asub.timemodified:<%%

%%FILTER_SEARCHTEXT:CONCAT(Courses.tFirst, Courses.tLast):~%%
ORDER BY SubmitTime DESC, Courses.Short