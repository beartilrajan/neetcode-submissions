class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i,n in enumerate(nums):
            seen[n] = i
        for i,n in enumerate(nums):
            check = target - nums[i]
            if check in seen and seen[check] !=i:
                return [i,seen[check]]

        return []