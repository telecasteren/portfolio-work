import { mainSection } from "/js/data/constants.js";

export function topContent() {
  const topSection = document.createElement("section");
  topSection.classList.add("landingSection");

  const topText = document.createElement("div");
  topText.classList.add("topText");
  topText.innerHTML = `<p>My name is Tele.</p>
  <h2>I'm a front-end developer from Norway.<br/>
  I am also notoriously curious about everything.</h2>`;

  const imgElDiv = document.createElement("div");
  imgElDiv.classList.add("imgDiv-landing");

  const imgElement = document.createElement("img");
  imgElement.classList.add("imgEl-landing");
  imgElement.alt = "Image of the website author";
  imgElement.src = "/js/data/images/coffeeLembongan.jpeg";

  topSection.appendChild(topText);
  imgElDiv.appendChild(imgElement);
  topSection.appendChild(imgElDiv);
  mainSection.appendChild(topSection);
}
