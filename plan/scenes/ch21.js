// CH21 Brightfire — Saturday 1 to Sunday 2 May. The last good night, and the plan.
"use strict";
const LEADS = ["rowan", "imogen", "saoirse", "cas", "noor", "idris"];
module.exports = [
  // ---------------------------------------------------------------- stay
  {
    id: "CH21.BRIGHT.01", date: "2027-05-01", time: "20:00", place: "P37", cast: ["MC", "C20", "C08"], maybe: ["C07", "C01", "C02", "C03", "C04", "C05", "C06", "C19", "C43"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "Brightfire on the Candlestones: the bonfire in the ring of stones, may garlands, dancing round the fire, the whole school on the hill. The last good night.",
    next: "CH21.BRIGHT.02"
  },
  {
    id: "CH21.BRIGHT.02", date: "2027-05-01", time: "23:30", place: "P37", cast: ["MC"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "Away from the fire, among the standing stones, with whoever you love, or nearly: what they want, if they haven't said it yet, and together or not.",
    choices: LEADS.map((l) => ({ id: l, text: "Together, with " + l + ".", type: "relational", when: 'final_rel = "' + l + '"', set: { ["st_" + l]: 6, final_shape: "together" }, to: "CH21.PLAN.01" }))
      .concat(LEADS.map((l) => ({ id: l + "_part", text: "Not like this, with " + l + ".", type: "relational", when: 'final_rel = "' + l + '"', set: { final_shape: "parting" }, to: "CH21.PLAN.01" })))
      .concat([{ id: "single", text: "Nobody, and that's all right.", type: "relational", when: 'final_rel = ""', set: { final_rel: "single" }, to: "CH21.PLAN.01" }]),
    next: "CH21.PLAN.01"
  },
  {
    id: "CH21.PLAN.01", date: "2027-05-02", time: "11:00", place: "P25", cast: ["MC", "C08", "C33", "C19", "C45"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "The Weathervane Room: the plan for Midsummer. Mr Tully will do what Morrow asks, and leave the boathouse ward open, and the Order will be waiting. Where you stand: leading the song in the Hall, guarding the wren door in the cloisters, or at the boathouse with the trap.",
    choices: [
      { id: "hall", text: "The Hall.", type: "structural", set: { plan22: "hall" }, to: "CH22.PROVING.01" },
      { id: "cloisters", text: "The cloisters.", type: "structural", set: { plan22: "cloisters" }, to: "CH22.PROVING.01" },
      { id: "boathouse", text: "The boathouse.", type: "structural", set: { plan22: "boathouse" }, to: "CH22.PROVING.01" }
    ]
  },
  // ---------------------------------------------------------------- away
  {
    id: "CH21.AWAY.01", date: "2027-05-01", time: "21:00", place: "P40", cast: ["MC", "C34"], kind: "branch", when: 'order_offer = "leave"',
    purpose: "Brightfire on the Fen: a small fire on the bank with Jory Penrose and the cat, the drowned chapel's bell. Go back to Wrenfold for Midsummer against the Commander's orders, or stay where you were put.",
    choices: [
      { id: "back", text: "Go back for Midsummer.", type: "structural", set: { order_offer: "returned", plan22: "hall" }, to: "CH22.PROVING.01" },
      { id: "stay", text: "Stay on the Fen.", type: "structural", set: { ending: "H" }, to: "CH24.FEAST.01" }
    ]
  }
];
