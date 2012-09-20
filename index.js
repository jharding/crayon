// Crayon
// ======
// * GitHub: https://github.com/jharding/crayon
// * Copyright (c) 2012 Jake Harding
// * Licensed under the MIT license.

var f = require('util').format;
var colors = require('colors');

colors.setTheme({
  info: 'blue',
  warn: 'yellow',
  success: 'green',
  error: 'red'
});

var verbose = false;

module.exports = {
  get verbose() { return verbose; },
  set verbose(val) { verbose = !!val; },

  log: function() {
    verbose && console.log(f.apply(null, arguments));
  },

  info: function(format) {
    verbose && console.info(f.apply(null, arguments).info);
  },

  warn: function(format) {
    verbose && console.warn(f.apply(null, arguments).warn);
  },

  success: function(format) {
    console.log(f.apply(null, arguments).success);
  },

  error: function(format) {
    console.error(f.apply(null, arguments).error);
  }
};
