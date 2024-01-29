
function minValue(arr) {
    let max = arr[0];

    for(i=0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var arr = [4, 12, 3, 8, 0, -25, 106, 56];
console.log(minValue(arr));
