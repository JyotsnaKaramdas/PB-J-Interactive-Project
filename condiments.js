function keyPressed() {

      if(keyCode === SHIFT) {
          addAFood();
        }
    
      
      
      function addAFood() {
        if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'bread') {
          let food1 = new Bread(random(width), -20 ,125, 50);
          foods.push(food1);
        }
        if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'jelly') {
          let food1 = new Jelly(random(width), -20,125, 50);
          foods.push(food1);
        }
        if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'peanutButter') {
          let food1 = new PeanutButter(random(width), -20,125, 50);
          foods.push(food1);
        }
        if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'mustard') {
          let food1 = new Mustard(random(width), -20,125, 50);
          foods.push(food1);
        }
        if (random(['bread', 'jelly', 'peanutButter', 'mustard', 'ketchup']) == 'ketchup') {
          let food1 = new Ketchup(random(width), -20,125, 50);
          foods.push(food1);
        }
      }
      

      
      class Bread {
        constructor(x, y,w,h) {
         this.x = x;
         this.y = y;
         this.width=w
         this.height=h

       }
       update() {
         this.y += 1.25;
       }
       draw() {
        image(setting.bread, this.x, this.y, this.width, this.height);
       }
      } 
       
      class Jelly {
        constructor(x, y,w,h) {
         this.x = x;
         this.y = y;
         this.width=w
         this.height=h

       }
       update() {
         this.y += 1.25;
       }
       draw() {
        image(setting.jelly, this.x, this.y, this.width, this.height);
       }
      }
       
      class PeanutButter {
        constructor(x, y,w,h) {
         this.x = x;
         this.y = y;
         this.width=w
         this.height=h
       }
       update() {
         this.y += 1.25;
       }
       draw() {
        image(setting.peanutButter, this.x, this.y,this.width, this.height );
       }
      }
      
    //   class Mustard {
    //     constructor(x, y) {
    //      this.x = x;
    //      this.y = y;
    //    }
    //    update() {
    //      this.y += 1.25;
    //    }
    //    draw() {
    //     image(setting.mustard, this.x, this.y, 125, 50);
    //    }
    //   }
      
    //   class Ketchup {
    //     constructor(x, y) {
    //      this.x = x;
    //      this.y = y;
    //    }
    //    update() {
    //      this.y += 1.25;
    //    }
    //    draw() {
    //     image(setting.ketchup, this.x, this.y, 125, 50);
    //    }
      
    // }
}
 
