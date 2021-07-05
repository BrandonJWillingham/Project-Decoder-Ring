// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect

describe("Ceasar" ,() => {
    it("should encode message", ()=>{
        const expected = "wklqnixo";
        const actual = caesarModule.caesar("thinkful", 3);
        console.log(actual);
        expect(actual).to.equal(expected);
    });
    
    it("should return false if shift is greater than 25", ()=>{
        const actual = caesarModule.caesar("thinkful", 26);
        console.log(actual);
        expect(actual).to.be.false;
    });
  
    it("should return false if shift is less than -25", ()=>{
        const actual = caesarModule.caesar("thinkful", -26);
        console.log(actual);
        expect(actual).to.be.false;
    });

    it("should encode with negative shift", ()=>{
        const expected = 'qefkhcri'
        const actual = caesarModule.caesar("thinkful", -3);
        console.log(actual);
        expect(actual).to.equal(expected);
    });

    it("should encode with spaces", ()=>{
        const expected = 'bpqa qa i amkzmb umaaiom'
        const actual = caesarModule.caesar("This is a secret message", 8);
        console.log(actual);
        expect(actual).to.equal(expected);
    });

    it("should work with special characters in the mix", ()=>{
        const expected = 'bpqa qa i & amkzmb umaaiom'
        const actual = caesarModule.caesar("This is a & secret message", 8);
        console.log(actual);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift is missing or 0", ()=>{
        const actual = caesarModule.caesar("This is a secret message");
        console.log(actual);
        expect(actual).to.be.false;
    });

    it("should encode with negative shift", ()=>{
        const expected = 'bpqa qa i amkzmb umaaiom'
        const actual = caesarModule.caesar("This is a secret message", 8);
        console.log(actual);
        expect(actual).to.equal(expected);
    });
    
    it("should return decode if encode is false", ()=>{
        const expected = "this is a secret message"
        const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom", 8, false);
        console.log(actual);
        expect(actual).to.equal(expected);
    });
});