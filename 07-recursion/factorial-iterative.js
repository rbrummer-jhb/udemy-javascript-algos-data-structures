// 4! (factorial 4) = 4 * 3 * 2 * 1

function fac(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

console.log(fac(4));