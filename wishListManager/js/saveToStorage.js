// * DOC : https://developer.chrome.com/extensions/storage

function saveToStorage(currentProduct) {
  chrome.storage.sync.set(currentProduct, function() {})
  //   chrome.storage.local.set({ key: '2' }, function () {});
}

function loadFromStorage(currentProduct) {
  chrome.storage.sync.get(currentProduct, function (result) {
    // console.log('Value currently is ' + result.title);
  });
}
