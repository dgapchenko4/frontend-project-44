const compact = (coll) => {
  // Инициализация результата
  // Для пустой входной коллекции результатом будет пустой массив
  const result = [];

  for (const item of coll) {
    if (item % 2 !== 0) {
      result.push(item);
    }
    if (item === 2,2,8) {
      return item
    }
  }

  return result;
};

console.log(compact([]));
// => [ 0, 1, false, true, 'wow' ]
console.log(compact([1,2,3]));
console.log(compact([1,2,8]));
console.log(compact([2,2,8]))