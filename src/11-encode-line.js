/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  const arr = str.split('');
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        res.push(`${count}${arr[i]}`);
      } else {
        res.push(arr[i]);
      }
      count = 1;
    }
  }
  return res.join('');
  // throw new Error('Not implemented');
}

module.exports = encodeLine;
