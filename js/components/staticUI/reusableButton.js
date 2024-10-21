export function commonButton(
  text,
  additionalClass = "",
  href = "",
  openInNewTab = false
) {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  if (additionalClass) {
    const classes = additionalClass.split(" ");
    classes.forEach((cls) => {
      buttonDiv.classList.add(cls);
    });
  }

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = text;

  button.addEventListener("click", () => {
    if (openInNewTab) {
      window.open(href, "_blank");
    } else {
      window.location.href = href;
    }
  });

  buttonDiv.appendChild(button);
  return buttonDiv;
}
