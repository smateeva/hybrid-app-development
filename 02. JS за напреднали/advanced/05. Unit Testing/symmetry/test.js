let expect = require("chai").expect;
let sum = require("./symmetry").isSymmetric;

describe('isSymmetric', function() {
    it('should return true for symmetric array', function() {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it('should return true for empty array', function() {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return true for array with one element', function() {
        expect(isSymmetric([1])).to.be.true;
    });

    it('should return false for non-symmetric array', function() {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    });

    it('should return false for non-array input', function() {
        expect(isSymmetric('hello')).to.be.false;
    });
});
