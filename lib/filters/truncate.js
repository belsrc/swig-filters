

/**
 * Truncate the input ot the given length.
 *
 * @example
 * // foo = 'This is some text.';
 * {{ foo | truncate(5) }}
 * // => This ...
 *
 * @param  {String} input  The input string.
 * @param  {Number} length The number of characters to truncate to.
 * @param  {String} end    The text that will be appended if the string was truncated.
 * @return {String}
 */
module.exports = function(input, length, end) {
  end = end || '...';

  if(length == null) {
    return input;
  }

  return input.substring(0, length) + ((input.length > length) ? end : '');
};
