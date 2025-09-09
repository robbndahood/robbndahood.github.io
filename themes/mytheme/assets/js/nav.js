// Hamburger menu toggle logic
(function () {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;
  const btn = nav.querySelector(".nav-toggle");
  const menu = nav.querySelector("[data-menu]");
  if (!btn || !menu) return;

  function closeOnEscape(e) {
    if (e.key === "Escape") {
      btn.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", handleClickOutside, true);
    }
  }

  function handleClickOutside(ev) {
    if (!menu.classList.contains("open")) return;
    const target = ev.target;
    if (
      target instanceof Node &&
      (menu.contains(target) || btn.contains(target))
    ) {
      return; // click inside menu or on button
    }
    // Close menu
    btn.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    document.removeEventListener("keydown", closeOnEscape);
    document.removeEventListener("pointerdown", handleClickOutside, true);
  }

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const next = !expanded;
    btn.setAttribute("aria-expanded", String(next));
    menu.classList.toggle("open", next);
    if (next) {
      document.addEventListener("keydown", closeOnEscape);
      // use capture so we run before focus shifts or other handlers
      document.addEventListener("pointerdown", handleClickOutside, true);
    } else {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", handleClickOutside, true);
    }
  });

  // Close menu after clicking a link (for in-page anchors or navigation)
  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.tagName === "A") {
      btn.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", handleClickOutside, true);
    }
  });
})();
