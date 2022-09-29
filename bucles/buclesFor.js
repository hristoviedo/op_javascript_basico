// Ciclo For
let numeros = new Array(10);

for (let i = 1; i <= 10; i++) {
  numeros[i - 1] = i ** 2;
}

// Recorriendo la lista
for (let j = 0; j < numeros.length; j++) {
  console.log(numeros[j]);
}

// Ciclo for..of
for (let elemento of numeros) {
  console.log(elemento);
}

// Ciclo forEach
numeros.forEach((elemento) => {
  console.log(elemento);
});

//for..in
persona = {
  nombre: "Juan",
  apellido: "Ríos",
  edad: 29,
};

for (propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}