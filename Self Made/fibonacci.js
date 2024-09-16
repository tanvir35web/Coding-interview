function generateFibonacciIterative(n) {
    if(n <= 0) return [];
    if(n === 1) return [1];

    let fibonacciSeries = [1, 1];

    for(let i = 2; i < n; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    return fibonacciSeries;
}

console.log(generateFibonacciIterative(10));