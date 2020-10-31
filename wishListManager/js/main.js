$(document).ready(function () {
  // * https://stackoverflow.com/a/14251218/9552861
  // DOC : get current tab : https://developer.chrome.com/extensions/tabs#method-query

  // TODO: if currentWidow exist
  // chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tabURL = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    $('#bobo2').html(tabURL);

    // !
  });
  //       // $.get( "test.php", function( data ) {
  //       $.get( "https://www.amazon.fr/Balvi-Pot-pour-Fleur-de-sel-Salt-Bambou-c%C3%A9ramique/dp/B009R0A6NA", function( data ) {
  //         alert( "Data Loaded: " + data );
  //       });

});


// Doc amazon ?

// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sdk-code-samples.html

// https://webservices.amazon.com/paapi5/documentation/get-items.html