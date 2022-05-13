


function transformar(letras) {
    var result = [];
    var letrasTamanho = letras.length;
 if(letrasTamanho % 2 != 0 )  {
    letras = letras.concat('_')
    // console.log(letras)

 } 
for(cont = 0; cont < letrasTamanho; cont++){
    if(cont % 2 == 0 ){
        result.push(letras.substr(cont,2))
    }
    }

    console.log(result)
//console.log(letrasTamanho)
    
}

transformar('abcdefg')
