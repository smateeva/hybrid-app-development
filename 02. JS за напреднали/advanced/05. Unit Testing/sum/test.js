let expect = require("chai").expect;
let sum = require("./sum").sum;

describe('sum', function() {
    it('should return the sum of an array of numbers', function() {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    });

    it('should return 0 for an empty array', function() {
        expect(sum([])).to.equal(0);
    });

    it('should handle negative numbers correctly', function() {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });

    it('should handle arrays with one element', function() {
        expect(sum([5])).to.equal(5);
    });

    it('should return NaN for non-numeric elements', function() {
        expect(sum(['a', 'b', 'c'])).to.be.NaN;
    });

    it('should return NaN for an array with non-numeric elements', function() {
        expect(sum([1, 2, 'a', 3])).to.be.NaN;
    });
});