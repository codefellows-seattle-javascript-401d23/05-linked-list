# Lab 05 - Linked Lists
**Author**: Carl Olson
**Version**: 1.0.0 

## Overview
This lab focused on writing methods for a linked list constructor and then testing those methods with jest using TDD.

* The pop() method removes the last node of the linked list:
```
pop() {
  if (!this.head) return null;
  let currentNode = this.head;

  while (currentNode.next.next !== null) {
    currentNode = currentNode.next;
  }

  currentNode.next = null;
  return this;
}
```

* The remove(value) method removes a node that has the corresponding value:
```
remove(value) {
  if (!this.head) return null;
  if (this.head.value === value) {
    this.head = this.head.next;
  }

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
```

* The map() method takes a callback and performs that function on each node:
```  
map(callback) {
  if (!this.head) return null;
  let currentNode = this.head;
  
  while (currentNode) {
    currentNode.value = callback(currentNode.value);
    currentNode = currentNode.next;
  }

  return this;
}
```

## Getting Started
Install dependencies and create files. 
Create lib, assets, and __test__ directories and files. 
Write code and tests.

## Architecture
This lab used JavaScript, Node, Babel, ESLint, Jest. 

## Change Log
04-21-2018 8:30pm - Setup files and directories. Started writing tests and creating constructor/methods. 
04-22-2018 8:00pm - Fixed map method that wasn't passing tests (needed to assign the value of the callback(value) to the currentNode.value). All tests passing. 
04-22-2018 10:00pm - Implemented travis (not mentioned in LAB.md but figured I should use it). Updated README. 

## Credits and Collaborations
I consulted with my classmate Kris. 