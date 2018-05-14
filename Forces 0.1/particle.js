function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  
  this.applyForce = function(vector) {
    this.acc.add(p5.Vector.div(vector, m));
  }
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.acc.set(0, 0);
  }
  
  this.display = function() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, m * 10, m * 10);  
  }
  
  this.edges = function() {
   if (this.pos.y > height - 25) {
     this.vel.y *= -0.7;
     this.pos.y = height - 25;
   }
   if(this.pos.x > width) {
     this.vel.x *= -0.3;
     this.pos.x = width;
   }
  }
}