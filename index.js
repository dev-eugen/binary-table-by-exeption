// Тут потрібно вказати вашу множину
const x = [-7, -6.2, -5, -4.3, -0.25, 0.1, 5.5, 10];

const fun = (x, y, logs = false) => {
  if (
    // Тут потрібно вписати вираз який описує задачу ↓
    -1 * x * (-1 * x) + x + 10 <=
    -1 * y * (-1 * y) + y + 10
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
