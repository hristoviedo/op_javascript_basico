/**
 * Crea un archivo llamado fechas.js que contenga las siguientes líneas
 * - La fecha de hoy
 * - La fecha de tu nacimiento
 * - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
 * - Una variable que contenga el día de tu nacimiento
 * - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
 * - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
 */

const today = new Date();

const bDay = new Date(1999, 11, 25);

const isLate = today.getTime() > bDay.getTime();

const day = bDay.getDate();

const month = bDay.getMonth() + 1;

const year = bDay.getFullYear();
