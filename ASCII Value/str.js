const alphabetStr = "abacccbbdefdahijihgghjjjj";

counterForA = 0;
counterForB = 0;
counterForC = 0;
counterForD = 0;
counterForE = 0;
counterForF = 0;
counterForG = 0;
counterForH = 0;
counterForI = 0;
counterForJ = 0;

for (i = 0; i < alphabetStr.length; i++) {
  if (alphabetStr[i] === "a") {
    counterForA++;
  } else if (alphabetStr[i] === "b") {
    counterForB++;
  } else if (alphabetStr[i] === "c") {
    counterForC++;
  } else if (alphabetStr[i] === "d") {
    counterForD++;
  } else if (alphabetStr[i] === "e") {
    counterForE++;
  } else if (alphabetStr[i] === "f") {
    counterForF++;
  } else if (alphabetStr[i] === "g") {
    counterForG++;
  } else if (alphabetStr[i] === "h") {
    counterForH++;
  } else if (alphabetStr[i] === "i") {
    counterForI++;
  } else if (alphabetStr[i] === "j") {
    counterForJ++;
  }
}

console.log("a: " + counterForA);
console.log("b: " + counterForB);
console.log("c: " + counterForC);
console.log("d: " + counterForD);
console.log("e: " + counterForE);
console.log("f: " + counterForF);
console.log("g: " + counterForG);
console.log("h: " + counterForH);
console.log("i: " + counterForI);
console.log("j: " + counterForJ);
