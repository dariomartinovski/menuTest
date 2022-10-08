const main = document.querySelector("main");
let drinks = cocktails;

drinks?.map(item =>{ 
    let gridElement = document.createElement("div");
    gridElement.classList.add("gridItem");
    let title = document.createElement("h2");
    title.textContent = item.title;
    let pictureIngredients = document.createElement("div");
    pictureIngredients.classList.add("pictureIngredients");
    let image = document.createElement("img");
    image.setAttribute("src",`${item.imgSrc}`);
    image.setAttribute("alt",`${item.title}`);
    let ingredients = document.createElement("div");
    ingredients.classList.add("ingredients");
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "Ingredients:";
    let ingredientList = document.createElement("ul");
    item.ingredients.map(ingredient => {
        let listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientList.appendChild(listItem);
    })
    ingredients.appendChild(ingredientsHeader);
    ingredients.appendChild(ingredientList);
    pictureIngredients.appendChild(image);
    pictureIngredients.appendChild(ingredients);
    let price = document.createElement("p");
    price.textContent = item.price;
    gridElement.appendChild(title);
    gridElement.appendChild(pictureIngredients);
    gridElement.appendChild(price);
    main.appendChild(gridElement);
})

