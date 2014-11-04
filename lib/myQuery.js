function Library(elString){
  var selectedEl = document.getElementsByTagName(elString);
  this[0] = selectedEl;
  return this;
}

Library.prototype.remove = function() {
  while(this[0].length !== 0) {
    this[0][0].remove();
  };
};

var myQuery = function(elString) {
  return new Library(elString);
}