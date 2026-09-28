NB.scene("ch22", String.raw`
*mood night
*set ch 22
*chapter 22 Midsummer Eve
*comment ---------------------------------------------------------------- CH22.PROVING.01
*sid CH22.PROVING.01
*date 2027-06-20 20:00
*place P13 lantern_hall
*present kestrel arkwright lettice grey familiar
Midsummer Eve is the shortest night of the year, and the Proving is the oldest thing Wrenfold does.

Every student who came through a doorway of light this year lights a lantern of their own, in the Lantern Hall, at sunset, and lets it go up to join the ten thousand under the roof. That's all. That's the whole ceremony. You've been here a year; you've kept your flame; you're proven. And your lantern stays up there, among all the others, for as long as the school stands.
*if order_offer = "returned"
  *present jory
  You nearly miss it. The Lantern Train was late out of Kingsmere, and the boat was slow, and you come into the Hall at a run at ten past eight with Jory Penrose behind you in his too-big greatcoat, both of you soaked from the spray, and four hundred heads turn.

  @arkwright:grave Commander Arkwright, at the staff table, stands up. Her face goes through several things very fast. Then she comes down the Hall, and stops in front of Jory, and says, in a voice like a blade, "Penrose." And then, to you, quite differently: "Good." And then, to Jory again: "You're on the east door. Don't think this is over."

  @jory:laugh "No, Commander," says Jory, and grins at you all the way to the east door.

  Imogen pushes a sheet of paper into your hands as you go past the Owlcombe table: the wren's line, in her pencil. "We learned it without you," she says. "All spring. We're not very good. We need you to lead."
*else
  You're there at sunset, with everyone. You've been there all day, really. You couldn't have been anywhere else.

The Hall has never been like this. Every lantern lit: the ten thousand, and the dark patches from the night of the Quiet relit at last, one by one, by Mr Tully on his ladder all week, so the whole roof is one great drifting ceiling of warm gold light, low and close. The four tables full. Every face turned up. And along the walls, in their greatcoats, forty Lamplighters, not looking up at all.

One by one, the first-years go up to the front and light their lanterns. Some of them with wands. Some of them with a word. One Rookhallow boy with a spark off a flint, because it's how he did it the first time. Each lantern flares its house colour, and rises, and goes up among the others, and the Hall cheers for every single one.

When it's your turn, you walk up the Hall with four hundred people watching, and you take the paper lantern, and you don't use your wand. You just hold it in your hands and let it light.

It burns white. It did on the first night; it does now. It goes up out of your hands, slowly, turning, a white light among ten thousand gold ones, and it rises all the way to the very top of the Hall, higher than any of the others, and stays there.

The Hall is completely silent. And then someone at the Heronmere table starts clapping, and then everyone is.

The dead walk at Midsummer. Everybody knows that; nobody quite believes it until they see it. As the sun goes down behind the western hills and the long windows go from gold to rose to violet, the ghosts come.
*meet lettice
@lettice:ghost By the great doors, silvery-blue and see-through, in her old-fashioned school robes, with her frizzy hair and her round sweet face: Lettice Crane, who was hollowed forty years ago, who walked straight to you at Emberfall. She's looking at you, and at the white lantern at the top of the Hall. She's smiling, very sadly.

@grey:ghost And at the staff table, in his old chair, where the candle has burned in front of his empty place since March: Magnus Grey.

He's pale and silvery and you can see the carved back of the chair through him. His hands are folded on the table in front of him, and they're not scarred. They're whole. He's looking out at the Hall the way he looked at it on Longnight: at the lanterns, not the people. Watching.

He sees you looking. His colourless eyes meet yours across the Hall, the way they did on Longnight. And he says, very quietly, so that only you hear it, although you're forty feet away: "Watch the lanterns at eleven."
*if accused_grey
  @grey:ghost And then, even more quietly: "You were right to ask. Everyone should have asked." And he almost smiles.

@kestrel:grave The Headmistress, at the top table, in her midnight-blue robes with the silver circlet in her hair, sees him too. She doesn't say anything. She just inclines her head to him, very slightly, the way you'd greet a colleague across a staffroom. And then she looks at the clock.

Ten past nine.
*page_break
*if plan22 = "cloisters"
  *goto cloisters
*if plan22 = "boathouse"
  *goto boathouse
*comment ---------------------------------------------------------------- CH22.HALL.01
*sid CH22.HALL.01
*date 2027-06-20 23:00
*place P13 lantern_hall_dark
*present kestrel familiar
At eleven o'clock, every lantern in the Lantern Hall gutters at once.

Ten thousand of them. Like a breath going out. The warm gold ceiling flickers, and dims, and goes blue, and then grey, and there's a sound from four hundred people that isn't a scream, not yet, just a sort of intake, all together. And into the grey, from everywhere, from the stones and the windows and the lanterns themselves, comes the hum.

Low. Long. Lonely. Louder than you've ever heard it. It isn't eight singers or twelve. It's all of them. The whole Grey Choir, somewhere in the castle, and the note coming through every lantern in the Hall at once, the way it came through one lantern on Longnight, and you feel every flame in the room lean towards it.

You stand up on the bench.
*if (st_rowan >= 3) and (hurt_rowan < 2)
  *present rowan
  @rowan:tense At the Larkspire table, Rowan's already standing, with his hands blazing orange, holding the grey back from his end of the table like a man leaning on a door.
*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  *present saoirse
  @saoirse:tense At the Rookhallow table, Saoirse's on her feet with the rook's sheet in her fist, looking straight at you. Waiting.

You open your mouth, and you sing the wren's line.

Up, and round, and back down, like a bird going round a chimney. Alone, for four bars. Your voice thin and shaking in the grey Hall. Odile, in the high street. Toby, in the cloister. Just one.

And then the houses come in.
*page_break
*goto song
*comment ================================================================ cloisters
*label cloisters
*comment ---------------------------------------------------------------- CH22.CLOISTERS.01
*sid CH22.CLOISTERS.01
*date 2027-06-20 23:00
*place P29 old_cloisters
*present idris familiar
At eleven o'clock, down in the Old Cloisters, the lanterns on the carved pillars gutter all at once, and go grey, and the hum comes down the east stair like water.

You're at the wren door. It's warm at your back, warmer than it's ever been, humming its own slow note under the Choir's. Idris is beside you, with his wand out and his glasses pushed up on his forehead and his face very calm. Six Lamplighters across the passage in front of you, lamps raised.
*if (st_cas >= 3) and (hurt_cas < 2)
  *present cas
  @cas:tense And Cas, who asked to be here. "Whatever it costs," he said, at nine o'clock, when the Headmistress tried to send him back up to the Hall. "This is the door. This is where it's owed." He's standing at your other side with his grandfather's hands held out in front of him, and the air round them is shimmering, like Grey's did on the stair.

They come down the east stair. Grey robes, hoods, humming, a dozen of them, slow, not hurrying, round and round the spiral and out into the passage between the pillars. The Lamplighters' lamps flare white, and hold, and the grey robes stop.

@idris:tense "They're not trying to get past," says Idris, very low. "Look. They're just holding us here." He looks up at the ceiling, at forty feet of stone between you and the Lantern Hall. "They're keeping the Kindler away from the song."

And then, far above you, through the stone, faint, like music from another house on a still night: somebody starts to sing the wren's line.

It isn't you. It's the Headmistress. You'd know her voice anywhere. Alone, for four bars. And then the houses come in.
*page_break
*goto song
*comment ================================================================ boathouse
*label boathouse
*comment ---------------------------------------------------------------- CH22.BOATHOUSE.01
*sid CH22.BOATHOUSE.01
*date 2027-06-20 23:00
*place P12 boathouse
*present arkwright tully morrow familiar
At eleven o'clock, down in the boathouse, Mr Tully kneels on the wet stone at the water's edge, where the old ward runs under the Mere wall, and puts his hand flat on the stone, and says a word, and the ward opens.

You feel it go. A draught, cold, from under the water. The boat-lamps along the jetty gutter and go grey. And across the black Mere, in the midsummer half-dark, the water starts to move.

They come up out of the lake. Grey robes, streaming water, walking up the slipway out of the Mere as if it's a staircase. Ten. Twenty. More. Humming. And in the middle of them, taller than the rest, with his hood down and his long white hair wet on his shoulders, walking slowly, as if his bones hurt, Aldric Morrow.
*meet morrow
@morrow:neutral He's gaunt. That's the first thing. The long beautiful laughing face from the photograph in the file is still there, somewhere, under forty years, but it's gone grey as ash, and the cheeks have fallen in, and the eyes are pale and colourless as water. He's wearing a wick-shaped iron pendant on a chain. His hands are bare and grey.

And inside him, when you look, there's no flame of his own at all. Just stolen ones. Dozens of them, maybe hundreds, stuffed into the cold place where his own should be, burning in all the wrong colours, guttering, starving, feeding on each other. Delphine's is in there somewhere. Bram's. Odile's. {@toby_lit|Toby's was, once.|Toby's.}

He stops at the top of the slipway. He looks at Mr Tully, kneeling on the stone. And then he looks past Mr Tully, straight at you.

@morrow:warm "There you are," says Aldric Morrow, gently. His voice is soft and cultured and very tired. "I've been looking forward to this for forty years."
*if maisie_lit
  @tully:grave Mr Tully gets up off his knees. It takes him a long time. "She's awake, Aldric," he says. "Maisie. She woke in April. The Kindler did it, in an afternoon. She eats toast." His voice shakes and doesn't break. "You've got nothing left to give me."

  @morrow:neutral Morrow looks at him for a long moment. Something moves under the grey, and goes. "Then I'm sorry, Absalom," he says. "You were my only friend."
*else
  @tully:tense Mr Tully gets up off his knees. "Is she..." he says. "Will she wake? By morning? You said..."

  @morrow:warm "By morning," says Aldric Morrow softly. "I promise." And Mr Tully stands there on the wet stone with his cap in his hands and doesn't move, and you can see him wanting to believe it, and not.

@arkwright:grave "[i]Now![/i]" roars Commander Arkwright.

And the trap springs. Thirty Lamplighters, from the boats, from the rafters, from behind the boathouse doors, lamps flaring white all at once, a ring of light round the top of the slipway so bright it hurts, shouting the Lamplighter's word: [i]LUME![/i]

@morrow:hungry Aldric Morrow closes his eyes, and hums.

One note. Not the Choir's. His own. Low and long and lonely and older than anything, and every lamp in the boathouse goes out at once, all thirty, like candles in a door. And in the dark, he walks through them. Not fast. Just walking, between the Lamplighters stumbling and shouting and clutching their chests, up the boathouse steps, towards the castle, with his Choir streaming up out of the water behind him.

He looks back at you once, from the top of the steps. "Come down to the root," he says. "When you're ready. I'll wait."

And far above, from the Lantern Hall, faint through the stone: somebody starts to sing the wren's line. It isn't you. It's the Headmistress. Alone, for four bars. And then the houses come in.
*page_break
*label song
*comment ---------------------------------------------------------------- CH22.SONG.01
*sid CH22.SONG.01
*date 2027-06-20 23:30
*present kestrel familiar
*if order_offer = "returned"
  *set singers 4
  *if (st_rowan >= 3) and (hurt_rowan < 2)
    *set singers +1
  *if (st_imogen >= 3) and (hurt_imogen < 2)
    *set singers +1
  *if (st_saoirse >= 3) and (hurt_saoirse < 2)
    *set singers +1
  *if (st_cas >= 3) and (hurt_cas < 2)
    *set singers +1
  *if (st_noor >= 3) and (hurt_noor < 2)
    *set singers +1
  *if (st_idris >= 3) and (hurt_idris < 2)
    *set singers +1
*if plan22 = "hall"
  *set singers +2
*if singers >= 12
  *set song_held true
*else
  *set fought_morrow true
The lark, high and bright. The owl, low and patient. The heron, still water. The rook, hopping and doubling back. {@plan22 = "hall"|And your wren's line leading them all, up and round and back down.|And the Headmistress's voice leading them, the wren's line, up and round and back down.} Five voices. Hundreds of throats. Going round the chimney in five directions at once, in the grey Hall, against the hum.

And where they cross, the Lantern Hall [i]rings[/i].
*if song_held
  It rings like the Old Cloisters rang in April, like the kitchen at Viaduct Street, but vaster, so vast you feel it in your teeth and your bones and the soles of your feet: a note that isn't any of the voices, high and clear and bright, a finger round the rim of a glass the size of the sky. And the hum can't find the gap. There isn't one. Every house, every voice, every throat, so many notes and one heart that there's nowhere for the Choir's note to get in.

  And the lanterns come back.

  From the top. From one white lantern at the very top of the Hall, a ripple of gold going out, like a stone dropped in water, like Longnight, gold and gold and gold, ten thousand lanterns flaring back to life, and the grey going out of the Hall like a tide going out, and the hum [i]breaking[/i]. You hear it break. All through the castle, in every corridor, on every stair, the Grey Choir's one note shattering into a hundred voices that don't know what to do, faltering, stopping, and grey-robed people standing still in the passages with their hoods falling back and their faces bewildered, like people waking up.
  *if plan22 = "cloisters"
    In the Old Cloisters, in front of you, the dozen grey robes on the east stair stop humming. One of them sits down on the step and puts his face in his hands. The Lamplighters take them without a fight.
  *if plan22 = "boathouse"
    In the boathouse, in the dark, the Lamplighters' lamps flare back to life, one by one, and the Choir members still coming up out of the water stop on the slipway, knee-deep, and stand there, lost.
*else
  But not everywhere.

  It rings, and it holds, and the lanterns over the house tables flare back gold, and nobody in the Hall is taken; hundreds of voices are too many for the hum to get in. But there are gaps. You hear them, the way you heard them in April: places in the sound where a house is thin, where a voice wavers and nobody holds it up. And the hum finds them. It comes through the gaps like wind through a broken pane, not into the Hall, past it, round it, down.

  You feel it happen. Three flames, somewhere in the castle, snatched up in grey threads and pulled away down through the stone, towards the root. You know all three.
  *if toby_lit
    Toby, from the Heronmere table, in the middle of singing the wren's line off-key, stops, and goes grey, and is gone from his seat, and Priya screams.
  *else
    Toby, from his bed in the Infirmary, where he's been sitting by the window, politely, stroking the hare.
  *if maisie_lit
    Maisie Tully, from the Infirmary, where she was eating toast.
  *else
    Maisie Tully, whom somebody brought from St Ide's that afternoon, in a grey robe, saying her father sent for her.
  And the Headmistress. Imelda Kestrel, who{@plan22 = "hall"| went to the wren door when the singing started| felt the gaps, and left the song to the houses, and ran for the wren door}, to stand in front of it, the way Magnus Grey stood on the stair.

Aldric Morrow walks through the song.

He's the only one who can. There's no flame of his own in him for the song to hold; just the stolen ones, crammed and guttering, and he walks through the ringing Hall, or past it, or under it, you can never afterwards say which, the way a man walks through rain. Down the east stair. Through the door that isn't sealed. Into the Old Cloisters. To the wren door, warm as a hand, humming its slow note.

And it opens for him. Of course it does. He was a Kindler once. The door remembers.
*if plan22 = "cloisters"
  He walks past you to do it. So close you could touch him. The Lamplighters' lamps go out as he passes, one by one. Idris's wand drops from his hand. And Aldric Morrow stops at the door, and looks at you, and says, very gently, "Come down. I'll wait." And goes through.
*if song_held
  He goes down alone. Everything he brought with him is broken on the stairs behind him. And the thing in the root is waiting for him, and so is the thing he came for, and so, if you go, are you.
*else
  He goes down with three flames held in grey threads behind him like lanterns on strings. And the thing in the root is waiting for him, and it's already cracking; you can feel it, even up here, a flicker in every lantern in the castle, as if something far below has been struck.

You go down.

You don't decide to. Nobody could stop you. Behind you, somebody's shouting your name; above you, the song goes on, holding the Hall, all five voices, without you. You go through the wren door into the dark, and down.
*journal [b]Chapter 22.[/b] Midsummer Eve. {@order_offer = "returned"|You came back from the Fen with Jory, just in time. |}At the Proving your lantern burned white and rose higher than any other. The dead walked: Lettice Crane, and Magnus Grey, who said, [i]watch the lanterns at eleven[/i]. At eleven every lantern guttered and the whole Grey Choir hummed. {@plan22 = "hall"|You led the Wren's Song from the bench.|}{@plan22 = "cloisters"|You held the wren door, and heard the Headmistress lead the song far above.|}{@plan22 = "boathouse"|At the boathouse, you saw Aldric Morrow for the first time; he put out thirty lamps with one note and walked through the trap.|} {@song_held|The song held. The Choir's note broke all through the castle.|The song held the Hall, but not everywhere: through the gaps, Morrow's Choir took Toby, Maisie Tully and the Headmistress, down towards the root.} Morrow walked through the song to the wren door, and down. You followed.
*page_break
*goto_scene ch23
`);
