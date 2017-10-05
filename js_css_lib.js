// Opens a linked document in a popup window
function popupDoc( mylink, windowname ) {
	if( !window.focus ) {
		return true;
	}
	var href;
	if( typeof(mylink) == 'string' ) {
		href = mylink;
	} else {
		href = mylink.href;
	}
	window.open( href, windowname, 'width=800,height=600,scrollbars=yes' );
	return false;
}

// Used to hide/show the link to foundations courses
function showCourse( course ) {
	var check;
	var doc;
	if( course == "dev" ) {
		check = document.getElementById("devCheck");
		doc = document.getElementById("devCourse");	
	} else {
		check = document.getElementById("itifCheck");
		doc = document.getElementById("itifCourse");
	}
	
	if( check.value == "off" ) {
		check.value = "on";
		doc.style.display = "block";
	} else {
		check.value = "off";
		doc.style.display = "none";
	}
}

// Creates an iframe as an in-browser popup
// Requires each popup to be used must be paired with a div
// The div's id must be the same as the 'givenName' argument in the function
function popup( givenName, iframeSrc, iconSrc ) {
	var popupNum = 0;
	var name = document.getElementById("popup0");
	while( name != null ) {
		//name already used in another element
		popupNum++;
		name = document.getElementById( "popup" + popupNum );
	}
	//create link
	var a = document.createElement("a");
	var html = document.createTextNode(givenName);
	a.id = "vidLink" + popupNum;
	a.href = "#" + a.id;
	var icon = document.createElement("img");
	icon.src = iconSrc;
	icon.classList = "iconlarge activityicon";
	icon.alt = " ";
	a.appendChild(icon);
	a.appendChild(html);
	document.getElementById(givenName).appendChild(a);
	//create container
	var container = document.createElement("div");
	container.classList = "modal";
	container.id = "popup" + popupNum;
	//create close button
	var exit = document.createElement("span");
	exit.innerHTML = "&times;";
	exit.classList = "close";
	exit.id = "close" + popupNum;
	container.appendChild(exit);
	//create content
	var content = document.createElement("iframe");
	content.classList = "modal-content";
	content.id = "popupVid" + popupNum;
	content.style = "width: 1280px; height: 720px;";
	content.frameBorder = "0";
	content.src = iframeSrc;
	content.setAttribute('allowfullScreen', '');
	content.setAttribute('mozallowfullScreen', '');
	content.setAttribute('webkitallowfullScreen', '');
	container.appendChild(content);
	document.getElementById(givenName).appendChild(container);

	a.onclick = function() {
		container.style.display = "block";
		content.style.display = "block";
	}

	exit.onclick = function() { 
		container.style.display = "none";
		content.style.display = "none";
		content.src = content.src;
	}
}

// Set a new cookie value
function setCookie( cname, cvalue, exdays ) {
	var d = new Date();
	d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";path=/";
}

// Retrieve the value of a given cookie
function getCookie( cname ) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for( var i = 0; i < ca.length; i++ ) {
		var c = ca[i];
		while( c.charAt(0) == ' ' ) {
			c = c.substring(1);
		}
		if( c.indexOf(name) == 0 ) {
			return c.substring( name.length, c.length );
		}
	}
	return "";
}

// Used for testing cookie stuff
function checkCookie() {
	var user = getCookie( "username" );
	if( user != "" ) {
		alert( "Welcome again " + user );
	} else {
		user = prompt( "Please enter your name:", "" );
		if( user != "" && user != null ) {
			setCookie( "username", user, 365 );
		}
	}
}

// Remove a given cookie
function removeCookie( cname, cvalue ) {
	var d = new Date();
	d.setTime( d.getTime() - ( 30 * 24 * 60 * 60 * 1000 ) );
	var expires = d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";path=/";
}

function updateOptional( cname, cvalue ) {
	setCookie( cname, cvalue, 365 );
	if( cvalue == true ) {
		var opt = document.getElementsByClassName("optional");
		for( var i = 0; i < opt.length; i++ ) {
			opt[i].style.display = "inline";
		}
		opt = document.getElementsByClassName("optBlock");
		for( var i = 0; i < opt.length; i++ ) {
			opt[i].style.display = "block";
		}
	} else if( cvalue == false ) {
		var opt = document.getElementsByClassName("optional");
		for( var i = 0; i < opt.length; i++ ) {
			opt[i].style.display = "none";
		}
		opt = document.getElementsByClassName("optBlock");
		for( var i = 0; i < opt.length; i++ ) {
			opt[i].style.display = "none";
		}
	}
}

