function mergeSort(arr, s, e) {
  function merge(arr, s, m, e) {
    let length_1 = m - s + 1;
    let length_2 = e - m;

    let left = new Array(length_1);
    let right = new Array(length_2);

    for (let i = 0; i < length_1; i++) {
      left[i] = arr[s + i];
    }

    for (let j = 0; j < length_2; j++) {
      right[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = s;

    while (i < length_1 && j < length_2) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    while (i < length_1) {
      arr[k] = left[i];
      i++;
      k++;
    }

    while (j < length_2) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }

  if (e - s <= 0) {
    return arr;
  }

  let m = Math.floor((s + e) / 2);

  /* console.log(`Start: ${s}, Middle: ${m} , End: ${e} `);
  console.log(arr); */

  mergeSort(arr, s, m);
  mergeSort(arr, m + 1, e);

  merge(arr, s, m, e);

  return arr;
}

var a = [5, 3];
var b = [5, 0, 3, 1, 6, 8, 4, 3, 8, 3, 4, 5, 6, 12];

console.log(mergeSort(a, 0, a.length - 1));
console.log(mergeSort(b, 0, b.length - 1));
