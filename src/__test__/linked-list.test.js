'use strict';

const Node = require('./../lib/node');
const LinkedList = require('./../lib/linked-list');

describe('Should validate Linked List functionality', () => {
  test('#constructor', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.head).toBeNull();
  });

  test('#insertAtHead', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtHead(10);
    expect(testLinkedList.head.value).toEqual(10);

    testLinkedList.insertAtHead(20);
    expect(testLinkedList.head.value).toEqual(20);
    expect(testLinkedList.head.next.value).toEqual(10);

    testLinkedList.insertAtHead(10);
    expect(testLinkedList.head.value).toEqual(10);
    expect(testLinkedList.head.next.value).toEqual(20);
    expect(testLinkedList.head.next.next.value).toEqual(10);
  });

  test('#insertAtEnd', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtEnd(1);
    expect(testLinkedList.head.value).toEqual(1);

    testLinkedList.insertAtEnd(2);
    expect(testLinkedList.head.value).toEqual(1);
    expect(testLinkedList.head.next.value).toEqual(2);
    
    testLinkedList.insertAtEnd(3);
    expect(testLinkedList.head.value).toEqual(1);
    expect(testLinkedList.head.next.value).toEqual(2);
    expect(testLinkedList.head.next.next.value).toEqual(3);
  });

  test('#removeAtValue', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtHead(100);
    testLinkedList.insertAtHead(75);
    testLinkedList.insertAtHead(50);
    const compare = () => {
      const testLinkedList2 = new LinkedList();
      testLinkedList2.insertAtHead(100);
      testLinkedList2.insertAtHead(50);
      console.log(testLinkedList.removeAtValue(75));
      console.log(testLinkedList2);
      if (testLinkedList2 === testLinkedList.removeAtValue(75)) {
        return true;
      }
      return false;
    };
    expect(compare()).toBe(true);
  });

  test('#search', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtEnd(50);
    testLinkedList.insertAtEnd(75);
    testLinkedList.insertAtHead(25);
    
    expect(testLinkedList.search(50)).toBeInstanceOf(Node);
    expect(testLinkedList.search(100)).toBeNull();
  });
});
