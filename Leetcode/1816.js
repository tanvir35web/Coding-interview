var truncateSentence = function (s, k) {

    newStr = s.split(" ");
    return newStr.slice(0, k).join(" ");
};

s = "Hello how are you Contestant";
console.log(truncateSentence(s, 4));
