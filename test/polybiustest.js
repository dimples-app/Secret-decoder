const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should return encoded string", () => {
    
    const input = "HiWorld";
    const expected = "32422543241341";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
    });

    it("should return encoded string with space intact and no uppercase", () => {
    
    const input = "Hello World";
    const expected = "3251131343 2543241341";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
    });

    it("should return decoded number string with space and ignor uppercase", () => {
    
    const input = "3251131343 2543241341";
    const expected = "hello world";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
    });

    it("should return decoded number string when i/j", () => {
    
    const input = "32422543241341";
    const expected = "h(i/j)world";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
    });

    it("should return false decode number string is odd", () => {
    
    const input = "325113134";
    const actual = polybius(input, false);
    expect(actual).to.be.false;
    });

    it("should return encoded string when there is ![a-z] and encode is true", () => {
    
    const input = "32511 31343";
    const expected = "32511 31343"
    const actual = polybius(input, true);
    expect(actual).to.equals(expected);
    });

    it("should return false when encode equals false for string", () => {
    
    const input = "Hello";
    const actual = polybius(input, false);
    expect(actual).to.false;
    });
  
});
