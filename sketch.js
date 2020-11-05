// preloadVariables
let setting = {
  background: 'park',
  objects: ['blanket', 'basket'],
  sandwich: ['bread', 'jelly','peanutButter'],
  player: 'pbj'
}

// gradientConstants
const Y_AXIS = 1;
let b1, b2, c1, c2;

// movingGradientVariables
let x, y;
let dy = 0;

// player = sandwich
let sandwich;

// falling foods
let jellies = [];
let s; 
let ds = 0;

let peanuts = [];
let p;
let dp = 0;

let bread = [];
let e;
let de = 0;

let f=100;

function preload() {
  setting.park = loadImage('images/park.png');
  setting.blanket = loadImage('images/blanket.png');
  setting.basket = loadImage('images/basket.png');
  setting.bread = loadImage('images/bread.png');
  setting.peanutButter=loadImage('images/peanutButter.png')
  setting.jelly = loadImage('images/jelly.png');
  setting.pbj = loadImage('images/pbj.png');
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

  // jelly for-loop
  for (let i = 0; i < 50; i += 5) {
    jellies[i] = random(height);
  }

  for (let i = 0; i < 50; i += 5) {
    peanuts[i] = random(height);
  }

  for (let i = 0; i < 50; i += 5) {
    bread[i] = random(height);
  }

  // player = sandwich
  sandwich = new Sandwich(random(width), random(height), 200, 90);
}

function draw() {
  // backgroundColorChanges
  speed = 0.25;
  y = y + speed;
  verticalGradient(0, y, width, height * 5, c1, c2, Y_AXIS);
  
  // park setting images
  image(setting.park, -100, 100 + frameCount * 0.005, 770, 600);
  image(setting.blanket, 50, 500 + frameCount * 0.005, 500, 130);
  image(setting.basket, 130, 520 + frameCount * 0.005, 90, 80);

  // player = sandwich
  sandwich.display(mouseX, mouseY);
  
  // falling foods
  keyPressed();


  fill(255, f);
  noStroke();
  textSize(18);
  textFont('Itim');
  text('Press SHIFT to start the storm!',160,35);
  if (f>0) {
  
    f--;
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

function keyPressed() {
  if (keyCode === SHIFT){
    fallingJelly();
    fallingPeanuts();
    fallingBread();
  }
}

function fallingJelly() {
  for (let i = 0; i < jellies.length; i += 5) {
    s = i * 0.5
    image(setting.jelly, random(width), jellies[i], 60, 20);
  }
}

function fallingPeanuts() {
  for (let i = 0; i < peanuts.length; i += 5) {
    s = i * 0.3
    image(setting.peanutButter, random(width), peanuts[i], 60, 20);
  }
}

function fallingBread() {
  for (let i = 0; i < bread.length; i += 5) {
    s = i * 0.1
    image(setting.bread, random(width), bread[i], 60, 20);
  }
}

class Sandwich {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display(x, y) {
    this.x = x;
    this.y = y;
    image(setting.pbj, this.x, this.y, this.w, this.h);
  }
}