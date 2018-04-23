'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(10);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(10);
  });

  test('#insertAtHead', () => {
    const testList = new LinkedList();
    testList.insertAtHead(99);
    expect(testList.head.value).toEqual(99);
  });

  test('#find', () => {
    const testList = new LinkedList();
    testList.insertAtHead(43);
    testList.insertAtHead(5);
    testList.insertAtHead(55);
    testList.insertAtEnd(99);
    expect(testList.find(5)).toEqual(5)
  })
});
