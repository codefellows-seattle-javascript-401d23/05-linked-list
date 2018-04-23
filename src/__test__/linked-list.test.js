'use strict';

const LinkedList = require('../lib/linked-list');

const popList = new LinkedList();
popList.createNewListItem(1);
popList.createNewListItem(2);

const removeList = new LinkedList();
removeList.createNewListItem(2);
removeList.createNewListItem(1);

const longList = new LinkedList();
longList.createNewListItem(1);
longList.createNewListItem(2);
longList.createNewListItem(3);
longList.createNewListItem(4);
longList.createNewListItem(5);

const emptyList = new LinkedList();

const longTest = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const longPop = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

const testPop1 = {
  head: {
    value: 1,
    next: null,
  },
};

const testMap = {
  head: {
    value: 2,
    next: {
      value: 4,
      next: null,
    },
  },
};

const testMap2 = {
  head: {
    value: 3,
    next: {
      value: 6,
      next: null,
    },
  },
};

describe('testing map', () => {
  test('should remove correct value from list', () => {
    expect(popList.map(x => x * 2)).toEqual(testMap);
    expect(popList.map(x => x * 3)).toEqual(testMap2);
  });
  test('should err out for empty list', () => {
    expect(() => { emptyList.map(x => x); }).toThrow('List is empty');
  });
});

describe('testing reduce', () => {
  test('should remove correct value from list', () => {
    expect(popList.reduce((a, b) => a + b)).toEqual(3);
    expect(popList.reduce((a, b) => a + b, 5)).toEqual(8);
  });
  test('should err out for empty list', () => {
    expect(() => { emptyList.reduce((a, b) => a + b); }).toThrow('List is empty');
  });
});

describe('testing pop', () => {
  test('should remove last item in list', () => {
    expect(popList.pop()).toEqual(testPop1);
  });
  test('should empty list', () => {
    expect(popList.pop()).toEqual(emptyList);
  });
  test('should remove last item from long list', () => {
    expect(longList.pop()).toEqual(longPop);
  });
  test('should err out for empty list', () => {
    expect(() => { emptyList.pop(); }).toThrow('Cannot remove item from empty list');
  });
});

describe('testing remove', () => {
  test('should remove correct value from list', () => {
    expect(removeList.remove(2)).toEqual(testPop1);
  });
  test('should empty list', () => {
    expect(longList.remove(3)).toEqual(longTest);
  });
  test('should err out for empty list', () => {
    expect(() => { emptyList.remove(1); }).toThrow('Cannot remove item from empty list');
  });
});
