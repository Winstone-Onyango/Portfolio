/* ============================================================
   ONYANGO WINSTONE — PORTFOLIO
   Vanilla JS: themes, typewriter, nav, scroll-reveal, form
============================================================ */

(function () {
  "use strict";

  const htmlEl = document.documentElement;
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const typedEl = document.getElementById("typed-roles");
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  /* —  —  —  — Theme dropdown (System / Dark / Light) —  —  —  — */
  const themeSelect = document.getElementById("theme-select");
  const themeIcon = document.querySelector(".theme-select-icon");
  const themeIcons = {
    system: "\u{1F317}",
    dark: "\u{1F319}",
    light: "\u2600\uFE0F"
  };

  function applySystemTheme() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    htmlEl.setAttribute("data-theme", isDark ? "dark" : "light");
  }
  function applyTheme(theme) {
    if (theme === "system") {
      htmlEl.removeAttribute("data-theme");
      applySystemTheme();
    } else {
      htmlEl.setAttribute("data-theme", theme);
    }
    localStorage.setItem("portfolio-theme", theme);
    if (themeSelect && themeSelect.value !== theme) themeSelect.value = theme;
    if (themeIcon) themeIcon.innerHTML = themeIcons[theme] || themeIcons.system;
  }
  function initTheme() {
    const saved = localStorage.getItem("portfolio-theme") || "system";
    applyTheme(saved);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if ((localStorage.getItem("portfolio-theme") || "system") === "system") applySystemTheme();
    });
  }
  if (themeSelect) {
    themeSelect.addEventListener("change", function () { applyTheme(themeSelect.value); });
  }
  initTheme();

  /* —  —  —  — Typewriter —  —  —  — */
  if (typedEl) {
    const roles = [
      "Telecommunication and Information Engineer",
      "AI/ML Engineer",
      "Network Design and Management",
      "Robotics IoT & Automation",
      "Software Developer",
      "Electrical & Embedded Systems",
    ];
    let roleIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
      const current = roles[roleIndex];
      if (isDeleting) {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 600);
          return;
        }
        setTimeout(type, 35);
      } else {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 2200);
          return;
        }
        setTimeout(type, 80);
      }
    }
    setTimeout(type, 600);
  }

  /* —  —  —  — Mobile nav —  —  —  — */
  if (navToggle && navMenu) {
    function setNav(open) {
      navMenu.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    }
    navToggle.addEventListener("click", function () {
      setNav(!navMenu.classList.contains("open"));
    });
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setNav(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNav(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) setNav(false);
    });
    setNav(false);
  }

  /* —  —  —  — Scroll spy —  —  —  — */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-menu a[href^='#']");
  function updateActiveNav() {
    let current = "";
    sections.forEach(function (section) {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) current = section.getAttribute("id");
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  /* —  —  —  — Scroll reveal —  —  —  — */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* —  —  —  — Contact form (Formspree + mailto fallback) —  —  —  — */
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
  const FALLBACK_EMAIL = "winstoneonyango76@gmail.com";

  function showMessage(text, type) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.className = "form-message " + type;
    formMessage.style.display = "flex";
    setTimeout(function () { formMessage.style.display = "none"; }, 5000);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject") || "Portfolio contact";
      const message = formData.get("message");
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      submitBtn.disabled = true;

      // Fallback to mailto if Formspree isn't configured yet
      if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
        const body = "From: " + name + " (" + email + ")%0D%0A%0D%0A" + encodeURIComponent(message);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showMessage("✓ Opening your email app to send this message…", "success");
        window.location.href = "mailto:" + FALLBACK_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + body;
        return;
      }

      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            showMessage("✓ Thanks! Your message has been sent. I’ll reply soon.", "success");
            contactForm.reset();
          } else {
            response.json().then(function () {
              showMessage("✗ Something went wrong. Please try again or email me directly.", "error");
            });
          }
        })
        .catch(function () {
          showMessage("✗ Network error. Please try again or email me directly.", "error");
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  /* — Back to top button — */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("show", window.scrollY > 400);
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* — Reading progress bar + sticky header state — */
  const scrollProgress = document.getElementById("scroll-progress");
  const siteHeader = document.querySelector(".site-header");

  function updateScrollProgress() {
    if (siteHeader) siteHeader.classList.toggle("scrolled", window.scrollY > 12);
    if (!scrollProgress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgress.style.width = Math.min(100, Math.max(0, percent)) + "%";
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();
})();