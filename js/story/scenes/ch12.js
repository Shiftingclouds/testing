NB.scene("ch12", String.raw`
*mood night
*set ch 12
*chapter 12 Longnight
*comment ---------------------------------------------------------------- CH12.FROST.01
*sid CH12.FROST.01
*date 2026-12-18 19:00
*place P12 mere_frozen
*present toby priya tully familiar
For a week after Thimble Cross, the castle is very quiet. Lessons go on. People go to them. Nobody laughs much in the corridors, and the Wireless plays nothing but slow music, and Mina doesn't do the rumours. Somebody puts a jam jar of holly on the Pellow stall's empty pitch in the village, and somebody else keeps it filled. There's a Lamplighter at every door now, and nobody minds them any more; people bring them tea.

You go to lessons. You do your homework. You eat. In Wordcraft, Professor Moth has you lighting candles again, and yours lights first time, and you look at the small steady flame and think of a big rough voice singing in the snow, and have to put your wand down for a minute. Nobody asks why. Half the class has had to put their wands down for a minute at some point this week. In the evenings the common rooms are full and quiet, people doing their reading close together on the sofas, shoulder to shoulder, the way animals huddle in a hard frost.

Then, slowly, the way the ice comes, something else creeps back in. Paper chains appear in the Heronmere Cloister overnight, and nobody admits to them. The kitchens start making mince pies, and the smell gets into everything, even the Brewing cellars. Professor Bassani wears a flower in his buttonhole that plays a carol when you lean close, and says "Longnight! Longnight!" at the start of every lesson, to groans. Somebody hangs mistletoe over the door of the Warding Hall, and Professor Grey walks under it without looking up, and the whole corridor holds its breath, and nothing happens, and somebody giggles, and it's the first time anyone's giggled in days.

*page_break

By the middle of December the Mere has frozen right across, black ice a foot thick from the boathouse to the far shore, and on the last Friday of term the school holds the Frost Market on it.

You've never seen anything like it. Nobody has, the first time. Stalls on the ice, dozens of them, with striped awnings and runners instead of legs, so they can be pushed about. Braziers glowing orange. Lanterns on tall poles stuck into holes in the ice in long curving avenues, gold and rose and green and blue, so that from the castle steps it looks like a map of a town drawn in light on black glass. Roast chestnuts and hot cider and spiced buns.

*page_break

A Rookhallow stall selling clockwork mice that skate. An Owlcombe stall selling star-charts that show you where you'll be standing at midnight on Longnight, which are always wrong and always popular. A Heronmere stall of hot soup, run by Jonty, who has knitted a hat for every familiar that comes past and is putting them on whether the owners like it or not. A band of Larkspire second-years playing fiddles on a sledge, badly and with enormous enthusiasm, while Priya, on the next sledge, plays her violin properly and tries to drown them out. And everywhere, skaters: whirling, wobbling, falling over, shrieking, holding hands in long chains that crack like whips round the corners of the stalls.

After Thimble Cross, nobody was sure there'd be a Frost Market. There were Lamplighters on the ice all afternoon, walking the lines of poles with their brass lamps, testing. There are Lamplighters on the ice now, on the edges, in their greatcoats, watching. But there's a Frost Market, and four hundred students on the ice, and the Headmistress on the castle steps with her arms folded, watching them skate, and the whole school has decided, without anyone saying so, that it's going to have a good time tonight if it kills them.

@toby:laugh "I can't skate," says Toby, already on skates, clinging to your arm with one hand and Priya's with the other, knees going in two directions. Priya's violin is back in its case on her back; she says the fiddles won. "Did I mention? I can't skate. Priya says it's like walking. It is not like walking. Walking doesn't go anywhere without you."

*page_break

@priya:amused "Let go and I'll pull you."

@toby:scared "I'll die."

@priya:laugh "You'll fall over. It's different."

He falls over. It is different. He lies on his back on the black ice laughing up at the lanterns, and Priya lies down beside him, and after a moment so do you, and the three of you lie there on the frozen Mere with the skaters swooshing round you, looking up at the lanterns on their poles and the stars above them. The ice is so cold it burns through your coat. Somewhere under you, very deep, under a foot of black ice, the water moves, slow and heavy, like something turning over in its sleep. {fam_name} comes and investigates your face, and decides you're alive, and goes to steal a chestnut.

@tully:warm Mr Tully is working his way down the avenue of lantern poles with his brass taper and a little stepladder, relighting the ones the wind's blown out. When he gets to you, lying on the ice, he looks down, and his lined face creases up. "Now there's a sight," he says. "Maisie used to do that. Lie on the ice and look up. Said it was like being at the bottom of the sky." He relights the lantern over your head, and it flares, and settles, gold. "She loved the Frost Market, my Maisie. Best night of the year, she said. Better than Longnight."

*page_break

@toby:neutral "Is she coming home for Christmas, Mr Tully?" says Toby, who doesn't know.

@tully:sad The old man's face doesn't change. His taper hand doesn't shake. "No, lad," he says gently. "Not this year." He folds up his stepladder, and goes on down the avenue of lights, lighting.

Toby looks at you. You shake your head, very slightly. [i]Later.[/i] He looks after the old man, and his face goes soft and worried, and he doesn't ask.

@priya:neutral Priya sits up, brushing ice off her coat. "Right," she says, with the air of somebody changing the subject on purpose. "The Dance. Monday. Who are you going with? Because everyone's asking everyone. Hamish Galbraith asked [i]four people[/i] at lunch. At the same table."

@toby:amused "Everybody said no," says Toby, from the ice, with deep satisfaction.

@priya:amused "One of them said [i]maybe[/i]," says Priya. "He's been walking on air all afternoon. I don't think she heard the question. It was very loud in there."

You get up, carefully, with your knees wet through. You look round the Frost Market: at the lanterns and the skaters and the stalls, at the people you know, scattered over the ice.
*choice
  *if (st_rowan >= 2) and (hurt_rowan < 2)
    #Rowan. He's by a brazier, holding his hands out to it, though he's never cold.
      *set dance "rowan"
      *set st_rowan +1
      *present rowan
      *if st_rowan >= 4
        @rowan:shy He sees you coming across the ice, and something in his broad face goes very still. Before you've opened your mouth he says, all in a rush, "I was going to ask you. I've been trying to ask you since Thursday. I kept going to the wrong room." He rubs the back of his neck. "Will you? Monday?"

        You say yes, and he smiles, the rare slow one, like a door opening onto a warm room.

        @rowan:laugh "Right," he says. "Right. Good. I'll have to learn to dance now." He looks at the brazier as if it might help. "My sisters are going to be unbearable about this. I'm not telling them. They'll find out anyway. They always find out."
      *else
        @rowan:surprised He looks up when you ask him, startled, and then pleased, and then, visibly, very carefully casual. "Yeah," he says. "Yeah. All right. I'm a terrible dancer. I'll probably stand on you." A pause. "I'd like to, though."
  *if (st_imogen >= 2) and (hurt_imogen < 2)
    #Imogen. She's at the bookstall on the ice, reading, in skates, not skating.
      *set dance "imogen"
      *set st_imogen +1
      *present imogen
      *if st_imogen >= 4
        @imogen:shy She closes the book before you've finished the question. "Yes," she says. Then, because she's Imogen, and honest to a fault: "I'd written you down. On a list. I was going to ask you on Saturday, after I'd found the song." She goes faintly pink. "This is better."
      *else
        @imogen:surprised Imogen looks up from the book as if you've asked her to explain the rules of a game she's never played. "The Dance?" she says. "I wasn't going to go." She considers you. "All right. Yes. But I'm leaving at eleven."
  *if (st_saoirse >= 2) and (hurt_saoirse < 2)
    #Saoirse. She's the one who just went past backwards at thirty miles an hour.
      *set dance "saoirse"
      *set st_saoirse +1
      *present saoirse
      *if st_saoirse >= 4
        @saoirse:warm She comes back round, faster, and stops dead in front of you in a spray of ice, and before you can speak she says, "Yes." You haven't asked her yet. "Whatever it is. Yes." And then, when you do ask, she laughs, breathless, with snow in her curls, and says, "I know. I said. [i]Yes[/i]."
      *else
        @saoirse:laugh She comes back round, and stops, and grins. "The Dance? With me? You know I can't stand still for a slow one." She thinks about it for about half a second. "Go on, then. I'll try. Don't blame me if I end up on the ceiling."
  *if (st_noor >= 2) and (hurt_noor < 2)
    #Noor. She's sitting on a bench on the ice with a first-year's twisted ankle in her lap.
      *set dance "noor"
      *set st_noor +1
      *present noor
      *if st_noor >= 4
        @noor:shy She finishes strapping the ankle before she looks up. Then she looks up, and her face does something complicated and soft. "Nobody ever asks me to things," she says quietly. "I think they think I'll be working." She tucks the end of the bandage in. "I'd like to not be working. With you. Yes."
      *else
        @noor:surprised Noor looks up at you as if you've spoken a foreign language. "Me?" she says. "Oh. I'm usually on duty at the Dance. For the ones who have too much punch." She hesitates. "Matron did say I could have the night off. Yes. All right. Yes."
  *if (st_cas >= 2) and (hurt_cas < 2)
    #Cas. He's standing at the very edge of the lights, alone, watching everyone else skate.
      *set dance "cas"
      *set st_cas +1
      *present cas
      *if st_cas >= 3
        @cas:guarded He doesn't look round when you skate up. "If you're about to ask me what I think you're about to ask me," he says, to the ice, "I should warn you that a Drummond at the Longnight Dance is a spectator sport. People will stare. People will talk. My grandmother will hear about it by Tuesday." Then he does look round. "So yes. Obviously. Yes."
      *else
        @cas:surprised Cas studies you, as if checking you for a trick. "You want to walk into the Lantern Hall," he says, "in front of the whole school, with [i]me[/i]." When you say yes: "Fine. Don't say I didn't warn you." But he says it without the sneer.
  *if (st_idris >= 2) and (hurt_idris < 2)
    #Idris. He's on the castle steps, not on the ice, watching the Frost Market like he's memorising it.
      *set dance "idris"
      *set st_idris +1
      *present idris
      *if st_idris >= 4
        @idris:shy He watches you come up the steps. He waits until you've asked, all the way to the end. Then he says, "Last year I didn't go. I sat in the Long Stacks and listened to it through the floor." He looks at you with his dark serious eyes. "I think I was waiting to be asked by the right person. I didn't know that until now. Yes."
      *else
        @idris:attentive "The Dance," says Idris, as if it's an interesting historical question. He looks at you. "I don't dance. I'd planned to use the evening to read." A pause. "Yes. All right. I'd rather that."
  #Go with Toby and Priya and the whole gang. Nobody's pairing off; everybody's dancing.
    *set dance "toby"
    *set fr_toby +1
    @toby:laugh "Yes!" says Toby, from the ice. "Gang! Everybody! Hamish can come! Nobody has to say yes to Hamish, he can just [i]come[/i]!"

    @priya:warm Priya looks down at him with enormous fondness. "You'll have to stand up to dance, you know."

    @toby:amused "I'll stand up on Monday," says Toby, and stays exactly where he is, flat on his back on the ice, with his arms spread out, beaming up at the lanterns like a starfish that's won something.
  #Nobody. You'll go on your own, and dance with whoever's there.
    *set dance "alone"
    *set nerve +5
    @priya:warm Priya nods, as if that's the most sensible thing she's heard all week. "Best way," she says. "You get to dance with everyone."

    @toby:amused "You'll have to dance with me," says Toby, from the ice. "I'm warning you now. I've got moves. Nobody's ever seen them, because I've never done them, but I've got them."

    @priya:warm "He hasn't," says Priya, kindly, and helps him up, and he falls straight down again, and takes her with him.

It's past eleven before anyone goes in. The braziers burn down to red. The fiddlers on the sledge play one last reel, very fast, and fall off. You walk back up to the castle across the ice with your skates over your shoulder, and your ears aching with cold, and your pockets full of chestnut shells, and behind you the avenues of lanterns go on burning on the black Mere, gold and rose and green and blue, with nobody under them.

At the top of the castle steps you turn and look back. From up here the Frost Market looks exactly the way they said it would: a little town drawn in light on black glass, with its streets and squares and corners all picked out, and nobody living in it. Down at the far end of the avenue, a single small light is moving, slow and patient, from pole to pole. Mr Tully, with his taper, going round one last time, making sure they all stay lit till morning.
*page_break
*comment ---------------------------------------------------------------- CH12.STACKS.01
*sid CH12.STACKS.01
*date 2026-12-19 22:00
*mood night
*place P22 library
*present imogen dunne familiar
Imogen has been in the Long Stacks every night since Thimble Cross.

Everybody knows. People bring her things: sandwiches, candles, a hot-water bottle, which she doesn't notice and eats, burns and sits on, in that order. Petra Lindqvist, her great rival for top of the year, was seen leaving a flask of coffee on the end of her table and walking away very fast. The prefects have stopped trying to send her to bed.

You find her there on Saturday, at ten o'clock, in the music section, which you didn't know the Long Stacks had: three whole bays at the back of the second gallery, dusty, forgotten, stacked to the ceiling with songbooks and hymnals and old sheet music gone brown at the edges. Imogen is sitting on the floor among it all with a candle and six piles of books and a face like a knife.

@imogen:tense "It's not here," she says, before you've said anything. "It's a song. It's a [i]song[/i], it's four hundred years old, it's the only thing that's ever pushed that hum back, and there's nothing. I've been through two hundred and eleven books. Carols. Hymns. Folk songs. Wordcraft chants. Sea shanties, for pity's sake." She puts the one she's holding down on a pile. "Odile Pellow's gran sang it in a wand shop. Somebody must have written it down."
*choice
  #Sit down on the floor beside her and take a pile.
    *set heart +5
    *set st_imogen +1
    She watches you sit, and then pushes the nearest pile across the floor to you without a word. It's the nicest thing she's ever done.
  #"You need to sleep. You look like Noor did in November."
    *set wit +5
    @imogen:angry "Noor was saving lives," she snaps. Then, after a second, more quietly: "So am I. Or I'm trying to." She pushes a pile across the floor to you. "If you're staying, you're reading."

You read.

It's slow, and dusty, and mostly hopeless. Hymns about the harvest. Carols about the Wren King. Fourteen different versions of a song about a sailor and a mermaid, none of them repeatable. A book of rounds for children, with the corners chewed. Imogen reads fast, with her finger moving down the page and her lips moving, and puts each book down on a new pile with a small hard sound, like a door shutting. You read slowly, because you can barely read music, and hum things under your breath to see if they're the tune, and they never are. The candle burns down an inch. The castle goes quiet round you, the particular quiet of a building full of people asleep.

Somewhere around midnight, Miss Dunne comes down the gallery with her own candle, tiny and birdlike, with pencils stuck through her white bun like pins in a pincushion, and looks at the two of you on the floor among her books, and doesn't tell you to leave. She stands and watches you for a while. Then she goes away, and comes back, with a book in her arms.

*meet dunne
@dunne:neutral "The Wrenfold Carol Book," she says, in her voice like a creaking door, and sets it down on the floor between you with a thump that raises dust. It's enormous, and very old, bound in cracked green leather, with brass corners. "Seventeen hundred and two. The school choir copied it out from older books."

*page_break

@imogen:tense Imogen stares at it. "It's not in the catalogue. I've been through the catalogue. Twice."

@dunne:neutral "No," says Miss Dunne, with some satisfaction. "It isn't. I found it in a chest in the bell-tower when I was a girl, sixty years ago, under a dead pigeon, and I've kept it in my office ever since, because nobody else wanted it." She sniffs. "Nobody ever asked."

"Is it in there? The song?"

@dunne:neutral She doesn't answer that. She bends, stiffly, and opens the book herself, and turns the thick pages with the side of one finger, the way you'd turn over something that might still be hot. "Page ninety-one," she says. "Don't touch the margins. That page isn't a copy. Somebody sewed it in, loose, from something older." She straightens up, one hand on the small of her back. "The ink on it's older than the castle roof."

Imogen's already turning the pages. Her hands are shaking.

Page ninety-one is a song.

Not all of it. You can see at once that the leaf is different from the rest: thicker, browner, cut unevenly at the edge and sewn in with a different thread. A tune, written out in square old-fashioned notes on hand-drawn lines, and under it, words. Old words, in the Wordcraft tongue, the way Odile sang it: [i]lume[/i] and [i]hald[/i], and others you don't know. At the top, in faded brown ink, in a small, strong, slanting hand: [b]The Wren's Song. For as many as will sing it.[/b] Under the tune, the same hand: [i]The first voice. The others to be found in their places.[/i]

*page_break

@imogen:surprised "It's in parts," breathes Imogen. "It's in [i]parts[/i]. That's why nobody could sing it. There's more than one tune. They go together. This is only the first voice." She's already copying it into her notebook, fast, in pencil, her tongue between her teeth. "The others to be found in their places. What places? Where?"

You're not looking at the song. You're looking at the margin.

Beside the last line, very small, squeezed in sideways, in the same slanting brown hand, somebody has written a note. The ink's so faded you have to lean close with the candle to read it:

[i]Where the song cannot reach, the Heartfire holds. Let them never know I am under their feet.[/i]

[i]H. W.[/i]

When you lean close, your fingers not quite touching the page, something happens behind your breastbone. Your flame, the white one, the strange one, jumps. Just once. Like a dog lifting its head at the sound of a voice it knows. For a second, you'd swear the floor under you is warm. The whole floor. The whole castle. As if something deep underneath it, very far down, has turned over in its sleep.

"Miss Dunne. What's the Heartfire?"

@dunne:neutral The old librarian doesn't answer at once. She lowers herself, carefully, onto a stool, with her candle in her lap, and looks at the page for a while as if it's somebody she used to know. "A story," she says at last. "When I was a girl, it was a story. The prefects told it to the first-years in the dark, to frighten them. They told it to me. I was very frightened. I was also," she adds, "sixty years younger and a great deal more gullible."

*page_break

"Will you tell it?"

@dunne:neutral She sniffs. "Hester Wren built this school to keep late flames safe from the Choir. You know that much; everybody does. And when she was old, and dying, so the story goes, she couldn't bear to leave it unguarded." She stops there, and turns her candle a little in her lap.

@imogen:attentive "So what did she do?" Imogen's pencil has stopped moving.

@dunne:neutral "She went down," says Miss Dunne. "Under the castle. As deep as the stone goes." A pause. "And she left something there."

"Left what?"

@dunne:neutral "Herself. The part that mattered." Her sharp black eyes come up to yours. "Her flame. Took it out of herself, the prefects said, like taking a coal out of a grate with the tongs, and left it down there in the dark. Burning. For ever." She sniffs again. "They used to say you could hear it on quiet nights, if you put your ear to the floor of the Lantern Hall. Half my year went about with dusty ears."

"But why? Why leave it?"

@dunne:neutral "Ah. That was the good part. The part they saved for when the candle was low." Her voice drops, not quite despite herself, into the voice of a girl telling it in a dormitory sixty years ago. "Every lantern in Wrenfold is lit from it. Every ward round the island is held by it. And the day it goes out..."

*page_break

She stops.

@imogen:tense "The day it goes out?"

@dunne:neutral "The school goes dark," says Miss Dunne, "and the Choir walks in. That was how it ended. Always. Somebody blew out the candle on that line, and everybody screamed." She folds her hands on her candle-holder. "Prefects' nonsense."

@imogen:grave Imogen has stopped copying. "Is it?" she says. "Nonsense?"

@dunne:neutral Miss Dunne looks at the margin, at the few faded lines in Hester Wren's hand, for longer than she needs to. "I've been a librarian for sixty-one years, Miss Sallow," she says. "I've learned that the prefects are usually wrong about everything except the things that matter." She gets up, slowly, with her candle. "Copy the music. Don't copy the margin. Some things are safer in one place."
*set know_heartfire true
*clue e10
@imogen:grave When she's gone, Imogen sits and looks at the page without moving, while the candle gutters and steadies between you. Then she looks at you. "You felt something," she says. "When you leaned over it. I saw your face."
*if told_imogen
  She knows what you are. You told her in September, on the stand. She's watching you now the way she watches a problem she's nearly solved.
*choice
  #"The floor went warm. The whole castle. Like something underneath it woke up."
    *set st_imogen +1
    *set heart +5
    @imogen:grave She takes that in, very still. Then she writes one word in her notebook, under the music, small, and underlines it, and closes the book. You don't have to see it to know what it says. "Then it's real," she says. "And it's under our feet. And if we know that, sooner or later, [i]they[/i] will."
  #"Nothing. The candle. It's late."
    *set wit +5
    @imogen:guarded She gives you the look she gives a wrong answer on somebody else's test. Then she lets it go. "All right," she says, and closes the notebook. "It's late." But she walks you back to the stairs, and doesn't say anything else, and you can feel her thinking all the way.
*page_break
*comment ---------------------------------------------------------------- CH12.DANCE.01
*sid CH12.DANCE.01
*date 2026-12-21 20:00
*place P13 lantern_hall_longnight
*present kestrel tully grey toby priya familiar
Longnight is the shortest day of the year, and the longest night, and Wrenfold keeps it the way it keeps everything: all at once, with too many candles.

The day itself is barely a day. The sun comes up at nine, low and red over the far end of the frozen Mere, and slides along the tops of the hills, and gives up by half past three. Nobody does any work. There are no lessons, only the kitchens clattering from dawn, and people running up and down the stairs with armfuls of velvet and borrowed shoes, and a queue for the baths that goes round two landings. Somebody's familiar eats a whole plate of mince pies meant for High Table. At four o'clock, as the dark comes down, every lantern in the castle turns silver, all at once, and the whole school, wherever it is, stops and looks up and says [i]oh[/i].

You get ready in a room full of people getting ready. Somebody has borrowed somebody else's hairbrush and won't give it back. Somebody has lost a shoe and is hopping about in one, accusing everybody. The mirror on the back of the door is fought over like a border. Your velvet is laid out on the bed where it's been since Saturday, and you put it on carefully, the way you'd put on something that might bite, and stand in front of the mirror when it's finally your turn, and don't quite recognise the person in it. {fam_name} watches from the windowsill with an expression that says it's seen better. Somebody behind you whistles, and you go hot to the ears, and laugh, and it's all right.

*page_break

The Lantern Hall has been turned into winter. The four long house tables are gone, and the floor has been cleared and polished till it's like black ice, like the Mere. The ten thousand lanterns under the roof have all gone white, silver-white, the colour of frost, and they drift lower tonight than they ever have, just over your heads, close enough to touch. From somewhere up among them, snow is falling.

Real snow. Big, slow, soft flakes, falling from nowhere, from the dark between the lanterns, drifting down over the whole Hall. They never land. Every flake stops about a foot above your head and hangs there, turning slowly, glittering, so that you dance under a ceiling of snow that never falls. After Thimble Cross, you'd have thought snow that stops in the air would be the last thing anybody wanted. But this snow isn't grey, and nothing hums, and it catches the silver light and throws it about like laughter, and after the first gasp nobody minds at all.

*page_break

Along the walls there are long tables of food: roast chestnuts, and a whole ham glazed with honey, and hot pies, and a pudding the size of a cartwheel with a sprig of holly on it that's actually on fire, and bowls of punch that change colour every time somebody ladles it.

You walk in under the great doors and stop, the way everybody stops, and the person behind you walks into your back and doesn't even mind, because they've stopped too. The air is warm and smells of pine and oranges and hot sugar and melting wax. Somebody has wound holly round every pillar, and ivy round the holly, and threaded the ivy with tiny silver bells that ring when anyone brushes past, so that the whole Hall is full of a faint, sweet, constant chiming, like frost talking to itself. The portraits on the walls have all been given paper hats. Most of them are wearing them. One old Headmaster in a ruff has his pulled down over his eyes and is pretending to be asleep.

There are four bands, one for each house, one in each corner, and they take it in turns: Larkspire's fiddles, bright and fast; Owlcombe's strings, slow and silvery; Heronmere's harps and flutes, like water; and Rookhallow's drums and brass, which make the floor shake and the lanterns bob. Everyone's in their best. Clothes you've never seen: long robes of deep velvet in house colours, with the sleeves embroidered in silver thread, and people you've only ever seen in jumpers and scarves looking suddenly like strangers, and then grinning, and being themselves again. {@look_form = 0|Yours are from Hask & Needle, and they cost a whole month's crowns, and Madame Hask's measuring tape put itself round your waist and sighed approvingly.|Yours are from Hask & Needle, and they cost a whole month's crowns, and Madame Hask's measuring tape put itself round your shoulders and sighed approvingly.}

@kestrel:warm At eight, the Headmistress stands at the top of the Hall, in robes of midnight blue with a thin silver circlet in her grey hair, and raises a cup, and all four bands stop.

*page_break

@kestrel:warm "Longnight," she says. Her voice fills the Hall without trying. "The longest night of the year. Tonight the dark is as long as it will ever be, and tomorrow, a little less. A minute less. Two." She looks round the Hall at all of you, under the hanging snow. "It's been a dark term. I won't pretend it hasn't. We've lost friends to the quiet. We've had strangers at our gates and in our village." Her eyes go, for a second, to the Heronmere students, and then the Rookhallow ones, and then out to the high windows, where the Lamplighters' lamps move along the walls. "But this is Longnight. And on Longnight, Wrenfold does what it has always done. We light every lantern we have. We dance until midnight. And at midnight, we watch the light turn." She lifts her cup. "To the long night. And to the light that comes back."

"To the light that comes back," says the whole Hall.

The bands start again, all four at once, in the same tune for once, and the floor fills.

*page_break
*if dance = "rowan"
  *present rowan
  @rowan:shy Rowan is in Larkspire gold and rose, and he looks enormous and uncomfortable and extremely handsome, and he does stand on you, twice, and apologises so much the second time that you both end up laughing helplessly under the hanging snow. Then the Owlcombe strings start a slow one, and he stops talking, and puts one big warm hand very carefully in the small of your back, as if you might break, and you dance. His flame is burning so warm you can feel it through the velvet. The snow above you melts where it hangs over him, and drips, very gently, onto both your heads, and neither of you mentions it.
*if dance = "imogen"
  *present imogen
  @imogen:warm Imogen is in a plain dark robe, severe and elegant, and she dances exactly as you'd expect: correctly, counting under her breath, as if it's an exam. Then, somewhere in the third dance, she stops counting. You feel it happen. Her shoulders come down. She starts, very slightly, to smile. "Kit taught me this one," she says, into your shoulder, halfway through a Heronmere waltz. "In the kitchen. When I was fifteen. I said it was stupid." She doesn't say anything else. She doesn't leave at eleven.
*if dance = "saoirse"
  *present saoirse
  @saoirse:laugh Saoirse is in black and copper with her curls full of tiny brass cogs that catch the light, and she dances like she flies: too fast, too close to the edges, laughing, spinning you under the hanging snow until you're dizzy. Then the Owlcombe strings start a slow one, and she says, "Oh no," and tries to go and get a drink, and you catch her hand. She looks at you. And stays. For four whole minutes, Saoirse Maddock stands almost still, swaying, with her forehead on your shoulder, and doesn't say one word.
*if dance = "noor"
  *present noor
  @noor:shy Noor is in sea-green, with her plait pinned up and pearls in it, and when she walks into the Hall at least three people who've sat next to her every day since September don't recognise her. She keeps looking round for someone who needs her, out of habit. You keep turning her back. By the fourth dance she's stopped looking. By the sixth she's laughing, properly, with her head back, at something you said that wasn't even that funny, and Matron Holloway, on duty by the punch, sees her, and looks at you, and nods once, as if you've done something she's been trying to do for years.
*if dance = "cas"
  *present cas
  @cas:guarded Cas walks into the Lantern Hall beside you in black velvet so severe it looks like armour, with his chin up and his jaw set, and the whole Hall turns and looks. He was right. It is a spectator sport. For about a minute. Then Rookhallow's drums start, and he says, through his teeth, "Well, we're here now," and takes your hand, and it turns out that Casimir Drummond can dance. Properly. Old-fashioned, perfect, the kind somebody made him learn as a boy in a house with too many portraits. People stop staring at him and start staring at the two of you instead, which is different, and he notices, and something in his face comes unlocked.
*if dance = "idris"
  *present idris
  @idris:attentive Idris doesn't dance. He told you. He stands at the edge of the floor with you, in plum and silver, watching, and tells you things about everybody who goes past, quiet and dry and precise. "Hamish Galbraith," he murmurs, as Hamish whirls by with a Larkspire girl who looks as if she's been kidnapped. "Four refusals at lunch. He's since asked a portrait. The portrait said maybe." A Rookhallow couple goes past, stepping on each other. "Those two have been pretending to hate each other since September. Somebody should tell them it isn't working." Professor Bassani sweeps by with enormous flourishes. "And he," says Idris, "has been practising that turn in the Turning classroom every evening for a week. I've heard him through the floor." By then you're laughing so much you have to hold onto a pillar.

  @idris:shy Then, at the start of a slow one, without any warning, he says, "I'll try one," and holds out his hand, and dances badly and seriously and without once looking away from your face, as if he's studying you, which he is, and as if he's found something, which you think he has.
*if dance = "toby"
  @toby:laugh It's the gang. Toby and Priya and you, and Hamish Galbraith, who everybody said no to and came anyway, with his ferret in a bow tie, and half of Heronmere, in a great loose laughing crowd at the heart of the floor, dancing with everyone and no one, in a big messy circle, Toby leading it and getting every single step wrong. It's the best night of your life so far. You'll think that later, and be surprised, and not be sure it's not true.

  @toby:laugh Somewhere in the fourth dance, Toby tries to lift Priya, the way the Larkspire couples are doing, and gets her about three inches off the floor before they both go over sideways into the punch table. The punch goes from red to green to a sort of shocked purple. Nobody is hurt. Toby lies under the table with a paper hat over one eye, laughing so hard he can't get up, and Priya sits on the floor beside him with her velvet soaked to the knee, saying [i]you absolute idiot[/i] over and over, very fondly.
*if dance = "alone"
  You dance with everyone. Toby, twice, badly. Priya, who's brilliant. Hamish Galbraith, who's been turned down by four people and is extremely grateful. A tiny Owlcombe first-year who asks you with her eyes shut. Professor Bassani, who dances a Larkspire reel with you with enormous theatrical flourishes and says "[i]Magnificent[/i]!" twice. You've never had a better night.

  Between dances you stand by the long tables with a cup of punch that's gone from gold to blue in your hand, getting your breath back, watching the floor. It's like watching a field of flames from a hill: everybody burning, everybody bright, nobody grey. Somebody's familiar, a white ferret in a bow tie, runs across the floor between a hundred pairs of feet and is not trodden on once, which seems like a small miracle. You eat a mince pie in two bites. Somebody grabs your hand and pulls you back into a reel before you've finished swallowing, and you go, laughing, with your mouth full.

At the edge of the floor, near the great doors, Professor Grey is standing on his own.

*page_break

@grey:neutral He's not dancing. He's wearing the same dark robes he always wears, with his scarred hands folded in front of him, and he's not watching the dancers. He's watching the lanterns. All ten thousand of them, silver-white, drifting under the hanging snow. His face, in the frost-light, looks very tired, and very watchful, and very old.

He sees you looking. For a moment, his tired blue eyes meet yours across the Hall. Then he comes, slowly, round the edge of the floor, and stops beside you, and says, without turning his head, very low: "Watch the lanterns at midnight."

"Why?"

@grey:neutral "Because everybody else will be," says Professor Grey. "And somebody won't."

"Who?"

@grey:neutral He doesn't answer that. He looks at you for a moment longer, with his tired eyes, and you think there's something he'd like to say and has decided against. "Enjoy your dance," he says instead, which is the last thing you'd have expected, and he means it. He walks away, back to the doors, before you can ask him anything else, and people part to let him through without looking at him, the way they always do.

@tully:warm Up on the gallery above the doors, with his brass taper and his stepladder, Mr Tully is walking slowly along the line of lantern hooks, as he does every night, checking. He's in his old brown coat, not his best; he never dresses up. He's humming to himself. Some carol. When he looks down over the rail at the dancing, and sees you, he smiles his lined kind smile, and lifts his taper in salute, the way he did on the first night.
*page_break
*comment ---------------------------------------------------------------- CH12.DANCE.02
*sid CH12.DANCE.02
*date 2026-12-21 23:40
*present familiar
At twenty to midnight, the bands stop.

Nobody has to be told. The dancers drift to the edges of the floor, flushed and out of breath, holding cups of punch, holding hands. People find the people they came with. The fires are built up. Somebody opens the great doors a crack to let the heat out, and the cold comes in from the terrace, clean and sharp, smelling of snow.

You find yourself near the middle of the floor, a little back from the fires, with your velvet sticking to your back and your feet throbbing pleasantly in your shoes. You've danced more tonight than in the rest of your life put together. Your cheeks ache from smiling. Somebody hands you a cup of punch, gold, and you drink it in one go and it fizzes all the way down. {fam_name} finds you through the crowd, the way familiars always do, and {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|lands on your shoulder, warm and ruffled|leans against your legs, warm and heavy}, and you put a hand down to it without looking.

All round you, people are doing the same thing: finding each other. A Heronmere girl threading through the crowd with two cups held high, calling a name. A pair of Rookhallow brothers who've spent the whole night at opposite ends of the Hall, ignoring each other, standing shoulder to shoulder now without a word. Professor Bassani has his arm round Professor Rhys, who has her snail on her hat, in a velvet bow. Up at High Table, the Headmistress has put down her cup and folded her hands, and is waiting, like everyone.

*page_break

The whole Hall goes quiet, and everyone looks up. Four hundred faces, turned up to the ceiling, under the hanging snow. You can hear the fires crackling. You can hear someone's familiar purring. You can hear, very faintly, the ten thousand lanterns humming, the way they always do: that warm low candle-hum you stopped noticing in September.

The hanging snow turns slowly over your heads. A flake drifts lower than the rest, just in front of your face, close enough that you can see its shape, each arm of it perfect and different, turning in the silver light. You hold your breath so as not to move it. Somewhere near you, a first-year whispers [i]is it now?[/i] and is shushed by six people at once, very gently.

Far above, in the clock tower, you hear the works whirr, the deep tired grinding of gears getting ready, like an old man clearing his throat before he speaks.

At midnight, exactly, as the castle clock strikes the first stroke somewhere far above, every lantern in Wrenfold turns blue.
*snapshot longnight

Not all at once. From the middle. From one lantern, high up, in the very centre of the Hall, a ripple of blue goes out, like a stone dropped in water: blue, and blue, and blue, spreading out through the ten thousand in rings, the deep clear blue of the sky just after sunset, the blue of the longest night, until the whole roof of the Hall is blue light and the hanging snow is blue and every upturned face is blue.

*page_break

The clock strikes the second stroke, and the third. With each one the blue goes deeper. A sigh goes round the Hall, four hundred people breathing out at once. You hear somebody laugh, softly, with pure delight. You hear somebody else start to cry, and say [i]I'm fine, I'm fine, it's just so pretty[/i]. The fourth stroke. The fifth. The blue light is on your hands, on your sleeves, on the faces of everyone near you, and makes them all look as if they're underwater, or in a dream, or very far away in time, like people in an old painting of a winter night.

Under your feet, something answers.

*page_break

You feel it through the soles of your shoes. Through the polished black floor, through the stone under the floor, through the rock under the stone. Deep, deep down. A warmth. A pulse. Slow and huge, like the heartbeat of something enormous and asleep. Your own flame leaps to meet it, the way it did over the carol book, the way a flame leans towards a bigger fire, and for one second you're not in the Lantern Hall at all; you're somewhere far below it, in the dark, looking at a light.

[i]The Heartfire holds.[/i]

Nobody else feels it. You look round, and everyone's looking up, at the blue, smiling, holding hands. Nobody's looking down.

Except, when you look for him, Professor Grey, by the doors, who's looking at the floor with a strange expression. And, up on the gallery, Mr Tully, with his taper, who isn't looking at the blue at all.
*present tully
@tully:hurt He's looking at one lantern. One single lantern, high in the corner above the gallery, just by the hook he was checking. It's blue like the others. Then, for less than a second, so fast you'd have missed it if Grey hadn't told you to watch, it isn't. It goes [i]grey[/i]. Flat, colourless, dead grey, the colour of the Choir. Then it's blue again. Mr Tully, on the gallery, looks at it with a face you've never seen on him before, a face like a man who's been hit, and turns away, and goes quickly along the gallery and out through the little door at the end.

*clue e02
You don't know what you've seen. You know you've seen something.

*page_break

You look back at the corner above the gallery. The lantern is blue, like all the rest, burning quietly, innocent as anything. The little door at the end of the gallery is shut. Nobody else is looking up there. Nobody else is looking anywhere but at the great blue roof over all your heads, and at each other.

Your hands have gone cold. You put them in your armpits, under the velvet, and they don't warm up.

The clock finishes striking. The blue goes on burning. Someone starts to sing an old Longnight carol, and the whole Hall joins in, and the bands pick it up, and it's beautiful, and you sing it too, and all the time you're thinking about a lantern going grey.

It's an old carol, older than the school, about a wren that flies through a hall at midwinter, in at one window and out at the other, and the people inside who wonder where it's come from and where it's going. Everybody seems to know the words except you. You pick them up by the second verse. By the third, you're singing as loudly as the Larkspire table, and the sound of it fills the Hall right up to the blue lanterns, four hundred voices finding each other, and something in you that's been clenched since Thimble Cross lets go, a very little, and then a little more.

*page_break
*if (st_cas >= 3) and not(b_cas_family)
  *present cas
  @cas:grave After the carol, when the bands start up again, you see Cas slip out through the tall doors onto the terrace, on his own, into the snow.
  *choice
    #Follow him out.
      *set b_cas_family true
      *set st_cas 4
      *set heart +5
      The terrace is white and silent and freezing, and the Mere below it is black, with the dead lanterns of the Frost Market still standing on their poles on the ice. Behind you, through the tall windows, the Hall is all blue light and music, and it sounds very far away. Cas is leaning on the stone balustrade with his hands bare, looking at nothing. He doesn't look round when you come out. He knew it'd be you.

      @cas:grave "My grandmother wrote to me," he says, after a while. "She writes every Longnight. It's tradition." He takes the letter out of his pocket and doesn't open it. "Every year it says the same thing. [i]A Drummond kindles before the ninth birthday. It has always been so. You will understand why the family must consider its position.[/i]"

      "What happened when you didn't?"

      @cas:grave "Nothing happened. That's the point." He turns the letter over. "I was eight. Nine. Ten. Nothing. They took me to healers. They took me abroad, to a man who put me in a bath full of lightning."

      "Lightning?"

      @cas:amused "It tickled." It isn't a smile. "At twelve my father stopped speaking to me at dinner. Not cruelly. He just... stopped. As if I'd already gone." His breath goes up white, and hangs, and goes.

      You wait. He's looking out at the black Mere, not at you, and you have the feeling that if you move he'll stop.

      *page_break

      @cas:grave "At fourteen my younger brother kindled, and they moved his portrait into my place in the long gallery. At twenty, my grandmother had my name taken out of the family book. In ink."

      "In front of you?"

      @cas:grave "She asked me to hold the inkwell." He smiles, a terrible small smile. "And at twenty-six, on a Tuesday, in a train toilet somewhere outside Kingsmere, I set the mirror on fire by looking at it. And the next morning there was a letter from my grandmother, saying the family would be delighted to reconsider."

      @cas:hurt "I went back," he says. "That's the worst thing. I went home and let them put my portrait back up and I sat at dinner and my father talked to me as if the last fourteen years hadn't happened. Because I wanted it that much." He puts the letter back in his pocket, still unopened. "That's what a late flame costs, in a family like mine. Not the years. The going back afterwards."
      *choice
        #"You don't have to go back again. Not this Christmas. Not any."
          *set st_cas +1
          *set wit +5
          @cas:surprised He looks at you, properly, for the first time since you came out. "Where else would I go?" he says. Then, hearing it, he looks away, at the Mere, and doesn't answer his own question, and you don't either. But he doesn't take his eyes off you for long.
        #Don't say anything. Stand beside him in the snow till he's cold enough to go in.
          *set st_cas +1
          *set heart +5
          @cas:warm You stand there a long time, in the snow, shoulders not quite touching. When he finally turns to go in, he stops beside you, and says, very quietly, "Thank you for not saying anything clever. Everybody always says something clever." Then, with the ghost of his usual sneer: "Don't let it go to your head."
    #Leave him be. Some people go outside to be alone.
      *set nerve +5
      You let him go. Through the tall windows, later, you see him out there on the terrace in the snow, a dark shape leaning on the balustrade, not moving, for a long time.
*if dance = "rowan"
  *present rowan
  @rowan:warm Under the blue lanterns, when it's over, Rowan walks you back up to the stairs. At the bottom, he stops, and looks at you, and for a second you think he's going to say something. Then he just reaches out and brushes the melted snow out of your hair with his warm hand, very gently, and says "Merry Longnight," and goes up the Larkspire stair two at a time.

  *set st_rowan +1
*if dance = "imogen"
  *present imogen
  @imogen:warm Imogen stays until the very end, when the bands pack up, which she said she wouldn't. At the foot of the stairs she stops, and looks at the blue lanterns, and says, "Kit loved Longnight." Then, before she goes: "Thank you. I didn't think about anything for three hours. I'd forgotten you could do that."

  *set st_imogen +1
*if dance = "saoirse"
  *present saoirse
  @saoirse:warm Saoirse doesn't go up to bed. She sits on the bottom stair with her velvet bunched round her knees and cogs falling out of her hair, and pats the step beside her, and you sit with her and watch the blue lanterns until they turn back to gold at one o'clock. She doesn't fidget once.

  *set st_saoirse +1
*if dance = "noor"
  *present noor
  @noor:warm Noor falls asleep on your shoulder on a bench by the fire at half past twelve, in her pearls, and you let her. When Matron comes to fetch her, she looks at you both and says, "Leave her. First time since September she's slept at a party instead of working one." And puts a blanket over both of you.

  *set st_noor +1
*if dance = "cas"
  *if not(b_cas_family)
    *present cas
    @cas:neutral At the foot of the stairs, Cas stops. "People looked," he says. "All night." A pause. "I didn't mind as much as I thought I would." He goes up without saying goodnight, but he looks back, once, from the landing.

    *set st_cas +1
*if dance = "idris"
  *present idris
  @idris:neutral Idris walks you as far as the Owlcombe stair. At the bottom, he takes out his notebook, and looks at it, and puts it away again without writing anything. "I'm not going to write tonight down," he says. "I think I'd like to just remember it." Then, oddly shy: "Goodnight."

  *set st_idris +1

At one o'clock, the lanterns turn back to gold.

They do it the other way round from midnight: from the edges inwards, ring by ring, slowly, as if the night is being folded up and put away. By then the Hall is half empty. The bands are packing up their instruments. The fires have burned down to red. The hanging snow has started, finally, to fall, a flake here and a flake there, drifting down onto the polished floor and lying there, and not melting, so that by the time the last people go up to bed there's a thin white dusting over everything, like sugar on a cake, with footprints going through it in every direction.

You look back, before you go, at your own footprints in it, and at the one lantern up in the corner above the gallery, burning gold, like all the rest.
*page_break
*comment ---------------------------------------------------------------- CH12.TERM.01
*sid CH12.TERM.01
*date 2026-12-22 09:00
*mood day
*place P12 boathouse
*present toby kestrel familiar
Term ends on Tuesday, in a white fog, with the boats.

You wake late, with your feet aching and a sprig of somebody's holly in your hair, to a castle that sounds like a railway station. Doors banging. Trunks being dragged down stone stairs, thump, thump, thump. Familiars being coaxed into baskets and refusing. Somebody in the corridor shouting [i]has anyone seen my other boot?[/i] and somebody else shouting back [i]the goat's got it[/i]. At breakfast the lanterns in the Hall are still faintly blue round the edges, as if they haven't quite come down from last night either, and nobody can eat much, and everybody eats anyway, because the kitchens have made bacon sandwiches for four hundred and it seems rude not to.

Afterwards you go back up and stand in your room looking at your trunk. You haven't decided. You've been not deciding for a week. So you pack it anyway, just in case, the way you'd pack an umbrella on a dry morning: jumpers, socks, your Wordcraft notes, the velvet folded in tissue paper on top, the sprig of holly you found in your hair. Then you sit on the lid, and look round at the room with your things gone out of it, and it looks wrong, like a face with the eyebrows shaved off, and you get up and unpack two jumpers and put them back in the drawer, and then pack them again. {fam_name} watches all this from the bed with deep suspicion. Familiars know about trunks.

*page_break

Half the school is going home for the holidays and half isn't, and by nine o'clock the boathouse is chaos: trunks and cages and hatboxes, familiars in baskets complaining, the Lamplighters at the jetty checking every name against a list, and the boats, fifty of them, bumping and knocking against the ice at the edges of the channel the groundskeepers have broken through the frozen Mere. The fog's so thick you can't see the far shore. You can't see the far end of the jetty. People loom out of it with luggage and vanish into it again, calling names. It smells of wet rope and cold water and, somewhere, frying bacon; Mr Tully's cottage chimney is going.

*page_break

@toby:warm Toby's going home. He's been talking about it for a week: his mum, his little sisters, the chip shop on the corner of his road, his own bed that doesn't have a hare in it. He's got a carrier bag of presents, badly wrapped, with a lot of tape. He hugs you on the jetty so hard your feet leave the ground. "Write," he says. "Every day. Tell me if anything happens. Tell me if [i]nothing[/i] happens." He looks back at the castle, huge and pale in the fog, with every window still faintly blue. "It's weird. I thought I'd want to go. I do want to go. I just don't want to leave."

"It's only a fortnight."

@toby:sad "I know," he says. "I know. It's just..." He looks at the fog, and the black channel of water between the ice, and the Lamplighters with their lists. "Everything's different, isn't it. Since September. I keep thinking I'll get home and it'll all be the same and I'll be the same and none of this will have happened." He hitches the carrier bag up his arm. "I don't want it to not have happened. Even the bad bits. Is that mad?"

"No."

*page_break

@toby:warm "Good," says Toby, relieved. "Priya says it's mad. Priya says I'm going to cry on the boat." He sniffs, hard. "I'm not going to cry on the boat."

@kestrel:neutral The Headmistress is at the end of the jetty in her long coat, seeing the boats off, as she does every term, with a word for everyone and her silver braid over her shoulder going white with fog. When she sees you, she comes over.

@kestrel:grave "I'm not going to tell you what to do," she says quietly, under the noise. "I've thought about it for a week. If you go home, you're away from the school, and away from me, and away from the Order; and the Choir has never yet come looking for a student in their own house. If you stay, you're behind the wards, with the Order at the gates and me down the corridor; and the Choir has been inside the wards twice this term." She looks at you, with her hazel eyes, very tired. "I don't know which is safer. I'd tell you if I did. So you choose."

*page_break

"What would you do?"

@kestrel:neutral She considers that properly, the way she considers everything, with her head a little on one side. A boat bumps the jetty beside you, and somebody in it drops a hatbox, and the Lamplighter with the list shouts a name into the fog. "When I was your age," she says, "I went home every Christmas, and I spent every Christmas wishing I was here. And then, when I could have stayed, I stayed, and spent it wishing I was at home." Something that's almost a smile. "I'm not a reliable guide. I've never once been in the right place on the twenty-fifth of December."

"That's not an answer."

@kestrel:amused "No," she agrees. "It's a confession. You'll find most grown-ups give you those when you ask them questions."

*if gift_for = "nana"
  In your pocket is Nana Pearl's last letter. [i]Toffee tin now snowing in the airing cupboard. Admiral fascinated. Are you coming home? Only I've bought a turkey the size of a small dog and I'm not eating it with the budgie.[/i]
*else
  In your pocket is Nana Pearl's last letter. [i]Are you coming home? Only I've bought a turkey the size of a small dog and I'm not eating it with the budgie. No pressure. Some pressure. Love you. N.[/i]
*if gift_for = "toby"
  @toby:laugh You give Toby the box with the chocolate wren in it, at the last minute, on the jetty. It's gone still by now. He opens it anyway, and looks at it, and at you, and then he eats it, head first, in one bite, with his eyes shut, and says, with his mouth full, "Tastes like being twelve."

You stand on the jetty with the letter in your hand, and the fog all round you, and the boats knocking against the ice, and think about Nana's bungalow that smells of lavender and toast, and your own narrow house under the viaduct, and the castle behind you, humming faintly in the fog, with something under it that turned over in its sleep when you came near.
*choice
  #Go home. Nana Pearl, and Wrexley, and your own bed, for a fortnight.
    *set ch13_way "home"
    *set heart +5
    @kestrel:warm The Headmistress nods. "Then go home," she says. "Eat the turkey. Sleep. Don't do anything with your flame you don't have to. And if anything hums, [i]anything[/i], you send a bird." She touches your shoulder. "Merry Longnight."

    You get into the boat behind Toby, and he makes room for you on the bench, and the boat pushes off down the black channel between the ice. When you look back, the Headmistress is still standing at the end of the jetty, getting smaller, until the fog closes over her and there's only the castle, pale and huge, and then not even that.

    The boat goes on through the white. You can't see either shore. The oars dip and creak, and the ice at the edges of the channel ticks and whispers against the hull, and every so often a gull goes over, crying, invisible. Toby sits beside you with his carrier bag of presents on his knees, very upright, looking straight ahead. About halfway across, without turning his head, he says, "I'm not crying," in a thick voice, and you say, "I know," and pass him your handkerchief, and he blows his nose on it like a trumpet, and the first-year on the bench in front of you turns round, startled, and then everybody in the boat is laughing, including Toby, and nobody can stop.
  #Stay. The castle at Christmas, snowed in, half empty. Whatever's under the floor.
    *set ch13_way "stay"
    *set nerve +5
    @kestrel:neutral The Headmistress nods. "Then stay," she says. "There'll be about forty of you, and the Order, and me. It'll be very quiet." She looks back at the castle in the fog. "Try to let it be quiet. You've earned a quiet fortnight." She doesn't sound as if she thinks you'll get one.

    You stand on the jetty and wave Toby off, and he waves back from the boat with both arms until he nearly falls in, and then the fog takes him. When you turn round, the boathouse is emptying, and the castle is standing over you in the white, very big and very quiet, with all its lanterns still faintly blue, waiting.

    You walk back up the path from the boathouse on your own, with your hands in your pockets and the fog wet on your face. Behind you, Mr Tully's chimney is still going; you can smell the bacon. Ahead, the great doors are open, and inside them the Hall is half dark already, the long tables pushed back, a few lanterns drifting low and lazy under the roof as if they too have been told they can have a lie-in. Somebody on the stairs is singing the wren carol from last night, off-key, to themselves. A first-year who's staying too, a Rookhallow boy with a ferret, gives you a shy nod as you pass, the nod of somebody who's just realised you're going to be shipwrecked together.

    Upstairs, your trunk is still packed. You stand looking at it for a moment. Then you start, slowly, to unpack it, and {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|settles back on the bedpost|climbs back onto the bed} with an air of enormous relief, as if it had known all along.
*journal [b]Chapter 12.[/b] The Frost Market on the frozen Mere, and the Longnight Dance under hanging snow{@dance = "alone"|, where you danced with everyone|}{@dance = "toby"|, with the whole gang|}{@dance = "rowan"|, with Rowan|}{@dance = "imogen"|, with Imogen|}{@dance = "saoirse"|, with Saoirse|}{@dance = "noor"|, with Noor|}{@dance = "cas"|, with Cas|}{@dance = "idris"|, with Idris|}. In the Wrenfold Carol Book, Miss Dunne showed you the Wren's Song (it's in parts; this is only the first voice), and in the margin, in Hester Wren's hand: [i]Where the song cannot reach, the Heartfire holds.[/i] At midnight every lantern burned blue, and something under the castle answered you. One lantern went grey for a moment, above the gallery, and Mr Tully saw it. {@b_cas_family|On the terrace, Cas told you what a late flame cost him in his family. |}Term ended; you chose to {@ch13_way = "home"|go home to Nana Pearl|stay at Wrenfold} for Christmas.
*page_break
*goto_scene ch13
`);
