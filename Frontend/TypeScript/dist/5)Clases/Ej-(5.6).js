"use strict";
class Student {
    name;
    static _school = 'Harry Herpson High School';
    static get school() { return this._school; }
    //+esta implentacion tiene sentido asuminedo que todos los alumnos van a la misma escuela
    //+decidi que _school debe ser privada para que sea facil de leer mediante un get pero no tan facil de sobreescribir,
    //puede ser que alguien intente cambiar al escuela de una alumno y termine cambiando la de TODOS los alumnos.
    //Pareceira que _school es solo una constante usada por la Clase, por lo cual tambien la marque como readonly
    constructor(name) {
        this.name = name;
    }
    ;
    introduction() {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
    }
}
const student = new Student('Morty');
console.log(Student.school);
student.introduction();
