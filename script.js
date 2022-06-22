'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

// ! ===== Open Modal Function =====
const openModal = function() {
    // console.log("Tıklandı");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// ! ===== Close Modal Function =====
const closeModal = function() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}


for(let i = 0; i < btnShowModal.length; i++){
    btnShowModal[i].addEventListener("click", openModal);
}

// ! ===== Close Button =====
btnCloseModal.addEventListener("click", closeModal);

// ! ===== Close Overlay =====
overlay.addEventListener("click",closeModal);

// ! ===== Escape Close =====
document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    }
});        


























































