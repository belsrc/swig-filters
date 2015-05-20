

/**
 * Converts a slug to a more human friendly form.
 *
 * @example
 * // foo = 'this-is-a-slug';
 * {{ foo | humanable }}
 * // => This is a slug
 *
 * @param  {String} input The input string.
 * @return {String}
 */
module.exports = function(input) {
  var words = input.split(/[-_]+/g);
  var complete = words.join(' ');

  var capital = complete.charAt(0).toUpperCase();

  return capital + complete.slice(1);
};
