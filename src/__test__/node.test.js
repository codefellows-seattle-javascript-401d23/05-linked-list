const Node = require('../lib/node');

describe('node.js', () => {
    test('#constructor', () => {
        const node = new Node('a string to pass in');
        expect(node.value).toEqual('a string to pass in');
        expect(node.next).toEqual(null);
    })
})