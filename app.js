var big_wrapper = document.querySelector(".big-wrapper");
var hamburger_menu = document.querySelector(".hamburger-menu");

// Add click event to toggle menu visibility
hamburger_menu.addEventListener("click", () => {
  big_wrapper.classList.toggle("active");
})