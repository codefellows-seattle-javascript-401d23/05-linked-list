'use strict';

const LinkedList = require('../lib/linked-list');
const Node = require('../lib/node');

describe('linked-list.js', () => {
  it('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  it('#insertAtHead', () => {
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
  
  it('#find', () => {
    const testList = new LinkedList();

    testList.insertAtEnd(5); 
    expect(testList.find(5)).toBeInstanceOf(Node);
    expect(testList.find(9)).toBeNull();

    testList.insertAtEnd(6);
    expect(testList.find(6)).toBeInstanceOf(Node);
    expect(testList.find(9)).toBeNull();

    testList.insertAtEnd(7);
    expect(testList.find(7)).toBeInstanceOf(Node);
    expect(testList.find(9)).toBeNull();
  });

  it('#remove', () => {
    const testList = new LinkedList();
    
    testList.insertAtEnd(5);
    expect(testList.remove(5)).toEqual(testList);

    testList.insertAtEnd(6);
    expect(testList.remove(6)).toEqual(testList);

    testList.insertAtEnd(7);
    expect(testList.remove(7)).toEqual(testList);
  });

  it('#map', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    const testListTwo = new LinkedList();
    testListTwo.insertAtEnd(10);
    testListTwo.insertAtEnd(12);
    testListTwo.insertAtEnd(14);

    expect(testList.map((node) => {
      node.value *= 2;
      return node.value;
    })).toMatchObject(testListTwo);

    const testListThree = new LinkedList();
    testListTwo.insertAtEnd(7);
    testListTwo.insertAtEnd(8);
    testListTwo.insertAtEnd(9);

    expect(testList.map((node) => {
      node.value += 2;
      return node.value;
    })).toMatchObject(testListThree);

    const testListFour = new LinkedList();
    testListTwo.insertAtEnd(3);
    testListTwo.insertAtEnd(4);
    testListTwo.insertAtEnd(5);

    expect(testList.map((node) => {
      node.value -= 2;
      return node.value;
    })).toMatchObject(testListFour);
  });
});
