// Тут потрібно вказати вашу множину
const x = [2, 2.2, 3, 3.5, 5, 5.5, 8, 8.5];

const fun = (x, y, logs = false) => {
  if (
    // Тут потрібно вписати вираз який описує задачу ↓
    Number.isInteger(Math.abs(x - y))
  ) {
    return 1;
  } else {
    return 0;
  }
};

let res = [['y ↓ | x →', ...x]];
for (let i = 1; i <= x.length; i++) {
  res[i] = [x[i - 1]];
  for (let j = 1; j <= x.length; j++) {
    res[i].push(0);
  }
}

for (let i = 1; i <= x.length; i++) {
  for (let j = 1; j <= x.length; j++) {
    res[j][i] = fun(x[i - 1], x[j - 1]);
  }
}

console.table(res);
