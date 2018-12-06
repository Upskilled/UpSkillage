// Removes the generic Moodle footer info that messes with our custom footer.
var links = document.getElementsByTagName('link');
for( var i = 0; i < links.length; i++ ) {
	if( links[i].rel === 'shortcut icon' ) {
		links[i].href = 'https://upskilled-sandbox.mrooms.net/pluginfile.php/1/tool_themeassets/assets/0/favicon.ico';
	}
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
	icon.classList = "iconlarge activityicon";
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
			//content.style = "width: 75%; height: 75%; min-width: 640px; min-height: 360px; border:none;";
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
				alert('Esc key pressed');
			}
			document.getElementById(givenName).onkeyup = function(e) {
				// Hide the content (esc key)
				if( e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27 ) {
					container.style.display = "none";
					content.style.display = "none";
					content.src = content.src;
				}
			}
			exit.onkeyup = function(e) {
				// Hide the content (esc key)
				if( e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27 ) {
					container.style.display = "none";
					content.style.display = "none";
					content.src = content.src;
				}
			}
			content.onkeyup = function(e) {
				// Hide the content (esc key)
				if( e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27 ) {
					container.style.display = "none";
					content.style.display = "none";
					content.src = content.src;
				}
			}
			container.onkeyup = function(e) {
				// Hide the content (esc key)
				if( (e.key == 'Escape') || (e.key == 'Esc') || (e.keyCode == 27) ) {
					container.style.display = "none";
					content.style.display = "none";
					content.src = content.src;
				}
			}
		}
		
		// Display the content
		container.style.display = "block";
		content.style.display = "block";
		container.focus();
	}
	
}

/* TESTING METHODOLOGIES FOR FOOTER
var footer = document.getElementById('page-footer');
var page = document.getElementById('page');

var shell = document.createElement('div');
shell.classList = 'span9 footer-shell';

var div = document.createElement('div');
div.classList = 'span3 footer-ups-logo';
var a = document.createElement('a');
a.href = 'https://upskilled-sandbox.mrooms.net';
var img = document.createElement('img');
img.src = 'https://upskilled-sandbox.mrooms.net/pluginfile.php/1/tool_themeassets/assets/0/upskilled-logo-footer.png';
img.alt = 'Upskilled Logo';
a.appendChild(img);
div.appendChild(a);
shell.appendChild(div);

div = document.createElement('div');
div.classList = 'span3 social-networks-outer';
var ul = document.createElement('ul');
ul.classList = 'social-networks';
var li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://www.facebook.com/Upskilled';
a.target = '_blank';
a.classList = 'fa fa-facebook social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://twitter.com/#!/upskilled';
a.target = '_blank';
a.classList = 'fa fa-twitter social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://www.linkedin.com/company/upskilled';
a.target = '_blank';
a.classList = 'fa fa-linkedin social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'https://www.instagram.com/upskilled/';
a.target = '_blank';
a.classList = 'fa fa-instagram social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'https://www.pinterest.com/upskilled/';
a.target = '_blank';
a.classList = 'fa fa-pinterest social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://www.youtube.com/user/UpSkilledTV';
a.target = '_blank';
a.classList = 'fa fa-youtube social-ico';
li.appendChild(a);
ul.appendChild(li);
div.appendChild(ul);
shell.appendChild(div);


div = document.createElement('div');
div.classList = 'span3 footer-copyright';
var div2 = document.createElement('div');
div2.appendChild( document.createTextNode( '© Upskilled Pty Ltd 2018. All rights reserved.' ) );
div.appendChild(div2);
div2 = document.createElement('div');
a = document.createElement('a');
a.href = 'https://upskilled-kentico-prod.azurewebsites.net/terms-and-conditions';
a.classList = 'footer-copyright-link';
a.appendChild( document.createTextNode( 'Terms &amp; Conditions' ) );
div2.appendChild(a);
var span = document.createElement('span');
span.appendChild( document.createElement( ' | ' ) );
div2.appendChild(span);
a = document.createElement('a');
a.href = 'https://upskilled-kentico-prod.azurewebsites.net/upskilled-policies';
a.classList = 'footer-copyright-link';
a.appendChild( document.createTextNode( 'Upskilled Policies' ) );
div2.appendChild(a);
span = document.createElement('span');
span.appendChild( document.createElement( ' | RTO No 40374 | ABN: 14 125 906 676' ) );
div2.appendChild(span);
div.appendChild(div2);
shell.appendChild(div);

footer.appendChild( shell );

body.appendChild( document.createTextNode( 'THIS IS TEST TEXT' ) );
*/