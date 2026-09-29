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
April comes in wet and green.

It rains for a week without stopping, soft warm spring rain that fills the Mere to the brim and runs down the castle walls in sheets, and then one morning it stops, and there are ducklings on the water, eleven of them, in a line behind their mother like beads on a string, and half the school goes down to the boathouse before breakfast to look at them. The willows are out. The Glasshouse beds where you planted your seeds are a haze of tiny green points, too small yet to tell what anything will be. Professor Rhys walks up and down them every morning with her hands behind her back, not touching.

Lessons have gone on, because the Headmistress says they must. Professor Bassani has the whole year turning teacups into hedgehogs and back again, twice, theatrically, because, he says, the world needs more hedgehogs and fewer teacups, and nobody has the heart to argue. Warding is still cancelled. The door of the Warding Hall stays shut, and the candle outside it has never once gone out.
*if toby_lit
  Toby's out of the Infirmary. He's thinner than he was, and slower, and he gets tired on the stairs and has to sit down halfway, and some mornings he stands in the doorway of the Lantern Hall for a moment as if he's forgotten what it is. But he's there, at the Heronmere table, eating porridge with Custard in his lap, and last Tuesday he set fire to a tea towel in the kitchens by accident, and the whole of Heronmere cheered.
*else
  Toby's still in the end bed in the Infirmary, watching the Mere. Priya reads to him in the afternoons. He likes the sound of it, he says. He doesn't know what the story's about. He doesn't mind.

On the second Saturday, after supper, Imogen spreads the Wren's Song out across the long table in the Long Stacks, all five voices, under the green lamps, with the rain starting again on the high windows, and says, "Right."

She's copied it out five times, once for each voice, on five long sheets of paper, in her precise pencil hand, with Hester's little drawings at the top of each. The wren. The lark. The owl. The heron. The rook. Idris has annotated them in the margins, in his cramped tiny writing: what the old Wordcraft words mean, where the breaths go, which notes Hester crossed out and wrote again. In one margin, beside a bar where the heron's line goes down very low, he's written [i]is this possible?[/i] and underneath, in Imogen's hand, [i]find out[/i].

@imogen:grave "Five voices," says Imogen. "The wren's line leads. That's the one Odile sang, and Toby.{@ch13_way = "home"| And your nan, in her kitchen, you said.|}" She looks at you. "That's yours. It has to be. Whoever leads it has to be able to hear flames, Hester says, so they know when to push and when to hold."

@idris:neutral "And the other four are the houses," says Idris. "One voice each. And Hester's very clear." He puts his finger on a line of the journal, which is lying open between the sheets like a sleeping animal. "[i]Every house must sing its own, in its own roost, before it can sing it anywhere else. The voices are kept in the stones.[/i]" He looks up. "I think she means it literally. I think if you stand in the Larkspire roost and sing the lark's line, the stones sing it back. I think that's how you learn it. And I think you can only learn it if the house lets you."

"How does a house let you?"

@idris:neutral "I have no idea," says Idris, with the particular pleasure of a man who has found a question he can't answer. "Hester doesn't say. I assume it's the people in it."

@imogen:tense "Which means," says Imogen, "we need people. From all four houses. As many as we can get. Not ten. Not twenty. As many as will come." She sits back. "And we've got ten weeks till Midsummer, and half the school thinks we're mad, and the other half is too frightened to sing in the bath."

@imogen:neutral She's already made a list, of course. She slides it across to you. [i]Mon: Larkspire. Tues: Owlcombe. Weds: Heronmere. Thurs: Rookhallow.[/i] Underneath, heavily underlined: [i]Sat 24th: everyone. Old Cloisters. 11 p.m.[/i] "Four nights," she says. "One house a night. You go in, you ask, you sing. Then two weeks to practise, and then all of us, together, where Hester first sang it."

You look at the five sheets of paper on the table. At the little drawn birds.

[i]The Choir has one note and many throats. We must have many notes and one heart.[/i]
*if (st_imogen >= 3) and (hurt_imogen < 2)
  *set singers +1
  @imogen:warm "I'll sing the owl's line," says Imogen. "Obviously. I've already learned it." She hasn't slept. You can tell. "I learned it in the bath."
*if (st_idris >= 3) and (hurt_idris < 2)
  *set singers +1
  @idris:warm "So will I," says Idris. Then, a little stiffly: "I can't sing. I want you to know that before we start. I'll do it anyway."

You walk back through the dark Stacks afterwards with the wren's sheet folded in your pocket. Up on the landing, under a lantern, you take it out and hum the first bar, very quietly, to yourself. The lantern over your head leans, very slightly, towards you, the way they always have. You hum it again. It leans again.
*page_break
*comment ---------------------------------------------------------------- CH20.LARK.01
*sid CH20.LARK.01
*date 2027-04-12 20:00
*place P14 larkspire
*present marcus flick familiar
Monday is blue and blowing, with clouds going over the Mere so fast their shadows race each other across the water. You spend the day not quite listening in lessons, with the lark's sheet folded in your pocket, taking it out between bells to look at it. The lark's line is high and quick and bright. It goes up where the others go down. It sounds, when you hum it under your breath on the stairs, like somebody laughing on a hill.

