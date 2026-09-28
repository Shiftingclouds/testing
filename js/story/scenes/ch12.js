NB.scene("ch12", String.raw`
*mood night
*set ch 12
*chapter 12 Longnight
*comment ---------------------------------------------------------------- CH12.FROST.01
*sid CH12.FROST.01
*date 2026-12-18 19:00
*place P12 mere_frozen
*present toby priya tully familiar
By the middle of December the Mere has frozen right across, black ice a foot thick from the boathouse to the far shore, and on the last Friday of term the school holds the Frost Market on it.

You've never seen anything like it. Nobody has, the first time. Stalls on the ice, dozens of them, with striped awnings and runners instead of legs, so they can be pushed about. Braziers glowing orange. Lanterns on tall poles stuck into holes in the ice in long curving avenues, gold and rose and green and blue, so that from the castle steps it looks like a map of a town drawn in light on black glass. Roast chestnuts and hot cider and spiced buns. A band of Larkspire third-years playing fiddles on a sledge, badly and with enormous enthusiasm. And everywhere, skaters: whirling, wobbling, falling over, shrieking, holding hands in long chains that crack like whips round the corners of the stalls.

After Thimble Cross, nobody was sure there'd be a Frost Market. There were Lamplighters on the ice all afternoon, walking the lines of poles with their brass lamps, testing. There are Lamplighters on the ice now, on the edges, in their greatcoats, watching. But there's a Frost Market, and four hundred students on the ice, and the Headmistress on the castle steps with her arms folded, watching them skate, and the whole school has decided, without anyone saying so, that it's going to have a good time tonight if it kills them.

@toby:laugh "I can't skate," says Toby, already on skates, clinging to your arm with one hand and Priya's with the other, knees going in two directions. "Did I mention? I can't skate. Priya says it's like walking. It is not like walking. Walking doesn't [i]go[/i] anywhere without you."

@priya:amused "Let go and I'll pull you."

@toby:scared "I'll die."

@priya:laugh "You'll fall over. It's different."

He falls over. It is different. He lies on his back on the black ice laughing up at the lanterns, and Priya lies down beside him, and after a moment so do you, and the three of you lie there on the frozen Mere with the skaters swooshing round you, looking up at the lanterns on their poles and the stars above them, and somewhere under you, very deep, under a foot of black ice, the water moves.

@tully:warm Mr Tully is working his way down the avenue of lantern poles with his brass taper and a little stepladder, relighting the ones the wind's blown out. When he gets to you, lying on the ice, he looks down, and his lined face creases up. "Now there's a sight," he says. "Maisie used to do that. Lie on the ice and look up. Said it was like being at the bottom of the sky." He relights the lantern over your head, and it flares, and settles, gold. "She loved the Frost Market, my Maisie. Best night of the year, she said. Better than Longnight."

@toby:neutral "Is she coming home for Christmas, Mr Tully?" says Toby, who doesn't know.

@tully:sad The old man's face doesn't change. His taper hand doesn't shake. "No, lad," he says gently. "Not this year." And he folds up his stepladder, and goes on down the avenue of lights, lighting.

Toby looks at you. You shake your head, very slightly. [i]Later.[/i]

@priya:neutral Priya sits up, brushing ice off her coat. "Right," she says, with the air of somebody changing the subject on purpose. "The Dance. Monday. Who are you going with? Because everyone's asking everyone. Hamish Galbraith asked [i]four people[/i] at lunch. At the same table."

@toby:amused "Everybody said no," says Toby, from the ice, with deep satisfaction.

You get up. You look round the Frost Market: at the lanterns and the skaters and the stalls, at the people you know, scattered over the ice.
*choice
  *if (st_rowan >= 2) and (hurt_rowan < 2)
    #Rowan. He's by a brazier, holding his hands out to it, though he's never cold.
      *set dance "rowan"
      *set st_rowan +1
      *present rowan
      *if st_rowan >= 4
        @rowan:shy He sees you coming across the ice, and something in his broad face goes very still, and then he says, before you've opened your mouth, all in a rush, "I was going to ask you. I've been trying to ask you since Thursday. I kept going to the wrong room." He rubs the back of his neck. "Will you? Monday?"

        And you say yes, and he smiles, the rare slow one, like a door opening onto a warm room.
      *else
        @rowan:surprised He looks up when you ask him, startled, and then pleased, and then, visibly, very carefully casual. "Yeah," he says. "Yeah. All right. I'm a terrible dancer. I'll probably stand on you." A pause. "I'd like to, though."
  *if (st_imogen >= 2) and (hurt_imogen < 2)
    #Imogen. She's at the bookstall on the ice, reading, in skates, not skating.
      *set dance "imogen"
      *set st_imogen +1
      *present imogen
      *if st_imogen >= 4
        @imogen:shy She closes the book before you've finished the question. "Yes," she says. And then, because she's Imogen, and honest to a fault: "I'd written you down. On a list. I was going to ask you on Saturday, after I'd found the song." She goes faintly pink. "This is better."
      *else
        @imogen:surprised Imogen looks up from the book as if you've asked her to explain the rules of a game she's never played. "The Dance?" she says. "I wasn't going to go." She considers you. "All right. Yes. But I'm leaving at eleven."
  *if (st_saoirse >= 2) and (hurt_saoirse < 2)
    #Saoirse. She's the one who just went past backwards at thirty miles an hour.
      *set dance "saoirse"
      *set st_saoirse +1
      *present saoirse
      *if st_saoirse >= 4
        @saoirse:warm She comes back round, faster, and stops dead in front of you in a spray of ice, and before you can speak she says, "Yes." You haven't asked her yet. "Whatever it is. Yes." And then, when you do ask, she laughs, breathless, with snow in her dark hair, and says, "I know. I said. [i]Yes[/i]."
      *else
        @saoirse:laugh She comes back round, and stops, and grins. "The Dance? With me? You know I can't stand still for a slow one." She thinks about it for about half a second. "Go on, then. I'll try. Don't blame me if I end up on the ceiling."
  *if (st_noor >= 2) and (hurt_noor < 2)
    #Noor. She's sitting on a bench on the ice with a first-year's twisted ankle in her lap.
      *set dance "noor"
      *set st_noor +1
      *present noor
      *if st_noor >= 4
        @noor:shy She finishes strapping the ankle before she looks up. Then she looks up, and her face does something complicated and soft. "Nobody's asked me," she says quietly. "In four years. I think they think I'll be working." She tucks the end of the bandage in. "I'd like to not be working. With you. Yes."
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
        @cas:surprised Cas looks at you for a long moment, as if checking you for a trick. "You want to walk into the Lantern Hall," he says, "in front of the whole school, with [i]me[/i]." And when you say yes: "Fine. Don't say I didn't warn you." But he says it without the sneer.
  *if (st_idris >= 2) and (hurt_idris < 2)
    #Idris. He's on the castle steps, not on the ice, watching the Frost Market like he's memorising it.
      *set dance "idris"
      *set st_idris +1
      *present idris
      *if st_idris >= 4
        @idris:shy He watches you come up the steps. He waits until you've asked, all the way to the end. Then he says, "I've never been. Four years, I've never been." He looks at you with his dark serious eyes. "I think I was waiting to be asked by the right person. I didn't know that until now. Yes."
      *else
        @idris:attentive "The Dance," says Idris, as if it's an interesting historical question. He looks at you. "I don't dance. I'd planned to use the evening to read." A pause. "Yes. All right. I'd rather that."
  #Go with Toby and Priya and the whole gang. Nobody's pairing off; everybody's dancing.
    *set dance "toby"
    *set fr_toby +1
    @toby:laugh "Yes!" says Toby, from the ice. "Gang! Everybody! Hamish can come! Nobody has to say yes to Hamish, he can just [i]come[/i]!"
  #Nobody. You'll go on your own, and dance with whoever's there.
    *set dance "alone"
    *set nerve +5
    @priya:warm Priya nods, as if that's the most sensible thing she's heard all week. "Best way," she says. "You get to dance with everyone."
*page_break
*comment ---------------------------------------------------------------- CH12.STACKS.01
*sid CH12.STACKS.01
*date 2026-12-19 22:00
*mood night
*place P22 library
*present imogen dunne familiar
Imogen has been in the Long Stacks every night since Thimble Cross.

You find her there on Saturday, at ten o'clock, in the music section, which you didn't know the Long Stacks had: three whole bays at the back of the second gallery, dusty, forgotten, stacked to the ceiling with songbooks and hymnals and old sheet music gone brown at the edges, and Imogen sitting on the floor in the middle of it all with a candle and six piles of books and a face like a knife.

@imogen:tense "It's not here," she says, before you've said anything. "It's a song. It's a [i]song[/i], it's three hundred years old, it's the only thing that's ever pushed them back, and there's nothing. I've been through two hundred and eleven books. Carols. Hymns. Folk songs. Wordcraft chants. Sea shanties, for pity's sake." She puts the one she's holding down on a pile. "Odile Pellow's gran sang it in a wand shop. Somebody must have written it down."
*choice
  #Sit down on the floor beside her and take a pile.
    *set heart +5
    *set st_imogen +1
    She looks at you for a moment, and then pushes the nearest pile across the floor to you without a word. It's the nicest thing she's ever done.
  #"You need to sleep. You look like Noor did in November."
    *set wit +5
    @imogen:angry "Noor was saving lives," she snaps. And then, after a second, more quietly: "So am I. Or I'm trying to." She pushes a pile across the floor to you. "If you're staying, you're reading."

You read.

It's slow, and dusty, and mostly hopeless. Hymns about the harvest. Carols about the Wren King. Fourteen different versions of a song about a sailor and a mermaid, none of them repeatable. Somewhere around midnight, Miss Dunne comes down the gallery with her own candle, tiny and birdlike, with pencils stuck through her white bun like pins in a pincushion, and looks at the two of you on the floor among her books, and doesn't tell you to leave. She stands and watches you for a while. Then she goes away, and comes back, with a book in her arms.

*meet dunne
@dunne:neutral "The Wrenfold Carol Book," she says, in her voice like a creaking door, and sets it down on the floor between you. It's enormous, and very old, bound in cracked green leather, with brass corners. "Seventeen hundred and two. The first choir of the school. It was never catalogued; I found it in the Old Cloisters when I was a girl, sixty years ago, and I've kept it in my office since, because nobody else wanted it." She sniffs. "Page ninety-one. Don't touch the margins with your fingers. The ink's older than the castle roof."

Imogen's already turning the pages. Her hands are shaking.

Page ninety-one is a song.

Not all of it. A tune, written out in square old-fashioned notes on hand-drawn lines, and under it, words. Old words, in the Wordcraft tongue, the way Odile sang it: [i]lume[/i] and [i]hald[/i], and others you don't know. At the top, in faded brown ink, in a small, strong, slanting hand: [b]The Wren's Song. For as many as will sing it.[/b] And under the tune, the same hand: [i]The first voice. The others to be found in their places.[/i]

@imogen:surprised "It's in parts," breathes Imogen. "It's in [i]parts[/i]. That's why nobody could sing it. There's more than one tune. They go together. This is only the first voice." She's already copying it into her notebook, fast, in pencil, her tongue between her teeth. "The others to be found in their places. What places? Where?"

You're not looking at the song. You're looking at the margin.

Beside the last line, very small, squeezed in sideways, in the same slanting brown hand, somebody has written a note. The ink's so faded you have to lean close with the candle to read it:

[i]Where the song cannot reach, the Heartfire holds. Let them never know I am under their feet.[/i]

[i]H. W.[/i]

And when you lean close, your fingers not quite touching the page, something happens in the middle of you. Your flame, the white one, the strange one, jumps. Just once. Like a dog lifting its head at the sound of a voice it knows. And for a second, you'd swear the floor under you is warm. The whole floor. The whole castle. As if something deep underneath it, very far down, has turned over in its sleep.

"Miss Dunne. What's the Heartfire?"

@dunne:neutral The old librarian doesn't answer at once. She lowers herself, carefully, onto a stool, with her candle in her lap. "When I was a girl," she says, "it was a story. A founders' story, the kind the prefects told first-years in the dark. It went like this." She closes her sharp black eyes. "Hester Wren built this school to keep late flames safe from the Choir. And when she was old, and dying, she didn't want to leave it unguarded. So she went down, under the castle, as deep as she could go, and she took her own flame out of herself, and she left it there. Burning. For ever." She opens her eyes. "And every lantern in Wrenfold is lit from it. And every ward is held by it. And the day it goes out, the school goes dark, and the Choir walks in." She sniffs. "That was the story. Prefects' nonsense."

@imogen:grave Imogen has stopped copying. "Is it?" she says. "Nonsense?"

@dunne:neutral Miss Dunne looks at the margin, at the four faded lines in Hester Wren's hand. "I've been a librarian for sixty-one years, Miss Sallow," she says. "I've learned that the prefects are usually wrong about everything except the things that matter." She gets up, slowly, with her candle. "Copy the music. Don't copy the margin. Some things are safer in one place."
*set know_heartfire true
*clue e10
@imogen:grave When she's gone, Imogen sits and looks at the page for a long time. Then she looks at you. "You felt something," she says. "When you leaned over it. I saw your face."
*if told_imogen
  She knows what you are. You told her at Emberfall. She's watching you now the way she watches a problem she's nearly solved.
*choice
  #"The floor went warm. The whole castle. Like something underneath it woke up."
    *set st_imogen +1
    *set heart +5
    @imogen:grave She takes that in, very still. Then she writes one word in her notebook, under the music, small, and underlines it, and closes the book. You don't have to see it to know what it says. "Then it's real," she says. "And it's under our feet. And if we know that, sooner or later, [i]they[/i] will."
  #"Nothing. The candle. It's late."
    *set wit +5
    @imogen:guarded She looks at you for a long moment, the way she looks at a wrong answer on somebody else's test. Then she lets it go. "All right," she says, and closes the notebook. "It's late." But she walks you back to the stairs, and doesn't say anything else, and you can feel her thinking all the way.
*page_break
*comment ---------------------------------------------------------------- CH12.DANCE.01
*sid CH12.DANCE.01
*date 2026-12-21 20:00
*place P13 lantern_hall_longnight
*present kestrel tully grey toby priya familiar
Longnight is the shortest day of the year, and the longest night, and Wrenfold keeps it the way it keeps everything: all at once, with too many candles.

The Lantern Hall has been turned into winter. The four long house tables are gone, and the floor has been cleared and polished till it's like black ice, like the Mere. The ten thousand lanterns under the roof have all gone white, silver-white, the colour of frost, and they drift lower tonight than they ever have, just over your heads, close enough to touch. And from somewhere up among them, snow is falling.

Real snow. Big, slow, soft flakes, falling from nowhere, from the dark between the lanterns, drifting down over the whole Hall. And never landing. Every flake stops about a foot above your head and hangs there, turning slowly, glittering, so that you dance under a ceiling of snow that never falls.

There are four bands, one for each house, one in each corner, and they take it in turns: Larkspire's fiddles, bright and fast; Owlcombe's strings, slow and silvery; Heronmere's harps and flutes, like water; and Rookhallow's drums and brass, which make the floor shake and the lanterns bob. Everyone's in their best. Robes you've never seen, dress robes in deep velvet in house colours, with the sleeves embroidered in silver thread. {@look_form = 0|Yours is from Hask & Needle, and it cost a whole month's crowns, and Madame Hask's measuring tape put itself round your waist and sighed approvingly.|Yours is from Hask & Needle, and it cost a whole month's crowns, and Madame Hask's measuring tape put itself round your shoulders and sighed approvingly.}

@kestrel:warm At eight, the Headmistress stands at the top of the Hall, in robes of midnight blue with a thin silver circlet in her grey hair, and raises a cup, and all four bands stop.

@kestrel:warm "Longnight," she says. Her voice fills the Hall without trying. "The longest night of the year. Tonight the dark is as long as it will ever be, and tomorrow, a little less. A minute less. Two." She looks round the Hall at all of you, under the hanging snow. "It's been a dark term. I won't pretend it hasn't. We've lost friends to the quiet. We've had strangers at our gates and in our village." Her eyes go, for a second, to the Heronmere students, and then the Rookhallow ones, and then out to the high windows, where the Lamplighters' lamps move along the walls. "But this is Longnight. And on Longnight, Wrenfold does what it has always done. We light every lantern we have. We dance until midnight. And at midnight, we watch the light turn." She lifts her cup. "To the long night. And to the light that comes back."

"To the light that comes back," says the whole Hall.

And the bands start again, all four at once, in the same tune for once, and the floor fills.
*if dance = "rowan"
  *present rowan
  @rowan:shy Rowan is in Larkspire gold and rose, and he looks enormous and uncomfortable and extremely handsome, and he does stand on you, twice, and apologises so much the second time that you both end up laughing in the middle of the floor. And then the Owlcombe strings start a slow one, and he stops talking, and puts one big warm hand very carefully in the middle of your back, as if you might break, and you dance. His flame is burning so warm you can feel it through the velvet. The snow above you melts where it hangs over him, and drips, very gently, onto both your heads, and neither of you mentions it.
*if dance = "imogen"
  *present imogen
  @imogen:warm Imogen is in a plain dark robe, severe and elegant, and she dances exactly as you'd expect: correctly, counting under her breath, as if it's an exam. And then, somewhere in the third dance, she stops counting. You feel it happen. Her shoulders come down. She starts, very slightly, to smile. "Kit taught me this one," she says, into your shoulder, in the middle of a Heronmere waltz. "In the kitchen. When I was fifteen. I said it was stupid." She doesn't say anything else. She doesn't leave at eleven.
*if dance = "saoirse"
  *present saoirse
  @saoirse:laugh Saoirse is in black and copper with her dark hair full of tiny brass cogs that catch the light, and she dances like she flies: too fast, too close to the edges, laughing, spinning you under the hanging snow until you're dizzy. And then the Owlcombe strings start a slow one, and she says, "Oh no," and tries to go and get a drink, and you catch her hand. She looks at you. And stays. And for four whole minutes, Saoirse Maddock stands almost still, swaying, with her forehead on your shoulder, and doesn't say one word.
*if dance = "noor"
  *present noor
  @noor:shy Noor is in sea-green, with her plait pinned up and pearls in it, and when she walks into the Hall at least three people who've known her for four years don't recognise her. She keeps looking round for someone who needs her, out of habit. You keep turning her back. By the fourth dance she's stopped looking. By the sixth she's laughing, properly, with her head back, at something you said that wasn't even that funny, and Matron Holloway, on duty by the punch, sees her, and looks at you, and nods once, as if you've done something she's been trying to do for years.
*if dance = "cas"
  *present cas
  @cas:guarded Cas walks into the Lantern Hall beside you in black velvet so severe it looks like armour, with his chin up and his jaw set, and the whole Hall turns and looks. He was right. It is a spectator sport. For about a minute. And then Rookhallow's drums start, and he says, through his teeth, "Well, we're here now," and takes your hand, and it turns out that Casimir Drummond can [i]dance[/i]. Properly. Old-fashioned, perfect, the kind somebody made him learn as a boy in a house with too many portraits. People stop staring at him and start staring at the two of you instead, which is different, and he notices, and something in his face comes unlocked.
*if dance = "idris"
  *present idris
  @idris:attentive Idris doesn't dance. He told you. He stands at the edge of the floor with you, in plum and silver, watching, and tells you things about everybody who goes past, quiet and dry and precise, until you're laughing so much you have to hold onto a pillar. And then, at the start of a slow one, without any warning, he says, "I'll try one," and holds out his hand, and dances badly and seriously and without once looking away from your face, as if he's studying you, which he is, and as if he's found something, which you think he has.
*if dance = "toby"
  @toby:laugh It's the gang. Toby and Priya and you, and Hamish Galbraith, who everybody said no to and came anyway, and half of Heronmere, in a great loose laughing crowd in the middle of the floor, dancing with everyone and no one, in a big messy circle, Toby leading it and getting every single step wrong. It's the best night of your life so far. You'll think that later, and be surprised, and not be sure it's not true.
*if dance = "alone"
  You dance with everyone. Toby, twice, badly. Priya, who's brilliant. Hamish Galbraith, who's been turned down by four people and is extremely grateful. A tiny Owlcombe first-year who asks you with her eyes shut. Professor Bassani, who dances a Larkspire reel with you with enormous theatrical flourishes and says "[i]Magnificent[/i]!" twice. You've never had a better night.

At the edge of the floor, near the great doors, Professor Grey is standing on his own.

@grey:neutral He's not dancing. He's wearing the same dark robes he always wears, with his scarred hands folded in front of him, and he's not watching the dancers. He's watching the lanterns. All ten thousand of them, silver-white, drifting under the hanging snow. His face, in the frost-light, looks very tired, and very watchful, and very old.

He sees you looking. For a moment, his colourless eyes meet yours across the Hall. Then he comes, slowly, round the edge of the floor, and stops beside you, and says, without turning his head, very low: "Watch the lanterns at midnight."

"Why?"

@grey:neutral "Because everybody else will be," says Professor Grey. "And somebody won't." And he walks away, back to the doors, before you can ask him anything else.

@tully:warm Up on the gallery above the doors, with his brass taper and his stepladder, Mr Tully is walking slowly along the line of lantern hooks, as he does every night, checking. He's in his old brown coat, not his best; he never dresses up. He's humming to himself. Some carol. And when he looks down over the rail at the dancing, and sees you, he smiles his lined kind smile, and lifts his taper in salute, the way he did on the first night.
*page_break
*comment ---------------------------------------------------------------- CH12.DANCE.02
*sid CH12.DANCE.02
*date 2026-12-21 23:40
*present familiar
At twenty to midnight, the bands stop.

The whole Hall goes quiet, and everyone looks up. Four hundred faces, turned up to the ceiling, under the hanging snow. You can hear the fires crackling. You can hear someone's familiar purring. You can hear, very faintly, the ten thousand lanterns humming, the way they always do: that warm low candle-hum you stopped noticing in September.

And at midnight, exactly, as the castle clock strikes the first stroke somewhere far above, every lantern in Wrenfold turns blue.

Not all at once. From the middle. From one lantern, high up, in the very centre of the Hall, a ripple of blue goes out, like a stone dropped in water: blue, and blue, and blue, spreading out through the ten thousand in rings, the deep clear blue of the sky just after sunset, the blue of the longest night, until the whole roof of the Hall is blue light and the hanging snow is blue and every upturned face is blue.

And under your feet, something answers.

You feel it through the soles of your shoes. Through the polished black floor, through the stone under the floor, through the rock under the stone. Deep, deep down. A warmth. A pulse. Slow and huge, like the heartbeat of something enormous and asleep. Your own flame leaps to meet it, the way it did over the carol book, the way a flame leans towards a bigger fire, and for one second you're not in the Lantern Hall at all; you're somewhere far below it, in the dark, looking at a light.

[i]The Heartfire holds.[/i]

Nobody else feels it. You look round, and everyone's looking up, at the blue, smiling, holding hands. Nobody's looking down.

Except, when you look for him, Professor Grey, by the doors, who's looking at the floor with a strange expression. And, up on the gallery, Mr Tully, with his taper, who isn't looking at the blue at all.
*present tully
@tully:hurt He's looking at one lantern. One single lantern, high in the corner above the gallery, just by the hook he was checking. It's blue like the others. And then, for less than a second, so fast you'd have missed it if Grey hadn't told you to watch, it isn't. It goes [i]grey[/i]. Flat, colourless, dead grey, the colour of the Choir. And then it's blue again. And Mr Tully, on the gallery, looks at it with a face you've never seen on him before, a face like a man who's been hit, and turns away, and goes quickly along the gallery and out through the little door at the end.

*clue e02
You don't know what you've seen. You know you've seen something.

The clock finishes striking. The blue goes on burning. Someone starts to sing an old Longnight carol, and the whole Hall joins in, and the bands pick it up, and it's beautiful, and you sing it too, and all the time you're thinking about a lantern going grey.
*if (st_cas >= 3) and not(b_cas_family)
  *present cas
  @cas:grave After the carol, when the bands start up again, you see Cas slip out through the tall doors onto the terrace, on his own, into the snow.
  *choice
    #Follow him out.
      *set b_cas_family true
      *set st_cas 4
      *set heart +5
      The terrace is white and silent and freezing, and the Mere below it is black, with the dead lanterns of the Frost Market still standing on their poles on the ice. Cas is leaning on the stone balustrade with his hands bare, looking at nothing. He doesn't look round when you come out. He knew it'd be you.

      @cas:grave "My grandmother wrote to me," he says, after a while. "She writes every Longnight. It's tradition." He takes the letter out of his pocket and doesn't open it. "Every year it says the same thing. [i]The Drummonds have kindled before their ninth birthday for eleven generations. You will understand why the family must consider its position.[/i]"

      "What happened when you didn't?"

      @cas:grave "Nothing happened. That's the point." He turns the letter over. "I was eight. Nine. Ten. Nothing. They took me to healers. They took me to a man in Prague who put me in a bath full of lightning. At twelve my father stopped speaking to me at dinner. Not cruelly. He just... stopped. As if I'd already gone." His breath goes up white. "At fourteen my younger brother kindled, and they moved his portrait into my place in the long gallery. At twenty, my grandmother had my name taken out of the family book. In ink. I watched her do it." He smiles, a terrible small smile. "And at twenty-six, on a Tuesday, in a train toilet between Leeds and Wakefield, I set the mirror on fire by looking at it. And the next morning there was a letter from my grandmother, saying the family would be delighted to reconsider."

      @cas:hurt "I went back," he says. "That's the worst thing. I went home and let them put my portrait back up and I sat at dinner and my father talked to me as if the last fourteen years hadn't happened. Because I wanted it that much." He puts the letter back in his pocket, still unopened. "That's what a late flame costs, in a family like mine. Not the years. The going back afterwards."
      *choice
        #"You don't have to go back again. Not this Christmas. Not any."
          *set st_cas +1
          *set wit +5
          @cas:surprised He looks at you, properly, for the first time since you came out. "Where else would I go?" he says. And then, hearing it, he looks away, at the Mere, and doesn't answer his own question, and you don't either. But he doesn't take his eyes off you for long.
        #Don't say anything. Stand beside him in the snow till he's cold enough to go in.
          *set st_cas +1
          *set heart +5
          @cas:warm You stand there a long time, in the snow, shoulders not quite touching. When he finally turns to go in, he stops beside you, and says, very quietly, "Thank you for not saying anything clever. Everybody always says something clever." And then, with the ghost of his usual sneer: "Don't let it go to your head."
    #Leave him be. Some people go outside to be alone.
      *set nerve +5
      You let him go. Through the tall windows, later, you see him out there on the terrace in the snow, a dark shape leaning on the balustrade, not moving, for a long time.
*if dance = "rowan"
  *present rowan
  @rowan:warm Under the blue lanterns, when it's over, Rowan walks you back up to the stairs. At the bottom, he stops, and looks at you, and for a second you think he's going to say something. Then he just reaches out and brushes the melted snow out of your hair with his warm hand, very gently, and says "Merry Longnight," and goes up the Larkspire stair two at a time.
  *set st_rowan +1
*if dance = "imogen"
  *present imogen
  @imogen:warm Imogen stays until the very end, when the bands pack up, which she said she wouldn't. At the foot of the stairs she stops, and looks at the blue lanterns, and says, "Kit loved Longnight." And then, before she goes: "Thank you. I didn't think about anything for three hours. I'd forgotten you could do that."
  *set st_imogen +1
*if dance = "saoirse"
  *present saoirse
  @saoirse:warm Saoirse doesn't go up to bed. She sits on the bottom stair with her dress robes bunched round her knees and cogs falling out of her hair, and pats the step beside her, and you sit with her and watch the blue lanterns until they turn back to gold at one o'clock. She doesn't fidget once.
  *set st_saoirse +1
*if dance = "noor"
  *present noor
  @noor:warm Noor falls asleep on your shoulder on a bench by the fire at half past twelve, in her pearls, and you let her. When Matron comes to fetch her, she looks at you both and says, "Leave her. First time in four years she's slept at a party instead of working one." And puts a blanket over both of you.
  *set st_noor +1
*if dance = "cas"
  *if not(b_cas_family)
    *present cas
    @cas:neutral At the foot of the stairs, Cas stops. "People looked," he says. "All night." A pause. "I didn't mind as much as I thought I would." He goes up without saying goodnight, but he looks back, once, from the landing.
    *set st_cas +1
*if dance = "idris"
  *present idris
  @idris:neutral Idris walks you as far as the Owlcombe stair. At the bottom, he takes out his notebook, and looks at it, and puts it away again without writing anything. "I'm not going to write tonight down," he says. "I think I'd like to just remember it." And then, oddly shy: "Goodnight."
  *set st_idris +1
*page_break
*comment ---------------------------------------------------------------- CH12.TERM.01
*sid CH12.TERM.01
*date 2026-12-22 09:00
*mood day
*place P12 boathouse
*present toby kestrel familiar
Term ends on Tuesday, in a white fog, with the boats.

Half the school is going home for the holidays and half isn't, and the boathouse is chaos: trunks and cages and hatboxes, familiars in baskets complaining, the Lamplighters at the jetty checking every name against a list, and the boats, fifty of them, bumping and knocking against the ice at the edges of the channel the groundskeepers have broken through the frozen Mere.

@toby:warm Toby's going home. He's been talking about it for a week: his mum, his little sisters, the chip shop on the corner of his road, his own bed that doesn't have a hare in it. He's got a carrier bag of presents, badly wrapped. He hugs you on the jetty so hard your feet leave the ground. "Write," he says. "Every day. Tell me if anything happens. Tell me if [i]nothing[/i] happens." He looks back at the castle, huge and pale in the fog, with every window still faintly blue. "It's weird. I thought I'd want to go. I do want to go. I just don't want to leave."

@kestrel:neutral The Headmistress is at the end of the jetty in her long coat, seeing the boats off, as she does every term. When she sees you, she comes over.

@kestrel:grave "I'm not going to tell you what to do," she says quietly, under the noise. "I've thought about it for a week. If you go home, you're away from the school, and away from me, and away from the Order; and the Choir has never yet come looking for a student in their own house. If you stay, you're behind the wards, with the Order at the gates and me down the corridor; and the Choir has been inside the wards twice this term." She looks at you, with her hazel eyes, very tired. "I don't know which is safer. I'd tell you if I did. So you choose."
*if gift_for = "nana"
  In your pocket is Nana Pearl's last letter. [i]Toffee tin now snowing in the airing cupboard. Admiral fascinated. Are you coming home? Only I've bought a turkey the size of a small dog and I'm not eating it with the budgie.[/i]
*else
  In your pocket is Nana Pearl's last letter. [i]Are you coming home? Only I've bought a turkey the size of a small dog and I'm not eating it with the budgie. No pressure. Some pressure. Love you. N.[/i]
*if gift_for = "toby"
  @toby:laugh You give Toby the box with the chocolate wren in it, at the last minute, on the jetty. It's gone still by now. He opens it anyway, and looks at it for a long time, and then he eats it, head first, in one bite, with his eyes shut, and says, with his mouth full, "Tastes like being twelve."
*choice
  #Go home. Nana Pearl, and Wrexley, and your own bed, for a fortnight.
    *set ch13_way "home"
    *set heart +5
    @kestrel:warm The Headmistress nods. "Then go home," she says. "Eat the turkey. Sleep. Don't do anything with your flame you don't have to. And if anything hums, [i]anything[/i], you send a bird." She touches your shoulder. "Merry Longnight."
  #Stay. The castle at Christmas, snowed in, half empty. Whatever's under the floor.
    *set ch13_way "stay"
    *set nerve +5
    @kestrel:neutral The Headmistress nods. "Then stay," she says. "There'll be about forty of you, and the Order, and me. It'll be very quiet." She looks back at the castle in the fog. "Try to let it be quiet. You've earned a quiet fortnight." She doesn't sound as if she thinks you'll get one.
*journal [b]Chapter 12.[/b] The Frost Market on the frozen Mere, and the Longnight Dance under hanging snow{@dance = "alone"|, where you danced with everyone|}{@dance = "toby"|, with the whole gang|}{@dance = "rowan"|, with Rowan|}{@dance = "imogen"|, with Imogen|}{@dance = "saoirse"|, with Saoirse|}{@dance = "noor"|, with Noor|}{@dance = "cas"|, with Cas|}{@dance = "idris"|, with Idris|}. In the Wrenfold Carol Book, Miss Dunne showed you the Wren's Song (it's in parts; this is only the first voice), and in the margin, in Hester Wren's hand: [i]Where the song cannot reach, the Heartfire holds.[/i] At midnight every lantern burned blue, and something under the castle answered you. One lantern went grey for a moment, above the gallery, and Mr Tully saw it. {@b_cas_family|On the terrace, Cas told you what a late flame cost him in his family. |}Term ended; you chose to {@ch13_way = "home"|go home to Nana Pearl|stay at Wrenfold} for Christmas.
*page_break
*goto_scene ch13
`);
