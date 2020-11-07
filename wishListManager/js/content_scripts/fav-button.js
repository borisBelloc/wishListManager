// // document.body.style.backgroundColor = "red";
// var button = document.createElement("span");
// button.setAttribute("id", "fav-btn");
// // btn.className = "badge badge-pill badge-gold"; 
// button.className = "badge badge-pill badge-gold above"; 
// // button.className += " YourClass" //If you want to add to existing classes
// button.innerHTML = "BB";
// // document.body.appendChild(button);
// var divContainer = document.getElementById("customJumbotron")
// divContainer.appendChild(button);

// var urlBtn = chrome.runtime.getURL('html/test.html')


// * Inject Html file inside webpage
fetch(chrome.extension.getURL('html/fav-button.html'))
    .then(response => response.text())
    .then(data => {
        // Test sur bb.com/thanks
        // document.getElementById('customJumbotron').innerHTML = data;
        // Amazon : ok pour remplacer un contenu par le button
        document.getElementById('title').innerHTML = data;

        // TODO: mettre le bouton apres quelque chose et non a la place
        // var ici = document.getElementById('productTitle');
        // ici.appendChild(data);

        // other code
        // eg update injected elements,
        // add event listeners or logic to connect to other parts of the app
    }).catch(err => {
        // handle error
    });


// .badge-gold {
//   color: #212529;
//   background-color: #dfcf77;
//   border: 1px solid #444957;
//   cursor: pointer;
// }
// .badge-gold:hover {
//   /* filter: brightness(90%); */
//   /* filter: brightness(110%); */
  
//   background-color: #f7cc83;
//   /* offset-x | offset-y | blur-radius | spread-radius | color */
//   -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.56);
//   -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.56);
//   box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.56);
// }