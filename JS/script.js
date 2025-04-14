// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    }
  });
});

// Sticky Navigation
// window.addEventListener("scroll", () => {
//   const navbar = document.getElementById("navbar");
//   if (window.scrollY > 100) {
//     navbar.style.padding = "1rem 0";
//     navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
//   } else {
//     navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
//   }
// });

// Form Submission (Demo)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // In a real application, you would send this data to a server
    // For demo purposes, we'll just show an alert
    alert(
      `Thank you, ${name}! Your message has been received. I'll get back to you shortly.`
    );

    // Reset form
    contactForm.reset();
  });
}
