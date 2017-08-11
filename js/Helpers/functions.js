function deepCopy(obj){

  return jQuery.extend(true, {}, obj)
}

function rgbToArray(color){

  return color.replace('rgb(', '').replace(')','' ).split(',').map(Number);
}

function arrayToRGB(color){

  var comma = ", ";
  return "rgb("+ color[0] + comma + color[1] + comma + color[2] + ")";
}

function removeIdHash(id){

  return id.replace('#', '');
}

function addIdHash(id){

  return "#" + id;
}
