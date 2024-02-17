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
        switcher.innerHTML = "L";
    } else if (html.getAttribute("data-theme") == "dark") {
        html.setAttribute("data-theme", "light");
        switcher.innerHTML = "D";
    }
}