import getRandomNum from '../getRandomNum.js';
import startGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => startGame(getQuestionAndAnswer, description);

export default start;
