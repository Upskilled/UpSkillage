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

// *** Fix for displaying documents in a popup window
var anchors = document.getElementsByTagName('a');
for( var i = 0; i < anchors.length; i++ ) {
	if( anchors[i].classList.contains('popupLink') ) {
		// Clone to remove event listeners and add needed onclick action
		var newAnchor = anchors[i].cloneNode(true);
		newAnchor.onclick = function(){ return popupWindow( this, 'Popup Window' ); };
		anchors[i].parentNode.replaceChild( newAnchor, anchors[i] );
	}
}
var script = document.createElement('script');
script.defer = true;
script.async = true;
script.innerHTML = "var anchors = document.getElementsByTagName('a'); for( var i = 0; i < anchors.length; i++ ) { if( anchors[i].classList.contains('popupLink') ) { var newAnchor = anchors[i].cloneNode(true); newAnchor.onclick = function(){ return popupWindow( this, 'Popup Window' ); }; anchors[i].parentNode.replaceChild( newAnchor, anchors[i] ); } }";
document.body.appendChild(script);

// *** LiveChat code ***

// Support livechat across the board, whole site.
//console.log(document.URL);
var url = document.URL;
if( url.startsWith('http://34.75.151.180/courses') || url.startsWith('https://34.75.151.180/courses') ) {
	window.__lc = window.__lc || {};
	window.__lc.license = 2673501;
	window.__lc.chat_between_groups = false;
	window.__lc.group = 2;

	(function() {
		var lc = document.createElement('script');
		lc.type = 'text/javascript';
		lc.async = true;
		lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(lc, s);
	})();

	// Manual method of generating a second chat window
	var path = document.createElement('path');
	path.d = 'M14,25.5 C12.4,25.5 10.8,25.2 9.4,24.7 L4.5,27.5 L4.5,21.9 C2,19.6 0.5,16.5 0.5,13 C0.5,6.1 6.5,0.5 14,0.5 C21.5,0.5 27.5,6.1 27.5,13 C27.5,19.9 21.5,25.5 14,25.5 L14,25.5 Z M9,11.5 C8.2,11.5 7.5,12.2 7.5,13 C7.5,13.8 8.2,14.5 9,14.5 C9.8,14.5 10.5,13.8 10.5,13 C10.5,12.2 9.8,11.5 9,11.5 L9,11.5 Z M14,11.5 C13.2,11.5 12.5,12.2 12.5,13 C12.5,13.8 13.2,14.5 14,14.5 C14.8,14.5 15.5,13.8 15.5,13 C15.5,12.2 14.8,11.5 14,11.5 L14,11.5 Z M19,11.5 C18.2,11.5 17.5,12.2 17.5,13 C17.5,13.8 18.2,14.5 19,14.5 C19.8,14.5 20.5,13.8 20.5,13 C20.5,12.2 19.8,11.5 19,11.5 L19,11.5 Z';

	var g2 = document.createElement('g');
	g2.fill = '#ffffff';
	g2.appendChild(path);

	var g = document.createElement('g');
	g.stroke = 'none';
	g.stroke.width = 1;
	g.fill = 'none';
	g.fill.rule = 'evenodd';
	g.appendChild(g2);

	var svg = document.createElement('svg');
	svg.id = 'chatInnerBubble';
	svg.width = '28px';
	svg.height = '28px';
	svg.viewBox = '0 0 28 28';
	svg.class = 'lc-svg';
	svg.style = 'position: absolute; top: 16px; right: 16px;';
	svg.appendChild(g);

	var div2 = document.createElement('div');
	div2.id = 'chatBubble';
	div2.classList = 'lc-max';
	div2.onclick = toggleLC();
	div2.title = 'Ask a Trainer';
	div2.appendChild(svg);

	var iframe = document.createElement('iframe');
	iframe.id = 'chatIframe';
	iframe.classList = 'lc-min';
	iframe.src = 'https://lc.chat/now/2673501/4';
	iframe.appendChild( document.createTextNode('LiveChat') );

	var div3 = document.createElement('div');
	div3.id = 'chatMinimise';
	div3.onclick = toggleLC();
	div3.title = 'Minimise chat window';

	var div = document.createElement('div');
	div.id = 'chatContainer';
	div.classList = 'lc-min';
	div.appendChild(div2);
	div.appendChild(iframe);
	div.appendChild(div3);
	document.getElementsByTagName('body')[0].appendChild(div);
}

// End of LiveChat code