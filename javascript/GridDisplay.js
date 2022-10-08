const main = document.querySelector("main");
const title = document.querySelector("#title");
let drinks = [];

if((title.textContent).includes("Кафе")){
    drinks=coffees;
}
else if((title.textContent).includes("Без алхохолно")){
    drinks=nonAlhoholic;
}
else if((title.textContent).includes("Вода")){
    drinks=waters;
}
else if((title.textContent).includes("Пиво")){
    drinks=beers;
}
else if((title.textContent).includes("Жестоко")){
    drinks=liquors;
}
else if((title.textContent).includes("Вино")){
    drinks=wines;
}
else if((title.textContent).includes("Друго")){
    drinks=others;
}

loadDrinks();

function loadDrinks (){
    drinks?.map(item =>{ 
            let gridElement = document.createElement("div");
            gridElement.classList.add("gridItem");
            let image = document.createElement("img");
            image.setAttribute("src",`${item.imgSrc}`);
            image.setAttribute("alt",`${item.enTitle}`);
            let header = document.createElement("h3");
            header.textContent = item.mkTitle;
            let header2 = document.createElement("h6");
            header2.textContent = item.enTitle;
            let pharagraph = document.createElement("p");
            pharagraph.textContent= item.price;
            gridElement.appendChild(image);
            gridElement.appendChild(header);
            gridElement.appendChild(header2);
            gridElement.appendChild(pharagraph);
            main.appendChild(gridElement);
        })
}