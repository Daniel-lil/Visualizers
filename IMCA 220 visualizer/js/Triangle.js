class Triangle {
  constructor(){

  }
//displays triangles
display(){
push();
noFill();
stroke(255);
triangle(0+width/2, 0 - shapeSize/2+height/2, 0 - shapeSize/1.732+width/2, 0 + shapeSize/2+height/2, 0 + shapeSize/1.732+width/2, 0 +shapeSize/2+height/2);
triangle(0+width/2, 0 + shapeSize/2+height/2, 0 + shapeSize/1.732+width/2, 0 - shapeSize/2+height/2, 0 - shapeSize/1.732+width/2, 0 -shapeSize/2+height/2);

triangle(0 + height /5.5+width/2, 0 - shapeSize/2 + height /5.5+height/2, 0 - shapeSize/1.732 + height /5.5 +width/2, 0 + shapeSize/2 + height /5.5+height/2, 0 + shapeSize/1.732 + height /5.5+width/2, 0 + shapeSize/2 + height /5.5+height/2);
triangle(0 + height /5.5+width/2, 0 + shapeSize/2 + height /5.5+height/2, 0 + shapeSize/1.732 + height /5.5 +width/2, 0 - shapeSize/2 + height /5.5+height/2, 0 - shapeSize/1.732 + height /5.5+width/2, 0 - shapeSize/2 + height /5.5+height/2);

triangle(0 - height /5.5+width/2, 0 - shapeSize/2 + height /5.5+height/2, 0 - shapeSize/1.732 - height /5.5+width/2, 0 + shapeSize/2 + height /5.5+height/2, 0 + shapeSize/1.732 - height /5.5+width/2, 0 + shapeSize/2 + height /5.5+height/2);
triangle(0 - height /5.5+width/2, 0 + shapeSize/2 + height /5.5+height/2, 0 + shapeSize/1.732 - height /5.5+width/2, 0 - shapeSize/2 + height /5.5+height/2, 0 - shapeSize/1.732 - height /5.5+width/2, 0 - shapeSize/2 + height /5.5+height/2);

triangle(0 - height /5.5+width/2, 0 - shapeSize/2 - height /5.5+height/2, 0 - shapeSize/1.732 - height /5.5+width/2, 0 + shapeSize/2 - height /5.5+height/2, 0 + shapeSize/1.732 - height /5.5+width/2, 0 + shapeSize/2 - height /5.5+height/2);
triangle(0 - height /5.5+width/2, 0 + shapeSize/2 - height /5.5+height/2, 0 + shapeSize/1.732 - height /5.5+width/2, 0 - shapeSize/2 - height /5.5+height/2, 0 - shapeSize/1.732 - height /5.5+width/2, 0 - shapeSize/2 - height /5.5+height/2);

triangle(0 + height /5.5+width/2, 0 - shapeSize/2 - height /5.5+height/2, 0 - shapeSize/1.732 + height /5.5+width/2, 0 + shapeSize/2 - height /5.5+height/2, 0 + shapeSize/1.732 + height /5.5+width/2, 0 + shapeSize/2 - height /5.5+height/2);
triangle(0 + height /5.5+width/2, 0 + shapeSize/2 - height /5.5+height/2, 0 + shapeSize/1.732 + height /5.5+width/2, 0 - shapeSize/2 - height /5.5+height/2, 0 - shapeSize/1.732 + height /5.5+width/2, 0 - shapeSize/2 - height /5.5+height/2);


pop();
}
}
