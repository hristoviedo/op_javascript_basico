export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function producto(a, b) {
  a * b;
}

export function cociente(a, b) {
  if (b === 0) {
    return "La división entre 0 no está definida";
  } else {
    return a / b;
  }
}


// export default{ suma, resta, producto, cociente };
