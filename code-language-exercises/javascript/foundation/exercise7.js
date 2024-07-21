function isPalindrome(word) {
    for(let i = 0; i < word.length / 2; i++) {
        if(word[i] === word[word.length- i - 1]) return true;
    } 
        return false;
}

let word = prompt("Enter a word: ");
if(isPalindrome(word)) {
    document.write(`Yes the word "${word}" is a palindrome.`);
} else {
    document.write(`No, the word "${word}" is not a palindrome.`);
}