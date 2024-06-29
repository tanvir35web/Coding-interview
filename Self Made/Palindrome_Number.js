function checkPalindrome(word) {
    let wordConvertToLowerCase = word.toLowerCase();
	let reversWord = "";

	for (let i = wordConvertToLowerCase.length - 1; i >= 0; i--) {
		reversWord += wordConvertToLowerCase[i];
	}
	return wordConvertToLowerCase === reversWord
		? `${word} is a palindrome`
		: `${word} is not a palindrome`;
}

console.log(checkPalindrome("123216"));