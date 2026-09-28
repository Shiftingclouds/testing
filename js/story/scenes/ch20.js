NB.scene("ch20", String.raw`
*mood night
*set ch 20
*chapter 20 The Wren's Song
*if order_offer = "leave"
  *goto away
*comment ---------------------------------------------------------------- CH20.SONG.01
*sid CH20.SONG.01
*date 2027-04-10 19:00
*place P22 library
*present imogen idris familiar
*set singers 0
April comes in wet and green, and the Mere's full of rain, and there are ducklings on it, and on the second Saturday Imogen spreads the Wren's Song out across the long table in the Long Stacks, all five voices, and says, "Right."

She's copied it out five times, once for each voice, on five long sheets of paper, in her precise pencil hand, with Hester's little drawings at the top of each. The wren. The lark. The owl. The heron. The rook. Idris has annotated them in the margins, in his cramped tiny writing: what the old Wordcraft words mean, where the breaths go, which notes Hester crossed out and wrote again.

@imogen:grave "Five voices," says Imogen. "The wren's line leads. That's the one Odile sang, and Toby, and Nana." She looks at you. "That's yours. It has to be. Whoever leads it has to be able to hear flames, Hester says, so they know when to push and when to hold."

@idris:neutral "And the other four are the houses," says Idris. "One voice each. And Hester's very clear." He puts his finger on a line of the journal, which is lying open between the sheets like a sleeping animal. "[i]Every house must sing its own, in its own roost, before it can sing it anywhere else. The voices are kept in the stones.[/i]" He looks up. "I think she means it literally. I think if you stand in the Larkspire roost and sing the lark's line, the stones sing it back. I think that's how you learn it. And I think you can only learn it if the house lets you."

@imogen:tense "Which means," says Imogen, "we need people. From all four houses. As many as we can get. Not ten. Not twenty. As many as will come." She sits back. "And we've got ten weeks till Midsummer, and half the school thinks we're mad, and the other half is too frightened to sing in the bath."

You look at the five sheets of paper on the table. At the little drawn birds.

[i]The Choir has one note and many throats. We must have many notes and one heart.[/i]
*if (st_imogen >= 3) and (hurt_imogen < 2)
  *set singers +1
  @imogen:warm "I'll sing the owl's line," says Imogen. "Obviously. I've already learned it." She hasn't slept. You can tell. "I learned it in the bath."
*if (st_idris >= 3) and (hurt_idris < 2)
  *set singers +1
  @idris:warm "So will I," says Idris. And then, a little stiffly: "I can't sing. I want you to know that before we start. I'll do it anyway."
*page_break
*comment ---------------------------------------------------------------- CH20.LARK.01
*sid CH20.LARK.01
*date 2027-04-12 20:00
*place P14 larkspire
*present marcus flick familiar
Larkspire Tower is the tallest tower on the east side, and it gets the dawn first, and the common room at the top is a round room full of cushions with a balcony going all the way round, and it's the loudest room in the castle.

It goes quiet when you come in.

Not unfriendly. Just curious. Forty Larkspires on cushions and window seats and the backs of sofas, looking at you. {@house = "larkspire"|Your own house. People you've eaten breakfast with every day for seven months.|You're not one of them. You're standing in their roost uninvited.} Everybody's heard about the song by now. Everybody's heard that you want them to sing it.
*if (st_rowan >= 3) and (hurt_rowan < 2)
  *present rowan
  *set singers +1
  @rowan:warm Rowan gets up off the floor by the fire and comes and stands beside you without being asked. That's all. He doesn't say anything. He just stands there, big and warm, with his arms folded, looking round the room at his house, and you watch forty people notice.

*meet marcus
*meet flick
@marcus:neutral Marcus Oduya, the Glimmer captain, is sprawled across a whole sofa with his feet on the arm. He looks at you, and at the sheet of paper in your hand with the lark drawn on it. "So it's true," he says. "You want us to sing at them."

@flick:neutral Flick Barrow, the prefect, is at the table by the window with her clipboard. She's put her pen down. "Is it safe?" she says. It's a teacher's question, a real one.
*choice
  *if nerve >= 60
    #"No. It isn't safe. Nothing's safe. Odile Pellow sang it alone and they took her. Toby sang it alone and they took him. I'm asking you so that nobody has to sing it alone ever again."
      *set singers +3
      *set nerve +5
      The room goes very quiet. Then Marcus Oduya swings his feet off the arm of the sofa and sits up. "Well," he says, "when you put it like that." He holds out his hand for the sheet. Flick is already standing up. And then somebody on a window seat, and somebody else by the fire, and the balcony door opens and three more come in from outside, and by the end of the night there are twenty-two Larkspires on the balcony in the dark, singing the lark's line, badly, at the top of their lungs, and the stones of the tower are singing it back.
  *if heart >= 60
    #"Toby Quill made you all toast at three in the morning when the Larkspire boiler broke in November. Every one of you. He's Heronmere. He didn't have to."
      *set singers +3
      *set heart +5
      Somebody laughs, a wet surprised laugh. And somebody else says, "He did, though." And Flick Barrow puts down her clipboard and says, "Right. Everyone who had Toby's toast, on the balcony. Now. That's all of you. I was there." And by midnight there are twenty Larkspires on the balcony in the dark, singing the lark's line, and the stones of the tower are singing it back.
  #"I don't know if it's safe. I just know it's the only thing that's ever worked."
    *set singers +1
    @marcus:neutral Marcus looks at you for a long time. Then he gets up. "I'll do it," he says. "Me and Flick. The rest of this lot can make up their own minds." He takes the sheet. That night, on the balcony, three of you sing the lark's line in the dark, and after a while, faintly, the stones sing it back.
*page_break
*comment ---------------------------------------------------------------- CH20.OWL.01
*sid CH20.OWL.01
*date 2027-04-13 22:00
*place P15 owlcombe
*present mina familiar
The Owlcombe Stacks are under the Observatory: a long low room lined with shelves and ladders, and a ceiling that isn't a ceiling, but the real night sky, with the real stars moving across it slowly, so that the whole house reads by starlight.

The owl's line is low and slow and patient. It goes down where the lark's goes up. You stand under the moving stars and sing the first bar of it, alone, to see, and the shelves all round you give it back, very faintly, as if a thousand books were humming under their breath.
*meet mina
@mina:warm Mina Achebe is the first to stand up. She was on a ladder, with a book; she comes down it and crosses the room and stands in front of you in her plum and silver. "I was outside the post office," she says. "In December. You dragged six of us round the corner. Or you sang. Or you did something, I don't know what, I couldn't feel my hands." She holds out her hand for the sheet. "I'll sing. And I'll bring the other five."
*if fr_mina >= 1
  *set singers +1
*if (st_idris >= 3) and (hurt_idris < 2)
  Idris is at the long table under the stars, with his notebook, and when the Owlcombes look at him, as they have been looking at him since the Quiet, sideways, he stands up, and says, in his quiet exact voice, "I'm singing. I'd like it if you did too." Nobody moves away from him tonight.
*choice
  *if wit >= 60
    #Tell them what Hester wrote. Exactly. Owlcombes like a primary source.
      *set singers +3
      *set wit +5
      You read it to them, from the journal, in the starlight: Tom Brack the smith, and Old Nell from the ferry who sang the fish up, and the Choir at Martinmas, and [i]we sang them off; lost two panes of glass[/i]. And [i]many notes and one heart[/i]. When you finish, the room's silent. And then a woman on the top of a ladder says, "Four hundred years ago, and nobody's checked if it works?", in a voice of deep professional outrage, and comes down the ladder. By one in the morning you've got twenty-five Owlcombes under the stars, arguing about breath marks, singing the owl's line, and the shelves are singing it back.
  *if heart >= 60
    #Tell them about Delphine, and Bram, and Odile. Say their names.
      *set singers +3
      *set heart +5
      You say their names. And the Owlcombe boy who was hollowed on the night of the Quiet, who went to see what the bell was: you say his name too, and the room flinches. And then someone says, "He was in my Brewing set," and stands up. By one in the morning there are twenty Owlcombes under the stars, singing the owl's line for a boy who went to see what the bell was, and the shelves are singing it back.
  #Just sing it. Let them decide.
    *set singers +1
    You sing the owl's line, alone, under the moving stars, badly, all the way through. Mina joins in halfway. Then two more. It's not many. But the shelves sing it back.
*page_break
*comment ---------------------------------------------------------------- CH20.HERON.01
*sid CH20.HERON.01
*date 2027-04-14 21:00
*place P16 heronmere
*present priya jonty rhys familiar
The Heronmere cloister is half underwater, and green, and quiet. It's been quiet since the Quiet. There are five empty beds in the Heronmere dormitories, and a candle on the Heronmere table for Delphine, and Heronmere has lost more than any house, and everyone knows it, and nobody knows what to say.

*meet jonty
*meet rhys
@priya:neutral Priya's waiting for you by the fire, with the heron's sheet already in her hand. She learned it before anyone. "It's slow," she says. "Like still water. Like standing in a river and not moving." She looks round the cloister, at the green-lit faces. "They'll come. They just need somebody to go first."
*set singers +1
@rhys:warm Professor Rhys is there, in her battered hat, sitting on the low wall by the lake door with her muddy boots crossed. "I'll sing," she says. "I've got a voice like a foghorn, mind. Hester won't have heard the like."
*set singers +1
*if (st_noor >= 3) and (hurt_noor < 2)
  *present noor
  *set singers +1
  @noor:neutral Noor comes in from the Infirmary, still in her uniform, and stands next to Priya without a word.
*if toby_lit
  *present toby
  *set singers +1
  @toby:tired And Toby. Thinner, and paler, and slower than he was, with the hare at his heels, and the gold flame in him lopsided and small and his. He looks at the heron's sheet, and then he hands it back to Priya, and takes the wren's sheet out of his pocket instead, the one from March, crumpled and soft. "I know this one," he says. "I'll sing this one. I owe it."
*choice
  *if nerve >= 60
    #Stand in front of the lake door, where Toby stood, and sing.
      *set singers +3
      *set nerve +5
      You go and stand in front of the lake door, the iron door that opened on the night of the Quiet, where Toby stood in his pyjamas and sang the wren's line off-key, and you sing it. And behind you, the cloister goes silent. And then Priya comes and stands beside you, and sings the heron's line, low, still, like standing in a river. And then Jonty Farthing, who fell asleep on his broom in the semi-final, and then the others, one by one, until there are thirty Heronmeres standing in front of the lake door in the green light, and the water outside the windows is humming it back.
  *if heart >= 60
    #Say the names. All five of Heronmere's. And Delphine's.
      *set singers +3
      *set heart +5
      You say the names, in the green light. Delphine. And the two second-years. And the others. {@toby_lit|And Toby, who came back.|And Toby.} And the cloister is silent, and then Jonty Farthing says, "Right," and stands up, and they all stand up, the whole house, and by midnight there are thirty Heronmeres singing the heron's line at the bottom of the lake, and the water is singing it back.
  #Ask Priya to start. It's her song more than yours.
    *set singers +2
    @priya:neutral Priya starts. Low, still, alone. And Jonty Farthing, by the fire, joins in. And then a few more. And the water outside the windows hums it back.
*page_break
*comment ---------------------------------------------------------------- CH20.ROOK.01
*sid CH20.ROOK.01
*date 2027-04-15 21:00
*place P17 rookhallow
*present hamish crook familiar
The Rookhallow Undercroft is under the kitchens, and it's always warm, and it's always loud, and it smells of hot metal and sawdust and toast. Forges along one wall. Workbenches along the other, cluttered with half-built things. The brass dragon from the Glimmer Cup in the corner, snoring copper sparks.

The rook's line is rough and clever and it doesn't go where you expect. It hops. It doubles back. It's the hardest of the five, Imogen says, and the most fun.
*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  *present saoirse
  *set singers +1
  @saoirse:laugh Saoirse's already learned it. Of course she has. She's standing on a workbench singing it at the top of her voice while she welds something, and the forges are singing it back, clanging, in time.
*if (st_cas >= 3) and (hurt_cas < 2)
  *present cas
  *set singers +1
  @cas:neutral Cas is there. {@cas_house = "rookhallow"|It's his house, after all.|He came down from Owlcombe to stand in somebody else's roost, which nobody does.} He doesn't sing. He stands at the back, by the door, with his arms folded. But when the song starts, you see his lips moving. "Whatever it costs," he says to you afterwards, low. "I said."
*meet hamish
@hamish:neutral Hamish Galbraith, who asked four people to the Longnight Dance at one table and got four noes, is sitting on an upturned bucket by the forge, eating toast. "Go on, then," he says. "Convince me."

@crook:neutral Professor Crook, at the end of the room with her pipe, raises one eyebrow and says nothing, which from Professor Crook is encouragement.
*choice
  *if wit >= 60
    #"Hester says the rook's line is the hardest one. She says she's not sure anyone can actually sing it."
      *set singers +3
      *set wit +5
      There's a pause. And then Hamish Galbraith puts down his toast and says, in a voice of deep offence, "[i]Can't sing it?[/i]" And every Rookhallow in the Undercroft is suddenly standing up. By midnight they're singing it in four-part harmony, which Hester did not write, and the forges are clanging along, and Professor Crook is conducting with her pipe.
  *if nerve >= 60
    #"Bram Hollis was Rookhallow."
      *set singers +3
      *set nerve +5
      The Undercroft goes quiet. Bram Hollis, found on the Rookery stair in November, with a crow on his shoulder that wouldn't leave him. Hamish puts his toast down. "He was my mate," he says. "He was a pain in the neck. He was my mate." He stands up. "Right. Give it here." By midnight there are twenty-five Rookhallows singing the rook's line, and the forges are singing it back.
  #Sing it. Get it wrong. Let them laugh and fix it.
    *set singers +2
    You sing it and get it completely wrong, and the whole Undercroft laughs, and Hamish Galbraith says, "No, no, no, it goes [i]like this[/i]," and sings it right, and then argues with three people about whether he sang it right, and that's how Rookhallow learns the rook's line: by arguing about it until two in the morning.
*page_break
*comment ---------------------------------------------------------------- CH20.MAISIE.01
*sid CH20.MAISIE.01
*date 2027-04-18 14:00
*mood day
*place P39 st_ides
*present tully maisie familiar
On the third Sunday in April, you go to St Ide's with Mr Tully again.

He's been different since March. Quieter. He does his round every night, and lights every lantern, and when Morrow's letters come to the stove drawer, he brings them straight to {@tully_fate = "exposed"|the Commander|}{@tully_fate = "kestrel"|the Headmistress|}{@(tully_fate = "st_ides") or (tully_fate = "silent")|you|} without opening them. He's got thinner. He sits in the Lantern Hall at meals and doesn't eat, and looks at the dark patches in the roof where the lanterns went out on the night of the Quiet and still won't light.

@maisie:hollowed Maisie is by the window in her pink cardigan, looking at the daffodils he brought last time, which are dead. "Hello," she says, politely. "What nice flowers."

You sit on the edge of her bed. You take her cold hands. You look.

The spark is still there. Grey, cold, tiny, the last coal in the grate. You know what to do now. You did it for Toby, where there was nothing; this is easier, and harder, because there's something, and you could still get it wrong. You don't give her a piece of yours. You just put yours next to hers, the way you sat by Rowan in the Infirmary. And breathe on it.
*choice
  *if (kindling >= 45) and (chill < 3)
    #Hold on. Keep breathing on it. As long as it takes.
      *set maisie_lit true
      *set kindling +5
      It takes an hour. Mr Tully doesn't move. The ward is silent. Outside, it rains, and stops, and the sun comes out.

      And the spark catches.

      Pale blue. Then gold. Then a colour you've never seen: a clear bright yellow, like a daffodil, like the flowers on her table. It comes up in her the way the sun comes up over the Candlestones, all at once.

      @maisie:tired Maisie Tully blinks. She looks at her hands, in yours. She looks at the window. At the dead daffodils. And then she turns her head, slowly, and looks at the old man in the chair by her bed, with his cap in his hands and his face wet.

      @maisie:tired "Dad?" she says. Her voice is cracked and small and bewildered. "Dad, you've got old. Why have you got so [i]old[/i]?"

      @tully:hurt Absalom Tully makes a sound you'll hear for the rest of your life, and puts his face in her lap, and holds on.
  *if (kindling < 45) or (chill >= 3)
    #Try. You have to try.
      *set chill +1
      You try. You breathe on it for an hour, and it flickers, and flickers, and once, for a second, goes gold. And Maisie's fingers tighten on yours. And then it sinks back down, grey, to the bottom of the grate, where it's been for six years.

      @tully:sad Mr Tully puts his hand on your shoulder. "It's still there," he says quietly. "That's what matters. It's still there. You'll try again. When you're stronger." He looks at his daughter. "I've waited six years. I can wait."
*if (st_imogen >= 3) and (hurt_imogen < 2)
  *present imogen kit
  @imogen:tense Imogen is at the door of the ward. She came on the same train, and went to Kit first, and now she's standing in the doorway with her hands clasped in front of her so tightly the knuckles are white, and she's seen. {@maisie_lit|She's seen Maisie look at her father and say [i]Dad[/i].|She's seen you try.}

  @imogen:tense "Kit," she says. Just that. She can't say anything else.
  *choice
    *if (kindling >= 55) and (chill < 2)
      #Go with her. Now. While your hands are still warm.
        *set kit_lit true
        *set chill +1
        You go with her. Kit Sallow is in the second ward, by the window, with his sister's sharp chin and dark eyes gone blank, and his spark is very faint, much fainter than Maisie's; three years, and a sister who came every other Sunday and talked about the weather. You sit down and take his hands and breathe on it, and it's hard, harder than Maisie, and the cold comes up your arms, and Imogen's standing behind you with her hand on your back, and you can feel her willing it, the whole fierce force of her.

        It catches.

        @kit:tired Kit Sallow blinks, and looks at his sister, and says, in a hoarse cracked voice, "Immy? Why are you crying? You never cry. You said crying was inefficient."

        @imogen:hurt Imogen Sallow sits down on the floor of the ward, in the middle of St Ide's, and cries like a little girl, and doesn't care who sees.
    #"Not today. I haven't got enough left. But I'll come back for him. I promise."
      *set heart +5
      @imogen:hurt She nods. She nods again. She doesn't say anything. But she comes and takes your cold hand in both of hers, and holds it all the way home on the Lantern Train, and when you fall asleep against the window, she doesn't move.
*page_break
*comment ---------------------------------------------------------------- CH20.CHOIR.01
*sid CH20.CHOIR.01
*date 2027-04-24 23:00
*mood night
*place P29 old_cloisters
*present tully kestrel familiar
The first full rehearsal is on the last Saturday in April, at eleven at night, in the Old Cloisters, because Hester says the song should first be sung where she first sang it.

They come. That's the thing you'll never get over. You thought maybe forty, maybe fifty. They come down the east stair and through the door that isn't sealed any more and down into the dark between the carved pillars with their candles, in their dressing gowns and their house scarves, in twos and threes and tens, and they keep coming: Larkspires and Owlcombes and Heronmeres and Rookhallows, first-years and second-years, people you know and people you've never spoken to, until the Old Cloisters are full, wall to wall, pillar to pillar, with candles and faces and breath.
*set singers +1
@kestrel:warm The Headmistress is there, at the back, in her long coat. "I'll take the owl's line," she says, when you look at her. "I was Owlcombe. A long time ago." She doesn't say anything else.

You stand at the front. On the step at the end of the passage, where the wren door is, warm at your back. You've got the wren's line. You lead.

And you sing.

Up, and round, and back down, like a bird going round a chimney. And behind you, above you, all round you, the others come in, house by house: the lark, high and bright; the owl, low and patient; the heron, still water; the rook, hopping and doubling back. Five voices. Hundreds of throats. Going round the chimney in five directions at once.

And where they cross, the Old Cloisters [i]ring[/i].

It's the kitchen at Viaduct Street. It's the high street at Thimble Cross. It's the note that isn't any of the voices, high and clear and bright, like a finger round the rim of a glass, but a thousand times bigger, so that the stone pillars ring with it and the carved wrens on them seem to shiver and the candles all lean towards the middle of the room at once. And behind you, through the wren door, far down, something enormous and warm and slow turns over in its sleep and [i]answers[/i].
*if singers >= 12
  You feel it in every flame in the room. Hundreds of them. Gold and rose and green and blue and copper and pearl, all leaning together, all burning brighter, held. There's no gap. There's nowhere for anything to get in. Many notes, and one heart.
  *achieve wren_song
*else
  You feel it in every flame in the room, all leaning together, burning brighter. But not everywhere. There are gaps. Places in the sound where a house is thin, where a voice wavers and nobody's there to hold it up. It's more than you've ever had. You don't know if it's enough.

@tully:sad When it's over, and the Old Cloisters are emptying, candles going back up the east stair in a long bright river, Mr Tully comes down the steps with a thin grey envelope in his hand.

@tully:tense "Came tonight," he says. "In the drawer. Same as always." He holds it out. His hand's shaking. "I haven't opened it. I never do, now."

You open it.

[i]Absalom. Midsummer Eve. The Proving. When every lantern in the Hall is lit and every student is sitting beneath them and the Heartfire is burning at its brightest to feed them all. Leave the boathouse ward open at eleven. Then take the Kindler down to the root. Tell them I only want to talk. Tell them Maisie will wake by morning. A.M.[/i]
*clue e16
@kestrel:grave The Headmistress reads it over your shoulder. She's quiet for a long time. "Midsummer," she says. "Of course. Every lantern lit, and the whole school in one room." She folds the letter up and gives it back. "Ten weeks," she says. "Keep singing."
*if maisie_lit
  @tully:grave Mr Tully looks at the letter in your hand. "[i]Maisie will wake by morning[/i]," he reads, and something goes across his face like a cloud across the sun. "She woke in April," he says. "She's in the Infirmary. She asks for toast." He takes his cap off, and turns it in his hands. "He doesn't know. He doesn't know he's got nothing left to give me." He looks up at you. "Whatever you want me to do at Midsummer, I'll do it."
*journal [b]Chapter 20.[/b] The Wren's Song has five voices: the wren's to lead, which is yours, and one kept in each house's roost. You went to all four, and they came: Larkspire, Owlcombe, Heronmere, Rookhallow. {@maisie_lit|At St Ide's, you breathed on the spark in Maisie Tully, and it caught, and she looked at her father and said [i]Dad, you've got old[/i]. |}{@kit_lit|And Kit Sallow woke and asked Imogen why she was crying. |}At the first full rehearsal in the Old Cloisters, the song rang, and something under the school answered. {@singers >= 12|There was no gap anywhere.|There were gaps.} Then Morrow's newest letter to Tully: [b]Midsummer Eve[/b], at the Proving, every lantern lit. Leave the boathouse ward open at eleven; bring the Kindler to the root.
*page_break
*goto_scene ch21
*comment ================================================================ away
*label away
*comment ---------------------------------------------------------------- CH20.AWAY.01
*sid CH20.AWAY.01
*date 2027-04-17 20:00
*mood dusk
*place P40 fen_chapel
*present arkwright jory familiar
The Order's house is on the edge of Saltmarrow Fen, a mile from the drowned chapel, and it's the loneliest place you've ever been.

Flat. That's the first thing. After seven months of a castle on a hill above a black lake, the Fen is flat as a table in every direction, reeds and water and mud and sky, and the sky is enormous, and the wind never stops. The house is old and damp and draughty, with a slate roof and a cat, as Jory promised. The drowned chapel is out on the marsh, a stone tower sunk to its windows in black water, with a bell in it that rings when the wind's from the east. Forty Lamplighters in the house and the barns and the boats, with their lamps, watching the reeds. And you, in the middle of it all, being bait.

Nothing comes.

Four weeks. You sit in the window of the upstairs room with {fam_name}, and watch the reeds, and wait. Letters come from Wrenfold, every few days, by owl, and you read them over and over.
*if (st_imogen >= 3) and (hurt_imogen < 2)
  [i]We found the voices. All five. They're in the roosts. We're gathering people from all four houses. I wish you were here to lead it; you're the only one who can hear the flames. I. S.[/i]
*if (st_rowan >= 3) and (hurt_rowan < 2)
  [i]I'm singing. Can you believe it? The lark's line. Marcus says I sound like a lorry reversing. I'm doing it anyway. Come back. R.[/i]
*if (st_noor >= 3) and (hurt_noor < 2)
  [i]Eat something. I mean it. I can tell from your handwriting you're not eating. N.[/i]
*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  [i]Built a thing. Tell you when you're back. When are you back. S.[/i]
*if (st_cas >= 3) and (hurt_cas < 2)
  [i]The rook's line is ridiculous. I've learned it. Don't tell anyone. C.[/i]
*if (st_idris >= 3) and (hurt_idris < 2)
  [i]Question of the day: are you all right? You can write back just "yes". I'll know if you're lying. I. P.[/i]
[i]Keep your head down. Eat your greens. Custard says hello. Priya says hello. Nobody here's any good at the wren's line; we need you. P. M., for Toby.[/i]

@arkwright:grave On the seventeenth of April, Commander Arkwright comes up to your room with a thin grey envelope in her hand, forwarded from Wrenfold by the Headmistress. "From the stove drawer," she says. "Tully's." She gives it to you, and stands at the window with her back to you while you read it.

[i]Absalom. The Kindler has gone to the Fen with Sabine's people, to draw me out. How sweet. I shall not go. I shall come to Wrenfold at Midsummer Eve, at the Proving, when every lantern is lit and the Heartfire burns brightest. If I cannot have the Kindler to carry it, I shall take it without. Leave the boathouse ward open at eleven. A.M.[/i]
*clue e16
@arkwright:grave "He was never going to follow you," says the Commander, to the window, very quietly. "Imelda said so. I didn't listen." She turns round. Her scarred face is grey. "[i]If I cannot have the Kindler to carry it, I shall take it without.[/i] He'll break it. He'll try to take it with his bare hands, and he'll break it, and every lantern in that school will go out." She puts on her hat. "I'm taking my people back to Wrenfold for Midsummer. All forty. You're staying here."

@jory:tense Jory Penrose is in the doorway. "Commander..."

@arkwright:grave "[i]Here[/i], Penrose. With you. Somewhere he isn't." She looks at you. "You did what I asked. It was the wrong thing to ask. I'm sorry." And she goes down the stairs, and you hear her shouting orders in the yard, and by dark the boats are gone across the Fen, and the house is empty except for you, and Jory, and the cat, and the bell in the drowned chapel ringing in the east wind.
*journal [b]Chapter 20.[/b] Four weeks on the edge of Saltmarrow Fen, being bait, with forty Lamplighters. Nothing came. Letters came from Wrenfold: they've found the Wren's Song's five voices, and they're singing without you. Then Morrow's letter to Tully, forwarded: he knew you'd gone, and won't follow. He's coming to Wrenfold at [b]Midsummer Eve[/b], at the Proving, and if he can't have the Kindler to carry the Heartfire, he'll take it without. The Commander has taken her people back to Wrenfold. You've been left behind, with Jory.
*page_break
*goto_scene ch21
`);
