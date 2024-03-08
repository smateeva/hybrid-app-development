let expect = require("chai").expect;
let sum = require("./calculator").createCalculator;

describe('createCalculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = createCalculator();
    });

    it('initial value should be 0', function() {
        expect(calculator.get()).to.equal(0);
    });

    it('should add numbers correctly', function() {
        calculator.add(5);
        calculator.add(10);
        expect(calculator.get()).to.equal(15);
    });

    it('should subtract numbers correctly', function() {
        calculator.subtract(3);
        calculator.subtract(2);
        expect(calculator.get()).to.equal(-5);
    });
});
