/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const first = String(n);
  const arr = first.split('');
  let min = 9;
  let minIndex;
  let result = 0;
  arr.forEach((element, index) => {
    if (element < min) {
      min = element;
      minIndex = index;
    }
  });
  arr.splice(minIndex, 1);
  result = +arr.join('');
  return result;
  // throw new Error('Not implemented');
}

module.exports = deleteDigit;
