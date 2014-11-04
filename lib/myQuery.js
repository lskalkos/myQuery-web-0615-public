function Library(elString){
  var selectedEl = this.getElement(elString);
  this[0] = selectedEl;
  return this;
}

Library.prototype.getElement = function(elString){
  if ( /#/.test(elString) ) {
    return document.getElementById(elString.substr(1, elString.length));
  } else {
    return document.getElementsByTagName(elString);
  }
};

Library.prototype.remove = function() {
  while(this[0].length !== 0) {
    this[0][0].remove();
  };
};

var myQuery = function(elString) {
  return new Library(elString);
}