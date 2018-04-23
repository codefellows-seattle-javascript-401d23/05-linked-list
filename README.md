# Linked List and methods
**Author**: Sarah B
**Version**: 1.0.0 

## Overview
This module creates a linked list and provides 4 methods to work with the list
## Getting Started
- clone this repo
- install node and dependencies
- cd into the src folder
- run node 
- require in the linked-list module (let list = require (./linked-list))
- in the CLI--
- let newlist = new LinkedList();
- newList.insertAtHead(value); -- to insert a value at the head of the list
- newList.insertAtEnd(value); -- to insert a value at the end of the list
- newList.remove(value); -- to remove the value in the list (it will remove all matching values)
- newList.map(function); -- runs a function over each value in the linked list and returns an array of the changed values
(for example if newList.head.value === 1 and newList.head.next.value === 2, then you ran newList.map(value=>value+1); the funtion would return [2, 3] )
- the linked list can be navigated using dot notation
- newList.head.value-- returns the value at the head(start) of the list
- newList.head.next.value--returns the value of the next node in the list, etc.

## Architecture
This application uses the node runtime environment and node package manager. It was tested using jest.

## Change Log
4-22-2018 -- the Linked List module passes all tests and has an insertAtHead, insertAtEnd, remove and map methods.

-->
