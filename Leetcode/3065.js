var minOperations = function(nums, k) {

  let count = 0;
  for(let i = 0; i<nums.length; i++){
    if(nums[i]<k){
        count++;
    }
  }  
  return count
};

const nums = [2,11,10,1,3];
const k = 10;

console.log(minOperations(nums, k));