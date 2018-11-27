'use strict'
module.exports = {
log:function(arg) {
    console.log(arg);
},
identity : function(x) {
    return x;
},
add : function(nr1, nr2){
    return nr1 + nr2;
},

sub : function(nr1, nr2){
    return nr1 - nr2;
},
mul: function(nr1, nr2){
    return nr1 * nr2;
}

};