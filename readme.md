##  Documentation

In your README, write documentation for you data structures
  *your documentation should includes code block examples
  *provide instructions for:
    -installing and using your data structure
    -accessing each method
    -running your tests


## Objective

Modules Check List
-[x] implement a LinkedList class
-[x] implement a pop() on the List prototype
-[x] implement a remove(value) on the prototype
-[x] implement map() or reduce() as pure methods on the List prototype
-[x] in comments above or within each function, note the Big-O runtime

Testing Checklist
-[x] write at least three test assertions for each method of the List Data Structure
-[x] organize your tests into appropriate describe/it blocks for test output readability


## Explanation

There are two exported modules in the codebase `linked-list` and `node`. The `node` module exports a constructor for a node block of information. This is the data that is "linked" in `linked-list`. The `node` module is a class constructor that takes a value and assigns it to the  `.value` property and has a `.next` property that allows the node to connect to other nodes in a list.

The `linked-list` module is the meat of this code base. It too is a class constructor with a property of `head` assigned to `null` because as a single node the `head` is also the `end` and therefore is equal to `null`. This class has three methods, `insertAtHead`, `insertAtEnd` & `search`. The `inserAtHead` method acts like a `.pop()` for arrays, but `linked-lists` are not arrays. 