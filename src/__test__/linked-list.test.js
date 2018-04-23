'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('insertAtEnd should add a node at the end, pop method should remove the last node', () => {
    const testList = new LinkedList();

    testList.pop();
    expect(testList.head).toBeNull();

    testList.insertAtEnd(3);
    testList.insertAtEnd(4);
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);

    testList.pop();
    expect(testList.head.next.next).toBeNull();
    testList.pop();
    expect(testList.head.next).toBeNull();
  });

  test('remove method should remove the node with the value of the parameter', () => {
    const testList = new LinkedList();

    testList.remove(5);
    expect(testList.head).toBeNull();

    testList.insertAtEnd(3);
    testList.insertAtEnd(4);
    testList.insertAtEnd(5);
    testList.insertAtEnd(10);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);

    testList.remove(1000);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);

    testList.remove(5);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(10);

    testList.remove(3);
    expect(testList.head.value).toEqual(4);
    expect(testList.head.next.value).toEqual(10);

    testList.remove(10);
    expect(testList.head.value).toEqual(4);  
  });

  test('map method should perform the callback on each node', () => {
    const testList = new LinkedList();
    const square = n => n * n;

    testList.map(square);
    expect(testList.head).toBeNull();

    testList.insertAtHead(3);
    testList.insertAtEnd(4);
    testList.insertAtEnd(5);
    testList.insertAtEnd(10);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);

    testList.map(square);
    expect(testList.head.value).toEqual(9);
    expect(testList.head.next.value).toEqual(16);
    expect(testList.head.next.next.value).toEqual(25);
    expect(testList.head.next.next.next.value).toEqual(100);
  });
});
