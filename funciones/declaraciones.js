// Funciones
// -------------------------Parametro de tipo primitivo-------------------------

let nombre = "Victor";

saludar(nombre);
despedir();

// Parametro por defecto
function saludar(nom = "Usuario") {
  console.log(`Bienvenido, ${nom}`); // Bienvenido, Victor
}

function despedir(nom = "Usuario") {
  console.log(`Hasta luego, ${nom}`); // Hasta luego, Usuario
}

// -------------------------Parametro de tipo compuesto-------------------------
const myData = { nombre: "Juan", apellido: "Castro", edad: 23 };
function mostrarData(usuario) {
  // Precaución: Esto modifica al objeto original
  usuario.nombre = "Pablo";
  console.log(
    `Nombre: ${usuario.nombre}\n
        Apellido: ${usuario.apellido}\n
        Edad: ${usuario.edad}`
  );
}

mostrarData(myData);
console.log(myData);

// ---------------------Parametro usando factor de propagación---------------------

const resultado = suma(9, 8, 7, 6, 5, 24, 6, 7, 3, 5);

function suma(...lista) {
  return lista.reduce((a, b) => a + b);
}
console.log(resultado); // 80
w