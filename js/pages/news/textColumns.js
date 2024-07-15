import { mainSection } from "../../data/constants.js";

export async function textColumns() {
  try {
    const spinner = document.querySelector(".spinner");
    const response = await fetch("/js/data/textFiles/newsColumns.json");
    const data = await response.json();

    spinner.style.display = "none";

    Object.keys(data).forEach((key) => {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("column");

      const pElement = document.createElement("p");
      pElement.id = key;
      pElement.innerHTML = data[key].replace(/\n/g, "<br /><br />");

      columnDiv.appendChild(pElement);

      mainSection.appendChild(columnDiv);
    });
  } catch (error) {
    alertMessage("Couldn't load text content", "error");
    throw error;
  }
}
