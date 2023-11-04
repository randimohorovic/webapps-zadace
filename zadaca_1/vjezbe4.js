import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

var tempStorage = [12, 15, 12];
app.get("/vratiSvekorisnike", (req, res) => {
  console.log(tempStorage);
  res.send(tempStorage); // bez ovog idalje dobim ispis
});
app.post("/dodajKorisnika", (req, res) => {
  var data = req.body;
  console.log(data);
  var { ime } = req.body;
  console.log(ime);
  tempStorage.push(data);
  res.send(tempStorage);
}); // create se radi sa app post

app.patch("/urediKorisnika/:id", (req, res) => {
  var { id } = req.params;
  console.log(id);
  res.send(id);
}); //sluzi za updejtat stvari

//  # definiramo rutu u url koja ce se koristi gdje ce se to nesto moc dohvatit
app.listen(port, () => console.log(`Works on port ${port}`));
