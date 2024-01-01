//find number of "sd" repeated on string

const str = "asdsaldasd";

let counter = 0;

for (i = 0; i < str.length; i++) {
  if (str[i] === "s") {
    if(str[i+1] === "d"){
        counter ++;
    }
  }
}
console.log(str);
console.log(counter);


