(function () {
  "use strict";

  // ----- Theme (sáng/tối) -----
  const THEME_KEY = "portfolio-theme";
  const metaTheme = document.getElementById("meta-theme-color");

  function getPreferredTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
    return "dark";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (metaTheme) metaTheme.setAttribute("content", theme === "light" ? "#f1f5f9" : "#0a0e17");
    localStorage.setItem(THEME_KEY, theme);
  }

  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    setTheme(getPreferredTheme());
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  // ----- Typing animation -----
  const typingEl = document.querySelector(".typing");
  const text = "Web Developer | PHP | JavaScript | React";
  let i = 0;

  function typing() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 80);
    } else {
      setTimeout(deleteText, 2000);
    }
  }

  function deleteText() {
    if (typingEl.textContent.length > 0) {
      typingEl.textContent = typingEl.textContent.slice(0, -1);
      setTimeout(deleteText, 50);
    } else {
      i = 0;
      setTimeout(typing, 400);
    }
  }

  if (typingEl) {
    setTimeout(typing, 600);
  }

  // ----- Cursor glow -----
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    document.addEventListener("mousemove", function (e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  // ----- Mobile nav -----
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !expanded);
      navLinks.classList.toggle("open");
      document.body.style.overflow = expanded ? "" : "hidden";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // ----- Header on scroll -----
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // ----- Scroll reveal -----
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const threshold = 100;

    reveals.forEach(function (el) {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - threshold) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  // ----- Particles.js -----
  if (typeof particlesJS === "function") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 800 } },
        color: { value: "#22c1c3" },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: { enable: true, minimumValue: 1 } },
        links: {
          enable: true,
          distance: 140,
          color: "#22c1c3",
          opacity: 0.25,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" }
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.5 } },
          push: { quantity: 3 }
        }
      },
      retina_detect: true
    });
  }
})();
