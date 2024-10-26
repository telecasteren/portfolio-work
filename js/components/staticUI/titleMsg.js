import { mainSection } from "../../data/constants.js";

// Page titles
export function titleMessage(
  message,
  additionalClass = "",
  shouldPrepend = true
) {
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = message;

  if (additionalClass) {
    title.classList.add(additionalClass);
  }

  if (shouldPrepend && mainSection) {
    mainSection.prepend(title);
  }

  return title;
}
