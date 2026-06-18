let originalBg = "white";
let originalText = "Use of JavaScript";
let fontSize = 16;
let visible = true;

let colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lavender"];
let index = 0;

function changeBackground() {
    const box = document.getElementById("mota");
    
    box.style.background = colors[index];
    
    index = (index + 1) % colors.length;
}
function changeHeading() {
    const heading = document.getElementById("heading");
    heading.innerText = "Heading Changed!";
}

function increaseFont() {
    const para = document.getElementById("para");
    fontSize += 2;
    para.style.fontSize = fontSize + "px";
}

function togglePara() {
    const para = document.getElementById("para");
    visible = !visible;
    para.style.display = visible ? "block" : "none";
}

function resetPage() {
    const box = document.getElementById("box");
    const heading = document.getElementById("heading");
    const para = document.getElementById("para");

    box.style.background = originalBg;
    heading.innerText = originalText;

    fontSize = 16;
    para.style.fontSize = "16px";

    para.style.display = "block";
    visible = true;
}