function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(0, 51, 51);

  //Mountains.
  fill(0, 25, 21, 98);
  ellipse(150, 550, 300, 400);
  fill(0, 25, 21, 60, 90);
  ellipse(300, 550, 400, 400);
  fill(0, 25, 21, 45, 75);
  ellipse(0, 550, 400, 300);

  //Tree trunk.
  fill(153, 76, 0);
  stroke(102, 51, 0);
  quad(100, 20, 120, 20, 125, 500, 95, 500);

  //Top.
  fill(51, 102, 0);
  noStroke();
  triangle(75, 70, 110, 0, 145, 70);

  //Boughs.
  fill(51, 102, 0);
  noStroke();
  triangle(60, 220, 100, 50, 100, 160);
  triangle(120, 50, 120, 160, 160, 220);
  
  fill(0, 102, 0);
  triangle(75, 260, 110, 80, 145, 260);
  
  fill(21, 107, 21);
  triangle(75, 150, 110, 20, 145, 150);
  
  fill(0, 102, 0);
  noStroke();
  triangle(60, 170, 100, 20, 100, 100);
  triangle(120, 20, 120, 100, 160, 170);

  //Glow.
  fill(228, 234, 236, 28);
  circle(320, 60, 90);
  fill(228, 234, 236, 28);
  circle(320, 60, 70);

  //Moon.
  fill(220, 239, 247);
  circle(320, 60, 50);
  fill(221, 228, 230);
  circle(310, 55, 15);
  circle(327, 68, 10);
  circle(327, 50, 8);
}
