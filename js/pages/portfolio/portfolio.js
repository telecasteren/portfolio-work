import projects from "/js/data/objects/projects.js";
import { projectURLs, mainSection } from "../../data/constants.js";
import { commonButton } from "../../components/staticUI/reusableButton.js";
import { alertMessage } from "../../components/validation/messages.js";

document.addEventListener("DOMContentLoaded", function () {
  renderPortfolio(projects);
});

function renderPortfolio(projects) {
  try {
    mainSection.innerHTML = "";

    projects.forEach((project) => {
      const projectDescription = project.description || "No description found.";
      const projectTitle = project.title || "Unknown title";

      const portfolioDiv = document.createElement("div");
      portfolioDiv.classList.add("portfolioDiv");

      const projectURL = projectURLs[project.id] || "/404";
      const buttonElement =
        projectTitle === "News"
          ? commonButton(projectTitle, "", projectURL)
          : commonButton(projectTitle, "", projectURL, true);

      const pElement = document.createElement("p");
      pElement.classList.add("portfolio-p");
      pElement.innerHTML = projectDescription;

      portfolioDiv.appendChild(buttonElement);
      portfolioDiv.appendChild(pElement);
      mainSection.appendChild(portfolioDiv);
    });
  } catch (error) {
    alertMessage("Something went wrong when loading portfolio", "error");
    throw error;
  }
}
