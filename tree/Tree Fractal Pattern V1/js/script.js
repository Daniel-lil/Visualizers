/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let angle = 0;

let len = 120;

let tree = [];
let leaves = [];

let count = 0;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(400,400);

  let a = createVector(width/2, height);
  let b = createVector(width/2, height - 100);
  let c = createVector(width/2, height - 200);
  let root = new Branch(a, b, c);

  tree[0] = root;
}

function mousePressed() {
  for (let i = tree.length-1; i >= 0; i--){
    if (!tree[i].finished) {
    tree.push(tree[i].branchA());
    tree.push(tree[i].branchB());
    tree.push(tree[i].branchC());
  }
    tree[i].finished = true;
  }
  count++;
/**
  if (count === 5) {
    for (let i = 0; i < tree.length; i++){
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
  */
}

/**
Description of draw()
*/
function draw() {
  background(60);

  for (let i = 0; i < tree.length; i++) {
    if (i === 0) {
      strokeWeight(20);
    } else if (i === 1 || i === 2) {
      strokeWeight(15)
    } else if (i === 3 || i === 4 || i === 5 || i === 6) {
      strokeWeight(12)
  } else if (i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12 || i === 13) {
    strokeWeight(5)
}
push();
    tree[i].show();
    pop();
    //tree[i].jitter();
}

for (let i = 0; i < leaves.length; i++) {
  fill(255, 0, 100, 200);
  noStroke();
  ellipse(leaves[i].x, leaves[i].y,8 , 8);
  leaves[i].y +=random(0,2);
  //tree[i].jitter();
}
}
