let expect = require("chai").expect;
let sum = require("./index").sum3Numbers;

describe("sum3Numbers(arr) - sum array of numbers", function () {
  it("should return 5 for ['1','2','2']", function () {
    expect(sum3Numbers(['1','2','2'])).to.be.equal(5);
  });
});

