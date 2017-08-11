function ActionHandler(){

  this.actionDictionary = [];
  this.currentAction;
  this.currentActionIndex = -1;

  this.__init = function(){

    this.createNewActionLine();
  }

  this.pushShape = function(shape){

    if(this.isLastAction() == false)
      this.createNewActionLine();

    this.actionDictionary[this.currentActionIndex].pushShape(shape);
  }

  this.addAction = function(){

    if(this.currentAction.isEmpty()) return;

    this.currentAction = new Action();
    this.currentActionIndex++;
    this.actionDictionary[this.currentActionIndex] = this.currentAction;
  }

  this.nextAction = function(){

    if(this.isLastAction()) return;

    this.currentActionIndex++;
  }

  this.previousAction = function(){

    if(this.isFirstAction()) return;

    if(this.isLastAction()){
      //skip current empty action
      this.currentActionIndex--;
    }

    this.currentActionIndex--;
  }

  this.createNewActionLine = function(){

    this.removeFollowedElement();

    this.currentAction = new Action();
    this.currentActionIndex++;
    this.actionDictionary[this.currentActionIndex] = this.currentAction;
  }

  this.removeFollowedElement = function(){

    var noElementToRemove = (this.actionDictionary.length - 1) - this.currentActionIndex;
    this.actionDictionary.splice(this.currentActionIndex + 1, noElementToRemove);
  }

  this.displayActions = function(){

    for(var i = 0; i < (this.currentActionIndex +1); i++){

      this.actionDictionary[i].displayShapes();
    }
  }

  this.isLastAction = function(){

    return this.currentActionIndex == this.actionDictionary.length -1;
  }

  this.isFirstAction = function(){

    return this.currentActionIndex <= -1;
  }

  this.__init();
}
