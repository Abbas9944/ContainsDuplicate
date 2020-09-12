/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let len = nums.length;
    nums.sort();
    for(let i=0;i<len;i++){
        if(nums[i] === nums[i+1])
            return true;
    }
    return false;
};

let nums = [1,2,3,1];
containsDuplicate(nums);
