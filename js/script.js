import { footerOnScroll } from "./components/staticUI/footer.js";
import { titleMessage } from "/js/components/staticUI/titleMsg.js";
import { topContent } from "/js/pages/landing/topContent.js";
import { showcaseSection } from "/js/pages/landing/showcaseSection.js";
import { landingContent, portfolioContent } from "/js/data/constants.js";
import { contactFormEvents } from "/js/pages/landing/contactSection/contactFormEvents.js";
import { iconEvent } from "/js/pages/landing/contactSection/iconEvent.js";
import { displayProjects } from "/js/pages/portfolio/displayProjects.js";

// display footer upon scroll
document.addEventListener("scroll", function () {
  footerOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  if (landingContent) {
    titleMessage("Hello there!", "landingTitle");
    topContent();
    showcaseSection();
    contactFormEvents();
    iconEvent();
  }

  if (portfolioContent) {
    displayProjects();
  }
});
