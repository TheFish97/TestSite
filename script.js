/*jslint latedef:false*/
document.getElementById("foot01").innerHTML = "<p>&copy;  " + new Date().getFullYear() + "  All rights reserved </p>";
var x = parseInt(prompt("How long is the first array", "1"), 10);
var y = parseInt(prompt("How long is the second array", "1"), 10);
var array = new Array(x)
var array2 = new Array(y)
var a = array.length;
var b = array2.length;
var c = b + a;
document.write("Final array length: " + c);
for(var i = 0; i < array.length; i++){
    array[i] = parseInt(prompt("Fill the first array", "1"), 10);
}
for(var j = 0; j < array2.length; j++){
    array2[j] = parseInt(prompt("Fill the second array ", "1"), 10);
}
document.write("[" + array);
document.write("," + array2 + " ]");
