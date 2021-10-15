const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  #tree = {};
  root = () => (this.isTreeEmpty() ? null : this.#tree);
  add = (val) => (this.isTreeEmpty() ? (this.#tree = new Node(val)) : this.recAdd(this.#tree, val));

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // let n;
    // if (Object.keys(this.#tree).length !== 0) {
    // } else n = null;
    // return n;
  }

  isTreeEmpty = () => Object.keys(this.#tree).length === 0;
  recAdd = (node, val) => (node.data < val ? (node.left ? this.recAdd(node.left, val) : (node.left = new Node(val))) : node.right ? this.recAdd(node.right, val) : (node.right = new Node(val)));
};
