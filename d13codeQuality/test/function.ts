//suppose have many functions to test and want tests in separate file
import { assert, expect } from "chai"
/* import from functions.ts module-- note the .js extension (even though actual file is .ts */
import {checkPrime, ssReverse, isVowel, computeCompoundInterest, calculateDowmPayment, sumDigits, multDigits, convertTempFahrenheit, calculateDistance} from "../src/app.js";


// Mocha test for checking prime number
describe("checkPrime returns true if argument is prime ", function () {
it("37 is prime", function () {
assert.strictEqual(checkPrime(37), true);
});
it(" 77 is not prime", function () {
assert.strictEqual(checkPrime(77), false);
});
});


//Mocha test for reversing array
describe("ssReverse", function () {
 it("[4,3,2,1]", function () {//test array equality
 assert.deepStrictEqual(ssReverse([1, 2, 3, 4 ]), [4,3,2,1] );
 });
});

// Mocha test for checking whether given letter is vowel or not
describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
     assert.equal(isVowel("5"), false);

    });
   });

   // Mocha test for computing compund interest
   describe("computeCompoundInterest", function() {
    it("computeCompoundInterest", function(){
        assert.strictEqual(computeCompoundInterest(100,10,1),110.47130674412973);
    });
    it("calculate compound interest", function() {
        const computeInterest = computeCompoundInterest(100,10,1);
        assert.strictEqual(+computeInterest.toFixed(2), 110.47);
    });
   });


// Mocha test for calculating down pament
describe("calculating downpayment as per costprice of house", function(){
    it("Calculating downpayment", function() {
        assert.strictEqual(calculateDowmPayment(40000), 2000);
    });

    it("Calculating downpament", function() {
        assert.strictEqual(calculateDowmPayment(250000), 25000);
    });
});


// Mocha test for sumDigit of number
describe("sum of digits of number", function() {
    it("sum of digits", function() {
        assert.strictEqual(sumDigits(1234), 10);
    });

    it("sum of digits", function() {
        assert.strictEqual(sumDigits(123), 6);
    });
});

// Mocha test for multDigits of number
describe("multiply digits", function() {
    it("Multiply digits", function() {
        assert.strictEqual(multDigits(1234), 24);
    });

    it("Multiply digits", function() {
        assert.strictEqual(multDigits(123), 6);
    });
});



//Mocha test for converting temperature to Fahrenheit
describe('convertTempToFahrenheit', function () {
    it("Convert temp to Fahrenheit", function () {
        assert.strictEqual(convertTempFahrenheit(32), 89.6);
    });

    it("Convert temp to Fahrenheit", function () {
        assert.strictEqual(convertTempFahrenheit(0), 32);
    });
});


// Mocha Test to calculate distance between points
describe("calculate distance", function () {
    it('calculate distance', function () {
        assert.strictEqual(calculateDistance(0,0,5,5), 7);
    });
});







