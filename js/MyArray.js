function MyArrayPrototype() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
  };
  this.forEach = function (func) {
    for (let index = 0; index < this.length; index++) {
      func(this[index]);
    }
  };
  this.some = function (func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index])) {
        return true;
      }
    }
    return false;
  };
  this.every = function (func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index]) === false) {
        return false;
      }
    }
    return true;
  };
  this.filter = function (func) {
    for (let index = 0; index < this.length; index++) {
      const newArr = new MyArray();
      if (func(this[index])) {
        newArr.push(this.index);
      }
    }
    return newArr;
  };
  this.map = function (func) {
    const newMapArr = new MyArray();
    for (let index = 0; index < this.length; index++) {
      newMapArr.push(func(this[index]));
    }
    return newMapArr;
  };
  
}

function MyArray() {
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
MyArray.prototype = new MyArrayPrototype();

const myArr = new MyArray();
myArr.push(12);
myArr.push(56);
