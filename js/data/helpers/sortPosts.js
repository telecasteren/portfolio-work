export function sortPostsByLatest(posts) {
  const postsToSort = posts;
  // Sort default from newest to oldest
  postsToSort.sort((a, b) => {
    if (sortBy === "date") {
      return sortOrder === "desc"
        ? new Date(a.publishDate) - new Date(b.publishDate)
        : new Date(b.publishDate) - new Date(a.publishDate);
    } else if (sortBy === "title") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
  });

  return postsToSort;
}
