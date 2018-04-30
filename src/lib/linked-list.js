'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
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
      throw new Error('__ERROR__ The list is empty');
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


  remove(value) {
    let currentNode = this.head;
    let previousNode = currentNode;

    // Josh - below- if value is the Head this deals with removing it
    if (currentNode.value === value) {
      this.head = currentNode.next;
    } else {
      // Josh - Below - if the value is a node in the middle of the list below deals with it.
      while (currentNode.next) {
        if (currentNode.value === value) {
          previousNode.next = currentNode.next;
          break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // Josh - below - this deals with removing the tail node.
      if (currentNode.value === value) {
        previousNode.next = null;
      }
    }
    return null;
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
    while (currentNode.next.next) {
      if (!currentNode.next.next) {
        currentNode.value = currentNode.next;
        console.log('Value of pop last node value', currentNode.value);
        currentNode.next = null;
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  map(callback) {
    let currentNode = this.head;
    const newList = new LinkedList();
    while (currentNode) {
      newList.insertAtHead(currentNode.value);
      currentNode = currentNode.next;
    }
    let newCurrentNode = this.head;
    while (newCurrentNode) {
      callback(newCurrentNode);
      newCurrentNode = newCurrentNode.next;
    }
  }

};

