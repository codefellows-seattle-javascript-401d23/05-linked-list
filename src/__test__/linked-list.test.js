'use strict';

const LinkedList = require('../lib/linked-list');


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

  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.insertAtEnd(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });
  test('#find', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    expect(testList.find(5)).toBeInstanceOf(Object);
    expect(testList.find(9)).toBeNull();
  });
  test('#remove head', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    testList.remove(5);
    expect(testList.head).toBeDefined();
    expect(testList.head.next).toBeDefined();

    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(7);
    expect(testList.head.next.next).toBeNull();
  });

  test('#remove middle', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    testList.remove(6);
    expect(testList.head).toBeDefined();
    expect(testList.head.next).toBeDefined();

    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(7);
    expect(testList.head.next.next).toBeNull();
  });

  test('#remove end', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    testList.remove(7);
    expect(testList.head).toBeDefined();
    expect(testList.head.next).toBeDefined();

    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next).toBeNull();
  });
  test('#reduce', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    const add = (a, b) => {
      if (a == null) {
        return b;
      }
      if (b == null) {
        return a;
      }
      return a + b;
    };

    const sum = testList.reduce(add);
    expect(sum).toEqual(18);
  });
});
