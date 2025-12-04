"use strict";

const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll(".lazy");

  const lazyImgLoad = function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      // image
      let img = entry.target;
      // replace placeholder with real image
      img.src = img.dataset.src;

      img.classList.replace("loading", "loaded");
      // stop observing image
      observer.unobserve(img);
    });
  };

  const imgObserver = new IntersectionObserver(lazyImgLoad, {
    root: null,
    threshold: 0.1,
  });

  lazyImgs.forEach((img) => {
    img.classList.add("loading");
    imgObserver.observe(img);
  });
};

export default lazyLoading;
