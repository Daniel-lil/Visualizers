/**
Daniel Little
*/

"use strict";

//declaring names of states
let vampire;
let detective;
let knight;
let shooter;
let racing;
let cowboy;
let titleScreen;

let map;

//declaring name of song
let fc_Simulator_Song;

let cowboy_song;
let detective_song;
let knight_song;
let racing_song;
let shooter_song;
let vampire_song;

//define attributes for fades using alpha
let fadeIn = 0;
let fadeInSpeed = 1;

//defining attributes for flying saucer

let saucerPiece1 = {
  x: 418,
  y: 860,
  width: 75,
  height: 3,
  roundness: 100,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: 255
}

let saucerPiece2 = {
  x: 418,
  y: 860,
  width: 3,
  height: 75,
  roundness: 100,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: 255
}

//telling program which state to begin inspect
let state = `title`;

/**
preloading images
*/
function preload() {

  cowboy = loadImage('assets/images/cowboy.png');
  detective = loadImage('assets/images/detective.png');
  knight = loadImage('assets/images/knight.png');
  racing = loadImage('assets/images/racing.png');
  shooter = loadImage('assets/images/shooter.png');
  vampire = loadImage('assets/images/vampire.png');
  map = loadImage('assets/images/map.png');
  titleScreen = loadImage('assets/images/title screen.png');
  //preloading song
  fc_Simulator_Song = loadSound(`assets/sounds/FC_Simulator music.mp3`);

  cowboy_song = loadSound(`assets/sounds/cowboy music.wav`);
  detective_song = loadSound(`assets/sounds/detective music.wav`);
  knight_song = loadSound(`assets/sounds/knight music.wav`);
  racing_song = loadSound(`assets/sounds/racing music.wav`);
  shooter_song = loadSound(`assets/sounds/shooter music.wav`);
  vampire_song = loadSound(`assets/sounds/vampire music.wav`);
}

/**
creates canvas
*/
function setup() {
  createCanvas(1920, 1080);
}

/**
draws simulation
*/
function draw() {

  if (state === `title`) {
    push();
    background(0);
    displayTitle();
    pop();
  } else if (state === `flight simulation`) {
    push();
    background(0);
    displayPlanets();
    displaySaucer();
    handleInput();
    moveSaucer();
    //checkIfOnPlanet();
    pop();
  } else if (state === `cowboy`) {
    push();
    background(0);
    imageMode(CENTER)
    image(cowboy, 960, 540);
    pop();
  } else if (state === `detective`) {
    push();
    background(0);
    imageMode(CENTER)
    image(detective, 960, 540);
    //resetShipPosition();
    pop();
  } else if (state === `knight`) {
    push();
    background(0);
    imageMode(CENTER)
    image(knight, 960, 540);
    //resetShipPosition();
    pop();
  } else if (state === `racing`) {
    push();
    background(0);
    imageMode(CENTER)
    image(racing, 960, 540);
    //resetShipPosition();
    pop();
  } else if (state === `shooter`) {
    push();
    background(0);
    imageMode(CENTER)
    image(shooter, 960, 540);
    //resetShipPosition();
    pop();
  } else if (state === `vampire`) {
    push();
    background(0);
    imageMode(CENTER)
    image(vampire, 960, 540);
    //resetShipPosition();
    pop();
  }
}

//displays text for title screen
function displayTitle() {
  //defines fade in preset to put into alpha
  fadeIn = fadeIn + fadeInSpeed;
  push();
  imageMode(CENTER);
  image(titleScreen, 960, 540);
  pop();
}


//start the simulation
function keyPressed() {
  if (state === `title`) {
    state = `flight simulation`;
    fadeIn = 0;
    trymusic();
  }
}


//check if music is playing + play if its not
function trymusic() {
  if (!fc_Simulator_Song.isPlaying() || !detective_song.isPlaying() || !knight_song.isPlaying() || !vampire_song.isPlaying() || !racing_song.isPlaying() || !shooter_song.isPlaying() || !cowboy_song.isPlaying()) {
    fc_Simulator_Song.loop();
  }
}


function displaySaucerWithFade() {
  //creating shapes for the saucer
  fill(255, 255, 255, fadeIn);
  stroke(0);
  rectMode(CENTER);
  rect(saucerPiece1.x, saucerPiece1.y, saucerPiece1.width, saucerPiece1.height, saucerPiece1.roundness);
  pop();

  fill(255, 255, 255, fadeIn);
  stroke(0);
  rectMode(CENTER);
  rect(saucerPiece2.x, saucerPiece2.y, saucerPiece2.width, saucerPiece2.height, saucerPiece2.roundness);
  pop();
}

//returns pilot from planet view to flight mode
function returnToFlight() {
  if (state === `knight` || state === `vampire` || state === `shooter` || state === `detective` || state === `racing` || state === `cowboy`) {
    state = `flight simulation`;
    //resetShipPosition();
    trymusic();
  }
}

