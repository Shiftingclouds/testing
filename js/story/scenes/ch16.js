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

It's been a grey, sore, watchful week. Rowan is out of the Infirmary by Tuesday, pale and too warm and embarrassed by the fuss, with the skinny Rookhallow first-year he saved following him everywhere, carrying his books. The hoops have been taken down and not put back. The Lamplighters have questioned everyone who went near the pitch, and then everyone who didn't, and the castle has gone quiet in the way it went quiet after Delphine: people walking in threes, people glancing up at the lanterns before they sit down to eat. The snow's turned to sleet. The Mere is grey and rotten at the edges and nobody's allowed on it.

Imogen has been in the Long Stacks every hour she isn't in a lesson. You know because you've been bringing her sandwiches, and taking them away again uneaten, and bringing new ones. She's got the catalogue card spread out in front of her on the reading table, under a magnifying glass, and beside it a long list in her small fierce handwriting, which she won't let you read.

"What is it?"

@imogen:neutral "Every file signed out of the Owlcombe archive in the last twenty years," she says, without looking up. "Don't ask me how I got it. You'd have to testify."

On Saturday night, at a quarter to nine, she runs her finger down the list for what must be the fortieth time, and stops, and goes back up, and stops again. Then she stands up so fast her chair goes over.

@imogen:angry "You've got it," she says. She's standing at the end of the long reading table where Idris is sitting with his books, and her voice rings off the shelves. Up in her office window, Miss Dunne's head comes up like a startled bird. "Morrow's file. His school file. It's been missing from the Owlcombe archive since last year, and you're the only person who's signed out a single thing from that archive in six years, and you walk round this library at two in the morning with a satchel you won't let anybody near." She puts both hands flat on the table. "You've got it. And I need it. Now."

@idris:tense Idris doesn't answer at once. He takes off his glasses, and folds them, and puts them down on his open book, which is what he does instead of flinching. Then he looks past her at you, standing behind her, where you followed her because you could see what she was going to do.
*if b_idris_file
  @idris:neutral "I showed it to {name} at Candlewake," he says quietly. "I was going to show you next." He opens the satchel. "I suppose this is next."
*elseif (st_idris >= 3) and (hurt_idris < 2)
  *set b_idris_file true
  *set st_idris 4
  @idris:hurt "Yes," he says. "I've got it." Then, not to Imogen, to you: "I've been meaning to show you since Christmas. I kept losing my nerve." He opens the satchel with hands that aren't quite steady. "My mother was hollowed when I was seventeen. That's why I study Kindlers. Because a Kindler might have brought her back, and there weren't any." He puts a buff-coloured folder on the table. "And then there was you." He doesn't look away from you while he says it. Imogen, for once, doesn't say anything at all.
*else
  @idris:guarded "Yes," he says, after a pause long enough to hear the clocks. "I've got it." He opens his satchel slowly, like a man handing over a weapon. "I took it because nobody else was reading it. I've been reading it for a year and a half. I don't know what I'm looking for." He puts a buff-coloured folder on the table. "Maybe you will."

@imogen:neutral Imogen doesn't grab it. You'd have bet money she would. She stands there with her hands flat on the table a moment longer, breathing, and then she picks up her chair and sets it on its feet and sits down in it, opposite him, and says, in a different voice, "Thank you." It seems to surprise her as much as him.

The folder is old, and buff-coloured, and soft at the corners from handling, with a wren stamped on the cover in faded red. [b]MORROW, Aldric J. Owlcombe. Entered 1985.[/b] {@b_idris_file|You've seen it before, on the floor of the restricted cage, but it's different under the reading lamps with Imogen breathing beside you: smaller, somehow, and worse.|}

Imogen opens it. The first thing is the photograph.

@imogen:neutral She doesn't say anything for a moment. A young man, laughing, with a lot of dark hair and bright eyes, in Owlcombe plum and silver, caught halfway through turning to say something to whoever was holding the camera. "He looks," she says at last, and stops. "He looks like someone you'd want to sit next to at dinner."

@idris:grave "Everyone did," says Idris. "Read the reports."

