"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(meters) {
        console.log(`${this.name} se movio ${meters}m.`);
    }
}
class Snake extends Animal {
    move() {
        console.log('Deslizandose...');
        // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado de 5 metros
        super.move(5);
    }
}
class Pony extends Animal {
    move(meters) {
        console.log('Galopando...');
        // debe invocar al metodo `move` del padre con un galope predeterminado de 60 metros
        super.move(60);
    }
}
// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.
//const andrew = new Animal("Andrew el Animal"); <- da error porque es abstracta
//andrew.move(5);  <- da error porque no se puede instainciar andrew
const sammy = new Snake("Sammy la serpiente");
sammy.move();
//console.log(sammy.name); // debe devolver error <- devuleve error porque nome es privada
const pokey = new Pony("Pokey el pony");
pokey.move(34);
//console.log(pokey.name); // Should devolver error <- devuleve error porque nome es privada
