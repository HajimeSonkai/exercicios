function setup() {
  var canvas = createCanvas(600, 400);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  background(255, 0, 200);
}

function draw() {
  background(0);
  circle(30, 30, 20);
}

var elemento = document.getElementById("board");
console.log(elemento)