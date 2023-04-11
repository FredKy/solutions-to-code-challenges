function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = tmp;
      j -= 1;
    }
  }
  return arr;
}

console.log(insertionSort([5, 0, 3, 1, 6, 8, 4, 3, 8, 3, 4, 5, 6, 12]));