@imogen:neutral She reads them aloud, in her flat, careful courtroom voice, as if each one's a piece of evidence. "[i]Exceptional.[/i] That's September. [i]The brightest flame this school has seen in a century.[/i] October. [i]We believe him to be a Kindler.[/i]" She glances up at you. You keep your face still. She goes on turning pages. Then she stops.

The last page is typed, and dated February 1986, and half of it is blacked out with thick ink. Imogen reads what's left of it more slowly.

@imogen:grave "[i]Warding exercise. Incident. A student, name withheld at the request of the Deputy, cast an unsanctioned spell in panic. Aldric Morrow's flame was extinguished. Entirely. He has been sent home to recover.[/i]" She takes a breath. "[i]The matter is closed.[/i]"

*clue e11
Nobody says anything. The clocks tick, all out of time with each other. Up in the dark of the shelves, a book shifts in its sleep.

@imogen:grave "[i]Name withheld at the request of the Deputy,[/i]" says Imogen, to herself. Then she opens her notebook and takes out a small stiff card, yellow with age, which she must have lifted from the founders' drawer, and lays it down beside the file, and lines up their edges exactly.

It's the catalogue card for Hester Wren's journal. [i]Withdrawn, 1986.[/i] And under it a signature in blue-black ink, faded almost to nothing: a loop, a stroke, a ghost of a name.

@imogen:grave "Look," she says. She puts her finger on the ghost on the card. Then she moves it to the bottom of the file's last page, where the same ink has signed off [i]The matter is closed[/i]: the same loops, the same long stroke. On the card, forty years of lamplight have bleached it away. In the file, shut in the dark all that time, it's as black as the day it was written.

"[i]C. Drummond,[/i]" you read. "[i]Deputy.[/i]"

@imogen:grave "The man who closed Morrow's case," says Imogen, "is the man who took Hester's journal out of the library." Her finger doesn't move. "The same week."

@idris:grave Idris has gone very still. "Drummond," he says.

Nobody says Cas's name. Nobody has to.

@imogen:grave Imogen takes her finger off the signature at last, and folds her hands in her lap, and stares at them, and for the first time since you've known her she doesn't seem to want to be right. "I'll have to take this to the Headmistress," she says, quietly. "And she'll have to send for him." She looks up. "I wish it was anybody else's name. I didn't think I'd wish that. I don't even like him."
*page_break
*comment ---------------------------------------------------------------- CH16.FILE.02
*sid CH16.FILE.02
*date 2027-02-22 16:00
*mood dusk
*place P25 weathervane_room
*present kestrel cas imogen familiar
The Weathervane Room at dusk on a Monday in February is full of dying light and rain.

It comes in grey through the tall windows and lies on the worn rugs and the heaped desk and the teacups nobody's cleared away. The fire's lit, and spits. Up on the ceiling, the hundred weathervanes turn slowly on their pins, all pointing different ways, cockerels and ships and running hares and one small iron wren, and every so often one of them creaks round a few degrees, as if the weather in some far-off place has changed its mind. Above the fireplace, in her cracked gilt frame, the painted founder watches with her bright wren-brown eyes.

The Headmistress has sent for Cas. He came in last, and he's standing by the door with his back very straight and his hands behind him, and he hasn't sat down, though there's a chair. You can hear him turning his signet ring, round and round, behind his back.

@imogen:neutral Imogen doesn't sit either. She stands in front of the Headmistress's desk with the file under her arm, like counsel in front of a bench. "Headmistress. I'll be brief."

@kestrel:neutral "You won't," says the Headmistress. "But go on."

@imogen:neutral Imogen lays the file on the desk, open at the photograph. "This is Aldric Morrow's school record. It left the Owlcombe archive some time ago; how it came to me isn't relevant." She lays the card beside it. "This is the catalogue card for Hester Wren's journal. Withdrawn in 1986. Signed." She turns the file to its last page and puts it next to the card, and steps back, and doesn't point. She doesn't need to.

@kestrel:grave The Headmistress doesn't look at the signatures straight away. She looks at the photograph for a long moment, the laughing boy in plum and silver. Then she puts on her reading glasses and bends over the card and the page, and touches the faded ink on the card with one finger, very lightly, the way you'd touch a bruise to see if it still hurts.

@kestrel:grave "You have been busy, Miss Sallow," she says.

