// Enforce the rebranded favicon
var links = document.getElementsByTagName('link');
for( var i = 0; i < links.length; i++ ) {
	if( links[i].rel === 'shortcut icon' ) {
		links[i].href = 'https://upskilled-sandbox.mrooms.net/pluginfile.php/1/tool_themeassets/assets/0/favicon.ico';
	}
}

// *** Pseudo-Tile click event handling

// Find each tile in table of contents
var toc = document.getElementById('chapters').getElementsByClassName('li');

// Add event listener for clicks, direct to the contained hyperlink

// *** FUNCTION DEFINITIONS ***

// Opens a linked document in a popup window
function popupDoc( mylink, windowname ) {
	if( !window.focus ) {
		return true;
	}
	var href;
	if( typeof(mylink) === 'string' ) {
		href = mylink;
	} else {
		href = mylink.href;
	}
	window.open( href, windowname, 'width=800,height=600,scrollbars=yes' );
	return false;
}

// Altered for the new MoodleRooms LMS
function popupMR( givenName, iframeSrc, iconSrc ) {
	// Produce a random id
	var popupID = Math.floor( ( Math.random() * 1000 ) + 1 );
	while ( document.getElementById( givenName.replace( /\s/g, '' ) + popupID ) != null ) {
		popupID = Math.floor( ( Math.random() * 1000 ) + 1 );
	}
	
	// Create the link and add to the container
	var a = document.createElement("a");
	var html = document.createTextNode(givenName);
	a.id = "vidLink" + popupID;
	a.className = "popupLink";
	var icon = document.createElement("img");
	icon.src = iconSrc;
	icon.classList = "activityicon iconlarge";
	icon.alt = givenName;
	a.appendChild(icon);
	a.appendChild(html);
	document.getElementById(givenName).appendChild(a);
	var content = document.createElement("iframe");
	var exit = document.createElement("span");
	var container = document.createElement("div");
	
	// Add dynamic actions (the popup bit)
	a.onclick = function() {
		// If first time clicking link, create content
		if ( document.getElementById(givenName).children.length <= 1 ) {
			// Create the container
			container = document.createElement("div");
			container.classList = "modal";
			container.id = givenName.replace( /\s/g, '' ) + popupID;
			// Create the close button for within the popup
			exit = document.createElement("span");
			exit.innerHTML = "&times;";
			exit.classList = "close";
			exit.id = "close" + popupID;
			container.appendChild(exit);
			// Create the iframe for within the popup
			content = document.createElement("iframe");
			content.classList = "modal-content";
			content.id = "popupVid" + popupID;
			content.src = iframeSrc;
			content.setAttribute('allowfullScreen', '');
			content.setAttribute('mozallowfullScreen', '');
			content.setAttribute('webkitallowfullScreen', '');
			container.appendChild(content);
			document.getElementById(givenName).appendChild(container);

			exit.onclick = function() {
				// Hide the content (close icon)
				container.style.display = "none";
				content.style.display = "none";
				content.src = content.src;
			}
			document.onkeyup = function(e) {
				// Hide the content (esc key)
				if( e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27 ) {
					container.style.display = "none";
					content.style.display = "none";
					content.src = content.src;
				}
			}
		}
		
		// Display the content
		container.style.display = "block";
		content.style.display = "block";
	}
	
}

// Popup function to overwrite old one used in Andro site
function popup( givenName, iframeSrc, iconSrc ) {
	// Produce a random id
	var popupID = Math.floor( ( Math.random() * 1000 ) + 1 );
	while ( document.getElementById( givenName.replace( /\s/g, '' ) + popupID ) != null ) {
		popupID = Math.floor( ( Math.random() * 1000 ) + 1 );
	}
	
	// Create the link and add to the container
	var a = document.createElement("a");
	var html = document.createTextNode(givenName);
	a.id = "vidLink" + popupID;
	a.className = "popupLink";
	var icon = document.createElement("img");
	icon.src = iconSrc;
	icon.classList = "activityicon iconlarge";
	icon.alt = givenName;
	a.appendChild(icon);
	a.appendChild(html);
	document.getElementById(givenName).appendChild(a);
	var content = document.createElement("iframe");
	var exit = document.createElement("span");
	var container = document.createElement("div");
	
	// Add dynamic actions (the popup bit)
	a.onclick = function() {
		// If first time clicking link, create content
		if ( document.getElementById(givenName).children.length <= 1 ) {
			// Create the container
			container = document.createElement("div");
			container.classList = "modal";
			container.id = givenName.replace( /\s/g, '' ) + popupID;
			// Create the close button for within the popup
			exit = document.createElement("span");
			exit.innerHTML = "&times;";
			exit.classList = "close";
			exit.id = "close" + popupID;
			container.appendChild(exit);
			// Create the iframe for within the popup
			content = document.createElement("iframe");
			content.classList = "modal-content";
			content.id = "popupVid" + popupID;
			content.src = iframeSrc;
			content.setAttribute('allowfullScreen', '');
			content.setAttribute('mozallowfullScreen', '');
			content.setAttribute('webkitallowfullScreen', '');
			container.appendChild(content);
			document.getElementById(givenName).appendChild(container);

			exit.onclick = function() {
				// Hide the content (close icon)
				container.style.display = "none";
				content.style.display = "none";
				content.src = content.src;
			}
			document.onkeyup = function(e) {
				// Hide the content (esc key)
				if( e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27 ) {
					container.style.display = "none";
					content.style.display = "none";
					content.src = content.src;
				}
			}
		}
		
		// Display the content
		container.style.display = "block";
		content.style.display = "block";
	}
	
}

