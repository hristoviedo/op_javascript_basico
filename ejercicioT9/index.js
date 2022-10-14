/**
 * Crea un nuevo proyecto de Node
 * + Instala la dependencia Winston
 * + En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
 * + Registra el error en un archivo a través de un try...catch
 */

const logger = require("./logger");

const myFunction = () => {
    const isTrue = Math.floor(Math.random() * 2);
    if (isTrue === 1) {
        console.log("Good job!");
    } else {
        throw new Error("Something was wrong!");
    }
};

try {
    myFunction();
} catch (error) {
    logger.error(`${error}`);
} finally {
    console.log("Finish!");
}
