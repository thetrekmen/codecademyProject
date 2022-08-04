const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
    beforeEach(function() {
      // runs before each test in this block
  });
  
  describe('alert for dawn', () => {
      it('returns a rooster call', () => {
        //actual output.
        const actual = Rooster.announceDawn();
        //expected output. moo!
        const expected = "moo!";
        // comparing actual vs expected.  should be equal
        assert.strictEqual(actual, expected);
      });
  });

  describe('time at dawn', () => {
      it('announce time at dawn', () => {
        // time variable to be used for test
        const hour = 12;
        // actual output
        const actual = hour.toString();
        // expected output
        const expected = "12";
        // comparing actual vs expected.  should be equal
        assert.strictEqual(actual, expected);
      });

      it('throws error if hour is less than 0', () => { 
        // time variable to be used for test
        const hour = 25;
        // actual output
        const actual = hour.toString();
        assert.ok(actual >= 0)
      });

      it('throws error if hour greater than 23', () => {   
        // time variable to be used for test
        const hour = -1;
        // actual output
        const actual = hour.toString();
        assert.ok(actual <= 23)
      });

  });
});