// Anime masuk
gsap.from(".title, .subtitle, .button-group", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out"
});

// GSAP ScrollTrigger untuk project-card
gsap.utils.toArray(".project-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

// GSAP ScrollTrigger untuk keyboard-card
gsap.utils.toArray(".keyboard-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

// IntersectionObserver: Section fade-in
const sections = document.querySelectorAll("section, header.hero");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#00ffee" },
    line_linked: { enable: true, distance: 150, color: "#00ffee", opacity: 0.4, width: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" }
    }
  }
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.querySelectorAll("a, .btn, .project-card, .keyboard-card").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

// Scroll Navbar Highlight
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const offset = sec.offsetTop - 200;
    if (window.scrollY >= offset) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// VanillaTilt: Efek hover tilt untuk keyboard-card
VanillaTilt.init(document.querySelectorAll(".keyboard-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  scale: 1.05
});
