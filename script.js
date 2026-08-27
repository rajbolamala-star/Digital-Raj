// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Boot-sequence typing line in the hero (runs once, respects reduced motion)
const bootLine = document.getElementById("bootLine");
const bootText = "$ curl status.dheeraj-b.dev/health";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (bootLine) {
  if (prefersReducedMotion) {
    bootLine.textContent = bootText;
  } else {
    let i = 0;
    const type = () => {
      bootLine.textContent = bootText.slice(0, i);
      i++;
      if (i <= bootText.length) {
        setTimeout(type, 28);
      }
    };
    type();
  }
}

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("main .section, main .hero");
const navLinks = document.querySelectorAll("[data-nav]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});
