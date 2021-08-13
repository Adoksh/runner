
var runner,boundary1,boundary2,path,pathImg;
function preload(){
  //pre-load images
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
 
  runner=createSprite(180,340,30,30);
  runner.addAnimation("running",runnerImg);
  runner.scale=0.1;

  boundary1=createSprite(0,0,100,800);
  boundary1.visible=false;

  boundary2=createSprite(410,0,100,800);
  boundary2.visible=false;

 
  }
  function draw() {
    background(0);
    path.velocityY=4;

    runner.x=World.mouseX;

    edges=createEdgeSprites();
    runner.collide(edges[3]);
    runner.collide(boundary2);
    runner.collide(boundary1);

    if(path.y>400) {
      path.y=height/2;
    }
drawSprites()
}