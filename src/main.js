'use strict';

// const logger = require('./lib/logger');
const LinkedList = require('./lib/linked-list');

LinkedList

const test1 = 1

const testList = new LinkedList();

testList.push(12);
testList.push(99);
testList.push(37);
// console.log('main', testList);

// testList.pop();
// console.log('main pt 2', testList);

console.log('end method', testList.map(x => x *100));
    // console.log('results', testList);