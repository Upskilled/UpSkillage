function popup( mylink, windowname ) {
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

function setCookie( cname, cvalue, exdays ) {
	var d = new Date();
	d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";path=/";
}

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