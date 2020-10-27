let setting = {
  background: 'park',
  objects: ['blanket', 'basket'],
  sandwich: ['bread', 'jelly', 'peanutButter','mustard','ketchup']
}
let shapes = [];
function preload() {
  setting.park = loadImage('images/park.png');
  setting.blanket = loadImage('images/blanket.png');
  setting.basket = loadImage('images/basket.png');
  setting.bread = loadImage('images/bread.png');
  setting.jelly = loadImage('images/jelly.png');
  setting.peanutButter = loadImage('images/peanutButter.png');
  setting.mustard=loadImage('images/mustard.png');
  setting.ketchup=loadImage('images/ketchup.png');

scoreTracker=0;



}
function setup() {
  createCanvas(600, 650);
  colorMode(HSB);
  angleMode(DEGREES);
}
function draw() {
  background(195, 100, 100);
  image(setting.park, -100, 100, 770, 600);
  image(setting.blanket, 50, 500, 500, 130);
  image(setting.basket, 130, 520, 90, 80);
  image(setting.bread, mouseX, 580, 125, 50);
  textSize(35);
  textFont('Times New Roman')
  text('SCORE: ',410,35);
  text(scoreTracker,550,35);

  var d=dist



  for(let shape of shapes) {
    push();
    shape.y += 1.5;
    if(shape.shapeType === 'bread') {
      image(setting.bread, shape.x, shape.y, 125, 50);
    }
    if(shape.shapeType === 'jelly') {
      image(setting.jelly, shape.x, shape.y, 165, 55);
    }
    if(shape.shapeType === 'peanutButter') {
      image(setting.peanutButter, shape.x, shape.y, 165, 55);
    }
    if(shape.shapeType === 'mustard') {
      image(setting.mustard, shape.x, shape.y, 165, 55);

    }
    if(shape.shapeType === 'ketchup') {
      image(setting.ketchup, shape.x, shape.y, 165, 55);
  }
}
}
function keyPressed() {
  if(keyCode === SHIFT) {
    addAFood();
  }
}
function addAFood() {
  shape1 = {
    x: mouseX,
    y: -20,
    shapeType: random(['bread', 'jelly', 'peanutButter','mustard','ketchup'])
  }
  shapes.push(shape1);
}
function mousePressed() {
  
  
  scoreTracker++;
}

