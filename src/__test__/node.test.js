'use strict';

const Node = require('../lib/node.js');

// below tests the function constructor
describe('node.js', () => {
  test('#constructor', () => {
    const node = new Node('Josh');
    expect(node.value).toEqual('Josh');
  });
});
