function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 0; i < nFloors; i++) {
    let s = "";
    for (let j = 0; j < nFloors - i - 1; j++) {
      s += " ";
    }
    let w = "*";
    for (let k = 0; k < i; k++) {
      w += "**";
    }
    let row = s + w + s;
    arr.push(row);
  }
  console.log(arr);
}

towerBuilder(2);

// Liknande lösning men använder repeat istället för en for loop för att skapa strängarna.

/* function towerBuilder(nFloors) {
    let arr = []
    let stars = 1;
    for (let i = 1; i <= nFloors; i++) {
      arr.push(" ".repeat(nFloors-i) + "*".repeat(stars) + " ".repeat(nFloors-i));
      stars = stars + 2;
      }
    console.log(arr);
    return arr;
  } 
  
 
  clever lösning

  function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
  
  
  */
