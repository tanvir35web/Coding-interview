function removeDuplicate(arr) {
    let uniqueArr = [];
    arr.forEach((e) => {
        if (!uniqueArr.includes(e)) {
            uniqueArr.push(e);
        }
    });
    return uniqueArr;
}

console.log(removeDuplicate([10, 20, 10, 20, 55, 2, 6, 7, 2, 0, 56, 100]));
