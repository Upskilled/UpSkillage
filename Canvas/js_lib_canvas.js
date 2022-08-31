////////////////////////////////////////////////////
// DESIGN TOOLS CONFIG                            //
////////////////////////////////////////////////////
// Copyright (C) 2017  Utah State University
var DT_variables = {
	iframeID: '',
	// Path to the hosted USU Design Tools
	path: 'https://designtools.ciditools.com/',
	templateCourse: '648',
	// OPTIONAL: Button will be hidden from view until launched using shortcut keys
	hideButton: false,
	 // OPTIONAL: Limit by course format
	 limitByFormat: false, // Change to true to limit by format
	 // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	 formatArray: [
		'online',
		'on-campus',
		'blended'
	],
	// OPTIONAL: Limit tools loading by users role
	limitByRole: false, // set to true to limit to roles in the roleArray
	// adjust roles as needed
	roleArray: [
		'student',
		'teacher',
		'admin'
	],
	// OPTIONAL: Limit tools to an array of Canvas user IDs
	limitByUser: true, // Change to true to limit by user
	// add users to array (Canvas user ID not SIS user ID)
	userArray: [
		'106', // Ben Grigor
		'110', // Andrew Skeklios
		'152', // Travis Hackett
		'4072' // Tim Praill
	],
	 // OPTIONAL: Relocate Ally alternative formats dropdown and hide heading
	 overrideAllyHeadings: false,
	 // OPTIONAL: Make assignment rubrics sortable
	 sortableRubrics: true,
	 // OPTIONAL: Transform people page ina course to show student cards
	 showStudentCards: true
};

// Run the necessary code when a page loads
$(document).ready(function () {
'use strict';
// This runs code that looks at each page and determines what controls to create
$.getScript(DT_variables.path + 'js/master_controls.js', function () {
	console.log('master_controls.js loaded');
});
});
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// START CUSTOM FOOTER LINKS                      //
////////////////////////////////////////////////////

var year = new Date().getFullYear();
$('.with-right-side #wrapper #main').append('<footer role="contentinfo" id="upskilled-footer" class="ic-app-footer"><div id="footer-links" class="ic-app-footer__links"><span>Â© Upskilled Pty Ltd ' + year + '. All rights reserved. <a href="https://www.upskilled.edu.au/terms-and-conditions" target="_new">Terms & Conditions</a> | <a href="https://www.upskilled.edu.au/upskilled-policies" target="_new">Upskilled Policies</a> | RTO No 40374 | ABN: 14 125 906 676</span></div></footer>');

////////////////////////////////////////////////////
// START LOREE CODE                               //
////////////////////////////////////////////////////

