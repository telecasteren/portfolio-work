import { displayContactForm } from "/js/pages/landing/contactSection/contactFormEvents.js";

export function iconEvent() {
  const emailIcon = document.querySelector(".emailIcon");
  const getInTouchBtn = document.querySelector(".contactButton");

  emailIcon.addEventListener("click", () => {
    getInTouchBtn.style.opacity = "0";
    displayContactForm();
  });
}
