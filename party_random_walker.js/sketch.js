
function setup() {
  createCanvas(1280, 900);
  walkers = []
  for(var i = 0; i < 100; i++) {
    walkers.push(new Walker());
  }
}

function draw() {
  background(51);
  
  for(var i = 0; i < 100; i++) {
    walkers[i].display();
    walkers[i].update();
  }
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);
  
  // this.acc = createVector(0, 0.1);
  
  this.update = function() {
    // this.vel.add(this.acc);
    
  this.vel = createVector(random(-5, 5), random(-5, 5));
    this.pos.add(this.vel); 
  }
  
  this.display = function() {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
  
  
}