// Sets o conjuntos: Es un conjunto no ordenado de elementos únicos

const miArray = ["Pastel", true, 3, 4, 5, null, 1, 2, 3, NaN];
// Convierte un objeto iterable en un Set
const miSet = new Set(miArray);

console.log(miArray); // ["Pastel", true, 3, 4, 5, null, 1, 2, 3, NaN]
// Ningún elemento se repite
console.log(miSet); // Set{"Pastel", true, 3, 4, 5, null, 1, 2, NaN}

// .add() -> Agregar un elemento
miSet.add(6);
console.log(miSet);

// .delete() -> Eliminar un elemento
miSet.delete('Pastel');
console.log(miSet);

// .has() -> Determina si un elemento existe en el conjunto
console.log(miSet.has(5)); // true
console.log(miSet.has(0)); // false

// .size -> Es el tamaño del conjunto
console.log(miSet.size); // 9

// Para iterar un set
miSet.forEach(elemento => console.log(elemento))

// Para obtener sus elementos usa el factor de propagación
const arSet = [...miSet];
console.log(arSet);

// .clear() -> Limpiar todo el conjunto
miSet.clear()
console.log(miSet);
