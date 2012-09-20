// Pen
// ===
// * GitHub: https://github.com/jharding/pen
// * Copyright (c) 2012 Jake Harding
// * Licensed under the MIT license.

var colors = require('colors');

var verbose = false;

module.exports = {
  verbose: function() { verbose = true; },

  log: function(message) { if (verbose) { console.log(message); } },
  info: function(message) { if (verbose) { console.info(message.blue); } },
  warn: function(message) { if (verbose) { console.warn(message.yellow); } },
  success: function(message) { console.log(message.green); },
  error: function(message) { console.error(message.red); }
};
