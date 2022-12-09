"use strict";

class LinkedListIterator {
  constructor() {
    this.list = list;
    this.currentItem = null;
  }
  next() {
    this.currentItem = this.currentItem
      ? this.currentItem.next
      : this.list.head;
    return {
      value: this.currentItem ? this.currentItem.value : undefined,
      done: !this.currentItem,
    };
  }
}

class ListItem {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

class LinkedList {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const value of args) {
      this.push(value);
    }
  }
  push(value) {
    const instanceListItem = new ListItem(value);
    if (this.length === 0) {
      this.head = instanceListItem;
      this.tail = instanceListItem;
    } else {
      this.tail.next = instanceListItem;
      instanceListItem.prev = this.tail;
      this.tail = instanceListItem;
    }
    return ++this.length;
  }
    [Symbol.iterator]() {
      return new LinkedListIterator(this)
  }
}

const list = new LinkedList(1, 2, true, "qwe", null, { prop: 12 });
