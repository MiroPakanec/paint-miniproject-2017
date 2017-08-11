$(function(){

  $(document).on('click', "#btn-clear", function(){

    setup();
  });

  $(document).on('click', "#btn-undo", function(){

    drawingPlane.actionHandler.previousAction();
  });

  $(document).on('click', "#btn-redo", function(){

    drawingPlane.actionHandler.nextAction();
  });

  $(document).on('click', "#btn-save", function(){

    save('paint-editor-sketch.jpg');
  });

  $(document).on('click', ".btn-color", function(){

    var color = $(this).css('background-color');
    var rgba = rgbToArray(color);

    drawingPlane.activeTool.setColor(rgba[0], rgba[1], rgba[2]);
  });

  $(document).on('click', ".btn-tool", function(){

    var id = addIdHash($(this).attr("id"));
    drawingPlane.setActiveTool(id);
  });

  $(document).on('click', ".btn-shape", function(){

    var id = addIdHash($(this).attr("id"));
    drawingPlane.activeTool.setShape(id);
  });
})
