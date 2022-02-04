 let closeModalCall = document.querySelector(
  "button.modal-call__button:first-child"
);
 let modalCallContainer = document.querySelector(".modal-call");
 let modalCall = document.querySelector(".modal-call__wrapper");


closeModalCall.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCall.classList.remove("modal-call__wrapper--zoom-in");
  modalCall.classList.add("modal-call__wrapper--zoom-out");
  setTimeout(onClose, 590);
  
});

modalCallContainer.addEventListener("click", function (evt) {
  let isClickInside = modalCall.contains(evt.target);

  if (!isClickInside) {
    modalCall.classList.remove("modal-call__wrapper--zoom-in");
  modalCall.classList.add("modal-call__wrapper--zoom-out");
  setTimeout(onClose, 590);
  }
});


document
  .querySelectorAll(
    "ul.header__menu-block:nth-child(2) li:first-child button.header__button, .menu__icons > .menu__button:first-child"
  )
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      modalCallContainer.classList.toggle("modal-call--hidden");
      modalCall.classList.add("modal-call__wrapper--zoom-in");
      
    });
  });


  function onClose() {
    modalCallContainer.classList.add("modal-call--hidden");
    modalCall.classList.remove("modal-call__wrapper--zoom-out");
  
  }