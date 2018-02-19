// es5
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};

f(1, 2, "hello", true, 7) // 9

// es6
function f (x, y, ...arguments) {
    return (x + y) * arguments.length
}

f(1, 2, "hello", true, 7) // 9

var arr = [4, 5, 6];

// es5
var completeArr = [1, 2, 3].concat(arr2); // [1, 2, 3, 4, 5, 6]

// es6
var completeArr = [1, 2, 3, ...arr]; // [1, 2, 3, 4, 5, 6]

var string = 'hello';

// es5
var characters = string.split(''); // ['h', 'e', 'l', 'l', 'o']

// es6
var characters = [...string]; // ['h', 'e', 'l', 'l', 'o']
