function monthlySavings(arr, num) {

    paymentsArr = [];
    sum = 0 ;
    savings = 0;

    if (Array.isArray(arr) && typeof num === "number") {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] >= 3000) {
                let afterCuttingTex = arr[i] - arr[i] * 0.2;
                paymentsArr.push(afterCuttingTex);
            } else {
                paymentsArr.push(arr[i]);
            }
        }

        for (i = 0; i < paymentsArr.length; i++) {
            sum += paymentsArr[i];
        }
        savings = sum - num;

        if (savings < 0) {
            return "earn more";
        } else {
            return savings;
        }
    } else {
        return "invalid input";
    }
}

console.log(monthlySavings([200,4],100));


