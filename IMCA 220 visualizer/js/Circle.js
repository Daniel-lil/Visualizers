class Circle {
  constructor(){

  }
//displays Circles
display(){
push();
noFill();
stroke(255);
ellipse(0 + height/5.5 +width/2, 0 +  height/5.5 +height/2, shapeSize,);
ellipse(0 - height/5.5 +width/2, 0 +  height/5.5 +height/2, shapeSize,);
ellipse(0 - height/5.5 +width/2, 0 -  height/5.5 +height/2, shapeSize,);
ellipse(0 + height/5.5 +width/2,0 - height/5.5 +height/2, shapeSize,);
ellipse(width/2, height/2, shapeSize,);
pop();
}
}
