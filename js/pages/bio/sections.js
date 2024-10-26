import { mainSection, spinner } from "/js/data/constants.js";
import { alertMessage } from "/js/components/validation/messages.js";
import bioText from "../../data/objects/bioText.js";

export function displayBioText() {
  const pTitles = bioText.paragraphTitles;
  const pText = bioText.paragraphText;
  const pTitlesArray = Object.values(pTitles);
  const pTextArray = Object.values(pText);

  mainSection.classList.add("bioMainSection");

  let currentVisibleText = null;

  try {
    spinner.style.display = "none";

    pTitlesArray.forEach((title, index) => {
      const displayTextBtn = document.createElement("button");
      displayTextBtn.classList.add("textButton");
      displayTextBtn.innerText = title;

      const columnDiv = document.createElement("div");
      columnDiv.classList.add("column");

      const pElement = document.createElement("p");
      pElement.classList.add("hiddenText");
      pElement.innerHTML = pTextArray[index].replace(/\n/g, "<br /><br />");

      columnDiv.appendChild(pElement);
      columnDiv.appendChild(displayTextBtn);
      mainSection.appendChild(columnDiv);

      displayTextBtn.addEventListener("click", () => {
        if (currentVisibleText && currentVisibleText !== pElement) {
          currentVisibleText.classList.remove("visibleText");
          currentVisibleText.classList.add("hiddenText");
          currentVisibleText.style.maxHeight = "0px";
        }

        if (pElement.classList.contains("hiddenText")) {
          pElement.classList.remove("hiddenText");
          pElement.classList.add("visibleText");
          pElement.style.maxHeight = pElement.scrollHeight + "px";
          currentVisibleText = pElement;
        } else {
          pElement.classList.remove("visibleText");
          pElement.classList.add("hiddenText");
          pElement.style.maxHeight = "0px";
          currentVisibleText = null;
        }

        if (currentVisibleText) {
          columnDiv.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  } catch (error) {
    alertMessage("Couldn't load text content", "error");
    throw error;
  }
}
