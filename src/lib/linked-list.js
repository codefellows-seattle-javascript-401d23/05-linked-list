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
//I have test done on this one!

  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      //Josh the While loop makes sure that there is a .next
      currentNode = currentNode.next;
      // the above line is what actually moves from one node to another.
    }
    currentNode.next = node;
    // this is what sets our new value.
    return this;
  }
  //I have a test on this one!

  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
//No list it will throw an error
    if (this.head.value === value) {
         return this.head.value;
    }
    //if the head is the value we are looking for the # will stop.
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next.value;
      }
      // the while loop will run until it finds the value
      currentNode = currentNode.next;
    }
    return null;
  }

  // linkedListPop(value) {
  //
  //   if(!this.head) {
  //     throw new Error('__ERROR__ The list is empty');
  //   }
  //
  //   let currentNode = this.head;
  //   while (curretNode.next)
  //
  //   }
  // }
};
