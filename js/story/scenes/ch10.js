NB.scene("ch10", String.raw`
*mood night
*set ch 10
*chapter 10 The Lamplighters
*comment ---------------------------------------------------------------- CH10.ROOKERY.01
*sid CH10.ROOKERY.01
*date 2026-11-14 06:10
*place P26 rookery
*present crook bram familiar
It's the familiars that wake the castle, the second time.

At six in the morning on a Saturday in the middle of November, every familiar in Wrenfold starts screaming at once. Cats and owls and ravens and hares, the peacock and the ferrets and Mrs Pettigrew's goat. {fam_name} is at your door, {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|beating against it|scratching at it}, making a sound you'll hear in your sleep for weeks. And from the Rookery tower, where the familiars roost at night, the noise is so loud it rattles the windows.

You're at the bottom of the Rookery stair before you've properly woken up.

The Rookery is a tall round tower with no ceiling on the inside, just perches and platforms and baskets going up and up into the dark, and hundreds of animals on them, all screaming. And on the stone stair that spirals up the inside of the wall, about halfway up, sitting on a step with his back against the wall and his hands on his knees, is Bram Hollis.
*meet crook
@crook:neutral Professor Crook is already there, kneeling on the step below him, in a dressing gown with her leather gauntlet still on one arm and her pipe clamped in her teeth, unlit. She's a wiry woman with a wry lopsided face and short silver hair and dark brown skin, and she's holding Bram's wrist, and her face has gone very still.

*meet bram
@bram:hollowed "Morning, Professor," says Bram Hollis. His voice is polite and flat and clear. He's grey. His small eyes are the colour of fog. On his shoulder, a big black crow, his familiar, is standing absolutely still, pressed against his neck, and it's the only familiar in the whole tower that isn't screaming. "Is it morning? I was going up to feed... I was going up to..." He looks up the stair, at the dark, at the hundreds of animals. "I don't know what I was going up for," he says, politely, and smiles at nothing.

There's a hole in him. You don't want to look, and you look. Where his flame was, a hole, cold at the edges, fresh.

@crook:neutral "Right," says Professor Crook, very quietly, round her pipe. She stands up. "Right." And then, to the tower full of screaming animals, in a voice that could stop a charging bull: "[i]QUIET.[/i]"

The Rookery goes silent.
*snapshot rookery

In the silence, from high up in the dark, where the tower's windows are, you hear the last faint echo of something going away. Low. Long. Lonely. A hum.

@crook:neutral "Get the Headmistress," says Professor Crook, to nobody, to everybody. "And somebody get me a blanket for this boy." She looks at the crow on Bram's shoulder, which is looking back at her with its black eyes, not moving. "And nobody touch the bird."

The boathouse passage was bricked up a week ago. Mr Tully did it himself. Everyone saw.
*page_break
*comment ---------------------------------------------------------------- CH10.ORDER.01
*sid CH10.ORDER.01
*date 2026-11-15 10:00
*mood day
*place P23 warding_hall
*present arkwright jory grey cas idris familiar
The Order of the Lamp arrives on Saturday night, by boat, in the dark: twenty of them, in long lamp-black greatcoats with brass lamps on poles, and they take over the Warding Hall and don't leave.

By Sunday morning it's a headquarters. There are maps pinned to the scorched walls, and trestle tables, and tea urns, and people in greatcoats walking fast with papers, and a hard white light in every lamp that doesn't lean at all. Students are being called in one at a time to be interviewed. Nobody knows what they're asking. Everybody's been told not to talk about it, which means everybody's talking about it.
*meet arkwright
@arkwright:neutral The Commander is a hard, handsome woman in her late forties with close-cropped grey hair and brown skin and a scar that goes through her left eyebrow and stops just short of the eye. She doesn't sit behind the trestle table when it's your turn. She sits on the edge of it, with her greatcoat open and a mug of tea in one hand, and looks at you for a long time. "Sabine Arkwright," she says. "Commander. You found the girl in the Glasshouses. You were out after curfew in September, on the main stair, at midnight. Mr Tully put you down for it." She sips her tea. "What were you doing on the main stair at midnight?"
*choice
  #"I couldn't sleep." It's true. It's not all of it.
    *set wit +5
    @arkwright:neutral She looks at you for a long moment. "Nobody can, here," she says. "It's the lanterns. They hum." She makes a note. You can't tell if she believes you.
  #"Following a humming in the walls." It's true, and it's the part that matters.
    *set nerve +5
    @arkwright:attentive Her eyes sharpen. "Humming," she says. "In the walls. Where?" You tell her: along the lantern brackets, from one to the next. She writes it all down, fast, and underlines something twice. "Thank you," she says. "That's the first useful thing anybody's said to me since I got here."
    *clue e02

@jory:tense Jory Penrose, the young Lamplighter from the Row, is standing behind her with a clipboard, looking at you. He recognises you. He gives you a very small, very nervous nod.
*meet jory
And then, because the Warding Hall is one big room and there are no walls, you hear the other interviews.

@arkwright:grave "Drummond." At the next table, Cas is sitting very straight in front of two Lamplighters, with his hands flat on his knees. "You argued with Bram Hollis in the Rookhallow Undercroft at ten o'clock on Friday night. Witnesses say you told him, and I'm quoting, [i]one day someone's going to shut that mouth of yours for good.[/i] Seven hours later, someone did."
*clue e07
@cas:guarded "He called my grandfather a coward," says Cas, very coldly. "In front of everyone. He'd been doing it for weeks. I told him to stop." He doesn't look at anyone. "I was in the {@cas_house = "owlcombe"|Owlcombe Stacks|Undercroft} from eleven until morning. Ask anyone."

@arkwright:neutral "I have asked," says the Commander, without turning round. "Nobody remembers seeing you after midnight."

@idris:neutral At the table beyond that, Idris is being interviewed by Jory, who looks as if he'd rather be anywhere else. "You walk the corridors at night," Jory's reading from his notes. "You've been seen by staff on eleven occasions. You have a key to the restricted cage that nobody gave you. You've spent six years studying..." He squints. "[i]Flame-work.[/i]"

@idris:neutral "Yes," says Idris, calmly. "All of that is true."

And then Professor Grey comes in through the side door, big and silent in his charcoal robes, with his scarred hands at his sides, and the whole Warding Hall goes quiet, because Commander Arkwright has stood up.

@arkwright:grave "Magnus," she says.

@grey:neutral "Sabine."

@arkwright:grave "Six years inside the Choir," says Commander Arkwright, not loudly, but every Lamplighter in the room and every student waiting on the benches hears it. "Humming with them. Hooded. Learning the Quiet Art. And then you walked out of the Fen one night with your hands burned to the wrist and came here to teach children how to recognise the note." She puts her tea down. "I want to talk to you."
*clue e06
@grey:grave Professor Grey looks at her for a long moment with his tired pale eyes. "You sent me in, Sabine," he says quietly. "I'll talk to you any time you like." And he walks past her, to the back of the Hall, and sits down on a bench against the scorched wall, and folds his ruined hands, and waits.

Nobody on the benches looks at him. Everybody on the benches looks at him.

You find you've stood up. You're not sure when. Commander Arkwright has noticed. She's looking at you, with one scarred eyebrow up, waiting to see what you'll say.
*choice
  *if st_cas >= 2
    #"Cas didn't do it. He left a white rose for Delphine. He's not somebody who hurts people. He's somebody who's been hurt."
      *set heart +5
      *if st_cas >= 2
        *set b_cas_kind true
      *set st_cas 3
      *set suspect "nobody"
      @arkwright:neutral "That's not evidence," says the Commander.

      "No," you say. "It's just true."

      @cas:hurt Across the Hall, Cas has turned in his chair to stare at you. He looks as if nobody's ever done this before. As if he doesn't know what his face is supposed to do. Then he turns back to the Lamplighters, very straight, and his hands on his knees have stopped shaking.
  *if st_idris >= 2
    #"Idris walks at night because he can't sleep. He's the one who told the Headmistress something was wrong. Ask her."
      *set wit +5
      *if st_idris >= 3
        *set b_idris_suspect true
        *set st_idris 4
      *else
        *set st_idris +1
      *set suspect "nobody"
      @arkwright:attentive The Commander's eyes narrow. "The Headmistress," she says. "Did he." She looks at Idris, who has gone very still, and is looking at you over his round glasses as if you've just done something he's read about and never seen. "I'll ask her."

      @idris:warm Afterwards, in the corridor, he stops you with a hand on your arm, very lightly. "Nobody's ever done that," he says. "Stood up. For me. Everyone always assumes." He takes his hand away. "Thank you. I won't forget it."
  #"It's Grey. It has to be. Six years with them. He can hum the note. Who else could?"
    *set accused_grey true
    *set suspect "grey"
    *set nerve +5
    You say it out loud, in the silent Hall. You don't mean to. It's just what everybody's thinking, and you're the one standing up.

    @grey:grave At the back of the Hall, Professor Grey lifts his head and looks at you. He doesn't look angry. He looks tired. He looks as if he's heard it before, a lot, from a lot of people, and has stopped expecting anything else. He looks away.

    @arkwright:neutral "Noted," says the Commander, and writes something, and you sit down, and you don't feel better at all.
  *if e08
    #"It isn't Cas, or Idris. The wards were cut along the lantern round. Every one. Ask who walks it."
      *set suspect "tully"
      *set wit +10
      @arkwright:attentive The Commander goes completely still. "The lantern round," she says. "The route the Lanternwarden walks." She looks at you for a long, long moment. "Who told you that?"

      "The map in the library showed it."

      @arkwright:grave "The map in the library." She picks up her pen. "Anyone could walk the lantern round, you know. Anyone with a key and a reason." But she writes it down, and underlines it twice, and doesn't write anything under Cas's name at all.
  #Say nothing. Sit back down. It's not your business, and you don't know anything for sure.
    *set wit +5
    You sit back down. You don't know anything for sure. Nobody does. That's the problem.

@jory:neutral On your way out, Jory Penrose catches you up in the corridor. Up close he looks about nineteen, though he must be older, and very tired. "Sorry about all that," he says. "She's not as bad as she seems." He considers. "She's worse, actually. But she's right more often than she's wrong." He hesitates. "It's nice to see a face from the Row. Most people here look at the coat and stop talking."
*set fr_jory +1
*page_break
*comment ---------------------------------------------------------------- CH10.ORDER.02
*sid CH10.ORDER.02
*date 2026-11-16 16:00
*place P22 library
*present imogen jory familiar
@imogen:tense You find Imogen in the Long Stacks on Monday afternoon, and she's not reading. She's sitting at her usual table under the green lamp with her hands folded on top of an unopened book, staring at nothing, with her face set in the expression she wears when she's decided something and hasn't told anyone yet.

@imogen:neutral "I applied," she says, as you sit down. "To the Order. This morning. I walked into the Warding Hall and I asked for the Commander and I told her I wanted to join. I told her I'd read the whole handbook and every book in this library on the Choir and I had a list of every hollowing for forty years." She smiles, thinly. "She said [i]no students[/i]. She didn't even look at the list."

@jory:tense At the next table, Jory Penrose, off duty, is pretending very hard to read a book about Glimmerball.

@imogen:tense "But she'd take me," says Imogen, lowering her voice, leaning in, "if I brought her something. Something she needs. Something nobody else can give her." She looks at you, and her quick dark eyes are very bright. "And I think I know what that is."
*if told_imogen
  She doesn't have to guess. You told her. On the stand in September. [i]A Kindler.[/i]
*else
  "Your lantern," she says. "White, on the first night. Every candle in the Wordcraft Gallery. The ghost at Emberfall, walking straight to you, in front of the whole school. Volume nine of the regulations, the one they keep locked." She takes a breath. "I'm not stupid. I've read the one chapter there is. You're a Kindler. Aren't you."

  You don't answer. You don't have to. She sees it in your face.
@imogen:tense "If I tell the Commander what you are," says Imogen, very quietly, "she'll take me. I know she will. And I'll be in, and I'll be able to find out why nobody's ever tried to relight anyone, and I'll be able to [i]do[/i] something, for Kit, for all of them." Her hands are shaking on the book. "I'm asking. I'm not going to do it without asking. I'm asking you."
*if (st_imogen >= 3) and not(b_imogen_kit)
  @imogen:hurt And then, before you can answer, she tells you about Kit: her brother, hollowed three years ago in a subway on his way home, in his first term, before his letter came. St Ide's. [i]Hello, Immy,[/i] like she's someone he met at a party. It comes out all at once, flat and fast, like evidence, and at the end of it she takes her glasses off and puts her face in her hands.
  *set b_imogen_kit true
  *set st_imogen 4
*choice
  #"No. It's mine to tell, not yours. I'm sorry." Say it honestly, and mean it.
    *set nerve +5
    *if st_imogen >= 3
      *set b_imogen_order true
      *set st_imogen 4
    @imogen:hurt Her face goes white, and then red. For a second you think she's going to walk out. She stands up. She sits down again. "I know," she says, at last, very low. "I knew you'd say that. I think I wanted you to." She puts her glasses back on. "I'd have hated myself. Doing it. I'd have done it anyway, if you'd said yes, and I'd have hated myself for the rest of my life." She looks at you. "Thank you for saying no. Nobody ever says no to me. They just stop talking to me."
  #"Yes. Tell her. If it gets you in, and it helps Kit, tell her."
    *set heart +5
    *set told_arkwright true
    *if st_imogen >= 3
      *set b_imogen_order true
      *set st_imogen 4
    @imogen:hurt She stares at you. "You'd let me?"

    "If it helps him."

    @imogen:hurt Imogen Sallow looks at you for a long time across the green-lit table, and something in her face breaks, and mends, and breaks again. "I don't deserve that," she says. "I don't deserve you." And she gets up, and goes, fast, before you can see her cry. You hear, later, from Jory, who was pretending to read about Glimmerball, that she went straight to the Warding Hall and stood outside the Commander's door for twenty minutes, and then walked away, and didn't knock.
  #"Let me think about it." You need time, and so does she.
    *set wit +5
    *set st_imogen +1
    @imogen:neutral She nods, stiffly. "Of course," she says. "Of course. It's a lot to ask." She opens the book in front of her, at random, and stares at it without reading. "Take as long as you need."

@jory:neutral At the next table, very quietly, Jory Penrose closes his book about Glimmerball, and gets up, and leaves, and doesn't look back. You wonder how much he heard.
*page_break
*comment ---------------------------------------------------------------- CH10.ORDER.03
*sid CH10.ORDER.03
*date 2026-11-17 21:00
*mood night
*place P24 infirmary
*present noor holloway familiar
By Tuesday night, the Infirmary is full.

Not with injuries. With what Matron has started calling hum-sickness: first-years, mostly, and a few second-years, who can't sleep because they hear humming in the walls, and wake up with their hands so cold they can't hold a cup, and cry, and don't know why they're crying. Every bed is full. There are camp beds down the middle of the ward. There are students sitting on chairs by the fire wrapped in blankets, holding mugs of the burnt-sugar potion in both hands and shivering.

@holloway:neutral "She won't go to bed," says Matron Holloway, to you, at the door, in a low furious voice, jerking her head down the ward. "Three days. I've ordered her. She says [i]in a minute[/i]. It's been in a minute since Saturday."

@noor:tired Noor is at the far end of the ward, on her knees by a camp bed, holding a sobbing Owlcombe first-year's hands in hers, rubbing warmth back into them, talking to him low and steady. Her plait's come down. There are grey shadows under her eyes like bruises. Her hands, you can see from here, are shaking almost as badly as his.
*if (st_noor >= 3) and not(b_noor_carry)
  *choice
    #Take over. Kneel down on the other side of the bed, take the boy's other hand, and say "Go to bed. I've got this. I know how. You taught me."
      *set b_noor_carry true
      *set st_noor 4
      *set heart +5
      @noor:tense She looks at you across the camp bed. "I'm fine."

      "You're not. You taught me the obs. You taught me the quiet bit. Go to bed. I'll wake you at six."

      @noor:hurt For a long moment she just looks at you, with the boy's cold hand in hers. Then her face goes, all at once, the way a wall goes when the last brick is pulled out, and she puts the boy's hand into yours and gets up and walks down the ward very fast without looking back.

      You sit up all night with the hum-sick first-years. You do the rounds. You rub cold hands. At six, you wake her, and she comes back into the ward looking like a person again, and finds every chart filled in, and stands at the desk reading them for a long time.

      @noor:warm "Nobody does this," she says, very quietly, not looking up from the charts. "Nobody carries it for me. I don't know what to do when someone does."
    #Help her. Take the next bed. Work side by side till it's done.
      *set st_noor +1
      *set nerve +5
      You kneel down at the next camp bed and start rubbing a shivering second-year's hands, and Noor looks up and sees you, and nods, just once, and you work side by side down the ward all night. At four in the morning she falls asleep sitting up against a bedframe, and you let her.
*else
  *if b_noor_carry
    @noor:warm When she sees you, something in her shoulders comes down an inch. She doesn't say anything. She just moves over, so there's room for you on the floor beside her, and puts a cold small hand into yours to warm. You work beside her until two, and then you send her to bed, and this time she goes.
    *set st_noor +1
  *else
    You take the next bed, and the next. Noor looks up once, and nods. You work beside her until midnight, when Matron physically removes her from the ward.
    *set st_noor +1

It's a long night. At three o'clock, a Rookhallow first-year sits bolt upright in her bed and says, very clearly, into the dark: [i]It's under the Hall. The thing they want. It's under the Hall.[/i] And then lies down again and goes back to sleep, and in the morning doesn't remember saying anything at all.
*page_break
*comment ---------------------------------------------------------------- CH10.ARKWRIGHT.01
*sid CH10.ARKWRIGHT.01
*date 2026-11-18 17:00
*mood dusk
*place P25 weathervane_room
*present arkwright kestrel familiar
When you climb the narrow stair to the Weathervane Room for your Wednesday lesson, you can hear them arguing from three floors down.

@kestrel:grave "Absolutely not," the Headmistress is saying. "No. I won't have it, Sabine. Not in my school. Not with my students."

@arkwright:grave "Your school," says Commander Arkwright's voice, "has had two students hollowed in six weeks, Imelda, with your wards open and your Lanternwarden bricking up tunnels and your Warding master..."

They both stop when you come in. The weathervanes are all spinning, wildly, in every direction, the way they do in a storm.

@arkwright:neutral The Commander is standing by the fire with her greatcoat on. She looks at you, and then at the Headmistress, and then back at you. "Sit down," she says. "This concerns you. Imelda, I'm going to say it. You can throw me out after."

@kestrel:grave The Headmistress, at the window, doesn't say anything. Her face is very still. The small hawk on its perch has woken up, and is watching the Commander with its head low.

@arkwright:grave "Your lantern flared white on the first night," says Commander Arkwright. "Every candle in the Wordcraft Gallery lit at once. A ghost walked straight to you at Emberfall and said [i]you have it[/i]. The Headmistress sees you on your own every Friday." She takes a breath. "Forty years ago, a boy's lantern flared white on his first night in this castle. His name was Aldric Morrow. He was a Kindler. He's the man who leads the Grey Choir." She looks at you, steadily. "And I think he's coming here, to this castle, for you."

The weathervanes stop spinning, all at once.
*if told_arkwright
  She doesn't say how she knows. She doesn't need to. Somebody told her. You look at the Commander's face and you think, from the way she says [i]Kindler[/i], that she's known since Monday.
*set told_arkwright true
@arkwright:neutral "I'd rather he came where I'm waiting," she says. "Let the Order watch you. Openly. Where he can see. The Thimble Cross weekend, the fifth of December. You go into the village with your friends, like any student, and my people are there, all of them, in the crowd, and if he comes..."

@kestrel:grave "You'll use a first-year as bait," says the Headmistress, from the window, in a voice like ice cracking.

@arkwright:grave "I'll use the only thing I've got that he wants, Imelda. You know what he'll do if he gets in here. You know what he wants. You've known for forty years."

@kestrel:grave There's a long terrible silence.
*choice
  #"What happened to him? To Morrow? Forty years ago. I want to know."
    *set wit +5
    @kestrel:grave The Headmistress turns from the window. She looks at the Commander, and then at you, and something in her gives, a very little. "He was in my year," she says quietly. "A Warding exercise, our first February. Another student panicked and cast something he didn't understand, and it put Aldric's flame out. All of it. Like snuffing a candle." She closes her eyes. "The school was frightened, and ashamed, and the other boy's family was important. They sent Aldric home. They told him he'd recover. They told us not to talk about it." She opens her eyes. "I didn't talk about it. For forty years. That's my part in it."

    "Who was the other boy?"

    @kestrel:grave "That," says Imelda Kestrel, "isn't mine to tell. Not yet."
  #"All right. Let the Order watch me. If he's coming anyway, I'd rather it was somewhere with people."
    *set nerve +10
    *set fr_arkwright +1
    @arkwright:neutral The Commander looks at you with something that might be respect. "Good," she says. "Brave. Probably stupid. Good."

    @kestrel:grave The Headmistress doesn't say anything at all. She looks at you for a long time from the window, with her hazel eyes gone very dark. Then she says, "Then I'll be in the village too," in a voice that ends the conversation, and turns back to the glass.
  #"No. I'm not bait. I'm a student. I'm going to the village to buy sweets."
    *set heart +5
    *set fr_kestrel +1
    @arkwright:grave "He won't care what you're there for."

    "Then he can come and find me in the sweetshop," you say, "and you can be there anyway, and I won't know about it, and I'll have a nice day."

    @kestrel:amused The Headmistress, at the window, makes a sound that's very nearly a laugh. The Commander looks at you, and at her, and shakes her head slowly. "Fine," she says. "Have your nice day. We'll be there anyway."

When she's gone, clattering down the narrow stair in her greatcoat, the Headmistress stands at the window for a long time with her back to you, looking out at the dark coming down on the Mere.

@kestrel:grave "I'm sorry," she says, at last, without turning round. "I should have told you his name myself. At the beginning. I thought I could keep it from you. I thought if you didn't know, it couldn't find you." Her reflection in the black glass looks very old. "Nothing stays hidden in this castle. It never has."

Over the fireplace, in the tea-coloured varnish, the painted old woman in the oilskin coat is watching you both, and says nothing at all.
*set know_morrow true
*journal [b]Chapter 10.[/b] Bram Hollis was hollowed on the Rookery stairs, although the boathouse passage had been bricked up. The Order of the Lamp took over the Warding Hall. Commander Arkwright suspects Cas (his last argument was with Bram), Idris (who walks at night), and Professor Grey, who spent six years inside the Grey Choir. Imogen {@b_imogen_order|asked to use your secret to join the Order.|wants to join the Order.} The Commander told you the name: [b]Aldric Morrow[/b], the last Kindler, who leads the Grey Choir, and is coming for you.
*page_break
*goto_scene ch11
`);
