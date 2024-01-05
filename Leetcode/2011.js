var finalValueAfterOperations = function(operations) {

    let X = 0;

    for(i=0; i < operations.length; i++){
        if(operations[i] === "--X" || operations[i] === "X--") {
            X--;
        } else if(operations[i] === "X++" || operations[i] === "++X") {
            X++;
        }
    }
    return X;
};

console.log(finalValueAfterOperations(["++X","X++","X++"]));