@imogen:tense "Is it true?"

@kestrel:grave The fire settles and falls in. A weathervane creaks. "Yes," says the Headmistress. She takes her glasses off. "Cornelius Drummond was the Deputy Head of this school in 1986. He signed both."

@cas:guarded "And the student," says Cas, from the door. It's the first thing he's said. His voice is perfectly level. "The one whose name was withheld at the request of the Deputy."

@kestrel:grave The Headmistress looks at him across the room. "You know who it was, Casimir. I think you've known since you walked in."

@cas:guarded "Say it."

@kestrel:grave "Lucius Drummond. The Deputy's son. He was in my year." She doesn't look away from him. "Your grandfather."

Cas doesn't move. The ring stops turning.

@cas:guarded "What happened?" he says. "Exactly. Not the file."

@kestrel:grave The Headmistress is quiet for so long you think she isn't going to answer. Then she gets up, stiffly, and goes to the window, and stands with her back to the room, looking out at the rain on the Mere.

@kestrel:grave "It was a Friday," she says. "The fourteenth of February. Someone had pinned paper hearts on the Warding Hall door, and Professor Tamworth made them take them down. He had us in pairs, practising shields against a hum. He hummed it himself, on a pitch pipe, very badly." Something that is almost a smile, and isn't. "Nobody wanted to partner Aldric. His shields were too good; you came away with your hair standing on end. Lucius drew the short straw."

@imogen:tense "And Lucius panicked," says Imogen.

@kestrel:grave "Aldric's shield went up the way it always did. Like a sunrise, in a stone room in February. And I saw Lucius's face." She's quiet for a moment. "He wasn't angry. He was frightened. Everyone was, a little, of Aldric. Aldric could walk into a cold room and the fire would lean out of the grate to see him. And Lucius said a word I'd never heard before. An old one. A Drummond one, out of a book in his father's library that he should never have opened." Her hand has closed on the edge of the curtain. "It hit Aldric in the chest."

"What did it do?"

@kestrel:grave "I was standing next to him," says the Headmistress. "It took about as long as it takes to say it. He turned and looked at Lucius, surprised, as if someone had told a joke he didn't get. And then the colour went out of him. Out of his face, and his hands, and his hair. Like watching a photograph fade in a window." She stops. You hear her breathe. "Then he asked Professor Tamworth, very politely, what his name was."

Imogen has sat down, at last, without seeming to notice she's done it.

"And then?"

@kestrel:grave "And then what people do." She turns round. Her face is dry, and very old. "Tamworth ran for Matron. Matron ran for the Deputy. And the Deputy made it go away. The file was closed by the Monday. Lucius was sent to finish his year abroad. Aldric was sent home, grey, with a letter saying he'd recover. And Cornelius took Hester's journal out of the Stacks that same week, in case anyone went looking for what a Kindler was and started asking why we'd let one be put out."

@imogen:hurt "And you said nothing," says Imogen. It isn't quite an accusation. It's very nearly one.

@kestrel:grave "I was thirty-one, and a first-year, and frightened of the Deputy," says the Headmistress. "I said nothing. And then I went on saying nothing, for forty years, because every year it was harder to start." She looks at Cas. "I'm sorry, Casimir. You should have heard this from me a long time ago."

@cas:hurt Cas doesn't say anything. The rain runs down the windows. One of the weathervanes creaks round. Then he says, in a voice like broken glass: "He used to take me fishing. My grandfather. He was the only one who talked to me, the years I didn't kindle. He used to say, [i]some flames come late, Casimir, and they're the better for it[/i]." He laughs, horribly. "He knew. The whole time. He'd put one out."

