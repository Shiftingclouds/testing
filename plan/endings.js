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
const slots = ["anchor", "rel", "final"];

module.exports = { endings, passages, slots };
