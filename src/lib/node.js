'use strict';

// questions: is constructor a keyword?

module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};
