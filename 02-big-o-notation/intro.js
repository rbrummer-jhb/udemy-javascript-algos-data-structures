function countUpAndDown(n) {
    console.log(`Going up!`);

    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log(`At the bottom!`);

    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log(`Back down. Bye!`);
}