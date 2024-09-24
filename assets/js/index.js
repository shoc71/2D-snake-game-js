const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d"); // ctx - context, no idea if .getCotext() is legit
const scoreTExt = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton")
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "lightgrey";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

gameStart();
// createFood();
// drawFood();

function gameStart(){
    running=true;
    scoreTExt.textContent = score;
    createFood();
    drawFood();
    nextTick();
    console.log(`Food Position: (${foodX}, ${foodY})`);

};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75) // milliseconds
    }
    else{
        displayGameOver();
    }
};
function clearBoard(){
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight)
};
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    };
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
};
function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){
    
};
function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};