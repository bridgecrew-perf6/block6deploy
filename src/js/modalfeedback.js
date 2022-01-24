 let closeModalFeedback = document.querySelector(
  "button.modal-feedback__button:first-child"
);
 let modalFeedbackContainer = document.querySelector(".modal-feedback");
 let modalFeedback = document.querySelector(".modal-feedback__wrapper");

closeModalFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackContainer.classList.toggle("modal-feedback--hidden");
});

modalFeedbackContainer.addEventListener("click", function (evt) {
  let isClickInside = modalFeedback.contains(evt.target);

  if (!isClickInside) {
    modalFeedbackContainer.classList.toggle("modal-feedback--hidden");
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
    });
  });
