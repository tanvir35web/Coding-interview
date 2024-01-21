var arrayStringsAreEqual = function (word1, word2) {
  representedWord1 = "";
  for (i = 0; i < word1.length; i++) {
    representedWord1 += word1[i];
  }

  representedWord2 = "";
  for (i = 0; i < word2.length; i++) {
    representedWord2 += word2[i];
  }

  if (representedWord1 === representedWord2) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bcd"]));
