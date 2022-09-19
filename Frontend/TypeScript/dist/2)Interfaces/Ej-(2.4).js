"use strict";
class Usuario {
    nombre;
    id;
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}
const usuario = new Usuario('Perro', 1);
console.log(usuario.id); // legible
usuario.nombre = 'Harold'; // asignable
// usuario.id = 5; // no asignable
console.log('[Ejercicio 2.4]', `Usuario:`, usuario);
