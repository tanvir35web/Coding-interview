function findDuplicate(array) {
  let sortedArr = arr.slice().sort();
  let results = [];

  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      results.push(sortedArr[i]);
    }
  }

  return results;
}

const arr = [1, 3, 4, 6, 2, 4, 1, 1, 1, 1, 3, 10, 0, 5, 9, 9, 0, 99];
console.log(findDuplicate(arr));