var fontUrl = `https://fonts.googleapis.com/css?family=ABeeZee|Abel|Abhaya+Libre|Abril+Fatface|Aclonica|Acme|Actor|Adamina|Advent+Pro|Aguafina+Script|Akronim|Aladin|Aldrich|Alef|Alegreya|Alegreya+SC|Alegreya+Sans|Alegreya+Sans+SC|Aleo|Alex+Brush|Alfa+Slab+One|Alice|Alike|Alike+Angular|Allan|Allerta|Allerta+Stencil|Allura|Almarai|Almendra|Almendra+Display|Almendra+SC|Amarante|Amaranth|Amatic+SC|Amethysta|Amiko|Amiri|Amita|Anaheim|Andada|Andika|Angkor|Annie+Use+Your+Telescope|Anonymous+Pro|Antic|Antic+Didone|Antic+Slab|Anton|Arapey|Arbutus|Arbutus+Slab|Architects+Daughter|Archivo|Archivo+Black|Archivo+Narrow|Aref+Ruqaa|Arima+Madurai|Arimo|Arizonia|Armata|Arsenal|Artifika|Arvo|Arya|Asap|Asap+Condensed|Asar|Asset|Assistant|Astloch|Asul|Athiti|Atma|Atomic+Age|Aubrey|Audiowide|Autour+One|Average|Average+Sans|Averia+Gruesa+Libre|Averia+Libre|Averia+Sans+Libre|Averia+Serif+Libre|B612|B612+Mono|Bad+Script|Bahiana|Bahianita|Bai+Jamjuree|Baloo|Baloo+Bhai|Baloo+Bhaijaan|Baloo+Bhaina|Baloo+Chettan|Baloo+Da|Baloo+Paaji|Baloo+Tamma|Baloo+Tammudu|Baloo+Thambi|Balthazar|Bangers|Barlow|Barlow+Condensed|Barlow+Semi+Condensed|Barriecito|Barrio|Basic|Battambang|Baumans|Bayon|Be+Vietnam|Belgrano|Bellefair|Belleza|BenchNine|Bentham|Berkshire+Swash|Beth+Ellen|Bevan|Big+Shoulders+Display|Big+Shoulders+Text|Bigelow+Rules|Bigshot+One|Bilbo|Bilbo+Swash+Caps|BioRhyme|BioRhyme+Expanded|Biryani|Bitter|Black+And+White+Picture|Black+Han+Sans|Black+Ops+One|Blinker|Bokor|Bonbon|Boogaloo|Bowlby+One|Bowlby+One+SC|Brawler|Bree+Serif|Bubblegum+Sans|Bubbler+One|Buda|Buenard|Bungee|Bungee+Hairline|Bungee+Inline|Bungee+Outline|Bungee+Shade|Butcherman|Butterfly+Kids|Cabin|Cabin+Condensed|Cabin+Sketch|Caesar+Dressing|Cagliostro|Cairo|Calligraffitti|Cambay|Cambo|Candal|Cantarell|Cantata+One|Cantora+One|Capriola|Cardo|Carme|Carrois+Gothic|Carrois+Gothic+SC|Carter+One|Catamaran|Caudex|Caveat|Caveat+Brush|Cedarville+Cursive|Ceviche+One|Chakra+Petch|Changa|Changa+One|Chango|Charm|Charmonman|Chathura|Chau+Philomene+One|Chela+One|Chelsea+Market|Chenla|Cherry+Cream+Soda|Cherry+Swash|Chewy|Chicle|Chilanka|Chivo|Chonburi|Cinzel|Cinzel+Decorative|Clicker+Script|Coda|Coda+Caption|Codystar|Coiny|Combo|Comfortaa|Coming+Soon|Concert+One|Condiment|Content|Contrail+One|Convergence|Cookie|Copse|Corben|Cormorant|Cormorant+Garamond|Cormorant+Infant|Cormorant+SC|Cormorant+Unicase|Cormorant+Upright|Courgette|Cousine|Coustard|Covered+By+Your+Grace|Crafty+Girls|Creepster|Crete+Round|Crimson+Pro|Crimson+Text|Croissant+One|Crushed|Cuprum|Cute+Font|Cutive|Cutive+Mono|DM+Sans|DM+Serif+Display|DM+Serif+Text|Damion|Dancing+Script|Dangrek|Darker+Grotesque|David+Libre|Dawning+of+a+New+Day|Days+One|Dekko|Delius|Delius+Swash+Caps|Delius+Unicase|Della+Respira|Denk+One|Devonshire|Dhurjati|Didact+Gothic|Diplomata|Diplomata+SC|Do+Hyeon|Dokdo|Domine|Donegal+One|Doppio+One|Dorsa|Dosis|Dr+Sugiyama|Duru+Sans|Dynalight|EB+Garamond|Eagle+Lake|East+Sea+Dokdo|Eater|Economica|Eczar|El+Messiri|Electrolize|Elsie|Elsie+Swash+Caps|Emblema+One|Emilys+Candy|Encode+Sans|Encode+Sans+Condensed|Encode+Sans+Expanded|Encode+Sans+Semi+Condensed|Encode+Sans+Semi+Expanded|Engagement|Englebert|Enriqueta|Erica+One|Esteban|Euphoria+Script|Ewert|Exo|Exo+2|Expletus+Sans|Fahkwang|Fanwood+Text|Farro|Farsan|Fascinate|Fascinate+Inline|Faster+One|Fasthand|Fauna+One|Faustina|Federant|Federo|Felipa|Fenix|Finger+Paint|Fira+Code|Fira+Mono|Fira+Sans|Fira+Sans+Condensed|Fira+Sans+Extra+Condensed|Fjalla+One|Fjord+One|Flamenco|Flavors|Fondamento|Fontdiner+Swanky|Forum|Francois+One|Frank+Ruhl+Libre|Freckle+Face|Fredericka+the+Great|Fredoka+One|Freehand|Fresca|Frijole|Fruktur|Fugaz+One|GFS+Didot|GFS+Neohellenic|Gabriela|Gaegu|Gafata|Galada|Galdeano|Galindo|Gamja+Flower|Gayathri|Gentium+Basic|Gentium+Book+Basic|Geo|Geostar|Geostar+Fill|Germania+One|Gidugu|Gilda+Display|Give+You+Glory|Glass+Antiqua|Glegoo|Gloria+Hallelujah|Goblin+One|Gochi+Hand|Gorditas|Gothic+A1|Goudy+Bookletter+1911|Graduate|Grand+Hotel|Gravitas+One|Great+Vibes|Grenze|Griffy|Gruppo|Gudea|Gugi|Gurajada|Habibi|Halant|Hammersmith+One|Hanalei|Hanalei+Fill|Handlee|Hanuman|Happy+Monkey|Harmattan|Headland+One|Heebo|Henny+Penny|Hepta+Slab|Herr+Von+Muellerhoff|Hi+Melody|Hind|Hind+Guntur|Hind+Madurai|Hind+Siliguri|Hind+Vadodara|Holtwood+One+SC|Homemade+Apple|Homenaje|IBM+Plex+Mono|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif|IM+Fell+DW+Pica|IM+Fell+DW+Pica+SC|IM+Fell+Double+Pica|IM+Fell+Double+Pica+SC|IM+Fell+English|IM+Fell+English+SC|IM+Fell+French+Canon|IM+Fell+French+Canon+SC|IM+Fell+Great+Primer|IM+Fell+Great+Primer+SC|Iceberg|Iceland|Imprima|Inconsolata|Inder|Indie+Flower|Inika|Inknut+Antiqua|Irish+Grover|Istok+Web|Italiana|Italianno|Itim|Jacques+Francois|Jacques+Francois+Shadow|Jaldi|Jim+Nightshade|Jockey+One|Jolly+Lodger|Jomhuria|Josefin+Sans|Josefin+Slab|Joti+One|Jua|Judson|Julee|Julius+Sans+One|Junge|Jura|Just+Another+Hand|Just+Me+Again+Down+Here|K2D|Kadwa|Kalam|Kameron|Kanit|Kantumruy|Karla|Karma|Katibeh|Kaushan+Script|Kavivanar|Kavoon|Kdam+Thmor|Keania+One|Kelly+Slab|Kenia|Khand|Khmer|Khula|Kirang+Haerang|Kite+One|Knewave|KoHo|Kodchasan|Kosugi|Kosugi+Maru|Kotta+One|Koulen|Kranky|Kreon|Kristi|Krona+One|Krub|Kumar+One|Kumar+One+Outline|Kurale|La+Belle+Aurore|Lacquer|Laila|Lakki+Reddy|Lalezar|Lancelot|Lateef|Lato|League+Script|Leckerli+One|Ledger|Lekton|Lemon|Lemonada|Lexend+Deca|Lexend+Exa|Lexend+Giga|Lexend+Mega|Lexend+Peta|Lexend+Tera|Lexend+Zetta|Libre+Barcode+128|Libre+Barcode+128+Text|Libre+Barcode+39|Libre+Barcode+39+Extended|Libre+Barcode+39+Extended+Text|Libre+Barcode+39+Text|Libre+Baskerville|Libre+Caslon+Display|Libre+Caslon+Text|Libre+Franklin|Life+Savers|Lilita+One|Lily+Script+One|Limelight|Linden+Hill|Literata|Liu+Jian+Mao+Cao|Livvic|Lobster|Lobster+Two|Londrina+Outline|Londrina+Shadow|Londrina+Sketch|Londrina+Solid|Long+Cang|Lora|Love+Ya+Like+A+Sister|Loved+by+the+King|Lovers+Quarrel|Luckiest+Guy|Lusitana|Lustria|M+PLUS+1p|M+PLUS+Rounded+1c|Ma+Shan+Zheng|Macondo|Macondo+Swash+Caps|Mada|Magra|Maiden+Orange|Maitree|Major+Mono+Display|Mako|Mali|Mallanna|Mandali|Manjari|Mansalva|Manuale|Marcellus|Marcellus+SC|Marck+Script|Margarine|Markazi+Text|Marko+One|Marmelad|Martel|Martel+Sans|Marvel|Mate|Mate+SC|Maven+Pro|McLaren|Meddon|MedievalSharp|Medula+One|Meera+Inimai|Megrim|Meie+Script|Merienda|Merienda+One|Merriweather|Merriweather+Sans|Metal|Metal+Mania|Metamorphous|Metrophobic|Michroma|Milonga|Miltonian|Miltonian+Tattoo|Mina|Miniver|Miriam+Libre|Mirza|Miss+Fajardose|Mitr|Modak|Modern+Antiqua|Mogra|Molengo|Molle|Monda|Monofett|Monoton|Monsieur+La+Doulaise|Montaga|Montez|Montserrat|Montserrat+Alternates|Montserrat+Subrayada|Moul|Moulpali|Mountains+of+Christmas|Mouse+Memoirs|Mr+Bedfort|Mr+Dafoe|Mr+De+Haviland|Mrs+Saint+Delafield|Mrs+Sheppards|Mukta|Mukta+Mahee|Mukta+Malar|Mukta+Vaani|Muli|Mystery+Quest|NTR|Nanum+Brush+Script|Nanum+Gothic|Nanum+Gothic+Coding|Nanum+Myeongjo|Nanum+Pen+Script|Neucha|Neuton|New+Rocker|News+Cycle|Niconne|Niramit|Nixie+One|Nobile|Nokora|Norican|Nosifer|Notable|Nothing+You+Could+Do|Noticia+Text|Noto+Sans|Noto+Sans+HK|Noto+Sans+JP|Noto+Sans+KR|Noto+Sans+SC|Noto+Sans+TC|Noto+Serif|Noto+Serif+JP|Noto+Serif+KR|Noto+Serif+SC|Noto+Serif+TC|Nova+Cut|Nova+Flat|Nova+Mono|Nova+Oval|Nova+Round|Nova+Script|Nova+Slim|Nova+Square|Numans|Nunito|Nunito+Sans|Odor+Mean+Chey|Offside|Old+Standard+TT|Oldenburg|Oleo+Script|Oleo+Script+Swash+Caps|Open+Sans|Open+Sans+Condensed|Oranienbaum|Orbitron|Oregano|Orienta|Original+Surfer|Oswald|Over+the+Rainbow|Overlock|Overlock+SC|Overpass|Overpass+Mono|Ovo|Oxygen|Oxygen+Mono|PT+Mono|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|PT+Serif|PT+Serif+Caption|Pacifico|Padauk|Palanquin|Palanquin+Dark|Pangolin|Paprika|Parisienne|Passero+One|Passion+One|Pathway+Gothic+One|Patrick+Hand|Patrick+Hand+SC|Pattaya|Patua+One|Pavanam|Paytone+One|Peddana|Peralta|Permanent+Marker|Petit+Formal+Script|Petrona|Philosopher|Piedra|Pinyon+Script|Pirata+One|Plaster|Play|Playball|Playfair+Display|Playfair+Display+SC|Podkova|Poiret+One|Poller+One|Poly|Pompiere|Pontano+Sans|Poor+Story|Poppins|Port+Lligat+Sans|Port+Lligat+Slab|Pragati+Narrow|Prata|Preahvihear|Press+Start+2P|Pridi|Princess+Sofia|Prociono|Prompt|Prosto+One|Proza+Libre|Puritan|Purple+Purse|Quando|Quantico|Quattrocento|Quattrocento+Sans|Questrial|Quicksand|Quintessential|Qwigley|Racing+Sans+One|Radley|Rajdhani|Rakkas|Raleway|Raleway+Dots|Ramabhadra|Ramaraja|Rambla|Rammetto+One|Ranchers|Rancho|Ranga|Rasa|Rationale|Ravi+Prakash|Red+Hat+Display|Red+Hat+Text|Redressed|Reem+Kufi|Reenie+Beanie|Revalia|Rhodium+Libre|Ribeye|Ribeye+Marrow|Righteous|Risque|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Rochester|Rock+Salt|Rokkitt|Romanesco|Ropa+Sans|Rosario|Rosarivo|Rouge+Script|Rozha+One|Rubik|Rubik+Mono+One|Ruda|Rufina|Ruge+Boogie|Ruluko|Rum+Raisin|Ruslan+Display|Russo+One|Ruthie|Rye|Sacramento|Sahitya|Sail|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Saira+Stencil+One|Salsa|Sanchez|Sancreek|Sansita|Sarabun|Sarala|Sarina|Sarpanch|Satisfy|Sawarabi+Gothic|Sawarabi+Mincho|Scada|Scheherazade|Schoolbell|Scope+One|Seaweed+Script|Secular+One|Sedgwick+Ave|Sedgwick+Ave+Display|Sevillana|Seymour+One|Shadows+Into+Light|Shadows+Into+Light+Two|Shanti|Share|Share+Tech|Share+Tech+Mono|Shojumaru|Short+Stack|Shrikhand|Siemreap|Sigmar+One|Signika|Signika+Negative|Simonetta|Single+Day|Sintony|Sirin+Stencil|Six+Caps|Skranji|Slabo+13px|Slabo+27px|Slackey|Smokum|Smythe|Sniglet|Snippet|Snowburst+One|Sofadi+One|Sofia|Song+Myung|Sonsie+One|Sorts+Mill+Goudy|Source+Code+Pro|Source+Sans+Pro|Source+Serif+Pro|Space+Mono|Special+Elite|Spectral|Spectral+SC|Spicy+Rice|Spinnaker|Spirax|Squada+One|Sree+Krushnadevaraya|Sriracha|Srisakdi|Staatliches|Stalemate|Stalinist+One|Stardos+Stencil|Stint+Ultra+Condensed|Stint+Ultra+Expanded|Stoke|Strait|Stylish|Sue+Ellen+Francisco|Suez+One|Sumana|Sunflower|Sunshiney|Supermercado+One|Sura|Suranna|Suravaram|Suwannaphum|Swanky+and+Moo+Moo|Syncopate|Tajawal|Tangerine|Taprom|Tauri|Taviraj|Teko|Telex|Tenali+Ramakrishna|Tenor+Sans|Text+Me+One|Thasadith|The+Girl+Next+Door|Tienne|Tillana|Timmana|Tinos|Titan+One|Titillium+Web|Trade+Winds|Trirong|Trocchi|Trochut|Trykker|Tulpen+One|Turret+Road|Ubuntu|Ubuntu+Condensed|Ubuntu+Mono|Ultra|Uncial+Antiqua|Underdog|Unica+One|UnifrakturCook|UnifrakturMaguntia|Unkempt|Unlock|Unna|VT323|Vampiro+One|Varela|Varela+Round|Vast+Shadow|Vesper+Libre|Vibes|Vibur|Vidaloka|Viga|Voces|Volkhov|Vollkorn|Vollkorn+SC|Voltaire|Waiting+for+the+Sunrise|Wallpoet|Walter+Turncoat|Warnes|Wellfleet|Wendy+One|Wire+One|Work+Sans|Yanone+Kaffeesatz|Yantramanav|Yatra+One|Yellowtail|Yeon+Sung|Yeseva+One|Yesteryear|Yrsa|ZCOOL+KuaiLe|ZCOOL+QingKe+HuangYou|ZCOOL+XiaoWei|Zeyada|Zhi+Mang+Xing|Zilla+Slab|Zilla+Slab+Highlight&display=swap`;


