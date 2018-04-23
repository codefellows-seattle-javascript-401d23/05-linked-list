'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('default constructor', () => {
    const node = new Node('mama');

    expect(node.value).toEqual('mama');
    expect(node.next).toBeNull();
  });
});
