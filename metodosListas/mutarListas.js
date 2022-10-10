// Métodos para trabajar en listas
let pares = [];

for (let i = 1; i <= 10; i++) {
    pares[i-1] = i*2;
}

// Agregar elementos al final
pares.push(22,24,26,29)

// Agregar elementos al principio
pares.unshift(1,0)

// Eliminar un elemento al final
pares.pop();

// Eliminar un elemento al principio
pares.shift();

// Eliminar elementos en cualquier posición
pares.splice(3,10);

// Agregar elementos en cualquier posición
pares.splice(2,0,"hola",false,null,NaN);

// Modificar un elemento en cualquier posición.
pares.splice(6,1,Infinity);

pares.forEach(element => {
    console.log(element);
});