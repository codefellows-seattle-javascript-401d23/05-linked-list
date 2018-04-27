'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('#constructor', () => {
    const node = new Node('You created a new image!');
    expect(node.value).toEqual('You created a new image!');
    expect(node.next).toEqual(null);
  });
});
