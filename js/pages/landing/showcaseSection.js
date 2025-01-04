import { mainSection } from "/js/data/general/constants.js";

export function showcaseSection() {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("showcaseSection");

  const columnGrid = document.createElement("div");
  columnGrid.classList.add("columnGrid");

  const sectionContentDiv = document.createElement("div");
  sectionContentDiv.className = "sectionContentDiv";

  const listUL = document.createElement("ul");
  listUL.className = "listUL";

  const phrases = ["Clean code", "Less is more", "Well directed"];
  phrases.forEach((phrase) => {
    const listLI = document.createElement("li");
    listLI.className = "listLI";
    listLI.innerText = phrase;
    listUL.appendChild(listLI);
  });

  sectionContentDiv.appendChild(columnGrid);
  sectionContentDiv.appendChild(listUL);
  sectionElement.appendChild(sectionContentDiv);
  mainSection.appendChild(sectionElement);
}
