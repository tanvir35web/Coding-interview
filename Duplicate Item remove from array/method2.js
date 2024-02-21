// function removeDuplicate(arr) {
//     let newArr = Array.from(new Set(arr))
//     return newArr
// }

// console.log(removeDuplicate([10, 20, 10, 20, 55, 2, 6, 7, 2, 0, 56, 100]));


function removeDuplicate(arr) {
    let newArr = [... new Set(arr)]
    return newArr
}

console.log(removeDuplicate([10, 20, 10, 20, 55, 2, 6, 7, 2, 0, 56, 100]));