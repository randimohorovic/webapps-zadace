function compare(x, y) {
  if (JSON.stringify(Object.keys(x)) === JSON.stringify(Object.keys(y)))
    return true;
  else return false;
}

let x = { name: "randi", year: "2002" };

let y = { name: "Endi", year: "1997" };

console.log(x, " , ", y, " -> ", compare(x, y));
