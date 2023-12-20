#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const getTypeOfSentence = (name) => {
    if (name === name[0].toUpperCase()) {
      return 'Hello',name;
    }
  
    return name;
  };
const name = readlineSync.question("May I have your name? ");
console.log(getTypeOfSentence(name))
const getNumber = (b) => {
    if (b % 2 === 0) {
      return 'Your answer: yes \nCorrect!';  
    } else if (b === 'a') {
      return 'incorect. Comand not found'
    } else if (b === 'A') {
      return 'incorect. Comand not found'
    } else if (b === 'A'*1000) {
      return 'incorect. Comand not found'
    }  
    return 'Your answer: no \nCorrect!'; 
}
const b = readlineSync.question("Question: ");
console.log(getNumber(b));
const c = readlineSync.question("Question: ");
console.log(getNumber(c));
const d = readlineSync.question("Question: ");
console.log(getNumber(d));
console.log('Congratulations, Sam!')


