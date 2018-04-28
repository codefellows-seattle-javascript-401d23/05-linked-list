'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null; // points at the head...
  }
  // Runtime = O(1) where 1 is constant time  
  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }
  // Runtime = O(n) where n is the length of the list 
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
  // Runtime = O(n) where n is the length of the list
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
  // Runtime = O(n) where n is the length of the list
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
        console.log('this value', value);
        return value;
      }
      currentNode = currentNode.next;
    }
  }
  // Runtime = O(n^2) where n is the length of the list and ^2 because we are creating a deep copy of the list
  map(callback) {
    let currentNode = this.head;
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    const newList = new LinkedList();
    while (currentNode) {
      newList.append(currentNode.value);
      currentNode = currentNode.next;
    }
    let newCurrentNode = newList.head;
    while (newCurrentNode) {
      callback(newCurrentNode);
      newCurrentNode = newCurrentNode.next;
    }
    return newList;
  }
  // Runtime = O(n) where n is the length of the list
  remove(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    if (this.head.value === value) {
      const headValue = this.head.value;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
      return headValue;
    }
    let currentNode = this.head;
    
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        if (currentNode.next.next) {
          currentNode.next = currentNode.next.next;
        } else {
          currentNode.next = null;
        }  
        return value;
      }
      currentNode = currentNode.next;
    }
    throw new Error('__ERROR__ The value is not in the list.');
  }
};
