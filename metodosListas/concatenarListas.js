// Unir dos listas

let mochila1 = ["cuaderno", "lápiz", "borrador"];
let mochila2 = ["zapatos", "raqueta", "pelotas"];

// Unir dos listas .concat()
// let mochilaGrande = mochila1.concat(mochila2);

// Unir dos listas factor de propagación
let mochilaGrande = [...mochila1, ...mochila2];

// ERROR COMUN
// let mochilaGrande = [ mochila1[] , mochila2[] ]

console.log(mochilaGrande);
