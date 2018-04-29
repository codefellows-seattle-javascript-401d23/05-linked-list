'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('default constructor', () => {
    const node = new Node('Sunday');

    expect(node.value).toEqual('Sunday');
    expect(node.next).toBeNull();
  });
});
