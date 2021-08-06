// variable declare
var gameState=0;
var maze, mazeImg;
var player, playerImg;
var startButton, startButtonImg;
var currency, currencyImg
var decayedTeeth, decayedTeethImg
var dentist1, dentist2, dentistImg
var division1, division2, division3, division4, division5, division6, division7, division8;
var division9, division10, division11, division12, division13, division14, division15, division16;
var division17, division18, division19, division20, division21, division22, division23, division24;
var division25, division26, division27, division28, division29, division30, division31, division32;
var mouth, mouthImg;
var homeScreen, homeScreenImg;
var toothGif, toothGifImg;
var scene, sceneImg;
var dentalArrPosition = [[295, 100],[295, 300],[335, 800],[335, 400]];
var mazePosition = [[400, 110, 10, 150],[299, 150, 70, 10]]
var grpDivision;
var score = 0;
var heart1, heart1Img, heart2Img
var lives, livesImg

var feedBack, feedBackImg
var goodFeedback1, goodFeedback1Img, goodFeedback2, goodFeedback2Img, goodFeedback3, goodFeedback3Img, 

var candy1, candy1Img, candy2, candy2Img, candy3, candy3Img, candy4, candy4Img;
var candy5, candy5Img, candy6, candy6Img, candy7, candy7Img, candy8, candy8Img;
var healthy1, healthy1Img, healthy2, healthy2Img, healthy3, healthy3Img, healthy4, healthy4Img ; 

function preload(){
  toothGifImg = loadImage("toothGif.gif");
  toothGif = loadImage("toothGif.gif");
  mazeImg = loadImage("tooth.png");
  currencyImg = loadImage("toothCoin.png");
  decayedTeethImg = loadImage("decayedTeeth.png")
  dentistImg = loadImage("dentists.png");
  playerImg = loadImage("player.png");
  mouthImg = loadImage("mouth.png");
  startButtonImg = loadImage("start.png");
  homeScreenImg = loadImage("homePage.png");
  sceneImg = loadImage("background.jpeg");
  candy1Img = loadImage("sweets1.png");
  candy2Img = loadImage("sweets2.png");
  candy3Img = loadImage("sweets3.png");
  candy4Img = loadImage("sweets4.png");

  candy5Img = loadImage("badFood1.png");
  candy6Img = loadImage("badFood2.png");
  candy7Img = loadImage("badFood3.png");
  candy8Img = loadImage("badFood4.png");

  healthy1Img = loadImage("goodFood1.png");
  healthy2Img = loadImage("goodFood2.png");
  healthy3Img = loadImage("goodFood3.png");
  healthy4Img = loadImage("goodFood4.png");

  feedBackImg = loadImage("livesLeftImg.png");

  heart1Img = loadImage("hearts1.png");
  heart2Img = loadImage("hearts2.png");
  livesImg = loadImage("lives.png");

  goodFeedback1Img = loadImage("goodFeedback1.png");
  goodFeedback2Img = loadImage("goodFeedback2.png");
  goodFeedback3Img = loadImage("goodFeedback3.png");
}


