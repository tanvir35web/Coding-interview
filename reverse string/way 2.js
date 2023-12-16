const input = "tanvir";
let output = "";
for (let i = input.length - 1; i >= 0; i--) {
  for (let j = i; j >= 0; j--) {
    output += input[j];
  }
  break;
}
console.log(output);
