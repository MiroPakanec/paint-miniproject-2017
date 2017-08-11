$(function(){

  document.body.onmousedown = function() {
    drawingPlane.mouseHandler.LMB_pressed = true;
  }

  document.body.onmouseup = function() {
    drawingPlane.mouseHandler.LMB_pressed = false;
  }

  document.getElementById(removeIdHash(drawingPlane.parentId)).onmouseover  = function(){
    drawingPlane.mouseHandler.mouseOverCanvas = true;
  }

  document.getElementById(removeIdHash(drawingPlane.parentId)).onmouseout   = function(){
    drawingPlane.mouseHandler.mouseOverCanvas = false;
  }
});