function setup(){

  createCanvas(1000,1200);
 
  // Actual tooth image

  
  scene = createSprite(500, 600, 1000, 1200);
  scene.addImage(sceneImg);
  scene.scale = 2;
  
  maze = createSprite(500, 500, 200, 200);
  maze.addImage(mazeImg);
  maze.scale = 3;

  // Button to start the game
  mazeCreation()
  
  
  //smaller tooth you control
  player = createSprite(330, 750, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.1;
  player.visible = true

  lives = createSprite(500,1100, 20, 20);
  lives.addImage(livesImg);
  lives.scale = (0.7);

  
  grpDivision = new Group();

  // Maze structure creation
  
  candy1 = createSprite(400, 415, 10, 10);//pink, blue and white sweet
  candy1.addImage(candy1Img);
  candy1.scale = 0.35

  candy2 = createSprite(600, 230, 10, 10);//cupcake
  candy2.addImage(candy2Img);
  candy2.scale = 0.35

  candy3 = createSprite(600, 650, 10, 10);//blue and yellow sweet
  candy3.addImage(candy3Img);
  candy3.scale = 0.5

  candy4 = createSprite(300, 350, 10, 10);//pink and white sweet
  candy4.addImage(candy4Img);
  candy4.scale = 0.35

  candy5 = createSprite(440, 540, 10, 10);//blue ice cream
  candy5.addImage(candy5Img);
  candy5.scale = 0.5

  candy6= createSprite(600, 340, 10, 10);//red ice lolly
  candy6.addImage(candy6Img);
  candy6.scale = 0.5

  candy7 = createSprite(650, 500, 10, 10);//burger 
  candy7.addImage(candy7Img);
  candy7.scale = 0.5

  candy8 = createSprite(700, 100, 10, 10);//coke
  candy8.addImage(candy8Img);
  candy8.scale = 0.5


  
  healthy1 = createSprite(700, 270, 10, 10);//fish
  healthy1.addImage(healthy1Img);
  healthy1.scale = 0.50;

  healthy2 = createSprite(600, 170, 10, 10);//apple
  healthy2.addImage(healthy2Img);
  healthy2.scale = 0.50;

  healthy3 = createSprite(450, 100, 10, 10);//water bottle
  healthy3.addImage(healthy3Img);
  healthy3.scale = 0.50;

  healthy4 = createSprite(350, 280, 10, 10);//carrot
  healthy4.addImage(healthy4Img);
  healthy4.scale = 0.50;




  // dental hospital image
  dentist1 = createSprite(295, 100);
  dentist1.addImage(dentistImg);
  dentist1.scale = 0.32;

  // dental hospital image
  dentist2 = createSprite(660, 800);
  dentist2.addImage(dentistImg);
  dentist2.scale = 0.32;

  mouth = createSprite(335, 800, 20, 20);
  mouth.addImage(mouthImg);
  mouth.scale = 0.4;

  heart1 = createSprite(550, 1170, 20, 20);
  heart1.addImage(heart2Img);
  heart1.scale = (0.5);

  feedBack = createSprite(500, 1020);
  feedBack.addImage(feedBackImg);
  feedBack.scale = 0.8
  feedBack.visible = false

  goodFeedback1 = createSprite(300, 200);
  goodFeedback1.addImage(goodFeedback1Img);
  goodFeedback1.visible = true

  goodFeedback2 = createSprite(700, 200);
  goodFeedback2.addImage(goodFeedback2Img);
  goodFeedback2.visible = true

  goodFeedback3 = createSprite(300, 500);
  goodFeedback3.addImage(goodFeedback3Img);
  goodFeedback1.visible = true


  homeScreen = createSprite(500, 600);
  homeScreen.addImage(homeScreenImg);
  homeScreen.visible = true
  homeScreen.scale = 0.9;

  startButton = createSprite(450, 1100,200 ,50);
  startButton.visible = true;
  startButton.addImage(startButtonImg);
  //homeScreen.scale = 1.1;
  startButton.scale = 0.8;

  

}

function draw() {
  background(79, 200, 233);
  if (mousePressedOver(startButton)&&gameState===0) {
    startButton.visible = false;
    console.log(gameState);
    gameState=1;
    homeScreen.visible = false
  }  

  

  if(player.isTouching(healthy1)){
    score = score+1
    healthy1.destroy()
    goodFeedback1.visible = true
  }
if(player.isTouching(healthy2)){
    score = score+1
    healthy2.destroy()
    goodFeedback2.visible = true
  }

  if(player.isTouching(healthy3)){
    score = score+1
    healthy3.destroy()
    goodFeedback3.visible = true
  }

  if(player.isTouching(healthy4)){
    score = score+1
    healthy4.destroy()
    goodFeedback1.visible = true
  }
 


  if(player.isTouching(candy1)){
    candy1.destroy()
    heart1.addImage(heart1Img);
    feedBack.visible = true
      }
  if(player.isTouching(candy2)){
    candy2.destroy()
    heart1.addImage(heart1Img);
    feedBack.visible = true
      }
  if(player.isTouching(candy3)){
    candy3.destroy()
    heart1.addImage(heart1Img);
    feedBack.visible = true
      }    
  if(player.isTouching(candy4)){
    candy4.destroy()
    heart1.addImage(heart1Img);
    feedBack.visible = true
      }
  if(player.isTouching(candy5)){
     candy5.destroy()
     heart1.addImage(heart1Img);
     feedBack.visible = true
      }
  if(player.isTouching(candy6)){
     candy6.destroy()
     heart1.addImage(heart1Img);
     feedBack.visible = true
      }
  if(player.isTouching(candy7)){
     candy7.destroy()
     heart1.addImage(heart1Img);
     feedBack.visible = true
      }
  if(player.isTouching(candy8)){
     candy8.destroy()
     heart1.addImage(heart1Img);
     feedBack.visible = true
      }
  
  
  



  

  





  

  
  
  
  if (keyDown("up")) {
    player.y-=3;
  }
  if (keyDown("down")) {
    player.y+=3;
  }
  if (keyDown("left")) {
    player.x-=3;
  }
  if (keyDown("right")) {
    player.x+=3;  }  

    //if (condition1 || condition2 || condition3) or we can add a group
  /* 0,1,2,3
  var randPosLeft = Math.round.random(0,1)
  var randPosRight = Math.round.random(2,3)

  depending on value change the y position 
  dentist2.x = dentalArrPosition[randPosRight][0].x
  dentist2.y = dentalArrPosition[randPosRight][1].y
  */
  /*if(player.isTouching(division1)){
    player.visible = false
  }
  if(player.isTouching(division2)){
    player.visible = false
  }
  if(player.isTouching(division3)){
    player.visible = false
  }
  if(player.isTouching(division4)){
    player.visible = false
  }
  if(player.isTouching(division5)){
    player.visible = false
  }
  if(player.isTouching(division6)){
    player.visible = false
  }
  if(player.isTouching(division7)){
    player.visible = false
  }
  if(player.isTouching(division8)){
    player.visible = false
  }
  if(player.isTouching(division9)){
    player.visible = false
  }
  if(player.isTouching(division11)){
    player.visible = false
  }
  if(player.isTouching(division13)){
    player.visible = false
  }
  if(player.isTouching(division14)){
    player.visible = false
  }
  if(player.isTouching(division15)){
    player.visible = false
  }

  if(player.isTouching(division17)){
    player.visible = false
  }
  if(player.isTouching(division18)){
    player.visible = false
  }
  if(player.isTouching(division19)){
    player.visible = false
  }
  if(player.isTouching(division20)){
    player.visible = false
  }
  if(player.isTouching(division21)){
    player.visible = false
  }
  if(player.isTouching(division22)){
    player.visible = false
  }
  if(player.isTouching(division23)){
    player.visible = false
  }
  if(player.isTouching(division24)){
    player.visible = false
  }
  if(player.isTouching(division25)){
    player.visible = false
  }
  if(player.isTouching(division26)){
    player.visible = false
  }
  if(player.isTouching(division27)){
    player.visible = false
  }
  if(player.isTouching(division28)){
    player.visible = false
  }
  if(player.isTouching(division29)){
    player.visible = false
  }
  if(player.isTouching(division30)){
    player.visible = false
  }
  if(player.isTouching(division31)){
    player.visible = false
  }
  if(player.isTouching(division32)){
    player.visible = false
  }*/

  

  drawSprites();
  //stroke("white");
  if (gameState===0){
    startButton.visible = true
  }

  textSize(30)
  stroke("black");
    text("Score: "+score, 850,100)

  

}

// User defined functions
function mazeCreation(){
  
//1st vertical block to the right or dental hospital
 division1 = createSprite(400, 110, 10, 150);//50 pixel gap
  division1.shapeColor="black";

  
  //1st horizontal block directly underneath dental hospital
  division2 = createSprite(299, 150, 70, 10);
  division2.shapeColor="black"; 

   //2nd horizontal block underneath dental hospital
   division3 = createSprite(299, 200, 100, 10);
  division3.shapeColor="black";
  

   //3rd horizontal block underneath dental hospital
  division4 = createSprite(298, 250, 210, 10);
  division4.shapeColor="black";
  

  //vertical block directly next to division 4
  division5 = createSprite(400, 300, 10, 150);
  division5.shapeColor="black";
  

   //block directly underneath the apple but above the cupcake
  division6 = createSprite(550, 200, 200, 10);
  division6.shapeColor="black";

  //2nd vertical block, beside division 1
  division7 = createSprite(500, 110, 10, 80);//50 pixel gap
  division7.shapeColor="black";
  
  //rlly long vertical line at the right end of tooth maze
  division8 = createSprite(770, 390, 10, 700);
  division8.shapeColor="black";
  
// the little one in the middle next to division 8 
  division9 = createSprite(700, 350, 10, 100);
  division9.shapeColor="black";
  

    //near the apple, horizontal line next to division 1;
  division10 = createSprite(500, 150, 70, 10);
  division10.shapeColor="black";
 


 //the little one above division 9
  division11 = createSprite(700, 200, 10, 100);
  division11.shapeColor="black";

  //line above the apple and next to the water bottle
  division13 = createSprite(600, 100, 10, 100);
  division13.shapeColor="black";
  
  //line under cupcake and above red lolly pop
  division14 = createSprite(600, 280, 100, 10);
  division14.shapeColor="black";
  

 //vertical line to the left of division 14
  division15 = createSprite(500, 290, 10, 100);
  division15.shapeColor="black";
  
//long horizontal line above pink and blue candy and below red lolly pop 
  division17 = createSprite(450, 380, 420, 10);
  division17.shapeColor="black";
  
//2nd vertical line underneath division 17
  division18 = createSprite(300, 500, 10, 170);
  division18.shapeColor="black";
  
// 2nd horizontal line next to division 18
  division19 = createSprite(400, 500, 185, 10);
  division19.shapeColor="black";
  
// 1st horizontal line next to division 18 and line underneath pink and blue candy
  division20 = createSprite(400, 450, 120, 10);
  division20.shapeColor="black";
  
// the line above mouth on the left
  division21 = createSprite(250, 700, 50, 10);//50 pixel gap
  division21.shapeColor="black";
  
  
  // the line above mouth on the right
  division22 = createSprite(410, 700, 100, 10);
  division22.shapeColor="black";
  
  
//the vertical line in the middle, next to the blue ice cream
  division23 = createSprite(500, 550, 10, 120);
  division23.shapeColor="black";
 

  // long vertical line next to the capital I shape and underneath division 9
  division24 = createSprite(700, 550, 10, 210);
  division24.shapeColor="black";
  
  
//bottom horizontal line in the capital I shape
  division25 = createSprite(600, 550, 100, 10);
  division25.shapeColor="black";
  
  //top horizontal line in the capital I shape
  division26 = createSprite(600, 450, 100, 10);
  division26.shapeColor="black";
  
//middle vertical line in the capital I shape
  division27 = createSprite(600, 500, 10, 100);
  division27.shapeColor="black";
  
  //horizontal line directly above bottom dental hospital
  division28 = createSprite(660, 710, 150, 10);
  division28.shapeColor="black";
 
   //long vertical line at the far left edge ot tooth maze
  division29 = createSprite(250, 520, 10, 290);//50 pixel gap
  division29.shapeColor="black";
  
  //horizontal line next to blue ice cream(bottom)
  division30 = createSprite(360, 550, 120, 10);
  division30.shapeColor="black";
  
  //horizontal line between division 30 and division 22
  division31 = createSprite(400, 630, 130, 10);//50 pixel gap
  division31.shapeColor="black";
 
   
//top horizontal line connected to line 1
  division32 = createSprite(570, 40, 350, 10);
  division32.shapeColor="black";

}

function destroyHeart1(){
  if(player.isTouching(candy1)){
    heart1.destroy()
      }
  if(player.isTouching(candy2)){
    heart1.destroy()
      }
  if(player.isTouching(candy3)){
    heart1.destroy()
      }
  if(player.isTouching(candy4)){
    heart1.destroy()
      }
  if(player.isTouching(candy5)){
    heart1.destroy()
      }
  if(player.isTouching(candy6)){
    heart1.destroy()
      }
  if(player.isTouching(candy7)){
    heart1.destroy()
      }
  if(player.isTouching(candy8)){
    heart1.destroy()
      }

}


function destroyHeart2(){
  if(player.isTouching(candy1)){
    heart2.destroy()
      }
  if(player.isTouching(candy2)){
    heart2.destroy()
      }
  if(player.isTouching(candy3)){
    heart2.destroy()
      }
  if(player.isTouching(candy4)){
    heart2.destroy()
      }
  if(player.isTouching(candy5)){
    heart2.destroy()
      }
  if(player.isTouching(candy6)){
    heart2.destroy()
      }
  if(player.isTouching(candy7)){
    heart2.destroy()
      }
  if(player.isTouching(candy8)){
    heart2.destroy()
      }

}

function destroyHeart3(){
  if(player.isTouching(candy1)){
    heart3.destroy()
      }
  if(player.isTouching(candy2)){
    heart3.destroy()
      }
  if(player.isTouching(candy3)){
    heart3.destroy()
      }
  if(player.isTouching(candy4)){
    heart3.destroy()
      }
  if(player.isTouching(candy5)){
    heart3.destroy()
      }
  if(player.isTouching(candy6)){
    heart3.destroy()
      }
  if(player.isTouching(candy7)){
    heart3.destroy()
      }
  if(player.isTouching(candy8)){
    heart3.destroy()
      }

}

