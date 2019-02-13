const assert = require("assert");
const { sum, difference } = require("../main");

describe("add", function() {
  it("should sum of two numbers", function() {
    assert.equal(sum(1, 2), 3);
  });
  it("should give difference of two numbers", function() {
    assert.deepEqual(difference(5, 4), 1);
  });
});
