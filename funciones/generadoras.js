// Funciones generadoras

// El * indica que es una función generadora
function* generarId() {
    let id = 0;
    while (true) {
      id++;
      if (id >= 5) {
        return id; // Último retorno
      }
      yield id; // Esperando hasta que se vuelva a llamar
    }
  }
  
  const gen = generarId();
  
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(gen.next()); // { value: 4, done: false}
  console.log(gen.next()); // { value: 5, done: true}