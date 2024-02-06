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



/* Dirty Version
function abc(a,b,c,   d, e) {
   for(var i=0; i<a; i++){
b += i;
}  return b+d; }
abc(1,2,3,4, 5)
*/

// Clean Version
function abc(a, b, c, d, e) {
    for(var i = 0; i < a; i++) {
        b += i;
    } return b + d;
}
abc(1, 2, 3, 4, 5);




/* Dirty Version
function compare(   a,b  ) {
  if(a<b) return b
       else { return a;
} }
compare(2,   3 );
*/

// Clean Version
function compare(a, b) {
    if(a < b) {
        return b;
    } else {
        return a;
    }
}
compare(2, 3);