At eight o'clock you climb Larkspire Tower.

It's the tallest tower on the east side, and it gets the dawn first, and the stair goes round and round inside it past landings hung with house banners, gold and rose, faded by four hundred years of sunrise. By the top your legs are burning. The common room is a round room full of cushions, with a balcony going all the way round outside the tall windows, and the last of the sunset coming in across the floor, and a fire, and a smell of toast and wet boots and somebody's hair oil. It's the loudest room in the castle. Somebody's playing a gramophone. Somebody else is arguing about Glimmerball. Somebody's feet are sticking out from under a heap of cushions, asleep.

It goes quiet when you come in.

Not unfriendly. Just curious. Forty Larkspires on cushions and window seats and the backs of sofas, looking at you. {@house = "larkspire"|Your own house. People you've eaten breakfast with every day for seven months, and who've never once seen you stand in the doorway looking nervous.|You're not one of them. You're standing in their roost uninvited, in the wrong colours, and you can feel it.} Everybody's heard about the song by now. Everybody's heard that you want them to sing it. The gramophone runs down, with a long sad wobble, and nobody winds it up.
*if (st_rowan >= 3) and (hurt_rowan < 2)
  *present rowan
  *set singers +1
  @rowan:warm Rowan gets up off the floor by the fire and comes and stands beside you without being asked. That's all. He doesn't say anything. He just stands there, big and warm, with his arms folded, looking round the room at his house, and you watch forty people notice.

*meet marcus
*meet flick
@marcus:neutral Marcus Oduya, the Glimmer captain, is sprawled across a whole sofa with his feet on the arm. He looks at you, and at the sheet of paper in your hand with the lark drawn on it. "So it's true," he says. "You want us to sing at them."

@flick:neutral Flick Barrow, the prefect, is at the table by the window with her clipboard. She's put her pen down. "Is it safe?" she says. It's a teacher's question, a real one, the kind she'd have asked about a school trip. Forty faces turn from her to you.
*choice
  *if nerve >= 60
    #"No. It isn't safe. Nothing's safe. Odile Pellow sang it alone and they took her. Toby sang it alone and they took him. I'm asking you so that nobody has to sing it alone ever again."
      *set singers +3
      *set nerve +5
      The room goes very quiet. You can hear the wind going round the tower outside, and the fire, and somebody's familiar, a small brown bird, shifting on the curtain rail.

      @marcus:neutral Marcus Oduya swings his feet off the arm of the sofa and sits up. "Well," he says, "when you put it like that." He holds out his hand for the sheet. "I played in front of four thousand people once. Missed a penalty. They sang about it for a year." He looks at the lark. "Can't be worse than that."

      @flick:amused Flick is already standing up. "Right," she says, in a voice that could stop a playground at forty yards. "Balcony. Everybody who's coming. Coats." Somebody on a window seat gets up. Then somebody else, by the fire. The balcony door opens and three more come in from outside, where they've been listening. By the end of the night there are twenty-two Larkspires on the balcony in the dark, with the wind in their hair and the lights of the castle below, singing the lark's line, badly, at the top of their lungs.

      Then you hear it. Faint, at first, so you think it's an echo. The stones of the tower are singing it back. The same line, high and bright and laughing, coming up through the balcony rail under your hands, out of the old stone, out of four hundred years of Larkspires who sang it before. Somebody gasps. Marcus stops singing and puts his hand flat on the wall, and his face, in the dark, is like a boy's.
  *if heart >= 60
    #"Toby Quill made you all toast at three in the morning when the Larkspire boiler broke in November. Every one of you. He's Heronmere. He didn't have to."
      *set singers +3
      *set heart +5
      Somebody laughs, a wet surprised laugh. Somebody else says, "He did, though." A voice from the cushions says, "He burned the first four rounds." Another says, "He made cocoa. With cinnamon in," and for a moment the whole room is remembering it: the cold, the dark tower, the knock on the door, and Toby Quill in his dressing gown with a tray.

      @flick:amused Flick Barrow puts down her clipboard. "Right," she says. "Everyone who had Toby's toast, on the balcony. Now. That's all of you. I was there. I counted."

      By midnight there are twenty Larkspires on the balcony in the dark, singing the lark's line, and the stones of the tower are singing it back: faint, high, bright, coming up out of the old stone under your hands, like the whole tower is remembering something. Somebody's crying. Somebody's laughing. You think it might be the same person.
  #"I don't know if it's safe. I just know it's the only thing that's ever worked."
    *set singers +1
    @marcus:neutral Marcus considers you. Nobody else moves. Then he gets up. "I'll do it," he says. "Me and Flick. The rest of this lot can make up their own minds." He takes the sheet. Flick looks at him, and sighs, and picks up her clipboard, and follows.

    That night, on the balcony, three of you sing the lark's line in the dark, with the wind snatching the notes away, and it sounds thin and small and a bit silly. You go through it four times. On the fifth, faintly, the stones sing it back. Flick grabs your arm. Marcus says a word you didn't know he knew. Behind you, through the window, a few faces have come to the glass.

