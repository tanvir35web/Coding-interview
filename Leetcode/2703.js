var argumentsLength = function(...args) {

    count = 0;
    for (let i = 0; i < args.length; i++) {
       count ++;
    }
    return count;

    // return args.length;
};


console.log(argumentsLength({}, null, "3", 50));