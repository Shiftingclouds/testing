NB.scene("ch24", String.raw`
*mood day
*set ch 24
*chapter 24 The Last Lantern
*comment ---------------------------------------------------------------- CH24.FEAST.01
*sid CH24.FEAST.01
*date 2027-06-26 19:00
*if ending = "H"
  *goto fen
*place P13 lantern_hall
*present kestrel familiar
*comment the rest of each house's year, which you didn't see: your own house's points are yours
*if house != "larkspire"
  *set pts_larkspire +32
*if house != "owlcombe"
  *set pts_owlcombe +30
*if house != "heronmere"
  *set pts_heronmere +34
*if house != "rookhallow"
  *set pts_rookhallow +28
*set house_lantern "larkspire"
*if pts_owlcombe > pts_larkspire
  *set house_lantern "owlcombe"
*if (house_lantern = "larkspire") and (pts_heronmere > pts_larkspire)
  *set house_lantern "heronmere"
*if (house_lantern = "owlcombe") and (pts_heronmere > pts_owlcombe)
  *set house_lantern "heronmere"
*if (house_lantern = "larkspire") and (pts_rookhallow > pts_larkspire)
  *set house_lantern "rookhallow"
*if (house_lantern = "owlcombe") and (pts_rookhallow > pts_owlcombe)
  *set house_lantern "rookhallow"
*if (house_lantern = "heronmere") and (pts_rookhallow > pts_heronmere)
  *set house_lantern "rookhallow"
The Leaving Feast is on the last Saturday in June, and it's the last night of the year, and nobody knows how to behave.
*if ending = "C"
  The Lantern Hall is dark. It's been dark since Midsummer; there's no Heartfire now to light it, and the ten thousand paper lanterns hang cold and grey under the roof like a flock of sleeping birds. So the school has lit it by hand. Candles on every table, hundreds, in jam jars and saucers and bottles. Rushlights in the window bays. A fire in both great hearths. It's the most beautiful you've ever seen it, and it's the last time anyone will eat in it. The wards are gone. The Order says Wrenfold can't be defended without them. In September, the school moves, lanterns and all, to a borrowed house on the coast, and starts again.
*elseif (ending = "G_T") or (ending = "G_M") or (ending = "G_K")
  The lanterns under the roof burn low and blue and flickering, on the broken pieces of the Heartfire, like candles in a draught. Half of them don't burn at all. There are two more empty places at the tables than there were on Midsummer Eve; you don't need to count them. You know them.
*else
  The ten thousand lanterns under the roof burn gold, all of them, low and warm, and among them, right at the top, one white one.

*if (ending = "G_T") or (ending = "G_M")
  *present bassani
  @bassani:sad The Headmistress doesn't stand at the top table when the plates are cleared. She isn't there. Imelda Kestrel is gone, into the dark under the Mere with Aldric Morrow and {@ending = "G_T"|Maisie Tully|Toby Quill}. Professor Bassani stands in her place, grey-faced, with his magnificent moustache drooping, and raises her cup for her, and can't speak for a long time.
  *if ending = "G_T"
    Toby sits beside you, alive, and holds your hand under the table.
  *else
    At the end of the staff table, Mr Tully sits with Maisie beside him, holding her hand, and doesn't look up.

  @bassani:sad "This year," he says at last, "was not a year like other years. We lost people. Some we will get back. She said that to me, on Midsummer Eve, before the song: [i]some we will get back.[/i] I am going to believe her. Twice, if necessary." He lifts the cup. "To the ones who went quiet. And to the ones who sang."

  "To the ones who sang," says the Hall.

  @bassani:neutral "The House Lantern," he says, "goes to {@house_lantern = "larkspire"|Larkspire|}{@house_lantern = "owlcombe"|Owlcombe|}{@house_lantern = "heronmere"|Heronmere|}{@house_lantern = "rookhallow"|Rookhallow|}." He doesn't say it twice.
*else
  @kestrel:warm The Headmistress stands at the top table, when the plates are cleared, and raises her cup.
  *if ending = "G_K"
    @kestrel:grave She's thinner. Her hair's gone white since Midsummer. Toby's place at the Heronmere table is empty, and Priya sits beside it with a hare in her lap, and the Headmistress looks at it for a long time before she speaks.
  *if ending = "E"
    @kestrel:grave She looks at you before she speaks. Everyone does, now. Nobody sits within three places of you. Every candle on the table leans towards you, and everyone sees it, and nobody says anything.

  @kestrel:grave "This year," she says, "was not a year like other years." The Hall is silent. "We lost people. Some of them we'll get back, and some of them we won't. We lost Magnus Grey, who was braver than any of us knew. We found out things about this school, and about ourselves, that we'd hidden for forty years." She looks round the Hall. "And we learned a song. All of us. Every house. Four hundred voices. I have been a teacher for thirty years and I have never seen anything like it, and I never will again." She lifts the cup. "To the ones who went quiet. And to the ones who sang."

  "To the ones who sang," says the Hall.

  @kestrel:neutral "The House Lantern," she says, "for the most points this year, goes to..." and for the first time in a year, she almost smiles. "{@house_lantern = "larkspire"|Larkspire.|}{@house_lantern = "owlcombe"|Owlcombe.|}{@house_lantern = "heronmere"|Heronmere.|}{@house_lantern = "rookhallow"|Rookhallow.|}"
*if house_lantern = house
  And your table goes up like the Brightfire. People are standing on the benches. Somebody lifts you onto their shoulders. High over the top table, the {@house = "larkspire"|gold and rose|}{@house = "owlcombe"|plum and silver|}{@house = "heronmere"|sea-green and pearl|}{@house = "rookhallow"|black and copper|} lantern flares so bright it lights the whole Hall.
  *achieve house_lantern
*else
  And the {@house_lantern = "larkspire"|Larkspire|}{@house_lantern = "owlcombe"|Owlcombe|}{@house_lantern = "heronmere"|Heronmere|}{@house_lantern = "rookhallow"|Rookhallow|} table goes up like the Brightfire, and you cheer for them anyway, as loud as anyone, because they sang.
*if ending = "D"
  You watch it all from your seat, and you can't feel any of it. Not the lanterns, not the flames, not the warm slow pulse under the floor. You can see it. You can't feel it. People keep coming up to you all evening and holding your hands and not knowing what to say. On Monday you'll get the Lantern Train south, and the ordinary train to Wrexley, and walk from the station with your trunk bumping behind you on its little wheels. The Headmistress says you'll always have a place here. You know you will. You also know you won't come.
*if ending = "F"
  At the end of the feast, Commander Arkwright finds you at the doors, in her greatcoat. "Monday," she says. "The Fen. He's out there with a piece of you in him, and you're the only one who can feel where it is." You nod. You already knew.
*page_break
*goto epilogue
*comment ================================================================ fen
*label fen
*place P40 fen_chapel
*present jory familiar
You read about Midsummer in the paper.

Not the ordinary paper. The Lamplighters' paper, the [i]Evening Lamp[/i], that comes to the house on the Fen by owl, two days late, folded small. Jory brings it up to your room on the twenty-second with a face like a man bringing bad news, and it is, and it isn't.

[b]MIDSUMMER AT WRENFOLD: THE CHOIR BROKEN, THE SCHOOL STANDS.[/b] Four hundred students, all four houses, singing a song nobody had sung in four hundred years, led by the Headmistress. The Grey Choir's note broken all through the castle. Forty Lamplighters, and a trap at the boathouse that didn't work, and one that did. Aldric Morrow in the root of the rock under the school, at the Heartfire, and the Headmistress going down after him alone. And then, at the bottom, in small print, the thing they couldn't quite say: the Heartfire cracked, and held, because Imelda Kestrel put her own flame into the crack, all of it. She's alive. She's in the Infirmary. She has no magic left. Morrow is gone, into the Fen, with a stolen flame.

Into the Fen. You look out of the window at the reeds and the water and the drowned chapel's tower, and the bell ringing in the east wind, and wonder how close he went.

There's a letter, too. It came with the paper.
*if (st_rowan >= 3) and (hurt_rowan < 2)
  [i]We held it. We sang and we held it. I sang the lark's line and I wasn't brave at all, I was terrified the whole time, and I did it anyway, and I thought about you the whole time. Come back in September. Please. R.[/i]
*elseif (st_imogen >= 3) and (hurt_imogen < 2)
  [i]I wrote it all down. Every minute. You'll want to read it. I kept a space in the notes where you should have been; it's blank. Come back and fill it in. I. S.[/i]
*elseif (st_saoirse >= 3) and (hurt_saoirse < 2)
  [i]We did it. I stood still the whole song. Four minutes. Longest I've ever stood still in my life. Wish you'd seen. S.[/i]
*elseif (st_noor >= 3) and (hurt_noor < 2)
  [i]The Headmistress is going to be all right. I've been sitting with her. She asks about you. So do I. Eat something. N.[/i]
*elseif (st_cas >= 3) and (hurt_cas < 2)
  [i]I went down to the door. I couldn't get through; it had shut behind her. I stood outside it all night. Whatever it costs, I said. It turns out it costs standing outside a door all night. C.[/i]
*elseif (st_idris >= 3) and (hurt_idris < 2)
  [i]Question of the day: would you have gone down? I think you would. I think that's why she sent you away. I've stopped being angry about it. Mostly. I. P.[/i]
*else
  [i]We sang it. All of us. It was the most beautiful thing I've ever heard. We missed you. Custard misses you. Toby would have got it all wrong and nobody would have minded. P. M.[/i]
*page_break
*label epilogue
*comment ---------------------------------------------------------------- CH24.EPILOGUE.01
*sid CH24.EPILOGUE.01
*date 2028-06-26 20:00
*mood dusk
*comment ---- the anchor: one per ending
*if ending = "A"
  *place P13 lantern_hall
  A year on, you're in the Lantern Hall again, at the Proving, watching the new first-years light their lanterns.

  You came back in September. Most of you did. Second year is quieter, and harder, and better; you know where the stairs go now. You teach the wren's line to the first-years in the Old Cloisters on Thursday nights, and they get it wrong, and so did you. Every Midsummer from now on, the whole school will sing the Wren's Song at the Proving, all five voices. The Headmistress has made it a rule. Hester's portrait, over the Weathervane Room fire, has said three words since, all of them [i]louder[/i].

  Aldric Morrow is in the Order's keeping, in a quiet house in Kingsmere, an old grey man who can't take anything any more. The Commander says he sits by the window and doesn't speak. The flames he stole went home on Midsummer night, and at St Ide's that summer, they started, slowly, to wake: Delphine, and Bram, and Odile Pellow, who reopened her stall on the green at Thimble Cross at Christmas and polished your wand and hummed the whole song, all five voices, under her breath.
*if ending = "B"
  *place P39 st_ides
  A year on, you're at St Ide's, on a Tuesday, with Idris, as you are every Tuesday.

  You have a list. Idris keeps it, in his cramped tiny hand. Every name in every ward. Every week, the two of you sit down beside one more bed, and you take someone's cold hands, and look, and find the spark, and breathe on it. It takes you a whole day, now; you haven't much fire left, and it comes back slowly. But one a week is fifty-two a year, and the wards at St Ide's are getting quieter, and emptier, and the tall windows have the blinds up.

  Aldric Morrow lives in a cottage on the edge of Thimble Cross that the Headmistress found for him. He can light a candle. That's all. He sits in his window at night with a candle burning blue, and people from the village leave him bread, and some days he walks down to St Ide's with a bag of oranges and sits by the beds of the people he took, and says their names, and asks them to forgive him, and some of them do.
*if ending = "C"
  *place P34 thimble_cross
  A year on, Wrenfold lives in a borrowed house on the cliffs above the sea, a draughty old manor with too many chimneys, and every lantern in it is lit by hand, every night, by whoever's on the rota.

  You're on the rota on Tuesdays. It takes two hours. You go round with a brass taper like Mr Tully's, lighting them one by one, and you know every one of them, and you think of him every time. It isn't the same. It's colder. There are no wards, only people: Lamplighters on the cliff path, and students who take turns sitting up at night, and the Wren's Song, which everybody knows, and sings, at the slightest excuse. The old castle across the Mere stands empty, dark, a big stone house on a hill. The Order walled up the root. Aldric Morrow died there, in the dark, in the first week of July, starving, with nothing left to take; they found him sitting against the cold rock where the Heartfire had been, looking up. Nobody else did die. Everybody lived. That's what you chose. You'd choose it again.
*if ending = "D"
  *place P01 home_kitchen
  A year on, you're in the kitchen at 7 Viaduct Street, with the yellow light, and the wobbly chair, and the eight-fifteen shaking the cups on their hooks.

  You got your old job back. Glossop never asked. Dev knew better than to. Your kettle doesn't boil on its own any more. The candles don't lean. You remember everything: the Lantern Hall, and the Mere at Candlewake, and the Heartfire in the root of the rock, and your hands on the crack. You remember it every day. Some days that's worse than forgetting would be. Most days it isn't.

  And they come. That's the thing nobody told you would happen. On the first Saturday of every month, the doorbell goes, and there's somebody on the step: Toby, with a cake that hasn't caught fire; Nana Pearl's been teaching him scones. Or a Lamplighter with a letter. Or the Headmistress herself, once, in her long coat, on your doorstep in Wrexley, holding a white candle in a jam jar. "The Heartfire's burning bright," she said. "Every lantern. You did that." And she came in, and sat on the wobbly chair, and drank your tea, and stayed till midnight.
*if ending = "E"
  *place P37 candlestones
  A year on, you're on the Candlestones, alone, on Midsummer Eve, burning.

  You left Wrenfold in July. You had to. Every flame in the castle leaned towards you, and people started to be afraid, and you couldn't stop it. You can feel everything. Every lantern in the valley. Every candle in Thimble Cross. Every flame in every person who walks past you in the street, and you could lean on any of them, and they'd bend, and you never do. Not yet. Not once. Every day you don't. That's what your life is now: every day, not.

  Aldric Morrow died in the Order's keeping in the autumn, an old grey man with nothing left. Before he died, he asked to see you. You didn't go. He sent a message instead, by Jory Penrose, who still comes to see you when nobody else will. [i]Now you know,[/i] it said. [i]I'm sorry. I'm sorry you know.[/i]

  Hester's fire is warm in you. It's the loneliest thing in the world.
*if ending = "F"
  *place P40 fen_chapel
  A year on, you're on the Fen, with the Lamplighters, still hunting.

  You can feel him. That's why they need you. The piece of your flame he tore out burns in him like a coal, and you can feel where it is, the way you can feel the sun on the side of your face with your eyes shut: south, or east, or close, or far. Twice this year you've been close enough to see him, a tall grey figure on a causeway at dusk, turning to look back at you. Twice he's gone into the water. Jory Penrose, who's your partner now, says you'll have him by Christmas. The Commander says nothing. Out on the black water, the drowned chapel's bell rings in the east wind, and you count the strokes, and wait.
*if ending = "G_T"
  *place P16 heronmere
  A year on, Toby Quill is baking in the kitchens at Wrenfold at four in the morning, the way he always wanted to, and nothing he makes catches fire, and he brings you the first of everything.

  He doesn't remember much of the root. You don't tell him. He knows the Headmistress is gone, and Maisie Tully, and he knows you chose, and once, at the Frost Market, lying on the ice looking up at the lanterns, he said: "I'd have chosen her. The Headmistress. You know that. She'd have known what to do." And then: "I'm glad you didn't." And he never said it again. The Order is still looking, under the Mere, on the Fen, for an old grey man with two lanterns on strings. Mr Tully does his round every night, and lights every lantern, and doesn't speak much. Wrenfold burns low and blue on what's left of Hester's fire.
*if ending = "G_M"
  *place P28 tully_cottage
  A year on, Maisie Tully lives with her father in the Lanternwarden's cottage by the boathouse, and helps him with the round, and lights the high lanterns, the ones he can't reach, with her hand.

  She came back from the root with her spark relit and her memory mostly whole. She's learning. She's taking her Burning Year again, seven years late, in the first-year classes, with people half her age, and she's good. Mr Tully is so proud of her that he can't talk about it without crying. He can't talk about the rest of it at all. The Headmistress is gone, and Toby Quill, into the dark with Aldric Morrow, and every Sunday now Mr Tully goes to the edge of the Mere and stands there with his cap in his hands, the way he used to stand by Maisie's bed. You go with him, sometimes. Neither of you says anything.
*if ending = "G_K"
  *place P25 weathervane_room
  A year on, the Headmistress's hair is white, and she hasn't slept a whole night since Midsummer, and she has turned the whole of Wrenfold, and the Order, and everything she has, towards one thing: getting them back.

  Toby. Maisie Tully. Taken into the dark with Aldric Morrow. She has maps of the Fen on every wall of the Weathervane Room, and Hester's journal open on the desk, and you, most evenings, in the chair across the fire, reading. "You were right," she said to you once, in the autumn. "To choose me. Not because I mattered more. Because I'm the one who won't stop." Priya comes up to the Weathervane Room every Sunday with Custard the hare, and sits with you both, and doesn't ask. Hester's portrait, over the fire, watches the three of you, and says nothing.
*if ending = "H"
  *place P01 home_street_night
  A year on, you're back at Viaduct Street, and you don't know if you'll ever go back to Wrenfold.

  They wrote. They all wrote, all summer: come back in September. The Headmistress wrote herself, in green ink, from the Infirmary, with no magic left: [i]A place is kept for you. It always will be.[/i] You didn't go. You're not sure why. Because the first time it mattered, you weren't there. Because the song was sung without you and it held, and you can't decide if that's the best thing that ever happened or the worst. The kettle still boils on its own when you look at it. Some nights you stand at the window and look at the viaduct and hum the wren's line under your breath, and think about the road not taken, and whether it's still there.
*comment ---- supporting consequences
*if ending != "G_M"
  *if maisie_lit
    Mr Tully still does the round every night, with his long brass taper, and Maisie does it with him; she lights the high ones with her hand. {@tully_fate = "exposed"|The Order never charged him. Arkwright said he'd paid.|The Headmistress never told the Order all of it. She said he'd paid.} He knows every student's name. He says [i]mind the step[/i]. On Candlewake, Maisie gave him a new candle, twelve dips, and he's lit it every night since.
  *else
    Mr Tully still does the round every night, with his long brass taper, and goes to St Ide's every Sunday, and sits by Maisie's bed, and says [i]Absalom. I'm your dad, love.[/i] {@(ending = "A") or (ending = "B") or (ending = "C") or (ending = "D") or (ending = "E")|But the spark's brighter now. You went with him in the spring and looked. One more Sunday, you think. Maybe two.|The spark's still there. You go with him, some Sundays, and breathe on it, and one day it'll catch.}
*if ending != "G_T"
  *if (ending = "G_M") or (ending = "G_K")
    Toby's hare, Custard, lives with Priya now. Priya still plants a row of seeds every Greening, and says the same name over each one, and one of these years, she says, he'll be there to see them come up.
  *elseif toby_lit or (ending = "A") or (ending = "B") or (ending = "C") or (ending = "D") or (ending = "E")
    Toby bakes. Of course he does. He got an apprenticeship in the Wrenfold kitchens in the summer, and nothing he makes catches fire, and every Friday he brings a Victoria sponge to whoever needs one most. He and Priya are getting married at Brightfire. He's asked you to hold the rings. "Don't drop them," he said. "Or do. It'd be funny."
  *else
    Toby's still at St Ide's, by the window, with the hare on his knees. Priya goes every Sunday. So do you, when you can. You sit on the end of the bed and he says, politely, [i]you've got a kind face[/i], and one day, you tell yourself, you'll have enough fire to give him again.
*if told_nana
  Nana Pearl knows everything. She made you tell her all of it, in her kitchen, with the budgie listening, and she cried at Magnus Grey, and at the end she said, "Well. Your great-gran would be proud," and put the kettle on. She's learned the underneath of the Wren's Song properly now, all of it. She sings it at the washing-up. The toffee tin is still snowing in her airing cupboard.
*else
  Dev still texts you at midnight. [i]u alive?? glossop asking about the overtime sheet again. I said you ate it.[/i] He's never asked where you went. He never will. At Christmas, he gave you a mug that says WORLD'S MOST MYSTERIOUS COLLEAGUE, and you laughed so hard you cried, and he watched you, and grinned, and didn't ask.
*comment ---- the relationship, or the life you chose
*if (final_rel = "rowan") and (final_shape = "together")
  *present rowan
  @rowan:warm And Rowan. Rowan, who stood still. He bakes bread now, on Sundays, at four in the morning, in whatever kitchen you're both in, and he's frightened of the oven every single time, and he tells you so, and does it anyway. He's warm all the time. You've stopped noticing. Some nights you fall asleep against him and wake up with the blankets steaming. He says it's the best thing that's ever happened to him. He says it most days. He means it every time.
*if (final_rel = "rowan") and (final_shape != "together")
  Rowan writes, sometimes. He's gone back to the fire service, in Kingsmere, where they have a unit now for people like him, who walk into fires and come out. He's still frightened. He says so, in every letter, at the end, like a signature. [i]Still frightened. Still going in. R.[/i] You keep them all.
*if (final_rel = "imogen") and (final_shape = "together")
  *present imogen
  @imogen:warm And Imogen. Imogen, who made no plan. She's making plans again now, of course; she can't help it; but the plans have you in them, in pencil, underlined, and she shows you them before she's finished, which she never used to do for anyone. {@kit_lit|Kit comes to Sunday lunch, and sings in the bath, the same three lines, and she pretends to be annoyed.|She still goes to St Ide's every other Sunday, and you go with her, and she talks to Kit about the weather.} She sleeps. That's the main thing. She sleeps now.
*if (final_rel = "imogen") and (final_shape != "together")
  Imogen joined the Order in the end. Arkwright took her in September without being asked twice. She writes in precise pencil, once a month, and at the bottom of every letter there's a line she's crossed out, and you can never quite read what it said.
*if (final_rel = "saoirse") and (final_shape = "together")
  *present saoirse
  @saoirse:warm And Saoirse. Saoirse, who stood still. She hasn't, much, since; she's built eleven things this year, and finished nine, which she says is a world record. But at night she stops. Every night. She lies down beside you and goes still, completely still, and says, "Look. I'm not going anywhere," and every night she means it, and every morning she's still there.
*if (final_rel = "saoirse") and (final_shape != "together")
  Saoirse's in Cardiff, near her dad, and her mam, now, too; they have Sunday dinner, all of them, once a month, which she describes in her postcards as "a war crime" and "actually quite nice". She's building a boat. She says when it's finished she'll sail it up the coast and knock on your door. You believe her, mostly.
*if (final_rel = "cas") and (final_shape = "together")
  *present cas
  @cas:warm And Cas. Cas, who said it without a sneer. His grandmother wrote back. She put your name in the family book, in ink, next to his, and sent you a photograph of the page, and a pot of jam, and a list of instructions for handling Drummonds that runs to four sides. He laughed so hard when he read it that he had to sit down. He laughs a lot now. People still stare at him. He's stopped noticing. He only ever looks at you.
*if (final_rel = "cas") and (final_shape != "together")
  Cas went back to Hollin Ferry in the end. Not to the family; to the house. He's turning it into something, a school or a hospital or a place for late flames whose families took their names out of the book; he's not sure yet. He writes. At the end of every letter: [i]Whatever it costs. C.[/i]
*if (final_rel = "noor") and (final_shape = "together")
  *present noor
  @noor:warm And Noor. Noor, who asked. She still works too hard. She still says [i]in a minute[/i]. But at the end of every shift, she comes home, and sits down, and lets you make her tea, and put her feet up, and she says, every single time, as if it's still a surprise: "You did that without me asking." You always will.
*if (final_rel = "noor") and (final_shape != "together")
  Noor runs the Infirmary at Wrenfold now; Matron Holloway retired at Christmas and put her name forward before anyone could argue. She writes on the back of prescription pads. [i]Eat something. Sleep. I'm all right. I mean it this time. N.[/i]
*if (final_rel = "idris") and (final_shape = "together")
  *present idris
  @idris:warm And Idris. Idris, who stopped studying you. He hasn't written a word about you in a year; he says so, proudly, often. He writes about everything else. At night he reads to you, in bed, from whatever he's reading, in his quiet exact voice, and asks you one question a day, and you've never once run out of answers.
*if (final_rel = "idris") and (final_shape != "together")
  Idris writes a book, in the end: [i]The Kindlers: A History[/i]. There's a chapter about Aldric Morrow, and a chapter about Hester Wren, and a last chapter with no name in it, about someone who lit a candle in a corridor in their first term. He sends you the first copy. On the flyleaf, in his cramped hand: [i]Question of the day. I. P.[/i]
*if (final_rel = "single") or (final_rel = "")
  And you. Just you, and it's enough. Friends on every side of your life, in both your worlds: Toby's cakes and Nana's letters and Dev's texts at midnight. People who'd go into the dark for you, and have, and people you'd go for. Nobody at the centre of it but you. You chose that. You'd choose it again.
*comment ---- the last image
*if ending != "D"
  At the end of the night, you take one paper lantern, and hold it in your hands, and don't use your wand. It lights. {@ending = "E"|It burns every colour at once, too bright to look at, and you let it go quickly, before anyone sees.|It burns white, the way it did the first night, the way it always will.} You let it go, and it rises, turning slowly, up into the dark, and you watch it until it's a star among stars.
*else
  At the end of the night, somebody puts a lit candle into your hands. You can't light them any more. But somebody always lights one for you. It burns white, the way yours used to, and you hold it until it's burned right down, and it's enough.

*if ending = "A"
  *ending A
*elseif ending = "B"
  *ending B
*elseif ending = "C"
  *ending C
*elseif ending = "D"
  *ending D
*elseif ending = "E"
  *ending E
*elseif ending = "F"
  *ending F
*elseif ending = "G_T"
  *ending G_T
*elseif ending = "G_M"
  *ending G_M
*elseif ending = "G_K"
  *ending G_K
*else
  *ending H
`);
