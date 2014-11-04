function Library(elString){
  var selectedEl = this.getElement(elString);
  this[0] = selectedEl;
}

Library.prototype.getElement = function(elString){
  if ( /#/.test(elString) ) {
    return document.getElementById(elString.substr(1, elString.length));
  } else if ( /\./.test(elString) ){
    return document.getElementsByClassName(elString.substr(1, elString.length));
  } else {
    return document.getElementsByTagName(elString);
  }
};

Library.prototype.remove = function() {
  while(this[0].length !== 0) {
    this[0][0].remove();
  };
};

Library.prototype.css = function(propName, prop){
  for( var i = 0; i < this[0].length; i++ ) {
    this[0][i].style[propName] = prop;
  };
};


var myQuery = function(elString) {
  return new Library(elString);
}