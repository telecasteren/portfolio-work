import { titleMessage } from "../../components/staticUI/titleMsg.js";
import { mainSection } from "../../data/constants.js";
import { displayBioText } from "./sections.js";

document.addEventListener("DOMContentLoaded", function () {
  topBioContent();
  displayBioText();
});

function topBioContent() {
  const container = document.createElement("div");
  const imgDiv = document.createElement("div");
  const imgElement = document.createElement("img");

  container.classList.add("bio-container");
  imgDiv.classList.add("bio-columns");
  imgElement.classList.add("bio-img");
  imgElement.src = "/resources/images/fineshmecker.jpeg";
  imgElement.alt = "A fineschmecker person drinking a cocktail";

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("bio-titleDiv");

  const title = titleMessage("my walk of life", "bio-title");

  container.appendChild(imgDiv);
  imgDiv.appendChild(imgElement);
  titleDiv.appendChild(title);
  container.appendChild(titleDiv);
  mainSection.appendChild(container);
}
