'use strict';

// const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // remove last node
  // Big O = O(n)
  pop() {
    if (!this.head) return null;
    if (!this.head.next) return null;

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

    // I did this keeping track of two nodes, but does it work keeping
    // track of just one? Just looking at the currentNode.next.value?
    // Once I find that the currentNode.next.value === value,
    // could I simply reassign currentNode.next = currentNode.next.next?

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

    while (currentNode.next) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
    // invoking callback once more for the tail value
    callback(currentNode.value);
    return this;
  }
};