var linkTag = document.createElement('style');
linkTag.innerHTML = `@import url(${fontUrl})`;
document.getElementsByTagName('head')[0].appendChild(linkTag);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.display === "block") {
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
});
}

function receiveMessage(event) {
if (event.data && event.data.type && event.data.type === 'LOREE_WINDOW_SIZE' && event.data.height) {
	var frames = document.getElementsByTagName('iframe');
	for (var frame of frames) {
		if (frame.src && frame.src.startsWith(event.data.url)) {
			frame.style.height = event.data.height.toString() + "px";
		}
	}
}
}

window.addEventListener("message", receiveMessage, false);

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

////////////////////////////////////////////////////
// COURSE FILTER CODE                             //
////////////////////////////////////////////////////

$(document).ready(function() {
if ($("div.context_module").length > 0) {

	$("div.header-bar").append("<div><ul id='module_filters' style='list-style-type: none; display: inline;'></ul></div>");

	var item_types = [{id: "wiki_page", label: "Pages", icon: "icon-document"},
					{id: "assignment", label: "Assignments", icon: "icon-assignment"},
					{id: "quiz", label: "Quizzes", icon: "icon-quiz"},
					{id: "lti-quiz", label: "Quizzes", icon: "icon-quiz icon-Solid"},
					{id: "discussion_topic", label: "Discussion Topics", icon: "icon-discussion"},
					{id: "external_url", label: "Links", icon: "icon-link"},
					{id: "attachment", label: "Files", icon: "icon-paperclip"},
					{id: "context_external_tool", label: "External Tools", icon: "icon-integrations"}];

	item_types.forEach(function(type) {
		var icon = `<i id="module_filter_${type['id']}" class="${type['icon']}" title="${type['label']}"></i>`;

		$("ul#module_filters").append(`<li style="padding: 0 1em 0 0; display: inline-block;"><input type="checkbox" id="${type['id']}" name="${type['id']}" checked style="display: none;"> <label for="${type['id']}">${icon}</label></li>`);

		$(`#${type['id']}`).change(function() {
			if (this.checked == true) {
				$(`li.${type['id']}`).show();
				$(`#module_filter_${type['id']}`).css('background-color', '');
			}
			else {
				$(`li.${type['id']}`).hide();
				$(`#module_filter_${type['id']}`).css('background-color', 'darkgrey');
			}
		});
	});
}
});

