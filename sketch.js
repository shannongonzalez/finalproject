function preload() {
  img1 = loadImage ("makeup35comments.jpg");
  img2 = loadImage ("nomakeup35comments.jpg");
  img3 = loadImage ("makeup35glitchcomments2.jpg");
  img4 = loadImage ("nomakeup35glitchcomments.jpg");
}

function setup() {
  createCanvas(600, 1000);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if ((mouseX <= 300) && (mouseY <= 500)) {
    image(img2, 0, 0, 300, 500);   // Upper-left
  }
  else if ((mouseX <= 300) && (mouseY > 500)) {
    image(img3, 0, 500, 300, 500);  // Lower-left
  }
  else if ((mouseX > 300) && (mouseY <= 500)) {
    image(img4, 300, 0, 300, 500);  // Upper-right
  }
  else {
    image(img4, 300, 500, 300, 500); // Lower-right
  }
}
