/* var isPalindrome = function (s) {
  var lower = s.toLowerCase();
  var filtered = lower
    .split("")
    .filter(
      (e) =>
        (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122) ||
        (e.charCodeAt(0) >= 48 && e.charCodeAt(0) <= 57)
    )
    .join("");
  return filtered == filtered.split("").reverse().join("");
}; */

var isPalindrome = function (s) {
  filtered = s
    .toLowerCase()
    .split("")
    .filter(
      (e) =>
        (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122) ||
        (e.charCodeAt(0) >= 48 && e.charCodeAt(0) <= 57)
    );
  l = 0;
  r = filtered.length - 1;
  while (l <= r) {
    if (filtered[l] != filtered[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

//Snyggare lösning
/* var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '').split('');

    let i = 0;
    let j = s.length - 1;
    
    while(i <= j){
        if(s[i] !== s[j]){
            return false
        }

        i++;
        j--;
    }

    return true
    
}; */
