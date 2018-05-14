var particle1;
var particle2;
var particles;

function setup() {
  createCanvas(640, 480);  
  particle1 = new Particle(100, height / 2, 1);
  particle2 = new Particle(300, height / 2, 2);
  particles = [particle1, particle2];
}

function draw() {
  background('#4d2a8f');
  
  for(var i = 0; i < 2; i++) {
    var particle = particles[i];
    var gravity = createVector(0, 0.1 * particle.mass);
    
    var wind = createVector(0.03, 0);
    
    particle.applyForce(gravity);
    if (mouseIsPressed) {
      particle.applyForce(wind);
    }
    
    particle.update();
    particle.edges();
    particle.display();
  }
}