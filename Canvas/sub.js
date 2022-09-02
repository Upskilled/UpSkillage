// Course pages with the nav links (everything within a course).
regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}/i;
if( document.URL.search(regex) > -1 ) {
	// Customised course nav links functionality.
	customiseCourseNavLinks();
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
			// Adding the title on top.
			var title = document.createElement('li');
			title.classList.add('section');
			title.style = "padding: 8px 0 8px 6px; color: #2c2c36; font-style: italic; word-wrap: break-word; hyphens: none; line-height: 1.3;";
			title.innerHTML = 'Unit Menu';
			nav.prepend(title);
			// Rename 'modules' to 'contents'.
			var modulesLink = nav.querySelector('.modules');
			modulesLink.innerHTML = 'Contents';
			// Rename 'marks' to 'grades'.
			var marksLink = nav.querySelector('.grades');
			marksLink.innerHTML = 'Grades';
			// Success, cancel the repetition.
			clearInterval(interval);
		}
	}, 200 );
}