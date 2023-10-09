const {
    findMean,
    findMedian,
    findMode,
  } = require("./helpers");
  
  describe("Helper Functions", function () {
    describe("#findMedian", function () {
      it("should find the median of an even set", function () {
        const result = findMedian([1, -1, 4, 2]);
        expect(result).toEqual(1.5);
      });
  
      it("should find the median of an odd set", function () {
        const result = findMedian([1, -1, 4]);
        expect(result).toEqual(1);
      });
    });
  
    describe("#findMean", function () {
      it("should find the mean of an empty array", function () {
        const result = findMean([]);
        expect(result).toEqual(0);
      });
  
      it("should find the mean of an array of numbers", function () {
        const result = findMean([1, -1, 4, 2]);
        expect(result).toEqual(1.5);
      });
    });
  
    describe("#findMode", function () {
      it("should find the mode", function () {
        const result = findMode([1, 1, 1, 2, 2, 3]);
        expect(result).toEqual(1);
      });
  
      it("should return null for an empty array", function () {
        const result = findMode([]);
        expect(result).toBeNull();
      });
  
      it("should return the first mode when multiple modes exist", function () {
        const result = findMode([1, 1, 2, 2, 3, 3]);
        expect(result).toEqual(1);
      });
    });
  });
  