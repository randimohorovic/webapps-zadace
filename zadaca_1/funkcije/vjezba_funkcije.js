let b = {
  ime: "Randi",
  prezime: "Mohorovic",
  ispit: ["web app", "programsko"],
};

// nacini pozivanja fnkcija
//1.

function get_name(student, span) {
  return student.ime + span + student.prezime;
}
let c = get_name(b, "-");

console.log(c);

//2 nacin bezimena funckija spremljena u varijablu
spoji = function (student, span) {
  return student.ime + span + student.prezime;
};
let c1 = spoji(b, "-");
console.log(c1);

//3 nacin arrow funkcija bezimena

let spoji3 = (student, span) => student.ime + span + student.prezime;
let c2 = spoji3(b, "-");
console.log(c2);

//4 nacin funkc kao dio objekta
let objekt_s_funkcijom = {
  ime: "Randi",
  prezime: "Mohorović",
  ispiti: ["Web aplikacije", "Programsko"],
  spoji: function (span) {
    return this.ime + span + this.prezime;
  },
};
let c3 = objekt_s_funkcijom.spoji(">>");
console.log(c3);

//4 nacin funkc kao dio objekta arrow funkc
let objekt_s_funkcijom2 = {
  ime: "Randi",
  prezime: "Mohorović",
  ispiti: ["Web aplikacije", "Programsko"],
  spoji: (span) => this.ime + span + this.prezime,
};
let c4 = objekt_s_funkcijom2.spoji(">>");
console.log(c4);

// ASINKRONE FN
async function spoji_ime_prezime_a(student, spojka) {
  return student.ime + spojka + student.prezime;
}
let spoji2a = async function (student, spojka) {
  return student.ime + spojka + student.prezime;
};
let spoji3a = async (student, spojka) => student.ime + spojka + student.prezime;
let objekt_s_funkcijom_a = {
  ime: "Marko",
  prezime: "Marić",
  ispiti: ["Web aplikacije", "Programsko"],
  spoji: async function (spojka) {
    return this.ime + spojka + this.prezime;
  },
};
let objekt_s_funkcijom_3a = {
  ime: "Marko",
  prezime: "Marić",
  ispiti: ["Web aplikacije", "Programsko"],
  async spoji(spojka) {
    return this.ime + spojka + this.prezime;
  },
};
let objekt_s_funkcijom_3_a = {
  ime: "Marko",
  prezime: "Marić",
  ispiti: ["Web aplikacije", "Programsko"],
  spoji: async (spojka) => this.ime + spojka + this.prezime,
};
