/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);


}

/**
Description of draw()
*/
function draw() {
  background(0);

  translate(width / 2, height / 2 + 200);

  branch(100);

noLoop();
}

function branch(len) {
  push();
  if (len > 10) {
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 20);
  line(0, 0, 0, -len);
  translate(0, -len);
  rotate(random(-20, -30));
  branch(len * random(0.7, 0.9));
  rotate(random(50, 60));
  branch(len * random(0.7, 0.9));
} else {
  let r = 80 + random(-20, 20);
  let g = 120 + random(-20, 20);
  let b = 40 + random(-20, 20);
  fill(r, g, b, 170);
  noStroke();

  beginShape();
  for (var i = 45; i < 135; i ++) {
    let x = 13 * cos(i);
    let y = 13 * sin(i);
    vertex(x, y);
  }

  for (var i = 135; i > 45; i--) {
    let x = 13 * cos(i);
    let y = 13 * sin(-i) + 20;
    vertex(x, y);
  }
  endShape(CLOSE);
}
pop();
}
