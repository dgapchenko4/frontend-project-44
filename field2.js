#!/usr/bin/env node
import readlineSync from 'readline-sync';
let z = 'да'
console.log('Добро пожаловать в игру "камень","ножницы","бумага"')
while ( z === 'да' ) {
console.log('Выберите вашу фигуру\n1. Камень\n2. Ножницы\n3. Бумага')
var c = readlineSync.question("Ваш выбор: ");
let computer = Math.random()
  if (c == 1) {
    c = "Камень";
  } else if (c == 2) {
    c = "Ножницы";
  } else if (c == 3) {
    c = "Бумага";
  } else {
    c = "Ошибка";
  }
console.log("Вы выбрали: " + c )
if (computer <= 0.33){
    computer = 'Камень';
  }else if (computer <= 0.64){
    computer = "Ножницы";
  }else {
    computer = "Бумага";
  }
console.log("Компьютер выбрал: " + computer)

function playRound(c, computer) {

if (c === computer) {

return 'Ничья';
} 
else if ((c === 'Камень' && computer === 'Ножницы') ||

( c === 'Ножницы' && computer === 'Бумага') ||

(c === 'Бумага' && computer === 'Камень'))

{

return 'Вы победили!';

} else {

return 'Компьютер победил!';

}
}

let d = playRound(c,computer)
console.log('Результат: ' + d)
z = readlineSync.question("Хотите сыграть еще раз? (да/нет): ");
}
console.log('Спасибо за игру. До встречи!');