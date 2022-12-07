'use strict';

function alertTimeout(mymsg,mymsecs) {
  var myelement = document.getElementById("myPopup");
  myelement.innerHTML = mymsg;
  setTimeout(function() {
    myelement.parentNode.removeChild(myelement);
  },mymsecs);
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
    /* Alert the copied text */
    // alert("Mail copié dans le presse-papier!");
    alertTimeout("L'adresse mail a été copiée dans le presse-papier",5000)

  }
