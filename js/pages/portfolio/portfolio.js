import projects from "/js/data/projects.js";
import { projectURLs, mainSection } from "../../data/constants.js";
import { commonButton } from "../../components/staticUI/reusableButton.js";
import { alertMessage } from "../../components/messages.js";

document.addEventListener("DOMContentLoaded", function () {
  renderPortfolio(projects);
});

function renderPortfolio(projects) {
  try {
    mainSection.innerHTML = "";

    projects.forEach((project) => {
      const projectDescription = project.description || "No description found.";
      const projectTitle = project.title || "Unknown title";

      const projectURL = projectURLs[project.id] || "/404";
      commonButton(projectTitle, "", projectURL, true);

      const pElement = document.createElement("p");
      pElement.classList.add("portfolio-p");
      pElement.innerHTML = projectDescription;

      mainSection.appendChild(pElement);
    });
  } catch (error) {
    alertMessage("Something went wrong when loading portfolio", "error");
    throw error;
  }
}
