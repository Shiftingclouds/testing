// Wrenfold: the state model. Every variable a scene may read or set is declared here; the tools reject anything
// undeclared and any string value outside `values`.
"use strict";

const LEADS = ["rowan", "imogen", "saoirse", "cas", "noor", "idris"];
const LEAD_IDS = { rowan: "C01", imogen: "C02", saoirse: "C03", cas: "C04", noor: "C05", idris: "C06" };
// People whose friendship is tracked (hearts in the journal; no romance).
const FRIENDS = ["toby", "kestrel", "bassani", "kovac", "rhys", "crook", "grey", "moth", "okoro", "holloway", "tully", "priya", "flick",
  "marcus", "hamish", "mina", "jonty", "odile", "jory", "arkwright", "nana", "dev"];
const HOUSES = ["larkspire", "owlcombe", "heronmere", "rookhallow"];

const vars = {};
function def(name, type, dflt, desc, values) { vars[name] = { type, default: dflt, desc, values }; }

// ---------------------------------------------------------------- who you are
def("name", "string", "Alex", "Your first name");
def("mc_kind", "string", "witch", "Witch, wizard or mage", ["witch", "wizard", "mage"]);
def("they", "string", "she", "Your pronoun (subject), as others say it");
def("them", "string", "her", "Your pronoun (object)");
def("their", "string", "her", "Your pronoun (possessive)");
def("theyre", "string", "she's", "Your pronoun + is");
def("look_skin", "number", 0, "Your portrait: which of the six (porcelain, fair, olive, tan, brown, deep)");
def("look_form", "number", 0, "Your portrait: 0 witch, 1 wizard (a mage picks either)");
def("thimble", "bool", false, "Great-gran Ivy's silver wren thimble, from Nana Pearl (CH01)");
def("job", "string", "calls", "Your ordinary job in Wrexley", ["calls", "nurse", "cook", "shop", "library", "courier"]);
def("brought", "string", "", "The one thing you took through the doorway", ["", "photo", "radio", "tools", "book", "knife", "nothing"]);
def("told_nana", "bool", false, "You told Nana Pearl before you left");
def("steam", "bool", true, "Romantic scenes on the page (setting)");
def("date", "string", "2026-09-10", "Story date");
def("ch", "number", 1, "Current chapter number");

// ---------------------------------------------------------------- skills
def("nerve", "number", 20, "Courage under threat");
def("wit", "number", 20, "Cleverness, study, puzzles");
def("heart", "number", 20, "Kindness, reading people, bringing them with you");
def("flame", "number", 20, "Raw magic: how strong your spells are");
def("kindling", "number", 0, "How far your Kindler gift is trained (0–100)");
def("chill", "number", 0, "What relighting has cost you (0–3); 3 means your own flame is dim");

// ---------------------------------------------------------------- Wrenfold
def("house", "string", "", "Your house", ["", ...HOUSES]);
def("cas_house", "string", "rookhallow", "Cas's house: Rookhallow, unless you are, then Owlcombe", HOUSES);
for (const h of HOUSES) def("pts_" + h, "number", 0, h + " house points");
def("familiar", "string", "", "Your familiar", ["", "cat", "owl", "hare", "fox", "raven", "toad", "moth", "ferret"]);
def("fam_name", "string", "", "Your familiar's name");
def("wand_wood", "string", "", "Your wand's wood", ["", "rowan", "blackthorn", "willow", "ash", "hazel", "yew"]);
def("wand_core", "string", "", "Your wand's heartspark", ["", "wren", "storm", "pearl", "ember", "moth", "star"]);
def("best_subject", "string", "", "The class you shone in", ["", "wordcraft", "brewing", "turning", "warding", "herbwork", "flight"]);
def("glimmer", "bool", false, "You joined your house Glimmerball team");
def("detentions", "number", 0, "Detentions served");

// ---------------------------------------------------------------- the Kindler secret
def("kindler_known", "bool", false, "You know you're a Kindler (CH05)");
for (const w of ["toby", "nana", ...LEADS, "arkwright", "tully"]) def("told_" + w, "bool", false, "Told " + w + " you're a Kindler");
def("morrow_knows", "bool", false, "Morrow knows exactly who the Kindler is (only through an authored route)");
def("relit_candle", "bool", false, "You relit a snuffed candle in CH05");