////////////////////////////////////////////////////
// GOOGLE ANALYTICS CODE                         //
////////////////////////////////////////////////////

(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r;
i[r] = i[r] || function () {
	(i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
a = s.createElement(o),
	m = s.getElementsByTagName(o)[0];
a.async = 1;
a.src = g;
m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'custom_ga');

function removeStorage(key) {
try {
	localStorage.removeItem(key);
	localStorage.removeItem(key + '_expiresIn');
} catch (e) {
	console.log('removeStorage: Error removing key [' + key + '] from localStorage: ' + JSON.stringify(e));
	return false;
}
return true;
}

function getStorage(key) {
var now = Date.now(); //epoch time, lets deal only with integer
// set expiration for storage
var expiresIn = localStorage.getItem(key + '_expiresIn');
if (expiresIn === undefined || expiresIn === null) {
	expiresIn = 0;
}

if (expiresIn < now) { // Expired
	removeStorage(key);
	return null;
} else {
	try {
		var value = localStorage.getItem(key);
		return value;
	} catch (e) {
		console.log('getStorage: Error reading key [' + key + '] from localStorage: ' + JSON.stringify(e));
		return null;
	}
}
}

function setStorage(key, value, expires) {
if (expires === undefined || expires === null) {
	expires = (24 * 60 * 60); // default: seconds for 6 hours (6*60*60)
} else {
	expires = Math.abs(expires); //make sure it's positive
}

var now = Date.now(); //millisecs since epoch time, lets deal only with integer
var schedule = now + expires * 1000;
try {
	localStorage.setItem(key, value);
	localStorage.setItem(key + '_expiresIn', schedule);
} catch (e) {
	console.log('setStorage: Error setting key [' + key + '] in localStorage: ' + JSON.stringify(e));
	return false;
}
return true;
}

async function coursesRequest(courseId) {
// 
let response = await fetch('/api/v1/users/self/courses?per_page=100');
let data = await response.text();
data = data.replace('while(1);', '');
data = JSON.parse(data)
var stringData = JSON.stringify(data)
setStorage('ga_enrollments', stringData, null)
var course = parseCourses(courseId, stringData)
return course
};

function parseCourses(courseId, courseData) {
if (courseData != undefined) {
	let data = JSON.parse(courseData);
	//console.log(data)
	for (var i = 0; i < data.length; i++) {
		// console.log(data[i]['id'] + " " + courseId)
		if (data[i]['id'] == courseId) {
			return data[i]
		}
	}
}
return null
}

function gaCourseDimensions(course) {
custom_ga('set', 'dimension4', course['id']);
custom_ga('set', 'dimension5', course['name']);
custom_ga('set', 'dimension6', course['account_id']);
custom_ga('set', 'dimension7', course['enrollment_term_id']);
custom_ga('set', 'dimension8', course['enrollments'][0]['type']);
custom_ga('send', 'pageview');
return
}

function googleAnalyticsCode(trackingID) {
var userId, userRoles, attempts, courseId;
custom_ga('create', trackingID, 'auto');
userId = ENV["current_user_id"];
userRoles = ENV['current_user_roles'];
custom_ga('set', 'userId', userId);
custom_ga('set', 'dimension1', userId);
custom_ga('set', 'dimension3', userRoles);
courseId = window.location.pathname.match(/\/courses\/(\d+)/);
if (courseId) {
	courseId = courseId[1];
	attempts = 0;
	try {
		let courses = getStorage('ga_enrollments')
		if (courses != null) {
			var course = parseCourses(courseId, courses);
			if (course === null) {
				// console.log("course_id not found in cache, retrieving...")
				coursesRequest(courseId).then(course => {
					if (course === null) {
						// console.log("course data not found")
						custom_ga('set', 'dimension4', courseId);
						custom_ga('send', 'pageview');
					} else {
						gaCourseDimensions(course)
					}
				});
			} else {
				// console.log("course found in cache")
				gaCourseDimensions(course)
			}
		} else {
			// console.log("cache not found, retrieving cache data")
			coursesRequest(courseId).then(course => {
				if (course === null) {
					// console.log("course data not found")
					custom_ga('set', 'dimension4', courseId);
					custom_ga('send', 'pageview');
				} else {
					gaCourseDimensions(course)
				}
			});
		}
	} catch (err) {
		attempts += 1;
		if (attempts > 5) {
			custom_ga('set', 'dimension4', courseId);
			custom_ga('send', 'pageview');
			return;
		};
	};
} else {
	custom_ga('send', 'pageview');
};
};

googleAnalyticsCode("UA-197466447-1") // replace google analytics tracking id here

$(document).ready(updateHandlebarTop);
window.addEventListener( 'resize', updateHandlebarTop );

// $(document).ready(customiseCourseNavLinks);

setTimeout( startHereClick, 2500 );

setTimeout( linkNextButton, 2000 );

//////////////////////////////////////////////////////
// Handlebar positioning							//
//////////////////////////////////////////////////////

function updateHandlebarTop() {
	// Limit this to pages with content.
	var regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/((modules\/items\/[0-9]{1,})|(pages\/[a-zA-Z0-9]{1,}))/i;
	// var regex = /canvas\.cidilabs\.com\/courses\/[0-9]{1,}\/((modules\/items\/[0-9]{1,})|(pages\/[a-zA-Z0-9]{1,}))/i;
	if( document.URL.search(regex) > -1 ) {
		// This only applies to the specified themes and when using the handlebar.
		var content = document.querySelector('#kl_wrapper_3.kl_ups_current.with_handlebar');
		
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
			content.style.setProperty( '--dt-handlebar-top', top + 'px' );
		}
	}
}

//////////////////////////////////////////////////////
// Course Nav Links customisation					//
//////////////////////////////////////////////////////

function customiseCourseNavLinks() {
	// Limit this to course pages with the nav links.
	var regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}/i;
	// var regex = /canvas\.cidilabs\.com\/courses\/[0-9]{1,}/i;
	if( document.URL.search(regex) > -1 ) {
		// Pick out the left course navigation.
		var nav = document.querySelector('#left-side ul#section-tabs');
		if(nav) {
			var title = document.createElement('li');
			title.classList.add('section');
			title.style = "font-weight: bold; color: #2c2c36; padding: 8px 0 8px 6px; word-wrap: break-word; hyphens: none; line-height: 1.3;";
			title.innerHTML = 'Unit Menu';
			nav.prepend(title);
		}
	}
}

