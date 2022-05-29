/*let varA = 'A'; //b
let varB = 'B'; //c 
let varC = 'C'; //a

const varATemp = varA;
 varA = varB;
 varB = varC;
 varC = varATemp;

console.log(varA , varB , varC)*/

//solução mais rapida
var a = "A";
var b = "B";
var c = "C";
console.log('Entrada: ', a, b, c);

[a , b, c] = [b, c, a]

console.log('saida: ', a, b, c);