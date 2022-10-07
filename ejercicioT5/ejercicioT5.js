/**
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una variable que contenga tu altura en centímetros (entero)
 * - Una variable que contenga tu altura en metros (número de coma flotante)
 * - Una variable que contenga tu peso en kilogramos (número de coma flotante)
 * - Una variable que contenga tu altura en metros redondeada hacia arriba
 * - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
 * - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
 */

let alturaCm = 195;

let alturaM = 1.95;

let pesoKg = 104.15;

let alturaRoundM = Math.ceil(alturaM);
console.log(alturaRoundM);

let pesoRoundKg = Math.floor(pesoKg);
console.log(pesoRoundKg);

let isEquale = Number.MAX_VALUE == Number.MAX_VALUE + 1;
console.log(isEquale);
