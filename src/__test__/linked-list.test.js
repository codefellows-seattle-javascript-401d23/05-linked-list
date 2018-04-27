'use strict';

const LinkedList = require('../lib/linked-list');
const Node = require('../lib/node');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead should add inserted value at the head of LinkedList', () => {
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

  test('#insertAtEnd should insert value at the tail of LinkedList', () => {
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

  test('#find should find the specified value anywhere in the linked list', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    expect(testList.find(5)).toBeInstanceOf(Node);
    expect(testList.find(9)).toBeNull();
  });

  test('#remove should delete the specified value in LinkedList', () => {
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
    
    testList.remove(7);
    expect(testList.head.next.value).toEqual(6);
  });

  test('#remove should return null because the list is already empty', () => {
    const testList = new LinkedList();
    testList.remove(5);
    expect(testList.remove(5)).toBeNull();
  });

  test('#pop should remove and delete the last node in a LinkedList array', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.insertAtEnd(8);
    
    testList.pop();
    expect(testList.head.next.next.value).toEqual(7);
    expect(testList.head.next.next.next).toBeNull();
  });

  test('#pop should return null because the list is empty', () => {
    const testList = new LinkedList();
    testList.pop();
    expect(testList.pop()).toBeNull();
  });

  test('#map should list through array and return a callback of each node in the array', () => {
    const testList = new LinkedList();
    const callback = x => x / 2;
    
    testList.insertAtEnd(6);
    testList.insertAtEnd(8);
    testList.insertAtEnd(12);

    testList.map(callback);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(6);
  });

  test('#map should return null because the list is empty', () => {
    const testList = new LinkedList();
    testList.map();
    expect(testList.map()).toBeNull();
  });
});
