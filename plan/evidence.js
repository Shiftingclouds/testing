// Wrenfold: the mystery. Who is letting the Choir in (Tully), what Morrow wants (the Heartfire, and a Kindler to carry it),
// and when (Midsummer). Every clue has at least two routes in the script. Essential clues must be known on every path by
// the CH20 planning (the script guarantees them); the rest reward attention. e06 and e07 are the red herrings.
"use strict";
const evidence = [
  { id: "e01", name: "A grey wick", establishes: "Delphine's lantern was snuffed with a wick soaked in something grey that smells of marsh.", essential: false },
  { id: "e02", name: "Humming in the lanterns", establishes: "The Choir's note travels through the lantern network: someone connected to the lanterns is letting it in.", essential: false },
  { id: "e03", name: "A ward opened from inside", establishes: "The south ward-stone by the Glasshouses was unlocked from the castle side the night Delphine was taken.", essential: false },
  { id: "e04", name: "Marsh oil", establishes: "The grey oil is Saltmarrow Fen lamp oil; the only store of it in Wrenfold is in the Lanternwarden's shed.", essential: false },
  { id: "e05", name: "Lettice Crane's warning", establishes: "A ghost hollowed forty years ago: 'he's coming back for what he lost, and you have it.'", essential: false },
  { id: "e06", name: "Professor Grey's past", establishes: "Grey spent six years inside the Grey Choir. (He was the Order's spy; this clue alone doesn't say so.)", essential: false },
  { id: "e07", name: "Bram's last argument", establishes: "Bram Hollis quarrelled with Cas the night he was taken. (Cas was elsewhere; this clue alone doesn't say so.)", essential: false },
  { id: "e08", name: "The night rounds", establishes: "Every hollowing fell on a night the Lanternwarden did the lantern round alone.", essential: false },
  { id: "e09", name: "Maisie Tully", establishes: "Tully's daughter was hollowed in her Burning Year; he visits St Ide's every Sunday; someone has promised him something.", essential: false },
  { id: "e10", name: "The Heartfire", establishes: "Hester Wren's own flame burns under the school; it lights every lantern and holds the wards.", essential: true },
  { id: "e11", name: "Morrow's school file", establishes: "Aldric Morrow was a Kindler, snuffed in a Warding exercise forty years ago; the school hushed it up.", essential: true },
  { id: "e12", name: "Lucius Drummond's confession", establishes: "Cas's grandfather cast the spell that snuffed Morrow, and was protected by the Deputy of the day.", essential: false },
  { id: "e13", name: "The Wren's Song", establishes: "A counter-song against the Choir's note: it can't be sung alone, only by many voices together.", essential: false },
  { id: "e14", name: "Letters in the cottage", establishes: "Morrow has written to Tully for three years, promising to relight Maisie.", essential: false },
  { id: "e15", name: "The boathouse way", establishes: "An old passage runs from the boathouse under the Mere wall into the Old Cloisters.", essential: false },
  { id: "e16", name: "Midsummer", establishes: "Morrow will come at the Midsummer Proving, when every lantern is lit and every student is in the Hall.", essential: true }
];
module.exports = { evidence };
