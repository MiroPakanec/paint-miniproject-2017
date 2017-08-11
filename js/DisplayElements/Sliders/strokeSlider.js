function StrokeSlider(){

  Slider.call(this);

  this.elementId = "#stroke-slider";
  this.elementDescriptionId = "#tool-stroke";
  this.desc = "Stroke: ";

  this.__init = function(){

    this.print();
  }

  this.__init();
}
