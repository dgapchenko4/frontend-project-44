[![hexlet-check](https://github.com/dgapchenko4/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/dgapchenko4/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dd78c60ae55d258dbc11/maintainability)](https://codeclimate.com/github/dgapchenko4/frontend-project-44)

# Игры разума (JavaScript) Brain-games-node

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

Игры:
- Определение четного числа.
- Определение простого числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение наибольшего общего делителя.      


## Установка 

``` 
$ sudo npm link    
```

## Игра: "Проверка на четность"

Суть игры в следующем: игрокe показывается случайное число. Ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.

#### Запуск игры 

```
$ brain-even
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/d3I4TPkdFePIbAQgmB2PUCM56.svg)](https://asciinema.org/a/d3I4TPkdFePIbAQgmB2PUCM56) 

## Игра: "Калькулятор"

Суть игры в следующем: игроку показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ. 

#### Запуск игры

```
$ brain-calc  
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/7RHgQ86k65kZWOZHqhlgVbmRh.svg)](https://asciinema.org/a/7RHgQ86k65kZWOZHqhlgVbmRh) 

## Игра: "НОД"

Суть игры в следующем: игроку показывается два случайных числа, например, **25 50**. Игрок должен вычислить и ввести наибольший общий делитель этих чисел. 

#### Запуск игры

```
$ brain-gcd
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/9PQA0DCPW4pGKFEL5vZbM6SAA.svg)](https://asciinema.org/a/9PQA0DCPW4pGKFEL5vZbM6SAA) 

## Игра: "Арифметическая прогрессия"

Суть игры в следующем: игроку показывается ряд чисел, образующий арифметическую прогрессию. Игрок должен отгадать число, которое находится за точками.

#### Запуск игры

```
$ brain-progression
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/E8yz6Bqvz647t96dG9hM8XP4I.svg)](https://asciinema.org/a/E8yz6Bqvz647t96dG9hM8XP4I)

## Игра: "Простое ли число?"

Суть игры в следующем: игроку показывается случайное число. Ему нужно ответить **yes**, если число простое, или **no** — если нет. 

#### Запуск игры

```
$ brain-prime
```  

#### Пример игры  

[![asciicast](https://asciinema.org/a/gaw0lpY1HttlE2lxvusi6sArc.svg)](https://asciinema.org/a/gaw0lpY1HttlE2lxvusi6sArc)      