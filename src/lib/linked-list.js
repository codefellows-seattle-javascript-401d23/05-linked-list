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

  popOffTop() {
    this.head = this.head.next;
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

  remove() {
    const currentNode = this.head, count=0, previous;
    if (this.length === 0) return;
    if (index === 0) {
      this.head = currentNode.next;
      this.length--;
    } else {
      while (count < index-1) {
        previous = currentNode;
        currentNode = currentNode.next;
        count ++;
      }
      previous.next = currentNode.next;
      this.length--;

      return this.head;
    }
  }


  map(value) {
    const node = new Node(value);


    }
  }

