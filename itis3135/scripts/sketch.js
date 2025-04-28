//make canvas with size that is (width, height)
function setup() {
    createCanvas(600, 400);
  }
  function draw() {
    //create a blue background for sky
    background(135, 206, 235);
    //creates a sun
    fill("yellow");
    circle(550, 50, 100);
   
    //green to represent grass
    fill("green");
    rect(0, 200, 600, 200);
   
    //emojis that is flower and ladybug
    textSize(75);
    text("🌸", 100, 250);
    text("🐞", mouseX, mouseY);
  }