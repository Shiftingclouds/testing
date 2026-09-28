// Wrenfold: the places. view: the environment picture ChatGPT draws for it (art/places/<view>.png, 640x360), and any
// seasonal or story variants. Places without a view borrow a neighbour's or show no picture.
"use strict";

const districts = {
  D01: "Wrexley",
  D02: "Lamplight Row",
  D03: "Wrenfold",
  D04: "Thimble Cross",
  D05: "Kingsmere",
  D06: "The Fen"
};

const places = [
  // ------------------------------------------------------------------ Wrexley (your life)
  { id: "P01", name: "7 Viaduct Street", district: "D01", view: "home_kitchen", variants: ["home_street_night"],
    notes: "Your narrow rented house under the railway viaduct: a kitchen with a yellow light, steep stairs, a front door with a draught under it, a back yard with one tomato plant. Trains shake the cups." },
  { id: "P02", name: "Nana Pearl's bungalow", district: "D01", view: "nana_pearl",
    notes: "Across town: lavender and toast, a budgie called Admiral, net curtains, a telly always on quietly, photographs of you at every age." },
  { id: "P03", name: "Your work", district: "D01", view: "work",
    notes: "Wherever you worked (chosen in CH01): a call-centre floor, A&E reception, a pub kitchen, a department-store returns desk, the town library, a courier depot. Strip lights, a clock that's always slow." },

  // ------------------------------------------------------------------ Lamplight Row (Kingsmere)
  { id: "P05", name: "Lamplight Row", district: "D02", view: "lamplight_row",
    notes: "A hidden street of all-night shops, reached through a door in a Kingsmere bus shelter: crooked gables, hanging lamps in every colour, cobbles, a smell of toffee and ozone, owls on the gutters." },
  { id: "P06", name: "The Wren's Nest", district: "D02", view: "wrens_nest",
    notes: "Wrenfold's welcome office: a tall narrow shopfront full of pigeonholes, forms that fold themselves, a kettle, a sleepy wren on the counter, and Mr Fitch." },
  { id: "P07", name: "Pellow & Daughters, Wandwrights", district: "D02", view: "wand_shop",
    notes: "Drawers of wands to the ceiling, ladders, sawdust, a workbench with glowing shavings, a bell that rings before the door opens." },
  { id: "P08", name: "Hask & Needle", district: "D02", view: "robe_shop",
    notes: "Bolts of cloth in house colours, mirrors that show you from behind, a gossiping tape measure." },
  { id: "P09", name: "The Menagerie", district: "D02", view: "menagerie",
    notes: "Familiars in baskets, cages with open doors, a sleepy fox, a hundred owls, hay, incense, a warm dark." },
  { id: "P10", name: "The Lamp & Ladle", district: "D02", view: "lamp_ladle",
    notes: "All-night café-inn: soup in bowls the size of hubcaps, mismatched chairs, a fire, a cat on every table." },
  { id: "P11", name: "Platform Nought", district: "D05", view: "platform_nought",
    notes: "Under Kingsmere Central through a luggage office: a gaslit platform, the Lantern Train in green and gold, steam, trunks, familiars in carriers, goodbyes." },

  // ------------------------------------------------------------------ Wrenfold
  { id: "P12", name: "Wrenfold Mere and the Boathouse", district: "D03", view: "mere_night", variants: ["mere_frozen", "mere_day", "boathouse"],
    notes: "A long black lake in the hills; the castle on its wooded island; the old boathouse with lantern-boats that row themselves. Freezes at Longnight." },
  { id: "P13", name: "The Lantern Hall", district: "D03", view: "lantern_hall", variants: ["lantern_hall_emberfall", "lantern_hall_longnight", "lantern_hall_dark"],
    notes: "Ten thousand paper lanterns drifting under a roof no one's seen; four long house tables; High Table under a great round window; the four roosts in the high corners. The heart of the school." },
  { id: "P14", name: "Larkspire Tower", district: "D03", view: "larkspire",
    notes: "Larkspire's round common room at the top of the east tower: cushions, gold-and-rose hangings, a balcony that catches the dawn, a piano nobody can play." },
  { id: "P15", name: "The Owlcombe Stacks", district: "D03", view: "owlcombe",
    notes: "Owlcombe's common room under the Observatory: shelves and ladders, armchairs, a ceiling of real night sky, plum and silver." },
  { id: "P16", name: "The Heronmere Cloister", district: "D03", view: "heronmere",
    notes: "Heronmere's common room half under the Mere: green water-light through tall windows, fish going by, sea-green cushions, a still pool." },
  { id: "P17", name: "The Rookhallow Undercroft", district: "D03", view: "rookhallow",
    notes: "Rookhallow's common room beneath the kitchens: warm stone, forges, workbenches, half-built contraptions, copper and black." },
  { id: "P18", name: "The Wordcraft Gallery", district: "D03", view: "classroom",
    notes: "A long classroom with tall windows, desks carved with four hundred years of initials, chalk spells on the board, floating feathers." },
  { id: "P19", name: "The Brewing Cellars", district: "D03", view: "brewing_cellars",
    notes: "Vaulted cellars, cauldrons over blue fires, jars of things, steam, Professor Kovač's silence." },
  { id: "P20", name: "The Glasshouses", district: "D03", view: "glasshouses",
    notes: "Victorian glasshouses on the south lawn: grumbles in pots, candle-moss, a vine that hums, fogged glass." },
  { id: "P21", name: "The Observatory", district: "D03", view: "observatory",
    notes: "A brass-domed tower with a great telescope, star charts, a slot of night sky." },
  { id: "P22", name: "The Long Stacks", district: "D03", view: "library",
    notes: "The library: a long galleried hall of books, rolling ladders, green lamps, a restricted cage, Miss Dunne." },
  { id: "P23", name: "The Warding Hall", district: "D03", view: "warding_hall",
    notes: "A stone hall scorched by four centuries of practice spells; training circles on the floor; shields on the walls. The Order's headquarters from November." },
  { id: "P24", name: "The Infirmary", district: "D03", view: "infirmary",
    notes: "Long white ward with iron beds, screens, a fire, Matron's desk, bottles that glow." },
  { id: "P25", name: "The Weathervane Room", district: "D03", view: "weathervane_room",
    notes: "The Headmistress's round study at the top of the central tower: weather instruments, a hundred clocks, a sleeping kestrel, Hester Wren's portrait." },
  { id: "P26", name: "The Rookery", district: "D03", view: "rookery",
    notes: "The familiar tower: perches, baskets, straw, a hundred animals, windows open to the wind." },
  { id: "P27", name: "The Glimmer Pitch", district: "D03", view: "glimmer_pitch", variants: ["glimmer_pitch_snow"],
    notes: "Over the Mere's south shallows: floating lantern-hoops, stands of old timber, house banners." },
  { id: "P28", name: "The Lanternwarden's Cottage", district: "D03", view: "tully_cottage",
    notes: "A crooked stone cottage by the boathouse: oil drums, a hundred tapers, spare lanterns drying on lines, a kettle, a photograph of a girl." },
  { id: "P29", name: "The Old Cloisters", district: "D03", view: "old_cloisters",
    notes: "Sealed cloisters under the school: dripping stone, old wards scratched on pillars, locked doors, something that calls names." },
  { id: "P30", name: "The Heartfire Chamber", district: "D03", view: "heartfire",
    notes: "At the root of the rock beneath the school: a cavern where Hester Wren's flame burns in a crack in the stone, white-gold, and every lantern's thread runs up from it." },
  { id: "P31", name: "The Whispering Wood", district: "D03", view: "whispering_wood",
    notes: "Old forest on the island's north end: silver birches, whispering leaves, will-o'-lights, things that watch." },
  { id: "P32", name: "Wrenfold's corridors", district: "D03", view: "corridor", variants: ["corridor_night"],
    notes: "Stone corridors and stairs that rearrange when bored, portraits that gossip, suits of armour with nesting birds, lanterns in brackets." },
  { id: "P33", name: "The Kitchens", district: "D03", view: "kitchens",
    notes: "Huge warm kitchens: copper pans, bread ovens, a cook called Mrs Pettigrew and her goat." },

  // ------------------------------------------------------------------ Thimble Cross
  { id: "P34", name: "Thimble Cross", district: "D04", view: "thimble_cross", variants: ["thimble_cross_snow"],
    notes: "The village at the south end of the Mere: a crooked high street, a green, a market cross, snow on everything in December." },
  { id: "P35", name: "Sugar & Sorcery", district: "D04", view: "sweetshop",
    notes: "The sweetshop: jars to the ceiling, humming humbugs, fizzing moonstones, chocolate wrens that flap." },
  { id: "P36", name: "The Crooked Lantern", district: "D04", view: "crooked_lantern",
    notes: "The pub: low beams, a roaring fire, butterbeer-cousin 'hearthale', Moll Dunmore." },
  { id: "P37", name: "The Candlestones", district: "D04", view: "candlestones",
    notes: "A ring of standing stones on the hill above the village, where the Brightfire burns in May." },

  // ------------------------------------------------------------------ elsewhere
  { id: "P38", name: "The Lamplighters' House", district: "D05", view: "lamplighters",
    notes: "The Order's headquarters in Kingsmere: a tall black townhouse with a lamp over the door that never goes out; maps, briefings, tired people." },
  { id: "P39", name: "St Ide's", district: "D05", view: "st_ides",
    notes: "The hospital for the hollowed: a quiet Victorian building, long pale wards, patients sitting very still by the windows, visitors' chairs nobody uses." },
  { id: "P40", name: "The drowned chapel, Saltmarrow Fen", district: "D06", view: "fen_chapel",
    notes: "A half-sunk chapel in the marshes: grey reeds, black water, a roof open to the sky, candles that burn grey. The Choir's gathering place." }
];

module.exports = { places, districts };
