/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

// Video Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const thumbnailOverlays = document.querySelectorAll(".thumbnail-overlay");
  const modal = document.getElementById("videoModal");
  const closeModal = document.querySelector(".close-modal");
  const videoFrame = document.getElementById("videoFrame");

  // Update the show/hide modal code
  thumbnailOverlays.forEach((overlay) => {
    overlay.addEventListener("click", function () {
      const videoId = this.dataset.video;
      modal.style.display = "flex"; // Changed from 'block' to 'flex'
      videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    });
  });

  // Update the close handlers
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    videoFrame.src = "about:blank";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "about:blank";
    }
  });
});

// Add this to your existing script.js
document.addEventListener("DOMContentLoaded", function () {
  const resumeBtn = document.getElementById("resumeBtn");
  const pdfModal = document.getElementById("pdfModal");
  const closePdfModal = document.querySelector(".close-pdf-modal");
  const pdfFrame = document.getElementById("pdfFrame");

  // Replace this URL with your Google Drive PDF link
  const pdfUrl =
    "https://drive.google.com/file/d/1vklNWCRFHDJjEYtoEz3gzTMQJ04_lhtc/preview";
  resumeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    pdfModal.style.display = "flex";
    pdfFrame.src = pdfUrl;
  });

  closePdfModal.addEventListener("click", function () {
    pdfModal.style.display = "none";
    pdfFrame.src = "";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === pdfModal) {
      pdfModal.style.display = "none";
      pdfFrame.src = "";
    }
  });
});
