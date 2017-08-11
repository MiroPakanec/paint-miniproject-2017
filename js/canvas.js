var canvas;
var drawingPlane;

function setup(){

  p5.disableFriendlyErrors = true;

  drawingPlane = new Plane();
  canvas = getCanvas();
}

function draw(){

  drawingPlane.displayBackground();
  drawingPlane.displayDrawings();

  drawingPlane.draw(mouseX, mouseY);
  drawingPlane.displayHoveringShape();
}

function getCanvas(){

  cvs = createCanvas(drawingPlane.getPlaneSize()[1], drawingPlane.getPlaneSize()[0]);
  cvs.parent(removeIdHash(drawingPlane.parentId));
  cvs.class('inner-canvas');

  return cvs;
}
