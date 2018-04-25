'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null; // points at the head...
  }
  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    // ensures node.next exists
    while (currentNode.next) {
      currentNode = currentNode.next; // moves the current node // same as an i++ 
    }
    // end of the list
    currentNode.next = node;
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
  popLastNode() {
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
        const { value } = currentNode.next;
        currentNode.next = null;
        // console.log('this value', value);
        return value;
      }
      currentNode = currentNode.next;
    }
  }
  reduceNodes() {
    
  }
};

// while (currentNode.next.next) {
//   currentNode = currentNode.next;
// }
// const temp = currentNode.next;
// currentNode.next = null;
// return temp;
