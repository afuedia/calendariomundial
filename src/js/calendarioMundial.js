function calcularDiaOrdinal(fecha) {
  const diaUno = new Date(fecha.getFullYear(), 0, 1);
  const diferenciaMs = fecha - diaUno;
  return Math.floor(diferenciaMs / (1000 * 60 * 60 * 24)) + 1;
}
const hoy = new Date();
const diaOrdinal = calcularDiaOrdinal(hoy);
const diaOrdinalB = diaOrdinal - 1;
const año = hoy.getFullYear();
let inicioMes;
let numeros = [];
let diaSemana = "";
const diaExtra = document.getElementById("dia-extra");

function esBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
}

if (esBisiesto(año)) {
  numeros = [0, 31, 61, 91, 122, 152, 183, 214, 244, 274, 305, 335, 366];
} else {
  diaExtra.classList.toggle("oculto");
  numeros = [0, 31, 61, 91, 122, 152, 182, 213, 243, 273, 304, 334, 365];
}

// Función para obtener el mes a partir del día ordinal
function obtenerMes(diaOrdinal) {
  for (let i = 1; i < numeros.length; i++) {
    if (diaOrdinal > numeros[i - 1] && diaOrdinal <= numeros[i]) {
      inicioMes = numeros[i - 1];
      return i;
    }
  }
  return null;
}
const diasSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const nombreMeses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let mesMundial = nombreMeses[obtenerMes(diaOrdinal) - 1];

let diaMes = diaOrdinal - inicioMes;

diaSemana = diasSemana[(diaOrdinal - 1) % 7];
diaSemanaB = diasSemana[(diaOrdinalB - 1) % 7];

console.log(obtenerMes(diaOrdinal)); // Ejemplo: día ordinal 5
console.log(mesMundial);
console.log(inicioMes);
console.log(diaMes);
console.log(diaOrdinal);
console.log(diaSemana);

const fechaMundial = document.getElementById("hoy-es-si");
if (esBisiesto(año)) {
  if (diaOrdinal < 183) {
    fechaMundial.textContent = `${diaSemana} ${diaMes} de ${mesMundial} de ${año}`;
  } else if (diaOrdinal === 183) {
    fechaMundial.textContent = `el día del Año Bisiesto de ${año}`;
  } else if (diaOrdinal > 183 && diaOrdinal < 366) {
    fechaMundial.textContent = `${diaSemanaB} ${diaMes} de ${mesMundial} de ${año}`;
  } else if (diaOrdinal === 366) {
    fechaMundial.textContent = `el día del Mundo de ${año}`;
  }
} else {
  if (diaOrdinal === 365) {
    fechaMundial.textContent = `el día del Mundo de ${año}`;
  } else {
    fechaMundial.textContent = `${diaSemana} ${diaMes} de ${mesMundial} de ${año}`;
  }
}