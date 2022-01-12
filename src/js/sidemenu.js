 let open = document.querySelector(".header__button");
 let close = document.querySelector(".menu-header__button");

 let menuContainer = document.querySelector(".menu");

 let menu = document.querySelector(".menu-container");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContainer.classList.toggle("menu--hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContainer.classList.toggle("menu--hidden");
});

menuContainer.addEventListener("click", function (evt) {
   let isClickInside = menu.contains(evt.target);

  if (!isClickInside) {
    menuContainer.classList.toggle("menu--hidden");
  }
});
