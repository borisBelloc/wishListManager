/** * Tuto : https://developer.chrome.com/extensions/tut_analytics */

/**
 * Add your Analytics tracking ID here.
 */
var _AnalyticsCode = 'UA-167169724-1';

/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */

var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();



/**
 * Track a click on a button using the asynchronous tracking API.
 *
 * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
 * for information on how to use the asynchronous tracking API.
 */
function trackButtonClick(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
}
/**
 * Track a click on a link using the asynchronous tracking API.
 */
function trackLinkClick(e) {
  // console.log('href : ', this.href);
  _gaq.push(['_trackEvent', this.href, 'visited']);
}
/**
 * Now set up your event handlers for the popup's `button` elements once the
 * popup's DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  var divCopyable = document.querySelectorAll('div.copyable');
  for (var i = 0; i < divCopyable.length; i++) {
    divCopyable[i].addEventListener('click', trackButtonClick);
  }

  
  // Link on btn support us
  let linkSupportUs = document.getElementById('url_support_us');
  linkSupportUs.addEventListener('click', trackLinkClick);
  // Link on btn home
  let linkHome = document.getElementById('url_home');
  linkHome.addEventListener('click', trackLinkClick);
  // Link on logo
  let linkBbLogo = document.getElementById('url_bb_logo');
  linkBbLogo.addEventListener('click', trackLinkClick);
});
