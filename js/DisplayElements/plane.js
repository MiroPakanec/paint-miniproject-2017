function Plane(){

  var toolMenuHandler = new ToolMenuHandler();

  this.mouseHandler = new MouseHandler();
  this.actionHandler = new ActionHandler();
  this.activeTool;
  this.bgColor = 240;
  this.parentId = "#canvas";

  this.__init = function(){

    this.activeTool = this.getActiveTool();
  }

  this.getPlaneSize = function(){

    var x = $(this.parentId).height();
    var y = $(this.parentId).width();

    return [x, y];
  }

  this.getActiveTool = function(){

    return toolMenuHandler.getActiveObj();
  }

  this.setActiveTool = function(id){

    toolMenuHandler.setActiveElement(id);
    this.activeTool = toolMenuHandler.getActiveObj();
  }

  this.setDefaultActiveTool = function(){

    var id = "#btn-brush";
    toolMenuHandler.setActiveTool(id);
    this.activeTool = toolMenuHandler.getActiveObj();
  }

  this.draw = function(x, y){

    if(this.mouseHandler.LMB_pressed_on_canvas() === true){

      var shape = deepCopy(this.activeTool.getDraggingShape(mouseX, mouseY));
      this.actionHandler.pushShape(shape);
      return;
    }

    this.actionHandler.addAction();
  }

  this.displayBackground = function(){

    background(this.bgColor);
  }

  this.displayDrawings = function(){

    this.actionHandler.displayActions();
  }

  this.displayHoveringShape = function(){

    this.activeTool.getHoveringShape(mouseX, mouseY).display();
  }

  this.__init();
}
