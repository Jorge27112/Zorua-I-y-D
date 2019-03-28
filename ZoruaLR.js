var z;

function setup() {
  createCanvas(400, 400);
  z = new Zorua();
  frameRate(20);
}

function draw() {
  background(220);
  z.show();
  if(keyIsPressed && keyCode==LEFT_ARROW){
     z.izquierda();
  }
  if(keyIsPressed && keyCode==RIGHT_ARROW){
     z.derecha();
  }

}

class Zorua {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.imgsR = [];
    this.imgsL = [];
    this.frame = 0;
    for (var i = 0; i < 4; i++) {
      this.imgsR[i] = loadImage("ZoruaR/" + i + ".gif");
    }
    for (var i = 0; i < 4; i++) {
      this.imgsL[i] = loadImage("ZoruaL/" + i + ".gif");
    }
  }
show(){
  imageMode(CENTER);
  if (keyCode == LEFT_ARROW) {
    image(this.imgsL[this.frame], this.x, this.y);
  }
  else {
    image(this.imgsR[this.frame], this.x, this.y);
  }
}
izquierda(){
  this.frame++;
  this.x = this.x - 10;

  if (this.frame > 3) {
    this.frame = 0;
  }
}
derecha(){
  this.frame++;
  this.x = this.x + 10;

  if (this.frame > 3) {
    this.frame = 0;
  }
}
}
