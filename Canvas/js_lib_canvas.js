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
function popupWindow( mylink, windowname ) {
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

// *** Fix for 
// Include displaying documents in a popup window, livechat toggle
// var anchors = document.getElementsByTagName('a');
// for( var i = 0; i < anchors.length; i++ ) {
// 	if( anchors[i].classList.contains('popupLink') ) {
// 		// Clone to remove event listeners and add needed onclick action
// 		var newAnchor = anchors[i].cloneNode(true);
// 		newAnchor.onclick = function(){ return popupWindow( this, 'Popup Window' ); };
// 		anchors[i].parentNode.replaceChild( newAnchor, anchors[i] );
// 	}
// }
// document.getElementById('chatBubble').onclick = function(){ return toggleLC(); };
// document.getElementById('chatMinimise').onclick = function(){ return toggleLC(); };
// Needs to be delayed till page load to apply to all relevant links
window.onload = function() {
	// PopupWindow fix
	var script = document.createElement('script');
	script.defer = true;
	script.async = true;
	script.innerText = "var anchors = document.getElementsByTagName('a');" +
	"for( var i = 0; i < anchors.length; i++ ) {" +
		"if( anchors[i].classList.contains('popupLink') ) {" +
			"var newAnchor = anchors[i].cloneNode(true);" +
			"newAnchor.onclick = function(){ return popupWindow( this, 'Popup Window' ); };" +
			"anchors[i].parentNode.replaceChild( newAnchor, anchors[i] ); } }";
	document.body.appendChild(script);
};