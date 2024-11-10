import { alertMessage } from "/js/components/validation/messages.js";

export function colorModeToggleEvents() {
  const toggleEvent = document.querySelector(".dark-toggle");
  const checkbox = document.querySelector(".dark-checkbox");

  function toggleEventColorMode() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  }

  const systemDefault = window.matchMedia("prefers-color-scheme: dark").matches;

  const localDarkMode = window.localStorage.darkMode;

  if (localDarkMode === "true") {
    checkbox.checked = true;
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else if (localDarkMode === "false") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else if (systemDefault) {
    checkbox.checked = true;
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }

  if (!toggleEvent) {
    alertMessage("Can't switch color scheme right now :'(");
    return;
  }

  toggleEvent.addEventListener("change", (e) => {
    toggleEventColorMode();

    localStorage.setItem("darkMode", checkbox.checked ? true : false);
  });
}
