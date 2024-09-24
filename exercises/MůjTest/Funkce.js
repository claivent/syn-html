const test = document.getElementById('test');

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

test.addEventListener("click", changeColor);
test.addEventListener("mouseenter", changeColor2);
test.addEventListener("mouseleave", changeColor3);