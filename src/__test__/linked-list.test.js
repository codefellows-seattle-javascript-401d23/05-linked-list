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

  test('#pop', () => {
    const testList = new LinkedList();
    testList.insertAtHead(1);
    testList.insertAtHead(2);
    testList.insertAtHead(3);
    testList.pop();
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next).toBeNull();
  });

  test('#remove', () => {
    const testList = new LinkedList();
    testList.insertAtHead(1);
    testList.insertAtHead(2);
    testList.insertAtHead(3);
    testList.remove(2);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.next.next).toBeNull();
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

    expect(testList.find(5)).toBeInstanceOf(Node);
    expect(testList.find(9)).toBeNull();
    expect(testList.find(10)).toBeNull();
  });
});
