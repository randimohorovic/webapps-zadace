function pretvorba(x) {
  let h = x / 60;
  let m = x % 60;

  return x + " -> " + "Ovo je " + h + " sata i " + m + " minuta";
}

console.log(pretvorba(120));
