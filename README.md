## Lab-05: LinkedList class

**Author**: Daniel Shelton
**Version**: 1.0.2

## Overview
This application creates a LinkedList class with multiple of prototype methods on it accompanied with a TDD test suite setup.

## Architecture
The main point of entry of this application is the index.js file which transpiles the app by utilizing the babel library. This application also utilizes multiple NPM libraries and .travis.yml for its CI. The 'lib' directory contains all the helper modules such as the Node and LinkedList class constructors. The '__test__' directory contains the testing suite.

## Data Structure
    - linked-list.js requires node.js and main.js requires linked-list.js.
    - A new Linkedlist can be instantiated from main.js which creates a new Node instance from the value passed in. Most methods on a LinkedList take in either 1 or 0 parameters, the map method mimics Array.prototype.map which has 4 parameters.
    - Require the appropriate files in the __test__ suite test files to run tests.


## Change Log

04-22-2018 4:59pm - Application now has a fully-functional test suite and Node class constructor.
04-22-2018 10:00 - Application finished with exception of map method

## Credits and Collaborations
