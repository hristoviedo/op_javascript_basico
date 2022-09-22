// Listas, arrays o arreglos

let diasSemana = [];
diasSemana[0] = 'Domingo';
diasSemana[1] = 'Lunes';
diasSemana[2] = 'Martes';
diasSemana[3] = 'Miércoles';
diasSemana[4] = 'Jueves';
diasSemana[5] = 'Viernes';
diasSemana[6] = 'Sábado';

const estacionesAnio = new Array('Primavera','Verano','Otoño','Invierno');

let mascotas = new Array(2);
mascotas[0] = "Leo";
mascotas[1] = "Newton";

const listaUniversal = [diasSemana,estacionesAnio,mascotas];

console.log(diasSemana);
console.log(estacionesAnio);
console.log(mascotas);
console.log(listaUniversal);


// Objetos
const estudiante = {
    nombre: 'Gabriel',
    apellido: 'Cruz',
    edad: 21,
    sexo: 'masculino',
    jornada: 'nocturna',
    totalClases: 4,
    becado: false,
}

console.log('estudiante :>> ', estudiante);
//console.log(estudiante);

// Fechas
const fecha_ahora = new Date(); // Fecha en que se creó el objeto
console.log(fecha_ahora);

const fecha_milis = new Date(0); // Fecha usando milisegundos a partir de 31/12/1969 
console.log(fecha_milis);

const fecha_cadena = new Date("1999 june 28 09:12:56"); // Fecha usando cadena de texto
console.log(fecha_cadena);

const fecha_valores = new Date(1998, 1, 22, 09,12,56); // Fecha usando valores año/mes/dia
console.log(fecha_valores);

let dia = fecha_ahora.getDate();
let mes = fecha_ahora.getMonth()+1;
let anio = fecha_ahora.getFullYear();

console.log(dia);

console.log(mes);

console.log(anio);

console.log("Hoy es ",dia," de ", mes," del año ", anio);