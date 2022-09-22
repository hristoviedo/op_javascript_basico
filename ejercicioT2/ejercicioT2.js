/**
 * Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
 * - Tu nombre (string)
 * - Tu edad (number)
 * - ¿Eres desarrollador? (boolean)
 * - Tu fecha de nacimiento (Date)
 * - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
 */

const lista = new Array(5);
lista[0] = "Hristo";

lista[1] = 89;

lista[2] = true;

fecha_nac = new Date("1988 4 12");
lista[3] = fecha_nac;

lista[4] = {
  titulo: "Antes de partir",
  autor: "Jessica Warman",
  fecha: new Date(2013,1,14),
  URL: "https://www.amazon.com/-/es/Jessica-Warman/dp/8401352738",
};

console.log(lista);