//////////////////////////////////////////////////////
// 'Start here' nav link click						//
//////////////////////////////////////////////////////

function startHereClick() {
	// Limit this to the front page.
	var regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[a-zA-Z0-9#_-]{0,}$/i;
	// var regex = /canvas\.cidilabs\.com\/courses\/[0-9]{1,}[a-zA-Z0-9#_-]{0,}$/i;
	if( document.URL.search(regex) > -1 ) {
		// Relies on the 'Start Here' link and the expander being marked by ID.
		var link = document.querySelector('#kl_wrapper_3.kl_flat_sections_main #kl_navigation li a#start_here');
		// Only want the first heading in the intro expander.
		var intro = document.querySelector('#kl_wrapper_3.kl_flat_sections_main #intro_expander .kl_panels_wrapper > h3');
		if( link && intro ) {
			link.setAttribute( 'href', '#' + intro.id );
		}
	}
}

//////////////////////////////////////////////////////
// Custom next button								//
//////////////////////////////////////////////////////

function linkNextButton() {
	// Limit this to pages with content.
	var regex = /upskilled(\.test|\.beta)?\.instructure\.com\/courses\/[0-9]{1,}\/((modules\/items\/[0-9]{1,})|(pages\/[a-zA-Z0-9]{1,}))/i;
	// var regex = /canvas\.cidilabs\.com\/courses\/[0-9]{1,}\/((modules\/items\/[0-9]{1,})|(pages\/[a-zA-Z0-9]{1,}))/i;
	if( document.URL.search(regex) > -1 ) {
		// Pick out our next button and the default Canvas one.
		var next = document.querySelector('#kl_wrapper_3.kl_ups_current a#next-button');
		var canvasNext = document.querySelector('#content .module-sequence-footer-button--next a');
		// Check for both elements before acting.
		if( next && canvasNext ) {
			// Set the custom next button link to the same location.
			next.href = canvasNext.href;
			// Leverage Canvas' button again for the button text.
			var text = document.querySelector('#content #' + canvasNext.getAttribute('aria-describedby'));
			if(text) {
				// Replace the text only.
				var tempText = next.innerHTML.substring( next.innerHTML.indexOf('<') );
				next.innerHTML = text.innerHTML + tempText;
			}
		}
	}
}