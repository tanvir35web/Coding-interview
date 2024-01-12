function isPangram(sentence) {
  var alphabet = "";

  for (i = 97; i < 123; i++) {
    letter = String.fromCharCode(i);
    alphabet += letter;
  }

  for (let i = 0; i < alphabet.length; i++) {
    if (!sentence.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
