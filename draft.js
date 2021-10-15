function add(val) {
  Object.keys(this.tree).length === 0 ? (this.tree = new Node(val)) : s(this.tree, val);
  function s(node, val) {
    if (node.data < val) {
      // to left
      if (node.left) {
        s(node.left, val);
      } else {
        node.left = new Node(val);
      }
    } else {
      // to right
      // if (node.right) {
      //   s(node.right, val);
      // } else {
      //   node.right = new Node(val);
      // }
    }
  }
}

function max() {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  return this.isTreeEmpty() ? null : this.getMax(this.#tree);

  // let n;
  // if (!this.isTreeEmpty()) {
  //   n = this.#tree.data;
  //   let r = this.#tree;
  //   while (r.right) {
  //     n = r.data;
  //     r = r.right;
  //   }
  // } else n = null;
  // return n;
}
