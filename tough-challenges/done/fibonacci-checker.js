/*
The Fibonacci sequence is the series of numbers 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
where the next number is found by adding up the two previous numbers.
The following program implements a function called 'isFibo()' that solves for the
Fibonacci problem, but the implementation is incorrect and fails with a stack
overflow error.
*/

// function isFibo(n) {
//     if (n <= 2) return 1;
//     return isFibo(n-1) + isFibo(n-2);
// }

// console.log(`Fibonacci number is ${isFibo(4)}`);

function fib(n) {
    let n1 = 0;
    let n2 = 1;
    let next;
    
    if (n <= 2) return true;

    for (let i = 1; i <= n; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
        if (n2 === n) return true;
    }
    return false;
}

console.log(fib(13));