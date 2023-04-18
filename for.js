//ordenar la array de menor a mayor

function order() {
  let n = [4, 1, 30, 5, -1, 100, 2];
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (n[j] > n[j + 1]) {
        let temp = n[j];
        n[j] = n[j + 1];
        n[j + 1] = temp;
      }
    }
  }
  return n;
}
console.log(order());
