
var position = 200;

function setup() {
  createCanvas(800, 1000, WEBGL);
  
}

function draw() {
  background(100, 149, 237); 
  
  //Jendela
  push();
  translate(10,10,20);
  fill(245, 245, 245);
  square(10, -50, 120);
  pop();
  
  //Tempat Tidur
  push();
  translate(0,170,0);
  fill(250, 250, 210);
  box(350, 30, 150);
  pop();
  
  //Bantal
  push();
  noStroke();
  translate(110,148,20);
  fill(143, 188, 144);
  ellipsoid(50, 50, 50);
  pop();
  
  //buku 1
  translate(5, 100, 250);
  push();
  translate(0, -6, 4);
  rotateX(PI / 2);
  noStroke();
  fill(173, 216, 230);
  plane(70, 100);
  pop();
  box(70, 10, 100);
   
  //Meja
  push();
  translate(90,100,120);
  fill(205, 133, 63);
  box(95, 80, 90);
  pop();

  
  //buku 2
  translate(100, 55, 105);
  push();
  translate(0, -6, 4);
  rotateX(PI / 2);
  noStroke();
  fill(144, 238, 144);
  plane(70, 100);
  pop();
  box(70, 10, 100);
  
}