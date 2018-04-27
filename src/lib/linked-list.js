'use strict';

const Node = require('./node');
const logger = require('./logger');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.end = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
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

  find(value) {
    if (!this.head) {
      logger.log(logger.INFO, '#find Linked List array is empty.  No value found.');
      return null;
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

  map(callback) {
    if (!this.head) {
      logger.log(logger.INFO, '#method Array is empty. No value found.');
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }

    return this;
  }

  pop() {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    if (!currentNode.next) {
      currentNode = null;
      return currentNode;
    }
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        return null;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(value) {
    if (!this.head) {
      logger.log(logger.INFO, '#remove Linked List array is empty.  No value found.');
      return null;
    }

    if (this === value) {
      delete this.value;
    } else {
      logger.log(logger.INFO, '#remove No value found in list.');
    }
    return undefined;
  }
};
