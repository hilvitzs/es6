// Importing
// es5
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

// es6
import { assert, expect } from 'chai';

const dog = {
  name: 'Spot',
  breed: 'corgi',
  tricksLearned: {
    sit: true,
    stay: true,
    rollOver: false,
    beg: true,
    speak: false
  }
}

let { name, breed } = dog;
let { sit, stay, speak } = dog.tricksLearned;

console.log(name); // 'Spot'
console.log(stay); // true



const strings = ['one', 'two', 'three'];
let [one, two, three] = strings;

console.log(two); // 'two'

// Reassigning Values

var list = [1, 2, 3];

// es5
temp = list[0];
list[0] = list[2];
list[2] = temp;

// es6
[ list[0], list[2] ] = [ list[2], list[0] ];

console.log(list); // [3, 2, 1]