// Used to hide/show the link to foundations courses
function showCourse( course ) {
	var check;
	var doc;
	if( course === "dev" ) {
		check = document.getElementById("devCheck");
		doc = document.getElementById("devCourse");
	} else if( course === "itif" ) {
		check = document.getElementById("itifCheck");
		doc = document.getElementById("itifCourse");
	} else if( course === "virtDevCheck") {
		check = document.getElementById("virtDevCheck");
		doc = document.getElementById("virtDevEnv");
	} else {
		return;
	}

	if( check.value === "off" ) {
		check.value = "on";
		doc.style.display = "block";
	} else {
		check.value = "off";
		doc.style.display = "none";
	}
}

function pluralsight( container ) {
	var pluralFlip = document.createElement("div");
	pluralFlip.id = "pluralFlip";
	pluralFlip.className = "flip";
	pluralFlip.style.padding = "5px";
	var span = document.createElement("span");
	var img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=pluralsight.com";
	img.className = "panelIcon";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" Pluralsight eLearning") );
	span.style.fontWeight = "bold";
	pluralFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	pluralFlip.appendChild(span);
	
	var pluralPan = document.createElement("div");
	pluralPan.id = "pluralPan";
	pluralPan.className= "panel";
	pluralPan.style.padding = "15px";
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
	span.style.color = "#606060";
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
	
	//This is the jQuery for the animation
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#pluralFlip").click( function(){ $("#pluralPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function lynda( container ) {
	var lyndaFlip = document.createElement("div");
	lyndaFlip.id = "lyndaFlip";
	lyndaFlip.className = "flip";
	lyndaFlip.style.padding = "5px";
	var span = document.createElement("span");
	var img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=lynda.com";
	img.className = "panelIcon";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" Lynda.com eLearning") );
	span.style.fontWeight = "bold";
	lyndaFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	lyndaFlip.appendChild(span);
	
	var lyndaPan = document.createElement("div");
	lyndaPan.id = "lyndaPan";
	lyndaPan.className= "panel";
	lyndaPan.style.padding = "15px";
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
	span.style.color = "#606060";
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
	span.style.color = "#606060";
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
	a.className = "popupLink";
	a.onclick = function() { popupDoc( "https://rebrand.ly/LyndaCookies", 'cookies' ); };
	a.appendChild( document.createTextNode("Guide - How to add cookies for Lynda.com") );
	p.appendChild(a);
	lyndaPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(lyndaFlip);
	readme.appendChild(lyndaPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#lyndaFlip").click( function(){ $("#lyndaPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function microsoft( container ) {
	var microFlip = document.createElement("div");
	microFlip.id = "microFlip";
	microFlip.className = "flip";
	microFlip.style.padding = "5px";
	var span = document.createElement("span");
	var img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=microsoft.com";
	img.className = "panelIcon";
	img.alt = " ";
	span.appendChild(img);
	span.appendChild( document.createTextNode(" Microsoft Virtual Academy") );
	span.style.fontWeight = "bold";
	microFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	microFlip.appendChild(span);
	
	var microPan = document.createElement("div");
	microPan.id = "microPan";
	microPan.className= "panel";
	microPan.style.padding = "15px";
	
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("In order for you to participate in this training you will be required to have a Microsoft Account.") );
	microPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("You can use an existing Microsoft Account if you have one. You may have one and not know it. If you have a 'SkyDrive, Xbox Live, Outlook.com, Hotmail, Windows Live ID or other Microsoft Services' these are usually associated with a Microsoft Account.") );
	microPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode('If you do not have a Microsoft Account you can sign up for one. You will find instructions on how to do this ') );
	var a = document.createElement("a");
	a.href = "https://windows.microsoft.com/en-AU/windows-live/sign-up-create-account-how";
	a.appendChild( document.createTextNode("here") );
	a.style.textDecoration = "underline";
	a.style.fontWeight = "bold";
	p.appendChild(a);
	p.appendChild( document.createTextNode('. Alternatively you can sign up ') );
	a = document.createElement("a");
	a.href = "https://live.com/";
	a.appendChild( document.createTextNode("here") );
	a.style.textDecoration = "underline";
	a.style.fontWeight = "bold";
	p.appendChild(a);
	p.appendChild( document.createTextNode(' and follow the prompts.') );
	microPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Each topic of eLearning will have its own Learning Plan for you to follow.") );
	microPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Example:") );
	microPan.appendChild(p);
	p = document.createElement("p");
	img = document.createElement("img");
	img.src = "https://www.google.com/s2/favicons?domain=microsoft.com";
	img.className = "activityicon iconlarge";
	img.alt = " ";
	p.appendChild(img);
	p.style.color = "#808080";
	p.appendChild( document.createTextNode("eLearning - Topic Name Here") );
	microPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Most eLearning has an audio component You will find the experience better if you have speakers on your computer.") );
	p.appendChild( document.createElement('br') );
	p.appendChild( document.createTextNode("Tip - If you are in an office with others, it may be more appropriate to have a set of headphones.") );
	p.appendChild( document.createElement('br') );
	p.appendChild( document.createTextNode("These plug into the 'green' jack or socket on the back or front of the computer. If it is not green then it will have a picture of headphones next to the jack.") );
	microPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(microFlip);
	readme.appendChild(microPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#microFlip").click( function(){ $("#microPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function assessment( container ) {
	var assessmentFlip = document.createElement("div");
	assessmentFlip.id = "assessmentFlip";
	assessmentFlip.className = "flip";
	assessmentFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Assessments Explained") );
	span.style.fontWeight = "bold";
	assessmentFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	assessmentFlip.appendChild(span);
	
	var assessmentPan = document.createElement("div");
	assessmentPan.id = "assessmentPan";
	assessmentPan.className= "panel";
	assessmentPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("In this qualification course you will find many learning materials and assessments. All assessments that are required for you to complete this qualification are contained within your 'MyUpskilled' site.") );
	assessmentPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Assessments are identified by two distinct icons as seen in the diagram below.") );
	p.style.fontSize = "10pt";
	p.style.lineHeight = "1.5em";
	assessmentPan.appendChild(p);
	var table = document.createElement("table");
	var tr = document.createElement("tr");
	tr.style.height = "35px";
	var td = document.createElement("td");
	td.fontWeight = "bold";
	td.style.border = "none";
	td.appendChild( document.createTextNode("Sustainability") );
	tr.appendChild(td);
	td = document.createElement("td");
	td.style.border = "none";
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
	td.style.border = "none";
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
	td.style.border = "none";
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
	td.style.border = "none";
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
	td.style.border = "none";
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
	td.style.border = "none";
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
	td.style.border = "none";
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
	td.style.border = "none";
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
	td.style.border = "none";
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
	p.appendChild(img);
	p.appendChild(a);
	assessmentPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(assessmentFlip);
	readme.appendChild(assessmentPan);
	
	script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){	$("#assessmentFlip").click( function(){ $("#assessmentPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function rubric( container ) {
	var rubricFlip = document.createElement("div");
	rubricFlip.id = "rubricFlip";
	rubricFlip.className = "flip";
	rubricFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Assessment Rubrics File") );
	span.style.fontWeight = "bold";
	rubricFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	rubricFlip.appendChild(span);
	
	var rubricPan = document.createElement("div");
	rubricPan.id = "rubricPan";
	rubricPan.className= "panel";
	rubricPan.style.padding = "15px";
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
	a.className = "popupLink";
	a.onclick = function() { popupDoc( "https://rebrand.ly/assessRubric", 'rubric' ); };
	a.appendChild( document.createTextNode("How to Find the Assessment Rubric") );
	p.appendChild(a);
	rubricPan.appendChild(p);
	var script = document.createElement("script");
	script.src = "https://fast.wistia.com/embed/medias/z65qa5bhe5.jsonp";
	script.async = true;
	rubricPan.appendChild(script);
	script = document.createElement("script");
	script.src = "https://fast.wistia.com/assets/external/E-v1.js";
	script.async = true;
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
	a.appendChild( document.createTextNode("Quick Tip - How to Access Assessment Rubric <1 min") );
	div.appendChild(a);
	span.appendChild(div);
	rubricPan.appendChild(span);
	
	var readme = document.getElementById(container);
	readme.appendChild(rubricFlip);
	readme.appendChild(rubricPan);
	
	script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#rubricFlip").click( function(){ $("#rubricPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function grades( container ) {
	var gradesFlip = document.createElement("div");
	gradesFlip.id = "gradesFlip";
	gradesFlip.className = "flip";
	gradesFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Grades") );
	span.style.fontWeight = "bold";
	gradesFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	gradesFlip.appendChild(span);
	
	var gradesPan = document.createElement("div");
	gradesPan.id = "gradesPan";
	gradesPan.className= "panel";
	gradesPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("In the settings block on the left of the screen you will see a 'grades' link. This will take you to your grades for all of your assessments. Use this to check your progress and review any comments left by your teacher.") );
	gradesPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.appendChild( document.createTextNode("-") );
	span.style.fontWeight = "bold";
	p.appendChild(span);
	p.appendChild( document.createTextNode(" = This assessment has not yet been attempted or submitted or graded.") );
	gradesPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.appendChild( document.createTextNode("NR") );
	span.style.fontWeight = "bold";
	p.appendChild(span);
	p.appendChild( document.createTextNode(" = Not Required - Not often used, but you may see this from time to time, it is administrative and you can ignore it.") );
	gradesPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.appendChild( document.createTextNode("RPL") );
	span.style.fontWeight = "bold";
	p.appendChild(span);
	p.appendChild( document.createTextNode(" = Recognition of Prior Learning - You have been granted a credit based on prior learning you have undertaken.") );
	gradesPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.appendChild( document.createTextNode("NYC") );
	span.style.fontWeight = "bold";
	p.appendChild(span);
	p.appendChild( document.createTextNode(" = Not Yet Competent - You have not met the requirements yet, and will need to review feedback and resubmit.") );
	gradesPan.appendChild(p);
	p = document.createElement("p");
	span = document.createElement("span");
	span.appendChild( document.createTextNode("C") );
	span.style.fontWeight = "bold";
	p.appendChild(span);
	p.appendChild( document.createTextNode(" = Competent - You have met the requirements. This is your goal!") );
	gradesPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(gradesFlip);
	readme.appendChild(gradesPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#gradesFlip").click( function(){ $("#gradesPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function dev( container ) {
	var devFlip = document.createElement("div");
	devFlip.id = "devFlip";
	devFlip.className = "flip";
	devFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Foundations Course") );
	span.style.fontWeight = "bold";
	devFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	devFlip.appendChild(span);
	
	var devPan = document.createElement("div");
	devPan.id = "devPan";
	devPan.className= "panel";
	devPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("Upskilled has created a Foundations course to support you.") );
	devPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("This course is not part of your qualification course and will not be assessed in any way.") );
	devPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("We have created this course with basic modules of learning for those of you who would like to get a refresher on some basics or to just get into the swing of IT.") );
	devPan.appendChild(p);
	var div = document.createElement("div");
	var label = document.createElement("label");
	label.htmlFor = "devCheck";
	label.style.display = "inline";
	label.innerHTML = "Check the box to gain access the foundations course before beginning your course proper.";
	div.appendChild(label);
	var input = document.createElement("input");
	input.type = "checkbox";
	input.id = "devCheck";
	input.name = "devCheck";
	input.onclick = function(){ showCourse("dev"); };
	input.value = "off";
	input.style.display = "inline";
	div.appendChild(input);
	devPan.appendChild(div);
	div = document.createElement("div");
	div.id = "devCourse";
	div.style.display = "none";
	var br = document.createElement("br");
	div.appendChild(br);
	div.appendChild(br);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("") );
	div.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Copy this key first - ") );
	span = document.createElement("span");
	span.appendChild( document.createTextNode("2014DevFun") );
	span.style.fontWeight = "bold";
	p.appendChild(span);
	div.appendChild(p);
	var a = document.createElement("a");
	a.href = "https://lms.upskilled.edu.au/course/view.php?id=1176";
	a.target = "_blank";
	a.appendChild( document.createTextNode("Information Technology Development Foundations") );
	a.style.fontWeight = "bold";
	div.appendChild(a);
	devPan.appendChild(div);
	
	var readme = document.getElementById(container);
	readme.appendChild(devFlip);
	readme.appendChild(devPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#devFlip").click( function(){ $("#devPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function itif( container ) {
	var itifFlip = document.createElement("div");
	itifFlip.id = "itifFlip";
	itifFlip.className = "flip";
	itifFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Foundations Course") );
	span.style.fontWeight = "bold";
	itifFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	itifFlip.appendChild(span);
	
	var itifPan = document.createElement("div");
	itifPan.id = "itifPan";
	itifPan.className= "panel";
	itifPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("Upskilled has created a Foundations course to support you.") );
	itifPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("This course is not part of your qualification course and will not be assessed in any way.") );
	itifPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("We have created this course with basic modules of learning for those of you who would like to get a refresher on some basics or to just get into the swing of IT.") );
	itifPan.appendChild(p);
	var div = document.createElement("div");
	var label = document.createElement("label");
	label.htmlFor = "itifCheck";
	label.style.display = "inline";
	label.innerHTML = "Check the box to gain access the foundations course before beginning your course proper.";
	div.appendChild(label);
	var input = document.createElement("input");
	input.type = "checkbox";
	input.id = "itifCheck";
	input.name = "itifCheck";
	input.onclick = function(){ showCourse("itif"); };
	input.value = "off";
	input.style.display = "inline";
	div.appendChild(input);
	itifPan.appendChild(div);
	div = document.createElement("div");
	div.id = "itifCourse";
	div.style.display = "none";
	var br = document.createElement("br");
	div.appendChild(br);
	div.appendChild(br);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("") );
	div.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Copy this key first - ") );
	span = document.createElement("span");
	span.appendChild( document.createTextNode("2014ITIF") );
	span.style.fontWeight = "bold";
	p.appendChild(span);
	div.appendChild(p);
	var a = document.createElement("a");
	a.href = "https://lms.upskilled.edu.au/course/view.php?id=1175";
	a.target = "_blank";
	a.appendChild( document.createTextNode("Information Technology Development Foundations") );
	a.style.fontWeight = "bold";
	div.appendChild(a);
	itifPan.appendChild(div);
	
	var readme = document.getElementById(container);
	readme.appendChild(itifFlip);
	readme.appendChild(itifPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#itifFlip").click( function(){ $("#itifPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function workplace( container ) {
	var workplaceFlip = document.createElement("div");
	workplaceFlip.id = "workplaceFlip";
	workplaceFlip.className = "flip";
	workplaceFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Workplace Activities instead of Set Assessments?") );
	span.style.fontWeight = "bold";
	workplaceFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	workplaceFlip.appendChild(span);
	
	var workplacePan = document.createElement("div");
	workplacePan.id = "workplacePan";
	workplacePan.className= "panel";
	workplacePan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("In this qualification course you will find many learning materials and assessments.") );
	workplacePan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("You may find that some of the assessments we set are similar to activities you do at work.") );
	workplacePan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("If you believe that one of your workplace activities would be appropriate to submit as an assessment instead of completing the assessment listed in the cluster, then you are welcome to apply to submit your work activity as the assessment task. Most assignments or projects will have a 'Marking Guide' which you can use as a guide to the suitability of your workplace activity as a substitute assessment.") );
	workplacePan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("This is not a requirement, just an option for you if you want to use it.") );
	workplacePan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Download the 'Workplace Activity as Assessment' form, complete it and upload it for your teacher to approve.") );
	workplacePan.appendChild(p);
	var a = document.createElement("a");
	a.className = "popupLink";
	a.onclick = function() { popupDoc( 'https://rebrand.ly/workAssess', 'workAssess' ); };
	var img = document.createElement("img");
	img.src = "https://lms.upskilled.edu.au/theme/image.php?theme=ups&component=core&rev=1447640343&image=f%2Fdocument-24";
	img.className = "activityicon iconlarge";
	img.alt = "docx";
	a.appendChild(img);
	a.appendChild( document.createTextNode("Workplace Activity as Assessment") );
	workplacePan.appendChild(a);
	
	var readme = document.getElementById(container);
	readme.appendChild(workplaceFlip);
	readme.appendChild(workplacePan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#workplaceFlip").click( function(){ $("#workplacePan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function review( container ) {
	var reviewFlip = document.createElement("div");
	reviewFlip.id = "reviewFlip";
	reviewFlip.className = "flip";
	reviewFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Uploading Files for Teacher Review") );
	span.style.fontWeight = "bold";
	reviewFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	reviewFlip.appendChild(span);
	
	var reviewPan = document.createElement("div");
	reviewPan.id = "reviewPan";
	reviewPan.className= "panel";
	reviewPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("If you would like to upload development code to your teacher, this is the place to do it.") );
	reviewPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Please 'zip' your build directory into one file and upload using the link below. The size of the file can be no larger than 10MB.") );
	reviewPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("You can only upload one file at a time, hence combining your build directory into one compressed file. Once your teacher has reviewed your code, the link will be activated again to make it available for future use.") );
	reviewPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(reviewFlip);
	readme.appendChild(reviewPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#reviewFlip").click( function(){ $("#reviewPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function iot( container ) {
	var iotFlip = document.createElement("div");
	iotFlip.id = "iotFlip";
	iotFlip.className = "flip";
	iotFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Purchasing your Pi and kit") );
	span.style.fontWeight = "bold";
	iotFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	iotFlip.appendChild(span);
	
	var iotPan = document.createElement("div");
	iotPan.id = "iotPan";
	iotPan.className= "panel";
	iotPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("You have enrolled in the Certificate IV Information Technology - Internet of Things Specialisation.") );
	iotPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("This course has hardware requirements that you need to purchase to use in the course.") );
	iotPan.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("The details are as follows:") );
	p.appendChild( document.createElement("br") );
	p.appendChild( document.createTextNode("1 x Raspberry Pi 2 model B.  These are widely available through distributors in Australia or online stores, ensure it has an Australian plug on the power adapter included.") );
	p.appendChild( document.createElement("br") );
	p.appendChild( document.createTextNode("1 x 'Adeept' Raspberry Pi 2 kit available from Adeept's ebay store - ") );
	var a = document.createElement("a");
	a.href = "https://stores.ebay.com.au/Adeept?_trksid=p2047675.l2563";
	a.appendChild( document.createTextNode("https://stores.ebay.com.au/Adeept?_trksid=p2047675.l2563") );
	a.style.fontWeight = "bold";
	p.appendChild(a);
	p.appendChild( document.createTextNode(".") );
	iotPan.appendChild(p);
	
	p = document.createElement("p");
	p.appendChild( document.createTextNode("There are a number of kits available, ensure you purchase the 'RFID Starter Kit for Raspberry Pi 2 Model B/B+ Python with 40-Pin GPIO Board' as this is required for your assessments.") );
	p.appendChild( document.createElement("br") );
	p.appendChild( document.createTextNode("Order this as soon as possible so you are not waiting too long to get in to it.") );
	iotPan.appendChild(p);
	
	var readme = document.getElementById(container);
	readme.appendChild(iotFlip);
	readme.appendChild(iotPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#iotFlip").click( function(){ $("#iotPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function itsm( container ) {
	var itsmFlip = document.createElement("div");
	itsmFlip.id = "itsmFlip";
	itsmFlip.className = "flip";
	itsmFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Textbook Order Details") );
	span.style.fontWeight = "bold";
	itsmFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	itsmFlip.appendChild(span);
	
	var itsmPan = document.createElement("div");
	itsmPan.id = "itsmPan";
	itsmPan.className= "panel";
	itsmPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("For this qualification you will require continual access to the following text books.") );
	itsmPan.appendChild(p);
	var ul = document.createElement("ul");
	var li = document.createElement("li");
	p = document.createElement("p");
	p.appendChild( document.createTextNode("'Research Methods for Business Students' by Mark Saunders, Philip Lewis and Adrian Thornhill, (5th Ed) - ISBN-13: 978-0273716860") );
	li.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("The book is available to order in hard copy or as a downloadable e-book.") );
	li.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("There are many sources for this book at varying prices, so choose your best source of supply for your requirement.") );
	li.appendChild(p);
	ul.appendChild(li);
	itsmPan.appendChild(ul);
	
	var readme = document.getElementById(container);
	readme.appendChild(itsmFlip);
	readme.appendChild(itsmPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#itsmFlip").click( function(){ $("#itsmPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function itsus( container ) {
	var itsusFlip = document.createElement("div");
	itsusFlip.id = "itsusFlip";
	itsusFlip.className = "flip";
	itsusFlip.style.padding = "5px";
	var span = document.createElement("span");
	span.appendChild( document.createTextNode("Textbook Order Details") );
	span.style.fontWeight = "bold";
	itsusFlip.appendChild(span);
	span = document.createElement("span");
	span.appendChild( document.createTextNode(" (show/hide)") );
	itsusFlip.appendChild(span);
	
	var itsusPan = document.createElement("div");
	itsusPan.id = "itsusPan";
	itsusPan.className= "panel";
	itsusPan.style.padding = "15px";
	var p = document.createElement("p");
	p.appendChild( document.createTextNode("For this qualification you will require continual access to the following text books.") );
	itsusPan.appendChild(p);
	var ul = document.createElement("ul");
	var li = document.createElement("li");
	p = document.createElement("p");
	p.appendChild( document.createTextNode("'Greening Through IT - Information Technology for Environmental Sustainability' by Bill Tomlinson.") );
	li.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("The book is available to order in hard copy or as a downloadable e-book.") );
	li.appendChild(p);
	p = document.createElement("p");
	p.appendChild( document.createTextNode("Details are at: ") );
	var a = document.createElement("a");
	a.href = "http://mitpress-ebooks.mit.edu/product/greening-through";
	a.appendChild( document.createTextNode("http://mitpress-ebooks.mit.edu/product/greening-through") );
	a.style.fontWeight = "bold";
	p.appendChild(a);
	li.appendChild(p);
	ul.appendChild(li);
	itsusPan.appendChild(ul);
	
	var readme = document.getElementById(container);
	readme.appendChild(itsusFlip);
	readme.appendChild(itsusPan);
	
	var script = document.createElement("script");
	script.innerHTML = '$(document).ready( function(){ $("#itsusFlip").click( function(){ $("#itsusPan").slideToggle("fast"); } );} );';
	readme.appendChild(script);
}

