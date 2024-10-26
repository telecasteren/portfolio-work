import { footerOnScroll } from "./components/staticUI/footer.js";
import { titleMessage } from "/js/components/staticUI/titleMsg.js";
import { topContent } from "/js/pages/landing/topContent.js";
import { showcaseSection } from "/js/pages/landing/showcaseSection.js";
import { landingContent } from "/js/data/constants.js";
import { displayContactEvents } from "/js/pages/landing/contactSection/displayContactEvents.js";

// calling common actions and functions
document.addEventListener("scroll", function () {
  footerOnScroll();
});

// Landing page content
document.addEventListener("DOMContentLoaded", function () {
  if (landingContent) {
    titleMessage("Hello there!", "landingTitle");
    topContent();
    showcaseSection();
    displayContactEvents();
  }
});
