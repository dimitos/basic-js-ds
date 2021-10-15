class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

let arr = convertArrayToList([3, 1, 2, 3, 4, 5]);
sss(arr);

function sss(arr) {
  console.log(arr.value, arr.next);
  if (arr.next) {
    sss(arr.next);
  }
}

// let newArr = [];
// rrr(arr);
// function rrr(arr) {
//   newArr.push(arr.value);
//   if (arr.next) {
//     rrr(arr.next);
//   }
// }

// console.log(newArr.filter((el) => el !== 3));

// arr = convertArrayToList(newArr.filter((el) => el !== 3));
// sss(arr);

let s = arr;
if (arr.value === 3) arr.value = arr.next;

// for (let key in s) {
//   if (key.next.value === '3') {
//     key.next = key.next.next;
//   }
//   s = key.next;
// }

while (s.next) {
  s.next.value === 3 ? (s.next = s.next.next) : false;
  s = s.next;
}

sss(arr);

function removeKFromList(l, k) {
  return l.filter((el) => el !== k);

  // for (let i = 0; i < l.length; i++) {
  //   if (l[i] !== k) s.push(l[i]);
  // }

  // let s = [];
  // l.map(el=> {if(el!==k) s.push(el)})
  // return s;
}

// console.log(convertArrayToList([3, 1, 2, 3, 4, 5]));
