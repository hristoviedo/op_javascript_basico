// Objetos

// Objeto con datos personales
const myData = {
    id: 1001,
    name: "Francisco Herrera",
    age: 56,
    sex: "M",
    isDeveloper: true,
    isMarried: false,
    "favorite-books": ["Antes de partir","Angelina","El Vampiro"],
}

myData["favorite-books"].push("Cipotes");
console.log(myData["favorite-books"]);

// Variable que contiene el nombre de una propiedad.
const prop = "age";
console.log(myData[prop]);

// PRECAUCIÓN: Copia la dirección en memoria del objeto original.
const yourData = myData
// Este cambio afecta al objeto original.
yourData.isDeveloper = false;
console.log(yourData);
console.log(myData);

// Crea un objeto independiente al original
otherData = {...myData};

// Ordenar listas de objetos por propiedad
const listaPeliculas = [
    {titulo: "Avatar", anio: "2009"},
    {titulo: "Titanic", anio: "1997"},
    {titulo: "Jurassic Park", anio: "1993"},
    {titulo: "Zootopia", anio: "2016"},
    {titulo: "The Dark Knight", anio: "2008"},
    {titulo: "Shrek 2", anio: "2004"},
];

// Común en el día a día.
listaPeliculas.sort((a,b) => a.anio - b.anio);

console.log(listaPeliculas);

