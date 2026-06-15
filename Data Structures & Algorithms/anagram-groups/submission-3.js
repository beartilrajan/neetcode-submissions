class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = {};
        for (let s of strs) {
            const sorted = s.split('').sort().join('');
            if (!group[sorted]) {
                group[sorted] = [];
            }
            group[sorted].push(s);
        }
        return Object.values(group);
    }
}