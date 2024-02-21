const letters = "asdaassssdsa";
let counterAry = [];

for (i = 97; i < 123; i++) {
  counterAry[i] = 0;
}


for (i = 0; i < letters.length; i++) {
  indx = letters[i].charCodeAt(0);

  value = counterAry[indx];
  values = value + 1;
  counterAry[indx] = values;
}

for (i = 97; i < 123; i++) {
  if (counterAry[i] != 0) {
    let character = String.fromCharCode(i);
    console.log(character + ":" + counterAry[i]);
  }
}
