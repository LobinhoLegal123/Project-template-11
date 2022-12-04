var ship
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");  


}

function setup(){

  var sea = createSprite(200,200,10,10);
sea.addImage(seaImg)
sea.velocity.x = 3;

var ship = createSprite (200,300,10,10);
ship.addAnimation("navegando",shipImg1)
 ship.scale=0.25;
}


function draw() {
  background("blue");
    drawSprites();

    }
