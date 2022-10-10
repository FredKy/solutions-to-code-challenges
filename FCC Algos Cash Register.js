function checkCashRegister(price, cash, cid) {
  let init_amount = Math.round((cash - price) * 100) / 100;
  let amount = cash - price;
  cid.reverse();
  console.log(cid);
  var arr = [];
  var tmp;

  for (let i = 0; i < cid.length; i++) {
    tmp = operate(cid[i], amount);
    amount = tmp[0];
    arr.push(tmp[1]);
  }

  //arr = arr.filter((e) => e[1] !== 0);
  //console.log(arr);

  var sum = 0;
  var sum_cash_reg = 0;
  arr.forEach((e) => (sum += e[1]));
  sum = Math.round(100 * sum) / 100;
  cid.forEach((e) => (sum_cash_reg += e[1]));
  sum_cash_reg = Math.round(100 * sum_cash_reg) / 100;
  let change = arr;
  //console.log(sum);
  //console.log(sum_cash_reg);
  if (sum === sum_cash_reg && sum === init_amount) {
    change.reverse();
    return { status: "CLOSED", change };
  } else if (sum === init_amount) {
    change = change.filter((e) => e[1] !== 0);
    return { status: "OPEN", change };
  } else {
    change = [];
    return { status: "INSUFFICIENT_FUNDS", change };
  }
}

function operate(arr, amount) {
  var div = 0.0;
  var str = arr[0];
  var str_cash = arr[1];
  switch (str) {
    case "PENNY":
      div = 0.01;
      break;
    case "NICKEL":
      div = 0.05;
      break;
    case "DIME":
      div = 0.1;
      break;
    case "QUARTER":
      div = 0.25;
      break;
    case "ONE":
      div = 1;
      break;
    case "FIVE":
      div = 5;
      break;
    case "TEN":
      div = 10;
      break;
    case "TWENTY":
      div = 20;
      break;
    case "ONE HUNDRED":
      div = 100;
      break;
    default:
      break;
  }

  var times_amount = Math.floor(amount / div);
  var times_cash = Math.floor(str_cash / div);
  var new_amount = amount;
  //console.log(times_amount);
  //console.log(times_cash);
  var res = 0;
  if (times_amount > 0) {
    while (times_cash > 0 && times_amount > 0) {
      new_amount -= div;
      res += div;
      times_cash--;
      times_amount--;
    }
  }
  return [
    Math.round(100 * new_amount) / 100,
    [str, Math.round(100 * res) / 100],
  ];
}

/* checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]); */
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
