const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  #tree = null;

  root = () => this.#tree;

  add = (data) => (!this.#tree ? (this.#tree = new Node(data)) : this.recAdd(this.#tree, data));
  recAdd(node, data) {
    if (node.data > data && node.left === null) {
      node.left = new Node(data);
    } else if (node.data < data && node.right === null) {
      node.right = new Node(data);
    } else if (node.data > data) {
      this.recAdd(node.left, data);
      node = node.left;
    } else {
      this.recAdd(node.right, data);
    }
  }

  min = () => (this.#tree ? this.getMin(this.#tree) : null);
  getMin = (node) => (node.left ? this.getMin(node.left) : node.data);

  max = () => (this.#tree ? this.getMax(this.#tree) : null);
  getMax = (node) => (node.right ? this.getMax(node.right) : node.data);

  has = (data) => this.find(data) !== null;

  find = (data, node = this.#tree) => {
    while (node) {
      if (data > node.data) {
        node = node.right;
      } else if (data < node.data) {
        node = node.left;
      } else return node;
    }
    return null;
  };

  remove = (data, node = this.#tree) => {
    if (!node) return null;
    if (data < node.data) {
      //налево
      node.left = this.remove(data, node.left);
      return node;
    } else if (data > node.data) {
      //направо
      node.right = this.remove(data, node.right);
      return node;
    } else {
      // есть ли null у left right
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      node.data = this.minNode(node.right);
      node.right = this.remove(node.data, node.right);
      return node;
    }
  };
  minNode = (node) => (node.left === null ? node.data : this.minNode(node.left));
};
