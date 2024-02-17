const arr = [20, 10, 505, 0, -5, 50, 3, 2]

function minFind() {
    let min = arr[0];
    for(let item of arr){
        if(item < min){
            min = item;
        }
    }
    return min;
}

console.log(minFind(arr));