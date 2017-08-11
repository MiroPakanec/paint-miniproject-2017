$(function(){

  $(document).on("change", "#size-slider", function(){

    drawingPlane.activeTool.sizeSlider.print();
  });

  $(document).on("change", "#transparency-slider", function(){

    drawingPlane.activeTool.transparencySlider.print();
  });

  $(document).on("change", "#stroke-slider", function(){

    drawingPlane.activeTool.strokeSlider.print();
  });
});
