"use strict";
function padLeft(value, padding) {
    // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    // si padding es una cadena, return padding + value
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    return padding + value; //concatena porque si llego hasta aca padding es un string  
}
console.log('[Ejercicio 4.2]', `
        |${padLeft('hola', 0)}
        |${padLeft('hola', 10)}
        |${padLeft('hola', '  ')}
        |${padLeft('hola', '      ')}
        |${padLeft('hola', ' - - -  ')}
        `);
