'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('constructor', () => {
    const node = new Node('Bear Dog!');
    expect(node.value).toEqual('Bear Dog!');
    expect(node.next).toEqual(null);
  });
});
