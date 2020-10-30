// preload variables 
let setting = {
  background: 'park',
  objects: ['blanket', 'basket'],
  sandwich: ['bread', 'jelly', 'peanutButter']
}

// gradientConstants
const Y_AXIS = 1;
let b1, b2, c1, c2;

// movingGradientVariables
let x, y;
let dy = 0;

// falling foods
let foods = [];

function preload() {
  setting.park = loadImage('images/park.png');
  setting.blanket = loadImage('images/blanket.png');
  setting.basket = loadImage('images/basket.png');
  setting.bread = loadImage('images/bread.png');
  setting.jelly = loadImage('images/jelly.png');
  setting.peanutButter = loadImage('images/peanutButter.png');
  setting.mustard = loadImage('images/mustard.png');
  setting.ketchup = loadImage('images/ketchup.png');

  scoreTracker = 0;
}

function setup() {
  createCanvas(600, 650);
  colorMode(HSB);
  angleMode(DEGREES);

  // define gradientColors
  c1 = color(285, 100, 30); // top color
  c2 = color(195, 100, 100); // bottom color

  // define movingGradientVariables 
  x = 0;
  y = -2900;
}

function draw() {
  // backgroundColorChanges 
  speed = 0.25;
  y = y + speed;
  verticalGradient(0, y, width, height * 5, c1, c2, Y_AXIS);

  // park setting images
  image(setting.park, -100, 100 + frameCount * 0.25, 770, 600);
  image(setting.blanket, 50, 500 + frameCount * 0.25, 500, 130);
  image(setting.basket, 130, 520 + frameCount * 0.25, 90, 80);

  // mouseX (bottom bread slice)
  image(setting.bread, mouseX, 580 + frameCount * 0.25, 125, 50);

  // score tracker properties 
  textSize(35);
  textFont('Times New Roman');
  text('SCORE:', 410, 35);
  text(scoreTracker, 550, 35);

  // falling foods for-loop
  for(let food of foods) {
    push();
    food.y += 1.5;
    if(food.foodType === 'bread') {
      image(setting.bread, food.x, food.y, 125, 50);
    }
    if(food.foodType === 'jelly') {
      image(setting.jelly, food.x, food.y, 125, 50);
    }
    if(food.foodType === 'peanutButter') {
      image(setting.peanutButter, food.x, food.y, 125, 50);
    }
    if(food.foodType === 'mustard') {
      image(setting.mustard, food.x, food.y, 125, 50);
    }
    if(food.foodType === 'ketchup') {
      image(setting.ketchup, food.x, food.y, 125, 50);
  }
    pop();
  }
}

function verticalGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i ++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2,inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

// keyboard interaction for falling objects 
function keyPressed() {
  if(keyCode === SHIFT) {
    addAFood();
  }
}

function addAFood() {
  food1 = {
    x: random(width),
    y: -20,
    foodType: random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup'])
  }
  foods.push(food1);
}

// mouse interaction for score tracker
function mousePressed() {
  scoreTracker++;
}