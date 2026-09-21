/* ============================================================
   ONYANGO WINSTONE â€” PORTFOLIO
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

  /* â€”  â€”  â€”  â€” Theme dropdown (System / Dark / Light) â€”  â€”  â€”  â€” */
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

  /* â€”  â€”  â€”  â€” Typewriter â€”  â€”  â€”  â€” */
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

  /* â€”  â€”  â€”  â€” Mobile nav â€”  â€”  â€”  â€” */
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

  /* â€”  â€”  â€”  â€” Scroll spy â€”  â€”  â€”  â€” */
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

  /* â€”  â€”  â€”  â€” Scroll reveal â€”  â€”  â€”  â€” */
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

  /* â€”  â€”  â€”  â€” Contact form (sends email directly via FormSubmit AJAX) â€”  â€”  â€”  â€” */
  // FormSubmit email endpoint - posts straight to the owner's inbox. First
  // submission to a new address triggers a one-off confirmation email (open
  // your inbox and click the link; after that emails are sent for real).
  const FORM_ENDPOINT = "https://formsubmit.co/ajax/winstoneonyango76@gmail.com";

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
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sendingâ€¦";
      submitBtn.disabled = true;

      // POSTs JSON to FormSubmit. The message lands directly in the owner's
      // inbox â€” no email application is opened on the visitor's side.
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          _subject: formData.get("subject") || "New message from your portfolio",
          _replyto: formData.get("email"),
          message: formData.get("message"),
          _captcha: "false"
        })
      })
        .then(async function (response) {
          // FormSubmit returns its JSON body with a "text/html" content-type,
          // so read the text first (works regardless of declared type).
          const text = await response.text();
          let payload = null;
          try { payload = JSON.parse(text); } catch (e) { payload = null; }
          const status = response.ok && payload ? response.status : 0;
          return { status: status, payload: payload, raw: text };
        })
        .then(function (result) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;

          const p = result.payload || {};
          // FormSubmit's documented contract: { success: "true", message: "..." }.
          if (result.status >= 200 && result.status < 300 && p.success === "true") {
            showMessage("Message sent", "success");
            contactForm.reset();
            // Reload after a brief confirmation so the visitor sees "Message sent".
            setTimeout(function () { window.location.reload(); }, 1200);
          } else if (p.success === false) {
            // Account-setup state, not a code error: show FormSubmit's message.
            showMessage(p.message || "Message was not sent. Please try again later.", "error");
          } else {
            showMessage("Something went wrong (HTTP " + result.status + "). Please try again or email me directly.", "error");
          }
        })
        .catch(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          showMessage("Network error. Please try again or email me directly.", "error");
        });
    });
  }

  /* â€” Back to top button â€” */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("show", window.scrollY > 400);
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* â€” Reading progress bar + sticky header state â€” */
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
