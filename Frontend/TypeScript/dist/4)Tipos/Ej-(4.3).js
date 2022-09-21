"use strict";
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const strings = ['A', 'B', 'C', ['D', 'E'], 'F', ['G', 'H', 'I'], 'J'];
const numbersAndStrings = [1, 2, ['Q', 'W', 3], 4, 'E', 5];
function flatten(array) {
    const flattened = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any[] -> number[]
            flattened.push(...element);
        }
        else {
            element; // any -> number[]
            flattened.push(element);
        }
    }
    return flattened;
}
console.log('[Ejercicio 4.3]', flatten(numbers), flatten(strings), flatten(numbersAndStrings));
