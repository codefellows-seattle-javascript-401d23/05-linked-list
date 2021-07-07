'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('#constructor', () => {
    const node = new Node('Billie Jean');

    expect(node.value).toEqual('Billie Jean');
    expect(node.next).toBeNull();
  });
});
