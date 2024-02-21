// var numberGame = function (nums) {
//     minArr = [];

//     for (i = 0; i < nums.length; i++) {

//         if (nums[i] < nums[i+1]) {
//             min = nums[i];
//             minArr.push(nums[i]);
//         } return minArr
//     }

// };

// console.log(numberGame([5, 4, 2, 3]));

// let nums = [5, 2, 9, 1, 7];

// function sortDescending(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] < array[j]) {
//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     return array;
// }

// nums = sortDescending(nums);
// console.log(nums);

// let nums = [5,4,2,3];

// function sortDescending(array) {
//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] =temp;
//             }
//         }
//     }
//     return nums;
// }

// nums = sortDescending(nums);
// console.log(nums);

const numberGame = (nums) => {
    nums.sort((a, b) => b - a);
    const arr = [];
    while (nums.length) {
        const alice = nums.pop();
        const bob = nums.pop();

        arr.push(bob, alice);
    }
    return arr;
};

nums = [5, 4, 2, 3];
console.log(numberGame(nums));
