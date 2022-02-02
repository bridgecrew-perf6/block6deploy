 let open = document.querySelector(".header__button");
 let close = document.querySelector(".menu__button");
 let overlay = document.querySelector(".overlay");
 let menuContainer = document.querySelector(".menu");
 let menuContent = document.querySelector(".menu__container");


open.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContainer.classList.toggle("menu--hidden");
  menuContent.classList.add("menu__container--zoom-in")
  overlay.classList.toggle("overlay--hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContent.classList.remove("menu__container--zoom-in")
  menuContainer.classList.toggle("menu--hidden");
  overlay.classList.toggle("overlay--hidden");
});

overlay.addEventListener("click", function (evt) {
   let isClickInside = menuContainer.contains(evt.target);

  if (!isClickInside) {
    menuContainer.classList.toggle("menu--hidden");
    menuContent.classList.remove("menu__container--zoom-in")
    overlay.classList.toggle("overlay--hidden");
  }
});
