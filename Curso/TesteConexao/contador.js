// Função para ordenar números em ordem crescente
function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b);
  }
  
  // Exemplo de uso
  let numeros = [10, 3, 5, 8, 2, 7, 1, 6, 4, 9];
  
  // Ordena os números
  let numerosOrdenados = ordenarNumeros(numeros);
  
  // Exibe os números ordenados
  console.log("Números ordenados: ", numerosOrdenados);
  