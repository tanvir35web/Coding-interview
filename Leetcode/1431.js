var kidsWithCandies = function (candies, extraCandies) {
    let max = 0;
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    for (i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};

candies = [12, 8, 7, 9, 1];
console.log(kidsWithCandies(candies, 5));
