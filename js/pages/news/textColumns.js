import { mainSection } from "../../data/constants.js";
import { alertMessage } from "/js/components/validation/messages.js";

export async function textColumns() {
  try {
    const spinner = document.querySelector(".spinner");
    const response = await fetch("/js/data/textFiles/newsColumns.json");
    const data = await response.json();

    spinner.style.display = "none";

    data.forEach((item, index) => {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("column");

      const titleElement = document.createElement("h2");
      titleElement.innerHTML = item.title;

      const pElement = document.createElement("p");
      pElement.id = `paragraph-${index}`;
      pElement.innerHTML = item.paragraph.replace(/\n/g, "<br /><br />");

      columnDiv.appendChild(titleElement);
      columnDiv.appendChild(pElement);
      mainSection.appendChild(columnDiv);
    });
  } catch (error) {
    alertMessage("Couldn't load text content", "error");
    throw error;
  }
}
