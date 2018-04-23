'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('default constructor', () => {
    const node = new Node('David');

    expect(node.value).toEqual('David');
    expect(node.next).toBeNull();
  });
});
