'use strict';

const Node = require('./node');

// time: O(1) space: 0(1)
module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // time: 0(1) space: 0(1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // time: 0(n) because of while space: 0(1)
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

  // time: 0(n) because of while space: 0(1)
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

  // time: 0(1) space: 0(1)
  removeValue(value) {
    const removeNode = this.find(value);

    if (removeNode === null) {
      return;
    }

    if (removeNode.previousNode === null) {
      this.head = removeNode.currentNode.next;
      return;
    }

    removeNode.previousNode.next = removeNode.currentNode.next;
  }
};
