var longestPalindrome = function (s = "") {
    let reverseString = (str) => {
        let val = ""
        for (let i = str.length - 1; i >= 0; i--) {
            val += str[i]
        }
        return val
    }
    let curr = ""
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j >= i; j--) {
            if (s[j] == s[i] && i != j) {
                let str = s.slice(i, j + 1)
                if (str.length > curr.length) {
                    let reverse = reverseString(str)
                    if (reverse == str) {
                        curr = str
                    }
                }
            }
        }
    }
    return curr || s[0]
};
console.log(longestPalindrome("aacabdkacaa"));