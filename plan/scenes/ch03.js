// CH03 The Lantern Hall — Friday 11 September, dusk to midnight.
"use strict";
const ROOST = (house, id, place, prefect, extra, maybe) => ({
  id, date: "2026-09-11", time: "23:10", place, cast: ["MC"].concat(prefect ? [prefect] : [], extra || []), maybe: maybe || [], kind: "branch", when: `house = "${house}"`,
  purpose: `Your common room: the ${house} roost, the prefect, your bed, {fam_name}, and the first night.`,
  next: "CH04.WORD.01"
});
module.exports = [
  {
    id: "CH03.TRAIN.01", date: "2026-09-11", time: "17:30", place: "P11", cast: ["MC", "C07", "C01", "C02", "C03", "C04"], kind: "common",
    purpose: "Platform Nought and the Lantern Train. A compartment with the four from the Row. Casimir Drummond takes Toby's seat with a sneer about late flames; what you do about it.",
    next: "CH03.MERE.01"
  },
  {
    id: "CH03.MERE.01", date: "2026-09-11", time: "20:30", place: "P12", cast: ["MC", "C07", "C19"], maybe: ["C01", "C02", "C03"], kind: "common",
    purpose: "The halt in the hills, the Lanternwarden with his taper, the boats that row themselves across the black Mere, and the castle with ten thousand lanterns rising over it.",
    next: "CH03.HALL.01"
  },
  {
    id: "CH03.HALL.01", date: "2026-09-11", time: "21:00", place: "P13", cast: ["MC", "C07", "C01", "C02", "C03", "C04", "C08", "C09", "C19"], kind: "common",
    purpose: "The Lantern Hall. The Nesting: each new student lights a lantern from Tully's taper and lets it go, and it flies to a roost. You can lean it.",
    choices: [
      { id: "lark", text: "Lean it towards the gold roost.", type: "expressive", to: "CH03.FEAST.01", set: { house: "larkspire" } },
      { id: "owl", text: "Lean it towards the plum roost.", type: "expressive", to: "CH03.FEAST.01", set: { house: "owlcombe", cas_house: "rookhallow" } },
      { id: "heron", text: "Lean it towards the green roost.", type: "expressive", to: "CH03.FEAST.01", set: { house: "heronmere" } },
      { id: "rook", text: "Lean it towards the copper roost.", type: "expressive", to: "CH03.FEAST.01", set: { house: "rookhallow", cas_house: "owlcombe" } }
    ]
  },
  {
    id: "CH03.FEAST.01", date: "2026-09-11", time: "21:45", place: "P13", cast: ["MC", "C07", "C05", "C06", "C08", "C09"], maybe: ["C01", "C02", "C03", "C04", "C21"], kind: "common",
    purpose: "The feast. The Headmistress's speech: welcome, the Burning Year, and one warning. Noor at the Heronmere table; Idris watching you from the Owlcombe table.",
    choices: [
      { id: "lark", text: "(Larkspire)", type: "structural", to: "CH03.LARK.01", when: 'house = "larkspire"' },
      { id: "owl", text: "(Owlcombe)", type: "structural", to: "CH03.OWL.01", when: 'house = "owlcombe"' },
      { id: "heron", text: "(Heronmere)", type: "structural", to: "CH03.HERON.01", when: 'house = "heronmere"' },
      { id: "rook", text: "(Rookhallow)", type: "structural", to: "CH03.ROOK.01", when: 'house = "rookhallow"' }
    ]
  },
  ROOST("larkspire", "CH03.LARK.01", "P14", "C21", ["C01", "C22"]),
  ROOST("owlcombe", "CH03.OWL.01", "P15", "C27", ["C02", "C06"]),
  ROOST("heronmere", "CH03.HERON.01", "P16", "C25", ["C07", "C05", "C28"]),
  ROOST("rookhallow", "CH03.ROOK.01", "P17", "C24", ["C03", "C26"])
];
