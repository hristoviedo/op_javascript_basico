/**
 * Crea un nuevo fichero JS que contenga las siguientes líneas
 * - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
 * - Ejecuta la depuración de VSCode para visualizar la ejecución
 */
let listFibo = [1];

function fibonacci(num) {
  if (num <= 0) {
    listFibo = [];
  } else {
    let n1 = 1;
    let n0 = 0;
    let p = 0;
    for (let i = 0; i <= num - 2; i++) {
      listFibo = [...listFibo, n1 + n0];
      p = n1;
      n1 = n1 + n0;
      n0 = p;
    }
  }
  return listFibo;
}

try {
  console.log(fibonacci(6));
} catch (error) {
  console.log(`Error encontrado`);
  console.log(`${error}`);
}
