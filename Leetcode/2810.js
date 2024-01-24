var finalString = function(s) {

    let a = []
    for (i=0; i < s.length; i++) {
      if (s[i] === 'i') {
        a.reverse()
      } else {
        a.push(s[i])
      }
    }
    return a.join("")


};

console.log(finalString("string"));