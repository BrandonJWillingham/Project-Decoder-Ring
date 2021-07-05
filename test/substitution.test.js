// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("Substitution", () => {
    
    it("Should cipher", () => {
        const expected = 'jrufscpw';
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        console.log(actual)
        expect(actual).to.equal(expected);
    });

    it("Should decipher", () => {
        const expected = 'thinkful';
        const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        console.log(actual)
        expect(actual).to.equal(expected);
    });

    it("Should decipher with spaces", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        console.log(actual)
        expect(actual).to.equal(expected);
    });

    it("Should cipher with spaces", () => {
        const expected = 'you are an excellent spy';
        const actual = substitutionModule.substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
        console.log(actual)
        expect(actual).to.equal(expected);
    });

    it("Should decipher with special characters", () => {
        const expected = 'message';
        const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        console.log(actual)
        expect(actual).to.equal(expected);
    });

    it("Should encrypt with special characters", () => {
        const expected = "y&ii$r&";
        const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        console.log(actual)
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet doesnt work with code", () => {
        const actual = substitutionModule.substitution("thinkful", "short");
        console.log(actual)
        expect(actual).to.be.false;
    });

    it("Should return false if alphabet is too short", () => {
        const actual = substitutionModule.substitution("thinkful", "short");
        console.log(actual)
        expect(actual).to.be.false;
    });
});