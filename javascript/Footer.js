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
    // let pharagraph2 = document.createElement("p");
    // pharagraph2.textContent = "078/363-799";
    // planbContacts.appendChild(pharagraph2);
    let developers = document.createElement("div");
    developers.classList.add("creators");
    let pharagraph3 = document.createElement("p");
    pharagraph3.textContent = "Designed and developed by";
    developers.appendChild(pharagraph3);
    let pharagraph4 = document.createElement("p");
    pharagraph4.textContent = "Dario Martinovski";
    developers.appendChild(pharagraph4);
    let pharagraph5 = document.createElement("p");
    pharagraph5.textContent = "Andrej Panev";
    developers.appendChild(pharagraph5);
    footer.appendChild(planbContacts);
    footer.appendChild(developers);
}