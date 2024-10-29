// const columnDiv = document.createElement("div");
// columnDiv.classList.add("column");

// const pElement = document.createElement("p");
// pElement.classList.add("hiddenText");
// pElement.innerHTML = pTextArray[index].replace(/\n/g, "<br /><br />");

// TEST FOR BULLETPOINTS

// function convertParagraphsToBullets(paragraphText) {
//   const bulletPoints = {};

//   for (let key in paragraphText) {
//     bulletPoints[key] = paragraphText[key]
//       .split(/(?<=\.)\s+|\n+/)
//       .filter((sentence) => sentence.trim() !== "");
//   }

//   return bulletPoints;
// }

// const columnDiv = document.createElement("div");
// columnDiv.classList.add("column");

// const bulletPoints = convertParagraphsToBullets(pTextArray);

// const list = document.createElement("ul");
// const paragraphKey = `paragraph${index + 1}`;

// if (bulletPoints[paragraphKey]) {
//   bulletPoints[paragraphKey].forEach((bullet) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = bullet.trim();
//     list.appendChild(listItem);
//   });
// }
