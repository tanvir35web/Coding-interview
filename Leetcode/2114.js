function maxWords(sentences) {
    
    let maxCount = 0;
    
    for ( i = 0; i < sentences.length; i++) { 
      let words = sentences[i].split(" ").length;

      if (words > maxCount) {
        maxCount = words;
        sentences[i]
      }
    }
    return maxCount;

  }


console.log(maxWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])); 