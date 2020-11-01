// preload variables 
let setting = {
  background: 'park',
  objects: ['blanket', 'basket'],
  sandwich: ['bread', 'jelly', 'peanutButter','mustard','ketchup']
}

// gradientConstants
const Y_AXIS = 1;
let b1, b2, c1, c2;

// movingGradientVariables
let x, y;
let dy = 0;

// falling foods
let foods = [];

let stack= [];

let game;
let condiments;


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

  game = new condiments(random(width), -20);
  stack.push(game);

  

  condimentFormation();
  stackMovement();
  condimentMovement();
  

  // define movingGradientVariables 
  x = 0;
  y = -2900;
}

function draw() {
  // backgroundColorChanges 
  speed = 0.05;
  y = y + speed;
  verticalGradient(0, y, width, height * 5, c1, c2, Y_AXIS);

  // park setting images
  image(setting.park, -100, 100 + frameCount * 0.05, 770, 600);
  image(setting.blanket, 50, 500 + frameCount * 0.05, 500, 130);
  image(setting.basket, 130, 520 + frameCount * 0.05, 90, 80);

  // mouseX (bottom bread slice)
  image(setting.bread, mouseX, 580 + frameCount * 0.05, 125, 50);

  // score tracker properties 
  textSize(35);
  textFont('Times New Roman');
  text('SCORE:', 410, 35);
  text(scoreTracker, 550, 35);



  // falling foods for-loop
  for(let food of foods) {
    food.draw();
    food.update();
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

// function addAFood() {
//   if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'bread') {
//     let food1 = new Bread(random(width), -20);
//     foods.push(food1);
//   }
//   if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'jelly') {
//     let food1 = new Jelly(random(width), -20);
//     foods.push(food1);
//   }
//   if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'peanutButter') {
//     let food1 = new PeanutButter(random(width), -20);
//     foods.push(food1);
//   }
//   if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'mustard') {
//     let food1 = new Mustard(random(width), -20);
//     foods.push(food1);
//   }
//   if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'ketchup') {
//     let food1 = new Ketchup(random(width), -20);
//     foods.push(food1);
//   }
// }

// class Bread {
//   constructor(x, y) {
//    this.x = x;
//    this.y = y;
//  }
//  update() {
//    this.y += 1.25;
//  }
//  draw() {
//   image(setting.bread, this.x, this.y, 125, 50);
//  }
// } 
 
// class Jelly {
//   constructor(x, y) {
//    this.x = x;
//    this.y = y;
//  }
//  update() {
//    this.y += 1.25;
//  }
//  draw() {
//   image(setting.jelly, this.x, this.y, 125, 50);
//  }
// }
 
// class PeanutButter {
//   constructor(x, y) {
//    this.x = x;
//    this.y = y;
//  }
//  update() {
//    this.y += 1.25;
//  }
//  draw() {
//   image(setting.peanutButter, this.x, this.y, 125, 50);
//  }
// }

// class Mustard {
//   constructor(x, y) {
//    this.x = x;
//    this.y = y;
//  }
//  update() {
//    this.y += 1.25;
//  }
//  draw() {
//   image(setting.mustard, this.x, this.y, 125, 50);
//  }
// }

// class Ketchup {
//   constructor(x, y) {
//    this.x = x;
//    this.y = y;
//  }
//  update() {
//    this.y += 1.25;
//  }
//  draw() {
//   image(setting.ketchup, this.x, this.y, 125, 50);
//  }
// }
 
// mouse interaction for score tracker
function mousePressed() {
  scoreTracker++;
}

function stackMovement() {

  for (var i= stack.length -1; i>=0; i++) {

    stack[i].update();

    if (stack[i-1] !=null)
      stack[i].moveTo(stack[i-1].position);

    }

}

for (var i=0; i<stack.length; i++) {
  stack[i]=draw();
}

if (stack.length-1 >scoreTracker) {
  scoreTracker++;
}

function condimentFormation() {
  for (var i=0; i<toppings.length; i++) {
    condiments[i].update();
    condiments[i].draw()

  }
}