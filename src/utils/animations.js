"use strict";

const siteAnimations = function () {
  const allSections = document.querySelectorAll(".section");

  const revealSection = function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2,
  });

  allSections.forEach((section) => sectionObserver.observe(section));
};

export default siteAnimations;
