const persona = {
  nombre: "Juana",
  edad: 78,
};

console.log(persona);

let dobleEdad = (edad) => {
  return (edad *= 2);
};

const edad2 = dobleEdad(persona.edad)

console.log(edad2);
