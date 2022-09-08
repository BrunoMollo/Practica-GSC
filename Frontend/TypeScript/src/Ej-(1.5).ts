const secuencia:Array<number>= Array.from(Array(10).keys());
const animales:Array<string> = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros:Array<number|string> = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos:Array<Array<number|string>> = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);


const secuencia2:number[]= Array.from(Array(10).keys());
const animales2:string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros2:(number|string)[] = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos2:(number|string)[][] = [secuencia2, animales2, cadenasYNumeros2];

console.log('Ejercicio 1.5', todosMisArreglos);