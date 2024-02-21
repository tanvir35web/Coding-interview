let array = [1, 2, 3, 4, 2, 5, 6, 1];
let uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);
