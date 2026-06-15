class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let string1 = s.split("").sort().join("");
        let string2 = t.split("").sort().join("");
        
        if(string1 === string2){
            return true;
        }
        else{
            return false;
        }
    }
}
