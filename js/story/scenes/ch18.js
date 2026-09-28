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

Everybody knows. Everybody knows why, too: [i]I was watching the wrong man[/i]. Magnus Grey's last words, which you told the Headmistress, and she told the Commander, and somehow by Tuesday the whole school knew them. And everybody knows who Professor Grey used to watch, in the corridors, at night, in the Long Stacks: the Owlcombe second-year with the satchel he won't let anybody near, who studies Kindlers and walks at two in the morning and had a stolen file about Aldric Morrow in his bag for a year and a half.

People move away from him in corridors now. Somebody wrote something on the door of the Owlcombe Stacks and the Head of House had it scrubbed off before breakfast, but not before half the school had read it.

@idris:guarded He's at the long reading table in the Long Stacks on Wednesday night when you come in, the one under the green lamps, where the three of you read Morrow's file. He's not reading. He's sitting with his hands flat on the table, looking at them. He doesn't look up. "If you're going to ask," he says, "Arkwright's asked it better. Twice."
*if (st_idris >= 3) and not(b_idris_suspect) and (hurt_idris < 2)
  *choice
    #"I'm not going to ask. I know it isn't you. I've always known."
      *set b_idris_suspect true
      *set st_idris 4
      *set heart +5
      @idris:surprised He looks up then. Properly, fast, as if you've hit him. "You can't know that," he says. "You can't. I've given everyone every reason. I've been creeping about with that file for eighteen months..."

      "I know. And I know why. And I know you."

      @idris:hurt He stares at you for a long time, with his dark eyes very bright behind his round glasses. Then he takes his glasses off and puts his face in his hands, just for a moment, the way Imogen did in November. "Say that to Arkwright," he says, muffled. "Say it exactly like that." And then, taking his hands away: "No. Don't. I don't care what Arkwright thinks. I only cared what you thought." He puts his glasses back on. His hands are shaking. "I didn't know that until right now."
    #Sit down across from him and wait. Let him decide what to say.
      *set st_idris +1
      *set wit +5
      You sit down across from him and don't say anything, and after a while he looks up, and something in his face eases, very slightly. "Thank you for not asking," he says.
*elseif b_idris_suspect
  @idris:warm Then he looks up, and sees it's you, and something in his shoulders comes down. "Ah," he says. "It's you. Good. You're the one person in this castle I don't have to explain myself to." He moves his books so you can sit.
  *set st_idris +1
*else
  You sit down across from him. He doesn't say anything else, and neither do you, and you're not sure, if you're honest, which of you is more uncomfortable.

@imogen:tense Imogen arrives ten minutes later with an armful of paper and the look she gets when she's been awake for two days, and drops the lot on the table between you, and sits down, and starts laying it out.

@imogen:grave "Everything," she says. "Everything we know. Since September. On one table. If we can't see it all at once we'll never see it." She's already arranging it: sheets of paper, notes, her own neat pencil lists, a map of the castle traced from the Wrenfold Map. "Tell me what you've got. All of it. Anything."
*if (st_rowan >= 3) and (hurt_rowan < 2)
  *present rowan
  @rowan:tense Rowan comes in with a tray of tea from the kitchens and puts it down and doesn't leave. "I'm staying," he says. "I don't know anything useful. I'm staying anyway."
*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  *present saoirse
  @saoirse:neutral Saoirse turns up with a roll of brown paper and a box of drawing pins, and has half the clues pinned up on the end of a bookcase with string between them before Imogen can object.
*if (st_cas >= 3) and (hurt_cas < 2)
  *present cas
  @cas:guarded Cas comes in last, and stands at the end of the table with his arms folded, and says, "My family's in this up to its neck. I'd like to know how deep."
*if (st_noor >= 3) and (hurt_noor < 2)
  *present noor
  @noor:tired Noor comes straight from the Infirmary, still in her uniform, and sits down, and says, "I've got forty minutes. Go."

You lay it out. All of it. Everything you've seen since you walked through a doorway of light in September.
*if e01
  The grey wick in Delphine's lantern, soaked in something that smelled of marsh.
*if e03
  The south ward-stone by the Glasshouses, the night Delphine was taken: unlocked from the castle side.
*if e02
  The humming in the lanterns. The lantern above the gallery going grey at midnight on Longnight, and Mr Tully seeing it.
