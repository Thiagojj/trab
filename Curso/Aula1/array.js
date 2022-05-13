







function transformar(letras) {
    var novoArray = [];
    var corte = 2;
 if(letras.length % 2 != 0 )  {
    letras = letras.concat('_')
    // console.log(letras)

 } 
 for (var i = 0; i < letras.length; i = i + corte) {
    novoArray.push(letras.slice(i, i + corte));
  }


    console.log(novoArray)
//console.log(letrasTamanho)
    
}

transformar('abcdefgh')

/*const letras = 'abcd'
console.log (letras.slice (0,2));
console.log (letras.slice (2,4));*/