function mOver( obj ) {
	obj.style.opacity = "0.5";
}

function mOut( obj ) {
	obj.style.opacity = "1.0";
}

function select( obj ) {
	var buttons = document.getElementsByClassName("optButton");
	for( var i = 0; i < buttons.length; i++ ) {
		buttons[i].style.opacity = "1.0";
	}
	obj.style.opacity = "0.5";
}

function combine( cname, cvalue, obj ) {
	updateOptional( cname, cvalue );
	select(obj);
}

function pluralsight( container ) {
	var pluralFlip = document.createElement("div");
	pluralFlip.id = "pluralFlip";
	pluralFlip.className = "flip";
	var span = document.createElement("span");
	var img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=pluralsight.com";
	img.className = "panelIcon";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" Pluralsight eLearning") );
	span.style = "font-weight: bold;";
	pluralFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	pluralFlip.appendChild(span);
	
	var pluralPan = document.createElement("div");
	pluralPan.id = "pluralPan";
	pluralPan.className= "panel";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("Each topic of eLearning will have its own link for you to follow to specific PluralSight courses. This eLearning is only accessible via the links in MyUpskilled. The example below shows what the PluralSight eLearning looks like in your course.") );
	pluralPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Each study session will require you to authenticate with the eLearning resources prior to accessing the specific material. Once you have authenticated you can click on the eLearning links during your MyUpskilled session. Once you are in a PluralSight course you will have access to the full catalogue should you wish to undertake additional studies separate to the assigned topics in your course.") );
	pluralPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("When you log off MyUpskilled your authentication will stop.") );
	pluralPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Example:") );
	pluralPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.style = "color: #606060;";
	img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=pluralsight.com";
	img.className = "activityicon iconlarge";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" eLearning - Topic Name Here") );
	p.appendChild(img);
	p.appendChild(span);
	pluralPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Most eLearning has an audio component You will find the experience better if you have speakers on your computer.") );
	p.appendChild( document.createElement("br") );
	p.appendChild( document.createTextNode("Tip - If you are in an office with others, it may be more appropriate to have a set of headphones.") );
	p.appendChild( document.createElement("br") );
	p.appendChild( document.createTextNode("These plug into the 'green' jack or socket on the back or front of the computer. If it is not green then it will have a picture of headphones next to the jack.") );
	pluralPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(pluralFlip);
	readme.appendChild(pluralPan);
}

function lynda( container ) {
	var lyndaFlip = document.createElement("div");
	lyndaFlip.id = "lyndaFlip";
	lyndaFlip.className = "flip";
	var span = document.createElement("span");
	var img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=lynda.com";
	img.className = "panelIcon";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" Lynda.com eLearning") );
	span.style = "font-weight: bold;";
	lyndaFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	lyndaFlip.appendChild(span);
	
	var lyndaPan = document.createElement("div");
	lyndaPan.id = "lyndaPan";
	lyndaPan.className= "panel";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("Each topic of eLearning will have its own link for you to follow to specific Lynda.com. This eLearning is only accessible via the links in MyUpskilled. The example below shows what the Lynda.com eLearning looks like in your course.") );
	lyndaPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Each study session will require you to authenticate with the eLearning resources prior to accessing the specific material. Once you have authenticated you can click on the eLearning links during your MyUpskilled session. Once you are in a Lynda.com course you will have access to the full catalogue should you wish to undertake additional studies separate to the assigned topics in your course.") );
	lyndaPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("When you log off MyUpskilled your authentication will stop.") );
	lyndaPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Example:") );
	lyndaPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.style = "color: #606060;";
	img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=lynda.com";
	img.className = "activityicon iconlarge";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" Authenticate with Lynda.com eLearning") );
	p.appendChild(img);
	p.appendChild(span);
	lyndaPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.style = "color: #606060;";
	img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=lynda.com";
	img.className = "activityicon iconlarge";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" eLearning - Topic Name Here") );
	p.appendChild(img);
	p.appendChild(span);
	lyndaPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Most eLearning has an audio component You will find the experience better if you have speakers on your computer.") );
	p.appendChild( document.createElement("br") );
	p.appendChild( document.createTextNode("Tip - If you are in an office with others, it may be more appropriate to have a set of headphones.") );
	p.appendChild( document.createElement("br") );
	p.appendChild( document.createTextNode("These plug into the 'green' jack or socket on the back or front of the computer. If it is not green then it will have a picture of headphones next to the jack.") );
	lyndaPan.appendChild(p);
	p = document.createElement("p");
	img = document.createElement("img");
	img.src = "https://lms.upskilled.edu.au/theme/image.php?theme=ups&component=core&rev=1447640343&image=f%2Fpdf-24";
	img.className = "activityicon iconlarge";
	img.alt = " ";
	p.appendChild(img);
	var a = document.createElement("a");
	a.href = "#";
	a.onclick = function() { popupDoc( "https://rebrand.ly/LyndaCookies", 'cookies' ); };
	a.appendChild( document.createTextNode("Guide - How to add cookies for Lynda.com") );
	a.style.fontWeight = "bold";
	p.appendChild(a);
	lyndaPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(lyndaFlip);
	readme.appendChild(lyndaPan);
}

