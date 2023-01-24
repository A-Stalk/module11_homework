export function getPercents(per, num) {
  let result = (num * per) / 100;
  return result;
}

console.log(getPercents(50, 200));
