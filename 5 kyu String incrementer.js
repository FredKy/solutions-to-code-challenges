function incrementString(strng) {
  if (strng == "") {
    return "1";
  }
  var s = "";
  var num = 1;
  if (!isNaN(Number(strng))) {
    console.log(Number(strng));
    s = "1" + strng;
    num = Number(s) + 1;
    s = num.toString().slice(1);
    console.log(s);
    return s;
  }
  for (let i = strng.length - 1; i >= 0; i--) {
    if (isNaN(strng.charAt(i))) {
      s = strng.slice(i + 1);
      console.log(s);
      if (s === "") {
        return strng + num;
      }
      if (strng.charAt(i + 1) == "0") {
        s = "1" + s;
        num = parseInt(s) + 1;
        s = strng.slice(0, i + 1) + num.toString().slice(1);
        console.log(s);
        return s;
      }
      num = parseInt(s) + 1;
      s = strng.slice(0, i + 1) + num.toString();
      console.log(s);
      return s;
    }
  }
}
incrementString("0");