*if e08
  The Wrenfold Map's ward lines. The ones that had been opened, all along the Lanternwarden's nightly round.
*if e15
  The old passage from the boathouse into the Old Cloisters, bricked up after Bram. And Bram taken anyway.
*if e04
  The grey oil in the Glimmer hoop. Fen oil, from Saltmarrow. The only store of it in Wrenfold in the Lanternwarden's shed.
*if e09
  Mr Tully at Candlewake, with Maisie's candle. [i]Somebody told me she might come back. Somebody told me there's a way.[/i]
*if e06
  Professor Grey's six years in the Choir. Which you know now was the opposite of what it looked like.
*if e07
  Bram's last argument, with Cas. Which was about a borrowed book, and nothing else.

And last, what Professor Grey said on the stair: [i]the boathouse ward. Opened from inside. On the round. I was watching the wrong man.[/i]

@imogen:grave Imogen looks at the table for a long time. So does everyone. Nobody wants to be the first to say it.

@idris:grave "On the round," says Idris quietly. "He didn't say [i]on somebody's round[/i]. He said [i]the[/i] round. There's only one round in this castle."
*choice
  *if (e02 and e04) or (e02 and e08) or (e04 and e08) or (e04 and e09) or (e08 and e09) or (e02 and e09)
    #"It's Mr Tully." You've got enough. You can see it, all of it, on the table.
      *set suspect "tully"
      *set wit +10
      Nobody says anything. Somebody breathes out, long and slow. Imogen closes her eyes.

      @imogen:grave "The wicks," she says. "The oil. The lanterns humming. The wards on his round. Maisie." She opens her eyes. "Every single thing on this table goes through his hands. Every single night." Her voice cracks, just slightly. "He knows all our names. He lit my lantern on the first night. He said [i]mind the step[/i]."
  *if not((e02 and e04) or (e02 and e08) or (e04 and e08) or (e04 and e09) or (e08 and e09) or (e02 and e09))
    #"It's Mr Tully. I don't know how I know. I just do."
      *set suspect "tully"
      *set heart +5
      @imogen:grave Imogen looks at you, and at the table, where there isn't quite enough to prove it; and then at Idris, who nods, slowly. "The round," she says. "Grey said the round." She puts her pencil down. "I don't want it to be him. That's how I know you're right. I don't want it to be him so much."
  #"Professor Bassani. He's Deputy now. He was here in 1986."
    *set suspect "bassani"
    *set wit +5
    @imogen:neutral Imogen writes it down, carefully, under a question mark. "He was here," she says. "He's had keys to everything for thirty years." She looks at the table, and at the word [i]round[/i], and doesn't say what she's thinking.
  #"I don't know. I don't want to say a name I can't take back."
    *set suspect "nobody"
    *set heart +5
    @idris:neutral Idris nods. "That's fair," he says. "That's more than the Order's managed." He looks at the table, and at the word [i]round[/i], and doesn't say what he's thinking either.

@idris:grave "There's one way to know," says Idris, after a long time. "Without accusing anybody. Without the Order." He looks at you. "Look. In his cottage. When he's on the round. If there's nothing, there's nothing, and we never say this out loud again."
*page_break
*comment ---------------------------------------------------------------- CH18.TULLY.02
*sid CH18.TULLY.02
*date 2027-03-12 22:00
*place P28 tully_cottage
*present tully familiar
The Lanternwarden's cottage is at the edge of the castle grounds, where the lawns go down to the Mere by the boathouse: a little stone house with a slate roof and a crooked chimney and a lantern over the door that's always lit. Everybody knows it. Everybody's walked past it. Nobody you know has ever been inside.

At ten o'clock on Friday night, Mr Tully goes out on his round, with his long brass taper and his stepladder, the way he does every night, up the lawn towards the castle, lighting as he goes. You watch him go from the shadow of the boathouse. His taper bobs away up the hill, gold, stopping at every lantern, one by one.

The door isn't locked. Nobody locks doors at Wrenfold.

Inside, it's one room downstairs, small and warm and very tidy, with a black iron stove, and a rag rug, and one armchair with the stuffing coming out, and a kettle, and a shelf of lantern parts: wicks and glass and little brass fittings, all in rows. It smells of lamp oil and tea. And on every wall, on every shelf, on the mantelpiece and the windowsill and the back of the door, photographs of a girl.

