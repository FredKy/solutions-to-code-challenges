function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arr = [...alphabet];
  var res = "";
  [...str].forEach((e) => {
    if (alphabet.indexOf(e) > -1) {
      res += arr[((e.charCodeAt(0) % 65) + 13) % 26];
    } else {
      res += e;
    }
  });
  return res;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
