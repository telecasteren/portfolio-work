import { mainSection } from "/js/data/general/constants.js";
import { alertMessage } from "/js/components/validation/messages.js";
import { fetchPosts } from "/js/data/services/api/fetchPosts.js";

export async function textColumns() {
  try {
    const spinner = document.querySelector(".spinner");

    const response = await fetchPosts();
    const data = response;

    spinner.style.display = "none";

    const newsSection = document.createElement("div");
    newsSection.classList.add("newsSection");

    data.forEach((post) => {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("newsColumn");
      columnDiv.dataset.postId = post.id;

      const titleElement = document.createElement("h2");
      titleElement.innerHTML = post.title;

      const pElement = document.createElement("p");
      pElement.id = "postTextContent";
      pElement.innerHTML = post.textContent;

      const publishedDate = document.createElement("p");
      publishedDate.id = "publishDate";
      publishedDate.innerText = `Published: ${new Date(
        post.publishDate
      ).toLocaleDateString()}`;

      columnDiv.appendChild(titleElement);
      columnDiv.appendChild(pElement);
      columnDiv.appendChild(publishedDate);
      newsSection.appendChild(columnDiv);
      mainSection.appendChild(newsSection);
    });
  } catch (error) {
    alertMessage("Couldn't load text content", "error");
    throw error;
  }
}
