var runner,runnerImg
var road,roadImg
var rock,rockImg
var coin,coinImg
var Score = 0;
//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload() {
    runnerImg = loadImage("runner2.png")
    roadImg = loadImage("background.jpg")
    coinImg = loadImage("coin.jpg")
    rockImg = loadImage("rock.jpg")


}
function createCash() {
  if (World.frameCount % 200 == 0) {
    var coin = createSprite(Math.round(random(50, 350)),40, 10, 10);
coin.addImage(cashImg);
  coin.scale=0.12;
  coin.velocityY = 5;
  coin.lifetime = 200;
  coinG.add(coin);
  }
}
function setup() {
    createCanvas(300,300);
    road = createSprite(150,150);
    road.addImage(roadImg);
    road.velocityX = 10;
    road.scale = 2;
    
runner = createSprite(200,200,20,20);
runner.addImage("runner",runnerImg);
runner.scale=0.8;


}

function draw() {
    background(255);
   
    
    if (gameState === PLAY) {
      
      if(road.x <100 ){
        road.x = 50
      } 
      if(keyDown("left")){
          runner.x = runner.x - 3;
      }
      if(keyDown("right")){
    
            runner.x = runner.x + 3;

      }
      if(keyDown("space")){
  
        runner.velocityY = -10;
    }
    drawSprites();
  }
  textSize(20);
  fill(255);
  text("Score: "+ Score,width-150,30);
  }
  