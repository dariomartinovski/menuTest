const dropdownButton = document.querySelector(".toggleButton");
const navlinks = document.querySelector(".navlinks");
const menuButtons = document.querySelectorAll(".navlink");

menuButtons.forEach(item => {
    item.addEventListener("click", ()=>{
        navlinks.classList.remove("active");
    })
})

dropdownButton.addEventListener("click",e=>{
    navlinks.classList.toggle("active");
})