/* Dirty Version
function sUmALL(a, b)    {
   var c =a+b
return c;
}
*/

// Clean Version
function sumAll(a, b) {
    var c = a + b;
    return c;
}


/* Dirty Version
function abc(a,b,   c,d, e){
   var x = a+b;
      var y = c+2       var z = d-e
 
return x-y+z; }
abc(3,5,10,3,     7);
*/

// Clean Version
function abc(a, b, c, d, e) {
    var x = a + b;
    var y = c + 2;
    var z = d - e;
    return x - y + z;
}
abc(3, 5, 10, 3, 7);