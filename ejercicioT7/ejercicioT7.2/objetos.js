/**
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas
 * + Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
 * + Una variable que obtenga tu edad a partir del objeto anterior
 * + Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amigos
 * + Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

 const misDatos = {
    nombre: "Juan",
    apellido: "Contreras",
    edad: 32,
    altura: 1.72,
    eresDesarrollador: true,
  };
  
  const miEdad = misDatos.edad;
  
  const mariaDatos = {
    nombre: "Maria",
    apellido: "Ramirez",
    edad: 25,
    altura: 1.83,
    eresDesarrollador: true,
  };
  
  const luisDatos = {
    nombre: "Luis",
    apellido: "Perdomo",
    edad: 51,
    altura: 1.73,
    eresDesarrollador: false,
  };
  
  const datos = [misDatos,mariaDatos,luisDatos];
  
  const datosOrdenados = datos.sort((a,b) => b.edad - a.edad)
  
  console.log(datosOrdenados);
  