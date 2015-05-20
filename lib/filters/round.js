

/**
 * Rounds the value to the given decimal place.
 *
 * @example
 * // foo = 102432.563453
 * {{ foo | round(2) }}
 * // => 102432.56
 *
 * @param  {Number} input    The input to round.
 * @param  {Number} decimals The number of decimals, defaults to 2.
 * @return {Number}
 */
module.exports = function(input, decimals) {
  if(isNaN(input)) {
    return 0;
  }

  decimals = decimals || 2;

  var multiplier = Math.pow(10, decimals);
  return parseFloat(Math.round(input * multiplier) / multiplier).toFixed(decimals);
};
