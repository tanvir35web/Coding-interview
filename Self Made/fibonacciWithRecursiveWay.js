function generateFibonacciRecursive(n) {
    const memo = {};

    function fib(num) {
        if (num in memo) return memo[num];
        if (num <= 1) return 1;

        memo[num] = fib(num - 1) + fib(num - 2);
        return memo[num];
    }

    const fibonacciSeries = [];

    for (let i = 0; i < n; i++) {
        fibonacciSeries.push(fib(i));
    }
    return fibonacciSeries;
}

// Example usage
console.log(generateFibonacciRecursive(10)); // Output: [1, 1, 2, 3, 5, 8, 13, 21]
