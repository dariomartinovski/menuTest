const footer = document.querySelector("footer");

createFooter();

function createFooter(){
    let planbContacts = document.createElement("div");
    planbContacts.classList.add("planbContacts");
    let pharagraph = document.createElement("p");
    pharagraph.textContent = "Plan B contacts";
    planbContacts.appendChild(pharagraph);
    let pharagraph1 = document.createElement("p");
    pharagraph1.textContent = "078/363-799";
    planbContacts.appendChild(pharagraph1);
    let developers = document.createElement("div");
    developers.classList.add("creators");
    let pharagraph3 = document.createElement("p");
    pharagraph3.textContent = "Designed and developed by";
    developers.appendChild(pharagraph3);
    let develpoer1 = document.createElement("p");
    develpoer1.textContent = "Dario Martinovski";
    let link = document.createElement("a");
    link.setAttribute("href","https://dariomartinovski.github.io/portfolio/");
    link.setAttribute("target","_blank");
    link.appendChild(develpoer1);
    developers.appendChild(link);
    let developer2 = document.createElement("p");
    developer2.textContent = "Andrej Panev";
    developers.appendChild(developer2);
    footer.appendChild(planbContacts);
    footer.appendChild(developers);
}