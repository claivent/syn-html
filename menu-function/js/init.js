/* verze jedna

const linksJS = document.createElement("script");
linksJS.setAttribute("src", "links.js");
document.head.appendChild(linksJS);

const menuJS = document.createElement("script");
menuJS.setAttribute("src", "menu.js");
document.head.appendChild(menuJS);
*/

// lepsi verze

function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}

loadScript("../js/links.js");
loadScript("../js/menu.js");





