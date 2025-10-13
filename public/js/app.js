console.log("app.js loaded");
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("hello-hook");
  if (el) el.textContent = "🔧 JS is working — ready for interactive graphics!";
});
