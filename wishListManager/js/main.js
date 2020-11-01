<<<<<<< HEAD
const currentProduct = {
  title: '',
  price: '',
  img: '',
  urlINI: '',
  urlBb: '',
};


$(document).ready(function () {
  let currentTabUrl;
=======
$(document).ready(function () {
>>>>>>> b34a14283c5d2b8a852eb4b7bc67dc8ee9c65148
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

  function saveToStorage() {
    // chrome.storage.sync.set(currentProduct, function() {
    chrome.storage.sync.set({ key: 'value' }, function () {});
  }
  
  function saveit() {
    chrome.storage.local.set({ key: '2' }, function () {
    });
  }

  /**
   * Trim string and remove any \n
   * @param {*} str 
   */
  function trimSlashN(str) {
    return $.trim(str.replace(/[\n]+/g,' '));
  }

  
  // TODO: add loader bootstrap
  // TODO: url with my id
  //  Testeur de lien : https://partenaires.amazon.fr/home/tools/linkchecker?ac-ms-src=ac-nav
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
        var productImg = $("<img>").append(nodes).find("#landingImage").attr("src");
        $("#productImage").attr("src", productImg);

        // !
        currentProduct['title'] = trimSlashN(productTitle);
        currentProduct['price'] = trimSlashN(productPrice);
        currentProduct['img'] = productImg;

        // Save to storage ; https://developer.chrome.com/extensions/storage
        chrome.storage.local.set(currentProduct, function () {})
        chrome.storage.sync.set(currentProduct, function () {})

        chrome.storage.sync.get(currentProduct, function (result) {
          console.log('Value currently is ' + result.title);
        });
    }

  });


});


});

// Doc amazon ?

// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sdk-code-samples.html

// https://webservices.amazon.com/paapi5/documentation/get-items.html
