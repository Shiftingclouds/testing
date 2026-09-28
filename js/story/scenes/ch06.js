NB.scene("ch06", String.raw`
*mood night
*set ch 6
*chapter 6 The Hollowed Girl
*comment ---------------------------------------------------------------- CH06.DAWN.01
*sid CH06.DAWN.01
*date 2026-10-05 06:20
*place P20 glasshouses
*present familiar
It's the lanterns that wake you. Not a sound. A colour.

You open your eyes at five in the morning in the grey half-dark, and the light coming under the dormitory door is wrong. It should be gold, the warm night-light gold of the lanterns in the stairwell. It's grey. Flat, cold, dirty grey, like the light in a room where someone's died and nobody's opened the curtains.

{fam_name} is standing on your chest, rigid, staring at the door.

You get up. Everybody's getting up: doors opening all over the castle, voices, somebody running on the stair. In the Lantern Hall, when you get there in your dressing gown with half your house behind you, all ten thousand lanterns have gone grey. They're still lit. They're still drifting. But every one of them is burning the colour of ash, and none of them is humming, and the whole Hall is so quiet you can hear people breathing.

And then, from somewhere outside, towards the lake, someone starts screaming.

By the time you get to the Glasshouses, there are thirty people on the wet lawn in dressing gowns and coats, and the Headmistress is striding across the grass towards them from the other direction with her silver braid undone and her face like stone.
*present rhys delphine noor kestrel familiar
*meet rhys
*meet delphine
The Glasshouses are three long Victorian greenhouses on the south lawn, white-painted iron and fogged glass, full of green. Inside the middle one, among the pots of grumbles and the tall humming vines, there's a bench. And on the bench, sitting very straight with her hands folded in her lap, is Delphine Arceneaux, the Heronmere prefect with the violet hair who told a room full of frightened first-years to stand still.

@rhys:sad Professor Rhys is kneeling on the wet tiles in front of her in a nightdress and wellingtons, holding both of Delphine's hands, crying without making any sound. She's a sturdy rosy woman with a battered hat, and there's a live snail on the hat, and she's saying "Delphine, love, Delphine, look at me, love," over and over.

@delphine:hollowed Delphine looks at her. She smiles politely. "Good morning," she says. Her voice is perfectly clear and perfectly flat, like someone reading from a card. "Is it morning? I'm sorry. I don't... I was going to water the..." She looks down at the grumbles in their pots at her feet. She looks at them for a long time, as if trying to remember what they are. "I was going to water them," she says again.

Her skin has gone grey. Not pale. [i]Grey[/i], faintly, all over, like a photograph that's been left in the sun. Her eyes are the colour of fogged glass. Her beautiful violet hair looks like it's been dusted with ash.

You look at her, and before you can stop it, the flame-sight comes up behind your eyes.

There's nothing there.

In everyone else on that lawn there's a light: frightened flickers, bright scared candles, Professor Rhys's warm green grief like a lamp in a storm. In Delphine, where her flame should be, behind her breastbone, there's a hole. Not darkness. Absence. A place where something was, very recently, and was taken, all of it, whole, and the edges of the hole are still cold. It's like looking at the space where a tooth was.

You have to hold on to the doorframe.
*if (kindling >= 20) or (wit >= 35)
  And because you're holding on to the doorframe, you see the other thing. There's a ward-stone set into the path just outside the glasshouse door: a round grey stone with an old sign carved in it, one of the hundreds that ring the island. In the flame-sight, every ward-stone you've ever passed has had a thread of light running from it down into the ground, to the great glow under the castle, thin and bright and taut. This one's thread has been cut. Not snapped. Cut. And it's been cut on the castle side of the stone, from the inside, the way you'd lift a latch to let somebody in.
  *clue e03
  *set wit +5

@noor:tense Noor pushes past you. She's in a coat over pyjamas, with her plait half undone, and her face has gone into the flat calm that you've learned means she's frightened. She kneels by Professor Rhys and takes Delphine's pulse at the wrist, and then at the neck, and looks at her pupils with a pen-torch from her pocket.
*choice
  #Kneel down beside Noor and help. Do what she tells you.
    *set heart +5
    *if st_noor >= 2
      *set b_noor_shift true
      *set st_noor 3
    *else
      *set st_noor +1
    You kneel down on the wet tiles next to her.

    @noor:neutral She doesn't look at you. "Hold the torch," she says. "Here. Steady." You hold it. "Pulse sixty, regular. Pupils equal and reactive. Breathing normal. Temperature..." She puts the back of her hand on Delphine's forehead and her face changes. "Cold. She's cold. Get me a blanket. Anyone's. Yours."

    You give her your dressing gown. She wraps it round Delphine's shoulders, very gently, and Delphine says "thank you" in that clear flat voice, and Noor's hands, you notice, are shaking so badly she has to hold them together.

    @noor:tired "Nothing's wrong with her," says Noor, under her breath, only to you. "Nothing. Pulse, pupils, breathing, all fine. There's nothing wrong with her at all." She looks at you. "Why is there nothing wrong with her?"
  #Go and stand with the others by the door. Keep them back. Give Delphine some air.
    *set nerve +5
    *set st_noor +1
    You turn round and put your arms out and move the crowd back from the glasshouse door, the way you moved them back from Rowan in the Warding Hall. "Give her room," you say. "Give them room to work." People step back. Some of them are crying. Toby's among them, in his cardigan, with his face white. Delphine was his prefect. Delphine made him hot chocolate on his first night.
  #Look closer at the hole where her flame was. Try to see if there's anything left.
    *set kindling +5
    *set flame +5
    You look. You make yourself look, the way you made yourself look at the singers in the alley. Into the hole.

    It's so cold. It's like putting your face into a freezer. And there's nothing, nothing at all, no ember, no spark, no thread. Whatever took her flame took it clean. And somewhere very far down in the cold, you can hear it: the faintest echo, like the last note of a song in an empty room. A hum.

    You pull back, gasping. {fam_name} is pressed against your legs, shaking.

@kestrel:grave The Headmistress comes in. She doesn't say anything. She looks at Delphine for a long time, with her face perfectly still, and then she kneels down on the wet tiles beside Professor Rhys, in her midnight-blue robes, and puts her arms round both of them, and holds them.

Over her shoulder, through the fogged glass, you can see the Lantern Hall's great round window high up in the castle wall. The lanterns behind it are grey.
*page_break
*comment ---------------------------------------------------------------- CH06.HALL.01
*sid CH06.HALL.01
*date 2026-10-05 08:00
*mood day
*place P13 lantern_hall
*present kestrel toby mina cas grey priya familiar
The lanterns come back to gold at about seven, slowly, the way colour comes back into a face. But they don't hum. And all through breakfast, which nobody eats, they keep drifting away from the doors and the windows, into the middle of the Hall, bunching together over the tables, like sheep in a field when there's a dog about.

@kestrel:grave The Headmistress stands up at the High Table at eight, and the Hall goes so quiet you can hear the gravy boats creak. She's put her braid back up. Her face is grey with tiredness, and her voice, when it comes, is as steady as it was on the first night.

@kestrel:grave "Delphine Arceneaux, of Heronmere, was hollowed last night," she says. "In the Glasshouses. Sometime before dawn. Her flame was taken. She's alive, and in no pain, and she's been taken to St Ide's in Kingsmere, where they know how to care for her. Her family's with her." A pause. "I'm not going to tell you that she'll get better. I don't lie to people in this Hall."

Somebody at the Heronmere table makes a sound. Priya Menon has her face in her hands. Toby, next to her, has put one hand very carefully on her back.

@kestrel:neutral "From tonight, curfew is at nine. Nobody walks the grounds alone after dark. Every house will have a prefect awake at night. The Order of the Lamp has been informed." She looks down the Hall, at every table. "I asked you on your first night to keep your flame close. I'm asking you again. Keep it close. Keep each other close. And if you hear humming, you run to a lit room full of people, and you shout."

She sits down. Nobody says anything for a long time.

*meet mina
@mina:neutral Then everybody says everything at once. Mina Achebe, at the Owlcombe table, headphones round her neck, has a crowd round her already. "The wards failed," she's saying, low and fast, to anyone who'll listen. "That's what I heard. The south ward, by the Glasshouses. Four hundred years and it just [i]failed[/i]. Or somebody..." She stops. Lowers her voice further. "Somebody [i]opened[/i] it."

[i]Somebody opened it.[/i] It goes round the Hall like a draught. You see people look at each other, and then look away. You see people look at the High Table.

@grey:neutral At the High Table, Professor Grey is sitting at the far end, alone, with his scarred hands folded in front of an untouched plate, staring at nothing. Nobody's sitting near him. You notice that, and you notice people noticing it, and you remember a man in a stone hall humming the Choir's note so well that every lamp leaned away from him.

@cas:neutral And at the {@cas_house = "owlcombe"|Owlcombe|Rookhallow} table, Casimir Drummond gets up.

He's been sitting alone, as always, at the end of the bench. He walks down the Hall, not fast, with everybody's eyes on him because he's the only person moving, and he stops at the Heronmere table, next to the empty place where Delphine sat. He takes something out of his pocket and puts it down on her plate. Then he walks out of the Hall without looking at anybody.
*choice
  #Go over and see what he left.
    *set heart +5
    *if st_cas >= 2
      *set b_cas_kind true
      *set st_cas 3
    *else
      *set st_cas +1
    You go over. It's a flower: a single white rose, the kind that grows in the Headmistress's walled garden, which nobody's allowed in. There's a card, folded once, in handwriting so precise it looks printed: [i]She lent me a pencil on my first day, when nobody else would sit near me. I never gave it back. I'm sorry. C.D.[/i] And folded inside the card, a pencil.

    You stand there holding it. Toby, beside you, reads it over your shoulder, and goes very quiet.

    @toby:sad "I didn't know he could be sad," he says, at last. "I thought he just... sneered."

    You find Cas later, in a window seat on the fourth floor with his knees drawn up, looking at the Mere. You don't say anything about the rose. You just sit down at the other end of the seat.

    @cas:guarded "Don't," he says, without looking round.

    "I wasn't going to."

    @cas:hurt He's quiet for a long time. "She lent me a pencil," he says, eventually, to the window. "That's all. It was nothing. It was just a pencil." And his voice cracks on [i]pencil[/i], and he turns his face away, and you sit with him until he stops.
  #Watch Professor Grey instead. Nobody's sitting near him. You want to know why.
    *set wit +5
    You watch Grey. He doesn't eat. He doesn't talk to anyone. When the Headmistress passes behind his chair on her way out, she puts her hand on his shoulder, very briefly, and he closes his eyes. Then he gets up, and leaves by the door behind the High Table, and in the flame-sight, just for a moment, you see his flame: a big, heavy, iron-coloured light, banked down low like a fire that's been covered for the night. Steady. Very old. And round it, something like scar tissue: a pale thick band, as if at some point, a long time ago, something tried very hard to put it out, and couldn't.
  #Stay with Toby. He's holding Priya together and he's shaking.
    *set fr_toby +1
    *set heart +5
    You go and sit on Toby's other side, and put your arm round him while he keeps his hand on Priya's back, and the three of you sit like that, not eating, in the middle of the silent Hall, while the lanterns bunch up over your heads like frightened birds.

    @priya:warm "Thank you," says Priya, eventually, lifting her face. Her eyes are red. She looks at Toby. "Both of you."

    @toby:sad Toby doesn't say anything. He just keeps his hand where it is. You can see his little oven-light flame, frightened, burning as steadily as he can make it, for her.
*page_break
*comment ---------------------------------------------------------------- CH06.DETENTION.01
*sid CH06.DETENTION.01
*date 2026-10-06 19:00
*mood dusk
*place P28 tully_cottage
*present tully familiar
You half expect Mr Tully to cancel your detention. He doesn't.

The Lanternwarden's cottage is a crooked stone building down by the boathouse, at the water's edge, with smoke coming out of a chimney that leans. Inside, it's all lanterns. Lanterns drying on lines across the ceiling like washing. Lanterns folded flat in stacks. Lanterns with torn paper waiting to be mended on a workbench under the window, and pots of glue, and rolls of coloured paper, and a hundred brass tapers in a rack on the wall, and drums of lamp oil stacked in the corner, and a kettle on a small black stove.

@tully:warm "In you come, love," he says. "Kettle's on. Sit there. Mind the glue." He looks older than he did a week ago. His moustache droops. His flat cap's on crooked again. "I've not got much for you to do. Mending, mostly. I just... didn't fancy being on my own tonight, if I'm honest."

You sit at the workbench, and he shows you how to mend a torn lantern: a patch of paper cut to shape, a thin line of glue, the paper smoothed down with the side of your thumb. It's calming. You do three. He does thirty, without looking, talking.

@tully:neutral "Every lantern in the Hall's got a thread," he says. "You'll not see it. I can't, not really, I just know it's there, I've been doing this forty years. Every one of them's hung off a thread that goes down, down, under the school, to the old fire. The Old Lady's hearth, we used to call it, when I was a lad. That's what lights them. Not me. I just... carry the taper. Keep 'em fed." He smooths a patch down. "When a thread goes, the lantern goes out, and I relight it off the taper, and the taper's lit off the old fire, down in the cellars. That's the job. Forty years."

You think about the great white-gold glow deep under the castle, that you saw from the stairs. The threads going down to it from every lantern, thin as spider silk.

On the wall above the stove there's a photograph in a frame. A young woman, about your age, with her father's long face and pale-blue eyes and fair hair in a plait, laughing at something off to the side, holding up a paper lantern she's clearly just made. It's lopsided. She looks delighted with it.

@tully:sad He sees you looking. He doesn't say anything for a while. Then: "That's my Maisie," he says. "She kindled late, like you. Twenty-four. She came here." He smooths down another patch, and then another, and his hands are shaking. "She was hollowed. Six years ago. In her Burning Year. Walking back from the village on a Saturday, on her own, with her shopping." A pause. "She's at St Ide's. Same as that poor girl will be. I go every Sunday. She knows me. Mostly. She says [i]hello, Dad[/i], polite, like I'm a man from the council." He puts the lantern down. "She made that one, in the picture. Her first week. It's still in the Hall. I keep it lit."
*set fr_tully +1

He gets up, abruptly, and goes to a shelf by the door, and comes back with something in his hands: a sea-green paper lantern, crumpled at one side, unlit.

@tully:sad "This was hers," he says. "Delphine's. I took it down this morning, from the Heronmere roost. It went out at five, when they took her." He puts it down on the workbench between you, very gently, like something that's died. "I always take them down. The ones that go out like that. I can't bear to leave them hanging dark."

You look at it. And you see it straight away, without the flame-sight, just with your eyes: the wick in the bottom of the lantern isn't black, the way a burnt wick should be. It's grey. A dirty, silvery grey, like ash, all the way through. And there's a smell coming off it, faint, under the paper and glue: cold, and wet, and green, like a marsh at night.
*clue e01
*choice
  #"Mr Tully, why has the wick gone grey?"
    *set wit +5
    @tully:tense He looks at the wick for a long moment. Something moves in his face and is gone. "Damp, maybe," he says. "They go funny, in the damp. Sometimes." He picks the lantern up and puts it back on the shelf by the door, with its grey wick turned to the wall. "I'll burn it tomorrow. Proper. Give it a send-off." He doesn't look at you. In the flame-sight, just for a second, the soft sad amber of his flame shrinks into itself, and the grey at its edges spreads, like a stain.
  #"I'm so sorry about Maisie."
    *set heart +5
    *set fr_tully +1
    @tully:warm He looks at you, and his pale-blue eyes fill up, and he nods, and nods, and can't say anything. After a while he pats your hand on the workbench, twice, with his cold fingers that smell of lamp oil. "You're a good 'un," he says. "I could tell. First night. Your lantern." He blows his nose on a red handkerchief. "She'd have liked you, my Maisie. She liked people who noticed things."
  #"The old fire under the school. What is it, really?"
    *set wit +5
    *set kindling +5
    @tully:neutral "Couldn't tell you, love," he says. "Something old. Something the founder left. Nobody's allowed down there but the Headmistress and me, and I only go as far as the door, and light my taper off what comes through the keyhole." He shakes his head. "Forty years, and I've never seen it. Just felt it. Warm, like. Like standing near someone who loves you." He's quiet. "Maisie always wanted to see it."

When you leave, at nine, with your fingers sticky with glue, he stands in the door of the cottage with the light behind him and watches you all the way up the path to the castle, and waves when you look back. In the flame-sight, from the top of the path, his little sad amber flame is still flickering, grey at the edges, alone by the black water.
*page_break
*comment ---------------------------------------------------------------- CH06.EVENING.01
*sid CH06.EVENING.01
*date 2026-10-07 20:00
*mood night
*place P22 library
*present imogen toby familiar
On Wednesday night, you find Imogen in the Long Stacks, at a table in the corner under a green lamp, surrounded by a fortress of books.

@imogen:tense She hasn't been to lessons since Monday. You're not sure she's slept. She has ink on her fingers, and ink on her face, and her glasses pushed up into her hair, and she's reading three books at once: one open in front of her, one propped against the lamp, and one on her knee. They're all about the same thing. You can see the words from here. [i]Hollowing. Extinction of the flame. The Quiet Art. Cases, 1702 to present.[/i]

@imogen:neutral "Sit down," she says, without looking up. "Don't talk. Actually, do talk. Tell me if I'm wrong." She pushes a sheet of paper across the table. It's a list, in tiny precise handwriting: dates, names, places, going back years. [i]Hollowed.[/i] "Twenty-three cases in forty years. All late flames. All in their Burning Year. Nineteen of them within ten miles of this school." She taps the list. "Nobody's ever been relit. Not once. Not in the whole history of the Order. They just... sit. In St Ide's. Forever."

@toby:sad Toby, who followed you in, sits down on the other side of the table and reads the list upside down, and goes quiet.
*choice
  #Sit down and help her. Take the third book, the one on her knee.
    *set wit +5
    *if st_imogen >= 2
      *set b_imogen_study true
      *set st_imogen 3
    *else
      *set st_imogen +1
    You take the book off her knee and start reading, and she lets you, and for two hours you sit across from each other under the green lamp and don't talk except to say [i]page three hundred[/i] or [i]listen to this[/i] or [i]that can't be right[/i]. You're good at it together. She reads fast; you notice things. At ten o'clock, you notice something in the list she's missed: every one of the nineteen cases near Wrenfold happened between October and June. Never in summer. Never in the holidays. Only in term.

    @imogen:attentive She stares at it. Then at you. "Only when the school's full," she says slowly. "Only when there are late flames here." She sits back. "You're good at this. I mean it. Most people just want to be told the answer." She looks at you a moment longer. "Thank you for coming. Nobody else did."
  #"Imogen. Why this? Why does this matter so much to you?"
    *set heart +5
    *set st_imogen +1
    @imogen:guarded She stops reading. She doesn't look up. For a long moment you think she's going to tell you to mind your own business. Then she says, very flatly, "Because nobody's ever been relit. And I want to know why." She turns a page. "That's all. Academic interest." It's the first time you've ever heard Imogen Sallow lie badly.
  #Make her stop. Take the books away and make her go to bed.
    *set nerve +5
    You close the book in front of her, gently, and take her glasses out of her hair and put them in her hand.

    @imogen:angry "I'm not finished."

    "You're not going to finish tonight. You haven't slept since Sunday. Go to bed."

    @imogen:tense She glares at you. Then her face does something complicated, and she puts her glasses on, and stands up, and gathers the books, and says, very stiffly, "Fine. [i]Fine.[/i] But I'm coming back at six." And she goes. At the door, she stops. "Thank you," she says, without turning round.

@toby:neutral It's on the way back, on the long corridor above the Lantern Hall, that the invitations happen. All three of them, one after another, as if the castle arranged it.
*present toby rowan saoirse noor familiar
@rowan:neutral Rowan catches up with you first, coming the other way from Glimmer practice, with his broom over his shoulder and grass on his knees. "Saturday," he says, a bit awkwardly. "First match. Larkspire and Rookhallow. Marcus has put me in goal." He rubs the back of his neck. "I've never played anything in front of a crowd. Not since I was a kid. Would you... it'd help. Knowing someone was there. In the stands. Someone who knows."

@saoirse:amused Then Saoirse, sliding down the banister of the big stair and landing next to you in a clatter: "Saturday night. The Undercroft. Party. I've built a sofa that flies and I need a co-pilot who won't scream." She grins. "Hamish screams. It's embarrassing for everyone. Say yes."

@noor:tired And then, last, at the bottom of the stair outside the Infirmary, with a tray of cold tea in her hands, Noor. She doesn't grin, or rub her neck. She just says, very quietly, "Matron's asked me to sit up with the night beds on Saturday. There's nobody else. It's twelve hours and it's... quiet. The quiet's the worst bit." She looks at the tray. "You don't have to. I just thought I'd ask. In case."

You can't be in three places on Saturday night. You can barely be in one.
*choice
  #Promise Rowan you'll be at the match. In the stands. Watching.
    *set promise7 "rowan"
    *set st_rowan +1
    @rowan:warm His whole face opens. "Yeah?" he says. "Yeah. Great. Front row. Larkspire end. I'll be the one letting everything in."
  #Promise Saoirse you'll be her co-pilot. You won't scream. Probably.
    *set promise7 "saoirse"
    *set st_saoirse +1
    @saoirse:laugh "[i]Yes![/i]" She punches the air. "Ten o'clock. Bring a coat. The sofa's got no windscreen."
  #Promise Noor you'll sit the night shift with her.
    *set promise7 "noor"
    *set st_noor +1
    @noor:warm She looks at you for a long moment. Then she nods, just once. "Thank you," she says, quietly, as if you've given her something heavier than you know. "Eight till eight. Bring a book. Bring two."

@toby:neutral Toby, who has watched all of this with his hands in his cardigan pockets, looks at you as the others go.

@toby:warm "You're popular," he says. And then, not quite looking at you: "Emberfall's in three weeks. The lanterns on the lake. You're meant to take someone." He goes pink. "I'm going to ask Priya. On Saturday. At breakfast. Before I lose my nerve." He takes a deep breath. "Will you be there? At breakfast? Just... in case I need someone to pick me up off the floor?"

"I'll be there," you say.

@toby:laugh "Right," says Toby Quill, and then, faintly, "oh no," and laughs, and has to sit down on the stairs.
*journal [b]Chapter 6.[/b] Delphine Arceneaux, the Heronmere prefect, was hollowed in the Glasshouses before dawn: grey, polite, empty. Where her flame was, a hole. Rumour says the south ward was opened from inside. Professor Grey sits alone at High Table. In Mr Tully's cottage, Delphine's snuffed lantern had a grey wick that smelled of marsh. His daughter Maisie was hollowed six years ago; she's at St Ide's. Imogen is researching every hollowing for forty years. For Saturday night you promised {@promise7 = "rowan"|Rowan you'd watch his first match|}{@promise7 = "saoirse"|Saoirse you'd co-pilot her flying sofa|}{@promise7 = "noor"|Noor you'd sit the night shift with her|}.
*page_break
*goto_scene ch07
`);
