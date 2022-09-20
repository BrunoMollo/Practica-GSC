function add(x:number, y:number):number {
    return x + y;
}

function sumArray(numbers: Array<number>) {
    return numbers.reduce(add, 0);
}

const someSum = sumArray(['3', '6', '9'].map( (x)=>+x) );

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);
