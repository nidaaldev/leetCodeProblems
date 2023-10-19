/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {

    let result = [];

    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
            }
        }
    }

    return result;
};

const numbers = [2, 11, 3, 7];

twoSum(numbers, 9);
