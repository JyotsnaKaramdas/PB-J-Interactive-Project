// preloadVariables
let setting = {
  background: 'park',
  objects: ['blanket', 'basket'],
  sandwich: ['bread', 'jelly', 'peanutButter'],
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
  setting.jelly = loadImage('images/jelly.png');
  setting.peanutButter = loadImage('images/peanutButter.png');
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
    jellies[i] = new Jelly(random(width), random(height), 60, 20);
  }
  // jelly for-loop
  for (let i = 0; i < 50; i += 5) {
    peanuts[i] = new PeanutButter(random(width), random(height), 50, 20);
}
  // player = sandwich
  sandwich = new Sandwich(200, 90);
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
  for (let i = 0; i < jellies.length; i += 5) {
    jellies[i].update();
    jellies[i].display();
    for (let i = 0; i < peanuts.length; i += 5) {
      peanuts[i].update();
      peanuts[i].display();
    }
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

function Jelly(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.hit = false;
  
  this.intersects = function(sandwich) {
    let d = dist(this.x, this.y, mouseX - 10, mouseY - 10);
      if (this.hit) {
        return true; 
      } else {
        return false;
      }
    if (d < this.w && this.h + sandwich.w && sandwich.h) {
      return true;
    } else {
      return false;
    }
  }
  this.display = function() {
    image(setting.jelly, this.x, this.y, this.w, this.h);
  }
  this.update = function() {
    this.y = this.y += (1.5);
    if (this.y > height){ 
			  this.y = -this.h;
		}
  }
}
function PeanutButter(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.hit = false;
  
  this.intersects = function(sandwich) {
    let d = dist(this.x, this.y, sandwich.x, sandwich.y);
    if (d < this.w && this.h + sandwich.w && sandwich.h) {
      return true;
    } else {
      return false;
    }
  }
  this.display = function() {
    image(setting.peanutButter, this.x, this.y, this.w, this.h);
  }
  this.update = function() {
    this.y = this.y += (0.095);
    if (this.y > height){ 
        this.y = -this.h;
    }
  }
}

  
  
  
  
  
  
  // this.intersects = function(sandwich) {
  //   let d = dist(this.x, this.y, mouseX - 10, mouseY - 10);
  //     if (this.hit) {
  //       return true; 
  //     } else {
  //       return false;
  //     }

    
    // if (d < this.w && this.h + sandwich.w && sandwich.h) {
    //   return true;
    // } else {
    //   return false;
    // }
  
  this.display = function() {
    image(setting.peanutButter, this.x, this.y, this.w, this.h);
  }
  this.update = function() {
    this.y = this.y += (0.095);
    if (this.y > height){ 
			  this.y = -this.h;
		}
  }


function Sandwich(w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.display = function(x, y) {
    this.x = x;
    this.y = y;
    image(setting.pbj, this.x, this.y, this.w, this.h);
  }
}