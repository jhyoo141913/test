var i=0
var d=5
function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  i+=d;
  if(i>255 || i<1) d=-d;
  if(mouseX>=width/2-50 && mouseX<=width/2+50) {
    fill(0,0,255,i);
  } else {
    fill(255,0,0,i);
  }
   i+=d;
  if(i>255 || i<1) d=-d;
  if(mouseY>=width/2-50 && mouseY<=width/2+50) {
    fill(0,0,255,i);
  } else {
    fill(255,0,0,i);
  }
  
  rect(width/2,height/2,100,100);
  ellipse(width/2,height/2,100,30);
  ellipse(width/2,height/2,30,100);
}

function windowResized() {
 resizeCanbus(windowWidth,windowHeight); 
  
}