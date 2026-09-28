/* WRENFOLD — story configuration. Variables, people, places, evidence and the calendar come from plan/ via
 * js/story/plan-data.js (tools/gen-config.js); this file adds what only the game needs: epithets, the opening film,
 * letters, snapshots, endings copy, the stat screen, and the continuity rules the runtime enforces. */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var PL = NB.plan;
  var esc = function (s) { return NB.text ? NB.text.escapeHTML(s) : String(s); };
  var LEADS = PL.leads;
  var HOUSE_NAMES = { larkspire: "Larkspire", owlcombe: "Owlcombe", heronmere: "Heronmere", rookhallow: "Rookhallow" };

  /* ---------------- people ---------------- */

  var EPITHETS = {
    rowan: "Larkspire. Ex-firefighter, walked out of a fire", imogen: "Owlcombe. Law student, read the whole handbook",
    saoirse: "Rookhallow. Mechanic, builds what she shouldn't", cas: "Old family, late flame", noor: "Heronmere. A&E nurse",
    idris: "Owlcombe, second year. Studies the old Kindlers", toby: "Heronmere. Baker's apprentice, your best friend",
    kestrel: "Headmistress", bassani: "Turning; head of Larkspire; Deputy Head", kovac: "Brewing; head of Owlcombe",
    rhys: "Herbwork; head of Heronmere", crook: "Beastlore; head of Rookhallow", grey: "Warding", moth: "Wordcraft",
    solano: "Starreading", okoro: "Flight and Glimmerball", dunne: "Librarian, the Long Stacks", holloway: "Matron",
    tully: "The Lanternwarden", priya: "Heronmere. Plays violin for the Hall", flick: "Larkspire prefect",
    marcus: "Larkspire Glimmerball captain", petra: "Owlcombe", hamish: "Rookhallow, second year", delphine: "Heronmere, second year",
    bram: "Rookhallow", mina: "Owlcombe. Runs Wrenfold Wireless", jonty: "Heronmere. Knits for familiars",
    fitch: "The Wren's Nest", odile: "Wandwright, Pellow & Daughters", hask: "Robe-maker, Hask & Needle", tick: "Keeper of the Menagerie",
    arkwright: "Commander, the Order of the Lamp", jory: "Lamplighter", morrow: "The Grey Choir", corliss: "The Hush",
    nana: "Your gran, across Wrexley", dev: "Your friend from work", moll: "The Crooked Lantern", ombree: "Sugar & Sorcery",
    lettice: "A ghost of Wrenfold", maisie: "At St Ide's", kit: "Imogen's brother, at St Ide's", hester: "Founder of Wrenfold, in oils",
    honoria: "Cas's grandmother"
  };
  var people = {};
  Object.keys(PL.people).forEach(function (id) {
    var p = PL.people[id];
    var first = p.name.split(" ")[0];
    var short = { cas: "Cas", kestrel: "The Headmistress", bassani: "Bassani", kovac: "Kovač", rhys: "Professor Rhys", crook: "Professor Crook",
      grey: "Professor Grey", moth: "Professor Moth", solano: "Professor Solano", okoro: "Coach Okoro", dunne: "Miss Dunne", holloway: "Matron",
      tully: "Tully", flick: "Flick", fitch: "Mr Fitch", hask: "Madame Hask", tick: "Mr Tick", arkwright: "Arkwright", morrow: "Morrow",
      nana: "Nana Pearl", moll: "Moll", ombree: "Mr Ombree", hester: "Hester Wren", honoria: "Lady Drummond" }[id] || first;
    people[id] = {
      cid: p.cid, kind: p.kind, tier: p.tier, romance: p.romance, house: p.house,
      name: id === "mc" ? function (v) { return v.name || "Alex"; } : p.name,
      short: id === "mc" ? "You" : short,
      epithet: EPITHETS[id] || "",
      self: id === "mc",
      desc: function () { return p.appearance ? "<p>" + esc(p.appearance) + "</p>" : ""; }
    };
  });
  // your familiar has a journal page of its own once you've chosen it
  people.familiar = { cid: "FAM", kind: "familiar", tier: "frequent", name: function (v) { return v.fam_name || "Your familiar"; },
    short: "Familiar", epithet: "Your familiar", desc: function () { return ""; } };

  function selfEntry(v) {
    var kind = v.mc_kind || "witch";
    var jobs = { calls: "the phones at Brindle Mutual", nurse: "the front desk at Wrexley General A&E", cook: "the kitchen at the Pie & Pint",
      shop: "the returns desk at Harker's", library: "the counter at Wrexley Library", courier: "a bike for Swift Couriers" };
    var paras = ["Twenty-five. You lived under the viaduct in Wrexley and worked " + (jobs[v.job] || "an ordinary job") + ", and this year the kettles started boiling on their own."];
    if (v.house) paras.push("First year, " + HOUSE_NAMES[v.house] + ". " + ({ larkspire: "Up with the lark.", owlcombe: "Eyes open.", heronmere: "Stand still.", rookhallow: "Mind your own." }[v.house]));
    if (v.wand_wood) paras.push("Your wand: " + v.wand_wood + ", with " + ({ wren: "a wren feather", storm: "storm-glass", pearl: "a river pearl", ember: "ember-coal", moth: "moth-silk", star: "starlight thread" }[v.wand_core] || "a heartspark") + ".");
    if (v.familiar) paras.push("Your familiar: a " + v.familiar + (v.fam_name ? " called " + esc(v.fam_name) : "") + ".");
    if (v.kindler_known) paras.push("You're a Kindler: you see other people's flames, and you can relight one that's gone out. The Headmistress asked you to tell no one.");
    return { title: v.name || "Alex", epithet: "First-year " + kind + (v.house ? ", " + HOUSE_NAMES[v.house] : ""), paras: paras };
  }

  /* ---------------- continuity: who can be in a scene ---------------- */

  function statusOn(p, date, v) {
    var s = "ok";
    (p.status || []).forEach(function (x) { if (x.date <= date && !(x.until && v && v[x.until])) s = x.state; });
    return s;
  }
  /** Returns a reason string if `who` can't be present now, else "". The hollowed can be present (they're alive); the
   * validator checks they never speak like themselves. */
  function canBePresent(who, st) {
    var p = PL.people[who];
    if (!p || !st.date) return "";
    var s = statusOn(p, st.date, st.vars);
    if (s === "dead") return "dead on " + st.date;
    return "";
  }

  /* ---------------- evidence ---------------- */

  var clues = {};
  Object.keys(PL.evidence).forEach(function (k) { clues[k] = { title: PL.evidence[k].title, text: PL.evidence[k].text }; });

  /* ---------------- relationship stages ---------------- */

  var STAGES = ["Not met", "Met", "Friendly", "Friends", "Close", "Something more", "Together"];
  function stageCeiling(lead, v) {
    var c = 2;
    (PL.beats[lead] || []).forEach(function (b) { if (v[b.flag] && b.stage > c) c = b.stage; });
    return Math.min(c, 5);
  }
  function adjustSet(name, cur, val, relative, v) {
    var m = /^st_(\w+)$/.exec(name);
    if (!m || !PL.beats[m[1]] || typeof val !== "number" || typeof cur !== "number") return val;
    if (!relative) return Math.max(cur, val);
    if (val <= cur) return val;
    return Math.max(cur, Math.min(val, stageCeiling(m[1], v)));
  }

  /* ---------------- the opening film (docs/04-intro-storyboard.md) ---------------- */

  var films = {
    intro: [
      { frame: "intro-01", dur: 6000, move: "tilt-down", layers: [{ name: "sky", speed: 1 }, { name: "clouds", speed: 0.8 }], caption: "Most people's magic comes early." },
      { frame: "intro-02", dur: 7000, move: "pan-right", layers: [{ name: "sky" }, { name: "hills" }, { name: "town" }, { name: "viaduct" }, { name: "train", speed: 0.6 }], caption: "Some people's comes late." },
      { frame: "intro-03", dur: 6000, move: "push", effect: "rain", layers: [{ name: "street" }, { name: "fox" }] },
      { frame: "intro-04", dur: 7000, move: "breathe", caption: "Thursday. Half past everything." },
      { frame: "intro-05", dur: 5000, move: "breathe", effect: "flicker" },
      { frame: "intro-06", dur: 5000, move: "still", caption: "Midnight." },
      { frame: "intro-07", dur: 10000, move: "drift", letter: [
        "Wrenfold School for Late Magic",
        "Dear —,",
        "Something has happened to you this year. You have probably noticed. The kettle, the lights, the way the candles lean.",
        "You are not ill, or tired, or losing your mind. You are kindling.",
        "A place has been kept for you at Wrenfold since the day you were born. A doorway will open in your home at midnight, and hold until dawn.",
        "Keep your flame close.",
        "Imelda Kestrel, Headmistress"
      ] },
      { frame: "intro-08", dur: 6000, move: "breathe", effect: "glow" },
      { frame: "intro-09", dur: 6000, move: "push", effect: "glow", layers: [{ name: "beyond", speed: 1.2 }, { name: "kitchen" }, { name: "you" }], caption: "The doorway will hold until dawn." },
      { frame: "intro-10", dur: 5000, move: "rise", layers: [{ name: "glow" }, { name: "lanterns", speed: 0.7 }] },
      { frame: "intro-11", dur: 6000, move: "drift", title: true }
    ]
  };

  /* ---------------- letters & snapshots (filled in as chapters are written) ---------------- */

  var letters = NB.LETTERS || {};
  var snapshots = NB.SNAPSHOTS || {};

  /* ---------------- chapter art ---------------- */

  var cardAliases = {
    title: "intro-11",
    ch01: "intro-04", ch02: "lamplight_row", ch03: "lantern_hall", ch04: "classroom", ch05: "corridor_night", ch06: "glasshouses",
    ch07: "glimmer_pitch", ch08: "lantern_hall_emberfall", ch09: "old_cloisters", ch10: "warding_hall", ch11: "thimble_cross_snow", ch12: "lantern_hall_longnight",
    ch13: "home_street_night", ch14: "mere_frozen", ch15: "glimmer_pitch_snow", ch16: "library", ch17: "lantern_hall_dark", ch18: "tully_cottage",
    ch19: "glasshouses", ch20: "weathervane_room", ch21: "candlestones", ch22: "lantern_hall_dark", ch23: "heartfire", ch24: "lantern_hall"
  };

  /* ---------------- endings ---------------- */

  var endingText = NB.ENDING_TEXT || {};
  var endings = {};
  Object.keys(PL.endings).forEach(function (k) { endings[k] = { title: PL.endings[k].title, desc: endingText[k] || PL.endings[k].core, clue: "" }; });

  var achievements = {
    kindled: { title: "Kindled", desc: "Stepped through the doorway." },
    nested: { title: "Nested", desc: "Your lantern found its roost." },
    relit: { title: "Bare-Handed", desc: "Relit a snuffed candle without a wand." },
    relit_toby: { title: "Course It Is", desc: "Gave Toby a piece of your own flame.", hidden: true },
    wren_song: { title: "The Wren's Song", desc: "Gathered a choir of your own.", hidden: true },
    house_lantern: { title: "The House Lantern", desc: "Won the House Lantern for your house.", hidden: true }
  };

  /* ---------------- the stat screen ---------------- */

  function fmtDate(d) {
    if (!d) return "—";
    try { return new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }); } catch (e) { return d; }
  }
  function statScreen(v, st) {
    var sections = [];
    var chap = PL.calendar.chapters[(v.ch || 1) - 1];
    sections.push({ rows: [{ type: "id", items: [
      ["Name", esc(v.name || "Alex")],
      ["House", v.house ? HOUSE_NAMES[v.house] : "Not yet nested"],
      ["When", fmtDate(st.date)],
      ["Where", st.place && PL.places[st.place] ? esc(PL.places[st.place].name) : "—"],
      ["Chapter", chap ? esc(chap.title) : "—"]
    ] }] });
    sections.push({ title: "You", rows: [
      { type: "bar", label: "Nerve", value: v.nerve, note: "Holding steady when everything says run." },
      { type: "bar", label: "Wit", value: v.wit, note: "Study, puzzles, remembering the right word." },
      { type: "bar", label: "Heart", value: v.heart, note: "Kindness, and bringing people with you." },
      { type: "bar", label: "Flame", value: v.flame, note: "Raw magic. How hard your spells land." }
    ] });
    if (v.kindler_known) sections.push({ title: "The Kindler", rows: [
      { type: "bar", label: "Kindling", value: v.kindling, note: "How well you can see, steady and relight a flame." },
      { type: "list", items: [["Warm", "A little cold", "Cold to the bone", "Your own flame is dim"][v.chill || 0]] }
    ] });
    var pts = PL.houses.map(function (h) { return HOUSE_NAMES[h] + ": " + (v["pts_" + h] || 0); });
    if (v.house) sections.push({ title: "House points", rows: [{ type: "list", items: pts }] });
    var rel = [];
    LEADS.forEach(function (l) { if (v["st_" + l] > 0) rel.push(people[l].short + ": " + STAGES[v["st_" + l]]); });
    if (rel.length) sections.push({ title: "People", rows: [{ type: "list", items: rel }] });
    return sections;
  }

  function narratorFacts(v) {
    var pro = (v.they || "she") + "/" + (v.them || "her");
    return { name: v.name || "Alex", surname: "", pronouns: pro, background: "a twenty-five-year-old late-kindled " + (v.mc_kind || "witch") + " in their first year at Wrenfold" + (v.house ? " (" + HOUSE_NAMES[v.house] + ")" : "") + ", secretly a Kindler (they can see and relight other people's magic)" };
  }
  function hintFallback(e) {
    var m;
    if ((m = /^(e\d\d)$/.exec(e)) && clues[m[1]]) return "Requires evidence: " + clues[m[1]].title;
    if ((m = /^st_(\w+)\s*>=\s*(\d)$/.exec(e)) && people[m[1]]) return "Needs you and " + people[m[1]].short + " to be " + STAGES[+m[2]].toLowerCase();
    if ((m = /^(nerve|wit|heart|flame|kindling)\s*>=\s*(\d+)$/.exec(e))) return "Requires " + ({ nerve: "Nerve", wit: "Wit", heart: "Heart", flame: "Flame", kindling: "Kindling" }[m[1]]) + " " + m[2];
    return "";
  }
  function recap(v, st) { return (st.journal || []).slice(); }

  var statNames = { nerve: "Nerve", wit: "Wit", heart: "Heart", flame: "Flame", kindling: "Kindling", chill: "Chill",
    pts_larkspire: "Larkspire", pts_owlcombe: "Owlcombe", pts_heronmere: "Heronmere", pts_rookhallow: "Rookhallow" };
  LEADS.forEach(function (l) { statNames["st_" + l] = people[l].short; });
  Object.keys(PL.startVars).forEach(function (k) { var m = /^fr_(\w+)$/.exec(k); if (m && people[m[1]]) statNames[k] = people[m[1]].short; });

  NB.config = {
    title: "Wrenfold",
    eyebrow: "An interactive novel",
    subtitle: "A School for Late Magic",
    motto: "Some magic comes early. Yours came at midnight.",
    titleAlt: "Wrenfold castle on its island in a black lake at night, lanterns drifting over it",
    titleNote: "A branching novel of late magic, four houses, and the dark that comes for bright flames.",
    titleFooter: "Keep your flame close.",
    railEyebrow: "A school for late magic",
    defaultPalette: "golden",
    // the chapters written so far (index.html loads them); the full book is ch01 … ch24
    get sceneList() { return ["ch01", "ch02", "ch03", "ch04", "ch05", "ch06", "ch07", "ch08", "ch09", "ch10", "ch11", "ch12", "ch13", "ch14", "ch15", "ch16", "ch17", "ch18", "ch19", "ch20", "ch21", "ch22", "ch23", "ch24"].filter(function (n) { return !NB.sources || NB.sources[n]; }); },
    startVars: PL.startVars,
    clamp: PL.clamp,
    adjustSet: adjustSet,
    stageCeiling: stageCeiling,
    opposed: {},
    statNames: statNames,
    hints: {},
    hintFallback: hintFallback,
    trackChanges: ["nerve", "wit", "heart", "flame", "kindling", "pts_larkspire", "pts_owlcombe", "pts_heronmere", "pts_rookhallow"].concat(LEADS.map(function (l) { return "st_" + l; })),
    lookKeys: ["look_form", "look_skin"],
    lookNames: { look_form: "You", look_skin: "Skin" },
    people: people,
    selfEntry: selfEntry,
    contacts: { nana: "Nana Pearl", dev: "Dev" },
    clues: clues,
    deductions: {},
    codex: {},
    map: [],
    questions: [],
    recap: recap,
    achievements: achievements,
    endings: endings,
    get cards() { return NB.cards ? NB.cards.ids : []; },
    cardAliases: cardAliases,
    romanceable: LEADS,
    stages: STAGES,
    statScreen: statScreen,
    narratorFacts: narratorFacts,
    inputDefaults: { name: "Alex" },
    houses: PL.houses,
    houseNames: HOUSE_NAMES,
    places: PL.places,
    views: PL.views,
    letters: letters,
    snapshots: snapshots,
    films: films,
    canBePresent: canBePresent,
    statusOn: statusOn,
    fmtDate: fmtDate,
    sandboxLede: "The same castle, the same people, the same year, and no written choices. Type what you do or say, and Claude plays Wrenfold: every student and teacher has their own plans, and the year's events keep trying to happen unless you change them. Go anywhere. Talk to anyone. Portraits and places appear as you meet them.",
    sandboxKinds: [{ id: "witch", label: "Witch", pronouns: "she/her" }, { id: "wizard", label: "Wizard", pronouns: "he/him" }, { id: "mage", label: "Mage", pronouns: "they/them" }],
    aboutHTML: [
      "<p><b>Wrenfold</b> is an interactive novel. You read, and at each choice you decide what you say and do. The story remembers.</p>",
      "<p><b>Choices.</b> Pick an option and press <b>Next</b> (or press 1–9 and Enter). A greyed-out option says why it's locked.</p>",
      "<p><b>Your flame.</b> You're a late-kindled witch or wizard in your Burning Year, and something more: a Kindler, who can see other people's magic as flames, and relight one that's gone out. It costs you every time.</p>",
      "<p><b>Your house</b> earns and loses points from what you do. The House Lantern goes to the winner at the Leaving Feast.</p>",
      "<p><b>The Journal</b> holds everyone you've met, with hearts for how close you've become, the clues you've gathered, letters, and snapshots.</p>",
      "<p><b>Four ways to play.</b> Settings → Narration: <i>Classic</i> (the text as written), <i>Varied</i> (fresh hand-written phrasings each time), or <i>Living</i> (Claude retells each page in a voice you pick). Or choose <b>Sandbox</b> on the title screen: no written choices at all. You type what you do, and Claude plays Wrenfold. Living and Sandbox need Claude (in the Claude app, or your own API key) and an internet connection.</p>",
      "<p>There are eight endings. After your first, the Story Map and New Game+ open up.</p>"
    ].join("")
  };
})(typeof window !== "undefined" ? window : globalThis);
