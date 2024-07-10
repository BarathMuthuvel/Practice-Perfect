"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicates(nums) {
    if (nums.length === 0)
        return [];
    var uniqueIndex = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    // Fill the remaining elements with '_'
    for (var i = uniqueIndex + 1; i < nums.length; i++) {
        nums[i] = '_';
    }
    return nums;
}
// Unit Tests
function runTests() {
    var testCases = [
        { input: [1, 1, 2], expectedOutput: [1, 2, '_'] },
        { input: [1, 2, 3], expectedOutput: [1, 2, 3] },
        { input: [], expectedOutput: [] },
        { input: [1, 1, 1, 1], expectedOutput: [1, '_', '_', '_'] }
    ];
    for (var _i = 0, testCases_1 = testCases; _i < testCases_1.length; _i++) {
        var _a = testCases_1[_i], input = _a.input, expectedOutput = _a.expectedOutput;
        var outputArray = removeDuplicates(__spreadArray([], input, true));
        console.log("Input: [".concat(input, "]"));
        console.log("Output: [".concat(outputArray, "]"));
        console.log("Expected: [".concat(expectedOutput, "]"));
        console.log('---');
    }
}
runTests();