A little girl on a beach with a bucket. A girl of ten on a bicycle, laughing. A thin fair teenager with her father's long face, scowling in a school uniform. A young woman, twenty-four, in Heronmere sea-green and pearl, holding a lopsided candle on a frozen lake, grinning so hard her eyes have disappeared. Maisie. Maisie, Maisie, Maisie. There must be two hundred of them.

You don't have to look hard. It's in the stove drawer, the one for kindling, under the kindling: a bundle of letters, tied with string. Thin grey paper. Dozens of them. The handwriting on every envelope is long and looping and beautiful and old-fashioned, and there's no stamp, and no postmark, and on the back of every one, instead of a return address, a small grey drawing of a wick.

You open the top one.

[i]Absalom. You have done well again. She is so close now. When I have the Heartfire, and the Kindler to carry it, there will be enough flame for everything I have ever wanted, and I will give Maisie back to you whole, as she was, laughing. I have promised you this for three years and I have never lied to you. Leave the old ward under the boathouse open on the fifth. Only for an hour. No one will be hurt who can't be mended. Tell me the Kindler's name. A.M.[/i]
*clue e14
The fifth. The fifth of March. The night of the Quiet.

[i]No one will be hurt who can't be mended.[/i] Toby, with jam on his pyjamas. Professor Grey on the stair.

You don't hear the door. You hear the taper, set down very carefully on the shelf by the door, brass on wood. And you turn round, with the letter in your hand, and Mr Tully is standing in the doorway of his own house in his patched brown coat, with his flat cap in his hands, looking at you.

@tully:sad He doesn't shout. He doesn't come any closer. He looks at the letter in your hand, and at the open stove drawer, and at you, and his long kind face doesn't do anything at all for a long moment. And then it just... falls. Like a house when the last wall goes.

@tully:sad "I came back for my gloves," he says. "Left my gloves." He looks at them, on the arm of the chair. He doesn't pick them up. "You'd best sit down, {name}," he says. "You'd best sit down, love, and I'll tell you. I've been wanting to tell somebody for three years."

He tells you.

He sits in the armchair with the stuffing coming out, and you sit on the rag rug by the stove, because there isn't another chair, and he tells you everything, in his soft old voice, looking at the photographs.
*set know_insider true
@tully:sad "He was kind to me," he says. "Aldric. Forty years ago. I was the under-lampman, twenty-seven, not a spark in me, nobody. The students looked through me. Aldric used to come and help me with the round. At night. Just for the company. He'd light the high ones, the ones I couldn't reach, with his hand." He smiles, horribly. "When they put him out, I was in the Warding Hall. Up the ladder, doing the lamps. I saw it. I saw his face." He turns his cap round and round. "I didn't say anything. None of us did."

@tully:sad "Then Maisie. Six years ago. Her Burning Year. Walking home from Thimble Cross on a Saturday. They took her on the shore path, a mile from this door." His voice doesn't change, but his hands stop turning the cap. "I've been to St Ide's every Sunday since. Three hundred and twelve Sundays. She asks me what my name is. Every time. Three hundred and twelve times."

@tully:tense "And then, three years ago, a letter came. In the stove drawer. I don't know how. Aldric. He said he could bring her back. He said, when he had the Heartfire, and a Kindler to carry it, he'd have enough flame to relight every hollowed soul in St Ide's, and her first." He looks at you, finally, with his sad pale-blue eyes. "He only wanted small things, at first. A ward left open an hour. A lantern with a grey wick in it, so he could hear through the lanterns. A bit of the Fen oil from my shed." He swallows. "I told myself nobody'd be hurt. I told myself Delphine would be mended. And Bram. And then Odile, in the high street. And then..."

@tully:sad He stops. He looks at the photograph on the mantelpiece: Maisie on the frozen Mere, with her lopsided candle.

@tully:sad "Toby Quill," he says. "I lit his lantern the first night. I said [i]welcome home, lad[/i]." And Absalom Tully puts his face in his big oily hands and weeps.
*if (candle = "toby") or (fr_toby >= 4)
  You think of Toby in the Infirmary, stroking the hare, asking [i]is she mine?[/i]

