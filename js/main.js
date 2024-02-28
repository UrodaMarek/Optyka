import {startShine} from "./light.js";

function changeVisibility() {
  let description = document.getElementById("description");
  let button = document.querySelector("button");

  if (html.getAttribute("data-theme") == "light") { //TODO:Make it shorter
    if (description.getAttribute("style") == "display: none;") {
      description.setAttribute("style", "display: block;");
      button.innerHTML = "<img src=\"./img/arrow_l_black.svg\">";
    } else if (description.getAttribute("style") == "display: block;") {
      description.setAttribute("style", "display: none;");
      button.innerHTML = "<img src=\"./img/arrow_r_black.svg\">";
    }
  } else if (html.getAttribute("data-theme") == "dark") {
    if (description.getAttribute("style") == "display: none;") {
      description.setAttribute("style", "display: block;");
      button.innerHTML = "<img src=\"./img/arrow_l_white.svg\">";
    } else if (description.getAttribute("style") == "display: block;") {
      description.setAttribute("style", "display: none;");
      button.innerHTML = "<img src=\"./img/arrow_r_white.svg\">";
    }
  }
}

function changeTheme() {
  
  let images = document.querySelectorAll("img");
  console.log(images);

  if (html.getAttribute("data-theme") == "light") {
    html.setAttribute("data-theme", "dark");
    images[0].setAttribute("src","./img/moon.svg");
    images[1].setAttribute("src","./img/arrow_l_white.svg");
    images[2].setAttribute("src","./img/arrow_r_white.svg");
    images[3].setAttribute("src","./img/white_start.svg");
    images[4].setAttribute("src","./img/white_plus.svg");
    images[5].setAttribute("src","./img/arrow_r_white.svg");
  } else if (html.getAttribute("data-theme") == "dark") {
    html.setAttribute("data-theme", "light");
    images[0].setAttribute("src","./img/sun.svg");
    images[1].setAttribute("src","./img/arrow_l_black.svg");
    images[2].setAttribute("src","./img/arrow_r_black.svg");
    images[3].setAttribute("src","./img/black_start.svg");
    images[4].setAttribute("src","./img/black_plus.svg");
    images[5].setAttribute("src","./img/arrow_r_black.svg");
  }
}

function runSimulation() {
  let switcher = document.getElementById("start");

  switcher.setAttribute("onclick", "stopSimulation()");
  switcher.setAttribute("id", "stop");
  if (html.getAttribute("data-theme") == "light") {
    switcher.innerHTML = "<div><img src=\"./img/black_stop.svg\"></div>";
  } else if (html.getAttribute("data-theme") == "dark"){
    switcher.innerHTML = "<div><img src=\"./img/white_stop.svg\"></div>";
  }

  startShine(100, 100, canvasContext)
  console.log("simulation started");
  
}

function stopSimulation() {
  let switcher = document.getElementById("stop");

  switcher.setAttribute("onclick", "runSimulation()");
  switcher.setAttribute("id", "start");
  if (html.getAttribute("data-theme") == "light") {
    switcher.innerHTML = "<div><img src=\"./img/black_start.svg\"></div>";
  } else if (html.getAttribute("data-theme") == "dark"){
    switcher.innerHTML = "<div><img src=\"./img/white_start.svg\"></div>";
  }

  console.log("simulation stopped");
}


var html = document.documentElement;
let canvas = document.querySelector("canvas");
document.changeVisibility = changeVisibility;
document.changeTheme = changeTheme;
document.runSimulation = runSimulation;
document.stopSimulation = stopSimulation;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("sizeGuard", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let canvasContext = canvas.getContext("2d");
canvasContext.fillRect(100, 100, 100, 100);