You go down the tower stair at midnight with the lark's line going round in your head, and you can hear it behind you, above you, all the way down: the stones, still singing, getting fainter with every turn, like a bird going away into a high sky.
*page_break
*comment ---------------------------------------------------------------- CH20.OWL.01
*sid CH20.OWL.01
*date 2027-04-13 22:00
*place P15 owlcombe
*present mina familiar
Tuesday, it rains again. Word's gone round the castle by breakfast: the Larkspire balcony, the stones singing, Marcus Oduya with his hand on the wall. In Brewing, a Larkspire at the next bench hums the lark's line under her breath the whole lesson, until Professor Kovač looks at her, once, and she stops. After the lesson, Professor Kovač stops you at the door. "Owlcombe," she says. "Tonight. After ten. I have told them they may stay up." That's all. She doesn't say it twice.

The Owlcombe Stacks are under the Observatory: a long low room lined with shelves and ladders, and a ceiling that isn't a ceiling, but the real night sky, with the real stars moving across it slowly, so that the whole house reads by starlight. Tonight the rain's gone over and the sky above the shelves is enormous and clear. It smells of old paper, and ink, and the pine resin they rub on the ladders so they don't squeak. There are Owlcombes everywhere: at the long tables, on the ladders, curled in the reading nooks, in plum and silver, with their books. None of them are reading. All of them are pretending to.

The owl's line is low and slow and patient. It goes down where the lark's goes up. You stand under the moving stars and sing the first bar of it, alone, to see, and the shelves all round you give it back, very faintly, as if a thousand books were humming under their breath.

Every pretence of reading stops.
*meet mina
*if fr_mina >= 1
  @mina:warm Mina Achebe is the first to stand up. She was on a ladder, with a book; she comes down it and crosses the room and stands in front of you in her plum and silver, with her headphones round her neck. "I was outside the post office," she says. "In December. You dragged six of us round the corner, you and me. I couldn't feel my hands. I still dream about it." She holds out her hand for the sheet. "I'll sing. And I'll bring the other five."
  *set singers +1
*else
  @mina:warm Mina Achebe is the first to stand up. She was on a ladder, with a book; she comes down it and crosses the room and stands in front of you in her plum and silver, with her headphones round her neck. "I was outside the post office," she says. "In December. Six of us. I watched Odile Pellow sing that tune till there was nothing left of her." She holds out her hand for the sheet. "I'd like to sing it with more than one voice next time. That's all."

@mina:amused "I'll put it out on the Wireless tonight," she adds. "Owlcombe's singing. That'll put the wind up Rookhallow."
*if (st_idris >= 3) and (hurt_idris < 2)
  Idris is at the long table under the stars, with his notebook. When the Owlcombes look at him, the way they've been looking at him since the Quiet, sideways, he stands up, and says, in his quiet exact voice, "I'm singing. I'd like it if you did too." Nobody moves away from him tonight. A woman at the next table moves her chair, very slightly, closer.
*choice
  *if wit >= 60
    #Tell them what Hester wrote. Exactly. Owlcombes like a primary source.
      *set singers +3
      *set wit +5
      You read it to them, from the journal, in the starlight: Tom Brack the smith, and Old Nell from the ferry who sang the fish up, and the Choir at Martinmas, and [i]we sang them off; lost two panes of glass[/i]. And [i]many notes and one heart[/i]. You read it slowly. Owlcombes listen the way other people eat: with their whole attention, not wasting a crumb.

      When you finish, the room's silent. Then a woman on the top of a ladder says, "Four hundred years ago, and nobody's checked if it works?", in a voice of deep professional outrage, and comes down the ladder.

      Somebody else wants to see the journal. Somebody wants to compare Imogen's copy against the original. Somebody has questions about the Wordcraft in the second bar, and somebody else has answers, and they're wrong, and there's an argument. By one in the morning you've got twenty-five Owlcombes under the stars, arguing about breath marks, singing the owl's line, and the shelves are singing it back, low and slow, from every book in the house.
  *if heart >= 60
    #Tell them about Delphine, and Bram, and Odile. Say their names.
      *set singers +3
      *set heart +5
      You say their names. Delphine. Bram. Odile. Then the Owlcombe boy who was hollowed on the night of the Quiet, who went to see what the bell was: you say his name too, and the room flinches.

      Somebody says, "He was in my Brewing set," and stands up. Somebody else says, "He borrowed my scarf. He never gave it back." A third: "He was going to be a vet. Before. He told me." It goes round the room, quietly, the way a candle goes round at a vigil: small things, one each, that nobody's said out loud since March.

      By one in the morning there are twenty Owlcombes under the stars, singing the owl's line for a boy who went to see what the bell was, and the shelves are singing it back.
  #Just sing it. Let them decide.
    *set singers +1
    You sing the owl's line, alone, under the moving stars, all the way through. It's too low for you. You get the bottom notes wrong and have to go back for them. Mina joins in halfway. Then two more. It's not many. But the shelves sing it back, and when they do, a few more heads come up from a few more books, and stay up.

