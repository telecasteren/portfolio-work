export function setSpecificColors() {
  const isDarkMode = window.localStorage.getItem("darkMode");
  const phrases = document.querySelector(".listUL");

  if (isDarkMode === true) {
    phrases.style.color = "var(--background)";
  } else if (isDarkMode === false) {
    phrases.style.color = "var(--text)";
  }
}
