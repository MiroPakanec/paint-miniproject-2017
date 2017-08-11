/**
  @Abstract class
*/
function Tool(){

  this.color;
  this.colorLabelId = "#lbl-color";
  this.shape;
  this.shapeMenu = new ShapeMenuHandler();
  this.sizeSlider = new SizeSlider();
  this.transparencySlider = new TransparencySlider();
  this.strokeSlider = new StrokeSlider();

  this.__init = function(){

    if (this.constructor === Tool)
      throw new Error("Initialization exception of " + this.constructor.name);

    this.setDefaultColor();
    this.shape = this.shapeMenu.getActiveObj();
  }

  this.getDraggingShape = function(x, y){

    this.shape.setFullShape(x, y, this.color, this.transparencySlider.getSliderValue(), this.strokeSlider.getSliderValue(), this.sizeSlider.getSliderValue());
    return this.shape;
  }

  this.getHoveringShape = function(x, y){

    this.shape.setEmptyShape(x, y, this.sizeSlider.getSliderValue());
    return this.shape;
  }

  this.setDefaultColor = function(){

    var color = $(this.colorLabelId).css("background-color");
    this.color = rgbToArray(color);
  }

  this.setColor = function(r, g, b){

    var color = [r, g, b];
    $(this.colorLabelId).css('background-color', arrayToRGB(color));
    this.color = color;
  }

  this.setShape = function(id){

    this.shapeMenu.setActiveElement(id);
    this.shape = this.shapeMenu.getActiveObj();
  }

  this.__init();
}