function microsoft( container ) {
	
}

function assessment( container ) {
	var assessmentFlip = document.createElement("div");
	assessmentFlip.id = "assessmentFlip";
	assessmentFlip.className = "flip";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Assessments Explained") );
	span.style = "font-weight: bold;";
	assessmentFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	assessmentFlip.appendChild(span);
	
	var assessmentPan = document.createElement("div");
	assessmentPan.id = "assessmentPan";
	assessmentPan.className= "panel";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("In this qualification course you will find many learning materials and assessments. All assessments that are required for you to complete this qualification are contained within your 'MyUpskilled' site.") );
	assessmentPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Assessments are identified by two distinct icons as seen in the diagram below.") );
	p.style.fontSize = "10pt";
	p.style.lineHeight = "1.5em";
	assessmentPan.appendChild(p);
	var table = document.createElement("table");
	table.border = "0";
	var tr = document.createElement("tr");
	tr.style.height = "35px";
	var td = document.createElement("td");
	td.fontWeight = "bold";
	td.appendChild( document.createTextNode("Sustainability") );
	tr.appendChild(td);
	td = document.createElement("td");
	p = document.createElement("p");
	p.fontSize = "small";
	p.appendChild( document.createTextNode("← This is the title of the topic") );
	td.appendChild(p);
	tr.appendChild(td);
	table.appendChild(tr);
	tr = document.createElement("tr");
	tr.style.height = "35px";
	td = document.createElement("td");
	td.style.textIndent = "16px";
	var img = document.createElement("img");
	img.src = "https://lms.upskilled.edu.au/theme/image.php?theme=ups&amp;component=scorm&amp;rev=1382312684&amp;image=icon";
	img.className = "activityicon iconlarge";
	img.alt = "SCORM Package";
	td.appendChild(img);
	span = document.createElement("span");
	span.style.color = "#888888";
	span.appendChild( document.createTextNode("Environmental Procedures") );
	td.appendChild(span);
	tr.appendChild(td);
	td = document.createElement("td");
	p = document.createElement("p");
	p.fontSize = "small";
	p.appendChild( document.createTextNode("← Learning materials") );
	td.appendChild(p);
	tr.appendChild(td);
	table.appendChild(tr);
	tr = document.createElement("tr");
	tr.style.height = "35px";
	td = document.createElement("td");
	td.style.textIndent = "16px";
	img = document.createElement("img");
	img.src = "https://lms.upskilled.edu.au/theme/image.php?theme=ups&amp;component=quiz&amp;rev=1382312684&amp;image=icon";
	img.className = "activityicon iconlarge";
	img.alt = "Quiz";
	td.appendChild(img);
	span = document.createElement("span");
	span.style.color = "#888888";
	span.appendChild( document.createTextNode("Assessment - Environmental Procedures") );
	td.appendChild(span);
	tr.appendChild(td);
	td = document.createElement("td");
	p = document.createElement("p");
	p.fontSize = "small";
	p.appendChild( document.createTextNode("← Quiz style assessment") );
	td.appendChild(p);
	tr.appendChild(td);
	table.appendChild(tr);
	tr = document.createElement("tr");
	tr.style.height = "35px";
	td = document.createElement("td");
	td.style.textIndent = "16px";
	img = document.createElement("img");
	img.src = "https://lms.upskilled.edu.au/theme/image.php?theme=ups&amp;component=core&amp;rev=1382312684&amp;image=f%2Fpdf";
	img.className = "activityicon iconlarge";
	img.alt = "File";
	td.appendChild(img);
	span = document.createElement("span");
	span.style.color = "#888888";
	span.appendChild( document.createTextNode("Instructions - Environmental Procedures") );
	td.appendChild(span);
	tr.appendChild(td);
	td = document.createElement("td");
	p = document.createElement("p");
	p.fontSize = "small";
	p.appendChild( document.createTextNode("← Assignment instructions") );
	td.appendChild(p);
	tr.appendChild(td);
	table.appendChild(tr);
	tr = document.createElement("tr");
	tr.style.height = "35px";
	td = document.createElement("td");
	td.style.textIndent = "16px";
	img = document.createElement("img");
	img.src = "https://lms.upskilled.edu.au/theme/image.php?theme=ups&amp;component=assign&amp;rev=1382312684&amp;image=icon";
	img.className = "activityicon iconlarge";
	img.alt = "Assignment";
	td.appendChild(img);
	span = document.createElement("span");
	span.style.color = "#888888";
	span.appendChild( document.createTextNode("Assessment - Environmental Procedures Assignment") );
	td.appendChild(span);
	tr.appendChild(td);
	td = document.createElement("td");
	p = document.createElement("p");
	p.fontSize = "small";
	p.appendChild( document.createTextNode("← Assignment/Project style assessment") );
	td.appendChild(p);
	tr.appendChild(td);
	table.appendChild(tr);
	assessmentPan.appendChild(table);
	var br = document.createElement("br");
	assessmentPan.appendChild(br);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Assessments are designed to test you on the learning materials that have preceded it.") );
	assessmentPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Quizzes are timed and contain different types of questions like, multichoice, choose one or many, short answer, fill in the blank, etc.") );
	assessmentPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Assignments and Projects will have an instructions document preceding it and if supporting information is required, it will be in documentation listed after it.") );
	assessmentPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Assignments and Projects will also have a marking guide or rubric for you to see what the assessor is looking for in your submission.") );
	assessmentPan.appendChild(p);
	var script = document.createElement("script");
	script.src = "https://fast.wistia.com/assets/external/popover-v1.js";
	script.characterSet = "ISO-8859-1";
	p = document.createElement("p");
	img = document.createElement("img");
	img.src = "https://www.upskilled.edu.au/favicon.ico";
	img.className = "activityicon iconlarge";
	var a = document.createElement("a");
	a.href = "https://fast.wistia.net/embed/iframe/q131r4lnhx?popover=true";
	a.className = "wistia-popover[height=551,playerColor=fe7905,width=980]";
	a.appendChild( document.createTextNode("Quick Tip - Quizzes <2min") );
	a.style.fontWeight = "bold";
	p.appendChild(img);
	p.appendChild(a);
	assessmentPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(assessmentFlip);
	readme.appendChild(assessmentPan);
}

