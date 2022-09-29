// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 1;
let contador = 1;

bucleFactorial: while (true) {
  factorial *= contador;
  if (contador == 10) {
    break bucleFactorial;
  }
  contador++;
}

console.log(factorial);
