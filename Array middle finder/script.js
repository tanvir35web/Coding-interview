const arr = [1, 6, 7, 3, 5, 0, 9, 6];

const len = arr.length;
const mid = len / 2;
const midFloor = Math.floor(mid);

console.log("The Given Array is [ " + arr + "]");

if (len % 2 != 0) {
  console.log("Middle element is = " + arr[midFloor]);
} else {
  console.log(
    "Total Number of array's elements is Even Value. So, here is no middle element. Thats why I find 1st Middle Number = " +
      arr[midFloor - 1]
  );
}
