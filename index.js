// Get the button:
let topbutton = document.getElementById("Btn");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}