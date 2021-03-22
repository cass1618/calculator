const sentence = prompt("Write a sentence.");

const len = sentence.length;
let firstChar = sentence.charAt(0);
let lastChar = sentence.charAt(len-1);

function capitalize (sentence){
  
  firstChar = firstChar.toUpperCase();
  lastChar = lastChar.toUpperCase();
  // return firstChar + lastChar
  // return firstChar +sentence.substring(1,len-2)+lastChar
}

const newSentence = capitalize(sentence);
// console.log(newSentence);

function reverse(sentence) {
  return lastChar + firstChar
}

const newLetters = reverse(newSentence)
console.log(sentence + newLetters)

function addMiddletoFront(sentence) {
  let lenDiv2 = Math.floor(len/2);
  return  middleChar = sentence.charAt(lenDiv2) + sentence +newLetters;

}

console.log(addMiddletoFront(sentence));