You watch it land on him. Not all at once. In pieces, the way the cold gets into you on the ice: the fishing, the kind voice, the hand on his shoulder at the family table, each one turning over and showing what was underneath.
*if (st_cas >= 3) and not(b_cas_family) and (hurt_cas < 2)
  *set b_cas_family true
  *set st_cas 4
  @cas:hurt He turns to you, not the Headmistress, as if you're the only other person in the room. "Do you know what they did to me," he says, "when I didn't kindle? My family? They took my portrait off the wall. They took my name out of the book. My father stopped speaking to me at dinner. For fourteen years. Because a Drummond who doesn't kindle is an embarrassment." His voice cracks. "And all that time, the man who sat at the head of the table had snuffed a Kindler in a classroom, and his father had covered it up. [i]That[/i] was fine. That was the family. I was the embarrassment."
  *choice
    #Go and stand next to him by the door.
      *set st_cas +1
      *set heart +5
      You go and stand beside him. You don't touch him. You just stand there, close, the way you'd stand next to someone on a platform in the rain. After a while, his shoulder leans against yours, just slightly, as if by accident. He doesn't move it away.

      @cas:guarded He doesn't look at you. He looks straight ahead, at the painted founder over the fire. But his breathing, which was ragged, goes slower, and slower, until it matches yours.
    #"You weren't the embarrassment. You were never the embarrassment."
      *set st_cas +1
      @cas:hurt He turns to you, and for a second his face is completely open, like a child's. Then he looks away, at the window, at the Mere going dark. "Say that again in a week," he says, hoarsely, "when I've got the sneer back on, and I might believe you."

      "I'll say it every week."

      @cas:guarded "Don't," he says. But the corner of his mouth moves, very slightly, the wrong way for a sneer.

@imogen:tense Imogen has been sitting very upright, holding the file in her lap. Now she stands.
*if (st_imogen >= 3) and not(b_imogen_order) and (hurt_imogen < 2)
  *set b_imogen_order true
  *set st_imogen 4
  @imogen:tense "I'm taking this to the Commander," she says. "All of it. The file, the card, the Deputy, Lucius Drummond. And what you are." She turns to you. "The Order won't take students. Arkwright told me so in November. But she'll take somebody who brings her the Kindler, and the reason Morrow wants them." Her voice is steady and her hands aren't. "I'm asking you. Properly, to your face, not going behind your back. Can I tell her? It gets me in. It gets me close to the only people who might ever find a way to bring Kit back."
  *choice
    #"No. I'm sorry. It's still mine to tell."
      *set nerve +5
      @imogen:hurt She holds your eyes, and doesn't blink, and neither do you. Then she nods, once, as if you've confirmed something she needed to know about you. "All right," she says. "Then I'll take her the file and the card and nothing else, and she'll probably still say no." She sits back down. "You're very annoying," she says, not angrily. "You're the only person I know who's never once let me win an argument by being right."

      @imogen:warm She turns the file over in her lap, squaring its corners. "Kit would have liked you," she says, to the file. "He never let me win either."
    #"Yes. Tell her. Tell her I'll back you up."
      *set heart +5
      *set told_arkwright true
      @imogen:surprised She stares at you. "You'd..." She stops. Swallows. "You'd stand in front of her with me. And let me use you." She looks down at the file in her lap. "I'm going to spend the rest of my life trying to deserve that," she says quietly. "I want you to know I know that."

      @imogen:warm Then, because she's Imogen, and can't help it: "I'll draft what we're going to say. Tonight. You'll need to learn it. There'll be a copy under your door by breakfast."
*elseif b_imogen_order
  @imogen:grave "I'm taking this to the Commander," she says. "The file, the card, the Deputy. Not you. Just the paper." She glances at you. "You told me what you wanted, before. I haven't forgotten."
*else
  @imogen:grave "I'm taking this to the Commander," she says, to the Headmistress. "Somebody in the Order should know. Somebody should be writing it down."

@kestrel:neutral The Headmistress doesn't stop her. She's watching Cas. "There's one more thing," she says. "Lucius is dead. Cornelius is long dead. But Honoria Drummond is still alive. Lucius's widow."

@cas:guarded "My grandmother," says Cas, flatly.

@kestrel:neutral "Eighty-eight. At Hollin Ferry, in the old house. Cornelius took that journal home, and it never came back. If anyone living knows where it went, it's her." She sighs. "I've written to her four times in thirty years. She's never answered."

