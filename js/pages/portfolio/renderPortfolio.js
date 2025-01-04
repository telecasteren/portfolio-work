import { projectURLs, mainSection } from "../../data/general/constants.js";
import { commonButton } from "../../components/staticUI/reusableButton.js";
import { alertMessage } from "../../components/validation/messages.js";

export function renderPortfolio(projects) {
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
          ? commonButton(projectTitle, "drawBtn", projectURL)
          : commonButton(projectTitle, "drawBtn", projectURL, true);

      buttonElement.setAttribute("data-project-id", project.id);

      const pElement = document.createElement("p");
      pElement.classList.add("portfolio-p");
      pElement.innerHTML = projectDescription;

      portfolioDiv.appendChild(buttonElement);
      portfolioDiv.appendChild(pElement);
      mainSection.appendChild(portfolioDiv);
    });
  } catch (error) {
    alertMessage("Something went wrong when loading the content", "error");
    throw error;
  }
}
