
function reverseWords(sentence) {
    var words = sentence.split(' ');
    console.log(words)
    var reversedSentence = '';
    for (var i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i];
        if (i > 0) {
            reversedSentence += ' ';
        }
    }
    return reversedSentence;
}

// Example usage:
var sentence = "hello how are you ? good ";
var reversedSentence = reverseWords(sentence);
console.log(reversedSentence);