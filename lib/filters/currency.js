

/**
 * Converts the input to a currency string.
 *
 * @example
 * // foo = 102432.56
 * {{ foo | currency('$') }}
 * // => $102,432.56
 *
 * @param  {Number} input The input to convert.
 * @param  {String} sign  The currency string, defaults to '$'
 * @return {String}
 */
module.exports = function(input, sign) {
  var digitsRegex= /(\d{3})(?=\d)/g;

  sign = sign || '$';
  input = parseFloat(input);

  if(!isFinite(input) || (!input && input !== 0)) {
    return '';
  }

  var strVal = Math.floor(Math.abs(input)).toString();
  var i = strVal.length % 3;
  var h = i > 0 ?
      (strVal.slice(0, i) + (strVal.length > 3 ? ',' : '')) :
      '';
  var v = Math.abs(parseInt((input * 100) % 100, 10));
  var float = '.' + (v < 10 ? ('0' + v) : v);

  return (input < 0 ? '-' : '') +
         sign + h + strVal.slice(i).replace(digitsRegex, '$1,') + float;
};
