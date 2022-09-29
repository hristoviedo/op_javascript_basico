// if-else

let saldo = 100;
let retiro = 710;

if (saldo >= retiro) {
  console.log("Puedes retirar tu dinero");
} else {
  console.log("Saldo insuficiente");
}

// -------------------------------

let notaIf = 10;

if (notaIf === 10) {
  console.log("Felicidades, tienes una nota perfecta");
} else if (nota <= 9 && nota >= 6) {
  console.log("Felicidades, aprobaste la clase");
} else if (nota <= 5 && nota >= 0) {
  console.log("Lo lamento, reprobaste la clase");
} else {
  console.log("Número incorrecto");
}

// -------------------------------
let notaSwitch = 4;

switch (notaSwitch) {
  case 10:
    console.log("Felicidades, tienes una nota perfecta");
    break;
  case 9:
  case 8:
  case 7:
  case 6:
    console.log("Felicidades, aprobaste la clase");
    break;
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Lo lamento, reprobaste la clase");
    break;
  default:
    console.log("Número incorrecto");
    break;
}
