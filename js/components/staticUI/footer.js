export function footerOnScroll() {
  const footer = document.querySelector("footer");
  if (window.scrollY > 150) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
}
