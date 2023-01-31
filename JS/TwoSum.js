const twoSum = function (nums, target) {
    const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}

    for (let i = 0; i < nums.length; i++) { // loop through all numbers
        const n = nums[i]; // grab the current number `n`.
        console.log(i, n, hash, hash[target - n]);
        if (hash[target - n] !== undefined) { // check if the number we need to add to `n` to reach our target has been seen:
            // return [hash[target - n], i]; // grab the index of the seen number, and the index of the current number
        }
        hash[n] = i; // update our hash to include the. number we just saw along with its index.
    }
    return []; // If no numbers add up to equal the `target`, we can return an empty array
}


const twoSums = (nums, target) => {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.get(target - nums[i]) !== undefined) {
            return [hash.get(target - nums[i]), i]
        }
        hash.set(nums[i], i)
    }
    return []
}
console.log(twoSums([1, 4, 2, 3], 5)); // [1, 2]