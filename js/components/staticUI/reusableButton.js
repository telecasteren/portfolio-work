export function commonButton(
  text,
  additionalClass = "",
  href = "",
  openInNewTab = false
) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = text;

  if (additionalClass) {
    const classes = additionalClass.split(" ");
    classes.forEach((cls) => {
      button.classList.add(cls);
    });
  }

  button.addEventListener("click", () => {
    if (openInNewTab) {
      window.open(href, "_blank");
    } else {
      window.location.href = href;
    }
  });

  return button;
}
