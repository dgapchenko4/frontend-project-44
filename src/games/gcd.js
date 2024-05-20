import getRandomNum from '../getRandomNum.js';
import startGame from '../index.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const answer = toString(getGcd(num1, num2));
  return [question, answer];
};

const start = () => startGame(getQuestionAndAnswer, description);

export default start;
