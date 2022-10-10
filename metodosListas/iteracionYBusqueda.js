// Recorrer listas
let notes = [9, 10, 8, 7, 8, 7, 9, 6, 7];

// forma antigua
for (let i = 0; i < notes.length; i++) {
  console.log(notes[i]);
}

let total = 0;
let media = 0;

// forma ES6 (eficiente)
notes.forEach((nota) => {
  total += nota;
});

media = total / notes.length;

console.log(media);
console.log(media.toFixed(2));

// Búsqueda de un valor en una lista
let isFind = notes.find((nota) => {
  let status = false;
  if (nota === 8) {
    status = true;
  }
  return status;
});

console.log(isFind);

// ----------------------------

const listObjects = [
    { name: "Raul", age: 20 },
    { name: "Laura", age: 18 },
    { name: "Carmen", age: 29 },
    { name: "Luis", age: 24 },
    { name: "Javier", age: 21 },
];
// ----------- EFICIENTE, pero no tolerante a fallos -----------
const { age } = listObjects.find((object) => object.name === "Carmen");
console.log(age);

// ----------------------- Más eficiente -----------------------
// const user = listObjects.find(object => object.name==="Javier")

// ----------------------- Algo eficiente -----------------------
// const user = listObjects.find(object => {
//     return object.name==="Carmen"
// })

// ----------------------- Poco eficiente -----------------------
// const user = listObjects.find(object => {
//     if(object.name==="Luis"){
//         return true;
//     }
// })
