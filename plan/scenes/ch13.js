// CH13 Home Between — Wednesday 23 December to Sunday 3 January. Christmas at home, or at school.
"use strict";
module.exports = [
  // ---------------------------------------------------------------- home
  {
    id: "CH13.HOME.01", date: "2026-12-23", time: "19:00", place: "P01", cast: ["MC", "C38"], kind: "branch", when: 'ch13_way = "home"',
    purpose: "7 Viaduct Street: how small and dear and strange it is. Dev comes round with a bag of cans and the gossip from work, and notices you're different, and doesn't ask. What you tell him.",
    next: "CH13.HOME.02"
  },
  {
    id: "CH13.HOME.02", date: "2026-12-25", time: "13:00", place: "P02", cast: ["MC", "C37"], kind: "branch", when: 'ch13_way = "home"',
    purpose: "Christmas Day at Nana Pearl's: the turkey the size of a small dog, Admiral, the Queen's-speech-equivalent, the snowing toffee tin. Nana's boiler has gone; she comes to stay at yours. She hums great-gran Ivy's washing-up tune, and it's the Wren's Song.",
    next: "CH13.HOME.03"
  },
  {
    id: "CH13.HOME.03", date: "2026-12-29", time: "23:30", place: "P01", cast: ["MC", "C37", "C36", "C34"], kind: "branch", when: 'ch13_way = "home"',
    purpose: "The Choir finds Viaduct Street. The streetlights go grey, the trains stop. You and Nana sing Ivy's tune at the window, two voices, and the thimble; you hold until Jory Penrose comes down the street with a lamp.",
    next: "CH13.HOME.04"
  },
  {
    id: "CH13.HOME.04", date: "2027-01-03", time: "16:00", place: "P11", cast: ["MC", "C37", "C07"], kind: "branch", when: 'ch13_way = "home"',
    purpose: "Platform Nought. Nana sees you off, and Toby's on the platform. You go back.",
    next: "CH14.CANDLE.01"
  },
  // ---------------------------------------------------------------- stay
  {
    id: "CH13.STAY.01", date: "2026-12-24", time: "19:00", place: "P13", cast: ["MC", "C03", "C06", "C05", "C08", "C19"], maybe: ["C04"], kind: "branch", when: 'ch13_way = "stay"',
    purpose: "Christmas Eve for forty at one table in the half-dark Hall. Who stayed and why: Saoirse never goes home, Idris has no one to go to, Noor won't leave the Infirmary, and Cas, if he didn't go back.",
    next: "CH13.STAY.02"
  },
  {
    id: "CH13.STAY.02", date: "2026-12-27", time: "22:00", place: "P12", cast: ["MC", "C03"], kind: "branch", when: 'ch13_way = "stay"',
    purpose: "A letter from Saoirse's mother. Saoirse takes her bike out across the frozen Mere in the dark. You go after her, or let her go and wait on the jetty.",
    next: "CH13.STAY.03"
  },
  {
    id: "CH13.STAY.03", date: "2026-12-30", time: "23:00", place: "P29", cast: ["MC", "C13"], maybe: ["C06"], kind: "branch", when: 'ch13_way = "stay"',
    purpose: "A night walk, following the warmth under the floor down into the Old Cloisters: a door with a wren carved on it, warm to the touch, and humming behind it. Professor Grey, in the dark, telling you to go back to bed.",
    next: "CH13.STAY.04"
  },
  {
    id: "CH13.STAY.04", date: "2027-01-03", time: "17:00", place: "P13", cast: ["MC", "C07"], kind: "branch", when: 'ch13_way = "stay"',
    purpose: "The boats come back. Toby, full of his mum's cooking. The Hall fills up again.",
    next: "CH14.CANDLE.01"
  }
];
