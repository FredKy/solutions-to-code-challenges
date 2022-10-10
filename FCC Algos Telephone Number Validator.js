function telephoneCheck(str) {
  let numbers = "0123456789";
  let allowed = ["()-", "--", ""];
  var arr = str.split("");
  let digits = arr.filter((e) => numbers.includes(e));
  arr = arr.filter((e) => e !== " ");
  arr = arr.filter((e) => !numbers.includes(e));
  if (digits.length === 10) {
    if (allowed.includes(arr.join(""))) {
      return true;
    }
  }

  if (digits.length === 11) {
    if (allowed.includes(arr.join("")) && digits[0] === "1") {
      return true;
    }
  }

  return false;
}

//telephoneCheck("555-555-5555");
//telephoneCheck("1(555)555-5555");
console.log(telephoneCheck("1 555-555-5555"));
