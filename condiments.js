let foodType = ['bread', 'jelly', 'peanutButter'];

function condiments() {
  function keyPressed() {
    if(keyCode === SHIFT) {
      addAFood();
    }
  }
      
  function addAFood() {
    if (random(foodType) == 'bread') {
      let food1 = new Bread(random(width), -20, 125, 50);
      foods.push(food1);
    }
    if (random(foodType) == 'jelly') {
      let food1 = new Jelly(random(width), -20, 135, 50);
      foods.push(food1);
    }
    if (random(foodType) == 'peanutButter') {
      let food1 = new PeanutButter(random(width), -20, 115, 50);
      foods.push(food1);
    }
    // if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'mustard') {
    //   let food1 = new Mustard(random(width), -20, 125, 50);
    //   foods.push(food1);
    // }
    // if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'ketchup') {
    //   let food1 = new Ketchup(random(width), -20, 125, 50);
    //   foods.push(food1);
    // }
  }
      
  class Bread {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
    }
    update() {
      this.y += 2.5;
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
      this.y += 2.5;
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
      this.y += 2.5;
    }
    draw() {
      image(setting.peanutButter, this.x, this.y, this.width, this.height);
    }
  }
}
      
//   class Mustard {
//     constructor(x, y, w, h) {
//       this.x = x;
//       this.y = y;
//       this.width = w;
//       this.height = h;
//     }
//     update() {
//       this.y += 2.5;
//     }
//     draw() {
//       image(setting.mustard, this.x, this.y, this.width, this.height);
//     }
//   }
      
//   class Ketchup {
//     constructor(x, y, w, h) {
//       this.x = x;
//       this.y = y;
//       this.width = w;
//       this.height = h;
//     }
//     update() {
//       this.y += 2.5;
//     }
//     draw() {
//       image(setting.ketchup, this.x, this.y, this.width, this.height);
//     }
//   }
// }