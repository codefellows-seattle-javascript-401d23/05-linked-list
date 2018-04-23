'use strict';

const Node = require('./node');
const logger = require('./logger');

logger.log(logger.INFO, 'Im testing linked list');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.length = '';
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

  // Big0 runtime O(n)
  removeAtEnd() {
    if (!this.head) return null;
    let currentNode = this.head;
    let previousNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
    currentNode = null;
    this.length = this.length - 1; // unable to use --
    return this;
  }

  // Big0 runtime O(n)
  removeAtValue(val) {
    if (!this.head) return null;

    let previousNode = this.head;
    let currentNode = previousNode.next;

    while (currentNode) {
      if (currentNode.value === val) {
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return undefined;
    }
    previousNode.next = currentNode.next;
    this.length = this.length - 1; // unable to use --
    return this;
  }

  // reduceSum() {
  //   if (!this.head) return null;
  //   let currentNode = this.head;
  //   while (currentNode.next) {
  //     currentNode = currentNode.next;
  //   }
  //   console.log(this);
  //   return this.reduce((total, sum) => total + sum, 0);
  // }

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
