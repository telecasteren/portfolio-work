import { titleMessage } from "../../components/staticUI/titleMsg.js";
import { mainSection } from "../../data/constants.js";
import { commonButton } from "../../components/staticUI/reusableButton.js";
import { textColumns } from "./textColumns.js";

document.addEventListener("DOMContentLoaded", function () {
  topContent();
  textColumns();

  setTimeout(() => {
    commonButton("Take a look", "bio-btn", "/pages/portfolio/");
  }, 100);
});

function topContent() {
  const container = document.createElement("div");
  const imgDiv = document.createElement("div");
  const imgElement = document.createElement("img");

  container.classList.add("bio-container");
  imgDiv.classList.add("bio-columns");
  imgElement.classList.add("bio-img");
  imgElement.src = "/images/fineshmecker.jpeg";
  imgElement.alt = "background image of the page author";

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("bio-titleDiv");

  const title = titleMessage("my walk of life", "bio-title");

  container.appendChild(imgDiv);
  imgDiv.appendChild(imgElement);
  titleDiv.appendChild(title);
  container.appendChild(titleDiv);
  mainSection.appendChild(container);
}
