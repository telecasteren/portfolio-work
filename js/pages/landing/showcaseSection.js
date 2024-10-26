import { mainSection } from "/js/data/constants.js";

export function showcaseSection() {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("showcaseSection");

  const columnGrid = document.createElement("div");
  columnGrid.classList.add("columnGrid");

  sectionElement.appendChild(columnGrid);
  mainSection.appendChild(sectionElement);
}
