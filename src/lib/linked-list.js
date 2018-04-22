'use strict';

const Node = require('./node');
const logger = require('./logger');

logger.log(logger.INFO, 'Im testing linked list');
module.exports = class LinkedList {
  constructor() {
    this.head = null;
    // this.tail = null;
    // this.length = '';
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

  removeAtEnd() {
    if (!this.head) return null;
    let currentNode = this.head;
    // let previousNode;
    while (currentNode.next) {
      // previousNode = currentNode;
      // currentNode = currentNode.next;
      currentNode = null;
      currentNode.next = null;
    }
    return this;
  }


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
};
