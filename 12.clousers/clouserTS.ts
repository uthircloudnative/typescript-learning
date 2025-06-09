/**
 * An inner function has access to the variable from its enclosing outer function even after outer function has finses its execution.
 * 
 * Clouser remembers the environment in which it was created.
 */

function makeCounter() {

    let count = 0;

    return function() {
        count++;
        return count;
    }
}

let counter1 = makeCounter();

console.log(counter1(), `Conter1`); // Output: 1
console.log(counter1(), `Conter1`); // Output: 2
console.log(counter1(), `Conter1`); // Output: 3

let counter2 = makeCounter();
console.log(counter2(), `Conter2`); // Output: 1
console.log(counter2(), `Conter2`); // Output: 2
console.log(counter2(), `Conter2`); // Output: 3
console.log(counter2(), `Conter2`); // Output: 4

console.log(counter1(), `Conter1`); // Output: 4