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

// MK2 version of video popup, re-written for better loading
// Removes the creation of the video content from when the page is loaded
// to when the link is clicked
// Creates an iframe as an in-browser popup
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
			content.style = "width: 1280px; height: 720px; border:none;";
			content.src = iframeSrc;
			content.setAttribute('allowfullScreen', '');
			content.setAttribute('mozallowfullScreen', '');
			content.setAttribute('webkitallowfullScreen', '');
			container.appendChild(content);
			document.getElementById(givenName).appendChild(container);

			exit.onclick = function() {
				// Hide the content
				container.style.display = "none";
				content.style.display = "none";
				content.src = content.src;
			}
		}

		// Display the content
		container.style.display = "block";
		content.style.display = "block";
	}

}

// Insert external css stylesheet
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.id = "UpskillStyle";
link.href = "https://skeksalot.github.io/UpSkillage/styles.css";
// Only include stylesheet once
if ( document.getElementById("UpskillStyle") == null ) {
	document.head.appendChild(link);
}