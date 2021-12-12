class Rectangle {
  constructor(){

  }
//displays Circles
display(){
push();
noFill();
stroke(255);
rectMode(CENTER);
rect(width/2, height/2, shapeSize, shapeSize);

rect(-height/5.5 +width/2, -height/5.5 +height/2, shapeSize, shapeSize);
rect(-height/5.5 +width/2, height/5.5 +height/2, shapeSize, shapeSize);
rect(height/5.5 +width/2, -height/5.5 +height/2, shapeSize, shapeSize);
rect(height/5.5 +width/2,height/5.5 +height/2, shapeSize, shapeSize);
pop();
}
}
