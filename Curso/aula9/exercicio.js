/*let varA = 'A'; //b
let varB = 'B'; //c 
let varC = 'C'; //a

const varATemp = varA;
 varA = varB;
 varB = varC;
 varC = varATemp;

console.log(varA , varB , varC)*/


var a = "A";
var b = "B";
var c = "C";
console.log('Entrada: ', a, b, c);

a += "|" + b;

b = a.split('|')[0];
a = a.split('|')[1];

b+= "|" + c;

c = b.split('|')[0];
b = b.split('|')[1];

console.log('Saida: ', a, b, c);