It's gone one when you climb out through the Owlcombe door, and the stars on the ceiling behind you are still turning, slow and patient, the way the owl's line goes.
*page_break
*comment ---------------------------------------------------------------- CH20.HERON.01
*sid CH20.HERON.01
*date 2027-04-14 21:00
*place P16 heronmere
*present priya jonty rhys familiar
On Wednesday you go down under the lake.

You haven't been down the long slope since the night of the Quiet. You didn't know that until you're at the top of it, with the green light coming up to meet you, and your legs stop. You stand there for a minute with {fam_name} waiting two steps ahead, looking back at you. Then you go down. The passage is just a passage. The windows are just green. It smells of lake water and lamp oil, and somebody down there is making toast.

The Heronmere cloister is half underwater, and green, and quiet. It's been quiet since the Quiet. The lake door has three new bars across it, iron, and a ward-stone set into each that hums faintly if you get close. There are {@toby_lit|three|four} empty beds in the Heronmere dormitories, and a candle on the Heronmere table for Delphine, and Heronmere has lost more than any house, and everyone knows it, and nobody knows what to say. The fire's lit. The Heronmeres are sitting round it, close, the way people sit round a fire when they've come in from somewhere cold, and they look up when you come in, and they don't look surprised.

*meet jonty
*meet rhys
@priya:neutral Priya's waiting for you by the fire, with the heron's sheet already in her hand. She learned it before anyone; she's played it on her violin every night this week, alone, in the window seat, until the whole house could hum it in its sleep. "It's slow," she says. "Like still water. Like standing in a river and not moving." She looks round the cloister, at the green-lit faces. "They'll come. They just need somebody to go first."
*set singers +1
@rhys:warm Professor Rhys is there, in her battered hat, sitting on the low wall by the lake door with her muddy boots crossed. "I'll sing," she says. "I've got a voice like a foghorn, mind. Hester won't have heard the like." The snail on her hat puts its horns out, as if it's heard this before.
*set singers +1
*if (st_noor >= 3) and (hurt_noor < 2)
  *present noor
  *set singers +1
  @noor:neutral Noor comes in from the Infirmary, still in her uniform, and stands next to Priya without a word. She's got the heron's sheet folded very small in her watch pocket. You've seen her take it out on her breaks.
*if toby_lit
  *present toby
  *set singers +1
  @toby:tired And Toby. Thinner, and paler, and slower than he was, with the hare at his heels, and the gold flame in him lopsided and small and his. He looks at the heron's sheet, and then he hands it back to Priya, and takes the wren's sheet out of his pocket instead, the one from March, crumpled and soft. "I know this one," he says. "I'll sing this one. I owe it."
*choice
  *if nerve >= 60
    #Stand in front of the lake door, where Toby stood, and sing.
      *set singers +3
      *set nerve +5
      You go and stand in front of the lake door, the iron door that opened on the night of the Quiet, where Toby stood in his pyjamas and sang the wren's line off-key. Your legs don't want to. You make them. You can feel the cold coming off the new iron bars on the back of your neck. You sing the wren's line.

      Behind you, the cloister goes silent.

      @priya:neutral Then Priya comes and stands beside you, and sings the heron's line, low, still, like standing in a river. Jonty Farthing, who fell asleep on his broom in the semi-final, puts his knitting down and comes and stands on your other side, enormous and gentle, and sings it in a soft deep voice nobody knew he had. Then the others, one by one, until there are thirty Heronmeres standing in front of the lake door in the green light, and the water outside the windows is humming it back.

      You feel it through the floor. The whole lake, singing the heron's line, slow and deep and patient, as if it's been waiting since March for somebody to ask.
  *if heart >= 60
    #Say the names. Every one Heronmere has lost this year.
      *set singers +3
      *set heart +5
      You say the names, in the green light. Delphine. The two second-years from the night of the Quiet, whose names you learned in the Infirmary. {@toby_lit|And Toby, who came back.|And Toby.} Each one lands in the quiet like a stone dropped in still water, and you can see it go out from you across the room, face by face.

      The cloister is silent. Then Jonty Farthing says, "Right," and stands up, with his knitting still in one hand. They all stand up, the whole house. Nobody says anything else. Priya gives the note on her violin. By midnight there are thirty Heronmeres singing the heron's line at the bottom of the lake, and the water is singing it back.
  #Ask Priya to start. It's her song more than yours.
    *set singers +2
    @priya:neutral Priya starts. Low, still, alone, with her eyes shut. For a bar or two it's only her, and the fire, and the lake. Then Jonty Farthing, by the fire, joins in, without putting down his knitting. Then a few more. The water outside the windows hums it back, and Priya opens her eyes, and doesn't stop.

