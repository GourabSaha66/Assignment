function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    function reverseWord(word) {
        return word.split('').reverse().join('');
    }
    const reversedWords = words.map(reverseWord);
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "Gourab Saha";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log(reversedSentence); 