@tully:tense When he can speak again, he says, without looking up: "I never told him your name. He asked. Every letter. [i]Tell me the Kindler's name.[/i] I knew from the first night. The white lantern. I never told him." He wipes his face. "That's the only thing. In three years. The only thing I didn't give him."
*if morrow_knows
  @tully:sad "He knows now, though," he says. "Not from me. From the Hush. She saw you." He shakes his head. "The hoop at the Glimmer Cup. That was his, not mine. He had her put my oil in it. To see who'd reach for the Keeper when he fell. To see who'd light up." He looks at you. "I'm sorry. I didn't know till after."
*else
  @tully:sad "The hoop at the Glimmer Cup," he says. "That was his, not mine. He had her put my oil in it. To see who'd reach for the Keeper when he fell. To see who'd light up." He looks at you. "I don't know if you did. I didn't want to know."

@tully:sad "What'll you do?" he says at last. Very quietly. "You can do what you like, love. I'll not stop you. I'll not run. Where would I run? She's at St Ide's."
*choice
  #Take it to Commander Arkwright. All of it. Tonight.
    *set tully_fate "exposed"
    *set nerve +10
    @tully:sad He nods, slowly, as if that's what he expected. "That's right," he says. "That's right and proper." He looks at the photographs. "Only... it's Sunday, the day after tomorrow. Would you ask her, love. Would you ask the Commander if I can go and see Maisie. One more Sunday. She can send as many of her people as she likes."
  #Take it to the Headmistress. She knew Aldric too. She should decide.
    *set tully_fate "kestrel"
    *set heart +5
    @tully:sad "Imelda," he says, and something in his face twists. "She was in his year. She'll be... she'll have to..." He nods. "Yes. Take it to Imelda. She's earned it." And then: "Would you ask her if I can go to St Ide's on Sunday. One more Sunday. I'll come straight back."
  #Go with him to St Ide's first. On Sunday. You want to see Maisie's flame with your own eyes before you decide anything.
    *set tully_fate "st_ides"
    *set kindling +5
    @tully:surprised He looks at you, startled, as if you've spoken a foreign language. "You'd come," he says. "You'd come and look at her." His voice breaks. "Nobody's ever looked at her. Not properly. The healers stopped looking years ago." He grips the arm of the chair. "Sunday. The two o'clock boat. I'll not run, love. I swear it on her."
  #Keep it between the two of you. For now. If Morrow trusts him, that might be the only way to get close to Morrow.
    *set tully_fate "silent"
    *set wit +10
    @tully:tense He stares at you. "You'd... use me," he says slowly. "Against him." Something moves in his face. Not hope. Something harder. "He'll write again. He always writes again." He looks at the stove drawer. "All right. All right. Whatever you want me to write back, I'll write it. Whatever you want me to leave open, I'll leave it, or I'll not." He breathes in. "But on Sunday I'm going to see my girl. Come with me. See what I've been doing it for."

You leave the cottage at midnight with the letters inside your coat. Behind you, the lantern over the door is still lit. It's always lit.
*page_break
*comment ---------------------------------------------------------------- CH18.TULLY.03
*sid CH18.TULLY.03
*date 2027-03-14 14:00
*mood day
*place P39 st_ides
*present tully maisie cas familiar
St Ide's is a quiet Victorian building on a quiet street in Kingsmere, with long pale corridors and long pale wards and tall windows with the blinds half down, and it's the saddest place you've ever been.
*if tully_fate = "exposed"
  *present arkwright
  @arkwright:grave Commander Arkwright brought you herself, on the Lantern Train, with two Lamplighters, and Mr Tully between them with his cap in his hands. She's standing at the end of the ward now, by the door, in her greatcoat, with her arms folded. She said yes to one more Sunday. She didn't say why. You think you know. She's been to St Ide's more than anybody.
*if tully_fate = "kestrel"
  *present kestrel
  @kestrel:grave The Headmistress came. She didn't have to. She said, "I'll bring him myself," in a voice nobody argued with, and she sat opposite him on the Lantern Train all the way to Kingsmere and didn't say a word. She's standing by the window now, with her arm still strapped across her chest, looking at the girl in the bed.
