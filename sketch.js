// preloadVariables
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
let foodType = ['bread', 'jelly', 'peanutButter']

// variable for disappearing text 
let f=500; 

// // code that needs to be debugged 
// // let condimentsCollected=0; 
// let condiments; 
// let player; 
// let scoreTracker = 0; 
// // let game; 

function preload() {
  setting.park = loadImage('images/park.png');
  setting.blanket = loadImage('images/blanket.png');
  setting.basket = loadImage('images/basket.png');
  setting.bread = loadImage('images/bread.png');
  setting.jelly = loadImage('images/jelly.png');
  setting.peanutButter = loadImage('images/peanutButter.png'); 
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
  
  // // problematic code 
  // condiments= new Group();
  // for (var i=0; i<50;i++) { 
  //   var p = peanutButter(random(0, 500), random(-50, 0),135,50);  
  //   var j =jelly(random(0, 500), random(-50, 0),135,50); 
  //   condiments.add(p);
  //   condiments.add(j);
  // }
  //   player= (image(setting.bread, mouseX, mouseY, 150, 50),  
  //   image(setting.jelly, mouseX, mouseY , 150, 50),  
  //   image(setting.peanutButter, mouseX, mouseY, 150, 50),  
  //   image(setting.bread, mouseX, mouseY , 150, 50));  
}

function draw() {
  // backgroundColorChanges 
  speed = 0.005;
  y = y + speed;
  verticalGradient(0, y, width, height * 5, c1, c2, Y_AXIS);

  // park setting images
  image(setting.park, -100, 100 + frameCount * 0.005, 770, 600);
  image(setting.blanket, 50, 500 + frameCount * 0.005, 500, 130);
  image(setting.basket, 130, 520 + frameCount * 0.005, 90, 80);

  // mouseX (sandwich)
  image(setting.bread, mouseX, mouseY , 150, 55);
  image(setting.jelly, mouseX -15, mouseY - 10 , 175, 65);
  image(setting.peanutButter, mouseX, mouseY, 140, 45);
  image(setting.bread, mouseX, mouseY - 20, 150, 55);

  // // score tracker properties  
  // fill('black'); 
  // textSize(30); 
  // textFont('Itim'); 
  // text('SCORE:', 425, 45); 
  // text(scoreTracker, 535, 45); 

  //shift notification properties
  fill(255,f);
  noStroke();
  textSize(18);
  textFont('Itim');
  text('Press SHIFT to start!',200,35);
  if (f>0) {
    f--;
  }
  
  // // problematic code
  // player.velocity.x=(mouseX-player.position.x)*0.1; 
  //   player.overlap(condiments,getCondiments); 

  //   if (condiments.length>0) { 
  //     text('SCORE:', 425, 45); 
  //   }

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

// // call function in draw();
// function getCondiments(player,condiment) { 
//     condiment.remove();
//     scoreTracker+=1  
//   }
// }

function keyPressed() {
  if(keyCode === SHIFT) {
      addAFood();
  }
}

function addAFood() {
  if (random(foodType) == 'bread') {
    let food1 = new Bread(random(0, 500), random(-50, 0) , 135, 50, 135, 50);
    foods.push(food1);
  }
  if (random(foodType) == 'jelly') {
    let food1 = new Jelly(random(0, 500), random(-50, 0), 135, 50, 135, 50);
    foods.push(food1);
  }
  if (random(foodType) == 'peanutButter') {
    let food1 = new PeanutButter(random(0, 500), random(-50, 0), 115, 50, 135, 50);
    foods.push(food1);
  }
}

class Bread {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
  update() {
    this.y += 2.0;
  }
  draw() {
    image(setting.bread, this.x, this.y, this.width, this.height);
  }
} 
  
class Jelly {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h; 
  }
  update() {
    this.y += 2.0;
  }
  draw() {
    image(setting.jelly, this.x, this.y, this.width, this.height);
  }
}
   
class PeanutButter {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  } 
  update() {
    this.y += 2.0;
  }
  draw() {
    image(setting.peanutButter, this.x, this.y, this.width, this.height)
  }
}
 
// //object collision detector
// p5.prototype.objectCollison = function (x,y,w,h,x2,y2,w2,h2) {
//   if (x+w>=w2 &&
//       x<=x2+w2 &&
//       y+h>=y2 &&
//       y<=y2+h2) {
//         //distance is less than the radius=collision
//         return true;
//   }
//       return false;
// }