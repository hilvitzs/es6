// es5 block scope
var callbacks = [];

for (var i = 0; i <= 2; i++) {
  (function (i) {
    callbacks[i] = function () {
      return i * 2;
    };
  })(i);
}

callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;

// es6 block scope
var callbacks = []

for (let i = 0; i <= 2; i++) {

  callbacks[i] = function () {
    return i * 2
  }

}

callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
