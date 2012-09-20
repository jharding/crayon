var crayon = require('../index');

var count;
var _log = console.log;
var _info = console.info;
var _warn = console.warn;
var _error = console.error;

module.exports['crayon'] = {
  setUp: function(callback) {
    count = 0;
    console.log =
    console.info =
    console.warn =
    console.error = function() { count += 1; };

    callback();
  },

  tearDown: function(callback) {
    console.log = _log;
    console.info = _info;
    console.warn = _warn;
    console.error = _error;

    callback();
  },

  'test with verbose set to true': function(test) {
    crayon.verbose = true;

    crayon.log('the jetsons');
    crayon.info('the jetsons');
    crayon.warn('the jetsons');
    crayon.success('the jetsons');
    crayon.error('the jetsons');

    test.expect(1);
    test.equals(count, 5);
    test.done();
  },

  'test with verbose set to false': function(test) {
    crayon.verbose = false;

    crayon.log('the jetsons');
    crayon.info('the jetsons');
    crayon.warn('the jetsons');
    crayon.success('the jetsons');
    crayon.error('the jetsons');

    test.expect(1);
    test.equals(count, 2);
    test.done();
  }
};
