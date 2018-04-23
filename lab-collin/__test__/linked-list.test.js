'use strict';

const LinkedList = require('../lib/linked-list');

// const Node = require('../lib/node');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead', () => {
    const testList = new LinkedList();
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);
  });

  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
  });

  test('#pop', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    expect(testList.head.next.next.value).toEqual(7);
    testList.pop();
    expect(testList.head.next.next).toEqual(null);
    testList.pop();
    expect(testList.head.next).toEqual(null);
    testList.pop();
    expect(testList.head).toEqual(null);
  });

  test('#remove', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.remove(6);
    expect(testList.head.next.value).toEqual(7);
    testList.remove(5);
    expect(testList.head.value).toEqual(7);
    testList.remove(7);
    expect(testList.head.value).toEqual(null);
  });

  test('map', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.map(el => el + 3);
    expect(testList.head.value).toEqual(8);
    expect(testList.head.next.value).toEqual(9);
    testList.map(el => el * 2);
    expect(testList.head.value).toEqual(16);
  });
});