When you leave, they're still singing. You can hear it all the way up the long slope, under the water, fading, and then, at the top, where the passage comes out behind the kitchens, not fading at all, because the whole lake is carrying it.
*page_break
*comment ---------------------------------------------------------------- CH20.ROOK.01
*sid CH20.ROOK.01
*date 2027-04-15 21:00
*place P17 rookhallow
*present hamish crook familiar
By Thursday the whole castle is singing.

Not well. Not together. But everywhere: a Larkspire on the east stair going up the lark's line two steps at a time; an Owlcombe in the Long Stacks humming the owl's under her breath while she shelves; the Heronmeres in the Glasshouses singing the heron's to the seedbeds while Professor Rhys pretends not to listen. Mina Achebe has put the owl's line out on Wrenfold Wireless two nights running, with a crackling commentary, and a first-year was sent out of Wordcraft for whistling the lark's, and Professor Moth came out into the corridor after her, and was heard whistling it too.

Only one house hasn't been asked yet.

The Rookhallow Undercroft is under the kitchens, and it's always warm, and it's always loud, and it smells of hot metal and sawdust and toast. Forges along one wall. Workbenches along the other, cluttered with half-built things: a clock with too many hands, a bicycle with no wheels, something with wings that twitches when you walk past. The brass dragon from the Glimmer Cup lies in the corner, snoring copper sparks. Nobody looks up when you come in. Rookhallows don't look up. They're busy.

The rook's line is rough and clever and it doesn't go where you expect. It hops. It doubles back. It's the hardest of the five, Imogen says, and the most fun.
*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  *present saoirse
  *set singers +1
  @saoirse:laugh Saoirse's already learned it. Of course she has. She's standing on a workbench singing it at the top of her voice while she welds something, with her goggles down and sparks going everywhere, and the forges are singing it back, clanging, in time. She sees you and waves the welding torch, which is a mistake, and three people duck.
*if (st_cas >= 3) and (hurt_cas < 2)
  *present cas
  *set singers +1
  @cas:neutral Cas is there. {@cas_house = "rookhallow"|It's his house, after all.|He came down from Owlcombe to stand in somebody else's roost, which nobody does.} He doesn't sing. He stands at the back, by the door, with his arms folded. But when the song starts, you see his lips moving. "Whatever it costs," he says to you afterwards, low. "I said."
*meet hamish
@hamish:neutral Hamish Galbraith, who asked four people to the Longnight Dance at one table and got four noes, is sitting on an upturned bucket by the forge, eating toast, with his ferret asleep round his neck like a scarf. "Go on, then," he says. "Convince me."

@crook:neutral Professor Crook, at the end of the room with her pipe, raises one eyebrow and says nothing, which from Professor Crook is encouragement.
*choice
  *if wit >= 60
    #"Hester says the rook's line is the hardest one. She says she's not sure anyone can actually sing it."
      *set singers +3
      *set wit +5
      There's a pause. The forges hiss.

      @hamish:neutral Hamish Galbraith puts down his toast and says, in a voice of deep offence, "[i]Can't sing it?[/i]"

      Every Rookhallow in the Undercroft is suddenly standing up. Somebody grabs the sheet out of your hand. Somebody else has a pencil and is already marking it up. Someone starts singing it too fast, and someone else starts singing it too slow, on purpose, to see what happens, and what happens is a sort of glorious collision. By midnight they're singing it in four-part harmony, which Hester did not write, and the forges are clanging along, and Professor Crook is conducting with her pipe.
  *if nerve >= 60
    #"Bram Hollis was Rookhallow."
      *set singers +3
      *set nerve +5
      The Undercroft goes quiet. The hammers stop. Bram Hollis, found on the Rookery stair in November, with a crow on his shoulder that wouldn't leave him.

      @hamish:neutral Hamish puts his toast down. "He was my mate," he says. "He was a pain in the neck. He was my mate." He looks at the forge for a moment, not at anybody. Then he stands up and holds out his hand. "Right. Give it here."

      By midnight there are twenty-five Rookhallows singing the rook's line, rough and clever and hopping, and the forges are singing it back, and the crow that wouldn't leave Bram is sitting on a rafter above the brass dragon, with its head on one side, listening.
  #Sing it. Get it wrong. Let them laugh and fix it.
    *set singers +2
    You sing it and get it completely wrong, and the whole Undercroft laughs.

    @hamish:amused Hamish Galbraith says, "No, no, no, it goes [i]like this[/i]," and sings it right, and then argues with three people about whether he sang it right. That's how Rookhallow learns the rook's line: by arguing about it until two in the morning, and fixing it, and breaking it, and fixing it again, the way they fix everything.

