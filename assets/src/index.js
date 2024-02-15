'use strict'
function doesItShowPalindrome(phrase){
const phraseWithoutGraps=phrase.toLowerCase().replaceAll(' ','');
const reversePharase=phraseWithoutGraps.split('').reverse().join('');
return phraseWithoutGraps===reversePharase;
}