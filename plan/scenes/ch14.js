// CH14 Candlewake — Monday 1 to Tuesday 2 February. The festival of first light.
"use strict";
module.exports = [
  {
    id: "CH14.CANDLE.01", date: "2027-02-01", time: "19:00", place: "P19", cast: ["MC", "C10", "C07", "C02"], maybe: ["C01", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "Making Candlewake candles in the Brewing Cellars: beeswax and a thread of your own flame. Yours burns white; Professor Kovač says nothing, once. Imogen: the other voices of the Wren's Song aren't in the carol book; they're in Hester Wren's journal, missing from the Stacks since 1986.",
    next: "CH14.IDRIS.01"
  },
  {
    id: "CH14.IDRIS.01", date: "2027-02-01", time: "23:30", place: "P22", cast: ["MC", "C06"], kind: "common",
    purpose: "Idris in the restricted cage at night. If you're close, he shows you what he's been studying: Aldric Morrow's school file, which he took from the Stacks himself, and why he's studied Kindlers since his mother was hollowed. If not, you see him hide it.",
    next: "CH14.CANDLE.02"
  },
  {
    id: "CH14.CANDLE.02", date: "2027-02-02", time: "06:30", place: "P12", cast: ["MC", "C07"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C08"], kind: "common",
    purpose: "Dawn: four hundred candles carried across the frozen Mere. Who you walk beside, and what they tell you (Rowan admits he's afraid; Noor falls apart). Who you give your candle to.",
    next: "CH14.HALL.01"
  },
  {
    id: "CH14.HALL.01", date: "2027-02-02", time: "08:30", place: "P13", cast: ["MC", "C19", "C13", "C33"], maybe: ["C07"], kind: "common",
    purpose: "Candlewake breakfast, candles on every table. Professor Grey leaves one at Delphine's empty place. Mr Tully's candle for Maisie, and what someone has promised him. Arkwright: the Glimmer Cup will go ahead.",
    next: "CH15.CUP.01"
  }
];
