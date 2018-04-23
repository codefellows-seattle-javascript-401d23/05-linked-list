'use strict';

const Node = require('./node');
const NodeTwo = require('./node-two');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Big O: O(1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Big O: O(n)
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

  // Big O: O(n)
  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Big O: O(n)
  remove(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let previousNode = this.head;
      let currentNode = previousNode.next;
      while (currentNode) {
        if (currentNode.data === value) {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
    return this;
  }

  // Big O: O(n)
  double(value) {
    const node = new Node(value);
    const newNode = new NodeTwo(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    // Lacy: Attempting to take in the node value, multiply it by 2 and then assign 
    // the new value to the variable newNode which would push into a new constructor NodeTwo,
    // which would "map" and "double" the original constructor
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode.value *= 2;
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return this;
  }
};
