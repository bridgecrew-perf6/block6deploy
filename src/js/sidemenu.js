let open = document.querySelector(".header__button");
let close = document.querySelector(".menu__button");
let overlay = document.querySelector(".overlay");
let menuContainer = document.querySelector(".menu");
let menuContent = document.querySelector(".menu__container");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContainer.classList.remove("menu--hidden");
  menuContent.classList.add("menu__container--zoom-in");
  overlay.classList.toggle("overlay--hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContent.classList.remove("menu__container--zoom-in");
  menuContent.classList.add("menu__container--zoom-out");
  setTimeout(onClose, 590);
});

overlay.addEventListener("click", function (evt) {
  let isClickInside = menuContainer.contains(evt.target);

  if (!isClickInside) {
    menuContent.classList.remove("menu__container--zoom-in");
    menuContent.classList.add("menu__container--zoom-out");
    setTimeout(onClose, 585);
  }
});

document
  .querySelectorAll(
    ".menu__icons > .menu__button:first-child, .menu__icons > .menu__button:nth-child(2)"
  )
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      menuContent.classList.remove("menu__container--zoom-in");
      menuContent.classList.add("menu__container--zoom-out");
      setTimeout(onClose, 590);
    });
  });

function onClose() {
  overlay.classList.add("overlay--hidden");
  menuContainer.classList.add("menu--hidden");
  menuContent.classList.remove("menu__container--zoom-out");
}