//display the planets
function displayPlanets() {
  imageMode(CENTER);
  image(map, 960, 540);
  push();
  //robot
  fill(0, 0, 0, 0);
  noStroke();
  ellipse(918, 280, 80, );
  //detective
  ellipse(620, 160, 80, );
  //cowboy
  ellipse(568, 420, 80);
  //knight
  ellipse(853, 718, 80);
  //racing
  ellipse(1330, 370, 80);
  //vampire
  ellipse(1410, 790, 80);
  pop();
}

function displaySaucer() {
  //creating shapes for the saucer

  push();
  fill(saucerPiece1.fill);
  stroke(0);
  rectMode(CENTER);
  rect(mouseX, mouseY, saucerPiece1.width, saucerPiece1.height, saucerPiece1.roundness);
  pop();

  push();
  fill(saucerPiece2.fill.r, saucerPiece2.fill.g, saucerPiece2.fill.b);
  stroke(0);
  rectMode(CENTER);
  rect(mouseX, mouseY, saucerPiece2.width, saucerPiece2.height, saucerPiece2.roundness);
  pop();
}

function handleInput() {
  //allows user control of saucer using keys
  if (keyIsDown(LEFT_ARROW)) {
    saucerPiece1.vx = -saucerPiece1.speed;
    saucerPiece2.vx = -saucerPiece2.speed;

  } else if (keyIsDown(RIGHT_ARROW)) {
    saucerPiece1.vx = saucerPiece1.speed;
    saucerPiece2.vx = saucerPiece2.speed;

  } else {
    saucerPiece1.vx = 0;
    saucerPiece2.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    saucerPiece1.vy = -saucerPiece1.speed;
    saucerPiece2.vy = -saucerPiece2.speed;

  } else if (keyIsDown(DOWN_ARROW)) {
    saucerPiece1.vy = saucerPiece1.speed;
    saucerPiece2.vy = saucerPiece2.speed;

  } else {
    saucerPiece1.vy = 0;
    saucerPiece2.vy = 0;

  }
}

//makes saucer actually move
function moveSaucer() {
  //move saucer
  saucerPiece1.x = saucerPiece1.x + saucerPiece1.vx;
  saucerPiece1.y = saucerPiece1.y + saucerPiece1.vy;

  saucerPiece2.x = saucerPiece2.x + saucerPiece2.vx;
  saucerPiece2.y = saucerPiece2.y + saucerPiece2.vy;
}

//check if the saucer is on a planet to trigger state
//function checkIfOnPlanet() {
function mousePressed() {

  if (state === `flight simulation`) {

    //earth
    let d = dist(mouseX, mouseY, 918, 290);
    if (d < saucerPiece1.width / 2 + 50 / 2) {
      state = `shooter`;
      fc_Simulator_Song.stop();
      shooter_song.play();
      fadeIn = 0;
      shooter_song.onended(returnToFlight);
    }
    //saturn
    let saturnDist = dist(mouseX, mouseY, 620, 160);
    if (saturnDist < saucerPiece1.width / 2 + 66 / 2) {
      state = `detective`;
      fc_Simulator_Song.stop();
      detective_song.play();
      fadeIn = 0;
      detective_song.onended(returnToFlight);
    }
    //uranus
    let uranusDist = dist(mouseX, mouseY, 568, 420);
    if (uranusDist < saucerPiece1.width / 2 + 54 / 2) {
      state = `cowboy`;
      fc_Simulator_Song.stop();
      cowboy_song.play();
      fadeIn = 0;
      cowboy_song.onended(returnToFlight);
    }
    //venus
    let venusDist = dist(mouseX, mouseY, 853, 718);
    if (venusDist < saucerPiece1.width / 2 + 30 / 2) {
      state = `knight`;
      fc_Simulator_Song.stop();
      knight_song.play();
      fadeIn = 0;
      knight_song.onended(returnToFlight);
    }
    //mercury
    let mercuryDist = dist(mouseX, mouseY, 1330, 370);
    if (mercuryDist < saucerPiece1.width / 2 + 24 / 2) {
      state = `racing`;
      fc_Simulator_Song.stop();
      racing_song.play();
      fadeIn = 0;
      racing_song.onended(returnToFlight);
    }
    //jupiter
    let jupiterDist = dist(mouseX, mouseY, 1410, 790);
    if (jupiterDist < saucerPiece1.width / 2 + 79 / 2) {
      state = `vampire`;
      fc_Simulator_Song.stop();
      vampire_song.play();
      fadeIn = 0;
      vampire_song.onended(returnToFlight);
    }
  }
}

//puts ship back in starting
function resetShipPosition() {
  saucerPiece1.x = 418
  saucerPiece1.y = 860

  saucerPiece2.x = 418
  saucerPiece2.y = 860


  moveSaucer();
  handleInput();
}
