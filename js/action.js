function Action(){

  this.shapes = [];

  this.__init = function(){
  }

  this.pushShape = function(shape){

    this.shapes.push(shape);
  }

  this.isEmpty = function(){

    return this.shapes.length == 0;
  }

  this.displayShapes = function(){

    for(var i = 0; i < this.shapes.length; i++){

      this.shapes[i].display();
    }
  }

  this.__init();
}
