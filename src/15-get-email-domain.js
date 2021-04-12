/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  const position = arr.lastIndexOf('@');
  const arr2 = arr.slice(position + 1, arr.length);
  return arr2.join('');

  // throw new Error('Not implemented');
}

module.exports = getEmailDomain;
