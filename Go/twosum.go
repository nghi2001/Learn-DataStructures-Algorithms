package main

func twoSum(nums []int, target int) []int {
	hash := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		_, findNum := hash[target-nums[i]]
		if findNum {
			result := []int{hash[target-nums[i]], i}
			return result
		}
		hash[nums[i]] = i
	}
	result := []int{}
	return result
}
