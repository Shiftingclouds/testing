NB.scene("ch09", String.raw`
*mood day
*set ch 9
*chapter 9 Under Wrenfold
*comment ---------------------------------------------------------------- CH09.PICK.01
*sid CH09.PICK.01
*date 2026-11-04 07:30
*place P13 lantern_hall
*present toby idris mina familiar
November comes in with fog.

It lies on the Mere every morning like wet wool, so thick that from the windows of the Lantern Hall you can't see the water at all, only a white nothing where the water ought to be, and the tops of the far pines sticking out of it like the teeth of a comb. It doesn't lift until eleven. Some days it doesn't lift at all. The boats stay tied up in the boathouse, knocking gently against each other, and Coach Okoro moves Flight indoors to the long gallery over the kitchens, where you learn to hover a broom six inches off the floorboards between the suits of armour, and everybody gets splinters.

The castle changes with the weather. The fires in the common rooms are lit before breakfast now, not after. The lanterns in the Hall burn a little lower and a little warmer, as if they're saving themselves. Every corridor smells of wet wool and woodsmoke and the eucalyptus stuff Matron has started handing out in brown bottles, and the whole school is full of coughs and scarves and people saying [i]is it always like this?[/i], and second-years saying [i]this is nothing, wait till February[/i]. {fam_name} has taken to sleeping on the radiator in your room, and has to be peeled off it in the mornings, warm as toast and deeply offended.

Strange things are happening, too. You can feel them the way you feel weather coming.

@mina:amused "Two stories this week," says Mina Achebe, at breakfast, from behind a teapot, with her big headphones round her neck and a slice of toast in each hand. Mina runs Wrenfold Wireless from a cupboard in the Owlcombe Stacks, and knows every rumour in the castle about a day before it happens. This morning three Owlcombes, two Larkspires and one very tired Heronmere have gathered round her end of the table like people round a news stand, and she's enjoying it enormously. "Story one. People are sleepwalking. Five so far. They get up at midnight and walk all the way down to the ground floor and stand in front of the sealed door to the Old Cloisters, in their pyjamas, and when you wake them up they say somebody was calling their name." She lowers her voice, which makes everyone lean in. "Story two. The library's losing its ink."

"Losing it where?"

@mina:amused "That," says Mina, pointing a slice of toast at you, "is the question, isn't it. You'll hear it first on the Wireless. Tonight, nine o'clock, if the aerial doesn't fall off the Observatory again."

@toby:tense "The sleepwalking's true," says Toby. He's the very tired Heronmere. He's pale and puffy-eyed, with his cardigan buttoned up wrong, and he hasn't touched his toast, which isn't like him at all. "It was me last night. I woke up at the Cloisters door with my feet freezing and Jonty holding my arm." He shivers, and wraps both hands round his mug. "Somebody was calling me. [i]Tobias. Tobias Quill.[/i] Really kindly. Like they were worried about me. Nobody calls me Tobias. Not even my mum, and she named me."

Mina has stopped enjoying herself. She puts the toast down.

@idris:tense That's when Idris Penhallow comes into the Hall, fast, which you've never seen him do. Idris doesn't hurry. He drifts. But this morning his satchel is banging against his hip and he's holding a book open in both hands as if it might spill, and he comes straight down between the tables to yours, and doesn't say good morning, and puts the book down in front of you, between the marmalade and your plate. It's the green leather one from the Long Stacks, the one with the woodcut of Hester Wren on the frontispiece. Half the pages are blank. Not faded. Blank, as if nothing was ever written on them. "It's happening all over the Stacks," he says. "Four hundred books since Sunday. Miss Dunne's beside herself. Something's eating the ink."

You turn a page. The paper's cold under your fingers, and perfectly, cleanly white, and on the next page the last three lines of a paragraph are still there, stranded in all that emptiness like the last people at a party.

You look from Toby's white face to the blank pages and back.

You can't chase both. There are lessons all day, and curfew's at nine, and the Headmistress has already said, at dinner last night, that the staff are "looking into it", which everybody knows means nobody knows. Toby is staring at his cold toast. Idris is watching you over his round glasses, very still, waiting, the way he waits for a page to turn.
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
The day goes slowly, the way days do when you're waiting for the night. Brewing, in the cellars, where Professor Kovač says nothing twice and you ruin a Stillwater tonic by thinking about voices. Wordcraft, where Professor Moth has you lighting and unlighting a candle with one word until your throat is sore. Lunch, which Toby doesn't eat.

@rowan:neutral At dinner you find Rowan at the Larkspire end of the table, working through a plate of stew as if it's done something to him, and sit down across from him, and lean in.

"Toby's been sleepwalking. Down to the Old Cloisters door. Something's calling him. I'm going to sit up outside his room tonight and..."

@rowan:neutral "I'll come," says Rowan, before you've finished the sentence. He doesn't look up. He doesn't ask a single question. He just goes back to his stew, as if he's agreed to pass the salt, and then, after a moment, adds: "I'll bring a blanket. You'll want a blanket. Heronmere's freezing."

So that night you sit up on the stone floor outside Toby's dormitory, with a blanket and a flask of tea{@house = "heronmere"|, which is easy, because it's your dormitory corridor too, and all you have to do is not go to bed|, which involves sneaking down to the Heronmere Cloister after curfew and being let in by a very nervous Jonty, who is knitting a hat for somebody's ferret and keeps dropping stitches}.

The Heronmere corridor is half underwater. The windows along one side look straight into the Mere, and at night there's nothing in them but black water pressing against the glass, and now and then a slow pale shape going past that might be a fish, or might be a trick of the lanterns. The whole corridor smells of lake. It's the coldest place you've ever sat.

@rowan:neutral You're not alone, and you're not cold for long. Rowan's there too, sitting against the wall with his knees up and his big hands hanging loose between them. He's warm; the stone round him is warm. There's a little dry patch on the damp flags where he's sitting, spreading slowly outwards. It's nice to sit next to him on a cold November night, like sitting next to a radiator that talks.

"Do you ever get cold?" you ask him, at about ten, pouring tea.

@rowan:amused "Not since I was twelve," he says. "My sisters used to fight over who got to sit next to me in the car. Four of them. In the back of an estate car, in August." He takes the cup. "Mum called me the hot-water bottle. She meant it nicely. I think." He drinks, and looks at the black window. "I'd like to be cold, sometimes. Just to see."

You don't talk much after that. You don't need to. The tea goes lukewarm. {fam_name} falls asleep across your feet. Somewhere a clock you can't see strikes eleven, slowly, and a long while later the quarter.

At half past eleven, the dormitory door opens, and Toby walks out.

His eyes are open. He's not awake. He's in his pyjamas and his too-big cardigan, barefoot, and he walks straight past you both without seeing you, down the corridor, calm and quick, like someone late for a bus. Rowan's already on his feet. You're getting to yours when you hear it: from somewhere far below, very faint, through the stone, a voice. Old and hoarse and kind, like a grandfather calling a child in from the garden at dusk.

[i]Tobias. Tobias Quill. Tobias.[/i]

You follow him. Down the main stair, past the sleeping portraits, who mutter and turn over in their frames. Down another stair, and another, into the oldest part of the castle, where the walls are rough and the lanterns in the brackets are old iron and the air smells of cold stone and something older, like the inside of a church in winter. Toby never stumbles. He never looks down. His bare feet find every step as if he's walked this way a hundred times.

At the bottom there's a door. It's black oak, bound in iron, taller than a man, and it's been sealed: a great round seal of red wax across the join, stamped with the wren, and a sign on it in old square letters: [i]THE OLD CLOISTERS. CLOSED BY ORDER. 1782.[/i]

Toby stops in front of it and stands there, swaying, and the voice on the other side calls his name.

[i]Tobias. Tobias. It isn't safe. Tobias.[/i]

@rowan:tense "It's warning him," says Rowan, very low. "Whatever it is. That's not... that's not a lure. I've heard people call like that. Into a smoke-filled house. That's a warning."

He's right. You listen, and it's true: there's nothing hungry in that voice. It's frightened. It's frightened for him.

You look at the door with the flame-sight, and you see it. On the other side, far down, something with a flame. A big, old, strange flame, grey-green like lichen on a gravestone, and it's guttering, badly, the way a candle gutters when it's nearly out. Threads come off it in every direction, dozens of them, into the stone, like roots. Half of them are cut.

You put your hand on the wax seal. It's warm, warmer than the stone round it, warm as skin. The wren stamped into it, under your palm, turns its tiny head and looks at you, the way the candles leaned to you in Pellow's on your first night. The seal cracks down the middle with a sound like a knuckle, and the door swings open, silently, onto dark stairs going down.

Rowan lets out a long breath. "Well," he says. "That's never happened to me."
*choice
  #Wake Toby first. He shouldn't go down there asleep.
    *set heart +5
    *set fr_toby +1
    You take Toby by the shoulders and say his name, gently, the way the voice has been saying it. Not Tobias. Toby. He blinks. He comes back into his eyes slowly, like somebody surfacing from deep water, and looks at the door, and the stairs, and you, and Rowan, and his own bare feet on the freezing flags.

    @toby:scared "Oh no," he says. "Oh, I've done it again." He pulls the cardigan tight round himself. His teeth have started to chatter. "Did I say anything? I didn't say anything embarrassing? Jonty says last night I asked him for a teaspoon." He looks down the dark stairs, where the voice is still calling, softer now, as if it knows he's awake. He swallows. "Are we going down there? We're going down there, aren't we."

    Rowan takes off his jumper and puts it over Toby's head without a word. It comes down to Toby's knees. It's warm as a loaf.

    @toby:warm "Oh," says Toby, muffled. "Oh, that's nice. All right. All right. I'm brave now. Let's go."
  #Let him lead. Whatever's down there called him for a reason.
    *set nerve +5
    You don't wake him. You follow him down the dark stair, you and Rowan, close behind, with your wand lit and held low. It feels like the right thing. The voice is calling him the way you'd call someone you love, and you don't think you'd want to be woken halfway to that.

    The stair goes down a long way. The walls sweat. Your wandlight shows old marks cut in the stone at shoulder height, one every few steps, like a child measuring itself against a doorframe. At the bottom, Toby stops, and blinks, and wakes, all at once, and looks round him in the dark.

    @toby:scared "Where am I?" he says, very small. Then he sees you, and his whole face sags with relief. "Oh, thank God. It's you. I thought I was dreaming. Am I dreaming?" He looks at the dark beyond your wandlight. "Tell me I'm dreaming."

    @rowan:amused "You're not dreaming, mate," says Rowan. "You're barefoot. Have my socks."
*page_break
*comment ---------------------------------------------------------------- CH09.CLOISTERS.02
*sid CH09.CLOISTERS.02
*date 2026-11-05 00:10
*place P29 old_cloisters
*present toby rowan familiar
The Old Cloisters are a square of stone arches round a garden, exactly like the cloister above, except that they're forty feet underground, and the garden is dead, and it looks as if nobody's walked here in two hundred and forty years.

It takes a moment to understand what you're looking at. Your wandlight goes up the pillars and finds carvings on every one: the old signs, the ward-marks, the same ones that are cut into the stones round the island, cut deep here and worn smooth, as if hands have rubbed them for luck for a very long time. Water drips somewhere, slow and regular as a clock. The dead garden in the middle is grey ferns, dry as paper, and a stone fountain with no water in it. The air is so cold it hurts your teeth. Your breath hangs in front of you and doesn't drift away, because there's nothing down here to move it.

{fam_name} goes very quiet against you. Toby is holding your sleeve. Rowan has moved, without seeming to, so that he's half a step in front of both of you.

In the middle of the dead garden, standing in the dry fountain, is somebody.

He's tall. Nine feet, maybe. He's made of... you can't tell. Dust and old stone and cobwebs and candle-stubs, and the shape of a man in a long coat and a wide hat, the way a man might look if you built one out of the inside of a very old church. He has no face. Where his face should be there's a hollow, and in the hollow, faintly, the lichen-green flame you saw through the door, guttering. From him, going out into the pillars, into the ward-marks, into the stone, are threads. Dozens and dozens of threads. Like roots. Like a spider's web with him at the centre.

Half of them are cut.

@toby:scared Toby's hand tightens on your arm. "That's it," he whispers. "That's the voice. That's him."

The figure turns its faceless head towards you, and speaks with the old hoarse kind voice, not out loud, but inside your ears, inside the stone, the way you hear your own thoughts.

[i]Tobias. You came. Good. Good. Listen. Listen to me. It isn't safe. The doors are opening. Somebody is opening my doors.[/i]

His green flame gutters, and flares, and gutters. You look at it with the flame-sight, and it's like looking down a well: it goes back and back, further than anything you've ever looked at, further than the Headmistress, further than the lanterns. Old. Tired past tired. And every cut thread round him is a cut in him; you can see him flinch from them, the way you'd favour a burnt hand.

"What are you?" you whisper.

[i]Watchman,[/i] he says, as if it's a job and not a name. [i]She set me here. To hold the doors. To call them in when it's dark.[/i] The dust of his long coat shifts. [i]Nobody comes down the stairs. Nobody has come down the stairs in so long. I call and I call.[/i]

@toby:small "He's been calling everyone," Toby whispers. "Not just me. Hasn't he. All the sleepwalkers." He's still holding your sleeve. "He's been trying to get somebody to come."

[i]I can't hold them,[/i] says the Watchman. [i]I can't hold them all. Somebody inside. Somebody who knows the way. They come through the water door, and up, and they cut, and they cut...[/i]

@rowan:tense "Water door?" says Rowan.

The Watchman lifts one long arm of dust and stone, slowly, with a sound like a bookcase settling, and points across the dead garden to the far side of the cloister. There's an archway there, and beyond it a low tunnel, sloping down, with water glinting at the bottom. You can smell the Mere: weed and cold and mud. You can hear, very faintly, water lapping against wood.

[i]The boathouse,[/i] says the Watchman. [i]The old way. From the boathouse, under the Mere wall, into my cloister, and up. Nobody has used it in two hundred years. Somebody uses it now.[/i]
*clue e15
His flame gutters again, low, so low you think it'll go out. The threads round him flicker. Somewhere above you, very faintly, through forty feet of stone, you hear a lantern in the castle go dark: a small soft sound, like somebody blowing out a match in the next room.
*choice
  #Put your hands on him. Steady his flame, the way you've learned to steady a flame.
    *set kindling +10
    *set heart +5
    You walk across the dead garden, through the grey ferns, which crumble round your ankles, and climb into the dry fountain, and put both hands flat on the Watchman's chest, on the dust and stone and cobweb, where his flame is.

    He's cold. Colder than Delphine's hollow. Under your hands, his flame thrashes, lichen-green and guttering, frightened, like a bonfire in a gale, but so old and so tired. You think [i]steady[/i]. You think it the way you'd think it at a grandfather on a bad night, sitting up with him till the morning. Steady. You're not alone. Steady.

    It takes a long time. Your arms start to ache, and then to burn, and then to go cold, cold to the shoulder, the way your hand went cold on the stair. Behind you, you can hear Toby breathing too fast, and Rowan saying something low to him, over and over. But slowly, slowly, the green flame in the Watchman's hollow face stops guttering. It steadies. It grows. It brightens, until the whole dead cloister is lit green-gold, like sunlight through leaves, and for a moment you can see what the garden must have been: the shapes of beds, a stone bench, a sundial with nothing to tell the time by. The cut threads don't mend; you can't mend them. But the ones that are left pull taut, and hold.

    [i]Oh,[/i] says the Watchman, very softly, inside your ears. [i]Oh. A light in the hands. I haven't felt that since she made me.[/i] He puts one great dusty hand, very gently, on the top of your head, like a blessing. It weighs almost nothing. [i]Thank you, little wren.[/i]

    You climb down out of the fountain shaking and grey, and your knees give, and Rowan catches you, and holds you up, and he's so warm that you could cry.

    @rowan:warm "Got you," he says into your hair. "Got you. That was..." He doesn't finish. He doesn't let go, either, not for a while.
    *set st_rowan +1
  #Put up a shield, [i]hald[/i], and get everyone out. He's frightened and he's huge.
    *set flame +5
    *set nerve +5
    You get between the Watchman and the others and say [i]hald[/i], and a shield jumps up, bright as glass, humming faintly, and the Watchman stops, and looks at it, and at you, with his faceless head tilted, like a dog that's been shouted at and doesn't know why.

    [i]I would never hurt you,[/i] he says, sadly. [i]I only call. I only warn. It's all I have left.[/i]

    You back out, the three of you, the way you came, with the shield up and your wand arm aching. Nobody speaks. Toby is holding the back of your jumper. At the top of the stairs, you look back. He's still standing in the dry fountain, alone, in the dark, with his green flame guttering, calling, very faintly: [i]It isn't safe. It isn't safe.[/i]

    You'll hear that later, in bed, and for a lot of nights after. Not the words. How lonely it sounded.
  #Talk to him. Ask him who's cutting the threads.
    *set wit +10
    "Who?" you say. Your voice sounds very small down here, and very young. "Who's opening your doors?"

    [i]I don't know their name,[/i] says the Watchman. [i]I don't have eyes. I only feel. They come with a light that isn't theirs. A borrowed light, a little one, on a stick. And they cut, and they're sorry. I can feel them being sorry.[/i] His flame gutters. [i]And the ones who come after them, through the open door, humming, are not sorry at all.[/i]

    @rowan:tense "Humming," says Rowan. He's gone pale under the freckles. "He means them. The Choir."

    [i]I know no choir,[/i] says the Watchman. [i]I know a note. I have heard it before. Long ago. She stood where you stand and told me: if you hear it, call them. Call them all by name.[/i] The green flame dips. [i]I am calling. I am calling as loud as I can.[/i]

    A light on a stick. You think about it all the way back up the stairs, and you don't understand it, and you can't stop thinking about it.

@toby:warm At the top of the stairs, when the door's shut behind you and you're standing in the old corridor again with the ordinary lanterns in their brackets, Toby says, shakily: "He was nice. Wasn't he. He was trying to look after us."

"He was."

@toby:sad "Nobody's looking after him," says Toby. He looks at the black door, and the broken seal, and puts his hand flat on the oak for a moment, the way you'd pat a horse. "Two hundred and fifty years. On his own. In the dark."

Nobody says anything to that. Rowan puts an arm round his shoulders, and you walk back up through the sleeping castle together, the three of you, past portraits snoring in their frames and lanterns burning low in their brackets. Toby doesn't say another word all the way back to Heronmere. At his door he turns round, gives you back Rowan's jumper, remembers it's Rowan's, gives it to Rowan, and goes in without saying goodnight. You hear his bed creak. It's a long time before you hear it creak again.
*goto debrief
*comment ---------------------------------------------------------------- CH09.MAP.01
*label map
*sid CH09.MAP.01
*date 2026-11-04 21:00
*mood night
*place P22 library
*present idris imogen dunne familiar
*meet dunne
All day, the Long Stacks are closed. There's a notice on the doors in shaky handwriting, [i]LIBRARY CLOSED UNTIL FURTHER NOTICE. DO NOT ASK.[/i], and people ask anyway, all day, and are sent away. You spend Turning thinking about blank pages instead of teapots, and Professor Bassani says "[i]Concentrate[/i]! Concentrate!" at you twice, which is once more than usual. At nine o'clock, when the corridors have emptied for curfew, Idris meets you at the library doors with a candle and lets you in with a key he shouldn't have.

The Long Stacks at nine o'clock on a school night ought to be full of people studying: the green lamps lit along the reading tables, the galleries creaking under careful feet, somebody asleep on a pile of Starreading charts. Tonight they're empty. The lamps are low. The long galleried hall goes back and back into the dark, shelf after shelf, and the air smells of dust and leather and, faintly, of something like the smell of a snuffed candle. The only person in it is Miss Dunne, the librarian, who is standing alone on the bare boards in a lace collar and a cloud of pencils with a blank book in each hand, crying.

@dunne:neutral She's eighty, at least, tiny and birdlike, with a pinched face and sharp black eyes and white hair in a bun stuck through with pencils. She doesn't wipe her eyes. She doesn't seem to know she's crying. "The Tollemache Herbal," she says, holding up one book, in a voice like a door creaking. "Blank. [i]Wordcraft for the Late Beginner.[/i] Blank. Hester Wren's own letters, in the case. Two of them. Blank." She puts both books down on a table very carefully, as if they're injured. "I've been here sixty years. I have seen damp, and bookworm, and a first-year who tried to make a bonfire out of the Starreading section. Nothing has ever done this."

@imogen:tense Imogen's already there, at a reading table under the one lamp that's properly lit, with a stack of books in front of her and a pen in her hand and ink on every finger, turning pages. She doesn't seem surprised to see you. She looks up. "It's not random," she says. "I've been mapping it since four o'clock. It started in the restricted cage and it's spreading out from there, like a stain. Shelf by shelf. It's getting faster." She holds up a page. As you watch, the last paragraph on it fades, letter by letter, from the bottom up, like water draining out of a basin.

"How did you get in?"

@imogen:neutral "I asked," says Imogen, as if that's obvious. "Miss Dunne needed someone who could count."

@idris:neutral Idris has gone straight past her, to the restricted cage at the far end of the Stacks: the great cage of iron and brass, two storeys high, that hums like a beehive and has never, in your time here, been open. He stands in front of it with his hands in his pockets, looking in. "It's in there," he says, when you come to stand beside him. "Whatever it is. The cage is humming wrong. Listen."

You listen. The cage's hum is usually steady, sleepy, the sound of a lot of old books dreaming. Tonight it's ragged. Hungry.

So you look with the flame-sight, and you see it: deep in the cage, on the far wall, something flat, and big, with a flame in it. Not a person's flame. A strange, spread-out, papery light, like a candle behind a paper screen, faint and flickering and starving, and threads going off it in every direction, dozens of them, out through the bars and into the walls of the castle, like lines on a map.

"It's the map," you say.

@idris:attentive Idris turns his head sharply. "What map?"

@dunne:neutral "The Wrenfold Map," says Miss Dunne, behind you, faintly. She's come down the hall without either of you hearing her, and she's holding the two blank books against her chest like a pair of hurt birds. "On the back wall. Hester Wren's apprentice painted it for her, in sixteen-forty, and it hasn't moved an inch since. I dust the frame. That's all anybody's allowed to do."

"What's it a map of?"

@dunne:neutral "The island. The castle. Every stone." She hesitates, the way she might over a book she doesn't lend out. "And the wards."
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

    @idris:tense "The wards are being cut," he says. "It's different." He takes off his glasses and rubs his eyes, and without them he looks younger, and much more tired, and you see how long it's been since he slept. "I've been reading about this castle for twelve years. I know every book in this room. I know which ones lie. And I've never been so frightened of what one of them might say." He puts his glasses back on. "Will you help me open the cage? I have a key. I'm not supposed to have a key."

    "You've got a key to everything."

    @idris:amused Something almost like a smile. "Not everything," he says. "Yet."
  #Ask Imogen how fast it's spreading. If she's mapped it, she can predict it.
    *set st_imogen +1
    *set wit +5
    @imogen:attentive "Three shelves an hour," she says instantly, and turns her notebook round so you can see. She's drawn the whole library, gallery by gallery, in tiny neat squares, and shaded the blank ones in pencil. The shading spreads out from the cage like a bruise. "Accelerating. By dawn it'll be out of the Stacks and into the Owlcombe common room, and by Friday it'll have eaten every book in the castle." She taps the page. "Whatever's doing it is getting stronger as it feeds. We have to stop it tonight."

    We, she says. As if it's obvious. As if there was never any question that you'd be here, at a quarter past nine, in a closed library, with her. You find you don't mind at all.

    @imogen:neutral "What?" she says, catching your face.

    "Nothing. Three shelves an hour. Go on."
@idris:neutral Idris has a key to the restricted cage, which surprises nobody but Miss Dunne, who looks at it hard and then decides, visibly, not to have seen it. At a quarter to midnight, when she's been persuaded to go to bed with a hot-water bottle and a promise, the three of you open the iron door, and go in.

The cage smells of iron and old paper and, underneath, something sour, like milk on the turn. The shelves inside are chained. Some of the books on them turn their spines to watch you pass.

The Wrenfold Map covers the whole back wall: twelve feet across, painted on old stretched canvas gone brown and gold with age. It's the island, from above, as a bird would see it: the castle in the middle, every tower and roof and courtyard drawn in tiny careful lines, the Mere all round it in blue-black ink, the Whispering Wood, the boathouse, the Glasshouses with every pane picked out in white. All round the edge of the island runs a ring of tiny red marks: the ward-stones. From every mark, a thin red line runs inwards, under the castle, to a single point at its heart, deep down, painted in gold leaf. Like the spokes of a wheel.

Some of the red lines have gone grey.

The map's moving, too. Faintly. Rippling, like a flag in a slow wind. The ink in the Mere swirls. And from the canvas, very faintly, comes a sound like someone breathing through their mouth, hungry.
*page_break
*comment ---------------------------------------------------------------- CH09.MAP.02
*sid CH09.MAP.02
*date 2026-11-05 22:00
*place P22 library
*present saoirse idris imogen familiar
It takes you a whole day to work out how to feed it.

@idris:neutral That first night, nothing works. Idris sits cross-legged in front of the canvas with the oldest book in the cage open across his knees and reads to it, aloud, in his low careful voice, on the theory that it might want words. He gets three pages in. Then he stops. "It isn't listening," he says.

"How can you tell?"

@idris:neutral "The same way you can with people." He closes the book, gently, as if it might be disappointed too. "It's waiting for me to finish so it can go on being hungry."

@imogen:tense Imogen tries a mending charm on the corner of the canvas, drawing the shape in the air with her wand, precise as a signature, and the charm simply sinks into the paint and disappears, like a stone into a pond. She tries it again. She says a word under her breath you've never heard her say, and then looks round guiltily, as if Miss Dunne might have heard it from her bed three floors away. You try the flame-sight until your eyes water, and all it tells you is what you already know: that the thing is starving, and frightened, and getting weaker. At four in the morning you give up and creep back to bed through the dark castle, and in the morning two more bays of the Long Stacks have gone blank.

The day is very long. You sit through lessons without hearing a word. At lunch Imogen draws the map from memory on a napkin, and Idris doesn't come to lunch at all, and somewhere in the afternoon, in Herbwork, with your hands in a pot of grumbles, you think: [i]it's not a book. It's a machine. It's a machine that's run out of fuel.[/i] And you know exactly who to ask about machines.

@saoirse:amused It takes Saoirse Maddock about twenty minutes, once you bring her in. She turns up at ten o'clock that night with a rucksack full of rubber tubing and copper pipe and a stirrup pump from a bicycle and a two-gallon bottle of ink she's liberated from the Wordcraft Gallery, and builds, on the floor of the restricted cage, in front of an astonished Idris, a machine. "An ink-pump," she says, round a mouthful of washers. "Obviously. It's hungry. You feed it. It's an engine, it just runs on ink instead of petrol." She tightens a jubilee clip with her teeth. "Who's got a spoon? Doesn't matter. Somebody hold the bottle."

@idris:neutral "This is the most important artefact in the Long Stacks," says Idris faintly.

@saoirse:amused "Then it deserves a decent pump," says Saoirse. "Bottle. Up. Higher. Lovely."

It's ridiculous. It works. The pump chugs and wheezes and pushes ink up the tube to a brass nozzle that Saoirse holds, very carefully, against the edge of the canvas, and the map drinks. You can hear it drink, a soft thirsty sound, like a cat at a saucer, and the rippling slows, and the painted Mere goes still, and Imogen lets out a breath she seems to have been holding since yesterday.

But the papery flame in it doesn't steady. It drinks, and drinks, and stays faint and flickering, starving, because ink isn't what it's starving for.

You know what it's starving for. You can see it. The red lines that have gone grey.
*choice
  #Put your hand flat on the gold point in the middle. Steady it from the heart.
    *set kindling +10
    *set heart +5
    You put your hand flat on the gold leaf at the centre of the map, on the point where all the red lines meet, under the painted castle. The canvas is warm, warm as a sleeping animal. You think [i]steady[/i], the way the Headmistress has been teaching you on Friday afternoons, breathing out for six, and you feel the map's strange spread-out papery flame hear you, and gather itself, and settle, the way a flock of birds settles on a field.

    The map goes still. The grey lines stay grey; you can't mend them. But the red ones glow, brighter, taut and bright. Then the map does something none of you expected: it shows you.

    Lines move across the canvas, drawn in fresh red ink, as if by an invisible pen. A dotted path, winding round the castle, through the courtyards and along the walls, past the Glasshouses, round the boathouse, up to the Lantern Hall, and back, in a long loop. Everywhere the dotted path touches a ward-line, the ward-line is grey.

    @imogen:attentive "It's a route," says Imogen, very softly. "Somebody's walking a route. The same route. And cutting the wards as they go."

    @idris:tense "It's the lantern round," says Idris. He's gone grey himself. "That's the route the Lanternwarden walks every night. To feed the lanterns." He looks at you. "Every lantern in the castle, in order. I've watched him do it from the library windows a hundred times. That's the route."

    @saoirse:neutral Saoirse, holding the nozzle, looks from one of you to the other. "Mr Tully?" she says. "Old Tully? He gave me a biscuit on the first night. He knows my motorbike's name."

    Nobody says anything. The pump wheezes.
    *clue e08
  #Let the pump feed it, and look for what it's trying to show you.
    *set wit +10
    You let it drink. And you look, not with the flame-sight, just with your eyes, at the painted island, at the red lines and the grey ones. The grey ones aren't random. You trace them with your finger, not quite touching the canvas. The south ward by the Glasshouses. One by the boathouse. One by the Rookery stairs. One by the kitchen gate. You go and get a pencil, and on a sheet of paper, you join them up, in the order they must have gone grey, faintest first, and it's a loop. A route round the castle, the long way, past every lantern in every bracket.

    @idris:tense Idris looks at the paper without speaking, while the pump wheezes and Saoirse hums tunelessly to herself over the nozzle. "That's the lantern round," he says at last. "The Lanternwarden's. Every lantern in the castle, in order."

    @imogen:tense "Or somebody who knows it," says Imogen quickly. "Anybody could know it. It's not... it doesn't mean..."

    Nobody finishes that sentence.
    *clue e08

@idris:neutral There's one more line on the map that none of you noticed before, because it's so faint: a thin old brown line, like a crack in the paint, running from the boathouse on the shore, under the Mere wall, into the middle of the castle, into a square of arches forty feet underground marked, in tiny old letters, [i]the Olde Cloyster[/i]. "A passage," says Idris. "From the boathouse. Nobody's used that in two hundred years." He looks at the grey ward-line beside it. "Somebody's used it this year."
*clue e15
@saoirse:neutral At two in the morning the map's quiet, and full, and still, and the books on the shelves outside the cage have stopped fading. Idris and Imogen have gone back up to Owlcombe, arguing in whispers about what the route means, Imogen with her notebook clutched to her chest, Idris walking a step behind her with his hands in his pockets. You're left sitting on the floor of the cage with Saoirse, among the rubber tubing and the empty ink bottle and a great many washers.

She's sitting still. Knees up, back against the bars, looking at the map. Not fiddling with anything. Her hands are lying in her lap, black with ink to the wrist, and for once they aren't doing anything at all.
*if (st_saoirse >= 3) and not(b_saoirse_still)
  @saoirse:tense "I don't stop," she says, suddenly, to the map. "You've noticed. Everybody notices. I've got twelve projects and I'll never finish one." A long pause. "My mam left when I was seven. Packed a bag on a Tuesday. I think I decided that day that if I never stopped moving, I'd never be the one standing still when somebody went." She laughs, not really a laugh. "Sorry. It's two in the morning. It's the map. It makes you think about routes."
  *set b_saoirse_still true
  *set st_saoirse 4
  *choice
    #"You finished the ink-pump. Tonight. That's one."
      *set heart +5
      @saoirse:warm She looks at the ink-pump, wheezing quietly on the floor, dripping on Miss Dunne's flagstones. She looks at you. "Huh," she says. Then, slowly, she smiles, the chipped-tooth smile, but softer than you've ever seen it. "That's one." She reaches out and pats the pump, the way you'd pat a dog that's done well. "Don't tell anyone. I've got a reputation."
    #Don't say anything. Just sit still with her. As long as she wants.
      *set nerve +5
      You don't say anything. You sit still beside her, on the cold floor of the cage, and after a while she leans her head on your shoulder. Her hair smells of engine oil and ink. You both watch the map breathe, slow and even now, like somebody asleep, and nobody moves for an hour.
*else
  @saoirse:amused "That," she says, patting the ink-pump, "is the best thing I've ever built." Then, quieter, picking at the ink on her thumb: "Thanks for asking me. Nobody ever asks me for the useful stuff. Just the explosions." She bumps your shoulder with hers. "I'm useful, me."

  "You're very useful."

  @saoirse:laugh "Say it again. Slower. I want to remember it."
  *set st_saoirse +1
*goto debrief
*comment ---------------------------------------------------------------- CH09.DEBRIEF.01
*label debrief
*sid CH09.DEBRIEF.01
*date 2026-11-07 10:00
*mood day
*place P25 weathervane_room
*present kestrel familiar
The note comes at breakfast on Saturday, folded small and tucked under the rim of your plate by nobody you see: [i]The Weathervane Room, ten o'clock, if you please. I. K.[/i] In green ink.

You've had two nights of bad sleep and a day of lessons you can't remember, and you go up the narrow stair to the top of the tower slowly, with {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|on your shoulder|at your heels}. The fog's lifted for once. Through the slit windows on the stair you can see the Mere, flat and pewter-coloured under a low white sky, and the boathouse on the shore, small and dark, with a thin line of smoke going up from Mr Tully's cottage beside it.

The Weathervane Room is full of weather, the way it always is. Weathervanes turning slowly on every shelf and sill and hook, brass cockerels and copper fish and a tin wren the size of a thumbnail, each one pointing its own way. The fire's lit. There's lemon cake on the table, left over from yesterday's lesson, and the Headmistress's small hawk asleep on its perch with its head under its wing.

@kestrel:attentive She pours you tea before she lets you say anything, and makes you drink half of it, and pushes the lemon cake an inch nearer. Then she sits back. "From the beginning," she says. "And leave nothing out because it sounds silly. In my experience the silly parts are the ones that turn out to matter."

*if ch09_way = "cloisters"
  So you start with Toby, barefoot, walking past you in the Heronmere corridor with his eyes open. The voice through the stone. [i]Tobias.[/i]

  @kestrel:attentive "Kind," she says. "You said the voice was kind."

  "Frightened. Frightened for him. Rowan said it wasn't a lure; it was a warning. He said he's heard people call like that into a burning house."

  @kestrel:neutral "Mr Ashby would know the difference better than most." She nods for you to go on, and you tell her about the black door, and the red wax, and the wren in it turning its head under your hand. One of her eyebrows goes up, very slightly, and stays there.

  @kestrel:grave "That seal," she says, "has been on that door for two hundred and forty years." That's all. She doesn't say anything else about it, and somehow that's worse than if she had.

  Then the dead garden, and the thing in the fountain, and the threads. "He said [i]she[/i] set him there," you say. "To hold the doors. He didn't say who she was."

  @kestrel:grave The Headmistress's cup stops halfway to her mouth. Her eyes go, just for a second, to the portrait over the fireplace, and come back. "Go on," she says quietly.

  "He said they come in by the water door. From the boathouse. Under the Mere wall."
*else
  So you start with Idris, coming down the Hall with the blank book in his hands, and Miss Dunne in the empty Stacks, crying without knowing she was crying.

  @kestrel:attentive "Miss Dunne," says the Headmistress, "let three students into the restricted cage. At midnight."

  "She went to bed first. With a hot-water bottle. Idris had a key."

  @kestrel:neutral "Of course he did." She waves you on, and you tell her about the map breathing, and the ink going, and the first night when nothing worked. When you get to Saoirse and the stirrup pump, the corner of her mouth goes, very slightly, somewhere it doesn't usually go. "Miss Maddock built a pump," she says, "for the Wrenfold Map."

  "Out of a bicycle."

  @kestrel:neutral "Out of a bicycle," she repeats, faintly, as if she's putting it away somewhere safe for a bad day when she'll need it. Then the smile's gone, and she listens without moving to the rest: the red lines and the grey ones, the dotted route, and the thin old brown line from the boathouse that none of you saw until the end.

"And the boathouse passage," you finish. "It comes out in the Old Cloisters. Somebody's been using it."

@kestrel:grave She doesn't say anything for a while. The weathervanes turn slowly all round you. Her tea has gone cold in her hands, and she hasn't noticed.

@kestrel:grave When you've finished, she puts her cup down. "Twenty points to {@house = "larkspire"|Larkspire|}{@house = "owlcombe"|Owlcombe|}{@house = "heronmere"|Heronmere|}{@house = "rookhallow"|Rookhallow|}," she says. "For courage, and for breaking curfew in a good cause, which I'm going to pretend I didn't hear about." She doesn't smile. "And for telling me. Most people don't. They think the grown-ups know already."

@kestrel:grave "The wards are being opened," she says, quietly. "From inside. I've suspected it since Delphine. I didn't want to believe it." She looks out of the window at the pewter Mere. "Four hundred years, and nobody's ever opened them from inside."

"The boathouse passage," you say. "Can it be sealed?"

@kestrel:neutral "It can and it will," she says. "Today. I'll have Mr Tully do it; he knows the boathouse better than anyone living. He'll have it bricked up by tonight."

On the wall over the fireplace, in her cracked gilt frame, the painted old woman in the oilskin coat seems to shift her weight, very slightly, the way someone does when they've heard a name they know.
*points +20
*if ch09_way = "map"
  You think about a dotted red line on a painted map, winding round the castle past every lantern. You think about the lantern round. You open your mouth.

  @kestrel:attentive The Headmistress is looking at you, very steadily, over the rim of her cup. "Yes?" she says.
  *choice
    #Tell her about the route. That it matches the lantern round.
      *set wit +5
      "The route on the map," you say. "The dotted line. We traced it all the way round, and Idris knew it. He knew it before we'd got to the end." You make yourself say the rest. "It's the lantern round. It's Mr Tully's round."

      You tell her how Idris went grey when he said it, and how the pump went on wheezing on the floor of the cage, and how, after that, for a long time, nobody in the cage said anything at all.

      @kestrel:grave She's quiet for so long that the fire settles in the grate and one of the weathervanes swings right round and points at the door. "Absalom Tully has been at this school for forty-one years," she says, at last. "He carried me across the Mere in his boat when I was a first-year with a broken ankle. He knows every student's name. His daughter is in St Ide's." She puts her hand flat on the table. "Anyone could walk the lantern round. Every member of staff knows it. Half the second-years know it." But her hand, you notice, is pressing down very hard on the wood, hard enough to whiten the knuckles. "Thank you for telling me. Leave it with me."
    #Don't. Not yet. You don't want it to be true.
      *set heart +5
      You close your mouth. You think about Mr Tully kneeling on the wet stones with his bad knees, setting Maisie's lopsided lantern on the water. You think about him relighting the lanterns in the Hall at dinner, one by one, and knowing everybody's name. You don't want it to be true. You don't say it.

      @kestrel:neutral The Headmistress waits. When you don't say anything, she nods, slowly, as if you've told her something anyway, and pours you more tea you don't want.
*else
  You think about the Watchman's voice, hoarse and kind: [i]they come with a light that isn't theirs. A borrowed light, a little one, on a stick.[/i] You don't know what it means. You file it away, the way Imogen would, in the drawer at the back of your mind where you keep the things that don't fit yet.

@kestrel:neutral "Go and have your Saturday," she says. "Go to the village next month with your friends. Buy sweets. Be twenty-five." She almost smiles. "I'll worry about the wards. It's my job, and I've had a great deal of practice." But as you go, she's already turned to the window, and the Mere, and the boathouse, very small and far below on the grey water.

You walk down the tower stair slowly. It's a bright cold Saturday. Somewhere below, somebody is playing Glimmerball in the courtyard with a tennis ball and a lot of shouting, and the kitchens are sending up a smell of baking bread, and the whole castle feels, for the first time in days, like a school again. You try to let it. You very nearly manage.
*journal [b]Chapter 9.[/b] {@ch09_way = "cloisters"|Under the sealed Old Cloisters you found the Watchman, Hester Wren's old ward-guardian, calling the names of students he can no longer protect. Someone is cutting his wards, coming in from the boathouse by an old passage.|In the Long Stacks, the living Wrenfold Map was eating ink because its wards were starving. Saoirse built it an ink-pump. The map showed which wards had been opened: all along the Lanternwarden's nightly round. And an old passage from the boathouse.} The Headmistress will have Mr Tully brick up the boathouse passage.
*page_break
*goto_scene ch10
`);
