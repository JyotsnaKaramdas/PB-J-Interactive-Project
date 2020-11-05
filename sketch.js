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
let condiments=[];

var c=null;

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

  // for (let i = 0; i < 50; i += 5) {
    // // jellies[i] = new Jelly(random(width), random(height), 60, 20);
    // // peanuts[i] = new PeanutButter(random(width), random(height), 50, 20);
    // condiments[0]= new Jelly(random(width), random(height), 60, 20);
    // condiments[1]=new PeanutButter(random(width), random(height), 50, 20);
  



  // player = sandwich
  sandwich = new Sandwich(random(width), random(height),200,90);

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
  sandwich.display(mouseX, mouseY,200,90);
  
  
  
  // jelly for-loop
  for (let i = 0; i < condiments.length; i += 5) {
    condiments[i].update();
    condiments[i].display();
    //  condiments[i].overlaps();
    //  condiments[i].touches();
  }

  // // peanut butter for-loop
  // for (let i = 0; i < peanuts.length; i += 5) {
  //     peanuts[i].update();
  //     peanuts[i].display();
  //     peanuts[i].overlaps();
  //     peanuts[i].touches();
  //   }

  


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



// function mousePressed() {

// }

// function changeImage(){
//   if (condiments[i].overlaps() && jellies[i].touches()==true){
//     jellies=image(setting.pbj, this.x1, this.y1, this.x2, this.y2);
//   } else{
//     jellies=jellies
//   }
  
// }


class Condiments {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.r
  }


    //this.r= floor(random(0,condiments.length));


  //}
//   overlaps(sandwich) {
    
//     //no horizontal overlap
//     if (this.x1>=sandwich.x2 || sandwich.x1 >=this.x2){
//       return false;
//     }

//     //no vertical overlap
//     if (this.y1 >= sandwich.y2 || sandwich.y2 >=this.y2) {
//       return false;
//     } else {
//       return true;
//     }
//   }
  
//   touches (sandwich) {
//     //has horizontal gap
    
//     if (this.x1>sandwich.x2 || sandwich.x1 >this.x2) {
//       return false;
//     }
//     //has vertical gap

//     if (this.y1>sandwich.y2 || sandwich.y1> this.y2) {
//       return false;
//     } else{
//       return true;

//    }

//   }

    
  
  
  
  
  
//     //   let d = dist(this.x, this.y, sandwich.x, sandwich.y);
//   //   if (d < (this.x + this.w) + sandwich.x) {
//   //     return false;
//   //   }
//   //   if (d < this.x + (sandwich.x + sandwich.w)) {
//   //     return false;
//   //   }
//   //   if (d < ) {
//   //     return false;
//   //   }
//   //   if (d < ) {
//   //     return false;
//   //   } else {
//   //     return true;
//   //   }
//   // }
  display() {
    image(condiments[i], this.x1, this.y1, this.x2, this.y2);
  }
  update() {
    this.y1 = this.y1 += (1.5);
    if (this.y1 > height){ 
			  this.y1 = -this.y2;
		}
  }
}
// class PeanutButter {
//   constructor(x1, y1, x2,y2) {
//     this.x1 = x1;
//     this.y1 = y1;
//     this.x2 = x2;
//     this.y2 = y2;
//   }
//  overlaps(sandwich) {
//   if (this.x1>=sandwich.x2 || sandwich.x1 >=this.x2){
//     return false;
//   }

//   //no vertical overlap
//   if (this.y1 >= sandwich.y2 || sandwich.y2 >=this.y2) {
//     return false;
//   } else {
//     return true;
//   }

//  }

//  touches(sandwich){

//   if (this.x1>sandwich.x2 || sandwich.x1 >this.x2) {
//     return false;
//   }
//   //has vertical gap

//   if (this.y1>sandwich.y2 || sandwich.y1> this.y2) {
//     return false;
//   } else{
//     return true;

//  }


//  }
 
 //   let d = dist(this.x, this.y, sandwich.x, sandwich.y);
  //   if (d < this.x && this.h + sandwich.w && sandwich.h) {
  //     return false;
  //   } 
  //   if (d < ) {
  //     return false;
  //   }
  //   if (d <) {
  //     return false;
  //   }
  //   if (d <) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
//   display() {
//     image( this.x1, this.y1, this.x2, this.y2);
//   }
//   update() {
//     this.y1 = this.y1 += (1.5);
//     if (this.y1 > height){ 
//         this.y1 = -this.y2;
//     }
//   }
//  }
 
class Sandwich {
  constructor(x1,y1,x2,y2) {
    this.x1 = x1;
    this.y1= y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  display(x1, y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2=x2;
    this.y2=y2;
    image(setting.pbj, this.x1, this.y1, this.x2, this.y2);
  }
}
