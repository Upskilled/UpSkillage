////////////////////////////////////////////////////
// DESIGN TOOLS MOBILE APP                        //
////////////////////////////////////////////////////
// Copyright (C) 2017  Utah State University
(function () {
    function loadScript(url, scriptID, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.id = scriptID;
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    var today = new Date(),
        appScript = document.getElementById('dt_app_script');
    if (appScript === null && window.jQuery === undefined) {
        loadScript("https://designtools.ciditools.com/js/tools_liveView_app.js?" + today.getDate(), 'dt_app_script', function () {
             console.log('Global App Stylesheet Ran');
        });
    }
})();
////////////////////////////////////////////////////
// END DESIGN TOOLS CODE                          //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// LTI Iframe Embed Hack                          //
////////////////////////////////////////////////////

// Check if page is within an iframe or not (or cross-origin, which is blocked anyway)
var frame = window.frameElement;
console.log(frame);
if( frame != null ) {
//console.log( frame.src.search(/upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/modules\/items\/[0-9]{1,}/i) );
//console.log( frame.baseURI.search(/upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/pages\//i) );
// Enforce rules to identify if this iframe is an LTI Tool embedded in a content page. 
	if( ( frame.src.search(/upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/modules\/items\/[0-9]{1,}/i) > -1 && ( frame.baseURI.search(/upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/pages\//i) > -1 ) || ( frame.baseURI.search(/upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/assignments\//i) > -1 ) || ( frame.baseURI.search(/upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/quizzes\//i) > -1 ) ) || frame.classList.contains('lti-iframe') ) {
		// Remove course nav
		document.getElementById('left-side').style.display = 'none';
		document.getElementById('main').style.marginLeft = '0';
		// Remove top breadcrumbs
		document.getElementsByClassName('ic-app-nav-toggle-and-crumbs no-print')[0].style.display = 'none';
		// Remove main site navbar
		document.getElementById('header').style.display = 'none';
		document.getElementById('wrapper').style.marginLeft = '0';
		// Remove responsive navigation
		document.getElementById('mobile-header').style.display = 'none';
		// Remove scrollbar
		document.body.style.overflow = 'hidden';
		// Remove Student view alert bar
		document.getElementById('masquerade_bar').style.display = 'none';
		// Notifications and popups?
	}
}

//////////////////////////////////////////////////////
// Page filtering and function calls				//
//////////////////////////////////////////////////////

// Pages with content (pages, modules).
// TODO assessments, quizzes, discussions to be added.
// TODO include front page here too.
var regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/((modules\/items\/[0-9]{1,})|(pages\/[a-zA-Z0-9#_-]{1,}))/i;
if( document.URL.search(regex) > -1 ) {
	// Thread functionality.
	$(document).ready(updateThreadTop);
	window.addEventListener( 'resize', updateThreadTop );
	// Next button functionality.
	linkNextButton();
	// Link popup functionality
	setTimeout( linkInPopupWindow, 3000 );
}

// Course pages with the nav links (everything within a course).
regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}/i;
if( document.URL.search(regex) > -1 ) {
	// Customised course nav links functionality.
	// customiseCourseNavLinks();
}

// Course front page only.
regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[a-zA-Z0-9#_-]{0,}$/i;
if( document.URL.search(regex) > -1 ) {
	// Start here button functionality.
	startHereClick();
	// Link popup functionality
	setTimeout( linkInPopupWindow, 3000 );
}

//////////////////////////////////////////////////////
// Thread size and positioning						//
//////////////////////////////////////////////////////

function updateThreadTop() {
	// This only applies to the specified themes and when using the thread.
	var content = document.querySelector('#kl_wrapper_3.kl_ups_current.with_thread');
	
	// Check that elements exist as we go.
	if( content ) {
		var banner = content.querySelector('.kl_banner_wrapper');
		var nav = content.querySelector('#kl_navigation');
		var progress = content.querySelector('[class*="kl_progress"]').parentElement;

		var top = 0;
		// Add on the element heights as needed.
		if( banner ) {
			top += banner.clientHeight;
		}
		if( nav ) {
			// Include the margin below the navbar too.
			top += nav.clientHeight + 20;
		}
		// Assuming the progress bar is at the top of the page.
		if( progress ) {
			top += progress.clientHeight;
		}
	}
	// Only set the top if it's more thant 0.
	if( top > 0 ) {
		content.style.setProperty( '--dt-thread-top', top + 'px' );
	}
}

//////////////////////////////////////////////////////
// Course Nav Links customisation					//
//////////////////////////////////////////////////////

function customiseCourseNavLinks() {
	// Set interval to repeat until success.
	var interval = setInterval( function() {
		// Pick out the left course navigation.
		var nav = document.querySelector('#left-side ul#section-tabs');
		if(nav) {
			var title = document.createElement('li');
			title.classList.add('section');
			title.style = "padding: 8px 0 8px 6px; color: #2c2c36; font-style: italic; word-wrap: break-word; hyphens: none; line-height: 1.3;";
			title.innerHTML = 'Unit Menu';
			nav.prepend(title);
			// Success, cancel the repetition.
			clearInterval(interval);
		}
	}, 200 );
}

//////////////////////////////////////////////////////
// 'Start here' nav link click						//
//////////////////////////////////////////////////////

function startHereClick() {
	// Set interval to repeat until success.
	var interval = setInterval( function() {
		// Relies on the 'Start Here' link and the expander being marked by ID.
		var link = document.querySelector('#kl_wrapper_3.kl_flat_sections_main #kl_navigation li a#start_here, #kl_wrapper_3.kl_ups_current #kl_navigation li a#start_here');
		// Only want the first heading in the intro expander.
		var intro = document.querySelector('#kl_wrapper_3.kl_flat_sections_main #kl_unit_prerequisites .kl_panels_wrapper > .kl_panel_heading, #kl_wrapper_3.kl_ups_current #kl_unit_prerequisites .kl_panels_wrapper > .kl_panel_heading');
		if( link && intro ) {
			link.setAttribute( 'href', '#' + intro.id );
			// Success, cancel the repetition.
			clearInterval(interval);
		}
	}, 200 );
}

//////////////////////////////////////////////////////
// Custom next button								//
//////////////////////////////////////////////////////

function linkNextButton() {
	// Set interval to repeat until success.
	var interval = setInterval( function() {
		// Pick out our next button and the default Canvas one.
		var nextAll = document.querySelectorAll('#kl_wrapper_3.kl_ups_current a#next-button');
		var canvasNext = document.querySelector('#content .module-sequence-footer-button--next a');
		// Check for both elements before acting.
		if( ( nextAll.length > 0 ) && canvasNext ) {
			nextAll.forEach( function(next) {
				// Set the custom next button link to the same location.
				next.href = canvasNext.href;
				// Leverage Canvas' button again for the button text.
				var text = document.querySelector('#content #' + canvasNext.getAttribute('aria-describedby'));
				if(text) {
					// Replace the text only.
					var tempText = next.innerHTML.substring( next.innerHTML.indexOf('<') );
					next.innerHTML = text.innerHTML + tempText;
				}
			});
			// Success, cancel the repetition.
			clearInterval(interval);
		}
	}, 200 );
}

//////////////////////////////////////////////////////
// Popup window on links							//
//////////////////////////////////////////////////////

// TODO investigate this on mobile.
function linkInPopupWindow() {
	// Find any links specified as a popup.
	var links = document.querySelectorAll('#kl_wrapper_3 a[target="popup"]');
	// Add an eventlistener to each.
	links.forEach( function(link) {
		link.classList.add('popup-created');
		link.addEventListener('click', function() {
			console.log(this.href);
			window.open(this.href, 'popup', 'location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no,height=900,width=720');
			return false;
		});
	});
}