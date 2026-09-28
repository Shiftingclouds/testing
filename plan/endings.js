// Wrenfold: the endings (docs/01-story.md) and the CH24 epilogue passages. Every passage has a condition over the final
// state; tools/plan-check.js checks each slot gets exactly one passage on every walk. Passages are added with CH24.
"use strict";

const endings = [
  { id: "A", name: "The Heartfire Holds", core: "The Wren's Song holds the Hall; you keep the Heartfire from Morrow; the Order takes him. The school stands, and you keep your flame." },
  { id: "B", name: "Every Lantern Lit", core: "You relight Morrow's own flame. He becomes a tired old man who can light a candle; the hollowed can be relit, slowly. It costs you most of your fire." },
  { id: "C", name: "The Cold Hall", core: "You let the Heartfire go out rather than let him take it. The wards fall; Wrenfold must move. Everyone lives." },
  { id: "D", name: "The Last Lantern", core: "You give your own flame to relight the Heartfire. Wrenfold stands. You go home to Wrexley without magic, remembering everything." },
  { id: "E", name: "The Grey Road", core: "You take the Heartfire yourself." },
  { id: "F", name: "The Order's Oath", core: "Morrow escapes into the Fen. You leave with the Lamplighters to hunt him." },
  { id: "G_T", name: "What We Could Save: Toby", core: "You couldn't stop him, only choose who came out of the root alive. Toby." },
  { id: "G_M", name: "What We Could Save: Maisie", core: "You couldn't stop him, only choose who came out of the root alive. Maisie Tully." },
  { id: "G_K", name: "What We Could Save: the Headmistress", core: "You couldn't stop him, only choose who came out of the root alive. Imelda Kestrel." },
  { id: "H", name: "The Road Not Taken", core: "You left before Midsummer. You read about it afterwards." }
];

const passages = [];
function passage(slot, id, when, summary) { passages.push({ slot, id, when, summary }); }
const LEADS = ["rowan", "imogen", "saoirse", "cas", "noor", "idris"];
// 1. the anchor: one per ending
passage("anchor", "ANC_A", 'ending = "A"', "The Lantern Hall a year on: the Proving, the song sung by the new first-years, Morrow in the Order's keeping.");
passage("anchor", "ANC_B", 'ending = "B"', "St Ide's a year on: you and Idris relighting the hollowed, one a week; an old man in a cottage who can light a candle.");
passage("anchor", "ANC_C", 'ending = "C"', "The new Wrenfold, a year on, in a borrowed house: every lantern lit by hand.");
passage("anchor", "ANC_D", 'ending = "D"', "Viaduct Street a year on, without magic, remembering everything, and your friends at the door.");
passage("anchor", "ANC_E", 'ending = "E"', "A year on, alone, burning: Morrow was right about how it feels.");
passage("anchor", "ANC_F", 'ending = "F"', "The Fen a year on, with the Lamplighters, still hunting.");
passage("anchor", "ANC_GT", 'ending = "G_T"', "A year on: Toby, alive, and what the choice cost.");
passage("anchor", "ANC_GM", 'ending = "G_M"', "A year on: Maisie and her father, alive, and what the choice cost.");
passage("anchor", "ANC_GK", 'ending = "G_K"', "A year on: the Headmistress, alive, and what the choice cost.");
passage("anchor", "ANC_H", 'ending = "H"', "A year on: the Fen, the paper, the letter, and the road not taken.");
// 2. the relationship, or the life you chose
for (const l of LEADS) {
  passage("rel", "REL_" + l.toUpperCase() + "_TOGETHER", '(final_rel = "' + l + '") and (final_shape = "together")', l + ", together, a year on.");
  passage("rel", "REL_" + l.toUpperCase() + "_PARTING", '(final_rel = "' + l + '") and (final_shape != "together")', l + ", apart, a year on.");
}
passage("rel", "REL_SINGLE", '(final_rel = "single") or (final_rel = "")', "The life you chose, a year on, with friends in it.");
// 3. supporting consequences: two or three on every walk
passage("conseq", "CON_TULLY", 'ending != "G_M"', "Mr Tully and Maisie, a year on.");
passage("conseq", "CON_TOBY", 'ending != "G_T"', "Toby, a year on: awake, or waiting, or gone.");
passage("conseq", "CON_NANA", 'told_nana', "Nana Pearl, who knew, a year on.");
passage("conseq", "CON_DEV", 'not(told_nana)', "Dev, who never asked, a year on.");
// 4. the last image
passage("final", "FIN_LANTERN", 'ending != "D"', "One lantern, lit by your hand.");
passage("final", "FIN_CANDLE", 'ending = "D"', "One candle, lit by somebody else's hand, for you.");
const slots = ["anchor", "rel", "final"];

module.exports = { endings, passages, slots };
