"use strict";

const accordionComponent = () => {
  const accordionContent = document.querySelectorAll(".accordion__content");

  accordionContent.forEach((item) => {
    item.addEventListener("click", () => {
      // removing the active class from all other items that are not clicked
      accordionContent.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      // toggles active class on clicked item
      item.classList.toggle("active");
    });
  });
};

export default accordionComponent;
