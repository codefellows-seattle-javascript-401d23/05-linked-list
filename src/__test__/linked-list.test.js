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

  test('#map', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtEnd(1);
    testLinkedList.insertAtEnd(2);
    testLinkedList.insertAtEnd(3);
    testLinkedList.insertAtEnd(4);

    const testLinkedList2 = new LinkedList();
    testLinkedList2.insertAtEnd(2);
    testLinkedList2.insertAtEnd(3);
    testLinkedList2.insertAtEnd(4);
    testLinkedList2.insertAtEnd(5);

    const testLinkedList3 = new LinkedList();
    testLinkedList3.insertAtEnd(2);
    testLinkedList3.insertAtEnd(4);
    testLinkedList3.insertAtEnd(6);
    testLinkedList3.insertAtEnd(8);

    const testLinkedList4 = new LinkedList();
    testLinkedList4.insertAtEnd(1);
    testLinkedList4.insertAtEnd(4);
    testLinkedList4.insertAtEnd(9);
    testLinkedList4.insertAtEnd(16);
    
    expect(testLinkedList.mapValue((node) => {
      node.value += 1;
      return node.value;
    })).toMatchObject(testLinkedList2);

    expect(testLinkedList.mapValue((node) => {
      node.value *= 2;
      return node.value;
    })).toMatchObject(testLinkedList3);

    expect(testLinkedList.mapValue((node) => {
      node.value *= node.value;
      return node.value;
    })).toMatchObject(testLinkedList4);
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
