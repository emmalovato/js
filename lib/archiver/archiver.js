(function() {
	'use strict';

	var Archiver = function() {
		var loc = null,
		    archive = [];
		//this.loc = null would pass the test but we want it to carry out actions whenever we get or set it 
		Object.defineProperties(this, {
			'loc': {
				set: function (val) {
					loc = val;
					archive.push({date: new Date(), val: val}); // pushing a new anonymous object into the archive
					return loc;
				},
				get: function() {
					return loc;
				}
			}
		});
	};

	module.exports = Archiver;
})();