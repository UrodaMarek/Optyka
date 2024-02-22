function changeVisibility() {
  let description = document.getElementById("description");
  let button = document.querySelector("button");

  if (description.getAttribute("style") == "display: none;") {
    description.setAttribute("style", "display: block;");
    button.innerHTML = "<";
  } else if (description.getAttribute("style") == "display: block;") {
    description.setAttribute("style", "display: none;");
    button.innerHTML = ">";
  }
}

function changeTheme() {
  let html = document.documentElement;
  let switcher = document.getElementById("themeSwitcher");

  if (html.getAttribute("data-theme") == "light") {
    html.setAttribute("data-theme", "dark");
    switcher.innerHTML = "<div>L</div>";
  } else if (html.getAttribute("data-theme") == "dark") {
    html.setAttribute("data-theme", "light");
    switcher.innerHTML = "<div>D</div>";
  }
}

function runSimulation() {
  let switcher = document.getElementById("start");

  switcher.setAttribute("onclick", "stopSimulation()");
  switcher.setAttribute("id", "stop");
  switcher.innerHTML = "<div>#</div>";

  console.log("simulation started");
}

function stopSimulation() {
  let switcher = document.getElementById("stop");

  switcher.setAttribute("onclick", "runSimulation()");
  switcher.setAttribute("id", "start");
  switcher.innerHTML = "<div>O</div>";

  console.log("simulation stopped");
}

/*
  ?Code to testing - Collision system?
  let canvas = document.querySelector("canvas");
  console.log(canvas);
  let canvasContext = canvas.getContext("2d");
  console.log(canvasContext);
  canvasContext.strokeStyle = "#ff0000";
  canvasContext.fillRect(400, 400, 200, 200);
  console.log("something happened");
  canvasContext.stroke();
  console.log(canvasContext);
  TODO: Make it visible;
*/
  