function MouseHandler(){

    this.RMB_pressed = false;
    this.mouseOverCanvas = false;

    this.LMB_pressed_on_canvas = function(){

      return this.LMB_pressed && this.mouseOverCanvas;
    }
}
