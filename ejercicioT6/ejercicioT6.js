/**
 *Crea un archivo JS que contenga las siguientes líneas
+ Una variable que contenga la lista de la compra (mínimo 5 elementos)
+ Modifica la lista de la compra y añádele "Aceite de Girasol"
+ Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
+ Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
+ Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
+ Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
+ Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
+ Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
+ Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */

let compra = ["leche", "azúcar", "harina", "sal", "soda"];
compra.push("Aceite de Girasol");
compra.pop();

let listaPeliculas = [
  {
    titulo: "Terminator",
    director: "James Cameron",
    fecha: new Date(1984, 9, 26),
  },
  {
    titulo: "Shrek 2",
    director: "Andrew Adamson",
    fecha: new Date(2004, 4, 14),
  },
  {
    titulo: "Captain America: The Winter Soldier",
    director: "Anthony & Joe Russo",
    fecha: new Date(2014, 3, 4),
  },
];

let fechaComparación = new Date(2010, 0, 01);

// Resetea las horas de la fecha (precaución)
fechaComparación.setHours(0, 0, 0, 0);

let listaNuevaP = listaPeliculas.filter((pelicula) => {
  pelicula.fecha.setHours(0, 0, 0, 0);
  return pelicula.fecha.getTime() > fechaComparación.getTime();
});

let listaDirectores = listaPeliculas.map((pelicula) => pelicula.director);

let listaTitulos = listaPeliculas.map((pelicula) => pelicula.titulo);

let listaTituloXDirector = listaTitulos.concat(listaDirectores);

let listaTituloXDirector2 = [...listaTitulos, ...listaDirectores];
