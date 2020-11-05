// preloadVariables
let setting = {
  background: 'park',
  objects: ['blanket', 'basket'],
  sandwich: 'bread',
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
// falling jelly array
let jellies = [];
let peanuts = [];
function preload() {
  setting.park = loadImage('images/park.png');
  setting.blanket = loadImage('images/blanket.png');
  setting.basket = loadImage('images/basket.png');
  setting.bread = loadImage('images/bread.png');
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

  for (i=0; i<2;i++) {
    if (condiments!=c) {
      condiments[i]= new Condiments()
    }
    
  }

  // player = sandwich
  sandwich = new Sandwich(100, 100, 200, 90);
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
  // jelly for-loop
  for (let i = 0; i < condiments.length; i += 5) {
    condiments[i].update();
    condiments[i].display();
    //  condiments[i].overlaps();
    //  condiments[i].touches();
  }
  // player = sandwich
  sandwich.display(mouseX, mouseY);
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
class Jelly {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display() {
    image(condiments[i], this.x1, this.y1, this.x2, this.y2);
  }
  update() {
    this.y = this.y += (1.5);
    if (this.y > height){
        this.y = -this.h;
    }
  }
}

class Sandwich {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display(x1, y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2=x2;
    this.y2=y2;
    image(setting.pbj, this.x1, this.y1, this.x2, this.y2);
  }
}