function courseStream( course ) {
	var stream = "none";
	switch(course) {
		case "ICT50115":
			stream = "itif";
			break;
		case "ICT50215":
			stream = "dev";
			break;
		case "ICT50315":
			stream = "itif";
			break;
		case "ICT50415":
			stream = "itif";
			break;
		case "ICT50515":
			stream = "dev";
			break;
		case "ICT50615":
			stream = "dev";
			break;
		case "ICT50715":
			stream = "dev";
			break;
		case "ICT50815":
			stream = "dev";
			break;
		case "ICT50915":
			stream = "dev";
			break;
	}
	return stream;
}

function containsReview( course ) {
	var result = false;
	switch(course) {
		case "ICT40515":
			result = true;
			break;
		case "ICT40315":
			result = true;
			break;
		case "ICT40915":
			result = true;
			break;
		case "ICT50215":
			result = true;
			break;
		case "ICT50515":
			result = true;
			break;
		case "ICT50615":
			result = true;
			break;
		case "ICT50715":
			result = true;
			break;
	}
	return result;
}

// format for single quals:
// [COURSE CODE] [QUAL LEVEL] in/of [QUAL TITLE] [START DATE]
// for dual quals:
// [COURSE CODE] [QUAL LEVEL] in/of [QUAL TITLE] -/with [COURSE CODE] [QUAL LEVEL] in/of [QUAL TITLE] [START DATE]
// regex to match all test cases: (Dual )?((ICT[0-9]{5}) (\w+) (\w+ )?(in|of) ([ ,\w()]+?) ((- )|(with ))?){1,2}(([0-9]{6})|((Template )?v[0-9]_[0-9]))

