'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.end = null;
    this.count = 0;
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

//Big O =         O(N)  where N is the lenght of the linked list.
LinkedList.prototype.add = function (value) {
  let node = new Node(value),
    currentNode = this.head;

  if (!currentNode) {
    this.head = node;
    this.length++;

    return node;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this.length++;

  return node;
};

//Big O =        O(N)  where N is the length of the Linked list
LinkedList.prototype.searchForNodePosition = function (position) {
  let currentNode = this.head,
    length = this.length,
    count = 1,
    message = 'Failure: non-existent node in this list.';

  if (length === 0 || position < 1 || position > length) {
    throw new Error(message);
  }

  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};

// Big O  =   O(N)  where N is the length of the Linked list.
LinkedList.prototype.remove = function (position) {
  var currentNode = this.head,
    length = this.length,
    count = 0,
    message = 'Failure: non-existent node in this list.';
  };
  