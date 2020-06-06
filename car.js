var car,wall;
var speed,weigth

var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(59,90);
  weigth=random(400,1500);
  thickness=random(22,38);
  speed=random(223,321);
  weight=random(30,52);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2); 
  wall=createSprite(1200,200 thickness /2); 
   
  car.velocity = speed;

  car.collide=(wall);
}

function draw() {
  background(255,255,255); 
  
  hasCollided();
  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge);{
    return true;
  }
  return false;  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5* weight* speed* speed/(thickness *thick);
  }
  
  if(damadge>10){
    wall.shapeColor=color(255,0,0);
  }  
  if(damage<10){
     wall.shapeColor=color(0,255,0);
  }  
}  