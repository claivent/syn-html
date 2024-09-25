const test = document.getElementById('test');
const terc = document.getElementById('terc');
variable = 0;

function changeColor(event) {
    console.log(event);
    event.target.style.backgroundImage = "linear-gradient(#ff0000, #ff7e7e)";
    event.target.style.transition = "background-image 0.5s ease"
}

function changeColor2(event){
    console.log(event);
    event.target.style.backgroundImage = "linear-gradient(#9cff97, #09ff00)";
    event.target.style.alignItems = "normal";
    event.target.style.transition = "background-image 0.5s ease, align-items 0.5s ease";
}

function changeColor3(event){
    console.log(event);
    event.target.style.backgroundImage = "linear-gradient(#97fff3, #00ffe4)";
    event.target.style.alignItems = "center";
    event.target.style.transition = "background-image 0.5s ease, align-items 0.5s ease";
}

function changePosition(event){
    variable += 1;
    const placeHolders = Math.floor(Math.random() * 500) + 20;
    const placeHolders2 = Math.floor(Math.random() * 500) + 20;
    const randomTop = placeHolders + "px";
    const randomLeft = placeHolders2 + "px";
    console.log(randomTop);
    event.target.style.top = randomTop;
    event.target.style.left = randomLeft;
    test.style.textContent = "placeHolder";

    placeHolderString = "Score: " + variable;
    test.textContent = placeHolderString;
}

function changeTercColor1(event){
    console.log(event);
    event.target.style.backgroundColor = "#7dff67";
    event.target.style.transition = "background-color 2s ease";
}

function changeTercColor2(event){
    console.log(event);
    event.target.style.backgroundColor = "#b7e6ad";
    event.target.style.transition = "background-color 0.5s ease";
}

test.addEventListener("click", changeColor);
test.addEventListener("mouseenter", changeColor2);
test.addEventListener("mouseleave", changeColor3);

terc.addEventListener("click", changePosition);
terc.addEventListener("mouseenter", changeTercColor1);
terc.addEventListener("mouseleave", changeTercColor2);