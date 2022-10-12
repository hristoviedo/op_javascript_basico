/**
 * Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
 * - Un nuevo Set con los nombres de tu familia
 * - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
 * - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
 */

const family = new Array(
  "Andrés Contreras",
  "Ana Valencia",
  "Carla Contreras",
  "Juan Contreras"
);
const familySet = new Set(family);

familySet.add("Juan Contreras");

familySet.add("JavaScript");
