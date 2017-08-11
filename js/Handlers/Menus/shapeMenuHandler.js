function ShapeMenuHandler(){

  MenuHandler.call(this);

  this.menuElementClass = ".btn-shape";
  this.menuELementTypeAttribute = "shape-type";

  this.getActiveObj = function(){

    var activeShapeId = this.findActiveElement();

    switch(activeShapeId){
      case "0" : return new Ellipse();
      case "1" : return new Square();
      default: throw "tool id does not exist.";
    }
  }
}
