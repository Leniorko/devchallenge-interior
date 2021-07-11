// Toggle humberger menu logic

function toggleState(element) {
  element.classList.toggle("nav-bar__hamburge-menu--active");
  document.body.style.overflow === "hidden"
    ? (document.body.style.overflow = "visible")
    : (document.body.style.overflow = "hidden");
}
