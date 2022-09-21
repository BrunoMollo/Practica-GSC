class Furniture {
    constructor(protected manufacturer: string = 'IKEA') { }
}

class Desk extends Furniture {
    kind() {
        console.log('[Ejercicio 5.5]', `Este es un escritorio hecho por ${this.manufacturer}`);
    }
}

class Chair extends Furniture {
    kind() {
        console.log('[Ejercicio 5.5]', `Esta es una silla hecha por ${this.manufacturer}`);
    }
}

const desk = new Desk();
desk.kind();
//desk.manufacturer; // debe devolver error <- deberia ser public para ser accedida aqui

const chair = new Chair('Alguien');
chair.kind();
//chair.manufacturer; // debe devolver error <- deberia ser public para ser accedida aqui

