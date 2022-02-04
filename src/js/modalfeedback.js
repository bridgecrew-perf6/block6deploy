 let closeModalFeedback = document.querySelector(
  "button.modal-feedback__button:first-child"
);
 let modalFeedbackContainer = document.querySelector(".modal-feedback");
 let modalFeedback = document.querySelector(".modal-feedback__wrapper");

closeModalFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-call__wrapper--zoom-in");
  modalFeedback.classList.add("modal-call__wrapper--zoom-out");
  setTimeout(onClose, 590);
});

modalFeedbackContainer.addEventListener("click", function (evt) {
  let isClickInside = modalFeedback.contains(evt.target);

  if (!isClickInside) {
    modalFeedback.classList.remove("modal-call__wrapper--zoom-in");
  modalFeedback.classList.add("modal-call__wrapper--zoom-out");
  setTimeout(onClose, 590);
  }
});

document
  .querySelectorAll(
    "ul.header__menu-block:nth-child(2) li:nth-child(2) button.header__button, .menu__icons > .menu__button:nth-child(2)"
  )
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      modalFeedbackContainer.classList.toggle("modal-feedback--hidden");
      modalFeedback.classList.add("modal-call__wrapper--zoom-in");
    });
  });


  function onClose() {
    modalFeedbackContainer.classList.add("modal-feedback--hidden");
    modalFeedback.classList.remove("modal-call__wrapper--zoom-out");
  
  }