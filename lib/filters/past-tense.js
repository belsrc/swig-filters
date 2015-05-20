

/**
 * Converts the given value to its past tense.
 * Simple filter, does not support irregular verbs such as eat-ate, fly-flew, etc.
 *
 * @example
 * // foo = 'code'
 * {{ foo | past_tense }}
 * // => coded
 *
 * @example
 * // foo = 'panic'
 * {{ foo | past_tense }}
 * // => panicked
 *
 * @example
 * // foo = 'laugh'
 * {{ foo | past_tense }}
 * // => laughed
 *
 * @param  {String}  input    The input string.
 * @return {String}
 */
module.exports = function(input) {
  // Slightly follows http://www.oxforddictionaries.com/us/words/verb-tenses-adding-ed-and-ing
  // Not all the 'rules' have been added as I'm lazy and the English language is dumb when
  // it comes to all the different rules.

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if(!input) {
    return '';
  }

  var last = input.toLowerCase().substr(input.length - 1);
  var secondLast = input.toLowerCase().substr(input.length - 2, 1);
  var thirdLast = input.toLowerCase().substr(input.length - 3, 1);
  var lastTwo = input.toLowerCase().substr(input.length - 2);
  var lastThree = input.toLowerCase().substr(input.length - 3);
  var inArray = function(ar, value) {
      return ar.indexOf(value) != -1;
  };

  // participle or already past tense, don't want
  if(lastThree === 'ing' || lastTwo === 'ed') {
    return input;
  }

  // Ends in 'e', simply add the 'd'
  if(last === 'e') {
    return input + 'd';
  }

  // Ends in 'c', add the 'ked'
  if(last === 'c') {
    return input + 'ked';
  }

  // Ends with consonant, vowel, consonant. I'm simple, double consonant and add 'ed'
  if(!inArray(vowels, thirdLast) && inArray(vowels, secondLast) && !inArray(vowels, last)) {
      return input + last + 'ed';
  }

  return input + 'ed';
};
