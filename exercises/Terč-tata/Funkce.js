const test = document.getElementById('test');
const terc = document.getElementById('terc');
variable = 0;

function changeColor(event, color1, color2, alignItems) {
    console.log(event);
    event.target.style.backgroundImage = `linear-gradient(${color1}, ${color2})`;
    event.target.style.alignItems = alignItems;
    event.target.style.transition = "background-image 0.5s ease, align-items 0.5s ease";
}
function changePosition(event) {
    variable += 1;
    const randomTop = (Math.floor(Math.random() * 500) + 20) + "px";
    const randomLeft = (Math.floor(Math.random() * 500) + 20) + "px";

    console.log(randomTop);
    event.target.style.top = randomTop;
    event.target.style.left = randomLeft;

    test.textContent = "Score: " + variable;
}
function changeTercColor(event, color, duration) {
    console.log(event);
    event.target.style.backgroundColor = color;
    event.target.style.transition = `background-color ${duration} ease`;
}

test.addEventListener("click", (event) => changeColor(event, "#ff0000", "#ff7e7e", "normal"));
test.addEventListener("mouseenter", (event) => changeColor(event, "#9cff97", "#09ff00", "normal"));
test.addEventListener("mouseleave", (event) => changeColor(event, "#97fff3", "#00ffe4", "center"));
terc.addEventListener("click", changePosition);
terc.addEventListener("mouseenter", (event) => changeTercColor(event, "#7dff67", "2s"));
terc.addEventListener("mouseleave", (event) => changeTercColor(event, "#b7e6ad", "0.5s"));
