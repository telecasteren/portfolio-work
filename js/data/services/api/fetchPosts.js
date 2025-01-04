import { baseUrl } from "/js/data/services/authentication/endpoints.js";
import { handlePost } from "/js/data/helpers/postHandler.js";

export async function fetchPosts(
  id,
  sortOrder = "desc",
  sortBy = "date",
  perPage = 10,
  page = 1
) {
  try {
    const url = id
      ? `https://portfolio.telecasternilsen.com/wp-json/wp/v2/posts/${id}?_embed`
      : `${baseUrl}&per_page=${perPage}&page=${page}&order=${sortOrder}&orderby=${sortBy}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (id) {
      // Single post
      return handlePost(data);
    } else {
      // Multiple posts
      const posts = data.map(handlePost);

      return posts;
    }
  } catch (error) {
    throw new Error(`Error occurred in API call: ${error.message}`);
  }
}
