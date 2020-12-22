var PLAY=1;
var END=0;
var gameState=PLAY;

var monkey , monkey_running;
var banana,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
   
  monkey=createSprite(80,315,20,20); 
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.volicityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  
  
  
  
  score=0
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);

    if (World.frameCount%80===0) {
    var banana = createSprite(400,200,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime=150;
    foodGroup.add(banana);
    }
  
   if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,325,50,50); 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.13;
    obstacle.velocityX=-4; 
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
}
 