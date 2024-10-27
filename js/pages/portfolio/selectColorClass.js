const colorMap = {
  project1: "color-one",
  project2: "color-two",
  project3: "color-three",
  project4: "color-four",
  project5: "color-five",
  project6: "color-six",
};

export function selectColorClass(projects) {
  projects.forEach((project) => {
    const projectId = project.id;
    const buttonEl = document.querySelector(`[data-project-id="${projectId}"]`);

    if (!buttonEl) return;

    const colorClass = colorMap[project.id];
    if (colorClass) {
      buttonEl.classList.add(colorClass);
    }
  });
}