/* TEST CASES:
ICT40115 Certificate IV in Information Technology 201709
ICT40115 Certificate IV in Information Technology Template v2_2
ICT40115 Certificate IV in Information Technology (IoT) 201709
ICT40115 Certificate IV in Information Technology (IoT) Template v2_2
ICT60115 Advanced Diploma of Information Technology 201709
ICT60115 Advanced Diploma of Information Technology Template v2_2
ICT10115 Certificate I in Information, Digital Media and Technology 201805
ICT10115 Certificate I in Information, Digital Media and Technology Template v2_2
ICT20115 Certificate II in Information, Digital Media and Technology 201805
ICT20115 Certificate II in Information, Digital Media and Technology v2_2
ICT50315 Diploma of Information Technology Systems Administration 201709
ICT50315 Diploma of Information Technology Systems Administration Template v2_2
ICT50315 Diploma of Information Technology Networking 201709
ICT50315 Diploma of Information Technology Networking Template v2_2
Dual ICT40415 Certificate IV in Computer Systems Technology with ICT40215 Certificate IV in Information Techology Support 201709
Dual ICT40415 Certificate IV in Computer Systems Technology with ICT40215 Certificate IV in Information Techology Support Template v2_2
Dual ICT50415 Diploma of Information Technology Networking - ICT50315 Diploma of Information Technology Systems Administration 201709
Dual ICT50415 Diploma of Information Technology Networking - ICT50315 Diploma of Information Technology Systems Administration Template v2_2
*/

