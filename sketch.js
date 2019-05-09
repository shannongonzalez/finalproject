function preload() {
  img1 = loadImage ("makeup35comments.jpg");
  img2 = loadImage ("nomakeup35comments.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if ((mouseX <= 300) && (mouseY <= 500)) {
    image(img2,0, 0, 300, 500);   // Upper-left
  }
  else if ((mouseX <= 300) && (mouseY > 500)) {
    rect(0, 500, 300, 500);  // Lower-left
  }
  else if ((mouseX > 300) && (mouseY <= 500)) {
    rect(300, 0, 500, 500);  // Upper-right
  }
  else {
    image(img1, 300, 500, 300, 500); // Lower-right
  }
}
