function Library(elString){
    var selectedEl = this.getElement(elString);
    // we use [0] because we want the selected items to be somewhat
    // difficult to access so that users of our library do not use it against our intentions
    // 0 has no special meaning; it is just a property
    // we could have used anything like selectEl or selectedElephant
    this[0] = selectedEl;
}

/* where your prototypical methods go... */

Library.prototype.getElement = function(elString) {
    if (elString[0] === ".") {
        elString = elString.slice(1, elString.length);
        return document.getElementsByClassName(elString);
    } else if (elString[0] === "#") {
        elString = elString.slice(1, elString.length);
        return document.getElementById(elString);
    } else {
        return document.getElementsByTagName(elString);
    }
};

Library.prototype.remove = function() {

    while(this[0].length > 0){
        var elem = this[0][0];
        if (elem) {
            var parent = elem.parentElement;
            parent.removeChild(elem);
        }
    }
};

Library.prototype.css = function(attribute, style) {
    var l = this[0].length
    for(var i=0; i < l; i++) {
        eval("this[0][i].style." + attribute + "=\'" + style + "\'" );
    }
};

Library.prototype.append = function(elem){
    var l = this[0].length
    for(var i=0; i < l; i++) {
        this[0][i].lastChild.outerHTML = elem;
    }
};


var myQuery = function(elString) {
    return new Library(elString);
}


// how to use this code (don't include it in your file.)
//var myQuerySelectedElements = myQuery('div');
//myQuerySelectedElements.remove(); // removes selected divs