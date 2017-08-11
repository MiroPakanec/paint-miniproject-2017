function TransparencySlider(){

  Slider.call(this);

  this.elementId = "#transparency-slider";
  this.elementDescriptionId = "#tool-transparency";
  this.desc = "Transparency: ";

  this.__init = function(){

    this.print();
  }

  this.getSliderValue = function(){

    var value = parseInt($(this.elementId).val());
    return parseInt((255/ 100) * value);
  }

  this.getSliderValuePercent = function(){

    return parseInt($(this.elementId).val());
  }

  this.print = function(){

    $(this.elementDescriptionId).html(this.desc + this.getSliderValuePercent());
  }

  this.__init();
}
