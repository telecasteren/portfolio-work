import { mainSection, spinner } from "/js/data/general/constants.js";
import { alertMessage } from "/js/components/validation/messages.js";
import bioText from "/js/data/services/objects/bioText.js";

export function displayBioText() {
  mainSection.classList.add("bioMainSection");

  let currentVisibleText = null;

  try {
    spinner.style.display = "none";

    bioText.forEach((object) => {
      const titles = object.title;
      const bulletPoints = object.bullets;

      const columnDiv = document.createElement("div");
      columnDiv.classList.add("column");

      const uList = document.createElement("ul");
      uList.classList.add("uList", "hiddenText");

      const displayTextBtn = document.createElement("button");
      displayTextBtn.classList.add("textButton");
      displayTextBtn.innerText = titles;

      bulletPoints.forEach((bullet) => {
        const listItem = document.createElement("li");
        listItem.classList.add("listItem");
        listItem.innerText = bullet;
        uList.appendChild(listItem);
      });

      columnDiv.appendChild(uList);
      columnDiv.appendChild(displayTextBtn);
      mainSection.appendChild(columnDiv);

      displayTextBtn.addEventListener("click", () => {
        if (currentVisibleText && currentVisibleText !== uList) {
          currentVisibleText.classList.remove("visibleText");
          currentVisibleText.classList.add("hiddenText");
          currentVisibleText.style.maxHeight = "0px";
        }

        if (uList.classList.contains("hiddenText")) {
          uList.classList.remove("hiddenText");
          uList.classList.add("visibleText");
          uList.style.maxHeight = uList.scrollHeight + "px";
          currentVisibleText = uList;
        } else {
          uList.classList.remove("visibleText");
          uList.classList.add("hiddenText");
          uList.style.maxHeight = "0px";
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
