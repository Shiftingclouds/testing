NB.scene("ch06", String.raw`
*mood night
*set ch 6
*chapter 6 The Hollowed Girl
*comment ---------------------------------------------------------------- CH06.DAWN.01
*sid CH06.DAWN.01
*date 2026-10-05 06:20
*place P20 glasshouses
*present familiar
October comes in on a wet west wind that rattles the window-leading all night and strips the first leaves off the trees on the island. The Mere goes the colour of slate. Fires are lit in the common rooms in the afternoons now, and people come in from Herbwork with their hair plastered flat and stand steaming in front of them, and the whole castle smells of woodsmoke and wet coats and the cinnamon Mrs Pettigrew has started putting in everything.

You go up to the Weathervane Room on Friday at five and eat lemon cake and learn to look at a candle without seeing through it, which is harder than it sounds. You go to Hearth and lie on the floor and breathe. You don't see anything through any walls, and you don't hear any humming, and by the end of the week you've nearly managed to believe that the stair was a dream.

It's the lanterns that wake you. Not a sound. A colour.

You open your eyes at five in the morning, on Monday, in the grey half-dark, and the light coming under the dormitory door is wrong. It should be gold, the warm night-light gold of the lanterns in the stairwell. It's grey. Flat, cold, dirty grey, like the light in a room where someone's died and nobody's opened the curtains.

{fam_name} is standing on your chest, rigid, staring at the door.

You get up. Everybody's getting up: doors opening all over the castle, voices, somebody running on the stair in bare feet. In the Lantern Hall, when you get there in your dressing gown with half your house behind you, all ten thousand lanterns have gone grey. They're still lit. They're still drifting. But every one of them is burning the colour of ash, and none of them is humming, and the Hall is so quiet you can hear people breathing. Somebody beside you whispers "What is it? What's happened?" and nobody answers, because nobody knows.

Then, from somewhere outside, towards the lake, someone starts screaming.

You run. Everyone runs: out through the great doors and down the steps and across the lawn, in slippers and bare feet and borrowed coats, the grass soaking and freezing, the sky over the Mere just beginning to go from black to pewter. By the time you get to the Glasshouses there are thirty people on the wet lawn, and the Headmistress is striding across the grass towards them from the other direction with her silver braid undone and her face like stone.
*present rhys delphine noor kestrel familiar
*meet rhys
*meet delphine
The Glasshouses are three long Victorian greenhouses on the south lawn, white-painted iron and fogged glass, full of green. The door of the middle one is standing open, and warm damp air is breathing out of it into the cold, smelling of earth and tomato leaves. Inside, among the pots of grumbles and the tall humming vines, there's a bench. And on the bench, sitting very straight with her hands folded in her lap, is Delphine Arceneaux: {@house = "heronmere"|your own prefect, the one with the violet hair, who stood at the bottom of the Heronmere stair on your first night and told you all to stand still|the Heronmere second-year with the violet hair, whom you've seen laughing in the corridors with a tray of hot chocolate, and who always seemed to know everybody's name}.

@rhys:sad Professor Rhys is kneeling on the wet tiles in front of her in a nightdress and wellingtons, holding both of Delphine's hands, crying without making any sound. She's a sturdy rosy woman with a battered hat, and there's a live snail on the hat, and she's saying "Delphine, love, Delphine, look at me, love," over and over.

@delphine:hollowed Delphine looks at her, and smiles, the way you'd smile at a stranger who's held a door for you. "Good morning," she says. Her voice is perfectly clear and perfectly flat, like someone reading from a card. "Is it morning? I'm sorry. I don't... I was going to water the..." She looks down at the grumbles in their pots at her feet, and goes on looking, as if she's trying to remember what they are. "I was going to water them," she says again.

Her skin has gone grey. Not pale. Grey, faintly, all over, like a photograph that's been left in the sun. Her eyes are the colour of fogged glass. Her beautiful violet hair looks as if it's been dusted with ash. There's a watering can on the tiles beside the bench, on its side, and a slow dark puddle spreading from it that nobody has noticed.

You look at her, and before you can stop it, the flame-sight comes up behind your eyes.

There's nothing there.

In everyone else on that lawn there's a light: frightened flickers, bright scared candles, Professor Rhys's warm green grief like a lamp in a storm. In Delphine, where her flame should be, behind her breastbone, there's a hole. Not darkness. Absence. A place where something was, very recently, and was taken, all of it, whole, and the edges of the hole are still cold. It's like looking at the gap where a tooth was.

You have to hold on to the doorframe. The iron's wet and freezing under your hand, and you're grateful for it, because it's the only thing that feels real.
*if (kindling >= 20) or (wit >= 35)
  Because you're holding on to the doorframe, you see the other thing. There's a ward-stone set into the path just outside the glasshouse door: a round grey stone with an old sign carved in it, one of the hundreds that ring the island. In the flame-sight, every ward-stone you've ever passed has had a thread of light running from it down into the ground, to the great glow under the castle, thin and bright and taut. This one's thread has been cut. Not snapped. Cut. And it's been cut on the castle side of the stone, from the inside, the way you'd lift a latch to let somebody in.

  You look at it until you're sure. Then you look away, quickly, as if someone might see you looking.
  *clue e03
  *set wit +5

@noor:tense Noor pushes past you. She's in a coat over pyjamas, with her plait half undone, and her face has gone into the flat calm that you've learned means she's frightened. She kneels by Professor Rhys and takes Delphine's pulse at the wrist, and then at the neck, and looks at her pupils with a pen-torch from her coat pocket. Of course she has a pen-torch in her coat pocket.
*choice
  #Kneel down beside Noor and help. Do what she tells you.
    *set heart +5
    *if st_noor >= 2
      *set b_noor_shift true
      *set st_noor 3
    *else
      *set st_noor +1
    You kneel down on the wet tiles next to her. The water from the watering can soaks straight through your pyjamas at the knee. You don't care.

    @noor:neutral She doesn't look at you. "Hold the torch," she says. "Here. Steady." You hold it. "Pulse sixty, regular. Pupils equal and reactive. Breathing normal. Temperature..." She puts the back of her hand on Delphine's forehead, and her face changes. "Cold. She's cold. Get me a blanket. Anyone's. Yours."

    You give her your dressing gown. She wraps it round Delphine's shoulders, very gently, and Delphine says "Thank you" in that clear flat voice, and smooths the lapel as if it were a nice thing somebody had lent her for a party. Noor's hands, you notice, are shaking so badly she has to hold them together.

    @noor:tired "Nothing's wrong with her," says Noor, under her breath, only to you. "Nothing. Pulse, pupils, breathing, all fine. There's nothing wrong with her at all." She looks at you, and for a second she's not a nurse, she's just someone kneeling in a puddle at dawn. "Why is there nothing wrong with her?"

    You don't have an answer. You hold the torch steady, because she asked you to, and because it's the only thing you can do.
  #Go and stand with the others by the door. Keep them back. Give Delphine some air.
    *set nerve +5
    *set st_noor +1
    You turn round and put your arms out and move the crowd back from the glasshouse door, the way you'd hold people back at the scene of an accident on the high street, without really knowing how you know to. "Give her room," you say. "Give them room to work." People step back. Some of them are crying.

    Toby's among them, in his cardigan over his pyjamas, with his face white and Custard pressed against his ankles. Delphine was his prefect. Delphine made him hot chocolate on his first night, and told him the fish knew what they were doing.

    @noor:neutral Behind you, without looking round, Noor says "Thank you," in the voice she must have used a thousand times on the other side of a curtain. You keep your arms out until your shoulders ache.
  #Look closer at the hole where her flame was. Try to see if there's anything left.
    *set kindling +5
    *set flame +5
    You look. You make yourself look, the way you'd make yourself look at a wound. Into the hole.

    It's so cold. It's like putting your face into a freezer. And there's nothing, nothing at all, no ember, no spark, no thread. Whatever took her flame took it clean. Somewhere very far down in the cold, you can hear it: the faintest echo, like the last note of a song in an empty room. A hum.

    You pull back, gasping. {fam_name} is pressed against your legs, shaking. For a moment the whole lawn swims, and the sky tips, and you think you're going to be sick on the Headmistress's tomatoes. You breathe out for six. Then again. The world comes slowly back, piece by piece, like a room when somebody draws the curtains.

@kestrel:grave The Headmistress comes in. She doesn't say anything. She stands and looks at Delphine with her face perfectly still, while the watering can drips and the vines hum and somebody outside is still crying. Then she kneels down on the wet tiles beside Professor Rhys, in her midnight-blue robes, and puts her arms round both of them, and holds them.

Over her shoulder, through the fogged glass, you can see the Lantern Hall's great round window high up in the castle wall. The lanterns behind it are grey.
*page_break
*comment ---------------------------------------------------------------- CH06.HALL.01
*sid CH06.HALL.01
*date 2026-10-05 08:00
*mood day
*place P13 lantern_hall
*present kestrel toby mina cas grey priya familiar
Somebody lends you a jumper. You don't remember who. You sit on the end of your bed with it on for an hour, not getting dressed, looking at the wall, while round you the dormitory whispers and stops and whispers again. At half past seven a bell goes that you've never heard before, low and slow, and everybody goes down.

The lanterns come back to gold at about seven, slowly, the way colour comes back into a face. But they don't hum. All through breakfast, which nobody eats, they keep drifting away from the doors and the windows, into the middle of the Hall, bunching together over the tables like sheep in a field when there's a dog about.

The porridge goes cold in its tureens. Nobody touches the toast. There's a low, constant murmur, the sound of four hundred people all saying the same thing to each other quietly, and underneath it, the scrape of benches and the clink of cups that nobody's drinking from.

@kestrel:grave The Headmistress stands up at the High Table at eight, and the Hall goes so quiet you can hear the toast racks creak. She's put her braid back up. Her face is grey with tiredness, and her voice, when it comes, is as steady as it was on the first night.

@kestrel:grave "Delphine Arceneaux, of Heronmere, was hollowed last night," she says. "In the Glasshouses. Sometime before dawn. Her flame was taken. She's alive, and in no pain, and she's been taken to St Ide's in Kingsmere, where they know how to care for her. Her family's with her." A pause. "I'm not going to tell you that she'll get better. I don't lie to people in this Hall."

Somebody at the Heronmere table makes a sound. Priya Menon has her face in her hands. Toby, next to her, has put one hand very carefully on her back.

@kestrel:neutral "From tonight, curfew is at nine. Nobody walks the grounds alone after dark. Every house will have a prefect awake at night. The Order of the Lamp has been informed." She looks down the Hall, at every table. "I asked you on your first night to keep your flame close. I'm asking you again. Keep it close. Keep each other close. And if you hear humming, you run to a lit room full of people, and you shout."

She sits down. For a while, nobody says anything at all. Up in the dark, one lantern drifts a little way out from the huddle, and thinks better of it, and drifts back.

*meet mina
@mina:neutral Then everybody says everything at once. Mina Achebe, at the Owlcombe table, headphones round her neck, has a crowd round her already. "The wards failed," she's saying, low and fast, to anyone who'll listen. "That's what I heard. The south ward, by the Glasshouses. Four hundred years and it just [i]failed[/i]. Or somebody..." She stops. Lowers her voice further. "Somebody [i]opened[/i] it."

[i]Somebody opened it.[/i] It goes round the Hall like a draught. You see people look at each other, and then look away. You see people look at the High Table.

@grey:neutral At the High Table, Professor Grey is sitting at the far end, alone, with his scarred hands folded in front of an untouched plate, staring at nothing. There's an empty chair on either side of him. You notice that, and you notice people noticing it, and you remember a man in a stone hall humming the Choir's note so well that every lamp leaned away from him.

@cas:neutral At the {@cas_house = "owlcombe"|Owlcombe|Rookhallow} table, Casimir Drummond gets up.

He's been sitting alone, as always, at the end of the bench. He walks down the Hall, not fast, with everybody's eyes on him because he's the only person moving. He stops at the Heronmere table, next to the empty place where Delphine sat. He takes something out of his pocket and puts it down on her plate. Then he walks out of the Hall without looking at anybody, and the door swings shut behind him, and the murmur starts up again, uglier than before.
*choice
  #Go over and see what he left.
    *set heart +5
    *if st_cas >= 2
      *set b_cas_kind true
      *set st_cas 3
    *else
      *set st_cas +1
    You go over. It's a flower: a single white rose, the kind that grows in the Headmistress's walled garden, which nobody's allowed in. There's a card, folded once, in handwriting so precise it looks printed: [i]She lent me a pencil on my first day, when nobody else would sit near me. I never gave it back. I'm sorry. C.D.[/i] Folded inside the card is a pencil.

    You stand there holding it. Toby, beside you, reads it over your shoulder, and goes very quiet.

    @toby:sad "I didn't know he could be sad," he says, at last. "I thought he just... sneered."

    You put the card back on the plate, under the rose, where Delphine's friends will find it.

    You find Cas later, after lessons that nobody's really attending, in a window seat on the fourth floor with his knees drawn up, looking at the Mere. The rain's come back. It's running down the glass in long crooked lines. You don't say anything about the rose. You just sit down at the other end of the seat.

    @cas:guarded "Don't," he says, without looking round.

    "I wasn't going to."

    @cas:hurt He's quiet a long while. The rain goes on. Somewhere below, a door bangs, and someone runs down a corridor, and the sound fades. "She lent me a pencil," he says, eventually, to the window. "That's all. It was nothing. It was just a pencil." His voice cracks on [i]pencil[/i], and he turns his face away, and you sit with him until he stops.

    @cas:guarded When he's finished, he wipes his face with the heel of his hand, crisply, like someone correcting a mistake in a ledger. "If you tell anyone about this," he says, "I'll deny it, and nobody will believe you." A pause. "Thank you."
  #Watch Professor Grey instead. Nobody's sitting near him. You want to know why.
    *set wit +5
    You watch Grey. He doesn't eat. He doesn't talk to anyone. Once, somebody at the Larkspire table says something about him, not quite quietly enough, and he doesn't look up, but his scarred hands tighten on each other until the knuckles show white. When the Headmistress passes behind his chair on her way out, she puts her hand on his shoulder, very briefly, and he closes his eyes.

    Then he gets up, and leaves by the door behind the High Table, and in the flame-sight, just for a moment, you see his flame: a big, heavy, iron-coloured light, banked down low like a fire that's been covered for the night. Steady. Very old. Round it there's something like scar tissue: a pale thick band, as if at some point, a long time ago, something tried very hard to put it out, and couldn't.

    You don't know what it means. You file it away, in the place where you're starting to keep things like that.
  #Stay with Toby. He's holding Priya together and he's shaking.
    *set fr_toby +1
    *set heart +5
    You go and sit on Toby's other side, and put your arm round him while he keeps his hand on Priya's back, and the three of you sit like that, not eating, in the silent Hall, while the lanterns bunch up over your heads like frightened birds.

    @priya:warm "Thank you," says Priya, eventually, lifting her face. Her eyes are red. She looks at Toby. "Both of you."

    @toby:sad Toby doesn't say anything. He just keeps his hand where it is. You can see his little oven-light flame, frightened, burning as steadily as he can make it, for her.

    @priya:warm "She was going to teach me the lily pool," says Priya, after a while, to nobody. "Where the carp go in winter. She said there's a trick to finding them." She laughs, a small wet laugh. "I never asked her what the trick was."

    Toby moves his hand, just slightly, up and down her back. Out for six. You don't think he even knows he's doing it.
*page_break
*comment ---------------------------------------------------------------- CH06.DETENTION.01
*sid CH06.DETENTION.01
*date 2026-10-06 19:00
*mood dusk
*place P28 tully_cottage
*present tully familiar
You half expect Mr Tully to cancel your detention. He doesn't.

At a quarter to seven on Tuesday you go down the long path from the castle to the water, with your collar up against the drizzle and {fam_name} close beside you. It's nearly dark already. The Mere's black and flat, and the lamps along the path have been turned up higher than you've ever seen them, and every thirty yards or so there's a prefect standing under one with their wand out, looking at the trees. Nobody walks the grounds alone after dark now. The Lanternwarden's cottage is apparently the exception.

The cottage is a crooked stone building down by the boathouse, at the water's edge, with smoke coming out of a chimney that leans. Inside, it's all lanterns. Lanterns drying on lines across the ceiling like washing. Lanterns folded flat in stacks. Lanterns with torn paper waiting to be mended on a workbench under the window, and pots of glue, and rolls of coloured paper, and a hundred brass tapers in a rack on the wall, and drums of lamp oil stacked in the corner, and a kettle on a small black stove. It smells of paste and paraffin and toast.

@tully:warm "In you come, love," he says. "Kettle's on. Sit there. Mind the glue." He looks older than he did a fortnight ago. His moustache droops. His flat cap's on crooked again. "I've not got much for you to do. Mending, mostly. I just... didn't fancy being on my own tonight, if I'm honest."

He makes the tea strong and sweet without asking how you take it, and puts a plate of ginger biscuits between you, and {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|finds {fam_name} a perch on the end of the drying-line, where the stove's warm|finds {fam_name} a spot on the rag rug in front of the stove}, as if he's been expecting {fam_name} for years.

You sit at the workbench, and he shows you how to mend a torn lantern: a patch of paper cut to shape, a thin line of glue, the paper smoothed down with the side of your thumb. It's calming. You do three. He does thirty, without looking, talking.

@tully:neutral "Every lantern in the Hall's got a thread," he says. "You'll not see it. I can't, not really, I just know it's there. I've been doing this forty years. Every one of them's hung off a thread that goes down, down, under the school, to the old fire. The Old Lady's hearth, we used to call it, when I was a lad. That's what lights them. Not me. I just... carry the taper. Keep 'em fed." He smooths a patch down. "When a thread goes, the lantern goes out, and I relight it off the taper, and the taper's lit off the old fire, down in the cellars. That's the job. Forty years."

You think about the great white-gold glow deep under the castle, that you saw from the stairs. The threads going down to it from every lantern, thin as spider silk. You don't say anything. You smooth down a patch with your thumb, the way he showed you, and it goes on crooked, and you peel it off and try again.

"Do you ever get tired of it?"

@tully:warm "Of lanterns?" He looks genuinely surprised. "No, love. You don't get tired of keeping a light on. It's the only job there is, when you think about it. Everything else is just what you do in between."

On the wall above the stove there's a photograph in a frame. A young woman, about your age, with her father's long face and pale-blue eyes and fair hair in a plait, laughing at something off to the side, holding up a paper lantern she's clearly just made. It's lopsided. She looks delighted with it.

@tully:sad He sees you looking. He doesn't say anything for a while. Then: "That's my Maisie," he says. "She kindled late, like you. Twenty-four. She came here." He smooths down another patch, and then another, and his hands are shaking. "She was hollowed. Six years ago. In her Burning Year. Walking back from the village on a Saturday, on her own, with her shopping." A pause. "She's at St Ide's. Where they've taken that poor girl. I go every Sunday. She knows me. Mostly. She says [i]hello, Dad[/i], nice as you like, as if I'm a man from the council." He puts the lantern down. "She made that one, in the picture. Her first week. It's still in the Hall. I keep it lit."
*set fr_tully +1

He gets up, abruptly, and goes to a shelf by the door, and comes back with something in his hands: a sea-green paper lantern, crumpled at one side, unlit.

@tully:sad "This was hers," he says. "Delphine's. I took it down yesterday morning, from the Heronmere roost. It went out at five, when they took her." He puts it down on the workbench between you, very gently, like something that's died. "I always take them down. The ones that go out like that. I can't bear to leave them hanging dark."

You look at it. And you see it straight away, without the flame-sight, just with your eyes: the wick in the bottom of the lantern isn't black, the way a burnt wick should be. It's grey. A dirty, silvery grey, like ash, all the way through. There's a smell coming off it, faint, under the paper and glue: cold, and wet, and green, like a marsh at night.
*clue e01
*choice
  #"Mr Tully, why has the wick gone grey?"
    *set wit +5
    @tully:tense He looks at the wick. Something moves in his face and is gone. "Damp, maybe," he says. "They go funny, in the damp. Sometimes." He picks the lantern up and puts it back on the shelf by the door, with its grey wick turned to the wall. "I'll burn it tomorrow. Proper. Give it a send-off." He doesn't look at you. In the flame-sight, just for a second, the soft sad amber of his flame shrinks into itself, and the grey at its edges spreads, like a stain.

    @tully:neutral He sits back down and picks up a torn lantern and starts on it, and talks about the weather, and the price of good paper these days, and how the Larkspire roost is always the first to want mending because they will sing at it. He doesn't mention the wick again. You don't either. But you notice that he doesn't look at the shelf by the door for the rest of the evening, not once.
  #"I'm so sorry about Maisie."
    *set heart +5
    *set fr_tully +1
    @tully:warm He looks at you, and his pale-blue eyes fill up, and he nods, and nods, and can't say anything. After a while he pats your hand on the workbench, twice, with his cold fingers that smell of lamp oil. "You're a good 'un," he says. "I could tell. First night. Your lantern." He blows his nose on a red handkerchief. "She'd have liked you, my Maisie. She liked people who noticed things."

    @tully:sad "She used to sit where you're sitting," he says, a bit later, not looking up from his patching. "Weekends. Doing this. Worse at it than you, mind. Glue everywhere. She said the lanterns didn't care if they were crooked, so why should she." He smiles at the paper under his thumb. "She was right, and all."
  #"The old fire under the school. What is it, really?"
    *set wit +5
    *set kindling +5
    @tully:neutral "Couldn't tell you, love," he says. "Something old. Something the founder left. Nobody's allowed down there but the Headmistress and me, and I only go as far as the door, and light my taper off what comes through the keyhole." He shakes his head. "Forty years, and I've never seen it. Just felt it. Warm, like. Like standing near someone who loves you."

    "What's behind the door?"

    @tully:sad "Don't know. Never asked." He's quiet, smoothing paper. "Maisie always wanted to see it. Used to pester me. [i]Just a peek, Dad.[/i]" He shakes his head again, slowly. "I never let her."

You mend eleven lanterns in the end, which he says is a record for a first detention, and he lets you keep one of the ginger biscuits for later, and one for {fam_name}.

When you leave, just before nine, with your fingers sticky with glue and the curfew bell starting up across the water, he stands in the door of the cottage with the light behind him and watches you all the way up the path to the castle, and waves when you look back. In the flame-sight, from the top of the path, his little sad amber flame is still flickering, grey at the edges, alone by the black water.
*page_break
*comment ---------------------------------------------------------------- CH06.EVENING.01
*sid CH06.EVENING.01
*date 2026-10-07 20:00
*mood night
*place P22 library
*present imogen toby familiar
The school doesn't stop. That's the strangest part. On Tuesday there's Brewing, and on Wednesday there's Wordcraft, and Professor Moth stands on his books and teaches the word for mending with his voice not quite steady, and everybody practises it on cracked teacups as if it matters. The lanterns in the Hall still aren't humming. The Heronmere table has a gap in it that nobody sits in. Mina Achebe does the Wireless on Tuesday night without a single joke, and reads out the new curfew rules, and plays a very old, very slow song, and then signs off early.

On Wednesday night, with an hour to go till curfew, you find Imogen in the Long Stacks, at a table in the corner under a green lamp, surrounded by a fortress of books.

@imogen:tense She hasn't been to a lesson since Monday. You're not sure she's slept. She has ink on her fingers, and ink on her face, and her glasses pushed up into her hair, and she's reading three books at once: one open in front of her, one propped against the lamp, and one on her knee. They're all about the same thing. You can see the words from here. [i]Hollowing. Extinction of the flame. The Quiet Art. Cases, 1702 to present.[/i]

There's a cup of tea at her elbow with a skin on it. There's a sandwich, untouched, curling at the corners on a saucer. Someone has brought her that, you think, and she hasn't noticed.

@imogen:neutral "Sit down," she says, without looking up. "Don't talk. Actually, do talk. Tell me if I'm wrong." She pushes a sheet of paper across the table. It's a list, in tiny precise handwriting: dates, names, places, going back years. [i]Hollowed.[/i] "Twenty-three cases in forty years. All late flames. All in their Burning Year. Nineteen of them within ten miles of this school." She taps the list. "Nobody's ever been relit. Not once. Not in the whole history of the Order. They just... sit. In St Ide's. Forever."

@toby:sad Toby, who followed you in, sits down on the other side of the table and reads the list upside down, and goes quiet. Custard, under the table, puts her chin on his foot.
*choice
  #Sit down and help her. Take the third book, the one on her knee.
    *set wit +5
    *if st_imogen >= 2
      *set b_imogen_study true
      *set st_imogen 3
    *else
      *set st_imogen +1
    You take the book off her knee and start reading, and she lets you. For most of an hour you sit across from each other under the green lamp and don't talk except to say [i]page three hundred[/i] or [i]listen to this[/i] or [i]that can't be right[/i]. Toby goes and comes back with fresh tea for all three of you, and Imogen drinks hers without noticing, which you count as a victory.

    You're good at it together. She reads fast; you notice things. At a quarter to nine, with the curfew bell about to go, you notice something in the list she's missed: every one of the nineteen cases near Wrenfold happened between October and June. Never in summer. Never in the holidays. Only in term.

    @imogen:attentive She stares at it. Then at you. "Only when the school's full," she says slowly. "Only when there are late flames here." She sits back in her chair, and for the first time since you came in, she takes her glasses out of her hair and puts them on and actually looks at you through them. "You're good at this. I mean it. Most people just want to be told the answer." She looks at you a moment longer. "Thank you for coming. Nobody else did."
  #"Imogen. Why this? Why does this matter so much to you?"
    *set heart +5
    *set st_imogen +1
    @imogen:guarded She stops reading. She doesn't look up. For a moment you think she's going to tell you to mind your own business. Her pen hovers over the list, and doesn't move.

    Then she says, very flatly, "Because nobody's ever been relit. And I want to know why." She turns a page. "That's all. Academic interest."

    It's the first time you've ever heard Imogen Sallow lie badly. Toby hears it too; you see him glance at you across the table. Neither of you says anything. After a minute she pushes the list a little further across the table towards you, not looking up, and you take it as the nearest thing to an apology she can manage tonight.
  #Make her stop. Take the books away and make her go to bed.
    *set nerve +5
    You close the book in front of her, gently, and take her glasses out of her hair and put them in her hand.

    @imogen:angry "I'm not finished."

    "You're not going to finish tonight. You haven't slept since Sunday. Go to bed."

    @imogen:tense She glares at you. Then her face does something complicated, and she puts her glasses on, and stands up, and gathers the books into a tower against her chest, and says, very stiffly, "Fine. [i]Fine.[/i] But I'm coming back at six."

    @imogen:neutral She goes. At the door, she stops, with the tower of books wobbling, and says, "Thank you," without turning round. Then, as an afterthought: "Somebody should eat that sandwich. It's been there since lunch."

    Toby eats the sandwich.

@toby:neutral It's on the way back, on the long corridor above the Lantern Hall, that the invitations happen. All three of them, one after another, as if the castle arranged it.
*present toby rowan saoirse noor familiar
@rowan:neutral Rowan catches up with you first, coming the other way from the showers after Glimmer practice, with his broom over his shoulder and his copper hair still wet and steaming gently in the cold corridor. "Saturday," he says, a bit awkwardly. "First match. Larkspire and Rookhallow. Marcus has put me in goal." He rubs the back of his neck. "I've never played anything in front of a crowd. Not since I was a kid. Would you... it'd help. Knowing someone was there. In the stands. Someone who knows."

He doesn't say knows what. He doesn't have to.

@saoirse:amused Then Saoirse, sliding down the banister of the big stair and landing next to you in a clatter: "Saturday night. The Undercroft. Party. I've built a sofa that flies and I need a co-pilot who won't scream." She grins, chipped tooth and all. "Hamish screams. It's embarrassing for everyone. Say yes."

@toby:scared "Curfew's at nine," says Toby, faintly.

@saoirse:laugh "Exactly," says Saoirse. "That's what makes it a party."

@noor:tired Last of all, at the bottom of the stair outside the Infirmary, with a tray of cold tea in her hands, there's Noor. She doesn't grin, or rub her neck. She just says, very quietly, "Matron's asked me to sit up with the night beds on Saturday. There's nobody else. It's twelve hours and it's... quiet. The quiet's the worst bit." She looks at the tray. "You don't have to. I just thought I'd ask. In case."

You can't be in three places on Saturday night. You can barely be in one.

You stand on the stair with the three of them waiting, and think about a boy in goal with his hands shaking, and a woman who never sits still asking you to sit beside her, and a nurse who never asks anybody for anything, asking.
*choice
  #Promise Rowan you'll be at the match. In the stands. Watching.
    *set promise7 "rowan"
    *set st_rowan +1
    @rowan:warm His whole face opens. "Yeah?" he says. "Yeah. Great. Front row. Larkspire end. I'll be the one letting everything in." He's grinning as he goes, and he walks straight into a suit of armour, and apologises to it.
  #Promise Saoirse you'll be her co-pilot. You won't scream. Probably.
    *set promise7 "saoirse"
    *set st_saoirse +1
    @saoirse:laugh "[i]Yes![/i]" She punches the air. "Ten o'clock. Bring a coat. The sofa's got no windscreen." She's already halfway back up the banister, backwards, before she shouts down: "Or brakes! Mostly!"
  #Promise Noor you'll sit the night shift with her.
    *set promise7 "noor"
    *set st_noor +1
    @noor:warm She looks at you, surprised, and then not. She nods, just once. "Thank you," she says, quietly, as if you've given her something heavier than you know. "Eight till eight. Bring a book. Bring two."

The others go their ways, up the stair and down it. Somewhere below, the curfew bell starts.

@toby:neutral Toby, who has watched all of this with his hands in his cardigan pockets, looks at you as they go.

@toby:warm "You're popular," he says. And then, not quite looking at you: "Emberfall's in three weeks. The lanterns on the lake. You're meant to take someone." He goes pink. "I'm going to ask Priya. On Saturday. At breakfast. Before I lose my nerve." He takes a deep breath. "Will you be there? At breakfast? Just... in case I need someone to pick me up off the floor?"

"I'll be there," you say.

@toby:laugh "Right," says Toby Quill, and then, faintly, "oh no," and laughs, and has to sit down on the stairs. Custard sits down next to him, and looks at you, as if to say that this is going to be a long week, and she's glad you'll be there.
*journal [b]Chapter 6.[/b] Delphine Arceneaux, the Heronmere prefect, was hollowed in the Glasshouses before dawn: grey, polite, empty. Where her flame was, a hole. Rumour says the south ward was opened from inside. Professor Grey sits alone at High Table. In Mr Tully's cottage, Delphine's snuffed lantern had a grey wick that smelled of marsh. His daughter Maisie was hollowed six years ago; she's at St Ide's. Imogen is researching every hollowing for forty years. For Saturday night you promised {@promise7 = "rowan"|Rowan you'd watch his first match|}{@promise7 = "saoirse"|Saoirse you'd co-pilot her flying sofa|}{@promise7 = "noor"|Noor you'd sit the night shift with her|}.
*page_break
*goto_scene ch07
`);
