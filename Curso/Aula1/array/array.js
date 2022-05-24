








function transformar(letras) {
   let novoArray = [];
   const corte = 2;
   if (letras.length % 2 != 0) {
      letras = letras.concat('_')


   }
   for (var i = 0; i < letras.length; i = i + corte) {
      novoArray.push(letras.slice(i, i + corte));
   }


   console.log(novoArray)



}
transformar('abcdef')




