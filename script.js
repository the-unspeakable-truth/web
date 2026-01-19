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
document.addEventListener("click", (e) => {
  if (e.target.matches("button[data-link]")) {
    window.location.href = e.target.dataset.link;
  }
});

// Go back button functionality
const goBackBtn = document.getElementById("goBackBtn");
if (goBackBtn) {
  goBackBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}

const base = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "/");
window.location.href = base + e.target.dataset.link;
