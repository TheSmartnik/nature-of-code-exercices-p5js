// Breaker of the chains
function setup() {
 createCanvas(640, 480);
 walker = new Walker;
}

function draw() {
  background("#4f2c5a");
  walker.display();
}

function Walker() {
  this.currentRotatation = 0;
  this.position = createVector(width / 2, height / 2);
  this.xoff = 0;
  this.yoff = 0;
  this.direction = 1;
  this.tries = 0;
  this.mult = 10;
  this.display = function() {
    fill(255);
    noStroke(0);
    this.currentRotatation += 1;
    push();
    var vector = createVector(noise(this.xoff) * this.mult, noise(this.yoff) * this.mult);
    
    if(this.tries < 15) {
      if(frameCount % 25 == 0) {
        random(-1, 1) > 0 ? this.direction = 1 : this.direction = -1;
      }
      
      if (this.position.x >= width - 30 || this.position.x <= 0 || this.position.y <= 0 || this.position.y >= height - 30) {
        this.direction = this.direction * (-1);
        this.tries += 1;
        this.mult += 1;
        if (this.tries == 14) this.mult += 35;
      }
    }
    
    if(this.direction == 1) {
      this.position.add(vector);
    } else {
      this.position.sub(vector);
    }
    
    this.xoff += 0.05;
    this.yoff += 0.1;
    
    translate(this.position.x, this.position.y);
    rotate(radians(this.currentRotatation));
    rect(-30, - 30, 60, 60, 20, 0, 20, 0);
    pop();
  }
}