NB.scene("ch09", String.raw`
*mood day
*set ch 9
*chapter 9 Under Wrenfold
*comment ---------------------------------------------------------------- CH09.PICK.01
*sid CH09.PICK.01
*date 2026-11-04 07:30
*place P13 lantern_hall
*present toby idris mina familiar
November comes in with fog. It lies on the Mere every morning like wet wool, and the lanterns in the Hall burn a little lower, and the castle's full of coughs and scarves and people saying [i]is it always like this[/i] and second-years saying [i]this is nothing, wait till February[/i].

And strange things are happening.

@mina:amused "Two stories this week," says Mina Achebe, at breakfast, from behind a teapot, to the three Owlcombes and two Larkspires and one very tired Heronmere who've gathered round her like a news stand. "Story one. People are sleepwalking. Five so far. They get up at midnight and walk down to the ground floor and stand in front of the sealed door to the Old Cloisters, in their pyjamas, and when you wake them up they say somebody was [i]calling their name[/i]." She lowers her voice. "Story two. The library's losing its ink."

@toby:tense "It's true," says Toby. He's pale and puffy-eyed and he's not eating his toast. "The sleepwalking. It was me last night. I woke up at the Cloisters door with my feet freezing and Jonty holding my arm." He shivers. "Somebody was calling me. [i]Tobias. Tobias Quill.[/i] Really kindly. Like they were worried about me."

@idris:tense And then Idris Penhallow comes into the Hall, fast, which you've never seen him do, with his satchel banging against his hip and a book held open in both hands. He comes straight to your table. He doesn't say good morning. He puts the book down in front of you. It's the green leather one from the Long Stacks, the one with the woodcut of Hester Wren. Half the pages are blank. Not faded. Blank. As if nothing was ever written on them. "It's happening all over the Stacks," he says. "Four hundred books since Sunday. Miss Dunne's beside herself. Something's eating the ink."

You look from Toby's white face to the blank pages and back.

You can't chase both. Lessons, curfew at nine, and the Headmistress has already said the staff are [i]looking into it[/i], which everybody knows means nobody knows.
*choice
  #The voice under the Old Cloisters. It's calling Toby. That's enough.
    *set ch09_way "cloisters"
    *set fr_toby +1
    *goto cloisters
  #The ink going out of the books. Idris looks frightened, and he doesn't frighten easily.
    *set ch09_way "map"
    *set st_idris +1
    *goto map
*comment ---------------------------------------------------------------- CH09.CLOISTERS.01
*label cloisters
*sid CH09.CLOISTERS.01
*date 2026-11-04 23:30
*mood night
*place P32 corridor_night
*present toby rowan familiar
You sit up that night on the floor outside Toby's dormitory, with a blanket and a flask of tea{@house = "heronmere"|, which is easy, because it's yours too|, which involves sneaking down to the Heronmere Cloister after curfew and being let in by a very nervous Jonty}.

@rowan:neutral You're not alone. Rowan's there too, sitting against the wall with his knees up, because you told him at dinner and he said [i]I'll come[/i] before you'd finished the sentence. He's warm; the stone round him is warm. It's nice to sit next to him on a cold November night, like sitting next to a radiator that talks.

At half past eleven, the dormitory door opens, and Toby walks out.

His eyes are open. He's not awake. He's in his pyjamas and his too-big cardigan, barefoot, and he walks straight past you both without seeing you, down the corridor, calm and quick, like someone late for a bus. And from somewhere far below, very faint, through the stone, you hear it. A voice. Old and hoarse and kind, like a grandfather calling a child in from the garden at dusk.

[i]Tobias. Tobias Quill. Tobias.[/i]

You follow him. Down the main stair, past the sleeping portraits, down another stair, and another, into the oldest part of the castle, where the walls are rough and the lanterns in the brackets are old iron and the air smells of cold stone. At the bottom there's a door. It's black oak, bound in iron, taller than a man, and it's been sealed: there's a great round seal of red wax across the join, stamped with the wren, and a sign on it in old letters saying [i]THE OLD CLOISTERS. CLOSED BY ORDER. 1782.[/i]

Toby stops in front of it and stands there, swaying, and the voice on the other side calls his name.

[i]Tobias. Tobias. It isn't safe. Tobias.[/i]

@rowan:tense "It's warning him," says Rowan, very low. "Whatever it is. That's not... that's not a lure. That's a warning."

He's right. You listen, and it's true: it's not hungry, that voice. It's frightened. It's frightened [i]for[/i] him.

And then you look at the door with the flame-sight, and you see it. On the other side, far down, something with a flame. A big, old, strange flame, grey-green like lichen, and it's guttering, badly, the way a candle gutters when it's nearly out. Threads come off it in every direction, dozens of them, into the stone, like roots. And half of them are cut.

You put your hand on the wax seal. It's warm. And the wren on it, under your palm, just like the candles in Pellow's, turns its head and looks at you, and the seal cracks down the middle, and the door swings open, silently, onto dark stairs going down.
*choice
  #Wake Toby first. He shouldn't go down there asleep.
    *set heart +5
    *set fr_toby +1
    You take Toby by the shoulders and say his name, gently, the way the voice has been saying it. He blinks. He comes back into his eyes slowly, and looks at the door, and the stairs, and you, and Rowan, and says, "Oh no. Oh, I've done it again." And then, bravely, shivering: "Are we going down there? We're going down there, aren't we."
  #Let him lead. Whatever's down there called him for a reason.
    *set nerve +5
    You don't wake him. You follow him down the dark stair, you and Rowan, close behind, with your wand lit. It feels like the right thing. The voice is calling him the way you'd call someone you love. At the bottom, he stops, and blinks, and wakes, and looks round him in the dark, and says, very small, "Where am I?"
*page_break
*comment ---------------------------------------------------------------- CH09.CLOISTERS.02
*sid CH09.CLOISTERS.02
*date 2026-11-05 00:10
*place P29 old_cloisters
*present toby rowan familiar
The Old Cloisters are a square of stone arches round a garden, exactly like the cloister above, except that they're forty feet underground, and the garden is dead, and nobody's walked here in two hundred and fifty years.

Your wandlight goes up the pillars and finds carvings on every one: the old signs, the ward-marks, the same ones that are on the stones round the island, cut deep and worn smooth. Water drips. The dead garden in the middle is grey ferns and a dry fountain. The air is so cold it hurts your teeth.

And in the middle of the dead garden, standing in the dry fountain, is the Watchman.

He's tall. Nine feet, maybe. He's made of... you can't tell. Dust and old stone and cobwebs and candle-stubs, and the shape of a man in a long coat and a wide hat, the way a man might look if you built one out of the inside of a very old church. He has no face. Where his face should be there's a hollow, and in the hollow, faintly, there's the lichen-green flame you saw through the door, guttering. And from him, going out into the pillars, into the ward-marks, into the stone, are threads. Dozens and dozens of threads. Like roots. Like a spider's web with him at the middle.

Half of them are cut.

@toby:scared Toby grabs your arm. "That's it," he whispers. "That's the voice. That's him."

The Watchman turns his faceless head towards you. And he speaks, with the old hoarse kind voice, not out loud, but inside your ears, inside the stone.

[i]Tobias. You came. Good. Good. Listen. Listen to me. It isn't safe. It isn't safe. The doors are opening. Somebody is opening my doors.[/i]

His green flame gutters, and flares, and gutters. You can feel it, in the flame-sight: he's old, so old, and tired, and every cut thread is like a cut in him. He's been standing here since Hester Wren put him here, holding the wards, and now somebody's cutting them, one by one, and he's calling the names of the people he's supposed to protect because it's the only thing he can still do.

[i]I can't hold them,[/i] says the Watchman. [i]I can't hold them all. Somebody inside. Somebody who knows the way. They come through the water door, and up, and they cut, and they cut...[/i]

@rowan:tense "Water door?" says Rowan.

The Watchman lifts one long arm of dust and stone and points, across the dead garden, to the far side of the cloister. There's an archway there, and beyond it a low tunnel, sloping down, with water glinting at the bottom. You can smell the Mere. You can hear, very faintly, water lapping against wood.

[i]The boathouse,[/i] says the Watchman. [i]The old way. From the boathouse, under the Mere wall, into my cloister, and up. Nobody has used it in two hundred years. Somebody uses it now.[/i]
*clue e15
His flame gutters again, low, so low you think it'll go out. The threads round him flicker. Somewhere above you, very faintly, through forty feet of stone, you hear a lantern in the castle go dark.
*choice
  #Put your hands on him. Steady his flame, the way you steadied Rowan's.
    *set kindling +10
    *set heart +5
    You walk across the dead garden, through the grey ferns, and climb into the dry fountain, and put both hands flat on the Watchman's chest, on the dust and stone and cobweb, where his flame is.

    He's cold. Colder than Delphine's hollow. And under your hands, his flame thrashes, lichen-green and guttering, frightened, like Rowan's bonfire but so old and so tired. You think [i]steady[/i]. You think it the way you'd think it at a grandfather on a bad night. [i]Steady. You're not alone. Steady.[/i]

    It takes a long time. Your arms start to ache, and then to burn, and then to go cold, cold to the shoulder, the way your hand went cold on the stair. But slowly, slowly, the green flame in the Watchman's hollow face stops guttering. It steadies. It grows. It brightens, until the whole dead cloister is lit green-gold, like sunlight through leaves. The cut threads don't mend; you can't mend them. But the ones that are left pull taut, and hold.

    [i]Oh,[/i] says the Watchman, very softly, inside your ears. [i]Oh. A light in the hands. I haven't felt that since she made me.[/i] He puts one great dusty hand, very gently, on the top of your head, like a blessing. [i]Thank you, little wren.[/i]

    You climb down out of the fountain shaking and grey, and Rowan catches you, and holds you up, and he's so warm.
    *set st_rowan +1
  #Put up a shield, [i]hald[/i], and get everyone out. He's frightened and he's huge.
    *set flame +5
    *set nerve +5
    You get between the Watchman and the others and say [i]hald[/i], and a shield jumps up, bright as glass, and the Watchman stops, and looks at it, and at you, with his faceless head tilted.

    [i]I would never hurt you,[/i] he says, sadly. [i]I only call. I only warn. It's all I have left.[/i]

    You back out, the three of you, up the stairs, with the shield up. At the top, you look back. He's still standing in the dry fountain, alone, in the dark, calling, very faintly: [i]It isn't safe. It isn't safe.[/i]
  #Talk to him. Ask him who's cutting the threads.
    *set wit +10
    "Who?" you say. "Who's opening your doors?"

    [i]I don't know their name,[/i] says the Watchman. [i]I don't have eyes. I only feel. They come with a light that isn't theirs. A borrowed light, a little one, on a stick. And they cut, and they're sorry. I can feel them being sorry.[/i] His flame gutters. [i]And the ones who come after them, through the open door, humming, are not sorry at all.[/i]

    A light on a stick. You think about it all the way back up the stairs, and you don't understand it, and you can't stop thinking about it.

@toby:warm At the top of the stairs, when the door's shut behind you and you're standing in the old corridor again with the ordinary lanterns in their brackets, Toby says, shakily: "He was nice. Wasn't he. He was trying to look after us."

"He was."

@toby:sad "Nobody's looking after him," says Toby. And he goes quiet all the way back upstairs.
*goto debrief
*comment ---------------------------------------------------------------- CH09.MAP.01
*label map
*sid CH09.MAP.01
*date 2026-11-04 21:00
*mood night
*place P22 library
*present idris imogen dunne familiar
*meet dunne
The Long Stacks at nine o'clock on a school night should be full of people studying. Tonight they're empty except for Miss Dunne, the librarian, who is standing in the middle of the long galleried hall in a lace collar and a cloud of pencils with a blank book in each hand, and crying.

@dunne:neutral She's eighty, at least, tiny and birdlike, with a pinched face and sharp black eyes and white hair in a bun stuck through with pencils. "The Tollemache Herbal," she says, holding up one book, in a voice like a door creaking. "Blank. [i]Wordcraft for the Late Beginner.[/i] Blank. Hester Wren's own letters, in the case. Two of them. [i]Blank.[/i]" She puts both books down on a table very carefully, as if they're injured. "I've been here sixty years. Nothing has ever done this."

@imogen:tense Imogen's already there, at a reading table, with a stack of books in front of her and a pen in her hand, turning pages. She looks up. "It's not random," she says. "I've been mapping it. It started in the restricted cage and it's spreading out from there, like a stain. Shelf by shelf. It's getting faster." She holds up a page. As you watch, the last paragraph on it fades, letter by letter, from the bottom up, like water draining out of a basin.

@idris:neutral Idris is standing in front of the restricted cage at the far end of the Stacks, the great cage of iron and brass that hums like a beehive, with his hands in his pockets, looking in. "It's in there," he says, when you come to stand beside him. "Whatever it is. The cage is humming wrong. Listen."

You listen. The cage's hum is usually steady, sleepy. Tonight it's ragged. Hungry.

And then you look with the flame-sight, and you see it: in the middle of the cage, on the far wall, something flat, and big, with a flame in it. Not a person's flame. A strange, spread-out, papery light, like a candle behind a paper screen, faint and flickering and starving, and threads going off it in every direction, dozens of them, into the walls of the castle, like lines on a map.

"It's the map," you say.

@idris:attentive Idris turns his head and looks at you, sharply. "What map?"

@dunne:neutral "The Wrenfold Map," says Miss Dunne, behind you, faintly. "It hangs on the back wall of the cage. It was painted in 1640 by Hester Wren's apprentice, for her. The whole castle and the island. It's never been moved. It's never been touched." A pause. "It shows the wards."
*choice
  #Ask Idris what he knows about the map. He knows about everything in that cage.
    *if st_idris >= 2
      *set b_idris_stacks true
      *set st_idris 3
    *else
      *set st_idris +1
    *set wit +5
    @idris:neutral "It's alive," says Idris, quietly. "In a way. Hester's apprentice painted it with ink mixed with her own flame, so it would always show the wards true. It's a living map. It feeds off the wards the way a lantern feeds off the fire under the school." He looks at the starving papery light through the bars. "If it's eating ink, it's because it's starving. And if it's starving..."

    "The wards are failing."

    @idris:tense "The wards are being [i]cut[/i]," he says. "It's different." He takes off his glasses and rubs his eyes, and you see how tired he is. "I've been reading about this castle for six years. I know every book in this room. And I've never been so frightened of what one of them might say." He puts his glasses back on. "Will you help me open the cage? I have a key. I'm not supposed to have a key."
  #Ask Imogen how fast it's spreading. If she's mapped it, she can predict it.
    *set st_imogen +1
    *set wit +5
    @imogen:attentive "Three shelves an hour," she says instantly. "Accelerating. By dawn it'll be out of the Stacks and into the Owlcombe common room, and by Friday it'll have eaten every book in the castle." She taps her notes. "Whatever's doing it is getting stronger as it feeds. We have to stop it tonight."

We, she says. As if it's obvious. You find you don't mind at all.
@idris:neutral Idris has a key to the restricted cage. Of course he does. At a quarter to midnight, when Miss Dunne has been persuaded to go to bed, the three of you open the iron door, and go in.

The Wrenfold Map covers the whole back wall of the cage: twelve feet across, painted on old stretched canvas, gone brown and gold with age. It's the island, from above, as a bird would see it: the castle in the middle, every tower and roof and courtyard drawn in tiny careful lines, the Mere all round it in blue-black ink, the Whispering Wood, the boathouse, the Glasshouses. And all round the edge of the island, a ring of tiny red marks: the ward-stones. And from every mark, a thin red line, running inwards, under the castle, to a single point in the middle of it, deep down, painted in gold leaf. Like the spokes of a wheel.

Some of the red lines have gone grey.

And the map's moving. Faintly. Rippling, like a flag in a slow wind. The ink in the Mere swirls. And from the canvas, very faintly, comes a sound like someone breathing through their mouth, hungry.
*page_break
*comment ---------------------------------------------------------------- CH09.MAP.02
*sid CH09.MAP.02
*date 2026-11-05 22:00
*place P22 library
*present saoirse idris imogen familiar
It takes you a whole day to work out how to feed it.

@saoirse:amused It takes Saoirse Maddock about twenty minutes, once you bring her in. She turns up at ten o'clock the next night with a rucksack full of rubber tubing and copper pipe and a stirrup pump from a bicycle and a two-gallon bottle of ink she's liberated from the Wordcraft Gallery, and builds, on the floor of the restricted cage, in front of an astonished Idris, a machine. "An ink-pump," she says. "Obviously. It's hungry. You feed it. It's an engine, it just runs on ink instead of petrol." She connects the last pipe. "Somebody hold the bottle."

It's ridiculous. It works. The pump chugs and wheezes and pushes ink up the tube to a brass nozzle that Saoirse holds, very carefully, against the edge of the canvas, and the map drinks. You can hear it drink, a soft thirsty sound, and the rippling slows, and the painted Mere goes still.

But the papery flame in it doesn't steady. It drinks, and drinks, and stays faint and flickering, starving, because ink isn't what it's starving for.

You know what it's starving for. You can see it. The red lines that have gone grey.
*choice
  #Put your hand flat on the gold point in the middle. Steady it from the heart.
    *set kindling +10
    *set heart +5
    You put your hand flat on the gold leaf in the middle of the map, on the point where all the red lines meet, under the painted castle. The canvas is warm. And you think [i]steady[/i], the way you did on the stair, and in the Warding Hall, and you feel the map's strange spread-out papery flame hear you, and gather itself, and settle, the way a flock of birds settles on a field.

    The map goes still. The grey lines stay grey; you can't mend them. But the red ones glow, brighter, taut and bright. And then the map does something none of you expected: it shows you.

    Lines move across the canvas, drawn in fresh red ink, as if by an invisible pen. A dotted path, winding round the castle, through the courtyards and along the walls, past the Glasshouses, round the boathouse, up to the Lantern Hall, and back, in a long loop. And everywhere the dotted path touches a ward-line, the ward-line is grey.

    @imogen:attentive "It's a route," says Imogen, very softly. "Somebody's walking a route. The same route. And cutting the wards as they go."

    @idris:tense "It's the lantern round," says Idris. He's gone grey himself. "That's the route the Lanternwarden walks every night. To feed the lanterns." He looks at you. "Every lantern in the castle, in order. That's the route."

    Nobody says anything. The pump wheezes.
    *clue e08
  #Let the pump feed it, and look for what it's trying to show you.
    *set wit +10
    You let it drink. And you look, not with the flame-sight, just with your eyes, at the painted island, at the red lines and the grey ones. The grey ones aren't random. You trace them with your finger. The south ward by the Glasshouses. One by the boathouse. One by the Rookery stairs. One by the kitchen gate. You go and get a pencil, and on a sheet of paper, you join them up, in the order they must have gone grey, and it's a loop. A route round the castle, the long way, past every lantern in every bracket.

    @idris:tense Idris looks at the paper for a long time. "That's the lantern round," he says at last. "The Lanternwarden's. Every lantern in the castle, in order."

    @imogen:tense "Or somebody who knows it," says Imogen quickly. "Anybody could know it. It's not... it doesn't mean..."

    Nobody finishes that sentence.
    *clue e08

@idris:neutral And there's one more line on the map that none of you noticed before, because it's so faint: a thin old brown line, like a crack in the paint, running from the boathouse on the shore, under the Mere wall, into the middle of the castle, into a square of arches forty feet underground marked, in tiny old letters, [i]the Olde Cloyster[/i]. "A passage," says Idris. "From the boathouse. Nobody's used that in two hundred years." He looks at the grey ward-line beside it. "Somebody's used it this year."
*clue e15
@saoirse:neutral At two in the morning the map's quiet, and full, and still, and the books on the shelves outside the cage have stopped fading, and Idris and Imogen have gone back up to Owlcombe, arguing in whispers about what the route means. You're left sitting on the floor of the cage with Saoirse, among the rubber tubing and the empty ink bottle.

She's sitting still again. Knees up, back against the bars, looking at the map. Not fiddling with anything.
*if (st_saoirse >= 3) and not(b_saoirse_still)
  @saoirse:tense "I don't stop," she says, suddenly, to the map. "You've noticed. Everybody notices. I've got twelve projects and I'll never finish one." A long pause. "My mam left when I was seven. Packed a bag on a Tuesday. I think I decided that day that if I never stopped moving, I'd never be the one standing still when somebody went." She laughs, not really a laugh. "Sorry. It's two in the morning. It's the map. It makes you think about routes."
  *set b_saoirse_still true
  *set st_saoirse 4
  *choice
    #"You finished the ink-pump. Tonight. That's one."
      *set heart +5
      @saoirse:warm She looks at the ink-pump, wheezing quietly on the floor. She looks at you. "Huh," she says. And then, slowly, she smiles, the chipped-tooth smile, but softer than you've ever seen it. "That's one."
    #Don't say anything. Just sit still with her. As long as she wants.
      *set nerve +5
      You don't say anything. You sit still beside her, on the cold floor of the cage, and after a while she leans her head on your shoulder, and you both watch the map breathe, and nobody moves for an hour.
*else
  @saoirse:amused "That," she says, patting the ink-pump, "is the best thing I've ever built." And then, quieter: "Thanks for asking me. Nobody ever asks me for the useful stuff. Just the explosions." She bumps your shoulder with hers. "I'm useful, me."
  *set st_saoirse +1
*goto debrief
*comment ---------------------------------------------------------------- CH09.DEBRIEF.01
*label debrief
*sid CH09.DEBRIEF.01
*date 2026-11-07 10:00
*mood day
*place P25 weathervane_room
*present kestrel familiar
On Saturday morning, the Headmistress sends for you.

@kestrel:grave She listens to all of it, in the round room full of weather, with her tea going cold in her hands and the weathervanes turning slowly all round you. {@ch09_way = "cloisters"|The Watchman. The cut threads. The water door.|The map. The grey lines. The route.} The boathouse passage. She doesn't interrupt once.

@kestrel:grave When you've finished, she puts her cup down. "Twenty points to {@house = "larkspire"|Larkspire|}{@house = "owlcombe"|Owlcombe|}{@house = "heronmere"|Heronmere|}{@house = "rookhallow"|Rookhallow|}," she says. "For courage, and for breaking curfew in a good cause, which I'm going to pretend I didn't hear about." She doesn't smile. "And for telling me."
*points +20
@kestrel:grave "The wards are being opened," she says, quietly. "From inside. I've suspected it since Delphine. I didn't want to believe it." She looks out of the window at the fog on the Mere. "Four hundred years, and nobody's ever opened them from inside."

"The boathouse passage," you say. "Can it be sealed?"

@kestrel:neutral "It can and it will," she says. "Today. I'll have Mr Tully do it; he knows the boathouse better than anyone living. He'll have it bricked up by tonight."
*if ch09_way = "map"
  You think about a dotted red line on a painted map, winding round the castle past every lantern. You think about [i]the lantern round[/i]. You open your mouth.

  @kestrel:attentive The Headmistress is looking at you, very steadily. "Yes?" she says.
  *choice
    #Tell her about the route. That it matches the lantern round.
      *set wit +5
      You tell her. The dotted line. The lantern round.

      @kestrel:grave She's quiet for a very long time. "Absalom Tully has been at this school for forty-one years," she says, at last. "He carried me across the Mere in his boat when I was a first-year with a broken ankle. He knows every student's name. His daughter is in St Ide's." She puts her hand flat on the table. "Anyone could walk the lantern round. Every member of staff knows it. Half the second-years know it." But her hand, you notice, is pressing down very hard on the wood. "Thank you for telling me. Leave it with me."
    #Don't. Not yet. You don't want it to be true.
      *set heart +5
      You close your mouth. You think about Mr Tully kneeling on the wet stones with his bad knees, setting Maisie's lopsided lantern on the water. You don't want it to be true. You don't say it.

      @kestrel:neutral The Headmistress waits. When you don't say anything, she nods, slowly, as if you've told her something anyway.
*else
  You think about the Watchman's voice, hoarse and kind: [i]they come with a light that isn't theirs. A borrowed light, a little one, on a stick.[/i] You don't know what it means. You file it away, the way Imogen would.

@kestrel:neutral "Go and have your Saturday," she says. "Go to the village next month with your friends. Buy sweets. Be twenty-five." She almost smiles. "I'll worry about the wards. It's my job, and I've been doing it for thirty years." But as you go, she's already turned to the window, and the fog, and the boathouse, very small and far below on the black water.
*journal [b]Chapter 9.[/b] {@ch09_way = "cloisters"|Under the sealed Old Cloisters you found the Watchman, Hester Wren's old ward-guardian, calling the names of students he can no longer protect. Someone is cutting his wards, coming in from the boathouse by an old passage.|In the Long Stacks, the living Wrenfold Map was eating ink because its wards were starving. Saoirse built it an ink-pump. The map showed which wards had been opened: all along the Lanternwarden's nightly round. And an old passage from the boathouse.} The Headmistress will have Mr Tully brick up the boathouse passage.
*page_break
*goto_scene ch10
`);
