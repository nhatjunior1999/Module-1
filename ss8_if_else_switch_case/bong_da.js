let img0bj = null;
let reset = document.getElementById("reset");
reset.addEventListener("click", reSett);
img0bj = document.getElementById("myImage");
function init(){
    img0bj = document.getElementById("myImage");
    img0bj.style.position = "relative";
    img0bj.style.left = "0px";
}

function moveRight(){
    img0bj.style.left = parseInt(img0bj.style.left) + 100 + "px";
}
function reSett(){
    img0bj.style.left = "0px";
}
window.onload = init;