@cas:guarded Cas straightens up, off the door frame. The sneer's not back. Something colder is, something with a spine in it. "She won't answer a letter from you," he says. "She'll answer me."
*page_break
*comment ---------------------------------------------------------------- CH16.HONORIA.01
*sid CH16.HONORIA.01
*date 2027-02-27 14:00
*mood day
*place P36 crooked_lantern
*present honoria cas kestrel moll familiar
Honoria Drummond will not set foot in Wrenfold. She says so in her letter, in four lines of black ink on thick cream paper, and she says that she will be in the back parlour of the Crooked Lantern in Thimble Cross at two o'clock on Saturday, and that her grandson may bring whomever he likes, and that she will not wait past a quarter past.

@cas:guarded "Come with me," Cas says to you, on the Friday night, in the corridor outside the Lantern Hall, with the letter folded very small in his fist. He doesn't say please. He doesn't need to. "The Headmistress is coming, because she's the Headmistress. I want somebody there who's on my side."

Saturday is cold and clear and bright, the first bright day in a fortnight. The three of you walk down the shore path round the south end of the Mere, in the snow, the Headmistress in her long midnight-blue coat going ahead with her stick, you and Cas behind. Cas doesn't speak the whole way. Twice he stops, and stands looking at the ice, and then walks on. Thimble Cross is exactly as it was in December, crooked and bow-windowed and leaning together over its hill, with smoke going straight up from every chimney. There are fresh flowers in the snow on the spot in the high street where Odile Pellow planted her boots. Somebody's been putting them there every week.

@moll:neutral Moll Dunmore shows you through to the back parlour herself, which she never does, with her big red face gone careful. "In there," she says. "She's had a pot of tea and sent it back twice for being wrong." She lowers her voice. "Mind yourselves."
*meet honoria
@honoria:neutral The back parlour is small and dark and panelled, with a fire, and a window onto the snowy yard, and in a hard chair by the fire, with her back like a poker, sits the most formidable person you've ever seen. She's tiny, and eighty-eight, and she has Cas's cheekbones and a hawk's nose and cold pale eyes, and her white hair is in an immaculate knot, and she's in black lace and jet beads, and she doesn't get up.

@honoria:neutral "Casimir," she says. Her gaze moves past him to the Headmistress. "Imelda. You've got old." Then to you, for a long, pale, measuring moment. "And you're the reason. Casimir's letter was very full of you. It was very full, altogether. He's never written me more than a page in his life."

@kestrel:neutral "Honoria," says the Headmistress. She doesn't sit, either. "Thank you for coming."

@honoria:neutral "I didn't come for you," says Honoria Drummond. "You've written to me four times. I read them all. I didn't care for the handwriting." She turns back to her grandson.

@cas:guarded "Grandmother." Cas doesn't sit down. "You know why we're here."

@honoria:neutral "Of course I know why you're here," says Honoria Drummond. "I've been expecting someone for forty years. I rather thought it would be Imelda, but she never had the nerve." The Headmistress's mouth goes tight, and she says nothing, which is its own answer.

@cas:guarded "Have you got it?"

@honoria:neutral "Sit down, Casimir. You're looming. Your grandfather loomed." He doesn't sit. She lets it go. She reaches down beside her chair, to a black leather bag, and takes out two things, one at a time, and puts them on the little table by the fire.

The first is a bundle of letters, tied with black ribbon. The second is a book: small, thick, bound in cracked brown leather gone soft as cloth, with a wren tooled in faded gold on the cover.

Your flame lifts its head. You feel it from across the room. Warm. {@ch13_way = "stay"|Like the door in the Old Cloisters.|Like the floor of the Lantern Hall at Longnight.} Like the margin of the carol book.

@kestrel:neutral The Headmistress takes a step towards the table and stops herself. "Hester's," she says. It isn't a question.

@honoria:neutral "My father-in-law brought it home the week of the accident," says Honoria. "I remember the night. He came in late with his coat still on and went straight into his study and locked the door, and in the morning there was a new lock on the bottom drawer of his desk." Her mouth thins. "When he died, the house came to Lucius, and the desk to me. I kept the drawer locked. Thirty years."

"Did you read it?"

@honoria:neutral She turns her pale eyes on you. "I'm not one of you," she says. "I never was. I married into the Drummonds without a spark in me, and I watched what they did with theirs. I didn't need to read a book to know what was in that drawer. I knew it was something that had cost somebody everything." She lays her hand on the letters. "And these are Lucius's. He wrote them to Aldric Morrow. One every February. For thirty-one years." A pause. "He never sent one. He'd write it, and seal it, and give it to me to put away. As if I were the post office for his conscience."
*clue e12
@honoria:neutral She unties the ribbon and takes out the top letter and holds it out. Not to the Headmistress. To Cas. "Read that one," she says. "The last. He wrote it the week he died."

