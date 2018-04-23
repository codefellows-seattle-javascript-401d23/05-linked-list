'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // remove last node
  // Big O = O(n)
  pop() {
    if (!this.head) return null;
    let currentNode = this.head;

    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    return this;
  }

  // remove a node based on a certain value
  // Big O = O(n)
  remove(value) {
    if (!this.head) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.value === value) {
        previousNode.next = currentNode.next;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  // map method
  // Big O = O(n)
  map(callback) {
    if (!this.head) return null;
    let currentNode = this.head;
    
    while (currentNode) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }

    return this;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }
};
