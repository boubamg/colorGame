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
var messageDisplay = document.querySelector("#message");
var colorPicked = pickColor();

colorDisplay.textContent = colorPicked;


for(var i = 0; i < square.length; i++){

    // add initial colors to square
    square[i].style.background = colors[i];

    // add click listener to square
    square[i].addEventListener("click", function(){

        var clickedColor = this.style.background;

        // compare color to colorpicked
        if (clickedColor === colorPicked){
           changeColors(colorPicked);
            messageDisplay.textContent = "Correct";
        } else {
            this.style.background = "#FDF2E9";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < square.length; i++){
        // change each color to match given color
        square[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}