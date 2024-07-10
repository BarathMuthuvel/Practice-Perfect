"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseString(str) {
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reverseString("hello"));
function reverseStrMethod(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStrMethod("Barath"));
function runTests() {
    var input = "hello";
    // Test with a non-empty string
    var test1 = reverseString(input);
    console.log(test1 === "olleh" ? "Test 1 Passed" : "Test 1 Failed");
    // Test with an empty string
    var test2 = reverseString(input);
    console.log(test2 === "" ? "Test 2 Failed" : "Test 2 Passed");
    // Test with a string containing spaces
    var test3 = reverseString(input);
    console.log(test3 === "olleh" ? "Test 3 Passed" : "Test 3 Failed");
    // Test with a palindrome
    var test4 = reverseString(input);
    console.log(test4 === "olleh" ? "Test 4 Passed" : "Test 4 Failed");
}
runTests();
