// CH22 Midsummer Eve — Sunday 20 June. The Proving, and the Choir's assault.
"use strict";
module.exports = [
  {
    id: "CH22.PROVING.01", date: "2027-06-20", time: "20:00", place: "P13", cast: ["MC", "C08", "C33", "C13"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C20", "C34", "C42"], kind: "common", allowDead: true,
    purpose: "The Midsummer Proving: every student lights their own lantern and lets it go up among the ten thousand. The dead walk at Midsummer: Magnus Grey's ghost at the staff table, Lettice Crane by the doors. If you came back from the Fen, you arrive with Jory, late.",
    next: "CH22.HALL.01"
  },
  {
    id: "CH22.HALL.01", date: "2027-06-20", time: "23:00", place: "P13", cast: ["MC", "C08"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C20"], kind: "branch", when: 'plan22 = "hall"',
    purpose: "Eleven o'clock in the Hall: every lantern gutters at once. The hum. You stand up at the front and sing the wren's line, and the houses come in.",
    next: "CH22.CLOISTERS.01"
  },
  {
    id: "CH22.CLOISTERS.01", date: "2027-06-20", time: "23:00", place: "P29", cast: ["MC", "C06"], maybe: ["C04", "C03"], kind: "branch", when: 'plan22 = "cloisters"',
    purpose: "Eleven o'clock at the wren door: the Choir comes down the east stair. You hold the passage with Idris and the Order, and hear the song start without you, far above.",
    next: "CH22.BOATHOUSE.01"
  },
  {
    id: "CH22.BOATHOUSE.01", date: "2027-06-20", time: "23:00", place: "P12", cast: ["MC", "C33", "C19", "C35"], maybe: ["C01"], kind: "branch", when: 'plan22 = "boathouse"',
    purpose: "Eleven o'clock at the boathouse: Tully opens the ward, the Choir comes up out of the water, and Aldric Morrow looks at you for the first time. The trap springs, and he walks through it.",
    next: "CH22.SONG.01"
  },
  {
    id: "CH22.SONG.01", date: "2027-06-20", time: "23:30", place: "P13", also: ["P29", "P12"], cast: ["MC", "C08", "C35"], kind: "common",
    purpose: "The Wren's Song in the Hall: whether it holds depends on the choir you gathered. Morrow walks through the song to the wren door, and goes down to the root, and you follow.",
    next: "CH23.ROOT.01"
  }
];
