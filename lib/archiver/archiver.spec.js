//spec means that it's a test file
// generally associated with behavior driven development 
(function() {
  'use strict';

  var Archiver = require('./archiver'),
      expect   = require('chai').expect;

  // archiver is gonna have an object, we're going to enter pieces of information 
  // it automatically archives what we enter
  describe('Archiver', function() { // capital A --> constructor function
    var arc;

    beforeEach(function () { // do this before every test
      arc = new Archiver(); // new is good for creating an instance of something, working with its properties
    });

    describe('the lines of code (loc) property', function() {
    	it('should have a loc property that starts out null', function() { // these are the messages printed when tests are run
    		expect(arc.loc).to.be.null(); // expect it to be null
    	});
    });
  });
})();
// it's called immediately