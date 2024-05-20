import getRandomNum from '../getRandomNum.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => startGame(getQuestionAndAnswer, description);

export default start;
