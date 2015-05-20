

var Swig = function(){};
Swig.prototype.setFilter = function(name, fn) {
  var _this = this;
  _this[name] = fn;
};

var swig = new Swig();
require('./index')(swig);


console.log(swig.currency(102432.56));

console.log(swig.humanable('this-is-a-slug'));

console.log(swig.past_tense('code'));
console.log(swig.past_tense('panic'));
console.log(swig.past_tense('laugh'));

console.log(swig.percent(0.98645));
console.log(swig.percent(0.98645, 2));

console.log(swig.round(102432.563453));

console.log(swig.truncate('This is some text.', 5));

console.log(swig.trim('  This is some text. \n'));