function splitQual( qualTitle ) {
	var code = qualTitle.substring( 0, qualTitle.indexOf(' ') ).trim();
	var level = qualTitle.substring( qualTitle.indexOf(' ') + 1, qualTitle.search(/ in | of /) ).trim();
	var title = qualTitle.substring( qualTitle.search(/( in )|( of )/) + 4, qualTitle.lastIndexOf(' ') ).trim();
	var start = qualTitle.substring( qualTitle.lastIndexOf(' ') + 1 ).trim();
	return [code, level, title, start];
}

// Simply call insertReadme() once, after defining .
// It will use the course title to detect what readme elements are necessary
// and then insert them into the 
function insertReadmeMR() {
	var dom = document.getElementById("dom");
	var domTitle = document.title;
	var courseTitle = domTitle.match(/(Dual )?((ICT[0-9]{5}) (\w+) (\w+ )?(in|of) ([ ,\w()]+?) ((- )|(with ))?){1,2}(([0-9]{6})|((Template )?v[0-9]_[0-9]))/g);
	var split;
	
	if( courseTitle != null ) {
		// title fits the format
		if( courseTitle[0].startsWith("Dual") ) {
			// it's a dual qual
			var firstQual = courseTitle[0].substring( 5, courseTitle[0].search(/with|-/) );
			var secondQual = courseTitle[0].substring( courseTitle[0].search(/with|-/) );
			secondQual = secondQual.substring( secondQual.indexOf(' ') ).trim();
			var firstSplit = splitQual( firstQual.concat( secondQual.substring( secondQual.lastIndexOf(' ') ).trim() ) );
			var secondSplit = splitQual( secondQual );
			split = [firstSplit, secondSplit];
		} else {
			// it's a single qual
			split = splitQual(courseTitle[0]);
		}
	}
	
	var section = document.getElementsByClassName("sectionname");
	var parent = null;
	for( var i = 0; i < section.length; i++ ) {
		if( section[i].innerHTML === "Read Me First!" ) {
			parent = section[i].parentElement.parentElement;
		}
	}
	var contentList = null;
	if( parent != null ) {
		contentList = parent.getElementsByClassName("section")[0];
	}
	
	if( contentList != null ) {
		var li = document.createElement("li");
		li.className = "snap-extended-resource snap-asset activity label modtype_label";
		li.id = "readme_main";
		var workplaceActivity = contentList.getElementsByClassName("assign")[0];
		contentList.insertBefore( li, workplaceActivity );
		if( split.length > 2 ) {
			// SINGLE QUAL
			// add iot raspberry pi/grad cert textbooks
			if( split[0] === 'ICT40115' && split[2].includes('(IoT)') ) {
				iot("readme_main");
			}
			if( split[0] === "ICT80115" ) {
				itsm("readme_main");
			} else if( split[0] === "ICT80215" ) {
				itsus("readme_main");
			}
			//regular readme stuff for all courses
			pluralsight("readme_main");
			lynda("readme_main");
			microsoft("readme_main");
			assessment("readme_main");
			rubric("readme_main");
			grades("readme_main");
			// decide if course is dev/itif
			if( courseStream(split[0]) === "dev" ) {
				dev("readme_main");
			} else if( courseStream(split[0]) === "itif" ) {
				itif("readme_main");
			}
			workplace("readme_main");
			// include code review if necessary
			if( containsReview(split[0]) ) {
				li = document.createElement("li");
				li.className = "snap-extended-resource snap-asset activity label modtype_label";
				li.id = "readme_second";
				var codeReview = contentList.getElementsByClassName("assign")[1];
				contentList.insertBefore( li, codeReview );
				review("readme_second");
			}
		} else {
			// DUAL QUAL
			// add iot raspberry pi/grad cert textbooks
			if( ( split[0][0] === "ICT40115" && split[0][2].includes("(IoT)") ) || ( split[1][0] === "ICT40115" && split[1][2].includes("(IoT)") ) ) {
				iot("readme_main");
			}
			if( ( split[0][0] === "ICT80115" ) || ( split[1][0] === "ICT80115" ) ) {
				itsm("readme_main");
			} else if ( ( split[0][0] === "ICT80215" ) || ( split[1][0] === "ICT80215" ) ) {
				itsus("readme_main");
			}
			pluralsight("readme_main");
			lynda("readme_main");
			microsoft("readme_main");
			assessment("readme_main");
			rubric("readme_main");
			grades("readme_main");
			// decide if course is dev/itif
			if( ( courseStream(split[0][0]) === "dev" ) && ( courseStream(split[1][0]) === "dev" ) ) {
				dev("readme_main");
			} else if( ( courseStream(split[0][0]) === "itif" ) && ( courseStream(split[1][0]) === "itif" ) ) {
				itif("readme_main");
			}
			workplace("readme_main");
			li = document.createElement("li");
			li.className = "snap-extended-resource snap-asset activity label modtype_label";
			li.id = "readme_second";
			contentList.appendChild(li);
			// include code review if necessary
			if( containsReview(split[0][0]) && containsReview(split[1][0]) ) {
				review("readme_second");
			}
		}
	}
}
