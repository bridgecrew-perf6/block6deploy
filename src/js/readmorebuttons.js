 let hiddenTextMain = document.querySelector(
  ".services__text.services__text--hidden-mobile"
);
 let hiddenTextMainTablet = document.querySelector(
  ".services__text--hidden-tablet"
);

 let brandsHiddenOnTablet = document.querySelectorAll(
  ".brands .swiper-slide--hidden--tablet"
);
 let brandsHiddenOnDesktop = document.querySelectorAll(
  ".brands .swiper-slide--hidden--desktop"
);

 let repairsHiddenOnTablet = document.querySelectorAll(
  ".repairs .swiper-slide--hidden--tablet"
);
 let repairsHiddenOnDesktop = document.querySelectorAll(
  ".repairs .swiper-slide--hidden--desktop"
);

 let whichSection;
 let openSection;

document.querySelectorAll(".button-open, .button-close").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    openClose(item);
    item.classList.toggle("button--hidden");
  });
});

 function openClose(el) {
  checkOpen(el);
  checkparent(el);
  if (openSection === true && whichSection === "services") {
    return openMain();
  }
  if (openSection === false && whichSection === "services") {
    return closeMain();
  }

  if (openSection === true && whichSection === "brands") {
    return openBrands();
  }
  if (openSection === false && whichSection === "brands") {
    return closeBrands();
  }

  if (openSection === true && whichSection === "repairs") {
    return openRepairs();
  }
  if (openSection === false && whichSection === "repairs") {
    return closeRepairs();
  }
}

 function checkparent(parent) {
  let buttonParent = parent.parentNode;
  if (buttonParent.className === "services__info") {
    return (whichSection = "services");
  }

  if (buttonParent.classList.contains("brands")) {
    return (whichSection = "brands");
  }
  if (buttonParent.classList.contains("repairs")) {
    return (whichSection = "repairs");
  }
}

 function checkOpen(button) {
  if (button.classList.contains("button-open")) {
    return (openSection = true);
  }
  if (button.classList.contains("button-close")) {
    return (openSection = false);
  }
}

 function openMain() {
  if (window.matchMedia("(min-width: 768px) and (max-width: 1119px)").matches) {
    hiddenTextMainTablet.classList.toggle("services__text--hidden-tablet");
    let buttonClose = document.querySelector(
      ".services__info .button-close"
    );
    buttonClose.classList.toggle("button--hidden");
  } else {
    hiddenTextMain.classList.toggle("services__text--hidden-mobile");
    let buttonClose = document.querySelector(
      ".services__info .button-close"
    );
    buttonClose.classList.toggle("button--hidden");
  }
}

 function closeMain() {
  if (window.matchMedia("(min-width: 768px) and (max-width: 1119px)").matches) {
    hiddenTextMainTablet.classList.toggle("services__text--hidden-tablet");
    let buttonOpen = document.querySelector(
      ".services__info .button-open"
    );
    buttonOpen.classList.toggle("button--hidden");
  } else {
    hiddenTextMain.classList.toggle("services__text--hidden-mobile");
    let buttonOpen = document.querySelector(
      ".services__info .button-open"
    );
    buttonOpen.classList.toggle("button--hidden");
  }
}

 function openBrands() {
  for (let i = 0; i < brandsHiddenOnTablet.length; i++) {
    brandsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
  }
  for (let i = 0; i < brandsHiddenOnDesktop.length; i++) {
    brandsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
  }
  let buttonClose = document.querySelector(".brands .button-close");
  buttonClose.classList.toggle("button--hidden");
}

 function closeBrands() {
  for (let i = 0; i < brandsHiddenOnTablet.length; i++) {
    brandsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
  }
  for (let i = 0; i < brandsHiddenOnDesktop.length; i++) {
    brandsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
  }
  let buttonOpen = document.querySelector(".brands .button-open");
  buttonOpen.classList.toggle("button--hidden");
}

 function openRepairs() {
  for (let i = 0; i < repairsHiddenOnTablet.length; i++) {
    repairsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
  }
  for (let i = 0; i < repairsHiddenOnDesktop.length; i++) {
    repairsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
  }
  let buttonClose = document.querySelector(".repairs .button-close");
  buttonClose.classList.toggle("button--hidden");
}

 function closeRepairs() {
  for (let i = 0; i < repairsHiddenOnTablet.length; i++) {
    repairsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
  }
  for (let i = 0; i < repairsHiddenOnDesktop.length; i++) {
    repairsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
  }
  let buttonOpen = document.querySelector(".repairs .button-open");
  buttonOpen.classList.toggle("button--hidden");
}
