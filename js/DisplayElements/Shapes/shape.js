/**
  @Abstract class
*/
function Shape(){

  this.x;
  this.y;
  this.color;
  this.transparency;
  this.stroke;
  this.size;

  this.__init = function(){

    if (this.constructor === Shape)
      throw new Error("Initialization exception of " + this.constructor.name);
  }

  this.setFullShape = function(x, y, color, transparency, stroke, size){

    this.x = x;
    this.y = y;
    this.color = color;
    this.transparency = transparency;
    this.size = size;
    this.stroke = stroke;
  }

  this.setEmptyShape = function(x, y, size){

    this.x = x;
    this.y = y;
    this.color = [0,0,0];
    this.transparency = 0;
    this.size = size;
    this.stroke = 100;
  }

  this.display = function(){

    if(this.stroke === 0)
      noStroke();
    else
      stroke(this.stroke);

    fill(this.getRGBAColor());
    this.print();
  }

  this.getRGBAColor = function(){

    var rgba = [];

    if(this.color.constructor === Array){
      rgba.push(this.color[0], this.color[1], this.color[2], this.transparency);
      return rgba;
    }

    rgba.push(this.color, this.color, this.color, this.transparency);
    return rgba;
  }

  this.__init();
}
