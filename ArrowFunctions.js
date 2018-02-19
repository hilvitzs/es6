var evens = [0, 2, 4, 6, 8];

// es5 syntax examples
var odds = evens.map(function (v) {
  return v + 1;
});

var pairs = evens.map(function (v) {
  return { even: v, odd: v + 1 };
});

var nums = evens.map(function (v, i) {
  return v + i;
});

var fives = [];
nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
});


// es6 syntax examples

var odds = evens.map(v =>
  v + 1
);

var pairs = evens.map(v =>
  ({ even: v, odd: v + 1 })
);

var nums = evens.map((v, i) =>
  v + i
);

var fives = [];
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v)
  }
});
