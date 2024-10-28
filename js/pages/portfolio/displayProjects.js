import { mainSection } from "../../data/constants.js";
import projects from "/js/data/objects/projects.js";
import { renderPortfolio } from "/js/pages/portfolio/renderPortfolio.js";
import { selectColorClass } from "/js/pages/portfolio/selectColorClass.js";

export function displayProjects() {
  mainSection.innerHTML = "";

  const portfolioSection = document.createElement("section");
  portfolioSection.classList.add("portfolioSection");

  const welcomeMessage = document.createElement("h3");
  welcomeMessage.classList.add("portfolioMessage");
  welcomeMessage.innerText = `A collection of some things I've created.`;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");

  const websitesBtn = document.createElement("button");
  websitesBtn.classList.add("button", "lineButton", "btn");
  websitesBtn.innerText = "Websites";

  websitesBtn.addEventListener("click", () => {
    renderPortfolio(projects);
    selectColorClass(projects);
  });

  const showcaseBtn = document.createElement("button");
  showcaseBtn.classList.add("button", "lineButton", "btn");
  showcaseBtn.innerText = "Showcases";

  showcaseBtn.addEventListener("click", () => {
    const description = document.createElement("h3");
    description.innerText = "No showcases to display yet..";
    mainSection.appendChild(description);
  });

  buttonContainer.appendChild(websitesBtn);
  buttonContainer.appendChild(showcaseBtn);
  portfolioSection.appendChild(buttonContainer);
  portfolioSection.appendChild(welcomeMessage);
  mainSection.appendChild(portfolioSection);
  mainSection.appendChild(portfolioSection);
}
