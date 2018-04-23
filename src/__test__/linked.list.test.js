'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.test.js', () => {
    describe('LinkedList', () => {
    test('#constructor', () => {
        const testList = new LinkedList();
        expect(testList.head).toBeNull();
    });
    test('#push, should insert value into empty LinkedList.', () => {
        const testList = new LinkedList();
        testList.push(1);
        expect(testList.head.value).toEqual(1);
    });
    test('#push, should accurately keep track of tail property.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        expect(testList.tail.value).toEqual(2);
    });
    test('#push, should accurately keep track of the length property.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2)
        expect(testList.tail.value).toEqual(2);
    });
    test('#pop, should return undefined on an empty LinkedList.', () => {
        const testList = new LinkedList();
        expect(testList.pop()).toEqual(undefined);
    });
    test('#pop, should accurately keep track of the length property.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.pop();
        expect(testList.length).toEqual(0);
    });
    test('#pop, should accurately keep track of the tail property.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        testList.push(3);
        testList.pop();
        expect(testList.tail.value).toEqual(2);
    });
    test('#remove, should remove the selected value from the LinkedList.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        testList.push(3);
        testList.remove(2);
        expect(testList.head.next.value).toEqual(3);
    });
    test('#remove, should accurately keep track of length property', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        testList.push(3);
        testList.remove(2);
        expect(testList.length).toEqual(2);
    });
    test('#remove, should accurately keep track of the tail property.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        testList.push(3);
        testList.remove(3);
        expect(testList.tail.value).toEqual(2);
    });
    test('#map, should apply a callback to first function.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        testList.push(3);
        testList.map(x => x * 15)
        expect(testList.head.value).toEqual(15);
    });
    test('#map, should apply a callback to last function.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        testList.push(3);
        testList.map(x => x * 15)
        expect(testList.tail.value).toEqual(45);
    });
    test('#map, should apply a callback to all function.', () => {
        const testList = new LinkedList();
        testList.push(1);
        testList.push(2);
        testList.push(3);
        testList.map(x => x * 15)
        expect(testList.head.next.value).toEqual(30);
    });

    });
});