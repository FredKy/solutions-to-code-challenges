function solution(string) {
  const isUpperCase = (a) => {
    if (a == " ") {
      return false;
    }
    if (a == a.toUpperCase()) {
      return true;
    }
    if (a == a.toLowerCase()) {
      return false;
    }
    //console.log(a);
  };
  var output = string;
  var count = 0;
  for (let i = 0; i < string.length; i++) {
    console.log(isUpperCase(string[i]));
    if (isUpperCase(string[i])) {
      output = [output.slice(0, i + count), " ", output.slice(i + count)].join(
        ""
      );
      count += 1;
    }
  }
  //console.log(output);
  return output;
}

solution("bajs bAjs bajSar");
