var colors = generateRandomColor(6);
var square = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var colorPicked = pickColor();

colorDisplay.textContent = colorPicked;

reset.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColor(6);
    // pick a new random color from array
    colorPicked = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = colorPicked;
    // change colors of squares
    for(var i = 0; i < square.length; i++){
        square[i].style.background = colors[i];
    }
    // reset background color
    h1.style.background = "";
    // reset button textcontent
    reset.textContent = "New Colors";
});


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
            reset.textContent = "Play Again ?"
            h1.style.background = clickedColor;
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