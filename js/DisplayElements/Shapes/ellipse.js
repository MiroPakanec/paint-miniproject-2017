function Ellipse(){

  Shape.call(this);

  this.print = function(){

    ellipse(this.x, this.y, this.size, this.size);
  }
}
