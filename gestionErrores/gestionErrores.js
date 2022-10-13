const doble = (producto1 = 0, producto2 = 1) => {
  const tipoProducto1 = typeof producto1;
  const tipoProducto2 = typeof producto2;

  if (tipoProducto1 !== "number" || tipoProducto2 !== "number") {
    throw new Error("Ambos valores deben ser de tipo numérico");
  } else if (producto2 === 0) {
    throw new Error("El segundo valor debe ser distinto de cero");
  } else if (producto1 >= Number.MAX_VALUE / producto2) {
    throw new Error("Intenta con números más pequeños");
  } else {
    return producto1 * producto2;
  }
};

const numero1 = 99;
const numero2 = false;

try {
  console.log(doble(numero1, numero2));
} catch (err) {
  console.log("ERROR!");
  console.log(`${err}`);
  // console.log(err.name + ': ' + err.message);
} finally {
  console.log("Programa terminado");
}


/**
 * Errores comunes: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
 * 
 * InternalError
 * SyntaxError
 * TypeError
 * RangeError
 * ReferenceError
 */