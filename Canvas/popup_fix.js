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