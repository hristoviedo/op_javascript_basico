function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function producto(a, b) {
  a * b;
}

function cociente(a, b) {
  if (b === 0) {
    return "La división entre 0 no está definida";
  } else {
    return a / b;
  }
}

module.exports = {
  suma,
  resta
}