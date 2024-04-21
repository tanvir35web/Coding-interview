var isPalindrome = function(s) {
    let lowerStr = "";
    for (let i = 0; i < s.length; i++) {
      lowerStr += s[i].toLowerCase();
    }
    return lowerStr === lowerStr.split("").reverse().join("");
    
};

console.log(isPalindrome( "moon"));