const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.style.backgroundColor = "rgb(118, 109, 255)";
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "100";
    navbar.style.transition = "all 0.8s ";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
