function encodeRailFenceCipher(string, numberRails) {
  str = "";
  periodicNumbers = createPeriodicArray(numberRails - 1);
  p = periodicNumbers.length;
  arrayOfStringArrays = createArrayOfArrays(numberRails);

  for (var i = 0; i < string.length; i++) {
    arrayOfStringArrays[periodicNumbers[i % p]].push(string.charAt(i));
  }
  arrayOfStringArrays.forEach((e) => {
    str += e.join("");
  });
  return str;
}

function decodeRailFenceCipher(string, numberRails) {
  str = "";
  periodicNumbers = createPeriodicArray(numberRails - 1);
  p = periodicNumbers.length;
  arrayOfStringArrays = Array.from(Array(numberRails), () => []);
  console.log(arrayOfStringArrays);

  //Does not work intuitively. DO NOT USE:
  arr = new Array(numberRails).fill([]);
  console.log(arr);

  arrayOfCounts = Array(numberRails).fill(0);
  for (var i = 0; i < string.length; i++) {
    arrayOfCounts[periodicNumbers[i % p]] += 1;
  }

  k = 0;
  for (i = 0; i < arrayOfCounts.length; i++) {
    for (j = 0; j < arrayOfCounts[i]; j++) {
      arrayOfStringArrays[periodicNumbers[i % p]].push(string.charAt(k));
      k += 1;
    }
  }

  for (i = 0; i < string.length; i++) {
    tmp = arrayOfStringArrays[periodicNumbers[i % p]];
    str += tmp[0];
    tmp.shift();
  }

  return str;
}

function createPeriodicArray(n) {
  let res = [];
  if (n === 0) {
    res.push(0);
  } else {
    for (let i = 0; i < n; i++) {
      res.push(i);
    }
    for (let i = n; i > 0; i--) {
      res.push(i);
    }
  }
  return res;
}

function createArrayOfArrays(n) {
  res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }
  return res;
}

/* console.log(createPeriodicArray(0));
console.log(createPeriodicArray(1));
console.log(createPeriodicArray(2));
console.log(createPeriodicArray(3));
console.log(createPeriodicArray(7));
console.log(createArrayOfArrays(3)); */
//encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3);
//decodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3);
//console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));
//console.log(encodeRailFenceCipher("Hello, World!", 3));
//console.log(decodeRailFenceCipher("Hoo!el,Wrdl l", 3));

/* describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3),
      "WECRLTEERDSOEEFEAOCAIVDEN"
    );
    Test.assertEquals(
      decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3),
      "WEAREDISCOVEREDFLEEATONCE"
    );
    Test.assertEquals(
      encodeRailFenceCipher("Hello, World!", 3),
      "Hoo!el,Wrdl l"
    );
  });
});
 */