*if (tully_fate = "st_ides") or (tully_fate = "silent")
  You came on the two o'clock Lantern Train, the two of you, sitting opposite each other in an empty compartment, not talking. He brought flowers. He always brings flowers, he said. Daffodils, this week.

It's full of the hollowed. That's the thing nobody tells you. You knew they were here; you didn't know how many. Ward after ward. Rows and rows of them, in clean pyjamas and hospital cardigans, sitting up in bed or in chairs by the tall windows, very still, with their hands folded, looking out at nothing. Young, most of them. Your age. Late flames in their Burning Years. Some of them have been here for twenty years. Some of them are older than your nana.

@cas:grave Cas came too. You didn't expect him to. He was waiting on the platform at Wrenfold Halt when you got there, in his black coat, and he said, "I want to see it. What my family's debt looks like. I've never seen it," and got on the train without asking anyone. He's walking beside you down the ward now with his face like stone, looking at every bed.
*if (st_imogen >= 3) and (hurt_imogen < 2)
  *present imogen kit
  @imogen:grave And Imogen. Of course Imogen. She comes every other Sunday anyway. She peels off at the second ward without a word, and you see her through the glass, sitting down beside a young man with her sharp chin and dark eyes gone blank, and taking his hand. Kit. He smiles at her politely. She smiles back, and starts talking to him, brightly, about the weather, as if he can hear.

  *meet kit
  @kit:hollowed "Hello," you hear him say, as you pass, in a voice exactly like hers, only empty. "Have we met?"

*meet maisie
@maisie:hollowed Maisie Tully is in the end bed of the fourth ward, by the window. She's thirty now. Thin, and fair, with her father's long face and his pale blue eyes, gone foggy. Her hair's in a hospital plait. She's wearing a pink cardigan that's been washed so often it's nearly white. When her father sits down in the chair beside her bed and takes her hand, she turns her head and looks at him with a polite, puzzled little smile.

@maisie:hollowed "Hello," she says. "That's a nice coat. What's your name?"

@tully:warm "Absalom," says Mr Tully, gently, as he has three hundred and thirteen times. "Absalom Tully. I'm your dad, love." He puts the daffodils in the water jug. "Look. Daffodils. Spring's coming."

@maisie:hollowed "They're pretty," says Maisie, politely, and looks out of the window.

You sit down on the edge of the bed. You look.
*snapshot maisie

It's not like Toby. That's the first thing. Toby's flame is gone: not guttered, not low, gone, taken whole, nothing left to hold. Maisie's is gone too, almost. But not quite. Down in the very bottom of her, so deep and so faint that you have to close your eyes and hold your breath and look for a long, long time, there's something. A spark. Grey, and cold, and tiny, like the last coal in a grate that's been out all night, when you put your hand over it and feel, very faintly, that it's still warm.

Six years, and it's still there. Because somebody's been sitting by this bed every Sunday for six years saying [i]Absalom. I'm your dad, love.[/i] Keeping it warm.
*set kindling +5
You open your eyes. Mr Tully is watching your face. He's seen it. You didn't need to say anything.

@tully:hurt "There's something," he whispers. "Isn't there. There's something left." His whole face is shaking. "He said. He said there was, and he could reach it, and I thought he was lying, I thought he was just saying it..."

"There's something. A spark. That's all."

@tully:hurt "A spark," says Mr Tully, and bends over his daughter's hand, and holds it against his face, and Maisie looks down at him, politely, puzzled, and pats his head, the way you'd pat a stranger's dog.

@cas:grave Afterwards, in the corridor, Cas stops Mr Tully by the window. His voice is very low and very careful. "You were there," he says. "In 1986. In the Warding Hall. When my grandfather did it."

