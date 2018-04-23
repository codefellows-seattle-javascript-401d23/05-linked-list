'use strict';

const Node = require('../lib/node');

describe('Should validate the Node constructor ', () => {
  test('node.js constructor', () => {
    const node = new Node('Kona is my Bulldog');

    expect(node.value).toEqual('Kona is my Bulldog');
    expect(node.next).toBeNull();
  });
});
