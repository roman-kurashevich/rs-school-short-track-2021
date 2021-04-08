/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// throw new Error('Not implemented');
function getCommonCharacterCount(s1, s2) {
  const ss1 = s1;
  const ss2 = s2;
  const arr1 = ss1.split('');
  const arr2 = ss2.split('');
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      count += 1;
      arr2.splice([arr2.indexOf(arr1[i])], 1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
