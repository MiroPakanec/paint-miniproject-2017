function Slider(){

  this.__init = function(){

    if (this.constructor === Shape)
      throw new Error("Initialization exception of " + this.constructor.name);
  }

  this.getSliderElementId = function(){

    return this.elementId;
  }

  this.getSliderValue = function(){

    return parseInt($(this.elementId).val());
  }

  this.print = function(){

    $(this.elementDescriptionId).html(this.desc + this.getSliderValue());
  }

  this.__init();
}
