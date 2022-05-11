//filtrando nome por tamanho
const pessoas = [{ nome: 'Thiago', idadde: 62 },
{ nome: 'maria', idadde: 12 },
{ nome: 'José', idadde: 34 },
{ nome: 'Joao', idadde: 55 },
{ nome: 'fatima', idadde: 23 },
{ nome: 'josefina', idadde: 28 },
{ nome: 'leuriscreia', idadde: 18 },

];
const pessoasComNomeGrande = pessoas.filter(function(obj){
    return obj.nome.length >= 5;
  
}  );
console.log(pessoasComNomeGrande);















//filrando numeros
/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor){

    if (valor <= 10){
        return true;
    }
    {return false;}
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados)*/
