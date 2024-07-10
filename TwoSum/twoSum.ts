function twoSum(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return undefined;
}

// Unit Tests
console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([1, 2, 3, 4], 8)); 
console.log(twoSum([1, 2, 3, 4, 2, 5], 6));
console.log(twoSum([3, 3], 6)); 

export {}
