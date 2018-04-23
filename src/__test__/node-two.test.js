'use strict';

const NodeTwo = require('../lib/node-two');

describe('node-two.js', () => {
  it('default constructor', () => {
    const node = new NodeTwo(0);

    expect(node.value).toEqual(0);
    expect(node.next).toBeNull();
  });
});
