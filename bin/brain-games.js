#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const getTypeOfSentence = (name) => {
    if (name === name[0].toUpperCase()) {
      return 'Hello,',name;
    }
    return 'Hello,',name;
  };
const name = readlineSync.question("May I have your name? ");
console.log('Hello',getTypeOfSentence(name))
const getNumber = (b) => {
    if (b % 2 === 0) {
      return 'Your answer: yes \nCorrect!';  
    }  
    return 'Your answer: no \nCorrect!'
}      
const b = readlineSync.question("Question: ");
console.log(getNumber(b));
const d = readlineSync.question("Question: ");
console.log(getNumber(d));
const c = readlineSync.question("Question: ");
console.log(getNumber(c));
console.log('Congratulations,',name);