Cas takes it. His hands are shaking. He unfolds it, and looks at it for a moment without reading, as if the handwriting itself is something he has to get past first. Then he reads it aloud, in a flat careful voice, as if every word is a step on ice.

[i]Aldric. I did it. Not by accident; I have told myself it was an accident for thirty years and it was not. I was afraid of you, and I had my father's book, and I wanted you smaller.[/i]

He stops. He swallows. The fire cracks.

@kestrel:neutral "Go on, Casimir," says the Headmistress, very gently. "If you can."

[i]I did not know it would put you out entirely. I did not know that was possible. When I saw your face after, grey, asking the Professor your own name, I wanted to die. Instead I went home and let my father make it go away, and I watched my son grow up and my grandsons born, and I sat at the head of my table for thirty years with your flame on my hands.[/i]

His voice has gone very thin. He gets through the last lines on what sounds like the last of his breath.

[i]I cannot give it back. I would give mine if I could. I am told that isn't how it works. Lucius.[/i]

Nobody says anything. Out in the bar, somebody laughs at something, and the laugh goes on too long, and stops.

The Headmistress has turned to the window. You can't see her face. Her hand on the head of her stick is white at the knuckles.
*if (st_cas >= 3) and not(b_cas_debt) and (hurt_cas < 2)
  *set b_cas_debt true
  *set st_cas 4
  @cas:hurt Cas puts the letter down on the table very carefully, as if it might break. Then he turns, and walks out of the parlour, and out of the back door of the Crooked Lantern into the snowy yard, without his coat.
  *choice
    #Go after him.
      *set st_cas +1
      *set heart +5
      He's standing in the middle of the yard in the snow, between the barrels, with his arms wrapped round himself and his face turned up to the white sky. He's shaking. It isn't the cold.

      @cas:hurt "I have his hands," he says, when you stop beside him. "Everyone always said. [i]You've got your grandfather's hands, Casimir.[/i]" He holds them out and studies them, long and pale and fine-boned, with the signet ring on the fourth finger. "These are the hands that put out a Kindler." Then he looks at you. At you. The Kindler. "How can you stand to be near me? How can you stand to be anywhere near any of us?"

      "Because you're not him. You're the one who read the letter out loud."

      @cas:hurt He makes a sound like something tearing. Then he steps forward, and puts his forehead down on your shoulder, in the snow, in the yard of the Crooked Lantern, and stays there, shaking, with his grandfather's hands hanging at his sides, not touching you, as if he's afraid to. You put your arms round him. After a very long time, his hands come up, and hold on.

      @cas:warm "Whatever it costs," he says, into your shoulder. "Whatever I can do. I owe him. We all owe him. Whatever I can do to put it right, I'll do it." Then, quieter: "And I owe you. For coming out here."

      You stay in the yard until he stops shaking, and a bit longer. When you go back in, together, with snow in your hair, his grandmother hasn't moved from her chair.
    #Let him go. He'll come back in when he's ready. Stay with the Headmistress and the journal.
      *set wit +5
      You let him go. Through the parlour window, you watch him standing in the snowy yard between the barrels, with his arms wrapped round himself, not moving. Nobody in the parlour speaks. His grandmother watches him through the glass and doesn't blink.

      After ten minutes, he comes back in, with snow in his hair, and sits down beside you without a word, and doesn't look at his grandmother, and grips the edge of the table as if the floor might tip.
*else
  @cas:hurt Cas puts the letter down on the table very carefully, as if it might break. He doesn't say anything at all. He sits down, for the first time since he came in, in the hard chair opposite his grandmother, and stares at his own hands on his knees, as if they belong to someone else.

@honoria:neutral Honoria Drummond watches her grandson. For a moment, only a moment, something in her cold pale face gives. "I took your name out of the book, Casimir," she says. "Your father asked me to, and I did it, in front of you, because that is what Drummonds do, and I was more of a Drummond than any of them, having had to try so hard." Her mouth tightens. "It is the second worst thing I have done. The first was keeping quiet about that letter."

