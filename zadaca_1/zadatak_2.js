//Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]
//Ispis : 53 -> “53 nije unutar [100,150000]”

function ispis(x) {
  if (x > 100 && x < 150000) console.log("broj ", x, " je unutar [100,150000]");
  else console.log("broj ", x, " nije unutar [100,150000]");
}
let x = 56;
ispis(x);
