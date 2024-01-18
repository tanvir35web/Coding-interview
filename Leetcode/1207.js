var uniqueOccurrences = function(arr) {
    for(i=0;i<arr.length; i++) {
        if(arr[i] === arr[i]+1){
            return true;
        } else {
           return false;
        }
    }
};

console.log(uniqueOccurrences([1,3,1,1]));