function rubric( container ) {
	var rubricFlip = document.createElement("div");
	rubricFlip.id = "rubricFlip";
	rubricFlip.className = "flip";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Assessment Rubrics File") );
	span.style = "font-weight: bold;";
	rubricFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	rubricFlip.appendChild(span);
	
	var rubricPan = document.createElement("div");
	rubricPan.id = "rubricPan";
	rubricPan.className= "panel";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("Rubrics provide a guide on what elements the assessor is looking for. The rubrics for all assessments are included on the assessment submission pages.") );
	rubricPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("**NOTE - this is a useful tool for you to prepare and write your submissions. If there is an element in the rubric that you do not address, that element will get a '0' result!") );
	rubricPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Please read the following document for more information on rubrics") );
	rubricPan.appendChild(p);
	p = document.createElement("p");
	var img = document.createElement("img");
	img.src = "https://lms.upskilled.edu.au/theme/image.php?theme=ups&component=core&rev=1447640343&image=f%2Fpdf-24";
	img.className = "activityicon iconlarge";
	img.alt = " ";
	p.appendChild(img);
	var a = document.createElement("a");
	a.href = "#";
	a.onclick = function() { popupDoc( "https://rebrand.ly/assessRubric", 'rubric' ); };
	a.appendChild( document.createTextNode("How to Find the Assessment Rubric") );
	a.style.fontWeight = "bold";
	p.appendChild(a);
	rubricPan.appendChild(p);
	var script = document.createElement("script");
	script.src = "https://fast.wistia.com/embed/medias/z65qa5bhe5.jsonp";
	script.async = "";
	rubricPan.appendChild(script);
	script = document.createElement("script");
	script.src = "https://fast.wistia.com/assets/external/E-v1.js";
	script.async = "";
	rubricPan.appendChild(script);
	span = document.createElement("span");
	span.className = "wistia_embed wistia_async_z65qa5bhe5 popover=true popoverContent=link";
	span.style.display = "inline";
	var div = document.createElement("div");
	div.id = "wistia_164.thumb_container";
	div.className = "wistia_click_to_play";
	div.style.position = "relative";
	div.style.display = "inline";
	img = document.createElement("img");
	img.src = "https://www.upskilled.edu.au/favicon.ico";
	img.className = "activityicon iconlarge";
	img.alt = " ";
	div.appendChild(img);
	a = document.createElement("a");
	a.href = "#";
	a.id = "yui_3_15_0_3_1473213461653_1514";
	a.style.fontWeight = "bold";
	a.appendChild( document.createTextNode("Quick Tip - How to Access Assessment Rubric <1 min") );
	div.appendChild(a);
	span.appendChild(div);
	rubricPan.appendChild(span);
	
	var readme = document.getElementById(container);
	readme.appendChild(rubricFlip);
	readme.appendChild(rubricPan);
}