You climb out of the Undercroft into the cold kitchen corridor at some ungodly hour, with sawdust in your hair and your ears ringing, and behind you, under your feet, the forges are still clanging the rook's line, hopping, doubling back, going where you don't expect.
*page_break
*comment ---------------------------------------------------------------- CH20.MAISIE.01
*sid CH20.MAISIE.01
*date 2027-04-18 14:00
*mood day
*place P39 st_ides
*present tully maisie familiar
On the third Sunday in April, you go to St Ide's with Mr Tully again.

He asked on Friday, at the bottom of the east stair, with his cap in his hands, as if he were asking a favour he had no right to. You said yes before he'd finished. So at one o'clock you take the boat across the Mere together, him in the stern with a bunch of daffodils wrapped in newspaper across his knees, and catch the Lantern Train at the Halt, and sit opposite each other all the way to Kingsmere with the fields going by, green now, full of lambs and rain.

He's been different since March. Quieter. He does his round every night, and lights every lantern, and when Morrow's letters come to the stove drawer, he brings them straight to {@tully_fate = "exposed"|the Commander|}{@tully_fate = "kestrel"|the Headmistress|}{@(tully_fate = "st_ides") or (tully_fate = "silent")|you|} without opening them. He's got thinner. He sits in the Lantern Hall at meals and doesn't eat, and looks at the dark patches in the roof where the lanterns went out on the night of the Quiet and still won't light. On the train he talks about the weather, and the ducks on the Mere, and a new kind of wick he's trying. He doesn't talk about the song. He must know. The whole castle knows. He doesn't ask.

St Ide's is just the same. The long red front, the crocuses gone over now along the railings and tulips coming up instead, the long pale corridors, the radio somewhere playing to nobody. The fourth ward, the end bed.

@maisie:hollowed Maisie is by the window in her pink cardigan, looking at the daffodils he brought last time, which are dead. "Hello," she says, pleasantly. "What nice flowers."

@tully:warm "Absalom," he says. "I'm your dad, love." He changes the flowers. He sits down. He takes her hand.

You sit on the edge of her bed. You take her other hand, cold and thin and unresisting. You look.

The spark is still there. Grey, cold, tiny, the last coal in the grate. You know what to do now. With Toby there was nothing, and you had to give him a piece of your own; this is easier, and harder, because there's something, and you could still get it wrong. You don't give her a piece of yours. You just put yours next to hers, the way you'd cup your hands round an ember on a cold morning. And breathe on it.
*choice
  *if (kindling >= 45) and (chill < 3)
    #Hold on. Keep breathing on it. As long as it takes.
      *set maisie_lit true
      *set kindling +5
      It takes an hour. Mr Tully doesn't move. The ward is silent. Outside, it rains, and stops, and the sun comes out. A nurse comes to the end of the bed with a tea trolley, looks at the three of you, and goes quietly away again.

      The spark catches.

      Pale blue. Then gold. Then a colour you've never seen: a clear bright yellow, like a daffodil, like the flowers on her table. It comes up in her the way the sun comes up over the Candlestones, all at once.

      @maisie:tired Maisie Tully blinks. She looks at her hands, in yours. She looks at the window. At the dead daffodils in the bin. Then she turns her head, slowly, and looks at the old man in the chair by her bed, with his cap in his hands and his face wet.

      @maisie:tired "Dad?" she says. Her voice is cracked and small and bewildered. "Dad, you've got old. Why have you got so [i]old[/i]?"

      @tully:hurt Absalom Tully makes a sound you'll hear for the rest of your life, and puts his face in her lap, and holds on.

      @maisie:tired She puts her hand on his head, on his thin white hair, not like a stranger's dog this time. She strokes it. She looks at you over the top of him, wide-eyed, lost, six years gone out from under her. "Who are you?" she whispers. "What's happened? Where's my lantern?"

      You don't know where to start. You tell her your name. It seems like the right place.
  *if (kindling < 45) or (chill >= 3)
    #Try. You have to try.
      *set chill +1
      You try. You breathe on it for an hour, and it flickers, and flickers, and once, for a second, goes gold. Maisie's fingers tighten on yours. Then it sinks back down, grey, to the bottom of the grate, where it's been for six years.

      @tully:sad Mr Tully puts his hand on your shoulder. "It's still there," he says quietly. "That's what matters. It's still there. You'll try again. When you're stronger." He looks at his daughter. "I've waited six years. I can wait."

      He says it kindly. He means it kindly. At the station he buys you a cup of tea from the stall with his own money and stands over you on the platform until you've drunk all of it, and you drink it with both hands wrapped round the cup, and they stay cold.
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
The week before the rehearsal, Wrenfold practises.

