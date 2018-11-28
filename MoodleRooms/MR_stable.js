var footer = document.getElementsByTagName('footer');
if( footer.length > 1 ) {
	newFooter = document.createElement('footer');
	newFooter.appendChild( document.createTextNode( '<div class="span9 footer-shell">' ) );
	newFooter.appendChild( document.createTextNode( '<div class="span3 footer-ups-logo"><a href="https://upskilled-sandbox.mrooms.net"><img src="https://upskilled-sandbox.mrooms.net/pluginfile.php/1/tool_themeassets/assets/0/upskilled-logo-footer.png" alt="Upskilled logo"></a></div>' ) );
	newFooter.appendChild( document.createTextNode( '<div class="span3 social-networks-outer"><ul class="social-networks"><li class="social-ico"><a href="http://www.facebook.com/Upskilled" target="_blank" class="fa fa-facebook social-ico"></a></li><li class="social-ico"><a href="http://twitter.com/#!/upskilled" target="_blank" class="fa fa-twitter social-ico"></a></li><li class="social-ico"><a href="http://www.linkedin.com/company/upskilled" target="_blank" class="fa fa-linkedin social-ico"></a></li><li class="social-ico"><a href="https://www.instagram.com/upskilled/" target="_blank" class="fa fa-instagram social-ico"></a></li><li class="social-ico"><a href="https://www.pinterest.com/upskilled/" target="_blank" class="fa fa-pinterest social-ico"></a></li><li class="social-ico"><a href="http://www.youtube.com/user/UpSkilledTV" target="_blank" class="fa fa-youtube social-ico"></a></li></ul></div>' ) );
	newFooter.appendChild( document.createTextNode( '<div class="span3 footer-copyright"><div>© Upskilled Pty Ltd 2018. All rights reserved.</div><div><a href="https://upskilled-kentico-prod.azurewebsites.net/terms-and-conditions" class="footer-copyright-link">Terms &amp; Conditions</a><span> | </span><a href="https://upskilled-kentico-prod.azurewebsites.net/upskilled-policies" class="footer-copyright-link">Upskilled Policies</a><span> | RTO No 40374 | ABN: 14 125 906 676</span></div></div>' ) );
	newFooter.appendChild( document.createTextNode( '</div>' ) );
	footer.removeChild(footer[0]);
	footer.appendChild(newFooter);
}