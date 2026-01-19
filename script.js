const themeBtn = document.getElementById("themeBtn");

// Load theme from localStorage or default to dark
let dark = localStorage.getItem("theme") !== "light";

// Apply theme on page load
function applyTheme(isDark) {
  document.documentElement.style.setProperty(
    "--bg",
    isDark ? "#0e0e11" : "#f4f4f4"
  );
  document.documentElement.style.setProperty(
    "--text",
    isDark ? "#e5e5e5" : "#0e0e11"
  );
  document.documentElement.style.setProperty(
    "--muted",
    isDark ? "#8b8b8b" : "#555"
  );
}

// Apply saved theme on load
applyTheme(dark);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    dark = !dark;
    applyTheme(dark);
    // Save theme to localStorage
    localStorage.setItem("theme", dark ? "dark" : "light");
  });
}

// Navigate to page when button is clicked
const aboutusbtn = document.querySelector("about-us");
if (aboutusbtn) {
  aboutusbtn.addEventListener("click", () => {
    window.location.href = "pages/about-us.html";
  });
}

const concertsbtn = document.querySelector("concerts");
if (concertsbtn) {
  concertsbtn.addEventListener("click", () => {
    window.location.href = "pages/concerts.html";
  });
}

const contactbtn = document.querySelector("contact-us");
if (contactbtn) {
  contactbtn.addEventListener("click", () => {
    window.location.href = "pages/contact.html";
  });
}

const shopbtn = document.querySelector("shop");
if (shopbtn) {
  shopbtn.addEventListener("click", () => {
    window.location.href = "pages/shop.html";
  });
}

// Go back button functionality
const goBackBtn = document.getElementById("goBackBtn");
if (goBackBtn) {
  goBackBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}