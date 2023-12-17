// Given an integer array nums, find a subarray that has the largest product and return the product
//
//
// Test Cases
//
//
// Input: nums = [2, 3, -2, 4]
// Output: 6
// Explanation: [2,3 has the largest product = 6]
//
// Input nums = [-2, 0, -1]
// Output = 0
// Explanation: The result cannot be 2, because -2, -1 is not a subarray
//
//
// Constraints: 1 <= nums.length <= 2 * 10^4
// -10 <= nums[i] <= 10


// What is a subarray? A subarray means the two values are in a row
//
//
// Possible approach:
// - brute force
// - 
//
// Patterns
// All positive [1, 2, 3] -> product is always increasing
// All negative [-1, -2, -3] -> product is alternating positve and negative
//
//
const test_case_one = [2, 3, -2, 4]
const test_case_two = [-2, 0, -1]

function maximum_product_subarray(nums: number[]): void {
  let result = Math.max(...nums);
  let currentMin = 1;
  let currentMax = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      currentMin = 1;
      currentMax = 1;
      break
    }

    let temp_current_max = currentMax;
    currentMax = Math.max(nums[i] * currentMax, nums[i] * currentMin, nums[i]);
    currentMin = Math.min(temp_current_max, currentMin, nums[i]);

    result = Math.max(result, currentMax);

  }


}

console.log(maximum_product_subarray(test_case_one));
// console.log(maximum_product_subarray(test_case_one));
