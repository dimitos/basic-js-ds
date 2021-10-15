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
