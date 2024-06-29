function removeDuplicate(arr) {
    newArr = []
    flag = false;
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < newArr.length; j++) {
        if (arr[i] === newArr[j]) {
          flag = true;
        }
      }
       if(flag === false){
          newArr.push(arr[i]);
        }
        flag = false;
    }
    return newArr;
  }
  
  console.log(removeDuplicate([10, 20, 10, 20, 55, 2, 6, 7, 2, 0, 56, 100]));