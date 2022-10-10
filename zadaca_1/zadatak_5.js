let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function djeljenje(m) {
  for (let x of m) {
    if (x % 3 == 0) {
      console.log(x);
    }
  }
}
console.log(niz);
console.log("Brojevi djeljivi s 3: ");
console.log(djeljenje(niz));
