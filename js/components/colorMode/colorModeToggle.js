export function createColorModeToggle() {
  const colorModeSlider = document.querySelector(".colorModeSlider");

  const toggleLabel = document.createElement("label");
  toggleLabel.classList.add("switch", "dark-toggle");
  toggleLabel.innerText = "Toggle color mode";

  const toggleInput = document.createElement("input");
  toggleInput.classList.add("checkbox-switch", "dark-checkbox");
  toggleInput.type = "checkbox";
  toggleInput.id = "checkbox";

  const toggleSwitch = document.createElement("span");
  toggleSwitch.classList.add("toggle-switch");

  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSwitch);
  colorModeSlider.appendChild(toggleLabel);
}
