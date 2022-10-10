let polje = [3, 4, 5, 6];

function reverse(x) {
  let p = [];
  for (let i = x.length - 1; i >= 0; i--) {
    p.push(x[i]);
  }
  console.log(x, "->", p);
}

console.log(reverse(polje));
