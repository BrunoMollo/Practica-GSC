"use strict";
class Persona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const juan = new Persona('Juan', 31);
console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
