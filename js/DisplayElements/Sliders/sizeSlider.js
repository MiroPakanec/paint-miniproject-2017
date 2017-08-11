function SizeSlider(){

  Slider.call(this);

  this.elementId = "#size-slider";
  this.elementDescriptionId = "#tool-size";
  this.desc = "Size: ";

  this.__init = function(){

    this.print();
  }

  this.__init();
}
