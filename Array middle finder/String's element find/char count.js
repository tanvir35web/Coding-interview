function CharCount(str) {
    totalStrCount = 0;
    spaceCount = 0;
    letterCount = 0;
    wordCount = 0;
    word = str.split(" ").filter((n) => n !== "").length;
    upperCaseLetterCount = 0;
    lowerCaseLetterCount = 0;

    for(i=0; i < str.length; i++) {
        totalStrCount++;

        if(str[i] === " ") {
            spaceCount++;
        }

        if(str[i] !== " ") {
            letterCount++;
        }

        upperChar = str[i].charCodeAt(0);
        if(upperChar >= 65 && upperChar <= 90) {
            upperCaseLetterCount++;
        }

        lowerChar = str[i].charCodeAt(0);
        if(lowerChar >= 97 && lowerChar <= 122) {
            lowerCaseLetterCount++;
        }
    }
    
    return {
        "Total String Count" : totalStrCount,
        "Total Space Count" : spaceCount,
        "Total Letter Count" : letterCount,
        "Total Word" : word,
        "UpperCase Letter Count" : upperCaseLetterCount,
        "LowerCase Letter Count" : lowerCaseLetterCount,
    }
    
}

console.log(CharCount("   Tanvirul Islam   "));