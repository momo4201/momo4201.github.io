/* ==========================================================================
   Academic Portfolio — Manaswita Ghose
   Theme toggle, mobile nav, scroll-spy nav highlighting, back-to-top.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Dark / light theme toggle (persisted in localStorage)
     ------------------------------------------------------------------ */
  var THEME_KEY = "portfolio-theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  var storedTheme = null;
  try {
    storedTheme = localStorage.getItem(THEME_KEY);
  } catch (e) {
    /* localStorage unavailable (e.g. file:// privacy mode) — ignore */
  }

  if (storedTheme) {
    applyTheme(storedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    applyTheme("dark");
  }

  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        /* ignore */
      }
    });
  }

  /* ------------------------------------------------------------------
     Mobile navigation toggle
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the mobile menu after a link is chosen
    siteNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------------------------------------------
     Scroll-spy: highlight the nav link for the section in view
     ------------------------------------------------------------------ */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-links a[href^='#']")
  );
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     Back-to-top button (created here so the HTML stays clean)
     ------------------------------------------------------------------ */
  var backToTop = document.createElement("button");
  backToTop.id = "back-to-top";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener(
    "scroll",
    function () {
      backToTop.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true }
  );

  /* ------------------------------------------------------------------
     Footer year
     ------------------------------------------------------------------ */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
