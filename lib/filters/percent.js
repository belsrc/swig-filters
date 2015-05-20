

/**
 * Converts the given value to percent.
 *
 * @example
 * // foo = 0.98645
 * {{ foo | percent(2) }}
 * // => 98.64%
 *
 * @example
 * // foo = 0.98645
 * {{ foo | percent }}
 * // => 98%
 *
 * @param  {Float}  input    The decimal percent to convert.
 * @param  {Number} decimals The number of decimal places, defaults to 0.
 * @return {String}
 */
module.exports = function(input, decimals) {
  input = input || 0;
  decimals = decimals || 0;

  var whole = input * 100;
  var multiplier = Math.pow(10, decimals);

  return parseFloat(Math.floor(whole * multiplier) / multiplier).toFixed(decimals) + '%';
};
