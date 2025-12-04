"use strict";

const mobileNav = function () {
  const header = document.querySelector(".header");
  const menuNav = document.querySelector(".mobile-nav");
  const navMenu = document.querySelector(".header__menu");

  // Toggle mobile nav
  const toggleMenu = function (open) {
    menuNav.style.width = open ? "250px" : "0";
  };

  // Open mobile nav
  header.addEventListener("click", function (e) {
    if (e.target.closest("#menu-btn")) toggleMenu(true);
  });

  // Close mobile nav
  menuNav.addEventListener("click", function (e) {
    if (e.target.closest("#close-btn")) toggleMenu(false);
    // Close mobile nav on link click
    if (e.target.closest(".mobile-nav__link")) toggleMenu(false);
  });

  // Smooth scroll
  navMenu.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("header__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

  // Sticky Header
  const stickyNav = function (entries) {
    const [entry] = entries;
    // when header is out of view add sticky class
    if (!entry.isIntersecting) header.classList.toggle("sticky");
  };

  const observerOptions = {
    // viewport
    root: null,
    // 0% of target is visible
    threshold: 0,
    // trigger a little early, accounting for header height
    rootMargin: `-${header.getBoundingClientRect().height}px`,
  };
  const headerObserver = new IntersectionObserver(stickyNav, observerOptions);
  headerObserver.observe(header);
};

export default mobileNav;
