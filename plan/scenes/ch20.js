// CH20 The Wren's Song — Saturday 10 to Saturday 24 April. Gathering a choir of your own.
"use strict";
module.exports = [
  // ---------------------------------------------------------------- stay
  {
    id: "CH20.SONG.01", date: "2027-04-10", time: "19:00", place: "P22", cast: ["MC", "C02", "C06"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "Imogen and Idris with Hester's five voices spread over the long table: the wren's line to lead, and a voice kept in each roost, that each house has to sing for itself. You need people from all four houses. You have ten weeks.",
    next: "CH20.LARK.01"
  },
  {
    id: "CH20.LARK.01", date: "2027-04-12", time: "20:00", place: "P14", cast: ["MC", "C22", "C21"], maybe: ["C01"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "Larkspire Tower: the lark's voice, high and bright, in the stones of the balcony at dawn. Marcus and Flick, and who you can bring.",
    next: "CH20.OWL.01"
  },
  {
    id: "CH20.OWL.01", date: "2027-04-13", time: "22:00", place: "P15", cast: ["MC", "C27"], maybe: ["C02", "C06"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "The Owlcombe Stacks under the ceiling of real sky: the owl's voice, low and patient. Mina Achebe, who owes you six first-years.",
    next: "CH20.HERON.01"
  },
  {
    id: "CH20.HERON.01", date: "2027-04-14", time: "21:00", place: "P16", cast: ["MC", "C20", "C28", "C11"], maybe: ["C05", "C07"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "The Heronmere cloister, green light at the bottom of the lake: the heron's voice, still water. Priya first. The house that has lost the most.",
    next: "CH20.ROOK.01"
  },
  {
    id: "CH20.ROOK.01", date: "2027-04-15", time: "21:00", place: "P17", cast: ["MC", "C24", "C12"], maybe: ["C03", "C04"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "The Rookhallow Undercroft, forges and warm stone: the rook's voice, rough and clever. Hamish Galbraith and the makers.",
    next: "CH20.MAISIE.01"
  },
  {
    id: "CH20.MAISIE.01", date: "2027-04-18", time: "14:00", place: "P39", cast: ["MC", "C19", "C43"], maybe: ["C02", "C44"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "St Ide's with Mr Tully: Maisie's spark, and whether you can bring it up. Kit Sallow, if Imogen asks.",
    next: "CH20.CHOIR.01"
  },
  {
    id: "CH20.CHOIR.01", date: "2027-04-24", time: "23:00", place: "P29", cast: ["MC", "C19", "C08"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C20"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "The first full rehearsal in the Old Cloisters: every voice you've gathered, and the song ringing in the stone. Mr Tully brings Morrow's newest letter: Midsummer, the Proving, every lantern lit.",
    next: "CH21.BRIGHT.01"
  },
  // ---------------------------------------------------------------- away
  {
    id: "CH20.AWAY.01", date: "2027-04-17", time: "20:00", place: "P40", cast: ["MC", "C33", "C34"], kind: "branch", when: 'order_offer = "leave"',
    purpose: "Four weeks on the edge of Saltmarrow Fen with forty Lamplighters, waiting. Letters from Wrenfold. Morrow doesn't come. A letter from Mr Tully's stove drawer, forwarded: Midsummer, the Proving, every lantern lit. He was never going to follow you.",
    next: "CH21.AWAY.01"
  }
];
