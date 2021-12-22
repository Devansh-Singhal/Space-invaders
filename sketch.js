var player, playerimg;
var PLAY = 1;
var END = 0;
var gameState = "wait";
var play;
var Mainmenu,playimg;
var titleimg;
var starbg;
var enemyimg,enemy;
function preload() {
 // playerimg = loadImage("images/run1png.png");
//  towerimg = loadImage("tower.png");
playerimg=loadImage("images/Ship.png")
Mainmenu=loadImage("images/Mainimg.jpg")
starbg=loadImage("images/spacebg.jpg")
enemyimg=loadImage("images/Alien.png")
//titleimg=loadImage("images/Name.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
   player = createSprite(windowWidth/2, windowHeight-150, 50, 50);
  player.addImage("fight",playerimg)
  player.visible=false
  player.scale=0.3
enemy= createSprite(windowWidth/2,windowHeight-800,50,50);
enemy.addImage("alien",enemyimg)
enemy.scale=0.3
play=createImg("images/Start.png")
play.position(windowWidth/2-400,windowHeight-200)
play.size(300,100)  
about=createImg("images/About.png")
about.position(windowWidth/2+200,windowHeight-200)
about.size(300,100)

  titleimg=createImg("images/Name.png")
  titleimg.position(windowWidth/2-300,windowHeight/2-200)
  titleimg.size(600,200)
  titleimg.hide()




}

function draw() {
 

  if(gameState==="wait"){
background(Mainmenu)
titleimg.show()
  }

//mousepressed on play button
 play.mousePressed(()=>{
   gameState="play"
 
 play.hide()
 titleimg.hide()
 about.hide()
 })


//mouse pressed on about button
about.mousePressed(()=>{
  gameState="about"
  about.hide()
  
})

 
 // guntest.shapeColor = "red";
  if (gameState === "play") {
    background(starbg)
    player.visible=true

    
    if (keyDown("space")) {
      player.velocityY = -10;

    }
   // guntest.x = player.x;
   // guntest.y = player.y;
    if (keyDown("LEFT_ARROW")) {
      player.x = player.x - 10;

    }
    if (keyDown("RIGHT_ARROW")) {
      player.x = player.x + 10;

    }


  }
  if (gameState == END) {
    //tower.visible = false;
    background("black");
    player.visible = false;
    textSize(30);
    fill("yellow");
    text("Game Over!", 230, 300);
  }

  drawSprites();
 // textSize(20);
  //fill("red");
 //text(mouseX + "," + mouseY, mouseX, mouseY)



   
 
//textSize(150)
//stroke("green")
//strokeWeight(7)
//fill("white")
/////text("Space Fighters" ,100,windowHeight/2)
 

 if(gameState==="about"){
  textSize(100)
  stroke("green")
  strokeWeight(7)
  fill("white")
  text("This is how we play this game" ,100,windowHeight/2)
   }

 
}

