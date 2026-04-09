const categoriesList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  // console.log(category);
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements:${category.querySelectorAll("li").length}`);
});
