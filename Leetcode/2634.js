var filter = function(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if(fn(arr[i], i)){
        result.push(arr[i]);
    }
  }
  return result;
 
};

console.log(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 }));
























