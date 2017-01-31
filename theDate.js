var moment = require('moment');

var dateInputs = ['X', 
	'MMMM D, YYYY', 'MMMM Do, YYYY',
	'MMMM D YYYY', 'MMMM Do YYYY',
	'MMM D, YYYY', 'MMM Do, YYYY',
	'MMM D YYYY', 'MMM Do YYYY',
	'D MMMM YYYY', 'D MMM YYYY',
	'D MMMM, YYYY', 'D MMM, YYYY'];

var theDate = function(theDate) {
	var checkDate = moment(theDate, dateInputs, true);
	if (checkDate.isValid()) {
		return {
			unix: parseInt(checkDate.format('X'), 10),
			natural: checkDate.format('MMMM Do, YYYY')
		};
	} else {
		return {unix: null, natural: null};
	}
};

module.exports = theDate;