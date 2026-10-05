NB.scene("ch18", String.raw`
*mood night
*set ch 18
*chapter 18 The Lanternwarden
*comment ---------------------------------------------------------------- CH18.TULLY.01
*sid CH18.TULLY.01
*date 2027-03-10 21:00
*place P22 library
*present idris imogen familiar
The Order has had Idris in for questioning twice since the Quiet.

You didn't tell anybody but the Headmistress what Professor Grey said on the stair. It doesn't matter. By Tuesday you hear it coming back to you, on the Larkspire stair, from two third-floor landings up, in a voice that doesn't know you're below.

"[i]I was watching the wrong man.[/i] That's what he said. Word for word," says a boy's voice. "My cousin's in the Order."

"Your cousin's a postman," says another.

"He [i]delivers[/i] to the Order. Listen. Who did Grey watch? Every night. You've seen him, in the Stacks, lurking about behind the Kindler shelves."

A pause. Feet on stone. Then, lower: "Penhallow."

"Penhallow. With the satchel he won't let anyone touch. Walks about at two in the morning. Reads nothing but Kindlers. And they say he's had a file on Aldric Morrow in there since last year. Stolen. Out of the Stacks."

"Who says?"

"Everyone says."

The voices go on up the stair and round the turn and out of hearing, and you stand where you are with your hand on the cold rail, and don't follow them, because you're afraid of what you'd do if you did.

People move away from Idris in corridors now. Somebody wrote something on the door of the Owlcombe Stacks and Professor Kovač had it scrubbed off before breakfast, but not before half the school had read it.

*page_break

It's been a strange, grey, stunned sort of week. Lessons started again on Monday, because the Headmistress said they must, and nobody learned anything. Warding has been cancelled until further notice; the door of the Warding Hall is shut, and there's a candle burning on the floor outside it that someone keeps replacing. There are still Lamplighters on the stairs. The dark patches in the roof of the Lantern Hall haven't changed. And every night at ten, Mr Tully still goes out on his round with his long brass taper and his stepladder, and the lanterns he can light come on behind him, one by one, gold, all the way up the hill.

The Long Stacks at nine on a Wednesday night are almost empty. The rain's back, ticking on the high windows. The green reading lamps make little pools of light down the length of the long tables, and between them the shelves go up into the dark, and somewhere a long way off Miss Dunne is putting books back, one soft thump at a time.

@idris:guarded Idris is at the long reading table under the green lamps, the one where you and Imogen and he read Morrow's file. He's not reading. He's sitting with his hands flat on the table, looking at them. His satchel's on the floor by his feet, for once, instead of on his shoulder. He doesn't look up. "If you're going to ask," he says, "Arkwright's asked it better. Twice."
*if (st_idris >= 3) and not(b_idris_suspect) and (hurt_idris < 2)
  *choice
    #"I'm not going to ask. I know it isn't you. I've always known."
      *set b_idris_suspect true
      *set st_idris 4
      *set heart +5
      @idris:surprised He looks up then. Properly, fast, as if you've hit him. "You can't know that," he says. "You can't. I've given everyone every reason. I've been creeping about with that file for eighteen months..."

      "I know. And I know why. And I know you."

      @idris:hurt He stares at you, with his dark eyes very bright behind his round glasses. Then he takes his glasses off and puts his face in his hands, just for a moment, the way Imogen did in November. "Say that to Arkwright," he says, muffled. "Say it exactly like that." Then, taking his hands away: "No. Don't. I don't care what Arkwright thinks. I only cared what you thought." He puts his glasses back on. His hands are shaking. "I didn't know that until right now."

      @idris:warm He moves his books along the table, so you can sit, and then moves them back, and then moves them again, as if he doesn't quite know what to do with his hands. "They asked me where I was at eleven on Friday," he says. "I was here. On my own. Reading about the old Kindlers, for the fourth time. Miss Dunne saw me. Nobody believes Miss Dunne; she's eighty." A small, crooked smile. "I'm going to tell her you said that. She'll be delighted."
    #Sit down across from him and wait. Let him decide what to say.
      *set st_idris +1
      *set wit +5
      You sit down across from him and don't say anything. The rain ticks on the windows. Miss Dunne's books go thump, thump, a long way off. You wait.

      @idris:neutral After a while he looks up, and something in his face eases, very slightly. "Thank you for not asking," he says. He turns one of his hands over on the table and looks at the palm, as if there might be an answer written on it. "They asked me the same thing eleven times. Different words. I counted." A pause. "I'd have done it the same way, in their place. That's the worst of it."
*elseif b_idris_suspect
  @idris:warm Then he looks up, and sees it's you, and something in his shoulders comes down. "Ah," he says. "It's you. Good. You're the one person in this castle I don't have to explain myself to." He moves his books so you can sit. "Arkwright asked me what I was doing at eleven o'clock on Friday. I told her I was reading. She wrote it down as if it were a confession."
  *set st_idris +1
*else
  You sit down across from him. He doesn't say anything else, and neither do you, and you're not sure, if you're honest, which of you is more uncomfortable. He turns a page he hasn't read. You look at the rain.

@imogen:tense Imogen arrives ten minutes later with an armful of paper and the look she gets when she's been awake for two days. She drops the lot on the table between you, sits down, and starts laying it out. She's got a pencil behind each ear and ink on her chin and she hasn't noticed either.

@imogen:grave "Everything," she says. "Everything we know. Since September. On one table. If we can't see it all at once we'll never see it." She's already arranging it: sheets of paper, notes, her own neat pencil lists, a map of the castle traced from the Wrenfold Map. "Tell me what you've got. All of it. Anything. Even if it's stupid. Especially if it's stupid."
*if (st_rowan >= 3) and (hurt_rowan < 2)
  *present rowan
  @rowan:tense Rowan comes in with a tray of tea from the kitchens and puts it down and doesn't leave. "I'm staying," he says. "I don't know anything useful. I'm staying anyway." He pours the tea, badly, and hands it round, and then sits on the end of the table, where the lamp makes his hair go the colour of a fox, and keeps very still, which for Rowan is a kind of listening.
*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  *present saoirse
  @saoirse:neutral Saoirse turns up with a roll of brown paper and a box of drawing pins, and has half the clues pinned up on the end of a bookcase with string between them before Imogen can object. "It's how you find a fault in an engine," she says, winding red string round a pin. "Lay out every part. See which one doesn't sit right."
*if (st_cas >= 3) and (hurt_cas < 2)
  *present cas
  @cas:guarded Cas comes in last, and stands at the end of the table with his arms folded, and says, "My family's in this up to its neck. I'd like to know how deep." Nobody asks him to sit down. After a minute, he does anyway.
*if (st_noor >= 3) and (hurt_noor < 2)
  *present noor
  @noor:tired Noor comes straight from the Infirmary, still in her uniform, and sits down, and says, "I've got forty minutes. Go." She unpins the watch from her robes and puts it on the table in front of her, face up, where she can see it.

@imogen:tense "Right." Imogen licks her pencil, which she only does when she's frightened. "From the beginning. {name}, you first. You've been everywhere."

You don't know where to start. You look at the paper, and the lamp, and Idris's hands, and then it's easier to start with the first thing than with the worst.
*if e01
  "Delphine's lantern. The night before they took her. The wick in it was grey." You can still smell it, if you let yourself. "Not burned grey. Grey all through. And it smelled of marsh. Like a ditch in summer."

  @imogen:grave Imogen writes [i]grey wick, marsh[/i], and underlines [i]marsh[/i] twice. "Wicks," she says, not looking up. "Who changes the wicks?" Nobody answers. She doesn't seem to expect them to.

*if e03
  "The ward-stone by the Glasshouses. The south one. The night Delphine went." You swallow. "It wasn't broken. It was unlocked. From our side. The castle side."

  @idris:grave Idris opens his eyes. "From our side," he repeats, very quietly, the way you'd repeat a diagnosis to be sure you'd heard it. "You didn't say that in October."

  "I didn't know what it meant in October."

  @idris:grave "No," he says. "None of us did."

*if e02
  "The lanterns hum." It sounds stupid out loud. You say it anyway. "They've hummed since September. I thought I was imagining it. And on Longnight, the one over the gallery went grey at midnight. Just for a second."

  @imogen:tense "I remember." Imogen's pencil has stopped. "Everybody was looking at the dancing."

  "Mr Tully wasn't. He was looking straight at it."

  Imogen writes that down. It takes her a long time, for six words.

*if e08
  "The Wrenfold Map." You turn one of Imogen's traced sheets round, so it faces you, and put your finger on it. "The ward lines. The ones that had been opened. Here, and here, and here." Your finger goes along the corridors, up the east stair, down to the water. "They're not random."

  @idris:grave Idris leans across the table and looks at where your finger has stopped. He doesn't say anything. He doesn't have to. He's walked that line himself, at two in the morning, and passed the man who walks it every night.

*if e15
  "The old passage from the boathouse into the Old Cloisters. They bricked it up after Bram." You look at Idris. "And Bram was taken anyway. So either somebody went round the bricks, or somebody didn't need to."

  @idris:neutral "Or somebody had a key to the door at the other end," says Idris. "Which is a shorter list."

*if e04
  "The Glimmer Cup. The hoop." You make yourself go slowly. "There was oil on it. Grey oil. It came from the Fen. Saltmarrow. And the only place in Wrenfold that keeps any..."

  @imogen:grave "Is the Lanternwarden's shed," Imogen finishes, flatly. "I checked. I asked Professor Crook in December, for a project I made up." She presses the heels of her hands against her eyes, pencils and all. "I made up a whole project, and then I didn't let myself think about the answer."

*if e09
  "Candlewake." Your voice goes funny on it, and you have to wait. "Mr Tully had Maisie's candle. On the ice. He said somebody told him she might come back. He said, [i]somebody told me there's a way[/i]."

  @imogen:hurt Imogen's head comes up sharply. She knows what it is to be told there's a way. You can see it in her face: the hope, and the hate of the hope, in the same second. She writes it down without a word.

*if e06
  "And Professor Grey." It's hard to say his name in here. "His six years in the Choir. We had it backwards. All of it. He was the Order's man, the whole time."

  @idris:grave "He was watching," says Idris. "All year. In the Stacks, on the stairs. Watching me." He turns his hand over on the table and looks at it. "And I thought he was one of them, and he thought I was, and the whole time we were both looking the wrong way."

*if e07
  "Bram's last argument. With Cas, in the Undercroft, the night Bram was taken." You make yourself say the rest. "The Order wrote it down as a threat."
  *if (st_cas >= 3) and (hurt_cas < 2)
    @cas:guarded "It was a threat," says Cas, from the end of the table, without unfolding his arms. "A stupid one. He'd been calling my grandfather a coward in front of everyone for weeks, and I told him somebody would shut his mouth for good one day." A muscle moves in his jaw. "He was right about my grandfather, as it turns out. I didn't know that then."

  @imogen:neutral Imogen crosses something out, a whole line, very firmly. "A row in the Undercroft doesn't open a ward under the Mere," she says. "It's noise. Good. I hate noise."

*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  @saoirse:tense Saoirse has been pinning each thing up as it's said, a scrap of paper and a drawing pin, and running red string between them. She steps back from the bookcase now, winding the last of the string round her fingers, and doesn't say anything. Most of the string runs to the same place: an empty pin in the middle, with nothing on it yet.

@imogen:grave Imogen reads back down her list. Her lips move. Then she looks up at you, and waits, and you know what she's waiting for, because it's the last thing, and the worst, and you're the only one who heard it.

*page_break

"On the stair," you say. "At the end. He said to tell the Headmistress it was the boathouse ward." You have to stop. The lamp hums over your head. "Opened from inside. On the round." Nobody moves. "And then he said: [i]I was watching the wrong man.[/i]"

@imogen:grave Imogen puts down her pencil and looks at the table. So does everyone. Nobody wants to be the first to say it. The lamp over the table hums faintly, the way every lantern in Wrenfold has hummed since September, and for the first time you all hear it, and look up at it, and look away.

@idris:grave "On the round," says Idris quietly. "He didn't say [i]on somebody's round[/i]. He said [i]the[/i] round. There's only one round in this castle."
*choice
  *if (e02 and e04) or (e02 and e08) or (e04 and e08) or (e04 and e09) or (e08 and e09) or (e02 and e09)
    #"It's Mr Tully." You've got enough. You can see it, all of it, on the table.
      *set suspect "tully"
      *set wit +10
      Nobody says anything. Somebody breathes out, long and slow. Imogen closes her eyes.

      @imogen:grave "The wicks," she says. "The oil. The lanterns humming. The wards on his round. Maisie." She opens her eyes. "Every single thing on this table goes through his hands. Every single night." Her voice cracks, just slightly. "He knows all our names. He lit my lantern on the first night. He said [i]mind the step[/i]."

      @idris:grave "He's known about the Heartfire for forty years," says Idris, very low. "He told you so. He lights his taper off it, at the cracks of the door." He takes his glasses off and rubs his eyes. "He's been the kindest man in this castle to every one of us. That's not a reason it isn't him. It might be the reason it is."
  *if not((e02 and e04) or (e02 and e08) or (e04 and e08) or (e04 and e09) or (e08 and e09) or (e02 and e09))
    #"It's Mr Tully. I don't know how I know. I just do."
      *set suspect "tully"
      *set heart +5
      @imogen:grave Imogen looks at you, and at the table, where there isn't quite enough to prove it; and then at Idris, who nods, slowly. "The round," she says. "Grey said the round." She puts her pencil down. "I don't want it to be him. That's how I know you're right. I don't want it to be him so much."

      She picks the pencil up again, and writes his name at the top of a clean sheet, very small, and then sits and looks at it as if she's written something rude in church.
  #"Professor Bassani. He's Deputy now. He was here in 1986."
    *set suspect "bassani"
    *set wit +5
    @imogen:neutral Imogen writes it down, carefully, under a question mark. "He was here," she says. "He's had keys to everything for thirty years." She taps the pencil on the paper, twice. "And he says everything twice, so if he'd done it, he'd have told us. Twice." It isn't a joke, quite. Nobody laughs. She looks at the table, and at the word [i]round[/i], and doesn't say what she's thinking.
  #"I don't know. I don't want to say a name I can't take back."
    *set suspect "nobody"
    *set heart +5
    @idris:neutral Idris nods. "That's fair," he says. "That's more than the Order's managed." He looks at the table, and at the word [i]round[/i], and doesn't say what he's thinking either. Neither does anybody else. The silence goes round the table like a cup being passed, and nobody drinks.

@idris:grave "There's one way to know," says Idris at last. "Without accusing anybody. Without the Order." He looks at you. "Look. In his cottage. When he's on the round. If there's nothing, there's nothing, and we never say this out loud again."

@imogen:tense "That's breaking and entering," says Imogen automatically. Then: "Friday. He does the long round on Fridays. The whole east side and the boathouse lawn. It takes him two hours." She doesn't look at anyone. "I've been timing it since November. I didn't know why."
*page_break
*comment ---------------------------------------------------------------- CH18.TULLY.02
*sid CH18.TULLY.02
*date 2027-03-12 22:00
*place P28 tully_cottage
*present tully familiar
The Lanternwarden's cottage is at the edge of the castle grounds, where the lawns go down to the Mere by the boathouse: a little stone house with a slate roof and a crooked chimney and a lantern over the door that's always lit. Everybody knows it. Everybody's walked past it. Nobody you know has ever been inside.

Friday night is cold and clear after a week of rain. The wind's dropped. The Mere is black and flat and full of stars, and the grass on the lawn is stiff with the beginnings of a frost, so every step you take down it crunches, very faintly, like sugar. You've been standing in the shadow of the boathouse for twenty minutes, with {fam_name} pressed against your legs, and your hands in your armpits, and the smell of tar and wet rope and old boats all round you.

At ten o'clock exactly, the cottage door opens, and Mr Tully comes out with his long brass taper and his stepladder, the way he does every night, and pulls the door to behind him without locking it, and sets off up the lawn towards the castle. He walks slowly, with his bad knees. He's humming something under his breath. You can't hear what. His taper bobs away up the hill, gold, stopping at every lantern on the path, one by one, and every lantern it stops at comes alight.

*page_break

You wait until the taper is a spark at the top of the hill. Then you go.

The door isn't locked. Nobody locks doors at Wrenfold.

Inside, it's one room downstairs, small and warm and very tidy, with a black iron stove, and a rag rug, and one armchair with the stuffing coming out, and a kettle, and a shelf of lantern parts: wicks and glass and little brass fittings, all in rows, sorted by size. There's one cup on the draining board, and one plate, and one knife and fork, washed and put to dry. It smells of lamp oil and tea and the peppermints he always has in his pocket. On every wall, on every shelf, on the mantelpiece and the windowsill and the back of the door, there are photographs of a girl.

A little girl on a beach with a bucket. A girl of ten on a bicycle, laughing. A thin fair teenager with her father's long face, scowling in a school uniform. A young woman, twenty-four, in Heronmere sea-green and pearl, holding up a lopsided paper lantern at the edge of the Mere, grinning so hard her eyes have disappeared. Maisie. Maisie, Maisie, Maisie. There must be two hundred of them.

You stand on the rag rug and turn round slowly, and she's everywhere you look. You feel like a thief. You are one.

You don't have to look hard. It's in the stove drawer, the one for kindling, under the kindling: a bundle of letters, tied with string. Thin grey paper. Dozens of them. The handwriting on every envelope is long and looping and beautiful and old-fashioned, and there's no stamp, and no postmark, and on the back of every one, instead of a return address, a small grey drawing of a wick.

*page_break

Your hands are cold. You open the top one.

[i]Absalom. You have done well again. She is so close now. When I have the Heartfire, and the Kindler to carry it, there will be enough flame for everything I have ever wanted, and I will give Maisie back to you whole, as she was, laughing. I have promised you this for three years and I have never lied to you. Leave the old ward under the boathouse open on the fifth. Only for an hour. No one will be hurt who can't be mended. Tell me the Kindler's name. A.M.[/i]
*clue e14
The fifth. The fifth of March. The night of the Quiet.

[i]No one will be hurt who can't be mended.[/i] Toby, with jam on his pyjamas. Professor Grey on the stair.

You read it again. The words don't change. You find you've sat down on the rag rug without meaning to, with the letter on your knee, and {fam_name} has gone very still by the door, ears up, listening.

You don't hear the door. You hear the taper, set down very carefully on the shelf by the door, brass on wood. You turn round, with the letter in your hand, and Mr Tully is standing in the doorway of his own house in his patched brown coat, with his flat cap in his hands, looking at you.

@tully:sad He doesn't shout. He doesn't come any closer. He looks at the letter in your hand, and at the open stove drawer, and at you, and his long kind face doesn't do anything at all for a moment. Then it just... falls. Like a house when the last wall goes.

*page_break

@tully:sad "I came back for my gloves," he says. "Left my gloves." He looks at them, on the arm of the chair. He doesn't pick them up.

You can't speak. You're still holding the letter. You think about putting it down, back in the drawer, as if that would undo it, and you can't make your hand do that either.

@tully:sad "You'd best sit down, {name}," he says. "Properly, love. Not on the floor like that; you'll get cold." Then he sees there's only the one chair, and his face does something helpless. "No. Stay there, then. Stay by the stove." He takes off his cap. He stands holding it. "I've been wanting to tell somebody for three years. I used to practise. Up the ladder, doing the high ones. I'd say it to the lanterns." He almost smiles. "They never said anything back."

He doesn't start. He goes past you, carefully, the way you'd go past someone asleep, to the stove, and opens the door of it, and puts in two sticks of kindling from the drawer you've emptied, and fills the kettle at the little sink and sets it on the hob. He gets down a second cup from the shelf. He looks at it, and takes a clean cloth off the rail, and wipes it, inside and out, although it's already clean. You don't know why that's the thing that nearly undoes you, but it is.

*page_break

"Mr Tully." Your voice comes out cracked. "The fifth. The boathouse ward." You hold the letter up, a little, so he can see it. "Was it you?"

@tully:sad He has his back to you, at the stove. He doesn't turn round. The kettle ticks as it warms. {fam_name}, by the door, hasn't moved.

@tully:sad "Yes," he says.

That's all, for a while. Just the one word, in his soft old voice, to the kettle.

You'd thought, if it was him, that there'd be more to it. That it would be like the end of a story, with a reason in it that made everything fit. There's just an old man in a patched coat with his back to you, and one cup on the draining board, and the smell of peppermints.
*set know_insider true

"Why?"

@tully:tense He turns round then. He looks at you, and then past you, at the wall behind your head, and you don't have to turn to know what's on it. "You've been standing in the why for ten minutes, love," he says gently. "Every wall."

He sits down in the armchair. It creaks. He puts his cap on his knee and his big oily hands on top of it, and looks at them.

@tully:sad "I'll tell it from the start," he says. "Or I'll get it wrong. I've only ever said it to the lanterns, and they don't interrupt." He breathes out. "You'll not believe the start. Nobody would, now."

*page_break

You wait. The kettle begins, very faintly, to tick and whisper.

@tully:sad "I was twenty-seven," he says. "Under-lampman. The old Lanternwarden had the round then, and I carried his ladder, and I hadn't a spark in me. Not one. The students looked straight through me. You'd pass one on a stair, forty times a day, and they'd not see you. You were furniture." He turns his cap a quarter-turn on his knee. "All except one. Tall lad. Black hair. Laughed with his whole face. He used to come out on the round with me. At night. Just for the company. He'd light the high ones, the ones up past the top of the ladder, with his bare hand. Like that." He lifts one finger, and there's nothing on the end of it, and he puts it down. "He knew my name. First week. He knew everybody's name."

"Aldric Morrow."

@tully:sad He nods. It seems to cost him something. "I was there," he says. "In the Warding Hall, in the February. Up the ladder, doing the lamps, when it happened."

"You saw it."

@tully:sad "I saw it." He's quiet a moment. "I'll not tell you what it looked like. Not tonight. I've told the lanterns, and that's enough telling for one thing." His thumb moves on the brim of his cap. "Afterwards they sent him home and said he'd mend, and nobody said a word. Not the staff. Not the students. Not the under-lampman up the ladder with his mouth shut." He looks up at you. "I didn't say anything. None of us did. I want you to know that bit. It's the start of it, the not saying."

*page_break

The kettle's singing now, thin and high. He gets up and sees to it. His hands don't shake at all: they've made tea for forty years, and they know how. He warms the pot. He puts the tea in, two spoons and one for the pot. He pours. He brings yours over and puts it into your hands and closes your fingers round it, the way you'd do for a child, and then sits down again with his own and doesn't drink it.

@tully:sad "Then Maisie," he says.

He doesn't go on at once. He looks at the photograph on the mantelpiece: the frozen Mere, and the lopsided candle, and the grin.

@tully:sad "Six years ago. Her Burning Year. Heronmere, she was. She was going to do lanterns when she'd finished, like me, only properly, with a spark. She used to tease me about it." A breath. "She'd been to Thimble Cross on a Sunday, for a new pair of boots, and she walked home by the shore path because it was a nice evening. A mile from this door. A mile." His voice doesn't change. His hands stop turning the cap. "They found her sitting on the shingle, looking at the water. She asked the Lamplighter who found her what his name was."

You don't say anything. There isn't anything.

@tully:sad "I've been to St Ide's every Sunday since. Three hundred and twelve Sundays." He says the number the way other people say their address. "She asks me what my name is. Every time. I tell her. She says [i]that's a nice coat[/i]. It's the same coat. She's said it three hundred and twelve times." He looks down at the brown sleeve. "I can't get a new one. I tried, once. I couldn't go in, in a new coat. What if that was the thing she knew."

*page_break

The tea's hot through the cup. You hold on to it.

"And then the letters."

@tully:tense "Three years ago." He nods at the stove drawer. "In there. Under the kindling. I came in off the round one night and there was a smell of marsh in the room and a letter in the drawer, and I've never known how. I still don't." He puts his cup down on the floor by the chair. "Hand me the bottom one, love. The oldest. It's softer than the others. I've read it more."

You find it, at the bottom of the bundle, and it is softer: the paper gone like cloth at the folds, the grey drawing of a wick on the back nearly rubbed away with handling. You hold it out. He doesn't take it.

@tully:sad "Read it," he says. "I know it. I'd like to hear it in somebody else's voice. Just the once."

You unfold it. Your hands aren't steady, and the paper whispers.

"[i]Absalom. You carried the ladder, and I lit the high ones. Do you remember? You were the only one who didn't look away from me afterwards. I have not forgotten that. I know about Maisie. I am so sorry. I believe she can be brought back, and I believe I am the only one left who can do it. I will need a little help. A.M.[/i]"

@tully:sad He's got his eyes shut. "[i]You were the only one who didn't look away.[/i]" He opens them. "I did look away. I looked away for forty years. But he wrote that, and I thought: he remembers me. Somebody remembers me." He lifts his hands and lets them fall on his knees. "He only wanted small things, at first."

*page_break

"Like what?"

@tully:tense "A ward left open an hour. An old one, one nobody walks. A lantern with a grey wick in it, here and there, so he could hear through the lanterns what was said under them." He's looking at the floor now. "A drop of the Fen oil from my shed. I've had a barrel of it thirty years, for the old brass lamps; it burns slow. I told myself it was nothing. Oil. Wicks. I've been trimming wicks my whole life."

"Delphine."

@tully:sad He flinches. It's small: just his eyes, closing, and opening again. "[i]No one will be hurt who can't be mended,[/i]" he says. "It's on every letter. You've seen it. Every one." His voice is very low. "I told myself Delphine would be mended. When he had the Heartfire, and a Kindler to carry it, there'd be flame enough to relight every soul in St Ide's, and her with them. Her first, he said. Maisie first, and then all the others. I told myself she'd only be asleep a little while." He swallows. "And then Bram. And I told myself the same. And then Odile, in the high street, in front of all of you. And I stood at the back of the Hall that night and lit the lanterns for supper."

He stops. You think he's finished. He hasn't.

@tully:sad "Every Sunday, on the train, I'd do the sum," he says. "Delphine and Bram and Odile, on one side. On the other, Maisie, and all of St Ide's. Hundreds. I'd do the sum all the way to Kingsmere, and it always came out right." He looks up. "It always came out right, love. That's how you know you've gone wrong. When the sum's always right."

*page_break

"And Professor Grey?"

You don't know you're going to say it until it's said, and then it's in the room, and you can't take it back, and you wouldn't.

@tully:sad The old man goes quite still. "I went up the east stair," he says. "After. Three in the morning, when they said it was over, to see to the lamps. They'd come back on their own; they didn't need me. And he was still there on the step, under a blanket, waiting for the stretcher." He looks at his hands, at the oil in the cracks of them. "I trimmed every wick on that stair anyway. Every one, going past him. I didn't know what else to do. I've never known what else to do but see to the lamps."

The stove ticks. You drink your tea because you don't know what else to do either, and it's too sweet, he's put sugar in it without asking, the way you would for someone in shock.

@tully:sad He's looking at the mantelpiece again. At Maisie on the frozen Mere with her candle.

@tully:sad "Toby Quill," he says. "I lit his lantern the first night. I said [i]welcome home, lad[/i]. He said [i]thanks, mister[/i], and asked me if there was cake." And Absalom Tully puts his face in his big oily hands and weeps.

It's not loud. It's the worst thing you've ever heard, and it's not loud at all. It's an old man's shoulders going up and down in a patched coat, and a sound coming out from behind his hands like something with a hinge that's been shut for a very long time.

You sit on the rug with your tea going cold. You don't go to him. You can't, yet. You don't leave, either.
*if (candle = "toby") or (fr_toby >= 4)
  You think of Toby in the Infirmary, stroking the hare, asking [i]is she mine?[/i]

@tully:tense When he can speak again, he says, without looking up: "I never told him your name. He asked. Every letter. [i]Tell me the Kindler's name.[/i] I knew from the first night. The white lantern. I never told him." He wipes his face on his sleeve. "That's the only thing. In three years. The only thing I didn't give him."
*if morrow_knows
  @tully:sad "He knows now, though," he says. "Not from me. From the Hush. She saw you." He shakes his head. "The hoop at the Glimmer Cup. That was his, not mine. He had her put my oil in it. To see who'd reach for the Keeper when he fell. To see who'd light up." He looks at you. "I'm sorry. I didn't know till after."
*else
  @tully:sad "The hoop at the Glimmer Cup," he says. "That was his, not mine. He had her put my oil in it. To see who'd reach for the Keeper when he fell. To see who'd light up." He looks at you. "I don't know if you did. I didn't want to know."

The stove ticks. Outside, the lantern over the door creaks on its bracket in a breath of wind off the Mere.

@tully:sad "What'll you do?" he says at last. Very quietly. "You can do what you like, love. I'll not stop you. I'll not run. Where would I run? She's at St Ide's."
*choice
  #Take it to Commander Arkwright. All of it. Tonight.
    *set tully_fate "exposed"
    *set nerve +10
    @tully:sad He nods, slowly, as if that's what he expected. As if he's been expecting it for three years, every night, every time a step went past his door. "That's right," he says. "That's right and proper." He looks at the photographs. "Only... it's Sunday, the day after tomorrow. Would you ask her, love. Would you ask the Commander if I can go and see Maisie. One more Sunday. She can send as many of her people as she likes."

    "I'll ask."

    @tully:sad "Thank you." He reaches for his gloves at last, and puts them on, one and then the other, carefully, as if he's going out. Then he just sits there in them, with his hands on his knees.
  #Take it to the Headmistress. She knew Aldric too. She should decide.
    *set tully_fate "kestrel"
    *set heart +5
    @tully:sad "Imelda," he says, and something in his face twists. "She was in his year. She'll be... she'll have to..." He nods. "Yes. Take it to Imelda. She's earned it."

    @tully:sad He's quiet, turning his cap. "She used to bring me a mince pie," he says. "Every Longnight. Forty years. Up the ladder, if I was on it." He looks at the letters in your lap. "Would you ask her if I can go to St Ide's on Sunday. One more Sunday. I'll come straight back."
  #Go with him to St Ide's first. On Sunday. You want to see Maisie's flame with your own eyes before you decide anything.
    *set tully_fate "st_ides"
    *set kindling +5
    @tully:surprised He looks at you, startled, as if you've spoken a foreign language. "You'd come," he says. "You'd come and look at her." His voice breaks. "Nobody's ever looked at her. Not properly. The healers stopped looking years ago." He grips the arm of the chair. "Sunday. The two o'clock train. I'll not run, love. I swear it on her."

    @tully:sad He looks round the little room, at all the Maisies on all the walls, as if he's asking them whether he's allowed. "She'll like you," he says. "She won't know she does. But she will."
  #Keep it between the two of you. For now. If Morrow trusts him, that might be the only way to get close to Morrow.
    *set tully_fate "silent"
    *set wit +10
    @tully:tense He stares at you. "You'd... use me," he says slowly. "Against him." Something moves in his face. Not hope. Something harder. "He'll write again. He always writes again." He looks at the stove drawer. "All right. All right. Whatever you want me to write back, I'll write it. Whatever you want me to leave open, I'll leave it, or I'll not."

    @tully:tense He breathes in. "But on Sunday I'm going to see my girl," he says. "Come with me. See what I've been doing it for."

You leave the cottage at midnight with the letters inside your coat. They're very light. You'd thought they'd be heavier.

The frost has come down properly while you were inside. The lawn is white, and your footprints from the boathouse are the only ones on it, a dark line straight to his door. Behind you, the lantern over the door is still lit. It's always lit. Halfway up the hill you look back, and he's standing in the doorway under it, in his coat and his gloves, watching you go, and he raises one hand, the way he does to students on the stairs, and goes in.
*page_break
*comment ---------------------------------------------------------------- CH18.TULLY.03
*sid CH18.TULLY.03
*date 2027-03-14 14:00
*mood day
*place P39 st_ides
*present tully maisie cas familiar
St Ide's is a quiet Victorian building on a quiet street in Kingsmere, and it's the saddest place you've ever been.

You don't know that yet, from the outside. From the outside it's just a long red-brick front with white windows, and a little garden with a bench in it, and railings, and a brass plate by the door so worn you can't read it. There are crocuses coming up along the railings, purple and white. A woman is walking a dog past on the pavement. Across the road there's a newsagent's with a board outside, and a bus goes by, and the whole ordinary city of Kingsmere is going about its Sunday afternoon as if nothing in the world is wrong.

Inside, there are long pale corridors and long pale wards and tall windows with the blinds half down, and a smell of floor polish and boiled vegetables and something else, underneath, faint and dry and cold, like the inside of a cupboard that hasn't been opened in years.
*if tully_fate = "exposed"
  *present arkwright
  @arkwright:grave Commander Arkwright brought you herself, on the Lantern Train, with two Lamplighters, and Mr Tully between them with his cap in his hands. She's standing at the end of the ward now, by the door, in her greatcoat, with her arms folded. She said yes to one more Sunday. She didn't say why. You think you know. She's been to St Ide's more than anybody; she's carried half the people in it through that door.
*if tully_fate = "kestrel"
  *present kestrel
  @kestrel:grave The Headmistress came. She didn't have to. She said, "I'll bring him myself," in a voice nobody argued with, and she sat opposite him on the Lantern Train all the way to Kingsmere and didn't say a word. She's standing by the window now, with her arm still strapped across her chest, looking at the girl in the bed.
*if (tully_fate = "st_ides") or (tully_fate = "silent")
  You came on the two o'clock Lantern Train, the two of you, sitting opposite each other in a compartment, not talking. He brought flowers. He always brings flowers, he said, holding them on his knee all the way, very carefully, so the stems wouldn't bend. Daffodils, this week.

It's full of the hollowed. That's the thing nobody tells you. You knew they were here; you didn't know how many. Ward after ward. Rows and rows of them, in clean pyjamas and hospital cardigans, sitting up in bed or in chairs by the tall windows, very still, with their hands folded, looking out at nothing. Young, most of them. Your age. Late flames in their Burning Years. Some of them have been here for twenty years. Some of them are older than your nana. There's a radio playing somewhere, very quietly, a man reading the football results, and nobody is listening to it.

@cas:grave Cas came too. You didn't expect him to. He was on the platform at Wrenfold Halt when you got there, in his black coat, with a ticket already in his hand. He'd been meaning to go since February, he said, since he found out what his grandfather did; he just hadn't been able to make himself get on the train. "Then I saw you," he said, "and I thought, well. If not now." He's walking beside you down the ward with his face like stone, looking at every bed.
*if (st_imogen >= 3) and (hurt_imogen < 2)
  *present imogen kit
  @imogen:grave And Imogen. Of course Imogen. It's her Sunday for Kit anyway; she's come once a month for three years. She peels off at the second ward without a word, and you see her through the glass, sitting down beside a young man with her sharp chin and dark eyes gone blank, and taking his hand. Kit. He smiles at her pleasantly. She smiles back, and starts talking to him, brightly, about the weather, as if he can hear.

  *meet kit
  @kit:hollowed "Hello," you hear him say, as you pass, in a voice exactly like hers, only empty. "Have we met?"

  You keep walking. It's the only thing you can do for her: not stop, not look, let her have him to herself.

*meet maisie
@maisie:hollowed Maisie Tully is in the end bed of the fourth ward, by the window. She's thirty now. Thin, and fair, with her father's long face and his pale blue eyes, gone foggy. Her hair's in a hospital plait. She's wearing a pink cardigan that's been washed so often it's nearly white. When her father sits down in the chair beside her bed and takes her hand, she turns her head and looks at him with a small, puzzled, pleasant smile.

*page_break

@maisie:hollowed "Hello," she says. "That's a nice coat. What's your name?"

@tully:warm "Absalom," says Mr Tully, gently, as he has three hundred and thirteen times. "Absalom Tully. I'm your dad, love." He takes last week's flowers out of the water jug, brown and drooping, and puts the daffodils in. "Look. Daffodils. Spring's coming."

@maisie:hollowed "They're pretty," says Maisie, and looks out of the window.

He talks to her. You didn't expect that. You thought he'd sit, the way the others' visitors sit, holding a hand, waiting for the hour to be up. He doesn't.

@tully:warm "It's rained all week," he tells her, settling her hand on the blanket between both of his. "Rained and rained. Then Thursday it froze, and the boathouse lawn went white as a cake, and I came down it Friday night crunching like a man eating toast." He waits, as if she might laugh. "There was a heron on the jetty Tuesday. Stood there an hour on one leg. I thought, she'd have liked that. You always liked a heron."

@maisie:hollowed "That's nice," says Maisie, to the window.

@tully:warm "It was, love." He goes on. "Lamp oil's up again. Fourpence a gallon. I told the man, I said, I've been buying from you since before you had teeth." He strokes her knuckles with his thumb. "And the Mere's broken up. All the ice gone. The ducks are back. Seven of them, and one with a bad wing that the others wait for."

*page_break

He doesn't mention the Quiet. He doesn't mention you, or the letters inside your coat. She listens, or doesn't, with her eyes on the window, and every so often she says [i]that's nice[/i], and he says [i]it was, love[/i], and goes on.

You sit down on the edge of the bed. You look.
*snapshot maisie

It isn't like Toby. That's the first thing. Toby's flame is gone: not guttered, not low, gone, taken whole, nothing left to hold. Maisie's is gone too, almost. But not quite. Down in the very bottom of her, so deep and so faint that you have to close your eyes and hold your breath and keep looking, past the point where you'd have given up on anyone else, there's something. A spark. Grey, and cold, and tiny, like the last coal in a grate that's been out all night, when you put your hand over it and feel, very faintly, that it's still warm.

Six years, and it's still there. Because somebody's been sitting by this bed every Sunday for six years saying [i]Absalom. I'm your dad, love.[/i] Telling her about the ducks. Keeping it warm.
*set kindling +5
You open your eyes. Mr Tully is watching your face. He's seen it. You didn't need to say anything.

@tully:hurt "There's something," he whispers. "Isn't there. There's something left." His whole face is shaking. "He said. He said there was, and he could reach it, and I thought he was lying, I thought he was just saying it..."

*page_break

"There's something. A spark. That's all."

@tully:hurt "A spark," says Mr Tully, and bends over his daughter's hand, and holds it against his face. Maisie looks down at him, puzzled, and pats his head, the way you'd pat a stranger's dog.

@cas:grave Afterwards, in the corridor, Cas stops Mr Tully by the window. The light's going; the sky over the roofs of Kingsmere is the colour of a bruise. His voice is very low and very careful. "You were there," he says. "In 1986. In the Warding Hall. When my grandfather did it."

@tully:sad Mr Tully looks at him. At his face, his cheekbones, his hands. "You've got his hands," he says. Not cruelly. Just a fact. "Yes, lad. I was up the ladder, doing the lamps. I saw it."

@cas:grave "Tell me." Cas's voice is barely there. "Please. What you saw, from up there. The Headmistress was beside him; she told me what it [i]meant[/i]. Nobody's told me what it looked like."

@tully:sad Mr Tully looks out of the window at the roofs for a while before he starts. "February," he says. "Cold. The Warding Hall was full; it was a big lesson, both years. I was up by the high windows with my taper. There was a hum in the room. There always is, when they're warding; you get used to it." He moves his cap in his hands. "Your grandfather was at the front. Thin lad, frightened. He had a black book open on the bench in front of him, and he kept looking down at it, and his lips were moving."

*page_break

@cas:grave Cas doesn't say anything. His hands are flat against his coat.

@tully:sad "Aldric put his shield up. Like the sun coming up, it was; the whole room went gold. Everybody stopped to look. They always did." He's quiet for a moment. "And your grandfather said something, not loud, and put his hand out. Like this." The old man lifts his hand, palm down, and closes it, slowly, over nothing. "Like you'd put your hand over a candle to put it out. That's what it looked like, from up the ladder. A hand closing over a candle."

@tully:sad "The gold went. All at once. Not out like a lamp goes out. Just gone, as if it had never been in the room." He puts his hand back in his lap. "And Aldric looked up. Up the ladder. At me. Like he was asking me what had happened." His voice drops. "And then he turned round and looked at the Professor, and asked him his own name."
*if (st_cas >= 3) and not(b_cas_debt) and (hurt_cas < 2)
  *set b_cas_debt true
  *set st_cas 4
  @cas:hurt Cas stands very still by the window with the last pale light on his face. Then he turns, and walks away down the corridor, fast, and stops at the far end, and puts both hands flat on the wall, and bows his head against it.
  *choice
    #Go and stand next to him.
      *set st_cas +1
      *set heart +5
      You go and stand next to him. You don't touch him. You just stand there, close enough that he'll know you're there, while a porter goes past with a trolley and doesn't look at either of you.

      @cas:hurt At last he says, to the wall, "I thought knowing would be worse. It isn't. It's just heavier." He takes his hands off the wall and looks at them, turning them over, the long pale Drummond fingers, the signet ring. "Whatever it costs. Whatever I can do to put it right. I owe him. I owe every bed in this building." He looks at you. "Will you help me? I don't know how to start."

      "Yes."

      @cas:warm He breathes out. "Yes," he repeats, as if it's a word he's never heard anyone say to him before. He stays there beside you, by the window, while the lamps come on in the street outside, not touching, close.
    #Leave him. Some things you have to stand with on your own, first.
      *set wit +5
      You leave him. You go back to the ward and sit with Mr Tully and Maisie, and watch the light go, and don't look down the corridor.

      @cas:grave When he comes back, twenty minutes later, his eyes are red and his jaw's set, and he says, to Mr Tully, not to you, "Whatever I can do." Mr Tully looks up at him from the chair, a long, searching, tired look, the look of an old man who's been promised things before, and then he nods, and moves his coat off the other chair so Cas can sit.
*else
  @cas:grave Cas doesn't say anything. He looks down the long pale ward, at all the beds. "Whatever it costs," he says at last, very quietly, to nobody. "Whatever I can do."
*if tully_fate = "exposed"
  @arkwright:grave At the end of the afternoon, Commander Arkwright puts her hand on Mr Tully's shoulder. Not roughly. "Time," she says. He stands up, and kisses Maisie's forehead, and she says "Goodbye, nice man," and he walks out between the two Lamplighters with his cap in his hands, and doesn't look back.

  @arkwright:grave On the train, Arkwright sits beside you, with her greatcoat buttoned to the throat, and watches the dark go past. "I'm not locking him up," she says. "Not yet. Morrow doesn't know we know. An old man who's been writing to him for three years is worth more to me at his post than in a cell." She's quiet for a mile or two. "He'll do what I tell him. For her." Then, lower, not to you: "God help me, so would I."
*if tully_fate = "kestrel"
  @kestrel:grave On the train home, the Headmistress finally speaks. "I'm not going to hand him to the Order," she says. "Not yet. Sabine would lock him up and throw away the key, and Aldric would know within a day." She looks at Mr Tully, asleep against the window with his cap over his face and his mouth a little open. "He'll stay at his post. He'll write back when Aldric writes. And he'll tell me everything."

  @kestrel:grave She closes her eyes. "I was in the Warding Hall that day too, Absalom," she says, very low, to the sleeping man. "I didn't say anything either."
*if tully_fate = "st_ides"
  On the train home, Mr Tully says, looking out at the dark: "You'll tell them now. The Commander. The Headmistress. It's right you should." The lights of Kingsmere slide away behind you, and then there's only the dark, and your two faces in the black glass. After a long while he says: "Thank you for looking at her."

  *present kestrel
  That night you climb to the Weathervane Room with the letters inside your coat, and knock, and stand on the Headmistress's hearthrug with your cold hands and your train-smelling clothes, and don't know how to begin. So you don't. You put the bundle on her desk, on top of her papers, with the string still round it.

  *page_break

  @kestrel:grave She looks at the grey paper, and at the little drawn wick on the back of the top envelope, and her face changes. "Where did you get these?"

  "Mr Tully's stove drawer." You make yourself look at her. "They're from Aldric Morrow. Three years of them. He opened the boathouse ward on the fifth. He told me himself. And then I went to St Ide's with him today, to see Maisie." You stop. "There's something left in her. A spark."

  @kestrel:grave The Headmistress doesn't interrupt. She unties the string, and takes out the top letter, and reads it, and reads it again. Then she sits back with it in her lap and says nothing at all while the weathervanes turn on the ceiling, creaking, and the fire settles, and Hester Wren looks down from over the mantelpiece with her bright painted eyes.

  @kestrel:grave "Absalom," she says at last, not to you. Then, to you, very quietly: "He stays at his post. Aldric mustn't know we know. Not yet." She folds the letter along its old creases, exactly, and puts it back with the others. "Thank you for going with him first. I don't think I could have."

*if tully_fate = "silent"
  On the train home, Mr Tully says, looking out at the dark: "He wrote again. Yesterday. In the drawer." He takes the thin grey letter out of his coat and gives it to you without reading it. "You tell me what to write back."

  You sit in the compartment, with the Lantern Train rattling north through the dark and the old man opposite you pretending to sleep, and read a letter from Aldric Morrow, and start to think.
*journal [b]Chapter 18.[/b] The Order suspected Idris. {@b_idris_suspect|You told him you never did. |}On one table in the Long Stacks, everything: the grey wicks, the humming lanterns, the rounds, the Fen oil, the boathouse ward, and Grey's last words: [i]on the round.[/i] {@suspect = "tully"|You said it: Mr Tully.|}In his cottage, in the stove drawer, three years of letters from Aldric Morrow promising to relight Maisie. [b]It's Tully.[/b] He opened the ward on the night of the Quiet. He never told Morrow your name. {@tully_fate = "exposed"|You took it to Commander Arkwright.|}{@tully_fate = "kestrel"|You took it to the Headmistress.|}{@tully_fate = "st_ides"|You went with him to St Ide's first.|}{@tully_fate = "silent"|You kept it between you: an old man Morrow trusts might be the only way to reach Morrow.|} At St Ide's, deep in Maisie Tully, you found a spark: six years of Sundays had kept it warm. {@b_cas_debt|Cas heard what his grandfather's spell looked like from the other side, and asked you to help him put it right.|}
*page_break
*goto_scene ch19
`);
