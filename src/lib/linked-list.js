'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  
  }
// Big O(1)-- only one thing being inserted, length of the object doesnot affect
  insertAtHead(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this._length++;
      return this;
    }
    newHead.next = this.head;
    this.head = newHead;
    this._length++;
    return this;
  }
// Big O(N)-- where N = length of the linked list 
  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this._length++;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return this;
  }
// Big O(N)-- where N = length of the linked list 
  remove(searchValue) {
    if (this.head === null) return;
    if (this.head.value === searchValue) {
      this.head = this.head.next;
      this._length--;
      return;
    }
    const currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === searchValue) {
        currentNode.next = currentNode.next.next;
        this._length--;
        return;
      }
    }
  }
  //Big O(N) where N = length of the linked list
  map(callback) {
    if (this.head === null) return;
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    return result;
  }
};
