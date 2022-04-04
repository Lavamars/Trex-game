var ground 
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(80,160,20,50)
  trex.scale = 0.5
  trex.addAnimation("running",trex_running)
  ground=createSprite(300,180,600,20)
  
  
}

function draw(){
  background("lightblue")
 if(keyDown("space")){
   trex.velocityY = -8
 }

 trex.velocityY= trex.velocityY+0.5
trex.collide(ground)


  drawSprites()
  

}
