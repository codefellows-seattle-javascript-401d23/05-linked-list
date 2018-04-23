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
    testList.insertAtHead(10);
    expect(testList.head.value).toEqual(10);


    testList.insertAtHead(20);
    expect(testList.head.value).toEqual(20);
    expect(testList.head.next.value).toEqual(10);

    testList.insertAtHead(30);
    expect(testList.head.value).toEqual(30);
    expect(testList.head.next.value).toEqual(20);
    expect(testList.head.next.next.value).toEqual(10);
  });

  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(10);
    expect(testList.head.value).toEqual(10);

    testList.insertAtEnd(20);
    expect(testList.head.value).toEqual(10);
    expect(testList.head.next.value).toEqual(20);

    testList.insertAtEnd(30);
    expect(testList.head.value).toEqual(10);
    expect(testList.head.next.value).toEqual(20);
    expect(testList.head.next.next.value).toEqual(30);
  });

  test('#find', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(10);
    testList.insertAtEnd(20);
    testList.insertAtEnd(30);

    expect(testList.find(10)).toBeInstanceOf(Node);
    expect(testList.find(20)).toBeInstanceOf(Node);
    expect(testList.find(30)).toBeInstanceOf(Node);
    expect(testList.find(40)).toBeNull();
  });

  test('#pop', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(10);
    testList.insertAtEnd(20);
    testList.insertAtEnd(30);
    testList.insertAtEnd(40);

    expect(testList.pop()).toEqual(40);
    expect(testList.pop()).toEqual(30);
    expect(testList.pop()).toEqual(20);
  });

  test('#remove(value)', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(10);
    testList.insertAtEnd(20);
    testList.insertAtEnd(30);
    testList.insertAtEnd(40);
    testList.insertAtEnd(50);
    testList.insertAtEnd(60);

    // 10 -> 20 -> 30 -> 40 -> 50 -> 60
    expect(testList.remove(10).head.value).toEqual(20);

    // 20 -> 30 -> 40 -> 50 -> 60
    expect(testList.remove(30).head.next.value).toEqual(40);

    // 20 -> 40 -> 50 -> 60
    expect(testList.remove(40).head.next.next.value).toEqual(60);
  });
});
