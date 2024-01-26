
function minValue(arr) {
    let min = arr[0];

    for(i=0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

var arr = [4, 12, 3, 8, 0, -25, 106, 56];
console.log(minValue(arr));
