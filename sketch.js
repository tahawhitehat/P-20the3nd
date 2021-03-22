var cat,catImage,catImage2, catImage3; 
var mouse,mouseImage,mouseImage2, mouseImage3; 
var background,bi;
function preload() {
    //load the images here
    catImage=loadAnimation("cat1.png")
    catImage2=loadAnimation("cat2.png", "cat3.png")
    catImage3=loadAnimation("cat4.png")
    bi=loadImage("garden.png")
    mouseImage=loadAnimation("mouse1.png")
    mouseImage2=loadAnimation("mouse2.png", "mouse3.png")
    mouseImage3=loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    cat = createSprite(850,600,50,50)
    cat.addAnimation("cat1",catImage)
    cat.scale = 0.09
    cat.debug = true

    mouse = createSprite(200,600,50,50)
    mouse.addAnimation("mouse1",mouseImage)
    mouse.scale = 0.09
    mouse.debug = true
    
    
    
}

function draw() {

    background(bi)
    //Write condition here to evalute if tom and jerry collide
        if (cat.x - mouse.x < (cat.width - mouse.width)/2){
            
            cat.velocityX = 0; 
            cat.addAnimation("cat3", catImage3); 
            cat.changeAnimation("cat3")
            cat.x = 300; 
            
            mouse.addAnimation("mouse_Teasing",mouseImage3)
            mouse.changeAnimation("mouse_Teasing")
        }
             
    drawSprites();

}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("cat_running",catImage2)
     cat.changeAnimation("cat_running")

     mouse.addAnimation("mouse2", mouseImage2)
     mouse.changeAnimation("mouse2", mouseImage2)
    
   
}


}
