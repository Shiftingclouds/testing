NB.scene("ch05", String.raw`
*mood dusk
*set ch 5
*chapter 5 The Burning Year
*comment ---------------------------------------------------------------- CH05.HEARTH.01
*sid CH05.HEARTH.01
*date 2026-09-24 17:00
*place P13 lantern_hall
*present kestrel toby familiar
The second week goes faster than the first, the way second weeks do.

You learn where the stairs like to go on a Tuesday, and which door into the Brewing Cellars sticks, and that if you sit at the far end of your house's table at breakfast you get the toast first and the sun last. Professor Kovač sets you a Stillwater tonic and walks along the benches without speaking, and when she stops at yours and looks into your cauldron for three whole seconds, you understand from the rest of the room that this is praise. Professor Bassani turns a teapot into a tortoise and back again, twice, so everybody can see the join. The weather turns. One morning the Mere is steaming like a bath, and the next it's grey and choppy, with rain coming across it in curtains, and the whole castle smells of wet wool and toast.

{fam_name} learns the castle faster than you do. {fam_name} has opinions about the Rookery, a favourite radiator, and a feud with Mrs Pettigrew's goat.

Hearth isn't on the timetable as a lesson. It's on the timetable as [i]Hearth (Thursdays, the Hall, bring nothing)[/i]. It turns out to mean the Headmistress, and forty-three first-years, the same forty-three you share Wordcraft with, lying on their backs on the floor of the Lantern Hall at five o'clock on a Thursday, looking up.

The lanterns have come down low for it. They hang six feet above you, drifting, gold and rose and green and blue, close enough that you can see the brushmarks on the paper and the tiny scorched patches where somebody, years ago, mended them. The benches have been pushed back against the walls. The Hall is dim and warm and humming, and it smells of candle-wax and floor polish and, faintly, of the lemon soap they use on the tables. It's like lying at the bottom of a lit pond.

The stone's cold through your robes. Somebody down the row is trying not to giggle. Toby, on your left, has brought his hare, Custard, who wasn't asked, and who is lying along his side with her ears flat and her eyes half shut, as if Hearth were something she'd invented.

@kestrel:neutral "Breathe," says the Headmistress. She's walking slowly between the rows in her midnight-blue robes, her silver braid swinging, her voice low. "In for four. Out for six. The flame follows the breath. It always has. When you're frightened you breathe fast, and it flares. When you breathe slow, it settles. This is the whole secret. Everything else is detail."

You breathe. In for four. Out for six. Beside you, Toby breathes like someone blowing up a lilo.

@kestrel:amused "Mr Quill," says the Headmistress, without looking round. "Out for six. Not out for everything."

Toby says "Sorry, Headmistress," to the ceiling, and a ripple of laughter goes down the rows and dies away, and the Hall settles again. Up among the lanterns, one of them turns lazily over, like a fish.

@kestrel:neutral "Now close your eyes," she says, "and picture it. Your flame. Behind your breastbone, where it's been all year. Don't try to change it. Just see it. Hold it the way you'd hold a candle in cupped hands, walking through a draughty house."

You close your eyes.

It's easy. That's the strange thing. It's the easiest thing you've ever done. There it is, behind your breastbone, where it's always been, where it leaned towards the candles in Pellow's and purred for the wand: a flame. Not a candle-flame. Bigger. Brighter. White at the heart and gold at the edges, steady and tall, like a flame in a lamp-glass with the wick turned right up. You can feel the warmth of it on the inside of your ribs. You can feel it notice you looking.

Without meaning to, with your eyes still shut, you turn your head towards Toby.

You see his.

It's small and orange and warm, like the light in an oven door when something's baking. It's there, behind his cardigan, behind his ribs, bobbing slightly with his breathing, a little uneven where he's trying too hard. Next to it, lower down, something smaller still: a quick brown spark, twitching. Custard. You can see them both as clearly as you can see your own. Through your eyelids. Through him.

You gasp and open your eyes. It's gone. Toby's just Toby, lying on the floor with his cardigan rucked up and his mouth open, very nearly asleep, and Custard's just a hare.

Your heart's going like a drum. You lie very still and stare up at the lanterns and try to breathe out for six, and manage about three.

@kestrel:attentive When you turn your head, the Headmistress has stopped walking. She's standing ten feet away between two rows of breathing students, looking straight at you, her hazel eyes gone very still.

She doesn't say anything. After a moment she smiles, slightly, and walks on. "Out for six," she says, to the Hall. "Slowly. Slowly."

At the end, when the lanterns lift back up into the dark and everybody's getting stiffly to their feet and complaining about their backs, you look for her. She's gone. There's only the swing of a door behind the High Table, and a single gold lantern hanging low where she was standing, turning very slowly on the spot, as if it's thinking.
*page_break
*comment ---------------------------------------------------------------- CH05.NIGHT.01
*sid CH05.NIGHT.01
*date 2026-09-24 23:40
*mood night
*place P32 corridor_night
*present familiar
You can't sleep.

You've tried. You've lain on your back and on your front and on both sides. You've counted in for four and out for six until the numbers stopped meaning anything. Every time you close your eyes you half expect to see something through the lids, and every time you don't, you aren't sure whether you're relieved.

It's twenty to twelve, and curfew was at eleven, and you're standing at the bottom of your house's stair in your dressing gown with your wand in your pocket, and you're not entirely sure how you got here.
*choice
  #{fam_name} went out through the door an hour ago and hasn't come back.
    *set heart +5
    {fam_name} went out an hour ago, {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|through the window|through a gap in the door you'd swear wasn't there}, with the purposeful air of someone who's remembered an appointment, and hasn't come back. You've lain awake imagining {fam_name} lost in the dark, or stuck behind a panel, or eaten by Mrs Pettigrew's goat. You come down to look. And there {fam_name} is, waiting for you at the bottom of the stair, with the air of someone who's been kept waiting for some time and is prepared to be gracious about it.
  #The humming. You can hear something humming in the walls, and it isn't the lanterns.
    *set wit +5
    You heard it at eleven, lying in bed with your eyes shut, as the castle went quiet round you: under the lanterns' sweet sleepy hum, another sound. Lower. Thinner. Deep in the stone, like a draught in a chimney, rising and falling. You've spent forty minutes telling yourself it's pipes. You've come down to prove it's pipes. {fam_name} came with you without being asked, which you're choosing not to think about.
  #You're starving. You've heard the kitchens leave bread out after midnight.
    *set flame +5
    You're starving: the gnawing, ravenous hunger you've had every night since you kindled, as if your body's a stove that burns food instead of wood. Hamish Galbraith told half the school that Mrs Pettigrew leaves the ends of the loaves out on the kitchen table after midnight, for the familiars, and that if you're very quiet you can have some. You're going to be very quiet. {fam_name}, who knows exactly what kitchens mean, is already at the door.

The corridors at night are different.

The lanterns in their wall-brackets are turned down to embers, and the portraits are asleep, snoring in their frames, and a suit of armour on the second landing has its visor down and a small bird asleep in its helmet. The stairs creak under your slippers. Moonlight comes through the tall windows in long grey bars across the stone. It's cold, and very quiet, and very old. You can smell the lake through the gaps in the window-leading, and old stone, and somewhere, faintly, tomorrow's bread.

{fam_name} goes ahead of you, stopping at every corner to check you're still coming.

You're halfway down the main stair when it happens.

At first you think it's your eyes. A glow at the edge of vision, on your left, where the wall is. Small, and orange, and warm. Then another, a bit further along. Then a row of them, like the lights of houses seen across a valley at night.

You stop on the stair.

You're looking at a wall. Plain grey stone, a tapestry of a stag, a lantern in a bracket turned down low. And behind the wall, through it, as if the stone were smoked glass, there are lights. Six of them, in a row, lying down, bobbing very slightly: small flames, each one a different colour and shape and size, each one slow and soft with sleep. A dormitory. Six people asleep on the other side of that wall, and you can see their flames. You can see them breathing.

One of them turns over. You watch it turn over.

You turn round, slowly, on the stair.

The whole castle is full of lights.

Through the walls, through the floors, through the ceiling, in every direction, like looking down at a city from an aeroplane at night: hundreds of flames, scattered through the dark of the stone. Most of them are asleep, low and soft. Some are awake: a steady clear lamp high in a tower that you think must be Professor Kovač, marking; a flickering nervous candle in a bathroom on the third floor; a brilliant, busy, dancing light down in the kitchens that could only be Mrs Pettigrew. Up at the very top of the central tower, above everything, one flame burns tall and steady and silver-white, like a lighthouse, turning slowly, as if it's keeping watch: the Headmistress.

Deep under the castle, under the kitchens, under the cellars, down in the root of the rock, there's something else. Something so big and so bright that you can't look at it straight: a white-gold glow, huge and warm and quiet, like the sun through closed eyelids. It's so far down. It feels as if it's been there forever. Every lantern in the castle, you realise, faintly, in the corner of your eye, has a thread going down to it, thin as spider silk, bright as wire.

You sit down on the stair, because your legs have stopped working.

{fam_name} comes close against you, and you're more glad of it than you can say.
*if (st_rowan >= 2) and not(b_rowan_heat)
  *present familiar rowan
  @rowan:tense That's how Rowan finds you: sitting on the main stair at midnight in your dressing gown, with your mouth open, staring at a wall. He's in a T-shirt and bare feet, and the stone under his feet is steaming. "Can't sleep," he says, low. "Too hot. I come down and lie on the flagstones in the entrance hall. They're cold." He looks at you properly. "What's wrong? You look like you've seen..."

  You look at him, and you see it. Not him. His flame. It isn't a candle, or a lamp. It's a bonfire: huge and red-gold and roaring and frightened, far too big for the man it's in, pushing against the inside of him like a fire against a door.

  "Sit down," you say, without knowing why. "Sit down next to me. Breathe out for six."

  @rowan:warm He sits. He breathes out for six. You put your hand on his arm and think [i]steady[/i], the way you'd think it at a frightened horse, and you watch the bonfire inside him hear it and settle, like a dog lying down, until it's burning low and even and red, like coals. The steam stops rising off the stone. He looks down at your hand, and then at you, and doesn't ask. "Thanks," he says, very quietly. "I don't know what you do. But thanks."

  @rowan:neutral He sits with you a while longer, the two of you on the cold stair in the moonlight, not talking. When he goes back down to his flagstones, he stops at the turn and looks back, as if to make sure you're still there.
  *set b_rowan_heat true
  *set st_rowan 3
  *set kindling +5

It's then, sitting on the stair, that you hear it properly.

The humming. Not the lanterns. The other thing. It's somewhere in the walls, very faint, low and thin, like a draught moaning in a chimney, and it's moving. You can hear it go along the wall beside you, and up, and along, following the lanterns in their brackets from one to the next, the way a finger follows a line of text. As it passes each one, the lantern shrinks, very slightly, and leans away, and then straightens again when it's gone.

{fam_name} has gone completely still.

It comes along the wall of the stair. Past the stag tapestry. Past the dim lantern in its bracket just above your head, which shrinks, and leans, and gutters...

And goes out.

The humming goes on along the wall, fainter, fainter, and is gone. The lantern above you hangs dark. A thin grey thread of smoke goes up from its wick, and in the flame-sight you can see, where its little light should be, where its thread should run down to the great glow under the castle, nothing. A hole. The thread's been cut.

You don't think about it. You stand up on the stair and reach up and put your fingers round the wick of the dead lantern, the way you'd pinch out a candle, except the other way round.

It's cold. Colder than it should be, cold as a key left out overnight. Then, under your fingers, something catches: a flicker from behind your breastbone, running down your arm like a match struck in the dark, and the wick lights. White-gold. The lantern swells with it and turns in its bracket, and the thin bright thread from it goes down, down, into the dark, and finds the great glow in the root of the rock, and holds.
*snapshot candle

Your fingers aren't burned. They tingle, and they're very cold, and your whole arm aches to the shoulder as if you've carried something heavy up a hill. You stand there holding your own wrist, staring at the little white light, and the thought that comes, absurdly, is: [i]I've mended it[/i].
*set relit_candle true
*set kindling +10
*achieve relit
There's a sound behind you. A breath, sharply taken.
*present familiar idris

@idris:attentive You turn. At the top of the stair, in the moonlight, in a dark dressing gown with a satchel over his shoulder and a book in his hand, is Idris Penhallow, the Owlcombe second-year who never seems to be anywhere but the library. He's looking at the lantern. Then at you. Then at your hand. His face in the moonlight is utterly still: the stillness of someone who's been hunting for a word in books for years and has just seen it written on a wall.
*set b_idris_saw true
*if st_idris < 2
  *set st_idris 2
@idris:neutral "Don't say anything," he says, very quietly. "Not here. Come with me."
*page_break
*comment ---------------------------------------------------------------- CH05.IDRIS.01
*sid CH05.IDRIS.01
*date 2026-09-24 23:55
*place P22 library
*present idris familiar
He has a key to the Long Stacks. You don't ask how.

He walks fast and says nothing, and you follow him through three corridors you've never seen and down a short stair that smells of dust and beeswax, with {fam_name} close beside you and your arm still aching. Your breath's still coming short. Every so often, through a wall, a sleeping flame drifts past at the edge of your sight, and you look away from it the way you'd look away from a lit window at night, as if you were intruding.

The library at midnight is a long galleried hall of books under a vaulted roof, with rolling ladders on brass rails and green-shaded lamps on the reading tables, all turned down to a glow. At the far end there's a cage of iron and brass where the restricted books are kept, and it hums faintly, like a beehive. It smells of old paper and cold ash. Idris turns up one lamp at a table in a corner and sits down across from you. {fam_name} settles {@(familiar = "owl") or (familiar = "raven")|on the back of a chair|in your lap}, watching him, very alert.

@idris:neutral For a while he doesn't speak. He takes his glasses off and cleans them on the hem of his dressing gown, and puts them back on, and you get the impression he's using the time. Then he opens a book on the table between you, old and heavy and bound in cracked green leather, and turns it round to face you. It's a woodcut: a woman in a long coat, standing on a shore, with a flame in her open hand, and all round her in the dark, drawn in thin lines, other small flames, in the chests of the people standing near her, and threads running between them.

You look at it. You know that shore. You don't know how you know it.

@idris:neutral "I study flame-work," he says. "The history of it. The theory. I've been at it for twelve years; I came to Wrenfold so I could keep doing it. There are about four hundred books in this library that touch on what I study, and I've read three hundred and eighty of them. The other twenty are in the cage." He glances at it, down the length of the dark hall, the way someone glances at a locked door in their own house. Then he looks at you, over his round glasses, very steadily. "There's an old word for what you did on the stair. There's one chapter about it, in all those books, in all four hundred years."

"What's the word?"

@idris:guarded "I'm not going to say it." He closes the book. "It isn't mine to say. If I'm wrong, I'll have frightened you for nothing. If I'm right..." He stops. His hand on the green leather has gone pale at the knuckles. "Go and see the Headmistress. Tomorrow. First thing. Before somebody else notices. Before anybody who'd want to use it notices."

"Who'd want to use it?"

@idris:neutral He doesn't answer that. The lamp ticks as it warms. Somewhere up in the gallery a book shifts on its shelf, the small settling sound old books make at night, and he doesn't even glance at it. He's studying your face in the green light, with those deep-set dark eyes, like someone memorising a page he isn't allowed to take home.
*choice
  #"How did you know? You were at the top of the stair before I even touched it."
    *set wit +5
    *if st_idris >= 2
      *set b_idris_stacks true
      *set st_idris 3
    @idris:tense "I saw the lantern go out," he says, after a moment. "I sleep badly. I walk. I've been walking these corridors at night since I came here, a year ago, and three times in that year I've seen a lantern go out on its own, with no draught, and I've never been able to find out why." He looks down at his hands. "Tonight I heard something. Humming. In the walls. I followed it. And I found you."

    "You heard it too?"

    @idris:neutral "Faintly. I'm not sure I'd have noticed, if I hadn't been listening for it for a year." A pause. "I've been looking for someone like you for twelve years. I didn't think I'd find one. I'm not sure I wanted to." He almost smiles, and it doesn't reach his eyes. "Go to bed. See the Headmistress. I'll be here. I'm always here."
  #"Thank you. For not saying it on the stair. For not telling anyone."
    *set heart +5
    *set st_idris +1
    @idris:warm Something in his face eases, for the first time. "You're welcome," he says.

    He turns the green book a quarter-turn on the table, squaring it with the edge, as if that were the thing that needed his attention. "People will want to tell. When they know. They'll want to tell everyone. It's the kind of thing people can't keep. Not because they're unkind. Because it's too big to hold on your own, and they'll think telling is a way of helping you carry it."

    "And you won't?"

    @idris:neutral He stands up and turns the lamp down. "I can keep things," he says. "It's what I'm for."
  #"You're frightening me. Stop being mysterious and tell me."
    *set nerve +5
    @idris:guarded "Good," says Idris, quietly. "Be frightened. It's the correct response."

    "That isn't an answer."

    @idris:neutral "No. It's advice. It's the best I have." He stands, and slides the green book back onto its shelf, between two others exactly its height, without having to look for the gap. "Tomorrow. The Headmistress. Please."

    It's the first time he's said please. It sounds as if it cost him something.

You go back through the dark corridors together, not talking, with {fam_name} leading the way. You can still see the flames through the walls, very faint now, fading as your heart slows down, like a picture going out of focus. Idris walks half a step behind you, as if he's keeping watch on your back. You don't mind as much as you'd expect.

*present idris tully familiar
@tully:neutral On the last landing, there's a light coming up the stair towards you: a small bobbing flame on the end of a long brass taper. "Now then," says Mr Tully, stopping, blinking up at you both. His flat cap's on crooked and his coat's buttoned wrong, as if he dressed in the dark. "Now then, my loves. Out late."

You look at him, and you can't help it: you see his flame. It's small, and a soft, sad amber, and it's flickering the way a candle flickers when there's a door open somewhere. Round the very edge of it, like the brown edge on a page held too near a fire, it's gone grey.

@tully:warm "I'll have to put you down for it," he says, apologetically, to you. Not to Idris; Idris, apparently, doesn't count, or has been caught so many times it's stopped being worth the ink. "Rules is rules. Tuesday, my cottage, seven o'clock. I'll find you something useful to do. Lanterns always need a hand." He pats your arm. His hand's cold. Then his eyes go past you, up the stair, to the lantern burning white in its bracket, and stay there a moment. "Well," he says softly. "Would you look at that." And then, brisker: "Off to bed. Go on."
*set detentions +1
*page_break
*comment ---------------------------------------------------------------- CH05.WEATHERVANE.01
*sid CH05.WEATHERVANE.01
*date 2026-09-25 17:00
*mood dusk
*place P25 weathervane_room
*present kestrel hester familiar
You don't have to go and see the Headmistress. A note arrives at breakfast, folded into the shape of a small bird, which glides down the length of the table and lands on your porridge: [i]Five o'clock. The Weathervane Room. Bring your familiar and a good appetite for cake. I.K.[/i]

It's the longest Friday of your life. You sit through Starreading without seeing a single star. In Wordcraft you set fire to a feather you were meant to be levitating, and Professor Moth says "Oh, splendid," and puts it out with his hat. Every time you pass a wall you're afraid to look at it, and every time you look at it, it's only a wall, and you can't decide which is worse. Idris, crossing the courtyard at lunch with his satchel, catches your eye once and gives you the smallest nod in the world, and walks on.

At a quarter to five, you climb.

The Weathervane Room is at the very top of the central tower, up a stair so narrow you go sideways. It's round, and full of weather. That's the only way to describe it. Barometers and thermometers and rain gauges on every wall. Clocks, dozens of them, all ticking, none of them quite together. And weathervanes, indoors, on posts and on shelves and hanging from the ceiling: iron cockerels and brass ships and a copper wren, all of them turning, slowly, this way and that, as if they're feeling the moods of the castle below instead of the wind. There's a fire. There's a perch by the window with a small hawk asleep on it, a kestrel, grey-headed and rust-backed. The windows look out over the whole Mere, gone pewter in the dusk, and the dark line of the hills beyond. There's cake.

Over the fireplace there's a painting: a weather-beaten old woman in an oilskin coat, with a broad, wind-browned face, a crooked smile and bright brown eyes, painted in oils so old the varnish has gone the colour of tea.

@kestrel:warm "Sit," says the Headmistress, pouring tea. "Have cake. It's lemon. The kitchens make it for me every Friday, and I can never finish it, and Mrs Pettigrew tells me off for wasting it." She hands you a plate. "Idris Penhallow came to see me at seven o'clock this morning. He was very correct about it. He wouldn't tell me why. He just said you'd be coming, and that I should see you, and that he hoped he was wrong." She sits down opposite you, with her own cup, and looks at you over it. "He isn't wrong. I saw it in Hearth. You looked at Toby Quill with your eyes shut."

"I saw his..." You don't know what to call it.

@kestrel:neutral "His flame," she says. "Yes. Everyone has one. Most of us can learn to glimpse them, if we're very still, after years of practice. A warmth. A shape." She puts her cup down. "You see them plainly, don't you. Through walls. And last night, I'm told, a lantern on the main stair went out, and when Mr Tully came up at midnight it was burning white."

You nod. Your hands, you find, are shaking round the cup. You put it down on the saucer, carefully, and it rattles anyway.

@kestrel:warm She notices. She reaches over without a word and puts another slice of cake on your plate, as if that were the obvious remedy, and waits until you've eaten some of it. It helps more than it should.

@kestrel:grave "The word," she says, when you've finished, "is [i]Kindler[/i]. Someone who can see flames, and steady them, and, if they're very rare, and very foolish, and very lucky, relight one that's gone out." She's watching you closely. "It's the rarest gift there is. Hester Wren was one." She nods at the painting over the fire. "That's her. She founded this school because a Kindler's the only person who can see a late flame before it catches, and she saw hundreds of them, all over the country, burning in people who had no idea, with nobody to tell them. So she built a place to tell them."

You look at the painting. The painted old woman looks back.

[i]Kindler.[/i] You say it in your head. It sounds like something out of a story Nana Pearl would have told you at bedtime, and then, on the way out of the room, told you not to repeat.

@kestrel:neutral "There have been a handful since. Six or seven, in four hundred years. We don't really know; they don't always come to us." A pause. "The last one was a long time ago."
*choice
  #"Who was the last one?"
    *set wit +5
    @kestrel:grave She's quiet. The weathervanes turn. One of the clocks, somewhere behind you, strikes a quarter-hour that none of the others agree with. "Someone I was at school with," she says at last. "Here. A long time ago." Her hands are very still in her lap. "He lost his flame. It was an accident, and it was dealt with badly, and I've regretted it every day for forty years."

    You wait. The fire settles in the grate.

    @kestrel:tired "That's all I'm going to say about it tonight," she says, and looks up. "I'm sorry. One day I'll tell you properly. Not today. Today I'd like you to eat your cake."
  #"Why me?"
    *set heart +5
    @kestrel:warm "Nobody knows why," she says, gently. "Why late. Why anyone. Why a baker's apprentice, and a firefighter, and a nurse, and you." Her eyes crinkle. "My mother used to say the flame knows what it's doing even when we don't. I used to think that was the sort of thing people say to children."

    "And now?"

    @kestrel:amused "Now I'm seventy-one," says the Headmistress, "and I've begun to think she was right. It's very annoying. Don't tell her."
  #"Could I relight a person? Not a lantern. A person."
    *set flame +5
    @kestrel:grave The whole room seems to go still. Even the weathervanes pause, all together, pointing nowhere. "In theory," says the Headmistress, very quietly. "It's been done. Twice, that anyone wrote down, in four hundred years. And it cost the Kindler who did it, both times, a great deal." She leans forward. "Promise me you will never try it. Not until you know exactly what it costs. Not until I've taught you. Promise."

    You promise. You mean it, sitting there with the cake on your knee and the fire warm on one side of your face. You'll remember, later, how much you meant it.

@kestrel:neutral "Every Friday at five, then," she says, briskly, sitting back. "Here. Cake. I'll teach you what I know, which isn't much, and Hester's journals, which are more, and together we'll work out the rest. You'll learn to see without being dazzled. To steady without hurting yourself. And you'll learn [i]not[/i] to relight things, which is the most important lesson of all." She fixes you with a look over her cup. "And you'll tell no one. Not because it's shameful. Because it's precious. And precious things get taken."

"Tell no one at all?"

@kestrel:warm "That's up to you, in the end. It's yours," she says. "But be careful whom you give it to. Once it's said, it can't be unsaid."

@kestrel:neutral She lets you finish your tea after that, and talks about ordinary things: the weather-glasses, which were Hester's, and the clocks, which were not, and the kestrel on the perch, who is eleven and bites. It's so ordinary it makes your eyes sting. By the time the sky outside has gone from pewter to ink, your hands have stopped shaking.
*set kindling +10
*set fr_kestrel 2
*meet hester
@hester:neutral It's as you're getting up to go, with {fam_name} and the last of the lemon cake wrapped in a napkin, that the painting over the fireplace speaks.

@hester:neutral "Mind the dark, little wren," it says. The voice is old and rough and salty, like wind off a harbour, and the painted mouth moves, just slightly, under the tea-coloured varnish. "It's always hungriest for the bright ones."

You stare. The painted brown eyes look back at you, very much alive, and then, slowly, go still, and it's just a painting of an old woman in an oilskin coat again. Every weathervane in the room has swung round to point at you.

@kestrel:neutral "She doesn't do that often," says the Headmistress quietly, behind you. She's gone rather pale. "Once or twice a year. Usually to me." She opens the door for you. "Goodnight, {name}. Go carefully."

You go down the narrow stair sideways, holding the cake, with your heart going hard. At the bottom you realise you've been holding your breath all the way down, and you let it out. For six.
*page_break
*comment ---------------------------------------------------------------- CH05.TELL.01
*sid CH05.TELL.01
*date 2026-09-26 10:00
*mood day
*place P27 glimmer_pitch
*present toby okoro familiar
Saturday morning is bright and blowy and blue, the kind of September day that feels like the last day of summer and knows it. The wind's coming off the Mere smelling of weed and cold water, and the flags on the stands are cracking like washing on a line.

The Glimmer Pitch isn't a field. It's the Mere itself: a long stretch of shallow water off the south shore, with the stands built out over it on tall wooden stilts, and the lantern-hoops hung in the air at either end, three to a side, swinging in the wind. This morning it's noisy with trials: brooms whizzing, whistles, Coach Okoro standing on the water at the heart of it all, actually standing on it, bellowing encouragement, and the stands full of people with flasks and blankets and opinions.
*if glimmer
  You try out for {@house = "larkspire"|Larkspire|}{@house = "owlcombe"|Owlcombe|}{@house = "heronmere"|Heronmere|}{@house = "rookhallow"|Rookhallow|}. It's the most fun you've ever had while being terrified. You throw the Glim, a ball of warm white light the size of a grapefruit that pulls in your hand like a live thing, through a lantern-hoop from forty feet, and the hoop flares your house's colour, and a noise comes out of you that you didn't know you could make.

  You nearly fall off twice. The second time, you hang by your knees for a moment over the grey-green water, with the whole Mere upside down and the stands roaring, and haul yourself back up, and nobody's more surprised than you.
  *if (flame >= 40) or (nerve >= 40)
    @okoro:amused "Reserve Chaser!" shouts Coach Okoro, at the end, pointing at you from the middle of the Mere. "You! Reserve! Training's Tuesdays and Thursdays, don't be late, don't fall in!"
    *points +5
  *else
    @okoro:amused "Not this year!" shouts Coach Okoro, not unkindly. "Not bad, though! Keep flying! Try again at Christmas!"
*else
  You watch from the stands, with a flask of tea and a blanket and Toby, and shout for your house, and for everyone else's, and for Toby's friend Jonty, who tries out for Heronmere as Keeper and simply sits in front of the hoop, enormous and calm, like a wardrobe on a broom, and nothing gets past him. He's knitting a hat between shots. Nobody has the heart to tell him to stop.

@toby:neutral At half past eleven, Toby sits down next to you on the bench with two bacon rolls from the kitchens, wrapped in a napkin and still hot, and gives you one, and looks at you sideways.

You eat. He eats. Down on the water somebody falls off, and there's a splash and a cheer. Toby watches it without seeing it.

@toby:tense "You were out on Thursday night," he says. "I heard you go. And you went to the Headmistress's tower yesterday, everyone saw, Mina had it on the Wireless last night, [i]mystery first-year summoned to the Weathervane Room[/i]. She didn't say your name, but she did a sound effect." He fiddles with his roll. "You don't have to tell me. I just want to know if you're all right."

You look at him. Toby Quill, who fell on you on Lamplight Row, and sits next to you in every lesson, and brings you bacon rolls without being asked, and has a small orange flame like an oven light that you could see through his cardigan if you let yourself.

You don't let yourself. It feels like reading someone's letters.

[i]Be careful whom you give it to. Once it's said, it can't be unsaid.[/i]
*choice
  #Tell Toby. All of it. He's your best friend, and he asked because he cares.
    *set told_toby true
    *set fr_toby 3
    *set heart +5
    You tell him. Low, under the noise of the trials, with your heads together. The flames through the walls, and the great glow under the castle, and the lantern on the stair, and the Weathervane Room, and the word.

    @toby:scared He listens with his bacon roll forgotten and his mouth open. When you've finished he's quiet for so long you start to worry. Down on the water somebody scores, and the stand erupts round you, and Toby doesn't even look. Then he says, "Can you see mine?"

    "Yes."

    @toby:warm "What's it like?"

    "Like the light in an oven door," you say. "When something's baking."

    @toby:laugh Toby Quill laughs out loud, and then he cries a bit, and then he hugs you so hard you drop your roll. "I won't tell anyone," he says into your shoulder. "Not ever. Not even Priya. [i]Especially[/i] not Priya. I can't talk to Priya about anything, I'd just say [i]oven[/i] at her." He lets go, and wipes his face on his cardigan sleeve. "Thank you for telling me. I'm going to be really good at keeping it. You'll see."

    @toby:warm He gives you half of his roll, to replace the one you dropped, which the gulls have already had. Then, after a minute, very seriously: "Is it a nice oven? Like a proper bakery one? Or a bit rubbish?"

    "A proper one," you tell him. "The best in the street."

    He goes pink to the ears, and doesn't say anything else for quite a while, and keeps smiling at the water.
  #Tell Toby you're fine, and that you'll tell him one day. Not yet.
    *set fr_toby +1
    *set wit +5
    "I'm fine," you say. "I promise. It's something about my flame. The Headmistress is helping. I'll tell you properly one day, when I understand it myself."

    @toby:warm He studies you, frowning a little, the way he studies a loaf through the oven door when he isn't sure it's done. Then he nods, and bumps his shoulder against yours. "Okay," he says. "One day. I'll hold you to it."

    He eats his roll, and doesn't ask again. Once, a bit later, when a Larkspire girl comes off her broom into the shallows and stands up dripping and furious, he nudges you and says "That's you, that is, in a week," and you laugh, and you love him a little bit for not asking.
  *if (st_rowan >= 2) or (st_imogen >= 2) or (st_saoirse >= 2) or (st_noor >= 2) or (st_cas >= 2)
    #Tell Toby you're fine. Then go and find someone else. You know who you want to tell.
      *set fr_toby +1
      "I'm fine," you tell Toby. "Honestly. I'll explain one day." He nods, and doesn't push. But when he's gone back to the Heronmere end of the stand to shout for Jonty, you get up, because there's someone you want to tell, and you know exactly who.
      *choice
        *if st_rowan >= 2
          #Rowan. He knows what it's like to have something inside you that frightens you.
            *present toby okoro familiar rowan
            *set told_rowan true
            *set st_rowan +1
            You find him on the shingle below the stands, sitting on an upturned boat with his sleeves rolled up in the cold, and you sit next to him and tell him, all of it, low, while the brooms go past overhead.

            @rowan:warm He listens without saying anything. When you've finished, he looks at his own big hands, turning them over, as if they belong to someone else. "That's what you did," he says. "With your hand on my arm." He breathes out. "You saw it. What's in me."

            "It's a bonfire," you say. "It's too big for you. It's frightened."

            @rowan:hurt He doesn't say anything for a while. A broom goes over, low, and the wind of it flattens the grass on the dunes. Then he says, very quietly, "Yeah. That's about right."

            @rowan:warm He picks up a flat stone and turns it over and puts it down again. "I won't tell a soul," he says. "You've got my word. I've got four sisters, I've had a lot of practice not telling." He glances sideways at you. "Thanks for telling me. I mean it. Nobody's ever told me anything like that on purpose."

            You believe him completely.
        *if st_imogen >= 2
          #Imogen. She'll want to understand it, not just be amazed by it.
            *present toby okoro familiar imogen
            *set told_imogen true
            *set st_imogen +1
            You find her in the Owlcombe stand with a volume of the regulations on her knee, making notes in the margin in pencil, which is presumably not allowed. You sit down beside her and tell her, low. She doesn't interrupt once. At one point she puts her pencil down, and doesn't pick it up again.

            @imogen:attentive When you've finished, she sits very still. "A Kindler," she says. "Volume nine. The locked one." Her eyes are very bright behind her glasses. "Could you see... could you see someone who'd been hollowed? Could you see if there was anything left?"

            It's a strange question. You don't know why she's asking it. "I don't know," you say. "Why?"

            @imogen:guarded "No reason," says Imogen Sallow, too quickly. She opens the regulations again and looks at a page without reading it.

            @imogen:neutral "I won't tell anyone," she says, after a moment. "I'm very good at not telling people things. Ask anyone who's tried to get anything out of me." She closes the book. "Thank you for trusting me. I'm not used to it." A pause, and then, more briskly, because she's Imogen: "You should write it all down. Everything you see, and when. Evidence. If anyone ever asks, you'll want dates."
        *if st_saoirse >= 2
          #Saoirse. She'll laugh, and that's exactly what you need.
            *present toby okoro familiar saoirse
            *set told_saoirse true
            *set st_saoirse +1
            You find her upside down on a broom under the stands, tightening something with a spanner held in her teeth, and tell her. She's so surprised she falls off.

            @saoirse:laugh "You can see [i]inside people[/i]," she says, from the shingle, delighted, with seaweed on her shoulder. "That's the best thing I've ever heard. That's better than my beetle. What's mine like? No, don't tell me. Yes, tell me."

            "Like sparks off a grinder."

            @saoirse:warm "[i]Brilliant,[/i]" breathes Saoirse. She lies back on the stones and looks up at the underside of the stand, grinning, as if you've given her a present.

            @saoirse:neutral Then she sits up, and brushes off the seaweed, and for once she's serious. "I won't tell," she says. "Cross my heart. You can trust me with the important stuff. It's only the rules I'm bad with." She hands you the spanner. "Now hold that. And don't look inside the broom. It's shy."
        *if st_noor >= 2
          #Noor. She'll know what to do with something frightening.
            *present toby okoro familiar noor
            *set told_noor true
            *set st_noor +1
            You find her in the Heronmere stand, not watching the trials, reading a book on anatomy that looks older than the castle, with her feet up on the bench in front and her plait over her shoulder. You sit down and tell her, low.

            @noor:neutral She listens the way she listens to patients: completely still, completely calm, her eyes on your face and not on the book. When you've finished, she says, "Does it hurt? When you relight something?"

            Nobody's asked you that. Not even the Headmistress. "My arm aches," you say. "And I'm cold. For hours."

            @noor:tired She nods slowly, as if she's filing it. "Then you tell me," says Noor Haddad, "every time you do it. Every single time. So somebody's keeping count." She closes her book. "I won't tell anyone else. But I'll be keeping count."

            "That sounds like a threat."

            @noor:amused "It's a care plan," says Noor. "They sound the same. Have you eaten?"
        *if st_cas >= 2
          #Cas. You don't know why. Maybe because he'd understand being different in a family that isn't.
            *present toby okoro familiar cas
            *set told_cas true
            *set st_cas +1
            You find him alone, as always, at the far end of the {@cas_house = "owlcombe"|Owlcombe|Rookhallow} stand, in an immaculate coat, with nobody within ten feet of him. You sit down next to him, and he looks at you as if you're a wasp that has landed on his sleeve. You tell him anyway.

            @cas:guarded He listens with his face perfectly blank. When you've finished, he says, "Why on earth would you tell [i]me[/i]?"

            "I don't know."

            @cas:hurt He looks out at the pitch, turning the signet ring on his finger. Round and round. "My family has an old story," he says, at last. "About Kindlers. My grandmother told it to me when I was small, as a sort of warning, the way other children get told about wolves. It doesn't end well."

            "What happens in it?"

            @cas:guarded "Nothing you'd want to hear on a Saturday." He stands up, abruptly. "I won't tell anyone. Obviously. Who would I tell?" But he looks back at you from the steps, with something in his face you haven't seen there before, and it looks a lot like fear. For you.
  #Tell nobody. Not even Toby. It's yours, and the Headmistress said precious things get taken.
    *set wit +5
    *set nerve +5
    "I'm fine," you say. "Honestly, Toby. Just flame stuff. The Headmistress sorted it."

    @toby:neutral He looks at you a moment longer than he needs to. Then he nods, and eats his roll. He doesn't ask again. You can tell he doesn't quite believe you, and that he's too kind to say so, and somehow that sits heavier than if he'd argued.

Down on the Mere, somebody throws the Glim through a hoop, and the hoop flares gold, and the stands roar. The sun's out properly now, flashing off the water. It's a beautiful day.

You sit in the stand with the flame-sight just behind your eyes, where you can feel it waiting, like a word on the tip of your tongue. You look at the whole bright noisy crowd, four hundred people and four hundred little lights, and you think about a lantern on a stair going out with nobody near it, and a humming in the walls that moved from light to light like a finger along a line.

Then you drink your tea, and shout for your house, and let it be Saturday.
*journal [b]Chapter 5.[/b] In Hearth, you saw Toby's flame with your eyes shut. That night, out after curfew, you saw every flame in the castle through the walls, and something vast and bright deep under the castle. A humming in the walls put out a lantern on the main stair, and you relit it with your bare hand. Idris Penhallow saw. The Headmistress told you what you are: a [b]Kindler[/b], like Hester Wren. The last one, she said, lost his flame forty years ago. Tell no one. {@told_toby|You told Toby.|}{@told_rowan|You told Rowan.|}{@told_imogen|You told Imogen.|}{@told_saoirse|You told Saoirse.|}{@told_noor|You told Noor.|}{@told_cas|You told Cas.|} Mr Tully gave you a detention.
*page_break
*goto_scene ch06
`);
