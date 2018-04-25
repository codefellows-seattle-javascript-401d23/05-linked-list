'use strict';

const LinkedList = require('../lib/linked-list');
const Node = require('../lib/node');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
  test('#insertAtHead', () => {
    const testList = new LinkedList();
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });


  test('#append', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);

    testList.append(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.append(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });
  test('#find', () => {
    const testList = new LinkedList();
    testList.append(5);
    testList.append(6);
    testList.append(7);

    expect(testList.find(5)).toBeInstanceOf(Node);
    expect(testList.find(9)).toBeNull();
  });
  test('#popLastNode()', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.append(4);
    testList.append(5);
    expect(testList.popLastNode()).toEqual(5);
  });
});
