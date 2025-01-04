import { mainSection } from "/js/data/general/constants.js";
import projects from "/js/data/services/objects/projects.js";
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
    welcomeMessage.style.transition = "transform 0.3s ease";
    welcomeMessage.style.transform = "scaleX(0)";

    setTimeout(() => {
      welcomeMessage.innerText = "No showcases to display yet..";
      welcomeMessage.style.transform = "scaleX(1)";
    }, 300);
  });

  buttonContainer.appendChild(websitesBtn);
  buttonContainer.appendChild(showcaseBtn);
  portfolioSection.appendChild(buttonContainer);
  portfolioSection.appendChild(welcomeMessage);
  mainSection.appendChild(portfolioSection);
  mainSection.appendChild(portfolioSection);
}