// ---------------------------------------------------------------- relationships
for (const l of LEADS) {
  def("st_" + l, "number", 0, l + ": stage 0 not met … 5 something more, 6 together");
  def("hurt_" + l, "number", 0, l + ": hurt 0–2; 2 closes the romance");
}
for (const f of FRIENDS) def("fr_" + f, "number", 0, f + ": friendship 0–3");
def("final_rel", "string", "", "Who you end with", ["", "single", ...LEADS]);
def("final_shape", "string", "", "Together or parting", ["", "together", "parting"]);
def("promise7", "string", "", "Who you promised the evening of 10 October", ["", "rowan", "saoirse", "noor"]);
def("kept7", "bool", false, "You kept that promise");
def("ember_with", "string", "", "Who you walked down to the Mere with at Emberfall", ["", "toby", "alone", ...LEADS]);
def("mask", "string", "", "Your Emberfall mask", ["", "fox", "stag", "moth", "leaves", "domino"]);
def("dance", "string", "", "Who you went to the Longnight Dance with", ["", "toby", "alone", ...LEADS]);
def("candle", "string", "", "Who you gave your Candlewake candle to", ["", "toby", "nana", "kestrel", "kept", ...LEADS]);

// ---------------------------------------------------------------- the mystery (evidence, each with two routes)
const EVIDENCE = ["e01", "e02", "e03", "e04", "e05", "e06", "e07", "e08", "e09", "e10", "e11", "e12", "e13", "e14", "e15", "e16"];
for (const e of EVIDENCE) def(e, "bool", false, "Evidence " + e + " (see plan/evidence.js)");
def("suspect", "string", "", "Who you most suspect, when asked", ["", "grey", "idris", "cas", "tully", "bassani", "nobody"]);
def("accused_grey", "bool", false, "You said out loud that Grey was the insider");
def("tully_fate", "string", "", "What you did about Tully in CH18", ["", "exposed", "kestrel", "st_ides", "silent"]);
def("know_heartfire", "bool", false, "You know the word Heartfire (CH12)");
def("know_morrow", "bool", false, "You know Morrow's story (CH16)");
def("know_insider", "bool", false, "You know it's Tully (CH18)");

// ---------------------------------------------------------------- the plot's branches
def("ch07_way", "string", "", "Where you spent 10 October", ["", "match", "party", "shift"]);
def("ch09_way", "string", "", "Which adventure under Wrenfold", ["", "cloisters", "map"]);
def("ch13_way", "string", "", "Christmas at home or at school", ["", "home", "stay"]);
def("order_offer", "string", "", "What you said to the Order's offer (CH19)", ["", "stay", "leave"]);
def("toby_lit", "bool", false, "You relit Toby");
def("maisie_lit", "bool", false, "Maisie Tully was relit");
def("kit_lit", "bool", false, "Kit Sallow was relit");
def("odile_lit", "bool", false, "Odile Pellow was relit");
def("singers", "number", 0, "Voices in your Wren's Song choir (CH20)");
def("plan22", "string", "", "Your post at Midsummer Eve", ["", "hall", "cloisters", "boathouse"]);
def("heartfire_choice", "string", "", "What you did with the Heartfire", ["", "hold", "relight_morrow", "let_go", "give", "take", "escape", "choose"]);
def("saved_one", "string", "", "Ending G: who you brought out", ["", "toby", "maisie", "kestrel"]);
def("ending", "string", "", "The ending", ["", "A", "B", "C", "D", "E", "F", "G_T", "G_M", "G_K", "H"]);
def("house_lantern", "string", "", "Which house won the House Lantern", ["", ...HOUSES]);

// ---------------------------------------------------------------- presentation
def("look_done", "bool", false, "You've chosen how you look");

module.exports = { vars, LEADS, LEAD_IDS, FRIENDS, HOUSES, EVIDENCE };
