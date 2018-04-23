'use strict';

const Node = require('./node');

module.exports = class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) { //Big O(n)
        const node = new Node(value);
        console.log(node);

        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
            return this;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.tail = currentNode.next;
        this.length++;

        return this;
    }

    pop() { //Big O(n)
        if(this.length === 0) {
            return undefined;
        }

        let currentNode = this.head;
        if (!currentNode.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return currentNode;
        }
        while(currentNode.next) {
            if (currentNode.next === this.tail) {
                this.tail = currentNode;
                currentNode.next = null;
                this.length--;
                return this;
            }
            currentNode = currentNode.next;
        }

        return this;
    }

    remove(value) { //Big O(n)
        if (!this.head) {
            return undefined;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            if (currentNode.value === value) {
                this.head = this.head.next;
                this.length--;
                return this;
            }
            if (currentNode.next.value === value) {
                if (!currentNode.next.next) {
                    this.tail = currentNode;
                }
                currentNode.next = currentNode.next.next;
                this.length--;
                return this;
            }
            currentNode = currentNode.next;
        }

        return this;
    }

};

    Object.prototype.map = function(callback) { //Big O(n)
    if (this === null) { //Linked List cannot be null
        return undefined;
    }
    if (typeof callback !== 'function') { //the callback parameter has to be a function
        return undefined;
    }
    if (arguments.length > 1) { //identifies additional parameters if they exist
        var arg = arguments[1];
    }

    //Converts the Linked List values into an array
    let currentNode = this.head;
    let tempArray = [this.head.value];
    for (let i = 1; currentNode.next; i++) {
        tempArray[i] = currentNode.next.value;
        currentNode = currentNode.next;
    }

    Object.defineProperty(tempArray, counter, { //allows for values to be overwritten
      value: mappedValue,
      writable: true,
      enumerable: true,
      configurable: true
    });

    /*Each loop assigns the tempArray current value to counterValue, then the mappedValue   state is saved, then the tempArray current value is assigned mappedValue as mappedValue is a defined property of tempArray, finally, the counter increments by 1.*/
    var len = tempArray.length;
    var counter = 0;
    while (counter < len) {
        var counterValue, mappedValue;
            counterValue = tempArray[counter];
            mappedValue = callback.call(arg, counterValue, counter, tempArray);
            tempArray[counter] = mappedValue;
            counter++;
    }

    //Reassigns values from the modified tempArray back into the LinkedList.
    currentNode = this.head;
    for (let i = 0; i < len; i++) {
        currentNode.value = tempArray[i];
        currentNode = currentNode.next;
    }

    return this;
    };

