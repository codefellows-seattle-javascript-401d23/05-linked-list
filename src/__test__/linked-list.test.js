'use strict';

const LinkedList = require('../lib/linked-list');
const Node = require('../lib/node');

const testList = new LinkedList();
testList.insertAtHead(1);
testList.insertAtHead(2);
testList.insertAtHead(3);

describe('linked-list.js', () => {
  test('#find', () => {
    expect(testList.find(2)).toBeInstanceOf(Node);
    expect(testList.find(3).next).toBeInstanceOf(Node);
    expect(testList.find(1).next).toBeNull();
  });
  test('#pop', () => {
    expect(testList.pop(1)).toEqual(testList);
    expect(testList.pop(2)).toEqual(testList);
    expect(testList.pop(3)).toEqual(testList);
  });
  // test('#reduce', () => {
  //   expect(testList.reduce()).toEqual(6);
  // });
});
