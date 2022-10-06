function palindrome(str) {
  str = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstvwxyz1234567890";
  var res = str.split("").filter((e) => {
    return alphabet.indexOf(e) > -1;
  });
  var reversed = [...res].reverse();
  console.log(res);
  console.log(reversed);
  for (let i = 0; i < Math.floor(res.length / 2); i++) {
    console.log("i : " + i + " ", res[i], " : ", reversed[i]);
    if (res[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
