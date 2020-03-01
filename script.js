// get modal element
const modal = document.getElementById("simpleModal");

// get open modal button
const modalBtn = document.getElementById("modalBtn");

// get close button, getElements by class name returns an array even if there's only one item. meaning you have to add bracket notation [0] to indicate you want the first item
const closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for open click
modalBtn.addEventListener("click", openModal);

// listen for close click on the mdoal button
closeBtn.addEventListener("click", closeModal);

// listen for click on window
window.addEventListener("click", outsideClick);

// function to open modal
function openModal() {
  modal.style.display = "block";
}

// function to close modal
function closeModal() {
  modal.style.display = "none";
}

// function to exit on window click; make sure event target is: modal (the dark area around?)
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