var i = document.createElement("style");
var j = document.createTextNode( "div.flip{ padding: 5px; text-align: center; background: rgba( 241, 126, 0, 0.5 ); background: linear-gradient( to bottom right, rgba(249, 176, 0, 0.5), rgba(230, 66, 9, 0.5) ); }" );
i.appendChild(j);
j = document.createTextNode( "div.panel{ padding: 15px; text-align: justify; display: none;	}" );
i.appendChild(j);
j = document.createTextNode( "div.flip:hover{ background: rgba( 241, 126, 0, 1 ); background: linear-gradient( to bottom right, rgba(249, 176, 0, 1), rgba(230, 66, 9, 1) ); }" );
i.appendChild(j);
j = document.createTextNode( "img.panelIcon{ height: 16px; width: 16px; }" );
i.appendChild(j);
j = document.createTextNode(".modal {display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.9); margin: 0;}");
i.appendChild(j);
j = document.createTextNode(".modal-content {margin: auto; display: block;}");
i.appendChild(j);
j = document.createTextNode(".modal-content {-webkit-animation-name: zoom; -webkit-animation-duration: 0.6s; animation-name: zoom; animation-duration: 0.6s;}");
i.appendChild(j);
j = document.createTextNode("@-webkit-keyframes zoom {from {-webkit-transform:scale(0)} to {-webkit-transform:scale(1)}}");
i.appendChild(j);
j = document.createTextNode("@keyframes zoom {from {transform:scale(0)} to {transform:scale(1)}}");
i.appendChild(j);
j = document.createTextNode(".close {position: absolute; top: 15px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; transition: 0.3s;}");
i.appendChild(j);
j = document.createTextNode(".close:hover, .close:focus {color: #bbb; text-decoration: none; cursor: pointer;}");
i.appendChild(j);
j = document.createTextNode("@media only screen and (max-width: 700px){.modal-content {width: 100%;}}");
i.appendChild(j);
if( getCookie("optional") == "true" ) {
	j = document.createTextNode( ".optional{ display: inline; }" );
	i.appendChild(j);
	j = document.createTextNode( ".optBlock{ display: block; }" );
	i.appendChild(j);
} else {
	j = document.createTextNode( ".optional{ display: none; }" );
	i.appendChild(j);
	j = document.createTextNode( ".optBlock{ display: none; }" );
	i.appendChild(j);
}
document.head.appendChild(i);