$(function(){

  loadSliders();
  loadColors();
});

function loadColors(){

  var colors = ["B0171F", "DC143C", "EEA2AD", "FFB6C1", "EE30A7", "4B0082", "8470FF", "473C8B", "4F94CD", "00F5FF", "2F4F4F", "03A89E", "00FA9A",
                "00FF00", "EEEE00", "FFEC8B", "FFE4B5", "9C661F", "EE9A49", "CD661D", "EE5C42", "FA8072", "EE2C2C", "FFFFFF", "000", "5B5B5B", "AAAAAA",
                "EBEBEB", "728C00", "6CBB3C", "FFEBCD", "254117"];
  var html = "";

  colors.forEach(function(color) {

    html += '<input type="button" class="btn btn-standard btn-color" style="background-color:#'+ color +'"></intput>';
  });

  $("#color-picker").html(html);
}

function loadSliders(){

  loadSizeSlider();
  loadTransparencySlider();
  loadStrokeSlider();
}

function loadSizeSlider(){

  $("#size-slider").slider({
    min: 10,
    max: 300,
    scale: 'logarithmic',
    step: 1,
    value: 20
  });
}

function loadTransparencySlider(){

  $("#transparency-slider").slider({
    min: 1,
    max: 100,
    step: 1,
    value: 100
  });
}

function loadStrokeSlider(){

  $("#stroke-slider").slider({
    min: 0,
    max: 1,
    step: 1,
    value: 0
  });
}
