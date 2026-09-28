NB.scene("ch16", String.raw`
*mood night
*set ch 16
*chapter 16 What the Founders Hid
*comment ---------------------------------------------------------------- CH16.FILE.01
*sid CH16.FILE.01
*date 2027-02-20 21:00
*place P22 library
*present idris imogen familiar
Imogen works it out on a Saturday, a week after the Glimmer Cup, and she does it the way she does everything: all at once, out loud, in the wrong place.

@imogen:angry "You've got it," she says. It's nine o'clock at night, in the Long Stacks, and she's standing at the end of the long reading table where Idris is sitting with his books, and her voice rings off the shelves. "Morrow's file. His school file. It's been missing from the Owlcombe archive since last year, and you're the only person who's signed out a single thing from that archive in six years, and you walk round this library at two in the morning with a satchel you won't let anybody near." She puts both hands flat on the table. "You've got it. And I need it. Now."

@idris:tense Idris looks at her for a long moment. Then he looks at you, standing behind her, where you followed her because you could see what she was going to do.
*if b_idris_file
  @idris:neutral "I showed it to {name} at Candlewake," he says quietly. "I was going to show you next." He opens the satchel. "I suppose this is next."
*elseif (st_idris >= 3) and (hurt_idris < 2)
  *set b_idris_file true
  *set st_idris 4
  @idris:hurt "Yes," he says. "I've got it." And then, not to Imogen, to you: "I've been meaning to show you since Christmas. I kept losing my nerve." He opens the satchel with hands that aren't quite steady. "My mother was hollowed when I was seventeen. That's why I study Kindlers. Because a Kindler might have brought her back, and there weren't any." He puts a buff-coloured folder on the table. "And then there was you." He doesn't look away from you while he says it. Imogen, for once, doesn't say anything at all.
*else
  @idris:guarded "Yes," he says, after a long pause. "I've got it." He opens his satchel slowly, like a man handing over a weapon. "I took it because nobody else was reading it. I've been reading it for a year and a half. I don't know what I'm looking for." He puts a buff-coloured folder on the table. "Maybe you will."

The folder's old, buff-coloured, stamped with a faded red wren. [b]MORROW, Aldric J. Owlcombe. Entered 1985.[/b] Inside, a photograph of a laughing young man with a lot of dark hair and bright eyes, and reports that say [i]exceptional[/i] and [i]the brightest flame in a century[/i] and [i]we believe him to be a Kindler[/i]. And then a page dated February 1986, half blacked out: [i]Warding exercise. Incident. A student (name withheld at the request of the Deputy) cast an unsanctioned spell in panic. Aldric Morrow's flame was extinguished. Entirely. He has been sent home to recover. The matter is closed.[/i]
*clue e11
Imogen reads it three times. Then she takes out of her notebook a small stiff card, yellow with age, which she must have stolen from the founders' drawer, and puts it down beside the file.

It's the catalogue card for Hester Wren's journal. [i]Withdrawn, 1986.[/i] And under it, a signature, in faded blue-black ink.

@imogen:grave "Look," she says, and puts her finger on the signature, and then on the file, on the bottom of the page, where the same ink has signed off [i]The matter is closed[/i]. The same looping hand. The same name. "[i]C. Drummond, Deputy.[/i]" Her finger doesn't move. "The man who closed Morrow's case is the man who took Hester's journal out of the library. The same week."

@idris:grave Idris has gone very still. "Drummond," he says.

Nobody says Cas's name. Nobody has to.
*page_break
*comment ---------------------------------------------------------------- CH16.FILE.02
*sid CH16.FILE.02
*date 2027-02-22 16:00
*mood dusk
*place P25 weathervane_room
*present kestrel cas imogen familiar
The Headmistress listens to all of it, in the round room full of weather, with the file open on her desk and the catalogue card beside it and the weathervanes turning slowly on the ceiling above you. She doesn't interrupt. When Imogen has finished, she's quiet for a long time.

@kestrel:grave "Yes," she says at last. "Cornelius Drummond was the Deputy Head of this school in 1986. And the other boy, the one who panicked in the Warding exercise and cast something he didn't understand, was his son." She closes her eyes. "Lucius Drummond. My classmate. Casimir's grandfather."

She's sent for Cas. He's standing by the door, where he's been since he came in, with his back very straight and his hands behind him, and he hasn't said anything. His face has gone the colour of paper.

@kestrel:grave "Lucius was frightened of Aldric," says the Headmistress, quietly, to him. "Everyone was, a little. Aldric could do things none of us could. That February, in the Warding Hall, Professor Tamworth had us practising shields against a hum, and Lucius panicked, and cast a snuffing spell, a real one, an old one, a Drummond one, which he'd found in his father's library and should never have known. It hit Aldric full in the chest." She opens her eyes. "And his father made it go away. The file closed. The journal taken, in case anyone found out what a Kindler was and asked questions. Lucius sent to finish his year abroad. And Aldric sent home grey, and told he'd recover." She looks at Cas. "I was nineteen. I said nothing. I've been saying nothing for forty years. I'm sorry, Casimir. You should have heard this from me a long time ago."

@cas:hurt Cas doesn't say anything for a long time. Then he says, in a voice like broken glass: "He used to take me fishing. My grandfather. He was the only one who talked to me, the years I didn't kindle. He used to say, [i]some flames come late, Casimir, and they're the better for it[/i]." He laughs, horribly. "He knew. The whole time. He'd put one out."
*if (st_cas >= 3) and not(b_cas_family) and (hurt_cas < 2)
  *set b_cas_family true
  *set st_cas 4
  @cas:hurt He turns to you, not the Headmistress, as if you're the only other person in the room. "Do you know what they did to me," he says, "when I didn't kindle? My family? They took my portrait off the wall. They took my name out of the book. My father stopped speaking to me at dinner. For fourteen years. Because a Drummond who doesn't kindle is an embarrassment." His voice cracks. "And all that time, the man who sat at the head of the table had snuffed a Kindler in a classroom, and his father had covered it up. [i]That[/i] was fine. That was the family. I was the embarrassment."
  *choice
    #Go and stand next to him by the door.
      *set st_cas +1
      *set heart +5
      You go and stand beside him. You don't touch him. You just stand there, close, the way you'd stand next to someone on a platform in the rain. After a while, his shoulder leans against yours, just slightly, as if by accident. He doesn't move it away.
    #"You weren't the embarrassment. You were never the embarrassment."
      *set st_cas +1
      @cas:hurt He looks at you, and for a second his face is completely open, like a child's. Then he looks away, at the window, at the Mere going dark. "Say that again in a week," he says, hoarsely, "when I've got the sneer back on, and I might believe you."

@imogen:tense Imogen has been sitting very upright, holding the file in her lap. Now she stands.
*if (st_imogen >= 3) and not(b_imogen_order) and (hurt_imogen < 2)
  *set b_imogen_order true
  *set st_imogen 4
  @imogen:tense "I'm taking this to the Commander," she says. "All of it. The file, the card, the Deputy, Lucius Drummond. And what you are." She turns to you. "The Order won't take students. Arkwright told me so in November. But she'll take somebody who brings her the Kindler, and the reason Morrow wants them." Her voice is steady and her hands aren't. "I'm asking you again. Properly, this time. Can I tell her? It gets me in. It gets me close to the only people who might ever find a way to bring Kit back."
  *choice
    #"No. I'm sorry. It's still mine to tell."
      *set nerve +5
      @imogen:hurt She holds your eyes for a long moment. Then she nods, once, as if you've confirmed something she needed to know about you. "All right," she says. "Then I'll take her the file and the card and nothing else, and she'll probably still say no." She sits back down. "You're very annoying," she says, not angrily. "You're the only person I know who's never once let me win an argument by being right."
    #"Yes. Tell her. Tell her I'll back you up."
      *set heart +5
      *set told_arkwright true
      @imogen:surprised She stares at you. "You'd..." She stops. Swallows. "You'd stand in front of her with me. And let me use you." She looks down at the file in her lap. "I'm going to spend the rest of my life trying to deserve that," she says quietly. "I want you to know I know that."
*elseif b_imogen_order
  @imogen:grave "I'm taking this to the Commander," she says. "The file, the card, the Deputy. Not you. Just the paper." She looks at you. "You told me what you wanted, before. I haven't forgotten."
*else
  @imogen:grave "I'm taking this to the Commander," she says, to the Headmistress. "Somebody in the Order should know. Somebody should be writing it down."

@kestrel:neutral The Headmistress doesn't stop her. She's looking at Cas. "Honoria Drummond is still alive," she says. "Lucius's widow. Eighty-eight. She's at Hollin Ferry, in the old house. If anyone living knows where Cornelius put Hester's journal, it's her." She sighs. "I've written to her four times in thirty years. She's never answered."

@cas:guarded Cas straightens up, off the door frame. The sneer's not back. Something colder is. "She won't answer a letter from you," he says. "She'll answer me."
*page_break
*comment ---------------------------------------------------------------- CH16.HONORIA.01
*sid CH16.HONORIA.01
*date 2027-02-27 14:00
*mood day
*place P36 crooked_lantern
*present honoria cas kestrel moll familiar
Honoria Drummond will not set foot in Wrenfold. She says so in her letter, in four lines of black ink on thick cream paper, and she says that she will be in the back parlour of the Crooked Lantern in Thimble Cross at two o'clock on Saturday, and that her grandson may bring whomever he likes, and that she will not wait past a quarter past.

@cas:guarded "Come with me," Cas says to you, on the Friday night. He doesn't say please. He doesn't need to. "The Headmistress is coming, because she's the Headmistress. I want somebody there who's on my side."

@moll:neutral Moll Dunmore shows you through to the back parlour herself, which she never does, with her big red face gone careful. "In there," she says. "She's had a pot of tea and sent it back twice for being wrong." She lowers her voice. "Mind yourselves."
*meet honoria
@honoria:neutral The back parlour is small and dark and panelled, with a fire, and a window onto the snowy yard, and in a hard chair by the fire, with her back like a poker, sits the most formidable person you've ever seen. She's tiny, and eighty-eight, and she has Cas's cheekbones and a hawk's nose and cold pale eyes, and her white hair is in an immaculate knot, and she's in black lace and jet beads, and she doesn't get up.

@honoria:neutral "Casimir," she says. She looks past him at the Headmistress. "Imelda. You've got old." And then at you, for a long, pale, measuring moment. "And you're the reason."

@cas:guarded "Grandmother." Cas doesn't sit down. "You know why we're here."

@honoria:neutral "Of course I know why you're here," says Honoria Drummond. "I've been expecting someone for forty years. I rather thought it would be Imelda, but she never had the nerve." She reaches down beside her chair, to a black leather bag, and takes out two things, and puts them on the little table by the fire. A bundle of letters, tied with black ribbon. And a book: small, thick, bound in cracked brown leather gone soft as cloth, with a wren tooled in faded gold on the cover.

Your flame lifts its head. You feel it from across the room. Warm. Like the door in the Old Cloisters. Like the margin of the carol book.

@honoria:neutral "Hester Wren's journal," says Honoria Drummond. "My father-in-law took it home the week of the accident and locked it in his study, and when he died it came to me, and I've kept it in a drawer for thirty years, because I'm not one of you. I never was. I married into the Drummonds without a spark in me, and I watched what they did with theirs." She touches the letters. "And these are Lucius's. He wrote them to Aldric Morrow. Every year. For thirty-one years. He never sent one."
*clue e12
@honoria:neutral She unties the ribbon and takes out the top letter and holds it out. Not to the Headmistress. To Cas. "Read that one," she says. "The last. He wrote it the week he died."

Cas takes it. His hands are shaking. He reads it aloud, in a flat careful voice, as if every word is a step on ice:

[i]Aldric. I did it. Not by accident; I have told myself it was an accident for thirty years and it was not. I was afraid of you, and I had my father's book, and I wanted you smaller. I did not know it would put you out entirely. I did not know that was possible. When I saw your face after, grey, asking the Professor your own name, I wanted to die. Instead I went home and let my father make it go away, and I married, and I had a son and grandsons, and I sat at the head of my table for thirty years with your flame on my hands. I cannot give it back. I would give mine if I could. I am told that isn't how it works. Lucius.[/i]

Nobody says anything. The fire cracks. Out in the bar, somebody laughs.
*if (st_cas >= 3) and not(b_cas_debt) and (hurt_cas < 2)
  *set b_cas_debt true
  *set st_cas 4
  @cas:hurt Cas puts the letter down on the table very carefully, as if it might break. Then he turns, and walks out of the parlour, and out of the back door of the Crooked Lantern into the snowy yard, without his coat.
  *choice
    #Go after him.
      *set st_cas +1
      *set heart +5
      He's standing in the middle of the yard in the snow, between the barrels, with his arms wrapped round himself and his face turned up to the white sky. He's shaking. It isn't the cold.

      @cas:hurt "I have his hands," he says, when you stop beside him. "Everyone always said. [i]You've got your grandfather's hands, Casimir.[/i]" He holds them out, and looks at them. "These are the hands that put out a Kindler." He looks at you then. At you. The Kindler. "How can you stand to be near me? How can you stand to be anywhere near any of us?"

      "Because you're not him. You're the one who read the letter out loud."

      @cas:hurt He makes a sound like something tearing. And then he steps forward, and puts his forehead down on your shoulder, in the snow, in the yard of the Crooked Lantern, and stays there, shaking, with his grandfather's hands hanging at his sides, not touching you, as if he's afraid to. You put your arms round him. After a very long time, his hands come up, and hold on.

      @cas:warm "Whatever it costs," he says, into your shoulder. "Whatever I can do. I owe him. We all owe him. Whatever I can do to put it right, I'll do it." And then, quieter: "And I owe you. For coming out here."
    #Let him go. He'll come back in when he's ready. Stay with the Headmistress and the journal.
      *set wit +5
      You let him go. Through the parlour window, you watch him standing in the snowy yard between the barrels, with his arms wrapped round himself, not moving. After ten minutes, he comes back in, with snow in his hair, and sits down beside you without a word, and doesn't look at his grandmother, and doesn't let go of the edge of the table for the rest of the afternoon.
*else
  @cas:hurt Cas puts the letter down on the table very carefully, as if it might break. He doesn't say anything at all. He sits down, for the first time since he came in, in the hard chair opposite his grandmother, and looks at his own hands on his knees, as if they belong to someone else.

@honoria:neutral Honoria Drummond watches her grandson. For a moment, only a moment, something in her cold pale face gives. "I took your name out of the book, Casimir," she says. "Your father asked me to, and I did it, in front of you, because that is what Drummonds do, and I was more of a Drummond than any of them, having had to try so hard." Her mouth tightens. "It is the second worst thing I have done. The first was keeping quiet about that letter." She pushes the brown journal across the table, towards you. "Take it. Whatever's in it, it's done forty years of harm sitting in a drawer. Let it do something else." She stands up, with a stick you hadn't noticed, tiny and upright. "I shan't come again. Casimir. Write to me. Properly. Not like your grandfather." And she goes out through the bar, past Moll Dunmore and the staring students, like a small black ship.
*page_break
*comment ---------------------------------------------------------------- CH16.JOURNAL.01
*sid CH16.JOURNAL.01
*date 2027-02-27 21:00
*mood night
*place P25 weathervane_room
*present kestrel hester familiar
You read Hester Wren's journal that night, in the Weathervane Room, by the fire, with the Headmistress in the other chair and the weathervanes turning slowly on the ceiling and the snow ticking at the windows.

It's not what you expected. It's not a spellbook. It's a diary: a fisherwoman's diary, in a small strong slanting hand, full of weather and prices and complaints about her knees, and the names of the first late-kindled she took in, one by one, four hundred years ago, in a draughty old fort on the edge of a black lake. [i]Tom Brack, a smith, forty, set his forge alight with a look. He weeps at night. I have told him he may stay.[/i] [i]Old Nell from the ferry, sixty-one, sings the fish up. The Choir came for her at Martinmas. We sang them off. Lost two panes of glass.[/i]

And then, near the end, in a hand grown shakier:

[i]I am old and I will not see many more winters, and I will not leave them without a light. So I have gone down into the root of the rock under the Hall, as far as the stone goes, and I have taken my flame out of myself, which is a thing only a Kindler can do, and left it there, burning. It will light their lanterns and hold their wards when I am gone. I call it the Heartfire. I have told no one but Tom.[/i]

[i]A Kindler could carry it out again. Lift it from the rock and hold it in their own body, as I held it. Only a Kindler; anyone else it would burn to nothing. God keep it from any Kindler who would. I have hidden this page from the others. Let there be no Kindlers after me who are not kind.[/i]

You stop reading. Your hands have gone cold on the soft brown leather.

@kestrel:grave "That's it," says the Headmistress, very quietly, from the other chair. "That's what he wants. Not you. Not your flame. He's been stealing flames for forty years; one more is nothing to him. He wants the Heartfire. Hester's whole flame, four hundred years of it, enough to live on for ever. And he can't touch it. He's not a Kindler any more; it would burn him to nothing." She looks at you. "But you could carry it for him. Out of the rock. In your own body. And give it to him." She closes her eyes. "That's why Lettice Crane said he's coming back for what he lost, and you have it. He lost his gift. You have it. He needs yours to reach Hester's."
You think about the door in the Old Cloisters, warm as a hand. The pulse under the floor on Longnight, and your flame leaping to meet it like a dog to a voice it knows. How easy it would be. How much it wants you.

There's more. On the last written page, in the shakiest hand of all, there's music: square old notes on hand-drawn lines, four lines of them, one above the other, and at the top: [b]The Wren's Song, all voices.[/b] And beside each line, a tiny drawing. A lark. An owl. A heron. A rook.

[i]The first voice is the wren's, for whoever leads. The other four are kept in the four roosts, one to a house, and every house must sing its own. It will not work with one voice, nor two, nor ten. It wants all of them. That is the whole point of it. The Choir has one note and many throats; we must have many notes and one heart.[/i]

@hester:neutral And above the fireplace, in the tea-coloured varnish, the painted old woman in the oilskin coat, who has been watching you read her diary all evening with her bright wren-brown eyes, says, in a voice like wind in a sail:

@hester:neutral "Took you long enough."

@kestrel:surprised The Headmistress nearly drops her tea. You nearly drop the journal. The portrait of Hester Wren looks down at you both, cracked and crooked-smiling, and says nothing else at all, and won't, however much the Headmistress asks, all night.
*journal [b]Chapter 16.[/b] Morrow's school file, and the card for Hester's journal: both signed by C. Drummond, Deputy, in 1986. The Headmistress told the truth: the boy who snuffed Aldric Morrow was Lucius Drummond, Cas's grandfather, and his father covered it up. {@b_cas_family|Cas told you what his family did to him when he didn't kindle. |}In the Crooked Lantern, Honoria Drummond gave you Hester Wren's journal, and Lucius's unsent letters to Morrow: [i]not by accident; I wanted you smaller.[/i] {@b_cas_debt|In the snowy yard, Cas said whatever it costs, he'll put it right. |}In the journal: the Heartfire is Hester's own flame, left in the root of the rock; only a Kindler can lift it out and carry it. That's what Morrow wants you for. And the Wren's Song, all five voices: the wren's to lead, and one kept in each house's roost. [i]Many notes and one heart.[/i]
*page_break
*goto_scene ch17
`);
