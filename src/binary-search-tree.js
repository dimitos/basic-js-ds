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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min = () => (this.#tree ? this.getMin(this.#tree) : null);
  getMin = (node) => (node.left ? this.getMin(node.left) : node.data);

  max = () => (this.#tree ? this.getMax(this.#tree) : null);
  getMax = (node) => (node.right ? this.getMax(node.right) : node.data);
};
