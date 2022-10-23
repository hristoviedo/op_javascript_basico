class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const nuevaPersona = new Persona("Luis", 45, false);

console.log(nuevaPersona);
console.log(nuevaPersona.nombre);
nuevaPersona.saludo();

let numero = 60;
let nuevaPersona2 = new Persona("Ana", numero, true);
nuevaPersona2.saludo();
