'use strict'; 

const Node = require('./node');
const logger = require('./logger');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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

  find(value) {
    if (!this.head) {
      logger.log(logger.INFO, '#find Linked List array is empty. Could not find value.');
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

  pop() {
    if (!this.head) {
      logger.log(logger.INFO, '#pop Linked List array is empty. Could not find value.');
      return null;
    }
    return undefined;
  }
  
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
