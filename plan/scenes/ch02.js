// CH02 Lamplight Row — the small hours of Friday 11 September, in the city of Kingsmere.
"use strict";
module.exports = [
  {
    id: "CH02.ROW.01", date: "2026-09-11", time: "02:11", place: "P05", cast: ["MC", "C07"], kind: "common",
    purpose: "Lamplight Row at two in the morning, all shops open. Toby Quill falls out of a doorway behind you, smelling of burnt croissant.",
    next: "CH02.NEST.01"
  },
  {
    id: "CH02.NEST.01", date: "2026-09-11", time: "02:40", place: "P06", cast: ["MC", "C07", "C29", "C02", "C01", "C03"], kind: "common",
    purpose: "The Wren's Nest: Mr Fitch and his forms, the Hester grant, the list. Imogen reading the handbook; Rowan setting off the brass alarm bird with his heat; Saoirse wheeling a motorbike through a doorway that isn't meant for it.",
    next: "CH02.WAND.01"
  },
  {
    id: "CH02.WAND.01", date: "2026-09-11", time: "03:30", place: "P07", cast: ["MC", "C30", "C07"], maybe: ["C01"], kind: "common",
    purpose: "Pellow & Daughters: the wand chooses the hand. Toby's first wand explodes a drawer. When yours warms, every candle in the shop leans towards you, and Odile Pellow notices.",
    next: "CH02.ROBES.01"
  },
  {
    id: "CH02.ROBES.01", date: "2026-09-11", time: "04:40", place: "P08", cast: ["MC", "C31", "C03"], kind: "common",
    purpose: "Hask & Needle: the gossiping tape measure; Saoirse and her bike; robes without colours yet.",
    next: "CH02.MENAGERIE.01"
  },
  {
    id: "CH02.MENAGERIE.01", date: "2026-09-11", time: "05:30", place: "P09", cast: ["MC", "C32"], maybe: ["C01", "C07"], kind: "common",
    purpose: "The Menagerie: you choose a familiar, or it chooses you. You name it.",
    next: "CH02.ALLEY.01"
  },
  {
    id: "CH02.ALLEY.01", date: "2026-09-11", time: "06:20", place: "P05", cast: ["MC", "C07", "C01", "C34"], kind: "common",
    purpose: "Dawn: three grey hoods in a side alley, humming. Every lamp on the Row gutters and leans away. Your chest goes cold. Rowan steps in front of Toby. A young Lamplighter, Jory Penrose, moves everyone on too fast.",
    next: "CH02.LADLE.01"
  },
  {
    id: "CH02.LADLE.01", date: "2026-09-11", time: "07:00", place: "P10", cast: ["MC", "C07", "C01", "C02", "C03"], kind: "common",
    purpose: "Breakfast at the Lamp & Ladle: soup at seven in the morning, what Imogen read about the Grey Choir, who you sit beside. Sleep in the inn until the train.",
    next: "CH03.TRAIN.01"
  }
];