It practises everywhere. Imogen has drawn up a rota, of course, and pinned it to every house noticeboard in the castle, and nobody follows it, and it doesn't matter. The Larkspires sing on their balcony at dawn, when the tower gets the sun, and wake half the east side. The Owlcombes sing in the Long Stacks after ten, and Miss Dunne, who has shushed people in the Long Stacks for sixty years, sits at her desk with her eyes closed and doesn't shush anybody. The Heronmeres sing at the bottom of the lake, and the ducks on the Mere swim round and round above the cloister windows as if they're trying to find where the sound is coming from. The Rookhallows sing in the Undercroft, in four parts, and argue.

You go from house to house every night, leading the wren's line, listening. You're learning to hear it: not the notes, the flames. When a house sings, the flames in it lean together, all the colours of it, and you can feel where they're strong and where they're thin, and where somebody's voice is wavering and needs somebody next to them. By Thursday you can do it with your eyes shut. By Friday you can do it across a room. On Friday night you dream the song, all five voices, going round the chimney in five directions, and wake up with your throat sore and {fam_name} staring at you as if you've been singing in your sleep. You probably have.

The first full rehearsal is on the last Saturday in April, at eleven at night, in the Old Cloisters, because Hester says the song should first be sung where she first sang it.

They come. That's the thing you'll never get over. You thought maybe forty, maybe fifty. They come down the east stair and through the door that isn't sealed any more and down into the dark between the carved pillars with their candles, in their dressing gowns and their house scarves, in twos and threes and tens, and they keep coming: Larkspires and Owlcombes and Heronmeres and Rookhallows, first-years and second-years, people you know and people you've never spoken to. Some of the first-years from the back stair come, together, in a clump, holding each other's sleeves, the way they went down. They keep coming until the Old Cloisters are full, wall to wall, pillar to pillar, with candles and faces and breath.
*set singers +1
@kestrel:warm The Headmistress is there, at the back, in her long coat. "I'll take the owl's line," she says, when you look at her. "I was Owlcombe. A long time ago." She doesn't say anything else. She doesn't need to. The Owlcombes near her make room without being asked.

You stand at the front. On the step at the end of the passage, where the wren door is, warm at your back. You've got the wren's line. You lead.

Hundreds of faces in the candlelight, looking at you. Waiting. It goes very quiet. Somebody coughs. Somewhere near the back, a Rookhallow drops a spanner.

You sing.

Up, and round, and back down, like a bird going round a chimney. Behind you, above you, all round you, the others come in, house by house: the lark, high and bright; the owl, low and patient; the heron, still water; the rook, hopping and doubling back. Five voices. Hundreds of throats. Going round and round in five directions at once.

Where they cross, the Old Cloisters [i]ring[/i].
*snapshot choir

