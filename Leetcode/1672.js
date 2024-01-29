var maximumWealth = function (accounts) {
  const sumArr = [];
  let max = 0;

  for (i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    sumArr.push(sum);

    if (sumArr[i] > max) {
      max = sumArr[i];
    }
  }

  return max;
};

const accounts = [[2,8,7],[7,1,3],[1,9,5]];
console.log(maximumWealth(accounts));
