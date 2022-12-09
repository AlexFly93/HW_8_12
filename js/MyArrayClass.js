"use strict";

class MyArrayIterator {
  constructor(myArrayInstance) {
    this.myArrayInstance = myArrayInstance;
    this.currentIndexItem = 0;
  }
  next() {
    return {
      value: this.myArrayInstance[this.currentIndexItem],
      done: this.currentIndexItem > this.myArrayInstance.length,
    };
  }
}

class MyArrayClass {
  constructor() {
    this.length = 0;
    if (arguments.length === 1) {
      for (let i = 0; i < arguments[0]; i++) {
        this.push(undefined);
      }
      return;
    }
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  static isMyArrayClass(obj) {
    return obj instanceof MyArrayClass;
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
  }
  forEach(func) {
    for (let index = 0; index < this.length; index++) {
      func(this[index]);
    }
  }
  some(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index])) {
        return true;
      }
    }
    return false;
  }
  every(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index]) === false) {
        return false;
      }
    }
    return true;
  }
  filter(func) {
    for (let index = 0; index < this.length; index++) {
      const newArr = new MyArray();
      if (func(this[index])) {
        newArr.push(this.index);
      }
    }
    return newArr;
  }
  map(func) {
    const newMapArr = new MyArray();
    for (let index = 0; index < this.length; index++) {
      newMapArr.push(func(this[index]));
    }
    return newMapArr;
  }
  conscat(myInstance) {
    const result = new MyArrayClass();
    this.forEach((item) => {
      result.push(item);
    });

    return result;
  }
  flat(depth = 1) {
    let result = new MyArrayClass();
    this.forEach(() => {
      if (MyArrayClass.isMyArrayClass(item) && depth > 0) {
        result = result.concat(item.flat(depth - 1));
      } else if (item !== undefined) {
        result.push(item);
      }
    });
    return result;
  }
  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
}

function sum(...rest) {
  return rest.reduce((acc, item) => acc + item);
}
