// var sumOddLengthSubarrays = function (arr) {
//     sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         for (j = i; j < arr.length; j += 2) {
//             for (k = i; k <= j; k++) {
//                 sum += arr[k];
//             }
//         }
//     }
//     return sum;
// };




var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let tempSum = 0;
      for (let j = i; j < arr.length; j++) {
        tempSum += arr[j];
        if ((j - i + 1) % 2 !== 0) {
          sum += tempSum;
        }
      }
    }
    return sum;
    
    };

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
