/* ***** Begin Function Definitions ***** */

// Opens a linked document in a popup window
// Deprecated but still included for legacy links being brought across into new platform
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

// Opens a link in a popup window
// Renamed for more general use within canvas
function popupWin( mylink, windowname ) {
	if( !window.focus ) {
		return true;
	}
	var href;
	if( typeof(mylink) === 'string' ) {
		href = mylink;
	} else {
		href = mylink.href;
	}
	window.open( href, windowname, 'width=960,height=720,scrollbars=yes' );
	return false;
}

// Based on MK2 version of video popup
// Creates an iframe as an in-browser popup (modal)
function popupVid( givenName, iframeSrc, iconSrc ) {
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
	icon.alt = "";
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
				// Hide the content
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

// Function to minimise and maximise the trainer chat
function toggleLC() {
	if( document.getElementById('chatIframe') == null ) {
		return;
	}
	if( document.getElementById('chatIframe').classList.contains('lc-min') ) {
		// Maximise
		document.getElementById('chatContainer').classList.replace('lc-min', 'lc-max');
		document.getElementById('chatIframe').classList.replace('lc-min', 'lc-max');
		document.getElementById('chatBubble').classList.replace('lc-max', 'lc-min');
		document.getElementById('chatMinimise').style.display = 'block';
		document.getElementById('chatInnerBubble').style.display = 'none';
	} else {
		// Minimise
		document.getElementById('chatContainer').classList.replace('lc-max', 'lc-min');
		document.getElementById('chatIframe').classList.replace('lc-max', 'lc-min');
		document.getElementById('chatBubble').classList.replace('lc-min', 'lc-max');
		document.getElementById('chatMinimise').style.display = 'none';
		document.getElementById('chatInnerBubble').style.display = 'block';
	}
}

/* ***** Direct Code ***** */

// *** Fix for Canvas stripping out scripts
// Include displaying documents in a popup window
// var anchors = document.getElementsByTagName('a');
// for( var i = 0; i < anchors.length; i++ ) {
// 	if( anchors[i].classList.contains('popupLink') ) {
// 		// Clone to remove event listeners and add needed onclick action
// 		var newAnchor = anchors[i].cloneNode(true);
// 		newAnchor.onclick = function(){ return popupWin( this, 'Popup Window' ); };
// 		anchors[i].parentNode.replaceChild( newAnchor, anchors[i] );
// 	}
// }
// var vids = document.getElementsByClassName('popupVid');
// for( var i = 0; i < vids.length; i++ ) {
// 	if( ( vids[i].getAttribute('data-iframe').length > 0 ) && ( vids[i].getAttribute('data-iframe').length > 0 ) ) {
// 		// Call the popupVid function to handle adding content
// 		vids[i].innerHTML = '';
// 		popupVid( vids[i].id, vids[i].getAttribute('data-iframe'), vids[i].getAttribute('data-icon') );
// 	}
// }
// Needs to be delayed till page load to apply to all relevant links
window.onload = function() {
	var script = document.createElement('script');
	script.defer = true;
	script.async = true;
	script.innerText = "var anchors = document.getElementsByTagName('a');" +
	"for( var i = 0; i < anchors.length; i++ ) {" +
		"if( anchors[i].classList.contains('popupLink') ) {" +
			"var newAnchor = anchors[i].cloneNode(true);" +
			"newAnchor.onclick = function(){ return popupWin( this, 'Popup Window' ); };" +
			"anchors[i].parentNode.replaceChild( newAnchor, anchors[i] );" +
	"} }" +
	"var vids = document.getElementsByClassName('popupVid');" +
	"for( var i = 0; i < vids.length; i++ ) {" +
		"if( ( vids[i].getAttribute('data-iframe').length > 0 ) && ( vids[i].getAttribute('data-iframe').length > 0 ) ) {" +
			"vids[i].innerHTML = '';" +
			"popupVid( vids[i].id, vids[i].getAttribute('data-iframe'), vids[i].getAttribute('data-icon') );" +
	"} }";
	document.body.appendChild(script);
};

/* H5P Resize script */
var h5pScript = document.createElement('script');
h5pScript.setAttribute('charset', 'UTF-8');
h5pScript.setAttribute('src', 'https://h5p.com/canvas-resizer.js');
document.body.appendChild(h5pScript);
