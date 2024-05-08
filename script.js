'use strict';

const cards = document.querySelectorAll(".card");


// cards
cards.forEach(function(card) {
    card.addEventListener("click", function() {
        cards.forEach(function(card) {
            card.classList.remove("active");
        });
        this.classList.add("active");
    });
});


// images sliding 
let myIndex = 0;
function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

carousel();