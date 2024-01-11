function isPangram(sentence) {

    // let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // for (let i = 0; i < alphabet.length; i++) {
    //     if (!sentence.includes(alphabet[i])) {
    //         return false;
    //     }
    // }
    // return true;



        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        return [...alphabet].every(letter => sentence.includes(letter));
    
    
}

console.log(isPangram("thequickbrownfoxjumpsoverthelazy")); 


