/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let song;
let amplitude;
let volhistory = [];
let vol;
let fft;
let levels;
let ampLow;
let ampHigh;
let circle;
let rectangle;
let tri;
let state;
let shapeSize;
let library;


/**
Description of preload
*/
function preload() {
song = loadSound(`assets/sounds/Song.m4a`);
}


/**
Description of setup
*/
function setup() {
  let cnv = createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  cnv.mouseClicked(playOrPauseSong);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT(.3);
  circle = new Circle();
rectangle = new Rectangle();
tri = new Triangle();
library = new Library();
state = `nothing`;
}


/**
Description of draw()
*/
function draw() {
levels = fft.analyze();
ampLow = fft.getEnergy(30, 500);
let backgroundColour2 = map(ampLow, 0, 255, -400, 255);
shapeSize = map(ampLow, 0, 255, 1, 600);

  ampHigh = fft.getEnergy(700, 3000);
let backgroundColour1 = map(ampHigh, 0, 255, -160, 255);

background(backgroundColour1,0,backgroundColour1);
states();
interactivity();
vol = amplitude.getLevel();
volhistory.push(vol);
stroke(255);
fill(backgroundColour2,0,0);

translate(width/2, height/2);
beginShape();
for (let i = 0; i < 360; i++) {
  let r = map(volhistory[i],0,1,40,550);
  let x = r * cos(i);
  let y = r * sin(i);

  //let y = map(volhistory[i], 0, 1, height, 0);
  vertex(x,y);
}
endShape();

if (volhistory.length > 360){
  volhistory.splice(0,1);

}
}

function states(){
  //tells program which patterns to display during each state
  if (state === `circleVisuals`){
  circle.display();
  } else if(state === `rectangleVisuals`){
  rectangle.display();
  } else if (state === `triangleVisuals`){
    tri.display();
  } else if (state === `nothing`){
    library.display();
  }
}

function interactivity(){
  if(keyIsDown(51)){
    state = `rectangleVisuals`;
  } else if(keyIsDown(50)){
    state = `circleVisuals`;
  } else if (keyIsDown(52)){
    state = `triangleVisuals`;
  } else if (keyIsDown(53121)){
    `nothing`
  }
}

//pauses + plays song
function playOrPauseSong() {
  if (song.isPlaying() ){
    song.pause();
  } else {
    song.loop();
                amplitude = new p5.Amplitude();
                amplitude.setInput(song);
  }
}
