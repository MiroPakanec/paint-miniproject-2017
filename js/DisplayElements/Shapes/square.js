function Square(){

  Shape.call(this);

  this.print = function(){

    var x = this.x - (this.size / 2);
    var y = this.y - (this.size / 2);

    rect(x, y, this.size, this.size);
  }
}
