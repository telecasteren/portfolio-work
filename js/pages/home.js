import { titleMessage } from "../components/staticUI/titleMsg.js";
import { mainSection } from "../data/constants.js";

document.addEventListener("DOMContentLoaded", function () {
  titleMessage("welcome!");
  welcomeImg();
});

function welcomeImg() {
  const imgDiv = document.createElement("div");
  const imgElement = document.createElement("img");
  imgDiv.classList.add("triangle-img");
  imgElement.src = "images/triangle-symbol-light.png";
  imgElement.alt = "Image of a triangle";

  imgDiv.appendChild(imgElement);
  mainSection.appendChild(imgDiv);
}
