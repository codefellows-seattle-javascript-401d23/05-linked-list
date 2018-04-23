# Lab 05: List Data Structure
**Author**: Jennifer Piper


These files provide a linked-list data structure. To install and use it, require the `linked-list.js` and `node.js` files in the file in which you will be using it.
For example, from the `/src` folder:

`const LinkedList = require('./lib/linked-list');`

`const Node = require('./lib/node');`

New nodes in the list are created using the Node class, taking one parameter: the node value:

`const node = new Node(value);`

New lists are created using the LinkedList class:

`const myList = new LinkedList();`

LinkedList objects can access the following methods:

`.insertAtHead(value)`
-Inserts the value at the start of the list.

`.insertAtEnd(value)`
-Inserts the value at the end of the list.

`.find(value)`
-Searches the list starting at the head and returns the first node containing that value. Returns null if the value is not found.

`.pop()`
-Removes the last node from the list and returns its value.

`.remove(value)`
-Searches the list starting at the head and removes the first node containing that value. Returns the new list with the value removed.



To run tests of this code, enter in the console:

`npm run test`

