
$(document).ready(function () {
  let currentTabUrl;
  // * https://stackoverflow.com/a/14251218/9552861
  // DOC : get current tab : https://developer.chrome.com/extensions/tabs#method-query

  // TODO: if currentWidow exist && amazon website
  // chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    currentTabUrl = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    $('#bobo2').html(currentTabUrl);
    
    // !

  //       // $.get( "test.php", function( data ) {
    // * Amazon get a page
  //   $.get(
  //     'https://www.amazon.fr/Balvi-Pot-pour-Fleur-de-sel-Salt-Bambou-c%C3%A9ramique/dp/B009R0A6NA',
  //     function (data) {
  //       // alert('Data Loaded: ' + data);
  //       $('#current_price').html(data);
  //   }
  // );
  
  // TODO: add loader bootstrap
  $.ajax({
    // url: https://www.amazon.fr/Acer-Chromebook-CB314-1HT-C7GS-Ordinateur-portable/dp/B08CRW23V4
    // url: 'https://www.amazon.fr/Acer-Chromebook-CB314-1HT-C7GS-Ordinateur-portable/dp/B08CRW23V4',
    url: currentTabUrl,
    success: function(html) {
        let nodes = $.parseHTML(html);
        // * Product title
        let productTitle = $("<span>").append(nodes).find("#productTitle").text();
        $('#productTitle').html("productTitle : " + productTitle);
        // * Product price
        let productPrice = $("<span>").append(nodes).find("#price_inside_buybox").text();
        $('#productPrice').children("strong").html("productPrice : " + productPrice);
        // * Product Image
        // let productImage = $("<img>").append(nodes).find("#landingImage").text();
        // let productImage = $("<img>").append(nodes).find("#landingImage").attr('src');
        var img = $("<img>").append(nodes).find("#landingImage").attr("src");
        $("#productImage").attr("src", img);
    }


// alert(img.getAttribute('src')); // foo.jpg
// alert(img.src); 
  });


});


});

// Doc amazon ?

// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sdk-code-samples.html

// https://webservices.amazon.com/paapi5/documentation/get-items.html
