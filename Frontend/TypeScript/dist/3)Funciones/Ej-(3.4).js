"use strict";
function greet(greeting = 'hola') {
    return greeting.toUpperCase();
}
const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
