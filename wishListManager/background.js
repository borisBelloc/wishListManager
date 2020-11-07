// * Doc background page : https://developer.chrome.com/extensions/background_pages

// var myVar = setInterval(function() { 
//   if(document.getElementById('aButton')) {
//       //  clearInterval(myVar);
//       return false;
//   } else {
//       if(document.getElementsByClassName("fontJumbotronLocal")[0]) {
//           var button = document.createElement("button");
//           button.innerHTML = "Test";
//           button.id = "aButton";
//           button.type = "button";
//           document.getElementsByClassName("fontJumbotronLocal")[0].appendChild(button);

//           var theButton = document.getElementById('aButton');
//           theButton.addEventListener('click', function() {
//               console.log(document.getElementsByClassName("ms-TextField-field")[0].value);
//           });
//       }
//   }
// }, 500);

// var s = document.createElement('script');
// s.src = chrome.extension.getURL('script.js');
// s.onload = function() {
//     this.parentNode.removeChild(this);
// };
// (document.head||document.documentElement).appendChild(s);