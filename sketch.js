
var gameState = 0;
var playerCount;
var database;
var form, game, player;

function setup() {
    //Llamamos a la base de datos
    database = firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.update();

}

function draw(){

}

