var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
];

var square = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var colorPicked = colors[2];

colorDisplay.textContent = colorPicked;


for(var i = 0; i < square.length; i++){
    square[i].style.background = colors[i];

    square[i].addEventListener("click", function(){
        
        if (this.style.background === colorPicked){
            alert("Win");
        } else {
            alert("loose");
        }
    });
}