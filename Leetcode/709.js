// using built In method


// var toLowerCase = function (s) {
//   return (lowerStr = s.toLowerCase());
// };

// console.log(toLowerCase("HELLO"));


// using built In method

// var toLowerCase = function (s) {
//   lowerStr = "";
//   for (let i = 0; i < s.length; i++) {
//     lowerStr += s[i].toLowerCase();
//   }

//   return lowerStr;
// };

// console.log(toLowerCase("HELLO"));




// using ASCII Method

var toLowerCase = function (s) {
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      s = s.replace(s[i], String.fromCharCode(code + 32));
    }
  }
  return s;
};

console.log(toLowerCase("HELLO World"));
