function mergeStrings(word1, word2) {
  let merged = "";

  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (i < word1.length) {
      merged += word1[i];
    }
    if (i < word2.length) {
      merged += word2[i];
    }
  }
  return merged;
}

let word1 = "abcd";
let word2 = "pq";
let merged = mergeStrings(word1, word2);
console.log(merged);


// let word1 = "abcd";
// let word2 = "pq";
// let merged = word1.concat(word2).split("").join("");
// console.log(merged); 
