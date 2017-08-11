function MenuHandler(){

  this.__init = function(){

    if (this.constructor === MenuHandler)
      throw new Error("Initialization exception of " + this.constructor.name);
  }

  this.setActiveElement = function(id){

    this.removeActiveElementMark();
    $(id).addClass("active");
  }

  this.removeActiveElementMark = function(){

    $(this.menuElementClass).each(function(){
      $(this).removeClass('active');
    });
  }

  this.findActiveElement = function(){

    var activeElement;
    var attribute = this.menuELementTypeAttribute;

    $(this.menuElementClass).each(function(){

      var isActive = $(this).hasClass("active");
      if(isActive){
        activeElement = $(this).attr(attribute);
        return;
      }
    });

    return activeElement;
  }

  this.__init();
}
