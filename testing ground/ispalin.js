String.prototype.isPalindrome = function () {
  const len = this.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (this[i] !== this[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log("racecar".isPalindrome());
console.log("abba".isPalindrome());
console.log("aba".isPalindrome());
console.log("abbcbba".isPalindrome());
console.log("abbccba".isPalindrome());
console.log("abdccba".isPalindrome());
