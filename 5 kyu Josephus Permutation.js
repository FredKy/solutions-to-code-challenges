function josephus(items, k) {
  let answer = [];
  count = 0;
  while (items.length > 0) {
    //var spliceTargets = [];
    var spliceIndeces = [];
    for (let i = 0; i < items.length; i++) {
      count += 1;

      if (count % k === 0) {
        answer.push(items[i]);
        console.log(items);
        //spliceTargets.push(items[i]);
        spliceIndeces.push(i);
      }
    }
    /* spliceTargets.forEach((element) => {
      items.splice(items.indexOf(element), 1);
      console.log(items);
    }); */
    spliceIndeces.reverse().forEach((element) => {
      items.splice(element, 1);
      console.log(items);
    });
  }
  console.log(answer);
  return answer;
}

josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4);

// elegantare lösning
/*function josephus(items, k){
    var result = [], index = 0;
    while (items.length > 0){
      index = (index + k - 1) % items.length;
      result = result.concat(items.splice(index, 1));
    }
    return result;
  } */
