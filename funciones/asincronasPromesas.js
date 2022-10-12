// Funciones asíncronas/promesas

// Declaración
async function myAsyn() {
  // Obtiene un recurso externo
  // Puede dar un error
}

const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);

  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

miPromesa
  .then(() => console.log("ÉXITO"))
  .catch(() => console.log("ERROR"))
  .finally(() => console.log("Yo me ejecuto siempre"));
