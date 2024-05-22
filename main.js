const btn1 = document.querySelector(".turn-on");
const btn2 = document.querySelector(".turn-off");
const img = document.querySelector(".image");

btn1.addEventListener("click", function() {
    img.src = "assets/on.gif";
})

btn2.addEventListener("click", function() {
    img.src = "assets/off.gif";
})