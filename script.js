const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#navMenu");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link (mobile UX)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}