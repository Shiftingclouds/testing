NB.scene("ch13", String.raw`
*mood night
*set ch 13
*chapter 13 Home Between
*if ch13_way = "stay"
  *goto stay
*comment ---------------------------------------------------------------- CH13.HOME.01
*sid CH13.HOME.01
*date 2026-12-23 19:00
*place P01 home_kitchen
*present dev familiar
7 Viaduct Street is exactly where you left it, and it's the strangest thing you've ever seen.

The Lantern Train takes you south through a whole day of white fields and black woods, with Toby asleep against the window and his hare asleep on Toby, and puts you down at Kingsmere in the dark. Then an ordinary train, a grubby two-carriage stopping service with a broken heater and a man eating an egg sandwich, takes you home to Wrexley. Nobody on it looks at you twice. You keep waiting for someone to notice: the wand up your sleeve, the smell of lantern-oil in your coat, the fact that three days ago you flew over a frozen lake. Nobody does. The guard clips your ticket and calls you "love" and moves on.

You walk from the station with your trunk bumping behind you on its little wheels and {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|inside your coat, peering out at the traffic in disbelief|in a cat basket you had to buy in Kingsmere, making its feelings known}. It's drizzling, the fine grey Wrexley drizzle that doesn't so much fall as hang about. Under the viaduct. Past the chip shop, fogged up and busy, and the launderette with its one lit dryer going round, and the bookie's, and the corner shop with a plastic Father Christmas in the window who's lost his nose. Your street. Your door, with the draught under it. Your key, which still fits.

*page_break

It's so small.

That's the first thing. The kitchen, with its yellow light and its one wobbly chair, is about the size of the Weathervane Room's fireplace. The ceiling's so low you want to duck. There are no lanterns. There's a strip light that buzzes, and a calendar on the wall still on September, and the basil on the windowsill, the one that used to turn its leaves to follow you round the room, which you forgot to give to anyone, and which is dead. When the eight-fifteen goes over the viaduct, the whole house shakes, and the cups rattle on their hooks, and you realise you've been hearing that sound every night of your life and never once noticed it until you'd been away.

It's so small, and so ordinary, and you love it so much you have to sit down on the wobbly chair for a minute.

The house is cold with that particular cold of a place nobody's breathed in for months. You put the heating on, and the boiler thinks about it and then, grudgingly, clanks. {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|flutters up onto the top of the fridge and surveys the kitchen with open contempt, as if it's been asked to live in a shoebox|comes out very slowly, sniffs the lino, sniffs the skirting board, sniffs the draught under the back door, and then sits down on the lino and stares at you, as if to ask whether this is a joke}.

*page_break

Your kettle boils on its own when you look at it. It always did. You just know why, now.

You make a cup of tea with the last teabag in the caddy and no milk, and stand at the back window drinking it, looking at your yard: the bins, the wall, the washing line with one peg on it. Four months ago this was the whole world. It feels like looking at a photograph of yourself as a child: you know it's you. You just can't remember being that size.

At half past seven, someone bangs on the front door with the flat of their hand and shouts "[i]Delivery for the missing person![/i]" through the letterbox, and it's Dev.
*meet dev
@dev:amused He's exactly the same. Lanky, in a hoodie, with his lanyard still round his neck because he's come straight from work, a carrier bag of cans in one hand and a bag of chips in the other and his long face split in the biggest grin you've ever seen. "Look at you," he says. "[i]Look[/i] at you. You're alive. Glossop owes me a fiver." He hugs you, cans and chips and all, and he smells of chip fat and work and the bus, and of home.

He comes in. He sits on the wobbly chair, which you let him have because he's the guest, and it wobbles, and he says "still?" in a wounded voice, as if it's personally let him down. He opens two cans. He tips the chips out onto their paper on the table, the way you always used to, and plants the little wooden fork in the middle like a flag.

*page_break

@dev:amused "Right," he says. "Four months. Where do I start." He points a chip at you. "Glossop's divorce."

"No."

@dev:amused "Yes. She's kept the house. He's kept the caravan. The caravan is on her drive." He lets that sink in. "He's living in it. In December. He comes into work with a flask and a cardigan and he's never been so cheerful in his life. I think it's the best thing that's ever happened to him."

"What else?"

@dev:amused "New girl cried in the store cupboard her second week. Everyone was dead worried. Glossop did a whole talk about wellbeing, with slides." He takes a long pull on his can. "Turns out she'd won forty quid on a scratchcard and didn't know who to tell. She bought everyone on shift a sausage roll." He's quiet for a moment, respectfully. "Good sausage rolls."

"And the Christmas party?"

@dev:amused Dev puts his can down on the table, very carefully, and folds his hands. "I can't talk about the Christmas party."

"Dev."

@dev:amused "Somebody did something to the coffee machine. That's all I'm prepared to say. It's under investigation." He lowers his voice, though there's nobody in the house but you and {fam_name}. "They've sent a man. With a clipboard. He's been in three days. Nobody's confessed."

*page_break

"Was it you?"

@dev:amused "I will die with that secret," says Dev, and eats a chip with enormous dignity.

It's so easy. That's what gets you. You'd thought it might be awkward, after four months and a castle and a lake. It isn't. He talks and you laugh and the chips go down and the boiler clanks, and it's every Friday night of the last three years, and it's the nicest thing that's happened to you in ages that didn't involve magic. The whole time, he doesn't ask where you've been. He's very carefully, very obviously, not asking. He asks about everything else: whether you've been eating, whether you've got a proper coat for the winter, what that animal is and whether it's legal. He just steps round the one big question, every time, like a man walking round a hole in the pavement.

@dev:neutral Halfway through the second can, he stops, and looks at you across the kitchen table, properly, and his grin goes a bit quieter.

@dev:neutral "You look different," he says. "Not bad different. Just..." He waves a chip. "You used to look tired all the time. Like, all the time. For years. And you don't. You look like somebody switched you on." He eats the chip. "Where've you been, mate? For real. You don't have to tell me. But you can."
*choice
  #"A school. For people like me. Who found something out about themselves late." True, and not the whole truth.
    *set heart +5
    *set fr_dev +1
    @dev:neutral Dev doesn't say anything at first. He turns his can round on the table, a full slow circle, reading the label as if it might have changed. "People like you," he says. "Right." Then he nods, slowly, as if something's been confirmed that he's suspected for years.

    @dev:warm "I always thought there was something," he says. "You know. The lights. That time the vending machine gave you six chocolate bars and you hadn't put any money in. I thought you were just lucky. Or haunted." He shrugs, one shoulder. "Good. That's good. You should've gone years ago." He raises his can. "To people like you."

    You clink. He never asks again, not that night, not ever, and you love him for it more than you can say.
  #"Training course. Up north. Very boring. Lots of forms." Keep him safe from it.
    *set wit +5
    @dev:amused "Lots of forms," says Dev, gravely. "Right. Course." He clearly doesn't believe a word of it. He clearly doesn't mind. "What sort of forms?"

    "Long ones. In triplicate."

    @dev:amused "In [i]triplicate[/i]." He nods, very seriously, as if you've told him something deeply moving. "Well, the forms suit you," he says, and clinks his can against yours, and changes the subject to the coffee machine, and doesn't look at the kettle, which is steaming gently on its own on the counter behind you, and has been for about a minute.

It gets late the way it used to, without either of you noticing. You find a packet of custard creams at the back of the cupboard that went out of date in October and eat them anyway. {fam_name} warms to Dev by degrees and ends up {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|on the back of his chair, very close to his ear, which he finds unnerving|asleep on his feet, which he takes as an honour}. The eleven o'clock bus goes past the end of the road with nobody on it.

At eleven, at the door, with his hood up against the drizzle, he turns back.

@dev:neutral "Glossop says your job's still there," he says. "If you want it. After." He shrugs. "I said you wouldn't. I said you'd found something better." He looks at you in the yellow light from the kitchen. "Have you?"

You tell him yes.

@dev:amused He grins, the whole long face of it. "Knew it," he says. "Knew it. Christmas Day, you're at your nan's, yeah? Tell her I said happy Christmas. Tell her I've still got her tin." He goes off up Viaduct Street under the orange streetlights, whistling something tuneless, and you stand at the door until he's round the corner, and a bit longer, with the drizzle coming in on your socks.
*page_break
*comment ---------------------------------------------------------------- CH13.HOME.02
*sid CH13.HOME.02
*date 2026-12-25 13:00
*mood day
*place P02 nana_pearl
*present nana familiar
Christmas morning in Wrexley is grey and still and smells of other people's dinners.

You walk across town to Laburnum Close because the buses aren't running and because you want to. The streets are empty in the way they only are on Christmas Day: every car parked, every curtain half open, children on new bikes wobbling up and down pavements with their dads jogging behind them. Somebody's playing carols too loud behind a bay window. The canal's the colour of a spoon. {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|rides inside your coat with just its head out, taking it all in|comes along beside you on a length of washing line for a lead, stopping to investigate every wheelie bin}. It's nothing like Wrenfold. You'd forgotten how nothing like Wrenfold everything else is.

Nana Pearl's bungalow smells of turkey and sprouts and lavender and toast, and it's so hot you have to take your jumper off in the hall. She opens the door before you knock. She always has.

The turkey is, in fact, the size of a small dog. Nana has cooked it anyway, and it's perfect, and there are roast potatoes and pigs in blankets and bread sauce and three kinds of stuffing, because she couldn't decide, and a trifle in a cut-glass bowl that's older than you. The telly's on, quietly, in the corner, the way it's always on. Your auntie Carol has rung, and been talked to, and been got rid of. Admiral the budgie is sitting on top of his cage, eyeing {fam_name} with deep suspicion, and {fam_name} is eyeing Admiral right back.

*meet nana
@nana:warm "Don't you dare," says Nana Pearl, to {fam_name}, pointing a serving spoon. "He's eleven. He's got a heart condition." She sits down in her paper crown, with her red glasses on and her pink lipstick on and her pearls on, and looks at you across the table. "Right," she says. "Now tell me everything. Start with the castle. Is it a proper castle? Towers? Moat?"

*page_break

"A lake. It's on an island in a lake."

@nana:amused "Better than a moat," says Nana, satisfied, and passes you the bread sauce. "Go on, then."

You start with the lanterns, because you have to start somewhere.

"There's a hall. The Lantern Hall. You can't see the roof; nobody's ever seen it. And there are lanterns floating about under it, paper ones, ten thousand of them, and they hum a bit at mealtimes. And when somebody stands up to speak, they all turn round to look at them."

@nana:amused "Turn round? Like sunflowers?"

"Like sunflowers. Gold and pink and green and blue."

@nana:warm She's put her knife and fork down. She hasn't touched her sprouts. "Go on."

So you go on. You tell her about the first night: lighting a lantern from an old man's taper and letting it go, and watching it wobble up into the dark and fly across the Hall to one of the four roosts, as if it knew the way. She wants to know which roost, and what the colours are, and whether they've given you a scarf. They have. She wants to see it. You haven't brought it. She tuts.

@nana:neutral "And friends? You've got friends? Proper ones, not just people you sit next to?"

"Toby. He was a baker. He kept setting the croissants on fire. He's got a hare called Custard."

@nana:amused "A hare." She considers this. "Is he nice to you? The boy, not the hare."

*page_break

"He makes me toast. When I've had a bad day he just turns up with toast."

@nana:warm "Then I like him," says Nana Pearl, as if that settles a matter of law, and it does.

She makes you tell her about flying twice. The first time she says "you never," in a voice of pure delight. The second time, when you get to the bit where you went over the lake with the water black underneath, she says "at your age," and you say "I'm twenty-five, Nana," and she says "that's what I said." She wants to know about the teachers. You do Professor Bassani for her, both arms out, everything twice, [i]magnificent, magnificent[/i], and she laughs so much she has to take her glasses off and wipe them on her napkin, and Admiral shrieks in sympathy.

@nana:neutral "And the headmistress," she says, when she's got her breath back. "Is she a nice woman or just a clever one?"

You think about it. Hazel eyes, and the silver plait, and the room full of weather, and a face that never quite stops being tired. "Both. I think she's both. She doesn't sleep much."

@nana:neutral "The good ones don't," says Nana.

You tell her about Emberfall last, the lanterns floated out on the black water for the dead, hundreds of them, going away across the Mere in the dark. She goes quiet at that, and turns her glass round on the tablecloth. "Your grandad would have liked that," she says, and blows her nose on a cracker hat. {fam_name}, meanwhile, is trying very hard to look as if it has never in its life considered eating a budgie.

You don't tell her about the Choir. Or Delphine, or Bram, or Odile Pellow standing in the high street singing.

@nana:neutral But she's eighty-two, and she raised you, and she's been reading your face since before you could talk. When you've finished, and the trifle's gone, and the crackers are pulled, and the jokes read out and groaned at, she takes her paper crown off and folds it up neatly on the tablecloth, and says, quietly, "And what aren't you telling me?"
*choice
  #Tell her the truth. All of it. She's the only person you've never lied to.
    *set heart +10
    *set told_nana true
    You put your fork down. You don't know how to begin, so you begin in the wrong place.

    "There's a girl called Delphine. Was. Is." You stop. "She's still alive. That's the thing. She's alive."

    @nana:neutral Nana doesn't say anything. She waits, the way she used to wait when you were small and had broken something and were working up to it.

    "They found her in the Glasshouses. In October. Walking about. Awake. She said hello to everyone, very nicely, and she didn't know her own name. She's grey, Nana. Her skin's gone grey. It's like somebody came along and blew her out."

    @nana:neutral "Blew her out," says Nana Pearl, very quietly. "Who did?"

    "They're called the Grey Choir. They wear hoods. They don't talk; they hum. They stand somewhere near you and hum, and your..." You haven't got a word she'd know. "Your magic. Everybody's got a sort of flame, inside, if they've got magic at all. It leans towards the humming, like a candle in a draught. And then it goes."

    Admiral shuffles on his perch. The telly murmurs about the weather in the north.

    "In December they came to the village near the school. In the daytime. There was a woman there, Odile, who makes wands. She stood in the road in front of a load of first-years and sang at them. On her own. To hold them back while everyone ran." Your voice goes, and you wait for it to come back. "It worked. For a bit. She's grey now too."

    *page_break

    @nana:neutral Nana reaches over and moves the gravy boat out of the way, so there's nothing on the tablecloth between her hands and yours. "And you," she says. "Where are you in all this, love?"

    Here it is. You look at her flame without meaning to: small and bright and stubborn in the middle of her.

    "I can see them. The flames. Everyone's. You've got one. It's little, and it's very bright." Her eyebrows go up above her red glasses and stay there. "And when one's gone out, I can light it again. Not easily. It costs something. But I can. There's an old word for it. Kindler. There's hardly ever been one."

    @nana:neutral "Hardly ever," she repeats.

    "There was one at the school forty years ago. Somebody put his flame out, in a lesson. By accident, they said. And now he..." You don't know how to finish it. "The Headmistress thinks he's the one the Choir sing for. His name's Aldric Morrow."

    @nana:neutral She doesn't say anything. The telly murmurs. Admiral shuffles on his cage. Outside, a child goes past on a new scooter, shouting to somebody to wait.

    @nana:warm "Right," she says, at last. "Well." She reaches across the table and takes your hand in both of hers, the way she did when you were six and had nightmares. "Then I'm glad you're there, and not here. Because there's a whole castle round you, and a headmistress, and a lake, and all those lanterns. And here, there'd only be me and Admiral." She squeezes. "And I'd fight them, love. You know I would. But I'm eighty-two."

    "I know, Nana."

    @nana:warm "My mother came back quieter," she says. "From that school. I always wondered what she'd seen." She pats your hand, twice, and lets it go, and stands up to clear the plates, because that's what she does with a feeling too big for the table. "Well. Now I know a bit of it. Pass me that gravy boat."
  #"Nothing, Nana. It's all good. Honestly." Some things you carry so she doesn't have to.
    *set nerve +5
    @nana:neutral She looks at you over her red glasses, and doesn't blink, and you hold her eye, which is one of the harder things you've done this year. "All right," she says. "Keep it, then. If it's yours to keep." She pats your hand. "But you know where I am. And I'm tougher than I look. I have to be. I've got your auntie Carol."

    She gets up to clear the plates, and you let her, and you hear her in the kitchen, running the tap, humming, for a long time.

Nana's boiler breaks down on Boxing Day, spectacularly, with a bang and a smell of burning and a small flood in the airing cupboard, where the toffee tin you sent her from Thimble Cross is still, faintly, snowing. The man can't come till the fourth. So Nana Pearl packs a bag and her toast rack and Admiral in his travelling cage and comes to stay with you at Viaduct Street, and sleeps in your bed, and you sleep on the sofa, and it's the best week you've had in years.

She reorganises your kitchen cupboards the first morning without asking. She finds the out-of-date custard creams and says nothing, loudly. She watches the snooker with the sound up and shouts advice at it. She makes you porridge the way she did when you were small, with a spoonful of golden syrup in a pool in the middle, and you eat it at the wobbly table while she reads out the deaths in the paper. You take her down the canal on the afternoon of the twenty-seventh, arm in arm, slowly, because of her hip, and she tells you who used to live in every house you pass, and who they married, and who they shouldn't have. {fam_name} and Admiral come to an arrangement by the second day, which mainly consists of pretending the other doesn't exist.

The house feels bigger with her in it. You can't work out how.

*page_break

On the third night, she does the washing-up, and you dry, and she hums.

You almost drop the plate.

@nana:neutral "What?" she says, turning round with her yellow gloves on. "What's the matter?"

"That tune. Where did you learn that tune?"

@nana:neutral "This?" She hums a bit more. Up, and round, and back down. "My mother used to sing it. Your great-gran Ivy. At the washing-up, every night of my life, till she died. She said it was for keeping the cold out." She frowns at you. "Why?"

It's the Wren's Song. The first voice. Exactly the way Odile sang it in the snow at Thimble Cross, with her boots planted. Exactly the way it's written in the carol book on page ninety-one, in square old notes, with Hester Wren in the margins.

A year ago you'd never have heard it. It was Nana's washing-up tune, like the smell of the lemon squeezy bottle and the squeak of the hot tap. You've been listening to the first voice of the Wren's Song since before you could walk.

@nana:warm "She used to say there was another bit," says Nana Pearl, turning back to the sink, "that went underneath. She taught it me when I was little. Said I had to sing it with her, or it didn't work. I never knew what she meant by work." She hands you a dripping gravy boat. "I haven't sung the underneath bit in sixty years. I expect I've forgotten it."

*page_break

You look at her, at her small back and her yellow gloves and her pouf of white hair, and you think of Odile Pellow saying [i]it's meant for a lot of people[/i], and of the carol book: [i]the others to be found in their places.[/i]

"Nana. Would you sing it for me? The underneath bit?"

@nana:amused She laughs. "Now? With my voice?" But she tries. She hums, uncertainly, and stops, and shakes her head, and starts again. It's lower. It goes a different way, down where the first tune goes up, turning the other way, like a second bird going round the chimney in the opposite direction. She gets about four bars before she loses it. "No," she says. "That's all I've got. Sixty years." She pulls the plug out of the sink and watches the water go. "What a thing to remember. I can't remember where I put my good scissors, and I can remember that."

She goes to bed at ten, in your bed, with Admiral's cage covered in a tea towel on the chest of drawers. You lie on the sofa in the dark with the orange streetlight coming through the gap in the curtains, and you hum the four bars over and over under your breath, half the night, so you won't forget them.
*page_break
*comment ---------------------------------------------------------------- CH13.HOME.03
*sid CH13.HOME.03
*date 2026-12-29 23:30
*mood night
*place P01 home_street_night
*present nana corliss jory familiar
On the twenty-ninth of December, at half past eleven at night, the trains stop.

You notice because you don't notice. You're lying on the sofa under a blanket, not asleep, thinking about the four bars, and the eleven-forty should go over the viaduct and shake the house, and it doesn't. Then you realise the fridge has stopped humming. Then you realise the fridge has stopped humming because something else is humming instead, and it's so low and so everywhere that it's taken your ears this long to find it.

It's in the walls. It's in the springs of the sofa. It's in your teeth.

{fam_name} is on the windowsill, rigid, staring out through the gap in the curtains at the street.

You get up. Your feet are cold on the lino; the whole room's gone cold, the kind of cold that doesn't come in through windows. You look out.

The streetlights on Viaduct Street are going grey. One by one, from the far end, from the bridge, coming this way. Orange, and then dim, and then grey, dead grey, the colour of ash. The Christmas lights in the windows of the houses opposite, the flashing reindeer at number twelve, the little white stars at number fifteen: grey. Grey. Grey. Coming down the street like a tide over sand.

Under the viaduct, in the dark between two of the great brick arches, standing perfectly still, is a tall figure in a grey robe with the hood pushed back and a shaved head, humming.

The Hush.

They came. The Headmistress said the Choir had never yet come looking for a student in their own house. They've come.
*if morrow_knows
  The Hush saw your flame in Thimble Cross. She's come for you.
*else
  You don't know how they found you. It doesn't matter.

@nana:scared "{name}?" Nana Pearl is in the kitchen doorway in her quilted dressing gown and her hairnet, holding the edge of the door. Her face is grey in the grey light, and her hands are shaking. "{name}, love, my hands have gone cold. My hands have gone all cold."

You can see her flame. You don't have to try. Small and bright and warm and stubborn, like a pilot light that's been burning in the same boiler for eighty-two years. You've never looked at her like this before. You've never let yourself. There's more of it than you'd have thought; there always was.

And a grey thread, thin as a cobweb, coming through the window glass towards it.

@corliss:neutral Out in the street, under the viaduct, the Hush lifts her head, and looks straight at your window, and hums.

You've got about ten seconds. You know it. You knew it in Thimble Cross.
*choice
  #Sing. The first voice, the way Odile sang it. And ask Nana for the underneath.
    *set heart +10
    *set nerve +5
    *set sang_odile true
    You open your mouth and sing. The Wren's Song, the first voice, up and round and back down, loud, into the grey kitchen, the way Odile Pellow sang it in the snow with her boots planted and her chin up. Your voice cracks on the second note. You keep going.

    The grey thread coming through the glass stops.

    It doesn't break. It stops. Wavers. Like a cobweb in a draught. But it's one voice, and one voice isn't enough; you watched it not be enough, in Thimble Cross. You can feel the hum pushing back, pressing on you, feeling along the song for the gap.

    "Nana! The underneath! Sing the underneath!"

    @nana:scared She doesn't understand. She can't possibly understand. But she's Nana Pearl, and when you were six and had nightmares she sat on the end of your bed and sang till they went away, and she opens her mouth, shaking, in her hairnet, and sings the four bars she remembers. Low. The other way round the chimney.

    The kitchen [i]rings[/i].
  #Get between her and the window, and reach for your flame. Hold hers the way you held Toby's.
    *set kindling +10
    *set chill +1
    You put yourself between Nana and the window and close your eyes and reach, with the white flame in the middle of you, and get it round hers: small and bright and stubborn, eighty-two years old. You cup it like a match in a gale. You hold.

    The grey thread hits your flame and slides off. And comes again. And again. Every time, it's colder, and you're colder, and you can feel it now, the Hush's patience, the way she's leaning on it, like somebody leaning on a door they know will open eventually. Your fingers have gone numb. Your breath is smoking in your own kitchen. You can't do this all night. You can't do it for another minute.

    @nana:scared Behind you, Nana Pearl, shaking, in her hairnet, with no idea what's happening, does the only thing she's ever done when someone she loves is frightened in the dark. She starts to sing. Great-gran Ivy's washing-up song. The underneath part. Four bars, low, the other way round the chimney.

    Without thinking, still holding her flame, you sing the first voice over the top.

    The kitchen [i]rings[/i].

That's the only word for it. Two voices, turning in opposite directions, and where they cross, something happens: a note that isn't either of them, high and clear and bright, like a finger run round the rim of a glass. You feel it in your chest. You feel it in the floor. The cups on their hooks shiver with it. On your finger{@thimble|, great-gran Ivy's silver thimble, which you've worn every day since September, goes warm, and then hot, and the tiny cocked-tailed wren on the rim seems, for a second, to|, where you'd wear a ring if you wore one, something seems, for a second, to} shine.

The grey thread shrivels, like a hair held to a candle, and is gone.

@corliss:neutral Out under the viaduct, the Hush stops humming. For the first time, her closed mouth opens. Not to sing. In surprise.

You don't stop. Nana doesn't stop. She loses the four bars and goes back to the beginning, and you go back with her, and you sing them over and over, the two of you, in the kitchen at Viaduct Street at a quarter to midnight in your pyjamas, with the budgie shrieking under his tea towel and {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|beating at the window with its wings|pressed flat to the windowsill, rigid}, and you hold.

It's not enough to drive her off. Two voices aren't. But it's enough that she can't get in.

*page_break

Then, at the far end of Viaduct Street, a light: brass, and bright, and swinging, coming at a run.
*meet jory
@jory:tense Jory Penrose. In his too-big greatcoat, with his lamp held up high in front of him, running flat out down the middle of the street between the parked cars, shouting a Lamplighter's word at the top of his lungs, "[i]LUME! LUME![/i]", with the brass lamp blazing white.

@corliss:neutral The Hush looks at him. Looks back at your window, one more time: a long flat grey look, with nothing behind it at all. Then she steps backwards, into the dark under the arch, and she's gone.

The streetlights come back on. Orange. The reindeer at number twelve starts flashing again. Somewhere up the road a dog starts barking, as if it's been holding it in. The eleven-forty, forty minutes late, goes thundering over the viaduct, and the whole house shakes, and the cups rattle on their hooks, and you've never been so glad to hear anything in your life.

@jory:tense Jory is on your doorstep, bent double, gasping. "Headmistress," he wheezes. "Sent birds. To everyone. Who went home." He straightens up. "Every Lamplighter we've got is standing in some street somewhere tonight. I got you." He looks past you, at Nana Pearl in the kitchen doorway in her dressing gown and hairnet, holding the door frame with both hands. "Is she all right? Are you all right? What did you [i]do[/i]? I felt that from the end of the road."

*page_break

@nana:neutral Nana Pearl lets go of the door frame. She's still shaking. She looks at Jory, and at his lamp, and at his greatcoat, and at you. Then she draws herself up to her full four foot eleven.

@nana:warm "Young man," she says. "You look frozen. Come in and have a cup of tea."

@jory:tense He does. He sits on the wobbly chair, which wobbles, with his lamp on the table beside the salt and pepper, still burning white, and holds his mug in both hands as if it's the only warm thing left in the world. Close to, he looks younger than ever: his curly hair plastered to his forehead with sweat and drizzle, his big brown eyes going to the window every few seconds. "She won't come back tonight," he says. "Not after that. I'll sit on your step till it's light anyway, if that's all right. And there'll be somebody on this street till you go back. Orders."

@nana:neutral "Have you eaten?" says Nana Pearl.

@jory:tense "Er," says Jory Penrose, Lamplighter of the Order of the Lamp.

@nana:warm She makes him a bacon sandwich at midnight in her dressing gown, and he eats it in four bites, and she makes him another. Then she sits down across the table from him, and folds her hands.

@nana:neutral "How old are you?"

@jory:neutral "Twenty-four, madam."

@nana:neutral "Twenty-four." She lets that sit. "And where's your mother?"

@jory:neutral "Porthallow. It's by the sea. It's... quite a long way."

*page_break

@nana:neutral "And does she know you're out in the middle of the night, in the rain, running at... whatever that was, with a lamp?"

@jory:neutral Jory looks into his tea. "She thinks I work for the council," he says. "In lighting."

@nana:amused "Well," says Nana Pearl, after a moment. "You're not lying to her." And she pushes the plate with the second sandwich an inch closer to him, which from her is a medal.

You stand at the sink with your hands still tingling, and your fingers still warm, and watch them.

@nana:warm When Jory's gone out to his step with a blanket and a flask, Nana comes and stands beside you at the sink. She doesn't look at you. She looks at the window, at the orange streetlights, at the reindeer at number twelve going on and off. "That was the underneath bit, wasn't it," she says, very quietly, in a voice you've never heard her use. "That's what it was for."
*page_break
*comment ---------------------------------------------------------------- CH13.HOME.04
*sid CH13.HOME.04
*date 2027-01-03 16:00
*place P11 platform_nought
*present nana toby familiar
The last few days of the holiday go quietly, and nobody at 7 Viaduct Street sleeps very well.

There's a Lamplighter at the end of the road every night after that, in a greatcoat, pretending to wait for a bus that doesn't run past midnight. A different one each night, until New Year's Eve, when it's Jory again.

At ten to midnight Nana sends you out to fetch him. He's standing under the streetlight with his collar up and his lamp turned low, stamping his feet, and when you tell him he's to come in for a sherry he says he's on duty, and when you tell him Nana says he can be on duty in the front room, where it's warm, with the curtains open, he thinks about it for about a second and a half and asks whether it's sweet sherry. It is very sweet sherry. He comes.

He sits bolt upright in the armchair by the window with his lamp on his knee and a tiny glass in his hand, and watches the fireworks on the telly and the street outside by turns, and at a quarter past twelve, while Nana is telling him about your grandad's allotment, he falls asleep sitting up. She puts a blanket over him and takes the glass out of his hand. "Poor lamb," she says, to you, very low. "Leave him. Somebody's got to be on duty for him, for once."

*page_break

Dev comes round on New Year's Day with a hangover and a box of leftover chocolates and sits with Nana for two hours discussing snooker, and doesn't ask why there's a man in a long coat standing under the viaduct, and doesn't ask why your nan keeps humming the same four bars under her breath.

Nana won't sleep with the light off now. She doesn't say why. She just leaves the landing light on, and you leave it on too.

On the third, the boiler man still hasn't come, and it's time to go back.

Nana Pearl insists on seeing you off.

Nobody from outside is supposed to be able to find Platform Nought. Nana finds it anyway, in the grey afternoon, in her good coat and her church hat, holding onto your arm, by walking straight through the wall between Platforms Four and Five at Kingsmere Central as if she's done it all her life. You open your mouth to warn her, and then you're through, both of you, and she's patting her hat straight.

On the other side, the Lantern Train is waiting in a cloud of silver steam, long and dark and gleaming, with every window lit gold, and the platform's full of students and trunks and cages and hugging families, owls on shoulders and cats in baskets and somebody's ferret loose and being chased, and Nana Pearl stands in the middle of it all and looks round with her mouth open.

*page_break

@nana:warm "Oh," she says. "Oh, my mother was right. She said you never forget it." She squeezes your arm. "She told me about it once. The steam. The gold windows. I thought she was making it up, for a story." She looks up at the lit carriages, and her eyes are bright behind her red glasses. "I've been waiting seventy years to see this."

@toby:laugh "[i]{name}![/i]" Toby comes barrelling down the platform with his trunk in one hand and a tin of his mum's mince pies in the other, and hugs you, and sees Nana Pearl, and goes pink, and shakes her hand very formally. "Mrs Pearl. Hello. I'm Toby. I've heard so much about you. Is it true you once hit a man with a handbag?"

@nana:amused "Twice," says Nana Pearl, delighted. "Same man." She looks him up and down: the cardigan, the flour on his sleeve, the hare peering out of his coat. "And it's not Mrs Pearl, love. Pearl's my first name. You can call me Nana. Everybody does, in the end."

@toby:warm Toby looks as if he's been handed a medal. "Nana," he says, and then, as if it's only fair, "these are mince pies. My mum made them. You should have them. She makes too many. She makes about four hundred."

*page_break

@nana:amused Nana takes the tin and prises the lid off and inspects one with the air of a judge at a show, and bites it, and chews. "Your mother," she says, "knows what she's doing with pastry." Toby goes pinker than ever. "You look after this one," she says to him, nodding at you. "They don't eat properly when they're worried."

@toby:warm "I know," says Toby, earnestly. "I make them toast."

The guard blows his whistle. Up and down the platform, doors start to slam. Nana Pearl turns to you. She's not crying. She's absolutely not crying. She's got her chin up, the way Odile Pellow had her chin up in the snow.
*if told_nana
  @nana:warm "You be careful," she says. "And you find the rest of that song. All of it. Every voice. You hear me?" She holds your face in her small cold hands. "And when you've found it, you come home and teach it me."
*else
  @nana:warm "You be careful," she says. "I don't know what that was, in the kitchen. I'm not asking. But you find out, and you be careful, and you come home." She holds your face in her small cold hands. "And you take this with you." She hums, very softly, the four bars. The underneath. "Don't forget it. I don't know why. Just don't."

You get on the train. You lean out of the window. She stands on the platform in her church hat and her good coat, with Toby's mum's mince pies under her arm, getting smaller, waving, not crying, until the Lantern Train pulls out past the end of the platform and into the dark, and the gold windows are the only light.

Toby doesn't say anything for a good while. He sits opposite you with Custard asleep on his knee and watches your face, and passes you a mince pie, and waits. The wild country goes by outside, black hills and blacker water and, once, a farmhouse with one lit window, a long way off. All the way north, in the dark, you hum four bars under your breath, so you won't forget.
*goto after
*comment ================================================================ stay
*label stay
*comment ---------------------------------------------------------------- CH13.STAY.01
*sid CH13.STAY.01
*date 2026-12-24 19:00
*place P13 lantern_hall_longnight
*present saoirse idris noor kestrel tully familiar
Wrenfold at Christmas, with forty people in it, is a different castle.

It empties on the twenty-first, after Longnight, all at once, in a great rush of trunks and cages and people shouting goodbye across the courtyards. You stand on the jetty and wave off the last boat as it slides out onto the black water with its lanterns bobbing at the prow and Toby waving from the back of it with both arms, and then it's round the headland and gone, and the silence comes down over the castle like a lid.

The snow comes on the twenty-third and doesn't stop. It piles up on the battlements and in the courtyards and against the doors, soft and deep and blue in the shadows, and the Mere freezes solid right across, and the boats can't run, and the castle is snowed in, and it's wonderful. The corridors are empty and echoing; you can hear your own footsteps three staircases away. Portraits you've never heard speak start chatting to you out of sheer boredom. The house common rooms are empty, and you can have the best chair by the fire every night, and you do, with {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|on the chair-back|in your lap} and a book you're not reading.

The kitchens send up hot chocolate at odd hours without being asked. There are no lessons. You sleep till nine, which you haven't done since you were a teenager, and wander the castle in two jumpers, finding rooms you didn't know were there: a gallery full of stuffed birds, a staircase that only goes up, a window seat in the Observatory tower where you can see the whole white Mere from end to end.

*page_break

By Christmas Eve, the ten thousand lanterns in the Lantern Hall have gone soft gold again, and they drift low and slow over the one long table the kitchens have laid down the middle of the Hall for everyone who stayed. The four house tables are pushed back against the walls. It feels like a family dinner in a cathedral.

Forty people. Six Lamplighters, who take turns eating, with their greatcoats on. The Headmistress, at the head of the table in a paper crown, which is somehow the most frightening thing you've ever seen. Mr Tully, carving. And whoever else stayed, and why.

@saoirse:laugh Saoirse, because she never goes home. "Home's my dad's flat in Cardiff and my dad's girlfriend's three terriers," she says, pulling a cracker with you so hard it explodes in a shower of sparks and a paper hat that's actually on fire. "I love my dad. I love him from a distance of about two hundred miles." She puts the burning hat on anyway, and pats it out, and leaves it on, smoking gently.

"Does he mind? You not going?"

@saoirse:amused "He sent me a jumper with a reindeer on it," says Saoirse. "And a card that said [i]don't blow anything up, love[/i]. So no. He knows me." She pulls the jumper out from under her overalls to show you. The reindeer's nose lights up. "I did that," she says proudly. "It didn't used to."

*page_break

@idris:neutral Idris, because he doesn't have anyone to go home to. He says it quite simply, as a fact, passing the potatoes. "My parents are both dead. I spent last Christmas here too. It's quieter than it sounds." He looks round the table at the forty of you in your paper hats, at Saoirse's hat smoking, at a Lamplighter trying to eat a mince pie without taking off his gauntlets. "This is the loudest one I've been to," he says, and something at the corner of his mouth might be a smile. "I don't mind it."

@noor:tired Noor, because the Infirmary's still got three hum-sick first-years in it, and she won't leave them, and Matron's given up arguing. She comes to dinner for exactly forty minutes, in her uniform, with her watch pinned to her front, and eats a whole plate of turkey without stopping, and says, between mouthfuls, "One of mine laughed today. The Larkspire boy. Toby's hare got into the ward and sat on his feet, and he laughed." She stabs a potato. "That's the best sign there is. Better than anything on a chart." Then she falls asleep at the table with a sprout on her fork.

@noor:tired Nobody wakes her. Saoirse very gently takes the fork out of her hand. Somebody puts a paper hat on her head, and she sleeps in it, upright, until a quarter to nine, when she wakes with a start and says "I'm not asleep," and goes back to the Infirmary, still wearing it.
*if b_cas_family
  *present cas
  @cas:guarded And Cas. You didn't know he'd stayed until he walks into the Hall, late, with snow on his shoulders and his grandmother's Longnight letter still unopened in his coat pocket; you can see the corner of it. He sits down opposite you without a word. After a while, he says, not looking up from his plate, "I took your advice. Don't mention it." You don't. He pulls a cracker with you. He gets the hat that's on fire, and wears it, gravely, all the way through pudding.

The pudding comes in on fire too, on purpose this time, carried in by two of the kitchen staff and set down in front of the Headmistress, who regards it with enormous satisfaction. There's brandy butter. There's a sixpence somewhere in it; Saoirse finds it, and bites it, and swears.

*page_break

@kestrel:warm The Headmistress, at the head of the table, stands at nine o'clock, in her paper crown, and raises her glass. The lanterns overhead turn towards her, all together, the way they do. "To those who stayed," she says. "And to those who went home. And to those who couldn't do either." She looks down the long table, at forty faces in the candlelight. "Merry Christmas, Wrenfold."

"Merry Christmas," say forty voices, raggedly, and drink.

@tully:warm Mr Tully, carving, lifts his knife in salute. His lined face is rosy in the firelight. But when the others drink, he doesn't. You notice him put his glass down untouched, and look up at the lanterns drifting over the table, one by one, as if he's counting them.

@tully:sad He's still sitting there when the table's cleared and people are drifting off to the common rooms in twos and threes with their paper hats on crooked. On his own at the end of the long table, with his hands round his untouched glass, looking up. You say goodnight to him on your way out. It takes him a moment to hear you, and then he smiles, the kind old smile, and says "Goodnight, {name}. Happy Christmas," as if he's coming back from somewhere a long way off.
*page_break
*comment ---------------------------------------------------------------- CH13.STAY.02
*sid CH13.STAY.02
*date 2026-12-27 22:00
*place P12 mere_frozen
*present saoirse familiar
The days after Christmas run together, white and slow and quiet.

You go sledging on tea trays down the slope behind the Glasshouses with Saoirse, who has fitted hers with runners and very nearly goes through the Glasshouse wall. You eat leftover turkey in every form the kitchens can think of. You read in the Long Stacks, which Miss Dunne keeps open for the stayers, with the snow light coming grey-white through the high windows and nobody else there but the clocks. At night the Mere groans and booms as the ice thickens, long deep sounds like whales singing a mile away, and the first time you hear it you sit bolt upright in bed.

On the twenty-seventh, a letter comes for Saoirse, by a thin grey pigeon that's clearly never flown this far north before and collapses on the breakfast table in the butter.

She reads it. She reads it again. Then she folds it up very small, and puts it in the pocket of her overalls, and says, "Right," in a bright hard voice, and gets up, and goes, and nobody sees her all day.

The pigeon's return label is still on the table, by the toast rack, where she left it. You don't mean to read it; it's just there. It's from Kingsmere. It's addressed in a woman's handwriting, round and careful. There's a name on the back, over the sender's address, in the same handwriting: [i]Mrs A. Maddock.[/i]
*if st_saoirse >= 3
  Her mam. Twenty-one years since a Tuesday, since a bag packed while she was at school, and now a letter.
*else
  Maddock. The same name. In four months you've heard all about Saoirse's dad, and his girlfriend's terriers, and every engine she's ever taken apart; you've never once heard her mention a mother.

You look for her. You try the Rookhallow Undercroft, where her workbench is covered in bits of engine and the radio's been left on to nobody. You try the boathouse, where the bike lives under a tarpaulin, and the bike's still there. You try the top of the Rookery, where she goes to think. Nothing. By dinner you've stopped looking, because it's clear she doesn't want to be found, and because you know what that's like.

At ten o'clock at night, you're at your window, and you see a single light come out of the boathouse onto the frozen Mere. A headlamp. Moving fast. And you hear it, even from here: the roar of a motorbike engine, a motorbike that shouldn't exist, that shouldn't be able to run on ice, heading straight out across the black frozen lake towards the far shore, towards the south, towards Thimble Cross and the road and the train and away.

You're at the boathouse in four minutes, with your coat on over your pyjamas and your boots unlaced.
*if st_saoirse >= 3
  She's stopped. She's a quarter of a mile out on the ice, a tiny black shape in the headlamp's cone with the engine idling, sitting astride the bike, not moving. As if she got that far and her body forgot what came next.
  *choice
    #Go after her. Across the ice. On foot, in the dark.
      *set b_saoirse_run true
      *set st_saoirse 4
      *set nerve +10
      It takes you twenty minutes to reach her, slipping and sliding across a quarter of a mile of black ice in the dark, with the cold burning your lungs and the stars enormous overhead. You fall twice. The ice under your hands is so clear you can see the stars in it too, so that you're crawling across the sky. The whole way, you think she'll go. Every step, you expect to hear the engine roar and see the headlamp swing away. She doesn't go.

      @saoirse:hurt When you finally get there, gasping, she's still sitting on the bike with the engine running and her goggles pushed up on her head and tears frozen on her face. She doesn't seem surprised to see you. She doesn't seem anything.

      @saoirse:hurt "She wants to meet me," she says. "My mam. She's in Kingsmere. She saw my name on a list somewhere; they print the names of the late-kindled, did you know that, in some paper? She saw my name. She wants to meet me. After twenty-one years." Her voice goes up, and cracks. "And I was going. I was going to go right now, in the dark, on the bike, without telling anyone, and just [i]turn up[/i]." She laughs, horribly. "And then I got out here, and I thought: that's what she did. Just went. In the dark. Without telling anyone." She wipes her face with an oily glove, and leaves a black smear. "I'm doing it. I'm doing exactly what she did."
      *choice
        #"Then don't. Not like this. Go in daylight, and tell us, and come back."
          *set st_saoirse +1
          @saoirse:sad She doesn't answer. She sits there in the headlamp glow, with the engine ticking over, looking at you, and then out at the dark, towards the south, towards the road and the train and Kingsmere and a woman with round careful handwriting, and then back at you. Then she reaches down and turns the key, and the engine dies, and the silence on the frozen Mere is enormous.

          @saoirse:sad "In daylight," she says. "And tell people. And come back." She says it like a spell she's learning, trying each word for weight. "Will you come with me? When I go?"

          "Yes."

          @saoirse:warm "Then I'll go." She gets off the bike, stiffly; she's been sitting in the cold for longer than she knows. "Help me push this back. It's a long way. I'm not riding it. I don't trust myself." You push it together, one either side, a quarter of a mile back across the ice in the dark, slipping, not talking much, and by the time you reach the boathouse she's laughing at you for falling over, which is how you know she's going to be all right.
        #Don't say anything. Just get on the back of the bike, and wait.
          *set st_saoirse +1
          *set heart +5
          @saoirse:warm She feels the bike dip as you get on behind her. She goes very still. You put your arms round her waist and don't say anything, and wait, and you can feel her breathing, fast and then slower and then slow. The engine ticks. The stars wheel. Somewhere far off the ice booms, deep down, and she flinches, and you hold on.

          @saoirse:warm At last she says, "I could go. Right now. With you on the back." And then: "I'm not going to." She turns the bike round, very slowly, on the ice, and takes you both home at about four miles an hour, the whole quarter mile, without once speeding up. At the boathouse she puts the bike away and pulls the tarpaulin over it and stands with her hand flat on it, like somebody settling a horse. "She wants to meet me," she says, without turning round. "My mam. I'll tell you about it. Tomorrow. In daylight."
    #Let her go. Sit on the end of the jetty in the cold, and wait for her to come back.
      *set b_saoirse_run true
      *set st_saoirse 4
      *set heart +10
      You sit down on the end of the jetty, in the snow, with your arms round your knees, and watch the tiny headlamp out on the ice, and wait.

      It's one of the hardest things you've ever done. It's so cold your face goes numb, and then your hands, and then your feet. You don't move. You think about shouting, and don't. You think about going after her, and don't. Twice the engine roars, and the headlamp swings towards the far shore, and your heart stops. Twice it stops again. {fam_name} comes and finds you, after a while, and {@(familiar = "owl") or (familiar = "raven")|settles on your shoulder, feathers fluffed against the cold|presses itself against your side}, and waits with you.

      After an hour and ten minutes, the headlamp turns round, and comes slowly back across the ice, and stops at the foot of the jetty. Saoirse turns the engine off. She looks up at you, sitting there in the snow, with frost in your eyebrows.

      @saoirse:hurt "You waited," she says. Her voice cracks. "You just... waited. You didn't come after me. You didn't shout. You just sat there in the freezing cold and waited." She gets off the bike and comes up the jetty steps and stands in front of you, shaking. "Nobody's ever done that. Nobody's ever been the one standing still when I went. I always made sure I was the one going." She sits down beside you in the snow, hard, and puts her head on your shoulder. "It's my mam," she says. "She wants to meet me. I'll tell you. Give me a minute. I'll tell you everything."

      *page_break

      @saoirse:sad She doesn't tell you everything. Nobody could. But after a while, looking out at the ice, she starts.

      @saoirse:sad "She had nice hands," she says. "That's what I remember. She used to do my hair for school. Two plaits, really tight, so it pulled." She touches the side of her head, where the bootlace is holding her curls up. "The Tuesday she went, she did them tighter than usual. I thought I'd done something wrong."

      You don't say anything. The ice booms, a long way out.

      @saoirse:hurt "Dad never said a bad word about her. Not once. Twenty-one years. He just kept her side of the wardrobe empty for about ten of them, in case." She laughs, not really a laugh. "He's lovely. I'm going to have to tell him. He'll be lovely about it. That's the worst bit."

      "What does the letter say?"

      @saoirse:hurt She takes it out of her pocket. It's been folded so many times the creases have gone soft. She doesn't open it; she doesn't need to. "[i]I saw your name. I'm sorry. I'd like to see you, if you'll let me. I'll understand if not.[/i]" She puts it away. "Four lines. Twenty-one years and she's sent me four lines." A pause. "And I read it about a hundred times today. Up in the Rookery. Trying to find the fifth line. The one where she says why."

      It's one in the morning before she stops talking, and the stars have gone a long way round overhead, and your feet are long past feeling. When she's finished, she says, "Your lips have gone blue," and drags you up to the kitchens by the sleeve, and makes you cocoa on the big range, and watches you drink every drop.
*else
  But she's already gone. The headlamp's a spark on the far shore, and then it's gone over the rise towards Thimble Cross, and there's nothing on the black ice but a thin bright track in the frost.

  *page_break

  You stand on the jetty until you can't feel your feet. Then you go and wake up the Lamplighter on the boathouse door, and tell him, and he swears, and sends a bird.

  @saoirse:tired She comes back at four in the morning, on her own, pushing the bike across the ice, and puts it away in the boathouse, and goes to bed without a word to anyone. At breakfast she's bright and loud and brittle, and she doesn't mention it, and neither does anyone else. Only once, when she thinks nobody's looking, you see her take the folded letter out of her pocket and look at it, and put it back without opening it.
*page_break
*comment ---------------------------------------------------------------- CH13.STAY.03
*sid CH13.STAY.03
*date 2026-12-30 23:00
*place P29 old_cloisters
*present grey familiar
Ever since Longnight, the floor's been warm.

Not all of it. Not all the time. But in certain places, at certain hours of the night, when the castle is asleep and you're walking back from the Infirmary or the common room, you'll step on a flagstone and feel it through your shoes: a warmth, a faint slow pulse, like putting your hand on the flank of a sleeping animal. Your flame will lift its head and lean towards it, the way it leaned at midnight on Longnight, when every lantern burned blue and something under the castle answered you.

You've been trying not to notice. It hasn't worked. Every night it's a little stronger, or you're a little better at feeling it. You find yourself stopping on the stairs with one foot in the air. You find yourself taking the long way back from dinner, over the warm places, the way you'd walk the long way home past a bakery.

On the thirtieth, at eleven at night, you follow it.
*if (st_idris >= 2) and (hurt_idris < 2)
  *present idris
  @idris:attentive Idris comes with you. You didn't ask him; he was in the corridor outside the Long Stacks when you came past, with his notebook, and he took one look at your face and fell into step beside you without a word. "You're following something," he says quietly, after a while. "I've seen you stop on the same flagstones three nights running. I've been writing them down." He shows you. A map of the castle, in his cramped careful hand, with dots on it. The dots make a line. The line goes down.

  "You've been watching me."

  @idris:attentive "I watch everything," says Idris. "You're just more interesting than most of it." He closes the notebook. "Shall we?"

Down the east stair, with the portraits snoring. Along the corridor behind the kitchens, where it's always warm anyway and smells of tomorrow's bread. {@ch09_way = "cloisters"|Down the oldest stair of all, to the black oak door you and Toby and Rowan followed the voice to in November, the one that's supposed to be sealed, which opens for you now the way it did then, as if it's been waiting|Down the oldest stair of all, to a black oak door bound in iron that you've only ever heard about: the Old Cloisters door, sealed for two hundred and forty years. It opens at your touch, without a sound, as if it's been waiting}. And down, into the Old Cloisters.

*page_break

It's dark down here, and cold, and old. The pillars are carved with birds, wrens, hundreds of them, worn smooth by centuries of nobody. Your breath smokes. You light the tip of your wand, and the wrens leap out of the dark at you and fall back. {@ch09_way = "cloisters"|The Watchman isn't here; or he is, and he's quiet, and watching.|Somewhere in the dark, water drips, very slowly, into water.} The warmth under your feet gets stronger with every step, until you're following it the way you'd follow the smell of bread through a strange town: round a corner, down a flight of steps so worn they're more like a ramp, to the end of a passage you've never seen.

There's a door.

It's small, and round-topped, and very old, older than anything else down here, made of black oak bound with iron. There's no handle. No keyhole. Just, carved deep into the middle of it, a wren. A single small bird, with its tail cocked, like the one on your letter. Like the one on {@thimble|great-gran Ivy's thimble|the school crest}.

You put your hand flat on it.

It's warm. Warm as a hearthstone. Warm as a hand. Your flame goes up in you like a bird taking off, and you have to hold it down, hard, to keep it from going through your palm into the wood. For a second you can't breathe. It isn't frightening. That's the frightening part. It's like coming in out of the rain into a kitchen where someone's been waiting up for you.

Behind the door, far away, deep down, something is humming.

Not the warm lantern-hum you've heard every day since September. Not quite. And not the Choir's hum either, the low long lonely one, not quite. Something in between. A great slow warm note, like a hive, like a heart, like a fire that's been burning for four hundred years. And, underneath it, very faint, so faint you'd miss it if you didn't know it, a thinner sound. Low. Long. Like a draught under a door.

As if something is getting in.
*if (st_idris >= 2) and (hurt_idris < 2)
  @idris:tense Idris has his hand on the door too, beside yours. He's gone very still. "I can hear it," he says, in a whisper. "Not the way you can. But I can hear it." He takes his hand away, slowly, and looks at his palm as if he expects it to be marked. "That's it. Isn't it. Whatever's been warming the floor. That's what you've been following."

@grey:neutral "Go back to bed."

*page_break

You nearly jump out of your skin. Professor Grey is standing at the top of the worn steps behind you, in the dark, in his charcoal robes, with no light. You didn't hear him come. You have no idea how long he's been there. He's a big man, and he fills the passage, and he doesn't move. His scarred hands are folded in front of him, and his tired blue eyes are on the door, not on you.

"Professor, there's something behind..."

@grey:neutral "I know what's behind it." His voice is quiet and flat and worn thin. "I've known for longer than you've been alive. Go back to bed, and don't come down here again, and don't tell anyone you found it. Not your friends. Not the Order." A pause, in which the draught under the door seems very loud. "Not the Lanternwarden."
*choice
  #"Why not the Lanternwarden?"
    *set wit +5
    @grey:neutral Something moves in his face, and is gone. "Because I asked you not to," says Professor Grey. "Go to bed." He stands aside on the steps, and waits, and doesn't say another word, and you have to walk past him, close enough to see the scars on his hands, which go all the way up past his wrists, like burns, like frost.

    You look back once, from the corner. He hasn't moved. He's watching the door the way a man watches a sickbed.
  #"How do I know you're not the one letting it in?"
    *set nerve +10
    *set accused_grey true
    @grey:neutral He turns his head then and meets your eyes, properly, for the first time, in the dark. There's no anger in it. That's the worst of it. "You don't," he says. "That's rather the point of me." He stands aside on the steps, and waits, and you have to walk past him, close enough to see the scars on his hands.

    When you look back from the corner, he's standing in front of the wren door, with one scarred hand flat on it, where yours was, and his head bowed, like a man at a grave.

You don't sleep. You lie in the dark in the half-empty castle with your hand still tingling, and the warmth in it doesn't fade until nearly dawn.
*page_break
*comment ---------------------------------------------------------------- CH13.STAY.04
*sid CH13.STAY.04
*date 2027-01-03 17:00
*place P13 lantern_hall
*present toby familiar
New Year's Eve comes and goes in a castle full of snow.

The Headmistress lets the forty of you up onto the battlements of the Lantern Tower at a quarter to midnight, in every coat and scarf you own, with hot punch in tin mugs, and at midnight Saoirse sets off something she's been building in the Undercroft all week. It goes up over the frozen Mere in a long whistling streak of copper and bursts into the shape of a very large rook, and hangs there, flapping, for nearly a minute, and then comes apart into a thousand sparks that fall on the ice and go on fizzing. Everybody cheers. Three Lamplighters draw their wands. The Headmistress says, "Miss Maddock," in a voice that could mean anything, and then, after a moment, "Happy New Year," and you can hear that she's smiling.

You stand at the parapet with your mug going cold in your hands and look at the black hills all round, and the stars, and one light, far off, of a farm somewhere down the valley, and you think about Nana Pearl, and Viaduct Street, and the four months since the letter. It's the first New Year you can remember when you haven't wished the old one was already over.

You don't go back down to the Old Cloisters. You want to. Every night you want to. You walk over the warm places in the floor and feel your flame lift its head, and you keep walking. You think about Professor Grey's face in the dark, and his hand flat on the door.

*page_break

The thaw comes on the second of January. You wake to the sound of water: everything dripping, gutters running, the snow sliding off the roofs in long soft thumps, and the Mere groaning all day and all night as the ice breaks up, great grey plates of it turning over and grinding against each other at the edges. By evening there's a channel of black water open down the middle. On the third, the boats run, and the school comes home.

You're on the jetty when the first boats come in out of the dusk, lanterns bobbing at their prows, packed with students and trunks and cages, everybody shouting, and the first person off the first boat, falling off it, practically, onto the ice-crusted boards, is Toby Quill, with a tin of his mum's mince pies under one arm.

@toby:laugh "I missed you," he says, into your shoulder, hugging you so hard your ribs creak. "I missed everything. I missed the [i]stairs[/i]. My little sisters put a cracker in my bed. My mum cried at the pudding. My dad set fire to the pudding, again, and then the tea towel. I told everyone at the chip shop I go to a school up north for gifted bakers." He lets you go and holds you at arm's length, and his round face goes serious. "What happened? Something happened. You've got a face."

*page_break

"I haven't got a face."

@toby:neutral "You've got a face," says Toby. "You've got the face you had in September when your hands kept lighting things. I know that face." He waits. Custard puts her head out of his coat and waits too.

You want to tell him. It's right there: the warm floor, the little black door, the wren, the draught underneath. Toby, of all people. But Professor Grey said [i]not your friends[/i], and said it as if it cost him something, and you can still see his hand on the door.

"Snowed in for a fortnight with Saoirse. She set off a firework shaped like a rook."

@toby:amused Toby studies you a moment longer. Then he nods, as if that's a perfectly good answer and he'll ask again later, which he will. "A [i]rook[/i]," he says. "Of course she did. Was it a good rook?" He hands you a mince pie, and takes your arm, and walks you up the path to the castle telling you about the pudding.

The Lantern Hall fills up again that night. Four long tables, four hundred voices, ten thousand lanterns drifting gold under the roof. It's so loud after a fortnight of forty people that it hurts your ears, and you love it, and you sit in it with Toby's mince pies and let it wash over you: somebody's new scarf, somebody's terrible Christmas, somebody's familiar that's learned to open doors.

But every so often, under the noise, under the long tables, you feel it through the soles of your shoes. The warmth. The slow pulse. And, very faint, under that, the draught under the door.
*label after
*journal [b]Chapter 13.[/b] {@ch13_way = "home"|You went home to Wrexley for Christmas. Dev didn't ask. Nana Pearl knew great-gran Ivy's washing-up song, and it was the Wren's Song, with a second voice, the underneath. On the twenty-ninth the Hush came to Viaduct Street, and you and Nana sang both voices in the kitchen, and it rang, and she couldn't get in, until Jory Penrose came running with his lamp. Two voices aren't enough. But the song works.|You stayed at Wrenfold, snowed in with forty others.}{@b_saoirse_run and (ch13_way = "stay")| Saoirse's mam wrote to her after twenty-one years, and she tried to run, across the frozen Mere in the dark; and didn't.|}{@ch13_way = "stay"| Following the warmth under the floor, you found a small black door deep in the Old Cloisters, with a wren carved on it, warm as a hand, and something humming behind it; and under the hum, a draught, as if something's getting in. Professor Grey found you there, and told you to tell no one, not even the Lanternwarden.|}
*page_break
*goto_scene ch14
`);
