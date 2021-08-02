/*
Write a function that calculates the sum of all
numbers from 1 up to (and including) some number n.
*/

function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t1 - t2) / 1000} seconds.`);