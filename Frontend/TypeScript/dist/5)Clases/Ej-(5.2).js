"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Juan', 31);
console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.name}.`);
