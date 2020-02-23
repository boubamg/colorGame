var colors = generateRandomColor(6);

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

function generateRandomColor(num){

    var arr = [];

    for(var i = 0; i < num; i++){
        // generate random color and push into arr
        
        var randomRgb = randomColor();
        arr.push(randomRgb);
    }
    return arr;
}

function randomColor(){
    // red
    var r = Math.floor(Math.random() * 256);
    // green
    var g = Math.floor(Math.random() * 256);
    // blue
    var b = Math.floor(Math.random() * 256);
    // return rgb color
    // rgb(255, 255, 255)
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    return rgb;
}