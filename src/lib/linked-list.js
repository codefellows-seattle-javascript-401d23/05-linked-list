'use strict'; 

const Node = require('./node');
const logger = require('./logger');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Big O - o(1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node; 
    return this;
  }

  // Big O - o(1)
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

  // Big O - o(n)
  find(value) {
    if (!this.head) {
      logger.log(logger.INFO, '#find Linked List array is empty. Could not find value.');
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

  // Big O - o(n)
  map(callback) {
    if (!this.head) {
      logger.log(logger.INFO, '#method Array is empty. Could not find value.');
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }

    return this;
  }

  // Big O - o(n)
  pop() {
    if (!this.head) {
      logger.log(logger.INFO, '#pop Linked List array is empty. Could not find value.');
      return null;
    }
    let currentNode = this.head;

    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode = null;

    return this;
  }
  
  // big O - o(n)
  remove(value) {
    if (!this.head) {
      logger.log(logger.INFO, '#remove Linked List array is empty. Could not find value.');
      return null;
    }

    if (this === value) {
      delete this.value;
    } else {
      logger.log(logger.INFO, '#remove Value does not exist in list.');
    }
    return undefined;
  }
};
