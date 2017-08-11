function RubberTool(){

  Tool.call(this);

  this.elementId = "#btn-rubber";
  this.toolId = "1";
  this.name = "rubber";

  this.getDraggingShape = function(x, y){

    var bg = drawingPlane.bgColor;
    this.shape.setFullShape(x, y, bg, this.transparencySlider.getSliderValue(), 0, this.sizeSlider.getSliderValue());
    return this.shape;
  }
}