{@ch13_way = "home"|It's the kitchen at Viaduct Street. |}It's the high street at Thimble Cross. It's the note that isn't any of the voices, high and clear and bright, like a finger round the rim of a glass, but a thousand times bigger, so that the stone pillars ring with it and the carved wrens on them seem to shiver and the candles all lean towards the middle of the room at once. Behind you, through the wren door, far down, something enormous and warm and slow turns over in its sleep and [i]answers[/i].
*if singers >= 12
  You feel it in every flame in the room. Hundreds of them. Gold and rose and green and blue and copper and pearl, all leaning together, all burning brighter, held. There's no gap. There's nowhere for anything to get in. Many notes, and one heart.
  *achieve wren_song
*else
  You feel it in every flame in the room, all leaning together, burning brighter. But not everywhere. There are gaps. Places in the sound where a house is thin, where a voice wavers and nobody's there to hold it up. It's more than you've ever had. You don't know if it's enough.

When it ends, nobody moves. The last note goes on ringing in the pillars for a long while after anybody's singing it, fainter and fainter, and hundreds of people stand in the candlelight and listen to it go, not breathing. Then somebody laughs, a Larkspire, a high startled whoop, and then everybody's laughing, and hugging, and somebody's crying, and the Headmistress, at the back, is standing very still with her eyes shut.

@tully:sad When it's over, and the Old Cloisters are emptying, candles going back up the east stair in a long bright river, Mr Tully comes down the steps with a thin grey envelope in his hand.

@tully:tense "Came tonight," he says. "In the drawer. Same as always." He holds it out. His hand's shaking. "I haven't opened it. I never do, now."

You open it.

[i]Absalom. Midsummer Eve. The Proving. When every lantern in the Hall is lit and every student is sitting beneath them and the Heartfire is burning at its brightest to feed them all. Leave the boathouse ward open at eleven. Then take the Kindler down to the root. Tell them I only want to talk. Tell them Maisie will wake by morning. A.M.[/i]
*clue e16
@kestrel:grave The Headmistress reads it over your shoulder. She's quiet for a while. "Midsummer," she says. "Of course. Every lantern lit, and the whole school in one room." She folds the letter up and gives it back. "Eight weeks," she says. "Keep singing."
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

Flat. That's the first thing. After seven months of a castle on a hill above a black lake, the Fen is flat as a table in every direction, reeds and water and mud and sky, and the sky is enormous, and the wind never stops. It comes across the reeds from the sea with nothing to stop it for fifty miles, and it gets into the house through every crack, and rattles the windows all night, and hums in the chimney. The first night, you lie awake listening to it and thinking it's the Choir. The second night, too.

The house is old and damp and draughty, with a slate roof and a cat, as Jory promised: a huge ginger tom with half an ear, who sleeps on the kitchen range and despises everybody equally. The drowned chapel is out on the marsh, a stone tower sunk to its windows in black water, with a bell in it that rings when the wind's from the east. Forty Lamplighters in the house and the barns and the boats, with their lamps, watching the reeds. And you, in the middle of it all, being bait.

Nothing comes.

The days are all the same. You get up. You eat porridge in the kitchen with whichever Lamplighters are off watch, who are kind, and tired, and talk about football and their children and never about why you're here. You walk the causeway to the chapel and back with two of them at your elbows, and {fam_name} ranging ahead through the reeds. You practise what you can on your own: steadying the flame of a candle, holding it, letting it go. Jory tries to teach you a card game and loses every hand. The wind blows. The reeds bend and straighten. The bell in the drowned chapel rings, and stops, and rings.

Nearly four weeks. You sit in the window of the upstairs room with {fam_name}, and watch the reeds, and wait. It's spring at Wrenfold; you know it is. Here there's only the wind, and the light changing on the water, and the geese going over at dusk in long ragged lines, going somewhere. Letters come from Wrenfold, every few days, by owl, and you read them over and over until the folds wear through.
*if (st_imogen >= 3) and (hurt_imogen < 2)
  [i]Idris was right: the voices are in the roosts. All four. We're gathering people from all four houses. I wish you were here to lead it; you're the only one who can hear the flames. I. S.[/i]
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

You write back to all of them. You tell them about the cat, and the geese, and Jory's card game. You don't tell them about the wind in the chimney.

@arkwright:grave On the seventeenth of April, Commander Arkwright comes up to your room with a thin grey envelope in her hand, forwarded from Wrenfold by the Headmistress. "From the stove drawer," she says. "Tully's." She gives it to you, and stands at the window with her back to you while you read it.

[i]Absalom. The Kindler has gone to the Fen with Sabine's people, to draw me out. How sweet. I shall not go. I shall come to Wrenfold at Midsummer Eve, at the Proving, when every lantern is lit and the Heartfire burns brightest. If I cannot have the Kindler to carry it, I shall take it without. Leave the boathouse ward open at eleven. A.M.[/i]
*clue e16
@arkwright:grave "He was never going to follow you," says the Commander, to the window, very quietly. "Imelda said so. I didn't listen." She turns round. Her scarred face is grey. "[i]If I cannot have the Kindler to carry it, I shall take it without.[/i] He'll break it. He'll try to take it with his bare hands, and he'll break it, and every lantern in that school will go out." She puts on her hat. "I'm taking my people back to Wrenfold for Midsummer. All forty. You're staying here."

"I should be there. They're singing it without me. I'm the only one who can..."

@arkwright:grave "I know what you are." She says it flatly, without unkindness. "That's why you're staying. If he can't get the Kindler, he can't carry it out. If he can't carry it out, the worst he can do is break it. I'd rather lose the lanterns than lose the lanterns [i]and[/i] you."

@jory:tense Jory Penrose is in the doorway. "Commander..."

@arkwright:grave "[i]Here[/i], Penrose. With you. Somewhere he isn't." She looks at you. "You did what I asked. It was the wrong thing to ask. I'm sorry." She goes down the stairs, and you hear her shouting orders in the yard, and by dark the boats are gone across the Fen, forty lamps going away over the black water in a long line, smaller and smaller, until they're just stars on the horizon, and then not even that. The house is empty except for you, and Jory, and the cat, and the bell in the drowned chapel ringing in the east wind.
*journal [b]Chapter 20.[/b] Nearly four weeks on the edge of Saltmarrow Fen, being bait, with forty Lamplighters. Nothing came. Letters came from Wrenfold: they've found the Wren's Song's five voices, and they're singing without you. Then Morrow's letter to Tully, forwarded: he knew you'd gone, and won't follow. He's coming to Wrenfold at [b]Midsummer Eve[/b], at the Proving, and if he can't have the Kindler to carry the Heartfire, he'll take it without. The Commander has taken her people back to Wrenfold. You've been left behind, with Jory.
*page_break
*goto_scene ch21
`);
