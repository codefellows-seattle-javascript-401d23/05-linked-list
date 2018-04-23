'use strict';

const Node = require('./node');


module.exports = class LinkedList { // time: O(1), space: O(1)
  constructor() {
    this.head = null;
  }

  insertAtHead(value) { // time: O(1), space: O(1)
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) { // time: O(n), space: O(1)
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


  find(value) { // time: O(n), space: O(1)
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return { previousNode: null, currentNode: this.head };
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return { currentNode: currentNode.next, previousNode: currentNode };
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(value) { // time: O(1), space: O(1)
    const nodeToDelete = this.find(value);

    if (nodeToDelete === null) {
      return;
    }

    if (nodeToDelete.previousNode === null) {
      this.head = nodeToDelete.currentNode.next;
      return;
    }

    nodeToDelete.previousNode.next = nodeToDelete.currentNode.next;
  }

  reduce(reduceFunc) { // time: O(n), space: O(1)
    if (reduceFunc == null) {
      throw new Error('reduce function was null');
    }

    if (this.head == null) {
      return null;
    }

    let currentNode = this.head;
    let currentValue = reduceFunc(null, currentNode.value);

    while (currentNode.next != null) {
      currentNode = currentNode.next;
      currentValue = reduceFunc(currentValue, currentNode.value);
    }

    return currentValue;
  }
};
