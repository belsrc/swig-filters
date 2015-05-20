'use strict'

module.exports = function(swig) {

  var filters = require('./filters');

  for(var key in filters) {
    var fn = filters[key];
    swig.setFilter(key, fn);
  }
};
