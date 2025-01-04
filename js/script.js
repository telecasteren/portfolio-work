import { footerOnScroll } from "./components/staticUI/footer.js";
import { titleMessage } from "/js/components/staticUI/titleMsg.js";
import { topContent } from "/js/pages/landing/topContent.js";
import { showcaseSection } from "/js/pages/landing/showcaseSection.js";
import {
  landingContent,
  portfolioContent,
} from "/js/data/general/constants.js";
import { contactFormEvents } from "/js/pages/landing/contactSection/contactFormEvents.js";
import { iconEvent } from "/js/pages/landing/contactSection/iconEvent.js";
import { displayProjects } from "/js/pages/portfolio/displayProjects.js";
import { createColorModeToggle } from "/js/components/colorMode/colorModeToggle.js";
import { colorModeToggleEvents } from "/js/components/colorMode/colorModeEvents.js";
import { setSpecificColors } from "/js/data/helpers/setSpecificColors.js";

// display footer upon scroll
document.addEventListener("scroll", function () {
  footerOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  createColorModeToggle();
  colorModeToggleEvents();

  if (landingContent) {
    titleMessage("Hello there!", "landingTitle");
    topContent();
    showcaseSection();
    contactFormEvents();
    iconEvent();
    setSpecificColors();
  }

  if (portfolioContent) {
    displayProjects();
  }
});
