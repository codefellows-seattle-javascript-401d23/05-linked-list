'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  createNewListItem(value) { // O(N), where N = number of nodes-1
    const node = new Node(value); // O(1)
    if (!this.head) { // O(1)
      this.head = node;
      return this;
    }
    let currentNode = this.head; // O(1)
    while (currentNode.next) { // O(N), where N = number of nodes-1
      currentNode = currentNode.next;
    }
    currentNode.next = node; // O(1)
    return this;
  }

  pop() { // O(N), where N = number of nodes-2
    if (!this.head) { // O(1)
      throw new Error('Cannot remove item from empty list');
    }
    if (!this.head.next) { // O(1)
      this.head = null;
      return this;
    }
    let currentNode = this.head; // O(1)
    while (currentNode.next.next) { // O(N), where N = number of nodes-2
      currentNode = currentNode.next;
    }
    currentNode.next = null; // O(1)
    return this;
  }

  remove(value) { // O(N), where N = number of nodes before the starting value
    if (!this.head) { // O(1)
      throw new Error('Cannot remove item from empty list');
    }
    if (this.head.value === value) { // O(1)
      this.head = this.head.next;
      return this;
    }
    let currentNode = this.head; // O(1)
    while (currentNode.next.value !== value) { // O(N), where N = number of nodes before the
      // specified value
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next; // O(1)
    return this;
  }

  map(callback) { // O(N) where N = number of nodes
    if (!this.head) { // O(1)
      throw new Error('List is empty');
    }
    const listCopy = JSON.parse(JSON.stringify(this)); // not sure about this one, quick google
    // search indicates possibly O(N) where N = number of characters
    let currentNode = listCopy.head; // O(1)
    while (currentNode) { // O(N) where N = number of nodes
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }
    return listCopy; // O(1)
  }

  reduce(callback, value) { // O(N) where N = number of nodes
    if (!this.head) { // O(1)
      throw new Error('List is empty');
    }
    const listCopy = JSON.parse(JSON.stringify(this)); // same as above, not sure
    let currentNode = listCopy.head; // O(1)
    let startingValue; // O(1)
    if (value) { // O(1)
      startingValue = value;
    } else {
      startingValue = currentNode.value;
      currentNode = currentNode.next;
    }
    while (currentNode) { // O(N) where N = number of nodes
      startingValue = callback(startingValue, currentNode.value);
      currentNode = currentNode.next;
    }
    return startingValue; // O(1)
  }
};
