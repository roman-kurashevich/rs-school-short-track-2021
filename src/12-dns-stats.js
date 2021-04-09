/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const base = domains.map((item) => item.split('.').reverse());
  const obj = {};
  for (let i = 0; i < base.length; i++) {
    let key = '';
    for (let j = 0; j < base[i].length; j++) {
      key += `.${base[i][j]}`;
      obj[key] = (obj[key] + 1) || 1;
    }
  }
  return obj;
  // throw new Error('Not implemented');
}

module.exports = getDNSStats;
