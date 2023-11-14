'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector(".btn--scroll-to")

const header = document.querySelector(".header");
const section1 = document.querySelector("#section--1");
const cookieMessage = document.querySelector(".cookie-message");


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => {
  btn.addEventListener("click", openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const cookie = document.createElement("div");
cookie.innerHTML = "We use cookie for increasing performance <button class='btn cookie-message-btn'> Ok </button>";
cookie.classList.add("cookie-message");
header.append(cookie);
// let cookieBtn = "<div class='cookie-message'> We use cookie for increasing performance <button class='btn'> Ok </button> </div>";
// header.insertAdjacentHTML('afterbegin', cookieBtn);

// Event handelers
const cookieMessageBtnEvent = document.querySelector(".cookie-message-btn").addEventListener('click', () => cookie.classList.add("hidden"));
btnScrollTo.addEventListener("click", ()=> {
  window.scrollBy({left: 0, top: section1.getBoundingClientRect().y, behaviour: "smooth"})
  section1.scrollIntoView({behaviour: "smooth"});
});