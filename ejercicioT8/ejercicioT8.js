/**
 * Crea un archivo JS que contenga las siguientes líneas
 * + Una función sin parámetros que devuelva siempre "true"
 * + Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
 * - Una función generadora de índices pares automáticos
 */

 function alwaysTrue() {
  return true;
}

const myPromise = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  if (i === 1) {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(() => setTimeout(() => console.log("Hola soy una promesa"), 3000))
  .catch(() => console.log("ERROR"))
  .finally(() => console.log("Promesa terminada"));