@tully:sad Mr Tully looks at him. At his face, his cheekbones, his hands. "You've got his hands," he says. Not cruelly. Just a fact. "Yes, lad. I was up the ladder, doing the lamps. I saw it." And he tells Cas: the Warding Hall, February, the hum, the frightened boy with the black book open, the spell like a hand closing over a candle, and Aldric's face after. "He looked up at me," says Mr Tully. "Up the ladder. Like he was asking me what had happened. And then he looked at the Professor and asked him his own name."
*if (st_cas >= 3) and not(b_cas_debt) and (hurt_cas < 2)
  *set b_cas_debt true
  *set st_cas 4
  @cas:hurt Cas stands very still by the window with the pale light on his face. Then he turns, and walks away down the corridor, fast, and stops at the far end, and puts both hands flat on the wall, and bows his head against it.
  *choice
    #Go and stand next to him.
      *set st_cas +1
      *set heart +5
      You go and stand next to him. After a long time, he says, to the wall, "I thought knowing would be worse. It isn't. It's just heavier." He takes his hands off the wall and looks at them. "Whatever it costs. Whatever I can do to put it right. I owe him. I owe every bed in this building." He looks at you. "Will you help me? I don't know how to start."

      "Yes."

      @cas:warm He breathes out. "Yes," he repeats, as if it's a word he's never heard anyone say to him before. And he stays there beside you, by the window, for a long time, not touching, close.
    #Leave him. Some things you have to stand with on your own, first.
      *set wit +5
      You leave him. When he comes back, twenty minutes later, his eyes are red and his jaw's set, and he says, to Mr Tully, not to you, "Whatever I can do," and Mr Tully looks at him for a long time, and nods.
*else
  @cas:grave Cas doesn't say anything. He looks down the long pale ward, at all the beds. "Whatever it costs," he says at last, very quietly, to nobody. "Whatever I can do."
*if tully_fate = "exposed"
  @arkwright:grave At the end of the afternoon, Commander Arkwright puts her hand on Mr Tully's shoulder. Not roughly. "Time," she says. And he stands up, and kisses Maisie's forehead, and she says "Goodbye, nice man," and he walks out between the two Lamplighters with his cap in his hands, and doesn't look back. On the train, Arkwright tells you: "I'm not locking him up. Not yet. Morrow doesn't know we know. An old man who's been writing to him for three years is worth more to me at his post than in a cell." She looks out at the dark. "He'll do what I tell him. For her."
*if tully_fate = "kestrel"
  @kestrel:grave On the train home, the Headmistress finally speaks. "I'm not going to hand him to the Order," she says. "Not yet. Sabine would lock him up and throw away the key, and Aldric would know within a day." She looks at Mr Tully, asleep against the window with his cap over his face. "He'll stay at his post. He'll write back when Aldric writes. And he'll tell me everything." She closes her eyes. "I was in the Warding Hall that day too, Absalom," she says, very low, to the sleeping man. "I didn't say anything either."
*if tully_fate = "st_ides"
  On the train home, Mr Tully says, looking out at the dark: "You'll tell them now. The Commander. The Headmistress. It's right you should." And then, after a long time: "Thank you for looking at her." You tell the Headmistress that night. She listens, and says nothing for a long time, and then says: "He stays at his post. Aldric mustn't know we know. Not yet."
*if tully_fate = "silent"
  On the train home, Mr Tully says, looking out at the dark: "He wrote again. Yesterday. In the drawer." He takes the thin grey letter out of his coat and gives it to you without reading it. "You tell me what to write back." And you sit in the empty compartment, with the Lantern Train rattling north through the dark, and read a letter from Aldric Morrow, and start to think.
*journal [b]Chapter 18.[/b] The Order suspected Idris. {@b_idris_suspect|You told him you never did. |}On one table in the Long Stacks, everything: the grey wicks, the humming lanterns, the rounds, the Fen oil, the boathouse ward, and Grey's last words: [i]on the round.[/i] {@suspect = "tully"|You said it: Mr Tully.|}In his cottage, in the stove drawer, three years of letters from Aldric Morrow promising to relight Maisie. [b]It's Tully.[/b] He opened the ward on the night of the Quiet. He never told Morrow your name. {@tully_fate = "exposed"|You took it to Commander Arkwright.|}{@tully_fate = "kestrel"|You took it to the Headmistress.|}{@tully_fate = "st_ides"|You went with him to St Ide's first.|}{@tully_fate = "silent"|You kept it between you: an old man Morrow trusts might be the only way to reach Morrow.|} At St Ide's, deep in Maisie Tully, you found a spark: six years of Sundays had kept it warm. {@b_cas_debt|Cas heard what his grandfather's spell looked like from the other side, and asked you to help him put it right.|}
*page_break
*goto_scene ch19
`);
