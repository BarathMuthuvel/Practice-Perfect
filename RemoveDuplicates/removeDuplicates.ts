function removeDuplicates(nums: (number | string)[]): (number | string)[] {
    if (nums.length === 0) return [];

    let uniqueIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }

    // Fill the remaining elements with '_'
    for (let i = uniqueIndex + 1; i < nums.length; i++) {
        nums[i] = '_';
    }

    return nums;
}

// Unit Tests
function runTests() {
    const testCases: { input: (number | string)[], expectedOutput: (number | string)[] }[] = [
        { input: [1, 1, 2], expectedOutput: [1, 2, '_'] },
        { input: [1, 2, 3], expectedOutput: [1, 2, 3] },
        { input: [], expectedOutput: [] },
        { input: [1, 1, 1, 1], expectedOutput: [1, '_', '_', '_'] }
    ];

    for (const { input, expectedOutput } of testCases) {
        const outputArray = removeDuplicates([...input]); 
        console.log(`Input: [${input}]`);
        console.log(`Output: [${outputArray}]`);
        console.log(`Expected: [${expectedOutput}]`);
        console.log('---');
    }
}

runTests();

export {}
