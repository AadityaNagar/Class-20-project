var garden,gardenImage
var cat,catAnimation,catReach,catRest 
var mouse,mouseAnimation,mouseReach,mouseRest
function preload() {
    //load the images here
    catRest.loadAnimation("cat1.png")
    mouseRest.loadAnimation("mouse1.png")
    catAnimation.loadAnimation("cat2.png","cat3.png")
    mouseAnimation.loadAnimation("mouse2.png","mouse3.png")
    gardenImage.loadImage("garden.png")
    catReach.loadAnimation("cat4.png")
    mouseReach.loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800)
    garden.addImage("garden.png")

    cat = createSprite(800,600,50,50)
    cat.addAnimation("catResting",catRest)

    mouse = createSprite(100,600,50,50)
    mouse.addAnimation("mouseResting",mouseRest)
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){  
    cat.changeAnimation(catAnimation)
    mouse.changeAnimation(mouseAnimation) 
   }
  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
  cat.changeAnimation(catReach)
  mouse.changeAnimation(mouseReach)
}
  }
  

