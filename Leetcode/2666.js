var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return fn(...args);
        }
        
    }
};

fn = (a,b,c) => (a + b + c);
calls = [[1,2,3],[2,3,6]];

calls.forEach(call => {
    console.log(once(fn)(...call)); // Spread the inner array into individual arguments
});
