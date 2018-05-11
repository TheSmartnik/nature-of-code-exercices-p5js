
function setup() {
  createCanvas(640, 480);
  walker = new Walker();
}

function draw() {
  background(51);
  
  walker.display();
  walker.update();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);
  
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.normalize();
    this.acc.setMag(0.02);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
  
  
}