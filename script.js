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
const nav = document.querySelector(".nav");
const TabsContainer = document.querySelector(".operations__tab-container");
const Tabs = document.querySelectorAll(".operations__tab");
const TabsView = document.querySelectorAll(".operations__content");


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const handelHover = function(e) {
  if(e.target.classList.contains("nav__link")) {
    let link = e.target;
    let sibling = link.closest(".nav").querySelectorAll(".nav__link");
    let logo = link.closest(".nav").querySelector("img");
    sibling.forEach(el => {
      if(el !== link) el.style.opacity = this
    });
    logo.style.opacity = this;
  }
}


// for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);
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
btnScrollTo.addEventListener("click", () => {
  section1.scrollIntoView({ behaviour: "smooth" })
  // window.scrollBy({left: 0, top: section1.getBoundingClientRect().y, behaviour: "smooth"})
});
document.querySelector(".nav__links").addEventListener("click", (e) => { // Nav tabs event
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    // const id = e.target.href.split("/").at(-1);
    const id = document.querySelector(e.target.getAttribute("href"));
    id.scrollIntoView({ behaviour: "smooth" });
  }
});


nav.addEventListener("mouseover", handelHover.bind(0.5))
nav.addEventListener("mouseout", handelHover.bind(1))


TabsContainer.addEventListener("click", e => {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  console.log(clicked);
  // clicked.dataset.myname         ("javid")    -- the data set can changed to lowercase if we even use camelcase
  let no = clicked.dataset.tab;
  console.log(no);
  Tabs.forEach(t => t.classList.remove("operations__tab--active"));
  TabsView.forEach(tv => tv.classList.remove("operations__content--active"))
  document.querySelector(`.operations__tab--${no}`).classList.add("operations__tab--active");
  document.querySelector(`.operations__content--${no}`).classList.add("operations__content--active");
});


