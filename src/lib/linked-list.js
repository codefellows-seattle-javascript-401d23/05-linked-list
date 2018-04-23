'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  // Sean - Time O(1) because FP never changes due to the size of the input 
  // Sean - Space O(1) becasue nothing new is created 
  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }
  // Sean - Time O(1) because FP never changes due to the size of the input
  // Sean - Space O(1) becasue nothing new is created  
  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    // Sean - Time O(N) where N is the nodes in the Linked List    
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  removeAtValue(value) {
    if (!this.head) {
      throw new Error('Error: The given list is empty');
    }
    let currentNode = this.head;
    // Sean - Time O(N) where N is the nodes in the Linked List
    // Sean - Space O(1) becasue nothing new is created
    if (this.head.value === value) {
      this.head = this.head.next;
    }
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode; 
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  search(value) {
    if (!this.head) {
      throw new Error('Error: The given list is empty');
    }
    if (this.head.value === value) {
      return this.head;
    }
    let currentNode = this.head;
    // Sean - Time O(N) where N is the nodes in the Linked List
    // Sean - Space O(1) becasue nothing new is created
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  mapValue(value, callback) {
    let currentNode = this.head;
    const mapList = new LinkedList();
    while (currentNode.next) {
      mapList.insertAtEnd(callback(value));
      currentNode = currentNode.next;
    }
  }
};
