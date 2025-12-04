"use strict";

const tabbedComponent = () => {
  const tabButtons = document.querySelectorAll(".study__btn");
  const tabButtonsContainer = document.querySelector(".study__tab-buttons");
  const tabContent = document.querySelectorAll(".study__content");

  tabButtonsContainer.addEventListener("click", function (e) {
    const studyBtnClicked = e.target.closest(".study__btn");

    if (!studyBtnClicked) return;

    // Loops through every element and removes class
    tabButtons.forEach((t) => t.classList.remove("study__btn--active"));
    studyBtnClicked.classList.add("study__btn--active");

    tabContent.forEach((tabContent) =>
      tabContent.classList.remove("study__content--active")
    );

    document
      .querySelector(`.study__content--${studyBtnClicked.dataset.tab}`)
      .classList.add("study__content--active");
  });
};

export default tabbedComponent;
