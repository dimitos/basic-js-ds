class Stack {
  constructor() {
    this.newArr = [];
  }
  push = (el) => this.newArr.push(el);
  pop = () => this.newArr.pop();
  peek = () => this.newArr[this.newArr.length - 1];
}

const st = new Stack();
st.push(5);
st.push(6);
st.push(7);

console.log(st.newArr);
console.log(st.peek());
console.log(st.pop());
console.log(st.peek());
