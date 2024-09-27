let links =  [
    {text:"home", src :"index.html"},
    {text:"contact", src :"contact.html"},
    {text:"about", src :"about.html"}
];

const menu = document.createElement("nav");
let inner="";

    for (const link of links) {
        inner += "<a href='" + link.src + "'>"+ link.text +"</a>";
    }

    menu.innerHTML = inner;

const tagProVlozeniMenu = document.getElementById("tagProVlozeniMenu");
tagProVlozeniMenu.appendChild(menu);