@cas:hurt Cas lifts his head. He doesn't say anything. But he meets her eyes, for the first time since you came in, and holds them, and it's his grandmother who looks away first.

@honoria:neutral She pushes the brown journal across the table, towards you. "Take it. Whatever's in it, it's done forty years of harm sitting in a drawer. Let it do something else." She stands up, with a stick you hadn't noticed, tiny and upright. "I shan't come again. Casimir. Write to me. Properly. Not like your grandfather." She goes out through the bar, past Moll Dunmore and the staring students, like a small black ship.

The journal sits on the table in front of you, in the firelight. It's warm. You can feel it without touching it, the way you can feel a stove across a room. When you finally pick it up, it's light, and soft, and it fits your hands as if it's been waiting for them.
*page_break
*comment ---------------------------------------------------------------- CH16.JOURNAL.01
*sid CH16.JOURNAL.01
*date 2027-02-27 21:00
*mood night
*place P25 weathervane_room
*present kestrel hester familiar
You read Hester Wren's journal that night, in the Weathervane Room, by the fire, with the Headmistress in the other chair and the weathervanes turning slowly on the ceiling and the snow ticking at the windows.

Neither of you suggested it. You just came back from Thimble Cross in the blue dusk, and walked up to the Weathervane Room together without a word, and she put another log on the fire and poured two cups of tea and sat down, and so did you. {fam_name} settles {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|on the back of your chair|at your feet on the hearthrug}. The fire's warm on one side of your face. The book is warm in your hands.

@kestrel:neutral "Well," says the Headmistress. "Go on. It came to you, not to me."

You open it.

It's not what you expected. It's not a spellbook. It's a diary, in a small strong slanting hand, and the first page is about the weather.

"[i]Wind in the north-east three days. Herring a penny dearer. My knees are bad.[/i]"

@kestrel:amused The Headmistress laughs, once, into her tea, and then presses her hand to her mouth as if she's surprised herself. "Four hundred years," she says. "And it's the weather and her knees. Oh, Hester."

You turn the pages. The fort on the edge of a black lake, draughty and leaking. The people who came, one by one, and what they could do, and what she did with them. You read some aloud, because you can't not.

"[i]Tom Brack, a smith, forty, set his forge alight with a look. He weeps at night. I have told him he may stay.[/i]"

@kestrel:warm "She said that to me," says the Headmistress, softly. "Not in those words. The night I came. I'd blown up a greengrocer's and I cried all the way across the Mere, and the old Headmaster gave me soup and said I could stay." She shakes her head. "I thought he'd made it up himself."

"[i]Old Nell from the ferry, sixty-one, sings the fish up. The Choir came for her at Martinmas. We sang them off. Lost two panes of glass.[/i]"

You both go still at that. Neither of you says anything. You turn the page.

The hand gets shakier as the pages go on, and the entries shorter, and further apart. Then, near the end, there's a page that's different. The writing is small and careful, as if she took a long time over each word.

[i]I am old and I will not see many more winters, and I will not leave them without a light. So I have gone down into the root of the rock under the Hall, as far as the stone goes, and I have taken my flame out of myself, which is a thing only a Kindler can do, and left it there, burning. It will light their lanterns and hold their wards when I am gone. I call it the Heartfire. I have told no one but Tom.[/i]

You stop, and read it again, and then you look up. The Headmistress has put her cup down on the hearth.

"The lanterns," you say. "All of them. Ten thousand lanterns. That's her."

@kestrel:grave "That's her," says the Headmistress. "I've known the word since my first year here. I never knew what it was. Read the next bit."

[i]A Kindler could carry it out again. Lift it from the rock and hold it in their own body, as I held it. Only a Kindler; anyone else it would burn to nothing. God keep it from any Kindler who would. I have hidden this page from the others. Let there be no Kindlers after me who are not kind.[/i]

Your hands have gone cold on the soft brown leather.

"Only a Kindler can carry it."

@kestrel:grave "Yes."

"Morrow was a Kindler."

