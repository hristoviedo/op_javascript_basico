// Ciclo While / DoWhile

let unidades = 0;
let decenas = 0;

cicloDecenas: while (true){
  cicloUnidades: do  {
    console.log(`El valor es: ${decenas}${unidades}`);
    unidades++;
	if (decenas === 2) {
	  break cicloDecenas;
    }
    if (unidades === 10) {
      unidades = 0;
      break cicloUnidades;
    }
  }while (true);
  decenas++;
}