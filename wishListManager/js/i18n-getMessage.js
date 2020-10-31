/**
 * Load function when DOM ready
 * - Tooltip 'copied' i18n made in main.js
 */
$(document).ready(function () {
// window.onload=function(){
  localizeHtmlPage();

  // TODO: faire une methode pour remplacer tout les i18n sur le meme shema que __MSG_
  // errorText = chrome.i18n.getMessage("i18n_header1");
    document.getElementById("i18n_header1").innerHTML = chrome.i18n.getMessage("i18n_header1");
    document.getElementById("i18n_header2").innerHTML = chrome.i18n.getMessage("i18n_header2");

    // Support link to page
    $("#url_support_us").attr("href", chrome.i18n.getMessage("html_url_support_us"))
    $("#url_home").attr("href", chrome.i18n.getMessage("html_url_home"))

});


// * Replace every __SYST_ by i18n Message
// * Used for : <title>
function replace_i18n(obj, tag) {
  var msg = tag.replace(/__SYST_(\w+)__/g, function(match, v1) {
      return v1 ? chrome.i18n.getMessage(v1) : '';
  });

  if(msg != tag) obj.innerHTML = msg;
}

function localizeHtmlPage() {
  // Localize using __SYST_***__ data tags
  var data = document.querySelectorAll('[data-localize]');

  for (var i in data) if (data.hasOwnProperty(i)) {
      var obj = data[i];
      var tag = obj.getAttribute('data-localize').toString();

      replace_i18n(obj, tag);
  }

  // Localize everything else by replacing all __SYST_***__ tags
  var page = document.getElementsByTagName('html');

  for (var j = 0; j < page.length; j++) {
      var obj = page[j];
      var tag = obj.innerHTML.toString();

      replace_i18n(obj, tag);
  }
}



// * Doc:
// * replaces two placeholders within the message with the strings "string1" and "string2"
// function getMessage() {
//   var message = chrome.i18n.getMessage("click_here", ["string1", "string2"]);
//   document.getElementById("languageSpan").innerHTML = message;
// }

// *  single string:
// status.innerText = chrome.i18n.getMessage("error", errorDetails);
