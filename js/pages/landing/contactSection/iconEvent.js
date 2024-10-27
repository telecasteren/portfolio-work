import { displayContactForm } from "/js/pages/landing/contactSection/contactFormEvents.js";

export function iconEvent() {
  const emailIcon = document.querySelector(".emailIcon");

  emailIcon.addEventListener("click", () => {
    displayContactForm();
  });
}
