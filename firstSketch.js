 x=300;
 y=150;
 xsnelheid = 2;
 ysnelheid = 3;
 stapje = 0;
 doelY1 = 150;
 doelY2 = 150
 score1 = 0;
 score2 = 0;

function setup() {

  createCanvas(600, 300);
  rectMode(CENTER);
  textSize(20);
  xsnelheid = random(-5,5)
  ysnelheid = random(-5,5)
}
function draw(){
    if (keyIsDown(UP_ARROW)) {
    doelY2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    doelY2 += 10;
  }
    if (keyIsDown(65)) {
      doelY1 -= 10;
    }
    if (keyIsDown(90)) {
      doelY1 += 10;
    }
  background(100);
  text("PONG-game",50,20);
  fill(0,252,238);
  text(score1, 10,16);
  text(score2, 580,16);
  fill(0,252,238);
  ellipse(x,y,10,10);
  fill(0,252,238);  
  rect(5,doelY1,5,65);
  rect(595, doelY2, 5,65);
  text(doelY1, 10, 46);
  text(doelY2, 540, 46);
 
  x = x+stapje*xsnelheid;
  y = y+stapje*ysnelheid;
 
  if (y >= 300 || y <=0) { ysnelheid = - ysnelheid;}
  if (x <= 0) { score2 = score2 + 1;
              x=550;
               if (score2>5)  {background(0,255,0);
                              text("Game Over", 200, 150);
                               noLoop();
                              }
              }
  if (x >= 600)  {  score1 = score1 + 1;
              x=50;  
                 }  
  if (x<10 && y <= doelY1+30 && y >= doelY1-30) {
     xsnelheid = xsnelheid*-1;
     score2 = score2 + 1;
  }
  if (x>590 && y <= doelY2+30 && y >= doelY2-30) {
    xsnelheid = xsnelheid*-1;
    score1 = score1 + 1;
  }
}



// function keyPressed() {
// if (keyCode === UP_ARROW) {
//    doelY2 = doelY2-15;        }
//  if (keyCode === DOWN_ARROW) {
//    doelY2 = doelY2+15;
//    }
//  }

function mousePressed() {
  stapje = 0.9;
}

//function keyTyped() {
//  if (key === 'a') {
//    doelY1 = doelY1-15;    
//    }
//  if (key === 'z') {
//    doelY1 = doelY1 + 15;    
//    }
//}
