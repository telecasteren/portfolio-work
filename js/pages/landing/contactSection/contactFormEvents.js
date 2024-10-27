import { mainSection } from "/js/data/constants.js";
import { contactForm } from "/js/pages/landing/contactSection/contactForm.js";
import { alertMessage } from "/js/components/validation/messages.js";
import { commonButton } from "/js/components/staticUI/reusableButton.js";

export function contactFormEvents() {
  const getInTouchBtn = commonButton(
    "Get in touch!",
    "drawBtn contactButton",
    "#",
    false
  );

  getInTouchBtn.addEventListener("click", () => {
    displayContactForm(getInTouchBtn);
  });

  mainSection.appendChild(getInTouchBtn);
}

export function displayContactForm(getInTouchBtn) {
  const showcaseSection = document.querySelector(".showcaseSection");

  showcaseSection.style.transition = "opacity 1s ease-in-out, visibility 1s";
  showcaseSection.style.opacity = "0";
  showcaseSection.style.visibility = "hidden";

  if (getInTouchBtn) {
    getInTouchBtn.style.opacity = "0";
  }

  setTimeout(() => {
    contactForm();

    const formElement = document.querySelector(".form-container");
    if (formElement) {
      formElement.style.opacity = "0";
      formElement.style.transition = "opacity 1s ease-in-out";

      setTimeout(() => {
        formElement.style.opacity = "1";
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      alertMessage("Thanks, I'll be sure to get back to you soon!", "info");

      formElement.style.opacity = "0";
      formElement.style.visibility = "hidden";

      setTimeout(() => {
        showcaseSection.style.opacity = "0";
        showcaseSection.style.transition =
          "opacity 1s ease-in-out, visibility 1s";
        showcaseSection.style.visibility = "visible";
        showcaseSection.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });

        setTimeout(() => {
          showcaseSection.style.opacity = "1";
          getInTouchBtn.style.opacity = "1";
        }, 10);

        formElement.style.visibility = "hidden";
      }, 500);
    });
  }, 300);
}
