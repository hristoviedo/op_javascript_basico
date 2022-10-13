/**
 * 1. Terminal -> npm init -y
 * 2. package.json ->
 *      - "main": "index.js"
 *      - "start": "node index.js"
 * 3. Crear index.js
 * 4. index.js -> Hacer los cambios necesarios
 * 5. Terminal -> npm install winston
 * 6. Crear logger/index.js
 * 7. logger/index.js -> Hacer los cambios necesarios
 * 8. Terminal -> npm start
 * 
 * Importante: Estudiar la documentación de Winston
 *  */
const logger = require('./logger');

// console.log("Esto es un mensaje de salida");
logger.info("Esto es un mensaje informativo");
logger.debug("Esto es un mensaje de debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un mensaje de error");
