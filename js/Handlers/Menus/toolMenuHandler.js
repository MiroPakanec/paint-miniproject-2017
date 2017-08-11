function ToolMenuHandler(){

  MenuHandler.call(this);

  this.menuElementClass = ".btn-tool";
  this.menuELementTypeAttribute = "tool-type";

  this.getActiveObj = function(){

    var activeToolId = this.findActiveElement();

    switch(activeToolId){
      case "0" : return new BrushTool();
      case "1" : return new RubberTool();
      default: throw "tool id does not exist.";
    }
  }
}
