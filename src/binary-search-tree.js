const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  #tree = null;
  root = () => this.#tree;
  add = (data) => (!this.#tree ? (this.#tree = new Node(data)) : this._recAdd(this.#tree, data));
  min = (node = this.#tree) => (node ? (node.left ? this.min(node.left) : node.data) : null);
  max = (node = this.#tree) => (node ? (node.right ? this.max(node.right) : node.data) : null);
  has = (data) => this.find(data) !== null;
  find = (data, node = this.#tree) => {
    while (node) {
      if (data > node.data) node = node.right;
      else if (data < node.data) node = node.left;
      else return node;
    }
    return null;
  };

  remove = (data, node = this.#tree) => {
    if (!node) return null;
    if (data < node.data) {
      // налево
      node.left = this.remove(data, node.left);
      return node;
    } else if (data > node.data) {
      // направо
      node.right = this.remove(data, node.right);
      return node;
    } else {
      // есть ли null у left right
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      node.data = this._minNode(node.right);
      node.right = this.remove(node.data, node.right);
      return node;
    }
  };

  _recAdd(node, data) {
    if (node.data > data && node.left === null) {
      node.left = new Node(data);
    } else if (node.data < data && node.right === null) {
      node.right = new Node(data);
    } else if (node.data > data) {
      this._recAdd(node.left, data);
      node = node.left;
    } else {
      this._recAdd(node.right, data);
    }
  }

  _minNode = (node) => (node.left === null ? node.data : this._minNode(node.left));
};
