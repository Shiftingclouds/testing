NB.scene("ch03", String.raw`
*mood dusk
*set ch 3
*chapter 3 The Lantern Hall
*comment ---------------------------------------------------------------- CH03.TRAIN.01
*sid CH03.TRAIN.01
*date 2026-09-11 17:30
*place P11 platform_nought
*present toby rowan imogen saoirse cas familiar
Kingsmere Central at five o'clock on a Friday is the most ordinary place in the world, and you've never been so glad to see anything.

You come up out of a side door on the Row into a cobbled yard, and through an arch, and suddenly you're on a real street, with real buses and real rain and a man selling newspapers outside a real station, shouting the headlines. Nobody looks twice at the five of you: Toby with a cauldron under his arm and one shoe undone, Rowan carrying three people's luggage, Saoirse with her goggles on her head, Imogen reading as she walks, and you, with {fam_name} and a parcel of robes and a wand up your sleeve. Commuters flow round you like water round stones, heads down, going home. A week ago, you'd have been one of them. You feel an odd pang for them, and then a much bigger, fizzing, guilty gladness that you're not.

Platform Nought is under the station, through a door in the back of the left-luggage office marked [i]STAFF ONLY: NO REALLY[/i], and down a flight of iron stairs that goes on for longer than it should.

At the bottom, it's the nineteenth century. Gaslamps hiss on iron pillars. The roof is a curve of glass and black iron so high it's lost in steam. Alongside the platform, breathing like a sleeping animal, is the Lantern Train: six long carriages painted deep green and lined in gold, with a wren on every door and brass lamps hanging from the roof of every compartment, already lit.

*page_break

The engine is the most beautiful machine you've ever seen. It's green and gold like the carriages, with a tall brass chimney and great red wheels, and instead of a coal tender behind it there's a sort of glass-sided cabin full of what look like golden embers, stirring slowly, like fish in a tank. Saoirse stops dead in front of it with her mouth open and has to be physically dragged away by Rowan, one-handed, still staring back over her shoulder.

The platform is full of grown-ups trying not to look lost. Forty-odd of them, you'd guess, from twenty-one to thirty-something, with trunks and rucksacks and cardboard boxes and one wheelie suitcase with a sticker on it saying [i]I'd Rather Be In Ibiza[/i]. A woman in scrubs. A man in a suit, still wearing his lanyard from work. Two people who are clearly a couple, holding hands so tightly their knuckles are white. There are familiars everywhere, in baskets and on shoulders and on leads, and a goat, which nobody seems to own.

Nobody's parents are here to wave them off. That's the strangest thing about it. Just a few people, here and there, who've come to say goodbye: a man hugging his husband, a teenage girl holding her older sister's face in both hands. Everyone else is alone, and knows it, and is being very brave about it.

You find the compartment at the end, because Saoirse bags it by throwing her rucksack through the window. There's room for six. There are five of you. You've just got Toby's trunk up onto the rack, with Rowan lifting it one-handed, when the door slides open.

*page_break

@cas:neutral "Oh," says a voice, with enormous disappointment. "It's a [i]full[/i] one."

He's tall and narrow and very well-dressed, in a long black coat that cost more than your car would if you had one, with pale blond hair swept back from a long, elegant face, and cold grey eyes. He's somewhere in his late twenties. He's holding his ticket between two fingers as if it might be infectious. He looks at the five of you, and at the cauldron on Toby's knee, and at Saoirse's boots, and at the goggles, and something in his mouth sets in a way that looks like it's used to setting.

@cas:neutral "Well," he says. "Needs must." He sits down in the seat by the window, the one Toby has just stood up from to help with the trunk, and crosses one long leg over the other, and opens a newspaper.

@toby:tense "That's... sorry, that's my seat," says Toby.

@cas:neutral "Is it?" says the man, without looking up from the paper. "It hasn't got your name on it. Unlike everything else you own, I expect." He turns a page. "Casimir Drummond. You'll have heard of us. Or you won't, because you're late flames, and nobody tells late flames anything, which is rather the point of you." He glances up, once, at Toby, with contempt so polished it's almost beautiful. "My grandmother says you can smell it on people. The lateness. Like a pie that's been in the oven too long."

*meet cas
*set st_cas 1
The compartment goes very quiet. Toby goes pink to the tips of his ears. Rowan's shimmer rolls off him in a wave you can feel on your face. Imogen has closed her handbook on one finger, and has the look of someone deciding which page to hit him with.

Then you notice, because you're watching him, that Casimir Drummond's hands are shaking. Very slightly. On the edges of the newspaper. His ticket, which he's holding so contemptuously, is the same green first-year ticket as yours.
*choice
  #"Your grandmother smells pies? Must be why yours came out twenty-seven years late, then."
    *set b_cas_spar true
    *set st_cas 2
    *set wit +5
    There's a silence of about a second and a half, which is exactly how long it takes Saoirse to start laughing.

    @cas:tense Casimir Drummond looks at you over the newspaper. For a moment his whole face is utterly still. Then, very slowly, one corner of his mouth goes up. Not much. But it goes.

    @cas:amused "Fair," he says. He does not give Toby his seat back. But he folds the paper, and considers you for a second or two longer than he needs to, like someone reassessing a chess position.

    Toby, squashed in by the door, looks at you with enormous round eyes, as if you've just poked a sleeping bear and the bear has said [i]touché[/i].
  #"That's his seat. Move, please." Say it the way you'd say it at work.
    *set nerve +10
    *set fr_toby +1
    You say it the way you'd say it to a man at the front of a queue at nine in the morning who's decided the queue doesn't apply to him: flat, polite, and absolutely immovable. "That's his seat. Move, please."

    @cas:guarded He holds your gaze. You hold his. You've done this a thousand times, with worse men than him, in worse coats.

    @cas:neutral Then he stands up, precisely, and sits down on the other side of the window, and opens his paper again, as if that's where he meant to sit all along. Toby sits down in his seat and looks at you as if you've just slain a dragon.

    @toby:warm "How did you [i]do[/i] that?" he whispers, when the paper's safely up again.

    "Years of practice," you whisper back. "You'd be amazed how many people think the rules are for other people."
  #"You're late too, though. Same ticket as us. There's room. Sit down."
    *set b_cas_spar true
    *set st_cas 2
    *set heart +10
    "You're late too, though," you say, quite gently, and nod at his green ticket. "Same as us. It's fine. Toby, sit by the door, there's room."

    @cas:hurt For a second, something goes across his face that isn't contempt at all. It's like watching someone who's been braced for a punch get handed a cup of tea. He doesn't know what to do with it.

    @cas:guarded "I don't need your [i]room[/i]," he says, a beat too late, and much less smoothly. But he doesn't say anything else about pies, all the way to the hills.
  #Nod to Imogen. Let her read him the regulations.
    *set b_imogen_handbook true
    *set st_imogen 2
    @imogen:amused Imogen opens the handbook with the air of a woman drawing a sword. "Page three hundred and twelve," she says crisply. "[i]Seats on the Lantern Train are allocated by the Wren's Nest in order of arrival at the Row. A student found occupying another's seat...[/i]" She looks up. "Do you want the rest? There's a lot of it. There's a subsection."

    @cas:guarded Casimir Drummond looks at her with pure loathing. Then he moves. Imogen closes the book with a small, satisfied snap, and catches your eye, and very nearly smiles.

    Toby sits down in his seat, very carefully, as if it might be taken off him again, and looks at Imogen with something like awe.

    @saoirse:amused "Is there really a subsection?" Saoirse asks her, low.

    @imogen:amused "There are four," says Imogen. "One of them concerns livestock." She opens the book again, finds her place, and goes back to reading, but you notice the corner of her mouth stays where it is for quite a long time.

The train pulls out on the stroke of half past five with a long low whistle like an owl, and goes up.

Not up a slope. Up. The platform drops away under the window, and the glass roof opens like a flower, and suddenly you're above Kingsmere in the violet dusk: streetlights coming on below you in long gold threads, the river black and full of lights, the whole city spread out like a map with the tram lines lit. Somebody in the next compartment screams, and then laughs. Toby grips your arm.

You press your face to the window like a child. Down there, somewhere, people are coming home from work and putting the kettle on and turning on the telly, and not one of them is looking up. You watch a bus crawl along a bridge like a lit bead on a string. You watch the tower of Kingsmere Cathedral go by close enough to see the pigeons asleep on it. Then the city thins into suburbs, and the suburbs into fields, and the fields into dark.

Then the city's behind you, and there are hills.

You fly over them for two hours. The lamps in the compartment warm to gold. A woman with a trolley comes by selling tea from an urn, and pies that are still hot, and chocolate wrens that flap their wings feebly in your hand until you bite their heads off, which feels awful and tastes wonderful. Saoirse teaches Rowan a card game with rules that change every hand. Imogen reads. Toby falls asleep on your shoulder, and dribbles. {fam_name} watches the hills going by below with an expression you can only call professional interest.

*page_break

@saoirse:amused "Right," says Saoirse, dealing again, with a flick of the wrist that sends the cards skimming onto the little fold-down table in a perfect fan. "This hand, hearts are trumps, unless it's raining, in which case it's spades."

@rowan:neutral Rowan looks out of the window at the clear violet sky. "It's not raining."

@saoirse:amused "Not [i]here[/i]," says Saoirse.

@rowan:amused "You're making this up." He picks up his cards anyway, and squints at them, and rearranges them three times, with the deep seriousness of a big man playing a small game. "You're making it up as you go."

@saoirse:laugh "Course I am. That's the game. It's called Liar's Whist. Whoever notices first wins." She lays down a card. "You haven't noticed."

@imogen:neutral "She's changed the rule about the jacks twice," says Imogen, without looking up from her book.

@saoirse:amused "Nobody asked the handbook." But she looks pleased.

Rowan loses four hands in a row and doesn't seem to mind in the least. Once, he laughs out loud, a big surprised laugh that seems to startle him as much as anyone, and across the compartment Casimir Drummond's newspaper twitches, very slightly, and settles again.

*page_break

It gets colder as you go north, or whichever way you're going. Frost forms in feathers on the outside of the glass. The hills grow wilder and emptier: no roads, no villages, no lights at all, only heather and bare rock and, once, a long silver river winding through a valley like something spilled. The first stars come out, then more, then more than you've ever seen. You stop trying to count.

Casimir Drummond stares out of the window the whole way, at the dark hills and the first stars, and doesn't say a word. Once, when he thinks nobody's looking, you see him take a folded letter out of his inside pocket, read it, and put it away again, and close his eyes.
*page_break
*comment ---------------------------------------------------------------- CH03.MERE.01
*sid CH03.MERE.01
*date 2026-09-11 20:30
*mood night
*place P12 mere_night
*present toby tully rowan imogen saoirse familiar
The train comes down at a little stone halt in a fold of the hills, with one gas lamp, a bench, and a sign that just says [i]MERE[/i]. The night is cold and smells of peat and pine and water. Stars everywhere: more than you've ever seen, so thick they look spilled.

It's so quiet. After the train, after the Row, after a whole life in a town where there's always a car somewhere, a siren somewhere, somebody's telly through the wall, the quiet is enormous. You can hear the engine ticking as it cools. You can hear the wind moving through the pines, a long soft rushing sound like the sea. You can hear your own breath. Forty-odd people climb down onto the platform with their trunks and their boxes and their familiars, and without anybody saying so, all of them lower their voices.

Behind you the Lantern Train lets out one long sigh of steam, and lifts. You turn to watch it go. It rises off the rails without a sound, all six lit carriages, and banks slowly over the pines, and climbs, and climbs, its windows shrinking to a string of gold beads and then to a single gold point among the stars, until you can't tell which star it is. Then it's gone, and there's just the gas lamp, and the bench, and the sign, and forty-odd strangers in the dark at the edge of the world with no way home.

*page_break

Somebody laughs, nervously. Somebody else says [i]well[/i]. Nobody moves for a moment.

A path leads down from the halt between the trees, lit here and there by little lanterns on posts. You follow it in a long, straggling, murmuring line, trunks bumping, somebody's cat complaining. Pine needles under your feet. The smell of resin, and cold, and something green and wet.

@toby:scared "Do you think there are wolves?" Toby whispers, close behind you, his cauldron clanking against his knee with every step.

@rowan:neutral "There aren't wolves," says Rowan, from up ahead.

@saoirse:amused "There might be wolves," says Saoirse, from behind.

@toby:scared "[i]Saoirse.[/i]"

@saoirse:amused "Little ones. Friendly ones. Wolves with a conscience." Something cracks in the trees, a branch, and all four of you stop dead, and Saoirse is the first to start walking again, quickly, and doesn't say anything else about wolves. Someone ahead of you trips over a root and Rowan's arm shoots out and catches them by the collar before they've finished falling, without even seeming to look.

At the bottom of the path, there's a lake.

It's long and black and perfectly still, a mile of dark water between the hills, and it reflects the stars so exactly that for a second you can't tell where the sky stops. Along the shore, bobbing at a wooden jetty, are boats: twenty or so, small and wooden and painted green, each with a lantern on a pole at the bow. None of the lanterns is lit.

*page_break

@tully:warm "Evening, my loves," says a voice from the jetty. "Mind the step, it's slippy. Evening. Evening. Mind the step."

*meet tully
*set fr_tully 1
He's old and a little stooped, with a long kind face, a magnificent white walrus moustache, and a flat cap, and he's holding a brass taper as long as a walking stick with a tiny flame at the end of it. He's wearing a patched brown coat with oil stains on the sleeves. As each of you goes past him down the jetty, he looks at you, and says your name. Your actual name. Every single time. Nobody's told him; he just knows.

@tully:warm "Toby," he says. "Welcome home, lad. Rowan, mind your head. Imogen. Saoirse. No motorbikes on the boats, love, it's been tried." Then, to you: "{name}." His pale-blue eyes crease up, and stay on you a little longer than on the others. "Welcome home, {name}. You'll be all right."

He lifts the taper and touches it to the lantern at the bow of your boat, and it lights, gold, and the boat moves off on its own, sliding out over the black water without a sound, with you and Toby and {fam_name} in it, and no oars at all.

*page_break

@tully:neutral "Absalom Tully," he calls after you. "Lanternwarden. Anything that's lit round here, I lit it. Anything that's gone out, you come and tell me!"

The boats go out onto the Mere in a long line, each with its one gold lantern, and the reflections go down into the water beneath you like a second line of boats sailing upside down among the stars. Nobody talks. Even Toby. The only sound is water chuckling under the bows and, once, far off, something big surfacing and going down again.

@toby:scared "What was that," breathes Toby, without moving his lips.

"A fish."

@toby:scared "That was not a fish. That was the size of a [i]bus[/i]."

"A big fish."

@toby:small He takes a moment to accept this. Then, very quietly, gazing out over the black water: "I'm going to write to my mum tomorrow. I've been trying to think what to put. [i]Dear Mum, I'm in a boat on a lake in the dark with no oars and there's a fish the size of a bus.[/i]" He swallows. "She'll think I've had a breakdown. She thinks I'm at a catering college. That's what I told her. I didn't know what else to say."

"It's sort of true."

@toby:warm "I suppose it is." He holds the cauldron a bit tighter. "I'll tell her about the stars. She likes stars. She'll like that."

*page_break

You trail your fingers over the side. The water is so cold it burns, and so clear that, when your lantern leans over it, you can see a long way down: pale stones, weed swaying, a flicker of something silver that might be a fish and might be a light. Toby sits very upright in the bow with his cauldron in his lap and his hands folded on the lid, like a man in church. {fam_name} has gone quiet and watchful, looking out over the water, as if listening for something.

The boats go round a wooded headland.

There it is.

It's on an island at the far end of the Mere, rising out of dark trees: a castle of pale stone, not huge, but tall, all towers and turrets and steep slate roofs, with lit windows in every wall, hundreds of them, gold. Above it, rising slowly from somewhere inside it, into a sky full of stars, are lanterns. Hundreds of little paper lanterns, then thousands, drifting up out of the roofs and towers: gold, and rose, and sea-green, and blue so deep it's nearly violet. They rise, and hang, and turn, like slow bright fish in the dark.

You know it. You don't know how you know it. It's like the tune of a song you heard once in a shop and have been humming ever since without meaning to: the black lake, the island, the lit windows, the lanterns rising. Some nights this year you've woken with your face wet and not known why. You think, now, that it might have been this.

*page_break

Next to you, Toby makes a small sound, and wipes his face on his cardigan. In the next boat, Rowan Ashby, who walked out of a burning house, has both hands over his mouth. Saoirse, in the boat behind, has stopped grinning. Imogen, in the one behind that, has closed the handbook.

@toby:warm "Oh," says Toby Quill. "Oh, it's [i]lovely[/i]."

You can't answer. There's a thing in your chest, behind your breastbone, and it's turned towards the castle the way the basil turned towards you, and it's saying [i]home[/i].

The boats slide in under a great arch in the island's rock, into a boathouse lit with lanterns, where the water slaps and echoes against stone and the air smells of tar and old rope. One by one the boats bump gently against the landing stage, and stop, and wait, the way a well-trained dog waits, for you to get out.
*page_break
*comment ---------------------------------------------------------------- CH03.HALL.01
*sid CH03.HALL.01
*date 2026-09-11 21:00
*place P13 lantern_hall
*present toby rowan imogen saoirse cas kestrel bassani tully familiar
You come up from the boathouse by a stair cut into the rock, a long winding climb with the stone worn into dips by four hundred years of feet. The walls are cold and damp to the touch, and every twenty steps there's a lantern in a niche, burning gold, and every one of them turns a little as you pass, to see you by. Somebody behind you starts counting the steps and gives up at a hundred and forty. You can hear the Mere below you, slapping in the boathouse. Above you, faint at first and then stronger, you can hear something else: a warm, many-voiced murmur, like a crowded room heard through a door.

At the top of the stair there's a door as tall as a house. It opens on its own.

The entrance hall beyond it is all stone and shadow and flickering gold. Suits of armour stand in niches round the walls with birds' nests in their helmets, and in one of them a wren is asleep with her head under her wing. Old banners hang from the beams, faded to the colour of tea. A staircase goes up and away into the dark, wide enough to drive a bus up, and another goes down, and portraits look down from every wall, and some of them, you're nearly sure, are whispering to each other behind their frames. It smells of beeswax and woodsmoke and cold stone and, from somewhere, roast potatoes.

*page_break

Everyone has stopped talking. Forty-odd grown adults stand in the entrance hall of a castle at nine o'clock at night with their mouths open, and not one of them is embarrassed about it.

Across the hall is a pair of doors so enormous that the man who opens them has to run.

Then you're in the Lantern Hall.

The first thing is the light. It's warm and gold and alive, the light of ten thousand candles, and it moves: slow shadows turning on the walls. The lanterns fill the air. They hang over the long tables, over the stone floor, all the way up into a darkness so high you can't see the roof, if there is a roof, drifting very slowly in currents you can't feel: gold and rose and green and blue, paper and light, some as small as your fist and some the size of armchairs. There's a sound, under all the other sounds, very faint: a hum, sweet and low and many-voiced, like a choir humming in their sleep. It's the lanterns. They're humming. It's the exact opposite of the sound in the alley.

You stand in the doorway and let it go into you. The warmth of it on your face after the cold of the Mere. The smell of candle wax and hot bread. The way the light moves on the old stone, soft as water. You've been in big rooms before: churches, a cathedral once on a school trip, the town hall in Wrexley with its painted ceiling. This isn't like any of them. Those were built to make you feel small. This one feels as if it's been waiting for you, specifically, for a very long time, and is so pleased you've come.

*page_break

The second thing is that, as the forty-odd of you come in through the doors, all ten thousand lanterns turn to look at you.

They don't have faces. You can't tell how you know. But the whole Hall of light swings round towards the doorway, the way a room full of people turns when somebody new comes in, and brightens, all at once, like a crowd smiling.

Four long tables run down the Hall, full of people in robes: robes in gold and rose, plum and silver, sea-green and pearl, black and copper. Second-years, you realise. The ones who stayed. They're cheering. Somebody's banging a spoon on a goblet. Somebody else has stood up on a bench to wave both arms. At the far end, raised on a dais under a great round window full of stars, is a high table where the teachers sit, and in the middle of it, a tall old woman stands up, and the Hall goes quiet.

@kestrel:warm She's very tall and very straight, in midnight-blue robes stitched all over with tiny gold wrens, with a silver braid so long it touches her waist, wound round with a gold thread. Her face is long and brown and lined, and freckled across the nose with small bright points that look, from here, like stars. Her eyes are hazel, and even from the doors you can see they're laughing. "Welcome," she says, and doesn't raise her voice, and every one of you hears it. "Welcome home."

*meet kestrel
@kestrel:neutral "I'm Imelda Kestrel. I'm the Headmistress, which means that I will know your names by Tuesday and your secrets by Christmas. I kindled at thirty, in a greengrocer's in Hollin Cross, by making every apple in the shop explode at once. It was a Saturday. It was very busy. I'm told people still talk about it." A ripple of laughter through the Hall. "Every one of you has a story like that. Every one of you had a life last night, and a job, and rent, and people who'll miss you. Tonight you're first-years. Both of those things are true, and they'll go on being true all year, and that's all right." She smiles. "Now. Professor Bassani, if you would. Before the Hall gets impatient."

*page_break

@bassani:amused A round olive-skinned man with a magnificent curled grey moustache and a flower in his buttonhole bounces up from the high table with a scroll in one hand. "The Nesting!" he booms. "The [i]Nesting![/i]" He twirls the moustache. "I am Professor Aurelio Bassani, I teach Turning, I am Deputy Head, I am head of Larkspire House, and I am the finest singer in this castle, whatever anyone tells you." A groan from the gold-and-rose table. "When I call your name, come up, take a lantern from Mr Tully, let him light it, and let it go. It will fly to its roost." He points upwards, dramatically, four times. "Larkspire! Owlcombe! Heronmere! Rookhallow! And that is your house, for the whole of your time here, and there is nothing, [i]nothing[/i], you can do about it!"

*meet bassani
@kestrel:amused "That isn't quite true, Aurelio," says the Headmistress mildly.

@bassani:amused "It is [i]mostly[/i] true," says Professor Bassani. "Which is the best kind of true."

You look up, because he did. High in the corners of the Hall, where the walls go up into the dark, there are shapes you hadn't noticed: huge, rounded, woven, like the nests of birds the size of houses. Lanterns cluster round them the way moths cluster round a porch light. You can't make out much more than that from down here. Just that each corner seems to glow a different colour, and that the second-years at the tables keep glancing up at them, and then at you, with the expressions of people waiting to see how a film they've already seen is going to go for someone else.

*page_break

@toby:tense "Which one's which?" whispers Toby, next to you.

@imogen:neutral "Page ninety," whispers Imogen, on your other side, without taking her eyes off the corners. "It has a diagram." A pause. "The diagram is wrong. The diagram's got them the other way round."

Mr Tully stands at the foot of the dais by a stack of paper lanterns, folded flat, with his brass taper lit.

They go alphabetically.

@rowan:neutral "Ashby, Rowan!" Rowan goes up, and takes a lantern, and Tully lights it for him with a pat on the arm, and when Rowan lets it go it doesn't drift. It shoots, like a rocket, straight up into the east corner, and as it reaches the great nest there every lantern round it turns gold and rose at once, like a window catching the sunrise. A table near the front stands up and cheers, and you see their robes: gold and rose, the same. [i]Larkspire[/i], someone shouts, and it's the first time the word means anything. Rowan comes back with his face scarlet and his shimmer back, and they pull him down onto their bench, slapping his back.

A dozen others, and you learn the corners the way you'd learn a new town, by watching people go into them. A young man with a pierced eyebrow sends his lantern north, and the nest there flares plum and silver, like a sky full of stars coming out, and a quieter table claps, precisely, as if they've been counting. A woman in scrubs sends hers west, into sea-green and pearl, and the table under it doesn't cheer so much as murmur, warmly, and shuffle up to make room. A girl with a nose ring and a toolbelt goes south, over the kitchens, and the nest there glows black and copper like a forge and the table under it bangs its cups. The man with the lanyard goes north.

*page_break

The two who were holding hands on the platform go to different houses, gold and green, and stand for a second in the middle of the floor looking at each other, and then laugh, and go to their tables, and wave at each other across the aisle all through the rest of it. One lantern goes up so slowly it takes a full minute to reach Heronmere, and the whole Hall holds its breath the whole way and cheers when it lands. The goat, which nobody owns, is not called, and eats a tablecloth.

@cas:neutral "Drummond, Casimir!" There's a murmur at that, from the tables of second-years. [i]A Drummond. A Drummond, late.[/i] He walks up as if he doesn't hear it, very straight, and takes his lantern without looking at Tully, and lets it go without looking at it either. It hangs in the air for a second, as if it's thinking. Then it goes, slowly, to the black-and-copper roost over the kitchens. The Rookhallow table claps, a bit uncertainly. He sits down at the end of it, by himself.

@saoirse:laugh "Maddock, Saoirse!" Saoirse's lantern goes up, turns a complete loop-the-loop over the high table, and lands in the Rookhallow roost with a flourish, and the Rookhallow table roars. Professor Bassani says [i]well really[/i]. Saoirse bows.

"Quill, Tobias!" Toby's lantern goes very nearly into the Larkspire roost, and changes its mind, and goes towards the kitchens, and stops in mid-air as if it can smell something, and then, as if with a sigh, drifts gently over to the sea-green roost in the west. The Heronmere table claps him down warmly. He sits among them with his cauldron on his knee, looking dazed and happy.

*page_break

@imogen:neutral "Sallow, Imogen!" Imogen's lantern doesn't hesitate at all. It goes to the plum-and-silver roost in the north in a perfectly straight line, like an arrow, and settles, and Imogen gives one small nod, as if a filing system has confirmed what she already knew.

Then, last of all, as if he's been saving it: "{name}!" says Professor Bassani, with a flourish. "Come along, come along!"

The walk up the Hall is about a mile long.

Every face turns as you pass. You can feel the lanterns overhead leaning to watch. Your footsteps sound very loud on the stone, and your robes, still plain black, feel very new, and you're suddenly, vividly aware of the flour still on your jumper from Toby and the black thumbprint on your knuckle and the fact that you haven't brushed your hair since yesterday. Somewhere at the Larkspire table Rowan says [i]go on[/i], quietly, under the noise. You go on.

@tully:warm At the bottom of the dais, Mr Tully hands you a paper lantern, folded flat. It opens in your hands like a flower: pale, thin, ribbed with bamboo, the size of your head. "Hold it steady, love," he says, very quietly, so that only you can hear. "It'll take a spark from you. That's all. First bit of magic you'll ever do on purpose." He touches the taper to the wick.

It lights. Then it [i]catches[/i]: something goes out of you and into it, a flicker from behind your breastbone, like a match struck in the dark, and the little lantern in your hands doesn't glow the soft gold that everyone else's did. It flares. White-gold, bright as a torch, so bright that Tully squints and steps back and the lanterns nearest you in the air all turn, all at once, towards it. Towards you. Leaning. Like the candles.

*page_break

The Hall goes quiet. You hear someone at a table say [i]oh[/i].

@kestrel:neutral Up at the high table, the Headmistress has leaned forward in her chair.

@tully:neutral "Well, now," says Mr Tully softly, blinking. "Well, now. Let it go, love. Go on."

@kestrel:warm Then the Headmistress speaks, clearly, so the whole Hall hears, and her voice is light, almost amused, but her eyes aren't. "A lantern can be leaned," she says, "if you want something enough. The Hall lets it. Most people don't know that. You do now."

You let go.

The lantern rises, blazing, out of your hands, and hangs there above you, turning slowly, as if it's waiting to be told.
*choice
  #Lean it east, to the gold-and-rose roost. Larkspire: courage, dawn, and people who sing badly.
    *set house "larkspire"
    *goto nested
  #Lean it north, to the plum-and-silver roost. Owlcombe: curiosity, stars, and secrets kept.
    *set house "owlcombe"
    *goto nested
  #Lean it west, to the sea-green-and-pearl roost. Heronmere: stillness, care, and stubborn kindness.
    *set house "heronmere"
    *goto nested
  #Lean it south, to the black-and-copper roost. Rookhallow: making things, mischief, and loyalty to your own.
    *set house "rookhallow"
    *goto nested
  #Don't lean it. Let it go where it wants.
    *if (nerve >= wit) and (nerve >= heart) and (nerve >= flame)
      *set house "larkspire"
    *elseif (wit >= heart) and (wit >= flame)
      *set house "owlcombe"
    *elseif heart >= flame
      *set house "heronmere"
    *else
      *set house "rookhallow"
    You don't lean it. You just open your hands wider, and let it choose.

    It turns, very slowly, once all the way round, looking at every corner of the Hall. Then it goes.
    *goto nested
*label nested
*if house = "rookhallow"
  *set cas_house "owlcombe"
It goes up through the lanterns like a comet, trailing white-gold light, and every lantern it passes turns to watch it, and it doesn't slow down until it reaches the {@house = "larkspire"|gold-and-rose roost in the east, and settles at the heart of it, and every lantern in the Larkspire corner flares at once, like a sunrise|}{@house = "owlcombe"|plum-and-silver roost in the north, and settles at the heart of it, and every lantern in the Owlcombe corner flares silver at once, like a sky full of stars coming out|}{@house = "heronmere"|sea-green-and-pearl roost in the west, and settles at the heart of it, and every lantern in the Heronmere corner flares green at once, like sunlight through deep water|}{@house = "rookhallow"|black-and-copper roost in the south, and settles at the heart of it, and every lantern in the Rookhallow corner flares copper at once, like a forge when the bellows go|}.
*snapshot nesting

The {@house = "larkspire"|Larkspire|}{@house = "owlcombe"|Owlcombe|}{@house = "heronmere"|Heronmere|}{@house = "rookhallow"|Rookhallow|} table goes mad.

You walk back down the Hall in a roar of noise with your ears ringing and your face burning, and people are standing up at the {@house = "larkspire"|gold-and-rose|}{@house = "owlcombe"|plum-and-silver|}{@house = "heronmere"|sea-green|}{@house = "rookhallow"|black-and-copper|} table to pull you in, and when you look down at your plain black robe, the lining has changed. It's {@house = "larkspire"|gold, and the edges are rose|}{@house = "owlcombe"|deep plum, stitched with silver|}{@house = "heronmere"|sea-green, and pale as pearl at the hem|}{@house = "rookhallow"|black shot through with copper thread, warm as a forge|}. Your house.

*page_break

Hands clap you on the back. Somebody you've never met hugs you. Somebody else puts a goblet in your hand and says [i]drink that, you've gone white[/i], and it's something hot and sweet that tastes of apples. You sit down on a bench between two strangers who both, instantly, start telling you things about the house, over each other. [i]You'll want to get your name down for the good bath.[/i] [i]Don't listen to him, there isn't a good bath.[/i] [i]The stairs are the worst thing, you'll get used to the stairs.[/i] [i]You never get used to the stairs.[/i] [i]Did you see it go? Did you see how bright it was? Nobody's does that.[/i] You nod, and nod, and don't take in a word of it, and you don't mind at all.
*if (house = "rookhallow")
  Casimir Drummond's lantern, you notice, has moved. It's no longer in the copper roost. At some point while yours was flying, it slipped quietly out of the Rookhallow corner, drifted across the dark, and settled in the plum-and-silver one instead, and now he's at the Owlcombe table, looking furious and faintly relieved. [i]A lantern can be leaned,[/i] the Headmistress said. It seems it can be leaned twice.
*achieve nested
*page_break
*comment ---------------------------------------------------------------- CH03.FEAST.01
*sid CH03.FEAST.01
*date 2026-09-11 21:45
*present kestrel bassani toby noor idris familiar
When the last of you is nested, Professor Bassani sweeps a bow to the Hall, and every plate on every table fills itself.

Not with food appearing. Just with food, as if it had always been there and you'd somehow not noticed: roast chicken and roast potatoes and Yorkshire puddings the size of hats, pies, a whole salmon, bowls of peas and carrots and something purple that turns out to be delicious, gravy in boats that sail up and down the table on their own when anyone reaches for them, and bread, warm bread, everywhere. There are jugs of something gold and fizzing that tastes like apples and bonfires. A pudding at the end of your table is, as far as you can tell, singing.

You didn't know how hungry you were. Nobody did. For ten minutes the Lantern Hall is nothing but the sound of forty-odd people who've crossed a country, a lake and a whole life in a day, eating as if they've never eaten before. The second-years watch fondly, like people watching their own first night again. {fam_name} is fed scraps under the table by three different people and accepts them all as tribute.

*page_break

All down your table people are talking with their mouths full, to strangers, as if they've known each other for years. Snatches of it come and go: [i]...a scaffolder, twelve years, and I've never once been afraid of heights till I got on that train...[/i] and [i]...my sister thinks I've gone to rehab...[/i] and [i]...pass the gravy, sorry, the gravy, it's sailing off again...[/i]. A man across from you, still in his work shirt with the collar undone, eats three Yorkshire puddings in a row and then sits back and says, to nobody, in a tone of wonder, [i]I've not had a dinner like that since my mum died[/i], and the woman next to him pats his arm without looking up and pushes the potatoes his way.

@kestrel:neutral Halfway through, the Headmistress stands, and the Hall goes quiet again, and the lanterns all turn to her. She waits until it's so quiet you can hear the gravy boats.

@kestrel:warm "Three things," she says. "Then you can have pudding."

*page_break

@kestrel:neutral "One." She lets it sit for a moment. "You have been kindling for months, some of you for a year, and nobody told you what it was."

Somewhere down the table, someone laughs, once, too loudly, the way people laugh when a thing they've been carrying for months is suddenly named. Nobody looks round.

@kestrel:neutral "You thought you were ill," she says. "Or tired. Or mad." She looks down the tables, slowly, and you have the feeling, as everyone in the Hall must have it, that she's looking at you. "I'm sorry. That's our fault, not yours. We only find you when the flame's bright enough to see, and by then you've been frightened for a long time." A pause. "You're not frightened here. Or if you are, you're not alone with it."

You think of the bathroom mirror, and the glass in the sink like frost, and searching [i]why do lights flicker when I'm angry[/i] at two in the morning. You find you have to look down at your plate for a bit.

@kestrel:amused "Two. This is your Burning Year." She says it like the name of a season, which you suppose it is. "Things will explode. You will set fire to a lesson or two. Professor Moth has asked me to say that the Wordcraft Gallery was repainted in August and he would like it to survive until October." A laugh goes round, relieved. At the high table a very small man with enormous white eyebrows puts his face in his hands.

*page_break

@kestrel:neutral "Your flame will be brighter this year than it will ever be again," she goes on, "and less steady. By June, it will settle." The smallest pause. "That's what we're here for. That's all we're really here for. Everything else, the wands and the robes and the Glimmerball..." Cheering from the Larkspire table. "...is to help it settle into something strong."

[i]Or burn you out[/i], says the letter, in your head, in its neat calm hand. You look up at the high table. She isn't going to say that part, you realise. Not tonight. Not to forty-odd frightened people with gravy on their chins. You find you don't blame her.

She pauses. When she speaks again, her voice is lighter, and it doesn't fool anyone.

@kestrel:neutral "Three. Some of you met singers on Lamplight Row this morning." The Hall has gone absolutely still. {@house = "heronmere"|Next to you|Over at the Heronmere table}, Toby's hand stops halfway to his mouth with a potato on the fork. "Grey robes. Humming."

You feel it again, just hearing the words: the ache behind your breastbone where the hum took hold. Up in the dark, a few of the lanterns have drawn in closer together.

@kestrel:grave "They're called the Grey Choir," says the Headmistress. "They're the reason you'll read Appendix F in your handbooks, if you haven't already." A glance at the Owlcombe table, where Imogen goes pink. She doesn't say what they want. She doesn't say what [i]taken entire[/i] means. You wait for her to, and she doesn't, and the not-saying fills the Hall like cold air from an open door.

*page_break

@kestrel:warm "You're home now, and home is safe," she says. "The wards on this island are four hundred years old. The lanterns will tell us if anything's wrong. But I will ask you, as the letter asked you, and as I'll ask you every week until June." She lets the quiet stretch. "Keep your flame close."

@kestrel:warm She smiles, and it's like the sun coming out. "Now. Pudding."

The pudding, which is singing, is treacle sponge.

The noise comes back in a rush, the way it does after a funeral when someone finally makes a joke. People are talking a little too loudly now, laughing a little too hard. The singers in the alley have followed you here, in a way; not the hoods, but the cold, the memory of that pull in your chest.

*page_break

You turn back to your plate, and find you're not hungry anymore, and notice, down the table{@house != "heronmere"|, or rather across the aisle at the next table,|} that you're not the only one.
*meet noor
*meet idris
She's a young woman about your age, in sea-green, with a long dark plait and strong dark brows and a calm, heavy-lidded face: the woman in scrubs from the platform. She hasn't eaten a thing. She's been cutting up her chicken into smaller and smaller pieces for twenty minutes, with the terrible neatness of someone who's used to eating in four minutes standing up, and now can't remember how to do it sitting down. There's a watch pinned upside down on her robe, the kind nurses wear.

Further off, at the Owlcombe table, a lean man with a neat black beard and round wire glasses and soft old plum-and-silver robes, a second-year, is not eating either. He's watching you. He's been watching you, you realise, since your lantern flared. He doesn't look away when you catch him. He just tilts his head, very slightly, like a man looking at a word in a language he's been studying for years and has never actually seen written down.
*choice
  #Take the nurse a plate of bread, and sit down next to her.
    *set b_noor_sit true
    *set st_noor 2
    *set heart +5
    You get up, and take a plate of warm bread and butter from your end of the table, and cross over, and put it down in front of her, and sit.

    @noor:tired She looks at the bread. She looks at you. "I'm not hungry," she says. Her voice is low and a bit dry and very calm, the voice of someone who has told a lot of people bad news kindly.

    "Me neither," you say. "Eat the bread anyway."

    @noor:amused Something moves at the corner of her mouth. "That's my line," she says. "I say that to people." She tears off a corner. "Noor Haddad. A and E, Kingsmere Royal. I kindled in May. Stopped a man bleeding out with my hands. Just... put my hands on it and it [i]stopped[/i]." She eats the corner of bread. "I haven't been back since."

    You don't say anything. You butter a piece of bread for yourself, and eat it, to show her how, and after a moment she tears off another piece, and then another. The two of you sit and eat bread in silence while the Hall roars around you, and it's the most restful five minutes you've had all day.

    @noor:warm "Thank you," she says, after a while, quite quietly. She eats the rest.
  #Go over to the Owlcombe table and ask the bearded second-year what he's looking at.
    *set st_idris 1
    *set nerve +5
    You get up and go over, before you can think better of it, and stand across the Owlcombe table from him, and say: "You're staring."

    @idris:attentive "I am," he agrees. He doesn't seem remotely embarrassed. Up close he's older than most of the first-years, near thirty, with deep-set dark eyes behind the round glasses and a satchel on the bench beside him stuffed with notebooks. "I apologise. Your lantern. I've read about lanterns doing that. I've never seen it." He holds out a hand across the gravy. "Idris Penhallow. Second year. I study the history of flame-work, which is the dullest-sounding subject in this castle and the least dull." A pause. "May I ask how you feel?"

    "Warm," you say, before you can think about it.

    @idris:neutral He studies you in silence, head still tilted. Then he nods, as if you've confirmed something, and writes a single word in a notebook, and closes it before you can read it upside down. "Welcome to Wrenfold," he says. "I suspect it's going to be interesting."

    You go back to your table with the odd, prickling sense of having been catalogued. When you glance back, he's gone back to his dinner, and doesn't look up again. That's somehow worse.
  #Stay where you are. Eat the singing pudding. Let the Hall be wonderful for one night.
    *set flame +5
    You eat the singing pudding. It sings a little higher when you put your spoon in it, which is alarming, and then settles into a sort of hum, which is delicious. {@house = "heronmere"|Beside you|Over at the Heronmere table}, Toby is on his third helping. Above you, ten thousand lanterns drift and hum, and every so often one of them turns and looks down at you, and brightens.

    The custard comes round in a jug shaped like a heron, which pours from its beak and then, when you put it down, tucks its head under its wing and goes to sleep. You have two helpings. The second-years round you have three, with the air of people who've learned to take a feast seriously. Somebody passes you a dish of something that turns out to be cream with stars in it, real tiny cold stars that fizz on your tongue like sherbet and leave a taste of frost and oranges.

    You eat slowly, for once, the way you never eat at work, where lunch is a sandwich at a desk or standing up by a back door. You taste everything. You watch the gravy boats dock themselves at the ends of the tables, and the candles burn down in their silver sticks without dripping, and the lanterns overhead drift and nudge each other like boats on a mooring. A cat from somebody's lap trots the length of the Hall between the benches, tail up, collecting compliments, and lies down in front of the high table as if it owns it.

    Somewhere behind you a whole table starts to sing, a house song you don't know, badly and with feeling, and you find yourself grinning into your custard.

    You decide, for tonight, not to think about what any of it means. You have custard. You have a spoon. You have a castle. The rest can wait until morning.
*if st_noor < 1
  *set st_noor 1
*if st_idris < 1
  *set st_idris 1
*page_break
*if house = "larkspire"
  *goto lark
*if house = "owlcombe"
  *goto owl
*if house = "heronmere"
  *goto heron
*goto rook
*comment ---------------------------------------------------------------- CH03.LARK.01
*label lark
*sid CH03.LARK.01
*date 2026-09-11 23:10
*place P14 larkspire
*present flick rowan marcus familiar
*meet flick
*meet marcus
@flick:amused "Up with the lark!" says the Larkspire prefect, at the bottom of a spiral stair so tall you can't see the top. "Two hundred and twelve steps. You'll hate them till Christmas and then you'll have calves like a mountain goat. Felicity Barrow. Flick. I used to teach Year Two, so if anybody cries on the stairs, I've seen it, and I've got tissues." She has two neat blonde plaits and a clipboard and a prefect's badge polished so bright it's a light source of its own. "Come on, then. Chop chop."

The stair winds up inside the east tower like the inside of a shell. There are windows every so often, narrow slits in the thick stone, and through each one you get a glimpse of the night: the Mere, then the stars, then the dark hills, then the Mere again, a little further down each time. Flick keeps up a cheerful running commentary the whole way, like a tour guide on an open-top bus.

@flick:amused "That one creaks," she says, stamping on a step to prove it. "This one..." She treads on the next very precisely, off-centre, and it lets out a clear, sweet note, like a finger run round a wine glass. "...sings. If you get it right. Which means the whole house knows when you've come in late. Which means, if you're coming in late, don't." A landing, with a row of pigeonholes. "Post." Another landing, with a saucer of lettuce on it. "Mr Ponsonby. Don't step on him. He's ninety."

*page_break

"Who's Mr Ponsonby?" says someone behind you, breathless.

@flick:amused "A tortoise," says Flick, as if that should have been obvious. "Keep up."

Two hundred and twelve steps later, gasping, you come out into the top of the east tower, and it's the warmest room you've ever been in.

It's round, and full of cushions: on the floor, on the window seats, piled on sofas, gold and rose and every shade between. A fire roars in a grate shaped like a rising sun. There's a piano in the corner with a sign on it saying [i]PLEASE DON'T[/i]. Tall windows go all the way round, and one of them is a door onto a stone balcony, open to the night, and cold air comes in smelling of the Mere.

It's noisy. Nobody in here seems to have an inside voice, or to want one. Somebody's toasting crumpets on a fork. Two second-years are arguing, happily, about Glimmerball. A pair of first-years who were nested ten minutes before you are already asleep in a heap of cushions by the fire, still in their robes, like puppies.

@marcus:amused "You're the firefighter," says a big grinning man in a Glimmerball jersey, to Rowan, before Rowan's even got his breath back. "Marcus Oduya. Captain. We need a Keeper. You look like a Keeper. Do you fly?"

@rowan:amused "Never," says Rowan.

@marcus:amused "Perfect," says Marcus. "Nobody does. Trials are in two weeks." He turns the grin on you. "And you. White lantern. You fly?"

*page_break

"I rode a bike once," you offer.

@marcus:amused "That's basically the same," says Marcus Oduya, with enormous confidence, and claps you on the shoulder so hard you nearly sit down. "Welcome to Larkspire. We lose a lot. We lose [i]loudly[/i]."

Somebody puts a crumpet in your hand, dripping butter, still hot from the fork, and you have no idea who, and nobody seems to expect thanks. You end up on a heap of cushions by the fire with it, next to Rowan, who's been given two and is eating them both with the slightly stunned air of a man who's been thrown a surprise party by strangers. {fam_name} settles against your leg and steams gently in the heat.

@marcus:amused Marcus drops down opposite, uninvited, and starts explaining Glimmerball with the aid of three crumpets, a teapot and a sock. "So that's the hoop," he says, holding up the sock. "And this is you. And this," a crumpet, "is the other lot's Keeper, and what you do is, you go [i]straight through him[/i]."

@rowan:amused "Through him," says Rowan.

@marcus:amused "Metaphorically. Mostly." Marcus eats the other lot's Keeper. "You'll love it. Everybody loves it. Except Flick, who once got hit in the face with the glimmer and saw colours for a week."

*page_break

@flick:amused "[i]Purple[/i]," calls Flick, from across the room, without looking round. "For a [i]week[/i]."

The dormitory is up a further little stair, a round room with six beds, each hung with gold curtains, and a round window over each one. Yours faces east. Flick tells you, with enormous satisfaction, that the dawn comes in through it first of anywhere in the castle, and there's no curtain, because Larkspire doesn't believe in them. {fam_name} inspects the bed and approves it.

When the others have gone up, Rowan's still out on the balcony, alone, with his big hands on the stone rail, looking down at the black water a hundred feet below. The shimmer's coming off him again, very faintly, into the cold.
*choice
  #Go out and stand next to him. Say nothing. Look at the Mere.
    *set st_rowan +1
    You go out and stand beside him, and put your hands on the cold rail too, and don't say anything.

    The night is enormous out here. The Mere lies black and still below, holding every star, and the hills stand round it like people keeping watch. The lanterns rising from the castle roofs drift past you, close enough to touch, humming softly as they go. Behind you, through the glass, the common room is gold and full of noise. Out here, it's just the two of you and the cold.

    @rowan:warm After a while he says, "You can see the whole lake from here." After a longer while: "I'm glad it was you on the Row. When the lamps went." He doesn't look at you. His hands on the rail are steaming slightly in the cold. "It helped. Knowing somebody else felt it."

    "It helped me too."

    @rowan:warm He nods. He doesn't say anything else for a while. When he goes in, he touches your shoulder, very lightly, on the way past, the way you'd check a door for heat. "Night, {name}."
  #Leave him be. He looks like he needs the air to himself.
    *set heart +5
    You leave him be. Some people need a balcony more than they need company.

    The little stair up to the dormitory is so steep it's nearly a ladder, and it smells of old wood and toast. Up here the noise of the common room comes through the floor muffled, like a party in the flat downstairs. Two of your new room-mates are already in bed with their curtains drawn. A third is sitting up in hers with a torch, writing a letter in tiny furious handwriting, and gives you a little wave with the pen without stopping. You don't know any of their names yet. You'll learn them tomorrow. Tonight it feels right, somehow, to be six strangers in a round room in the sky, all breathing.

    You put your things away in the chest at the foot of your bed: the parcel of robes, the handbook you haven't opened, your old clothes from home, which look very small and grey and Wrexley-ish folded up in there, like something from another life. {fam_name} watches you do it with an air of supervision.

    You hear Rowan, much later, come up the stair quietly, avoiding the step that creaks, and say goodnight to nobody.

    Before you sleep you look out of your round window, and he's still there: a big dark shape against the stars, standing very still, as if he's keeping watch over the whole Mere. The shimmer round him has gone. You're glad about that. You don't know why it matters so much to you, after one day. It does.
*goto roosted
*comment ---------------------------------------------------------------- CH03.OWL.01
*label owl
*sid CH03.OWL.01
*date 2026-09-11 23:10
*place P15 owlcombe
*present mina imogen idris familiar
*meet mina
@mina:amused "Eyes open!" says a young woman with enormous headphones round her neck and a hundred badges on her robes, flinging open a door at the bottom of the Observatory tower. "That's the house greeting, you say it back, go on. [i]Eyes open![/i] Brilliant. Mina Achebe, second year, I run Wrenfold Wireless, which is the school radio, which is not strictly allowed, so you didn't hear that, but tune in, Tuesday nights, frequency's on the notice board under a picture of a duck. Come in, come in, come in."

She talks the whole way up the tower stair, walking backwards, without once tripping.

@mina:amused "Best armchair's the one by the globe. It's haunted. A bit. Not badly. It just sighs when you sit down, like an old dog, you'll get used to it." A turn of the stair. "Kitchens do toast after midnight if you ask nicely and bring your own jam. Don't borrow Petra Lindqvist's pens. Not ever. She counts them." Another turn. "Observatory's on the roof, open to everybody. On a clear night you can see about halfway to the end of the world." She stops, one foot on the next step, and grins down at you all. "The other half's cloudy."

*page_break

Somebody behind you asks what Wrenfold Wireless plays.

@mina:amused "Anything I like," says Mina. "Requests. Weather. Gossip, mostly. Last year I did a whole programme on what the Headmistress keeps in her desk drawer. Fourteen listeners. Fourteen! For a pirate station run out of a broom cupboard." She takes the last few steps backwards, two at a time. "One of them was the Headmistress. She rang in. Said I'd got the biscuits wrong." She flings open the door at the top. "Here we are. Eyes open."

The Owlcombe Stacks are the best room in the world.

It's a library. Or it's a common room built inside a library, or a library that grew round a common room: shelves on every wall and in rows across the floor, all the way up to a ceiling that isn't a ceiling at all but the actual night sky, stars and all, glittering, with a slow cloud going across it. Ladders on brass rails. Armchairs in plum velvet, worn soft, pulled into little islands by lamps. A fire. Somebody's left a telescope on the hearthrug. It smells of paper and woodsmoke and something like cloves.

*page_break

It's quiet in here, but not silent: the kind of quiet that's made of lots of small sounds. Pages turning. A pen scratching. Somebody at a table in the corner whispering a word under their breath, over and over, trying to get it right. A clock ticking somewhere in the shelves.

@imogen:warm Imogen is standing among the shelves with her handbook clutched to her chest and the expression of a pilgrim who has arrived. "They have [i]the regulations[/i]," she says to you, faintly, pointing. "The full ones. All eleven volumes. In a glass case."

@idris:neutral By the fire, the bearded second-year from the feast, Idris, is sitting in a deep armchair with his boots on the fender and a notebook on his knee. He glances up as you come in, and nods to you, once, as if you're a colleague, and goes back to writing.

@mina:amused "Don't mind Idris," says Mina, not quite quietly enough. "He's always in that chair. We think he might be part of it. He's the only person in this house who reads more than your friend there, and he does it [i]on purpose[/i]."

@idris:amused "I can hear you, Mina," says Idris, without looking up.

@mina:amused "I know, love. That's why I said it." She steers you on, past the shelves. "History's that way. Stars are up the ladder. Poetry's behind the fireplace, don't ask, it was a long argument in about 1780 and poetry lost." She stops by a tall window where the real night shows through between two stacks, the Mere far below, lanterns rising past the glass. "And that's the view. Best in the castle, after the roof. Don't tell the Larks I said so."

*page_break

You stand at it for a moment, with your hand on the cold glass. Down there on the black water, you can still see the last of the boats going back across to the far shore on their own, empty, each with its little gold lantern, like a line of lit thoughts going home.

Mina shows you the dormitory, up a little spiral stair behind the history shelves: six beds with plum curtains, and the night sky over each one, as if the roof had simply been left off. {fam_name} inspects the bed and approves it. As you stand there, a shooting star goes over, and then another, as if the room's showing off.

You're tired enough to fall over. You're also, you find, much too awake to sleep.
*choice
  #Go and find Imogen, who's reading the regulations in the glass case by lamplight. Ask what Appendix F left out.
    *set st_imogen +1
    *set wit +5
    She's still downstairs, alone now, with her nose almost touching the glass of the case and a lamp pulled close. The others have gone up. The fire's burned down to red. You go and stand beside her.

    @imogen:attentive She doesn't look up. "Everything," she says, before you've asked. "It leaves out everything. There's a whole volume here on the Choir, volume nine, and it's [i]locked[/i]." She turns to you. "Nobody locks the regulations. You don't lock rules. You lock things people aren't meant to know." A pause. "I'm going to find out what's in it."

    "I'll help," you hear yourself say.

    @imogen:warm She gives you a long, measuring look, the kind you'd give a contract before you signed it. "Good," she says.

    @imogen:neutral Then, after a moment, a bit less crisply: "I don't usually say that. I usually do things on my own. It's quicker." She looks back at the locked volume, its spine a dull grey among the others' gold. "But I don't think this is going to be quick."
  #Sleep. The sky's putting on a show; you may as well watch it.
    *set flame +5
    You get into bed, which is high and soft and smells of cold linen and lavender, and pull the plum curtains half shut, and lie on your back under the stars.

    The room goes quiet around you a sound at a time. Somebody's curtain rings rattle. Somebody turns over and sighs. Through the floor, faintly, from somewhere below in the Stacks, a radio is murmuring, a woman's voice talking very low and fast, which can only be Mina, and then music, an old dance tune, turned down so quietly it's almost a memory. The clock in the shelves ticks. A cloud slides across the ceiling, thin as a scarf, and the stars come out again behind it brighter, as if they've been polished.

    It occurs to you that you haven't been this far from a road in your whole life. No cars. No sirens. Nobody's telly through the wall. Just the stars, and the sound of six people breathing, and the castle settling round you like a big animal lying down. You'd thought you'd feel lonely. You don't, quite. You feel the way you used to as a child at Nana's, in the spare bed under the eaves, listening to the grown-ups downstairs: small and safe and part of something that's still going on without you.

    {fam_name} watches the stars too, and somewhere around the eleventh shooting star you fall asleep.

    Once, in the night, you half wake, and the sky over your bed has turned, the way a real sky turns, and there's a star directly above you that's brighter than the rest: gold, and steady, and very close. It looks, for a moment, as if it's looking back. Then you're asleep again, and in the morning you're not sure you didn't dream it.
*goto roosted
*comment ---------------------------------------------------------------- CH03.HERON.01
*label heron
*sid CH03.HERON.01
*date 2026-09-11 23:10
*place P16 heronmere
*present delphine toby noor jonty familiar
*meet delphine
*meet jonty
@delphine:warm "Stand still," says the Heronmere prefect, at the bottom of a curving stone stair that goes down, and down, until you can hear water. "That's the house word. Everyone thinks it's boring. It isn't. It's the hardest thing in the world." She's elegant, with a long neck and violet-dyed hair cropped short, and dark amused eyes, and she holds a lantern up so you can all see the steps. "Delphine Arceneaux. Second year. I stayed on for the herbs, and the company. Mind the last step, it's wet."

The stair goes down and down, curving, and the air changes as you go: cooler, damper, green-smelling, like a garden after rain. The walls start to sweat. Ferns grow out of the cracks in the stone, and tiny white flowers, and in one place a trickle of water runs down the wall into a stone basin, and a small frog sitting on the rim of it watches you all go past with an air of mild disappointment.

The Heronmere Cloister is under the Mere.

Not all of it. Half. It's a long vaulted room with tall arched windows down one side, and outside the windows, instead of night, there's water: deep green water, lit from somewhere below, with weed moving in slow currents and a shoal of small silver fish turning all together past the glass like a flung handful of coins. The light in the room is green and gold and moving, like light at the bottom of a swimming pool. Sea-green cushions. A still pool in the floor, round and perfectly clear, with lilies on it. A fire at the dry end, and a huge teapot.

*page_break

It's the calmest room you've ever stood in. The water outside makes no sound at all, but you can feel it, all that cool weight pressing gently on the glass, and it makes everything in here seem slower. People talk quietly. Nobody hurries. A second-year is asleep in a hammock strung between two pillars with a book open on her chest. Somebody else is watering a row of pots along the windowsills, and the plants in them lean towards the watering can like dogs towards a biscuit.

@toby:warm "It's like being a fish," says Toby, with his face pressed to the glass. "I've always wanted to be a fish."

@jonty:neutral A huge, gentle man with a bashed-in nose and a cauliflower ear is already sitting by the fire knitting something very small. He holds it up to show you: a tiny sea-green hat. "For your {familiar}," he says shyly. "I'm Jonty. I do hats."

He's made it, you realise, in the time since your lantern landed. It's perfect. It has a bobble.

*page_break

"Thank you," you say, and mean it more than you expected to. "It's lovely."

@jonty:neutral Jonty goes very red, all the way up to his cauliflower ear. "I played rugby for eleven years," he says, as if in apology. "Front row. You get a lot of time to think, in a scrum. I used to think about patterns." He's already casting on another one, needles going like a sewing machine in his huge careful hands. "This one's for the lad with the cardigan," he says. "For whatever he's got. I'll do ear-holes, in case."

@noor:neutral Noor, the nurse from the feast, has sat down on the edge of the lily pool with a cup of Delphine's hot chocolate going cold in her hands, and is looking at the water. She looks, for a second, like someone who hasn't sat still in a very long time and doesn't know how to.

*page_break

@delphine:warm "First night's always strange," says Delphine, handing round the cups. "Everyone's tired and everyone's somebody else's. Sit by the water. It helps. The fish know what they're doing." She smiles at you. "You're the one with the lantern. The white one." It isn't a question. "We're very glad to have you."

@delphine:warm "I remember my first night," she says, sitting down on a cushion with her own cup and tucking her feet under her. "I sat right there, by the pool, and cried for an hour, and nobody asked me why. That's what I love about this house. Nobody asks you why. They just bring you another cup." She tips her head back against the pillar and closes her eyes. "Best year of my life. Then I stayed for another one."
*choice
  #Sit by the lily pool with Toby, and let him tell you everything about fish.
    *set fr_toby +1
    *set heart +5
    You sit on the cool stone rim of the lily pool with your hot chocolate, and Toby sits next to you with his, and the silver shoal goes past the windows again, turning all together like a single thought.

    @toby:amused "Those are herring," says Toby, with total confidence.

    "It's a lake, Toby."

    @toby:amused "Lake herring." He blows on his chocolate. "They're very rare. That's why you've never heard of them. My grandad used to catch them. He used to say you can tell a herring by its eyebrows."

    "Fish don't have eyebrows."

    @toby:laugh "That's how you can tell," says Toby, and you both start laughing, and can't stop, and a second-year in the hammock opens one eye and shuts it again. He tells you about his grandad's allotment, and the carp in the ornamental pond at the garden centre who used to come up when he whistled, and a trout he once cooked for Mr Pargeter that was so good Mr Pargeter shook his hand. Most of it, you suspect, is wrong about fish and right about everything else. For the first time since midnight you stop being frightened.

    @toby:warm "They all turn at once," he says, dreamily, watching. "Did you see? Nobody tells them. They just know." He rests his chin on his knees. "I'd like to be like that. Knowing when to turn."

    You sit there until the hot chocolate's gone and the fire's low and Toby has fallen asleep sitting up, leaning on your shoulder for the second time today. Across the pool, Noor catches your eye, and very nearly smiles, and goes back to watching the water.

    *page_break
  #Ask Delphine what "stand still" really means.
    *set wit +5
    @delphine:warm "It means when everything's going wrong, and you want to run," says Delphine, "you stand still, and you look, and you see what's actually there. Instead of what you're afraid of." She looks out at the water. "It's harder than it sounds. I'm still learning it. Second year, and still learning." She taps your cup. "Drink that before it goes cold."

    You drink it. She watches the water, and you watch her watching it, and after a while she starts, quietly, to name the fish for you as they go past: roach, rudd, perch, a pike like a grey log hanging in the green, a great slow eel that she says has lived under the Cloister longer than anyone can remember. She knows every one. She's calm and warm and funny, and you like her very much, very quickly, the way you do sometimes with people who've decided to like you first.

    @delphine:warm "That one's Old Grey," she says, as the eel goes past again, slow as a barge, its long body rippling in the green light. "The first-years are always frightened of him. He's never hurt anybody. He just likes to see who's new." She lifts her cup to the glass, solemnly, like a toast. "Evening, Old Grey. This one's ours now."

    *page_break

    You find yourself lifting your own cup too, feeling foolish, and the eel turns one small gold eye towards the window as it passes, and doesn't hurry, and is gone into the dark.

    "Do you ever get used to it?" you ask her. "Living under the water."

    @delphine:warm "No," says Delphine, after thinking about it. "I hope I don't. I grew up in a tower block. Twelve floors up. You could see the whole city from my bedroom and I never once looked at it." She watches the weed sway. "I look at this every night. I made myself a promise, first week, that I'd never stop looking." She glances at you sideways. "You make one too. Before you forget how strange it is. You forget so fast."

    @delphine:warm "You'll be all right here," she says, when you finally get up to go to bed. "I can tell. You've got a still face." She smiles. "Goodnight, white lantern."

    *page_break
*goto roosted
*comment ---------------------------------------------------------------- CH03.ROOK.01
*label rook
*sid CH03.ROOK.01
*date 2026-09-11 23:10
*place P17 rookhallow
*present hamish saoirse bram familiar
*meet hamish
*meet bram
@hamish:amused "Mind your own!" bellows a gangly man with a ginger beard, a kilt under his robes and a ferret sitting on his head, at the bottom of a stair behind the kitchens that smells so strongly of bread you feel faint. "That's the house greeting, and a fine one it is, and it means [i]mind your own business[/i], so if you see me doing anything, you didn't. Hamish Galbraith. Second year. Welcome to the best house in this castle."

He leads you down, past the kitchen doors, through which you catch a glimpse of a vast vaulted room full of steam and copper and hurrying people and, yes, a goat, standing on a table eating a cabbage with an expression of great contentment. Down another stair. Round a corner. Through a door so low even Hamish's ferret has to duck.

The Rookhallow Undercroft is warm. It's the first thing you notice: warm as a kitchen, warm as a bakery, because it's right under them, and the great ovens' heat comes up through the flagstones. It's a long low vaulted space full of workbenches and forges and anvils and half-built things: a bicycle with wings, a teapot with legs, a clock that runs backwards and seems pleased about it. Copper pans hang from the beams. Black-and-copper banners. A fire in a forge that's never been let go out.

*page_break

It's gloriously, cheerfully untidy. There are tools on every surface and sawdust on the floor and a half-eaten sandwich on an anvil. Somebody has chalked a diagram of something enormous and complicated on one of the pillars, and somebody else has chalked [i]THIS WILL NOT WORK[/i] underneath it, and somebody else has chalked [i]YES IT WILL[/i] underneath that. It smells of hot metal and oil and bread. You like it at once. It's the kind of place where nobody minds if you break something, as long as you learn how it worked first.

@hamish:amused "Bread comes up at five," says Hamish, slapping a warm pillar fondly, as if it were the flank of a horse. "Through the pipes. The ovens fire up at four, and by five the whole Undercroft smells like heaven's own bakery and you can't sleep for being hungry. Best alarm clock in the world." He points. "Forge. Don't touch. Anvil. Don't touch. That bicycle, don't touch, somebody's been building it six years and it's flown twice, once into the Mere." He points at the chalked pillar. "That's the argument. It's been going since before I came. Nobody knows what the diagram's for. Everybody's got an opinion."

Under [i]YES IT WILL[/i], in a different hand, someone has chalked [i]WHAT IS IT THOUGH[/i]. Under that, smaller, [i]does it matter[/i].

@hamish:amused "That last one's mine," says Hamish, with dignity. "I stand by it."

*page_break

@saoirse:laugh Saoirse's already found the workbenches. She has her goggles down and the back off the backwards clock, and she's laughing at something inside it. "It's a [i]clock[/i] with a [i]conscience[/i]," she tells you, delighted. "It's running backwards because it feels bad about the time."

@hamish:amused "Oh, she's one of us," says Hamish happily, watching her. "She's been here four minutes and she's already taken something apart. That's the record, that is. Previous record was mine."

@bram:neutral "Oi," says a thickset young man by the fire, with a buzz cut and small eyes, to the room in general. "Anybody see the Drummond boy nip off to the owls? Couldn't even stay in the house his lantern picked." He laughs. Nobody else does, much. He looks at you. "What about you, then? White lantern. Show-off. What are you, then?"
*choice
  #Pull up a stool next to Saoirse and help her take the guilty clock apart.
    *set st_saoirse +1
    *set flame +5
    You ignore him completely, which is the best thing to do with men like Bram, and pull up a stool beside Saoirse, and hold the torch while she takes the backwards clock to pieces. It keeps apologising. At one in the morning, you get it going forwards, and it chimes, very softly, sounding relieved.

    @saoirse:warm "We make a good team," says Saoirse, pushing up her goggles, and grinning her chipped-tooth grin.

    Around you, the Undercroft has emptied out. Hamish is asleep in a hammock over the forge with his ferret on his chest. The fire's burning low and red. Saoirse puts the clock back on its shelf, where it ticks, forwards, with enormous dignity, and the two of you sit on the workbench for a while with your feet dangling, eating a bread roll each from a basket that somebody's left out, warm from the ovens overhead.

    @saoirse:amused "Best day of my life," she says, through her roll. "Barring the alley." She thinks about it. "Including the alley, actually. Is that weird?"

    "Yes."

    @saoirse:laugh "Good," says Saoirse.

    *page_break
  #Look Bram in the eye. "Tired," you say. "I'm tired. What are you?"
    *set nerve +5
    @bram:neutral Bram Hollis opens his mouth, and shuts it, and finds something very interesting to do with the fire.

    @hamish:amused "Oh, I like [i]you[/i]," says Hamish Galbraith, with enormous glee, and the ferret on his head chatters agreement.

    @hamish:amused He shows you the dormitory himself, up a crooked little stair behind the forge: six beds tucked into alcoves in the old stone, each with a copper curtain and a hot-water pipe running under it from the ovens. "Warmest beds in the castle," he says. "Don't mind Bram. He's all bark. He's also all bite, to be fair, but mostly bark." He winks. "Sleep well, first-year. Mind your own."

    You sit on the edge of your bed for a while with your hands between your knees, feeling your heart slowly come down. You don't usually do that, look someone like Bram in the eye. At work you'd have smiled and said nothing and gone home and thought of the right answer in the shower. It's a strange feeling, to have said it out loud the first time. You're not sure you like how much you like it.

    The pipe under the bed ticks as it fills with heat, and the alcove grows warm as an airing cupboard. {fam_name} approves, loudly, and settles.

    Much later, when the forge has burned down to red and the Undercroft has gone quiet, the copper curtain of the alcove next to yours twitches back, and Saoirse's face appears in the gap, goggles on her forehead, grinning in the dark.

    @saoirse:amused "[i]I'm tired, what are you,[/i]" she whispers, in a terrible impression of you. "Brilliant. His [i]face[/i]. I'm going to be saying that all year."

    "Please don't."

    @saoirse:laugh "All year," says Saoirse happily, and lets the curtain drop. A minute later, through the copper, very softly: "Night, bad influence."

    *page_break
*goto roosted
*comment ----------------------------------------------------------------
*label roosted
You lie awake for a long time in your new bed, in your new house, in a castle on an island in a lake that isn't on any map, with {fam_name} warm against you and your wand under the pillow.

The castle makes noises in the dark, the way old houses do: a creak, a tick, a long low settling sigh somewhere in the stone, as if it's turning over in its sleep. Somebody in the next bed is already snoring, softly. The sheets smell of lavender and cold air. Everything is new, and nothing is yours yet, and you've never felt so much like you're exactly where you're meant to be.

You think about Wrexley. The kettle. The basil. {@job = "calls"|The leaderboard at Brindle Mutual, and your empty headset|}{@job = "nurse"|The whiteboard in A&E, and somebody else rubbing out the waiting time|}{@job = "cook"|The tiny kitchen at the Pie & Pint, and Chef in the yard, wondering where you've got to|}{@job = "shop"|The returns desk at Harker's, and the woman with the toaster, who'll be disappointed on Monday|}{@job = "library"|The green dome of the library, and Stan, who'll have to do the stamping|}{@job = "courier"|The depot, and the radio, and one bike fewer out in the rain|}. You think about Nana Pearl. You think about three grey hoods in an alley, and a hum that took hold of the warm thing in your chest and pulled.

*page_break

Then you think about ten thousand lanterns turning, all at once, to look at you.

You reach under the pillow, in the end, and find your wand, and hold it in the dark on top of the covers. It's warm. Not warm like something left in a pocket: warm from the inside, the way a sleeping animal is warm. When you close your hand round it, the warmth answers, faintly, and the restless thing behind your breastbone turns over and settles, like a dog that's heard its owner's key in the door. You lie there holding it, and breathing, and feeling the two warmths meet somewhere under your ribs, until you lose count of your breaths.

Somewhere far below, in the Lantern Hall, they're humming. You can feel it through the stone, very faint, like a cat purring in another room. You fall asleep to it.
*journal [b]Chapter 3.[/b] The Lantern Train, the Mere, and a castle that felt like somewhere you'd always known. In the Lantern Hall, your lantern flared white when Mr Tully lit it, and every lantern near it turned towards you. It flew to {@house = "larkspire"|Larkspire|}{@house = "owlcombe"|Owlcombe|}{@house = "heronmere"|Heronmere|}{@house = "rookhallow"|Rookhallow|}. Casimir Drummond, from an old family, sneered on the train. The Headmistress, Imelda Kestrel, warned everyone about the Grey Choir: [i]keep your flame close.[/i]
*page_break
*goto_scene ch04
`);
