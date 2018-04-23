'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // O(n) where n is the number of items in the list
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

  // O(n) where n is the number of items in the list
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

  // O(n) where n is the number of items in the list
  pop() {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const poppedValue = currentNode.next.value;
    currentNode.next = null;
    return poppedValue;
  }

  // O(n) where n is the number of items in the list
  remove(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return this;
    }

    const currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return this;
      }
    }
    return null;
  }
};
