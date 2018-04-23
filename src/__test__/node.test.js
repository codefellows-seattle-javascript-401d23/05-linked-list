'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('new node on constructor', () => {
    const myNode = new Node(5);
    expect(myNode.value).toEqual(5);
    expect(myNode.next).toBeNull();
  });
});
