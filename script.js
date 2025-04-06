// Array of rotating job titles
const roles = ["FullStack Developer", "Web Designer", "Web Developer"];
let index = 0;

const glitchEl = document.getElementById("glitch-text");

setInterval(() => {
  index = (index + 1) % roles.length;

  // Update visible text
  glitchEl.textContent = roles[index];

  // Also update glitch overlays via data-text
  glitchEl.setAttribute("data-text", roles[index]);
}, 2000);
