'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // pre-made methods

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

  // Big O (N), N is number of nodes

  pop() {
    if (!this.head.next) {
      this.head = null;
      return this;
    }
    let currentNode = this.head;

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;

    return this;
  }

  // Big O (N), N is number of nodes

  remove(value) {
    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }

    if (this.head.value === value) {
      if (this.head.next) {
        this.head.value = this.head.next.value;
        this.head.next = this.head.next.next;
      } else {
        this.head.value = null;
        this.head.next = null;
      }
    }

    return null;
  } 

  // Big O(N), N is number of nodes

  map(callback) {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }
    return null;
  } 
};
