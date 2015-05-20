

/**
 * Trims leading and trailing whitespace from input strings.
 *
 * @example
 *
 * // foo = '  This is some text. \n';
 * {{ foo | trim }}
 * // => This is some text.
 *
 * @param  {String} input The input string.
 * @return {String}
 */
module.exports = function(input) {
  return input.trim();
};
