var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

var theDate = require('../theDate.js');

describe('dateValidator', function() {
	var isInvalid = {unix: null, natural: null};
	var isValid = {
		unix: 999932400,
		natural: 'September 8th, 2001'
	};
	describe('Unix time', function() {
		it('should be a positive or negative number', function() {
			var negativeNumber = theDate(-1),
				positiveNumber = theDate(1);
			expect(negativeNumber.unix).to.be.a('number');
			expect(positiveNumber.unix).to.be.a('number');
			expect(theDate(999932400)).to.deep.equal(isValid);
		});
		it('should not have non-numeric characters', function() {
			var notNumeric1 = theDate('-1fk2');
			notNumeric1.should.deep.equal(isInvalid);
		});
	});
	describe('English lang date string', function() {
		it('should consist of month and day-of-month followed by year', function() {
			var inputValid1 = theDate('September 8, 2001'),
				inputValid2 = theDate('September 8th, 2001'),
				inputValid3 = theDate('sep 08 2001'),
				inputValid4 = theDate('08 september 2001'),
				inputValid5 = theDate('8 Sep 2001'),
				inputValid6 = theDate('08 september, 2001');		
			inputValid1.should.deep.equal(isValid);
			inputValid2.should.deep.equal(isValid);
			inputValid3.should.deep.equal(isValid);
			inputValid4.should.deep.equal(isValid);
			inputValid5.should.deep.equal(isValid);
			inputValid6.should.deep.equal(isValid);
		});
		it('should have the four digit year last', function() {
			var outOfOrder1 = theDate('08 2001 september'),
				outOfOrder2 = theDate('2001 sep 8'),
				incorrectDigits = theDate('september 8, 01');
			outOfOrder1.should.not.equal(isValid);
			outOfOrder1.should.deep.equal(isInvalid);
			outOfOrder2.should.not.equal(isValid);
			outOfOrder2.should.deep.equal(isInvalid);
			incorrectDigits.should.not.equal(isValid);
			incorrectDigits.should.deep.equal(isInvalid);
		});
		it('should have only valid characters', function() {
			var unsupportedChar1 = theDate('dog 8 2001'),
				unsupportedChar2 = theDate('08 cat 2001'),
				unsupportedChar3 =theDate('08 September fish');
			unsupportedChar1 .should.not.equal(isValid);
			unsupportedChar1.should.deep.equal(isInvalid);
			unsupportedChar2 .should.not.equal(isValid);
			unsupportedChar2.should.deep.equal(isInvalid);
			unsupportedChar3 .should.not.equal(isValid);
			unsupportedChar3.should.deep.equal(isInvalid);
		});
		it('should have the four digit year last', function() {
			var notValid1 = theDate('08 2001'),
				notValid2 = theDate('8 september'),
				notValid3 = theDate('sep'),
				notValid4 = theDate('september 2001');
			notValid1.should.not.equal(isValid);
			notValid1.should.deep.equal(isInvalid);
			notValid2.should.not.equal(isValid);
			notValid2.should.deep.equal(isInvalid);
			notValid3.should.not.equal(isValid);
			notValid3.should.deep.equal(isInvalid);
			notValid4.should.not.equal(isValid);
			notValid4.should.deep.equal(isInvalid);
		});
	});
});
