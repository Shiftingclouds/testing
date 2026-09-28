// Wrenfold: the calendar. One school year, 2026–27 (the year is never printed). Weekdays follow the real calendar.
"use strict";

const parts = [
  { id: "P1", title: "Part One: Kindling", chapters: ["CH01", "CH02", "CH03", "CH04", "CH05", "CH06", "CH07"] },
  { id: "P2", title: "Part Two: Emberfall", chapters: ["CH08", "CH09", "CH10", "CH11", "CH12"] },
  { id: "P3", title: "Part Three: Deep Winter", chapters: ["CH13", "CH14", "CH15", "CH16", "CH17", "CH18"] },
  { id: "P4", title: "Part Four: The Greening", chapters: ["CH19", "CH20", "CH21", "CH22", "CH23", "CH24"] }
];

const chapters = [
  { id: "CH01", title: "The Letter", from: "2026-09-10", to: "2026-09-11",
    purpose: "The film; who you are; the invitation; the doorway; the one thing you take; stepping through." },
  { id: "CH02", title: "Lamplight Row", from: "2026-09-11", to: "2026-09-11",
    purpose: "The Wren's Nest; meet Toby, Rowan, Imogen, Saoirse; wand, robes, familiar; the first humming in an alley." },
  { id: "CH03", title: "The Lantern Hall", from: "2026-09-11", to: "2026-09-11",
    purpose: "The Lantern Train, the Mere, the castle, the Hall; the Nesting; Cas; the Headmistress's warning." },
  { id: "CH04", title: "First Lessons", from: "2026-09-14", to: "2026-09-18",
    purpose: "The teachers and the classes; your flame surges; Noor; the common room; Cas and Toby." },
  { id: "CH05", title: "The Burning Year", from: "2026-09-24", to: "2026-09-26",
    purpose: "You see flames; you relight a candle; Idris sees; the Weathervane Room: you're a Kindler." },
  { id: "CH06", title: "The Hollowed Girl", from: "2026-10-05", to: "2026-10-07",
    purpose: "Delphine found hollowed; detention with Tully; Maisie; the grey wick." },
  { id: "CH07", title: "An Evening Already Promised", from: "2026-10-10", to: "2026-10-11",
    purpose: "Rowan's first match, Saoirse's Undercroft party, or Noor's night shift; promises kept or broken." },
  { id: "CH08", title: "Emberfall", from: "2026-10-31", to: "2026-11-01",
    purpose: "Masks, apple-fire, lanterns to the dead; Lettice Crane's warning; Imogen's brother." },
  { id: "CH09", title: "Under Wrenfold", from: "2026-11-04", to: "2026-11-07",
    purpose: "A complete adventure: the Old Cloisters' name-caller or the ink-eating map." },
  { id: "CH10", title: "The Lamplighters", from: "2026-11-14", to: "2026-11-18",
    purpose: "Bram hollowed; the Order arrives; suspicion on Grey and Cas; Arkwright and your secret." },
  { id: "CH11", title: "Thimble Cross", from: "2026-12-05", to: "2026-12-05",
    purpose: "The village in snow; the Choir in daylight; Odile Pellow sings the counter-song and is hollowed." },
  { id: "CH12", title: "Longnight", from: "2026-12-18", to: "2026-12-22",
    purpose: "The Frost Market, the Longnight Dance, the blue lanterns; the word Heartfire; home or stay." },
  { id: "CH13", title: "Home Between", from: "2026-12-23", to: "2027-01-03",
    purpose: "Wrexley and Nana Pearl, or Wrenfold snowed in; the Choir finds your street, or you find the Heartfire's door." },
  { id: "CH14", title: "Candlewake", from: "2027-01-30", to: "2027-02-02",
    purpose: "The candle across the ice; route peaks; Idris and Morrow's missing file." },
  { id: "CH15", title: "The Glimmer Cup", from: "2027-02-13", to: "2027-02-13",
    purpose: "The tournament in the snow; the snuffing hoop; Rowan falls; the oil." },
  { id: "CH16", title: "What the Founders Hid", from: "2027-02-20", to: "2027-02-27",
    purpose: "Hester's journal; Morrow's file; Lucius Drummond; the Heartfire and why Morrow needs a Kindler." },
  { id: "CH17", title: "The Quiet", from: "2027-03-05", to: "2027-03-07",
    purpose: "The Choir inside Wrenfold; Toby hollowed; Professor Grey dies; the Headmistress hurt." },
  { id: "CH18", title: "The Lanternwarden", from: "2027-03-10", to: "2027-03-14",
    purpose: "The clues come together: it's Tully. Expose him, go to the Headmistress, or go to St Ide's." },
  { id: "CH19", title: "The Greening", from: "2027-03-20", to: "2027-03-22",
    purpose: "The Order's offer; stay or go; you try to relight Toby." },
  { id: "CH20", title: "The Wren's Song", from: "2027-04-10", to: "2027-04-24",
    purpose: "The counter-song needs a choir; gather one from all four houses." },
  { id: "CH21", title: "Brightfire", from: "2027-05-01", to: "2027-05-02",
    purpose: "The last good night; the plan to draw Morrow in." },
  { id: "CH22", title: "Midsummer Eve", from: "2027-06-20", to: "2027-06-20",
    purpose: "The Choir's assault during the Proving; battle in the Hall, cloisters, boathouse." },
  { id: "CH23", title: "The Heartfire", from: "2027-06-20", to: "2027-06-21",
    purpose: "The root of the rock; Morrow; what you do with the founding flame." },
  { id: "CH24", title: "The Last Lantern", from: "2027-06-26", to: "2028-06-26",
    purpose: "The Leaving Feast; the House Lantern; where you go; an epilogue a year on." }
];

// What the world is doing when you aren't looking (the Choir, the Order, the school). Scenes may refer to these.
const events = [
  { date: "2026-09-10", what: "Choir singers seen on Lamplight Row for the first time in six years." },
  { date: "2026-10-05", what: "Delphine Arceneaux hollowed in the Glasshouses before dawn (Tully opened the south ward at 3 a.m.)." },
  { date: "2026-11-14", what: "Bram Hollis hollowed on the Rookery stairs at night; the Order is called." },
  { date: "2026-12-05", what: "The Choir walks into Thimble Cross in daylight; Odile Pellow hollowed." },
  { date: "2026-12-29", what: "Choir singers seen in Wrexley (Viaduct Street), looking for you." },
  { date: "2027-02-13", what: "The Glimmer Cup hoop sabotaged with grey-wick oil from Tully's store." },
  { date: "2027-03-06", what: "The Quiet: the Choir inside Wrenfold at night; Toby hollowed; Grey killed; the Headmistress hurt." },
  { date: "2027-06-20", what: "Midsummer Eve: the Choir's assault during the Proving." }
];

module.exports = { parts, chapters, events };
