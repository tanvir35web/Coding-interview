//find number of "sd" repeated on string

const str = "asdsaldasd";

let counterForS = 0;
let counterForD = 0;

for (i = 0; i < str.length; i++) {
  if (str[i] === "s") {
    counterForS++;
  }
  if (str[i] === "d") {
    counterForD++;
  }
}
console.log(str);
console.log(counterForS);
console.log(counterForD);


