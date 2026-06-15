class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let string1 = s.split("");
        let string2 = t.split("");
        const sortedArray1 = string1.sort();
        const sortedArray2 = string2.sort();
        const sortedString1 = sortedArray1.join("");
        const sortedString2 = sortedArray2.join("");
        if(sortedString1 === sortedString2){
            return true;
        }
        else{
            return false;
        }
    }
}
