var compose = function (functions) {
    return function (x) {
        const ans = functions.reduceRight((result, fn) => {
            return fn(result);
        }, x);

        return ans;
    };
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const x = 4;
console.log(compose(functions)(x));