@kestrel:grave "Was." She's watching you, with her empty hands folded in her lap. "Forty years ago. What's in him now isn't his. It's borrowed. Stolen. A flame from here, a flame from there, a few months at a time. It would burn him to nothing, if he touched this. Hester says so."

You sit with that. The fire ticks. Up on the ceiling a weathervane creaks round, and then another, as if a wind has gone through the room.

"But I could carry it," you say. Your voice doesn't sound like yours. "Out of the rock. And give it to him."

@kestrel:grave The Headmistress doesn't answer. That's the answer.

You think of Lettice Crane at Emberfall, silver and see-through among the red lanterns, smiling her sad smile: [i]he's coming back for what he lost. And you have it.[/i] You thought she meant your flame. All this time you've thought he wanted to take something from you. He doesn't. He wants you to fetch it for him.

@kestrel:grave "Four hundred years of fire," says the Headmistress, very quietly. "No more hunting. No more stealing a flame and feeling it gutter by the spring. Enough to live on for ever." She closes her eyes. "He lost his gift. You have it. He needs yours to reach Hester's."

You think about {@ch13_way = "stay"|the door in the Old Cloisters, warm as a hand|the warm places in the floor, the ones you've been walking over since January}. The pulse under the Lantern Hall on Longnight, and your flame leaping to meet it like a dog to a voice it knows. How easy it would be. How much it wants you.

"Would it come? If I went down there?"

@kestrel:grave "Yes," she says at last. "I think it would. I think it's been calling you since your first night." She opens her eyes, and they're very bright and very hard. "Which is why you are never, ever going to go down there alone. Do you hear me? Not for anyone. Not for any reason."

"I hear you."

@kestrel:tired "Good." She picks her cup up off the hearth, and finds it cold, and holds it anyway. "Is there more?"

There is. On the last written page, in the shakiest hand of all, there's music: one line of square old notes on hand-drawn staves, the tune you know, the one Odile sang, the one {@ch13_way = "home"|Nana hums at the sink|Miss Dunne showed you on page ninety-one}, and at the top: [b]The Wren's Song, all voices.[/b] Beneath it, four more staves, ruled carefully, and left empty. And beside each empty line, a tiny drawing. A lark. An owl. A heron. A rook.

Underneath, the last words she wrote:

[i]The first voice is the wren's, for whoever leads. The other four are kept in the four roosts, one to a house, and every house must sing its own. It will not work with one voice, nor two, nor ten. It wants all of them. That is the whole point of it. The Choir has one note and many throats; we must have many notes and one heart.[/i]

@kestrel:neutral The Headmistress leans over to look, and puts one finger, very lightly, beside the little drawn wren at the top of the page. "In the roosts," she says. "Four hundred years, the lanterns have been flying up to them every September. I've stood under them more Septembers than I can count." She sits back. "And I never once thought to listen."

@hester:neutral Above the fireplace, in the tea-coloured varnish, the painted old woman in the oilskin coat, who has been watching you read her diary all evening with her bright wren-brown eyes, says, in a voice like wind in a sail:

@hester:neutral "Took you long enough."

@kestrel:surprised The Headmistress nearly drops her tea. You nearly drop the journal. The portrait of Hester Wren looks down at you both, cracked and crooked-smiling, and says nothing else at all, and won't, however much the Headmistress asks, all night.
*journal [b]Chapter 16.[/b] Morrow's school file, and the card for Hester's journal: both signed by C. Drummond, Deputy, in 1986. The Headmistress told the truth: the boy who snuffed Aldric Morrow was Lucius Drummond, Cas's grandfather, and his father covered it up. {@b_cas_family|Cas told you what his family did to him when he didn't kindle. |}In the Crooked Lantern, Honoria Drummond gave you Hester Wren's journal, and Lucius's unsent letters to Morrow: [i]not by accident; I wanted you smaller.[/i] {@b_cas_debt|In the snowy yard, Cas said whatever it costs, he'll put it right. |}In the journal: the Heartfire is Hester's own flame, left in the root of the rock; only a Kindler can lift it out and carry it. That's what Morrow wants you for. And the Wren's Song, all five voices: the wren's to lead, and one kept in each house's roost. [i]Many notes and one heart.[/i]
*page_break
*goto_scene ch17
`);
