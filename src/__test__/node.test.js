'use strict';

const Node = require('../lib/node');

describe('testing node constructor', () => {
  test('should create new Node with defined value', () => {
    const node = new Node('test');
    expect(node.value).toEqual('test');
    expect(node.next).toBeNull();
  });
});
