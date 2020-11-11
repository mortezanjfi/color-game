// query selectors
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var playAgain = document.getElementById("playAgain");
var tryAgain = document.getElementById("tryAgain");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
// variables
var target, 
    numberOfSquares = 3, 
    r, 
    g, 
    b, 
    newR = 0, 
    newG = 0, 
    newB = 0;
// call main function that runs all states
play(numberOfSquares);
function play(numberOfSquares){
    target = Math.floor(Math.random()*numberOfSquares);
    for(var i=0; i<numberOfSquares; i++){
        resetEvents();
        r = randColor();
        g = randColor();
        b = randColor();
            if (i === target){
                newR = r;
                newG = g;
                newB = b;
                h1.innerText= "RGB(" + r + ", " + g + ", " + b + ")";
            }
            squares[i].style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    for(var i=0; i<numberOfSquares; i++){
        if(i === target){
            squares[i].addEventListener("click", handleWin)
        } else {
            squares[i].addEventListener("click", handleLoose)
        }
    }
}
function randColor(){
    return Math.round(Math.random() * 255);
}
function handleWin() {
        for(var j=0; j<numberOfSquares; j++){
            squares[j].style.backgroundColor = "rgb(" + newR + ", " + newG + ", " + newB + ")";
        }
        tryAgain.innerHTML = "WIN!";
        document.getElementById("head").style.backgroundColor = "rgb(" + newR + ", " + newG + ", " + newB + ")";
        playAgain.textContent = "PLAY AGAIN";
        resetEvents();
}
function handleLoose(){
    this.classList.add("fade-out");
    this.style.backgroundColor = "transparent";
    tryAgain.innerHTML = "Try Again!";
}
function resetEvents() {
    for(var i=0; i<numberOfSquares; i++){
        squares[i].removeEventListener("click", handleLoose);
        squares[i].removeEventListener("click", handleWin);
    }
}
easy.addEventListener("click", function(){
    this.classList.add("selected");
    hard.classList.remove("selected");
    resetEvents();
    numberOfSquares = 3;
    squares.forEach(function(t){
        t.style.backgroundColor = "transparent";
    })
    playAgain.textContent = "PLAY AGAIN";
})
hard.addEventListener("click", function(){
    this.classList.add("selected");
    easy.classList.remove("selected");
    resetEvents();
    numberOfSquares = 6;
    squares.forEach(function(t){
        t.style.backgroundColor = "transparent";
    })
    playAgain.textContent = "PLAY AGAIN";
})
playAgain.addEventListener("click", function(){
    tryAgain.innerHTML = "";
    playAgain.textContent = "CHANGE COLOR";
    play(numberOfSquares);
})