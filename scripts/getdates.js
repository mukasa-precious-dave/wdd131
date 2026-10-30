// Hamburger menu toggle logic
const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  hamburgerButton.classList.toggle('open');
});

// Footer Dates Logic
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}