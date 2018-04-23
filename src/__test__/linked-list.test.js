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
    expect(testList._length).toEqual(1);
    testList.insertAtHead(10);
    expect(testList.head.value).toEqual(10);
    expect(testList.head.next.value).toEqual(5);
    expect(testList._length).toEqual(2);
  });
  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);
    expect(testList._length).toEqual(1);
    testList.insertAtEnd(10);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(10);
    expect(testList._length).toEqual(2);
  });

  test('#remove from list', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(9);
    testList.insertAtEnd(10);
    testList.insertAtEnd(9);
    testList.insertAtEnd(9);
    testList.remove(10);
    expect(testList.head.next.value).toEqual(9);
    expect(testList._length).toEqual(3);
  });


  test('#map over list', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(1);
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    testList.insertAtEnd(4);
    const result = testList.map(ele => ele + 1); 
    expect(result).toEqual([2, 3, 4, 5]);
  }); 
});
