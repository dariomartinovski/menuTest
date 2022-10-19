const mainTitle = document.querySelector("#mainTitle");
const subtitle = document.querySelector("#subTitle");
const menuButton = document.querySelector(".toggleButton");
const homeButton = document.querySelector(".homeButton");

loadText();

function loadText() {
  menuButton.style.opacity = "0";
  mainTitle.style.transform = "translateY(0)";
  mainTitle.style.opacity = "1";
  subtitle.style.transform = "translateY(0)";
  subtitle.style.opacity = "1";
  menuButton.style.opacity = "1";
  // menuButton.style.transform = "translate(0,0)";
  homeButton.style.top = "0";
  homeButton.style.left = "0";
  homeButton.style.transform = "scale(1)";
  homeButton.style.opacity = "1";
  setTimeout(() => (homeButton.style.position = "static"), 2000);
  setTimeout(() => (menuButton.style.opacity = "1"), 2000);
}
