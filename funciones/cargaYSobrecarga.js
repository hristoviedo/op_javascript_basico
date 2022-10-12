// Carga y sobrecarga de funciones

// -------------------------Carga de funciones-------------------------
function saludar(){
    hola(); // Llamado de una función dentro de otra
    console.log("Hola desde la función saludar()");
};

function hola(){
    console.log("Hola desde la función hola()");
};

saludar();

// -------------------------Sobrecarga de funciones-------------------------

// Función que se llama a sí misma (Recursiva)

function cuentaRegresiva(cant){
    cant--;
    if(cant >= 0){
        console.log(cant);
        cuentaRegresiva(cant)
    }else{
        return;
    }
}

cuentaRegresiva(10);

// Esta función provoca una desbordamiento de memoria por sobrecarga
// function recursuva(){
//     recursiva()
// }