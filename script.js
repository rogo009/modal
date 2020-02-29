// get modal element
const modal = document.getElementById("simpleModal");

// get open modal button
const modalBtn = document.getElementById("modalBtn");

// get close button, getElements by class name returns an array even if there's only one item. meaning you have to add bracket notation to indicate you want the first selection
const closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for open click
modalBtn.addEventListener("click", openModal);

// listen for close click on the mdoal button
closeBtn.addEventListener("click", closeModal);

//function to open modal
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
