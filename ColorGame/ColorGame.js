var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //Mode Buttons
  setupModeButtons();
  setupSquares();
  reset();
}


function reset(){
  //Generate new colors and pick new random color
  colors = genColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";

  messageDisplay.textContent =  "";

  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click",reset);

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        numOfSquares = 3;
      }
      else{
        numOfSquares = 6;
      }
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //Add listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of square and compare
      var clickedColor = this.style.backgroundColor;
      // console.log(clickedColor, pickedColor);
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function changeColors(color){
  //loop through squares and change color
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function genColors(num){
  //create array adding num random colors
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
