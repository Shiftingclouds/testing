NB.scene("ch05", String.raw`
*mood dusk
*set ch 5
*chapter 5 The Burning Year
*comment ---------------------------------------------------------------- CH05.HEARTH.01
*sid CH05.HEARTH.01
*date 2026-09-24 17:00
*place P13 lantern_hall
*present kestrel toby familiar
Hearth isn't on the timetable as a lesson. It's on the timetable as [i]Hearth (Thursdays, the Hall, bring nothing)[/i], and it turns out to be the Headmistress, and forty-three first-years lying on their backs on the floor of the Lantern Hall at five o'clock on a Thursday, looking up.

The lanterns have come down low for it. They hang six feet above you, drifting, gold and rose and green and blue, and the Hall is dim and warm and humming, and the benches have been pushed back against the walls. It's like lying at the bottom of a lit pond.

@kestrel:neutral "Breathe," says the Headmistress. She's walking slowly between you in her midnight-blue robes, her silver braid swinging, her voice low. "In for four. Out for six. The flame follows the breath. It always has. When you're frightened you breathe fast, and it flares. When you breathe slow, it settles. This is the whole secret. Everything else is detail."

You breathe. In for four. Out for six. Beside you, Toby breathes like someone blowing up a lilo.

@kestrel:neutral "Now close your eyes," says the Headmistress, "and picture it. Your flame. Behind your breastbone, where it's been all year. Don't try to change it. Just see it. Hold it the way you'd hold a candle in cupped hands, walking through a draughty house."

You close your eyes.

It's easy. That's the strange thing. It's the easiest thing you've ever done. There it is, behind your breastbone, where it's always been, where it leaned towards the candles and purred for the wand: a flame. Not a candle-flame. Bigger. Brighter. White at the heart and gold at the edges, steady and tall and very bright, like a flame in a lamp-glass with the wick turned right up.

And then, without meaning to, you turn your head, with your eyes still closed, towards Toby.

And you see his.

It's small and orange and warm, like the light in an oven door when something's baking. It's there, behind his cardigan, behind his ribs, bobbing slightly with his breathing. You can see it as clearly as you can see your own. Through your eyelids. Through him.

You gasp and open your eyes. It's gone. Toby's just Toby, lying on the floor with his cardigan rucked up and his mouth open, very nearly asleep.

@kestrel:attentive When you look up, the Headmistress has stopped walking. She's standing ten feet away between two rows of breathing students, looking straight at you, with her hazel eyes gone very still.

She doesn't say anything. After a moment she smiles, slightly, and walks on. "Out for six," she says, to the Hall. "Slowly. Slowly."
*page_break
*comment ---------------------------------------------------------------- CH05.NIGHT.01
*sid CH05.NIGHT.01
*date 2026-09-24 23:40
*mood night
*place P32 corridor_night
*present familiar
You can't sleep.

It's twenty to twelve, and curfew was at eleven, and you're standing at the bottom of your house's stair in your dressing gown with your wand in your pocket, and you're not entirely sure how you got here.
*choice
  #{fam_name} went out through the door an hour ago and hasn't come back.
    *set heart +5
    {fam_name} went out an hour ago, {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|through the window|through a gap in the door you'd swear wasn't there}, with the purposeful air of someone who's remembered an appointment, and hasn't come back, and you've lain awake for an hour imagining {fam_name} lost in the dark, or stuck, or eaten by Mrs Pettigrew's goat. You come down to find {fam_name}. And there {fam_name} is, waiting for you at the bottom of the stair, looking at you as if you're very late.
  #The humming. You can hear something humming in the walls, and it isn't the lanterns.
    *set wit +5
    You heard it at eleven, lying in bed with your eyes shut, as the castle went quiet round you: under the lanterns' sweet sleepy hum, another sound. Lower. Thinner. Deep in the stone, like a draught in a chimney, rising and falling. You've been lying awake for forty minutes telling yourself it's pipes. You've come down to prove it's pipes.
  #You're starving. You've heard the kitchens leave bread out after midnight.
    *set flame +5
    You're starving, the gnawing ravenous hunger you've had every night since you kindled, like your body is a fire that eats food instead of wood. Hamish Galbraith told everyone that Mrs Pettigrew leaves the ends of the bread out on the kitchen table after midnight, for the familiars, and that if you're very quiet you can have some. You're going to be very quiet.

The corridors at night are different.

The lanterns in their wall-brackets are turned down to embers, and the portraits are asleep, snoring in their frames, and a suit of armour on the second landing has its visor down and a small bird asleep in its helmet. The stairs creak. Moonlight comes through the tall windows in long grey bars across the stone. It's cold, and very quiet, and very old.

You're halfway down the main stair when it happens.

At first you think it's your eyes. A glow at the edge of vision, on your left, where the wall is. Small, and orange, and warm. Then another, a bit further along. Then a row of them, like the lights of houses seen across a valley at night.

You stop on the stair.

You're looking at a wall. Plain grey stone, a tapestry of a stag, a lantern in a bracket turned down low. And behind the wall, through it, as if the stone were smoked glass, there are lights. Six of them, in a row, lying down, bobbing very slightly: small flames, each one a different colour and shape and size, each one slow and soft with sleep. A dormitory. Six people asleep in a dormitory on the other side of that wall, and you can see their flames. You can see them breathing.

You turn round, slowly, on the stair.

The whole castle is full of lights.

Through the walls, through the floors, through the ceiling, in every direction, like looking down at a city at night from an aeroplane: hundreds of flames, scattered through the dark of the stone. Most of them are asleep, low and soft. Some are awake: a steady clear lamp high in a tower that you think must be Professor Kovač, marking; a flickering nervous candle in a bathroom on the third floor; a brilliant, busy, dancing light down in the kitchens that could only be Mrs Pettigrew. And up at the very top of the central tower, above everything, one flame burning tall and steady and silver-white, like a lighthouse, turning slowly, as if it's keeping watch: the Headmistress.

And down below everything, deep under the castle, under the kitchens, under the cellars, down in the root of the rock, something else. Something so big and so bright that you can't look at it straight: a white-gold glow, huge and warm and quiet, like looking at the sun through your closed eyelids. It's so far down. It feels like it's been there forever. Every one of the lanterns in the castle, you realise, faintly, in the corner of your eye, has a thread going down to it, thin as spider silk, bright as wire.

You sit down on the stair, because your legs have stopped working.
*if (st_rowan >= 2) and not(b_rowan_heat)
  *present familiar rowan
  @rowan:tense And that's how Rowan finds you: sitting on the main stair at midnight in your dressing gown, with your mouth open, staring at a wall. He's in a T-shirt and bare feet, and the stone under his feet is steaming. "Can't sleep," he says, low. "Too hot. I come and lie on the flagstones in the entrance hall. They're cold." He looks at you. "What's wrong? You look like you've seen..."

  You look at him, and you see it. Not him. His flame. It isn't a candle, or a lamp. It's a bonfire: huge and red-gold and roaring and frightened, far too big for the man it's in, pushing against the inside of him like a fire against a door.

  "Sit down," you say, without knowing why. "Sit down next to me. Breathe out for six."

  @rowan:warm He sits. He breathes out for six. You put your hand on his arm, like you did in the Warding Hall, and think [i]steady[/i], and you watch the bonfire inside him hear it and settle, like a dog lying down, until it's burning low and even and red, like coals. The steam stops rising off the stone. He looks down at your hand, and then at you, and doesn't ask. "Thanks," he says, very quietly. "I don't know what you do. But thanks." After a while he goes back to his flagstones.
  *set b_rowan_heat true
  *set st_rowan 3
  *set kindling +5

It's then, sitting on the stair, that you hear it properly.

The humming. Not the lanterns. The other thing. It's somewhere in the walls, very faint, low and thin, like a draught moaning in a chimney, and it's moving. You can hear it go along the wall beside you, and up, and along, following the lanterns in their brackets, from one to the next, the way a finger follows a line of text. And as it passes each one, the lantern shrinks, very slightly, and leans away, and then straightens again when it's gone.

It comes along the wall of the stair. Past the stag tapestry. Past the dim lantern in its bracket just above your head, which shrinks, and leans, and gutters...

And goes out.

The humming goes on along the wall, fainter, fainter, and is gone. The lantern above you hangs dark. A thin grey thread of smoke goes up from its wick, and in the flame-sight you can see, where its little light should be, where its thread should go down to the great glow under the castle, nothing. A hole. The thread's been cut.

You don't think about it. You stand up on the stair and reach up and put your fingers round the wick of the dead lantern, the way you'd pinch out a candle, except the other way round.

It's cold. Colder than it should be. And then, under your fingers, something catches, a flicker from behind your breastbone going down your arm like a match struck in the dark, and the wick lights. White-gold. The lantern swells with it and turns in its bracket, and the thin bright thread from it goes down, down, into the dark, and finds the great glow in the root of the rock, and holds.
*snapshot candle

Your fingers aren't burned. They tingle, and they're very cold, and your whole arm aches to the shoulder as if you've carried something heavy up a hill.
*set relit_candle true
*set kindling +10
*achieve relit
There's a sound behind you. A breath, sharply taken.
*present familiar idris

@idris:attentive You turn. At the top of the stair, in the moonlight, in a dark dressing gown with a satchel over his shoulder and a book in his hand, is Idris Penhallow. He's looking at the lantern. Then at you. Then at your hand. His face in the moonlight is utterly still, the stillness of someone who's been looking for a word in a book for years and has just seen it written on a wall.
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

The library at midnight is a long galleried hall of books under a vaulted roof, with rolling ladders on brass rails and green-shaded lamps on the reading tables, all turned down to a glow, and a cage at the far end of iron and brass where the restricted books are kept, which hums faintly, like a beehive. Idris turns up one lamp at a table in a corner and sits down across from you. {fam_name} settles {@(familiar = "owl") or (familiar = "raven")|on the back of a chair|in your lap}, watching him, very alert.

@idris:neutral He doesn't say anything for a while. He opens a book on the table between you, old and heavy and bound in cracked green leather, and turns it round to face you. It's a woodcut: a woman in a long coat, standing on a shore, with a flame in her open hand, and all round her in the dark, drawn in thin lines, are other small flames, in the chests of the people standing near her, and threads running between them.

@idris:neutral "I study flame-work," he says. "The history of it. The theory. I've been at it for six years; I came to Wrenfold to keep doing it. There are about four hundred books in this library that touch on what I study, and I've read three hundred and eighty of them. The other twenty are in the cage." He looks at you, over his round glasses, very steadily. "There's an old word for what you did on the stair. There's one chapter about it in all those books, in all four hundred years."

"What's the word?"

@idris:guarded "I'm not going to say it." He closes the book. "It isn't mine to say. If I'm wrong, I'll have frightened you for nothing. If I'm right..." He stops. His hand on the green leather has gone white at the knuckles. "Go and see the Headmistress. Tomorrow. First thing. Before somebody else notices. Before anybody who'd want to use it notices."

"Who'd want to use it?"

@idris:neutral He doesn't answer that. He looks at you for a long time in the green lamplight, with those deep-set dark eyes, like someone memorising a page.
*choice
  #"How did you know? You were at the top of the stair before I even touched it."
    *set wit +5
    *if st_idris >= 2
      *set b_idris_stacks true
      *set st_idris 3
    @idris:tense "I saw the lantern go out," he says, after a moment. "I sleep badly. I walk. I've been walking these corridors at night for two years, and three times in two years I've seen a lantern go out on its own, with no draught, and I've never been able to find out why." He looks down at his hands. "Tonight I heard something. Humming. In the walls. I followed it. And I saw you." A pause. "I've been looking for someone like you for six years. I didn't think I'd find one. I'm not sure I wanted to." He almost smiles, and it doesn't reach his eyes. "Go to bed. See the Headmistress. I'll be here. I'm always here."
  #"Thank you. For not saying it on the stair. For not telling anyone."
    *set heart +5
    *set st_idris +1
    @idris:warm Something in his face eases, for the first time. "You're welcome," he says. "People will want to tell. When they know. They'll want to tell everyone. It's the kind of thing people can't keep." He stands up and turns the lamp down. "I can keep things. It's what I'm for."
  #"You're frightening me. Stop being mysterious and tell me."
    *set nerve +5
    @idris:guarded "Good," says Idris, quietly. "Be frightened. It's the correct response." He stands, and slides the green book back onto its shelf. "Tomorrow. The Headmistress. Please." It's the first time he's said please. It sounds like it cost him something.

You go back through the dark corridors together, not talking, with {fam_name} leading the way. You can still see the flames through the walls, very faint now, fading as your heart slows down, like a picture going out of focus.

*present idris tully familiar
@tully:neutral On the last landing, there's a light coming up the stair towards you: a small bobbing flame on the end of a long brass taper. "Now then," says Mr Tully, stopping, blinking up at you both. His flat cap's on crooked and his coat's buttoned wrong, as if he dressed in the dark. "Now then, my loves. Out late."
You look at him, and you can't help it: you see his flame. It's small, and a sort of soft sad amber, and it's flickering, the way a candle flickers when there's a door open somewhere, and round the very edge of it, like the brown edge on a page held too near a fire, it's gone grey.

@tully:warm "I'll have to put you down for it," he says, apologetically, to you. Not to Idris; Idris, apparently, doesn't count, or has been caught so many times it's stopped being worth it. "Rules is rules. Tuesday, my cottage, seven o'clock. I'll find you something useful to do. Lanterns always need a hand." He pats your arm. His hand's cold. "Off to bed. Go on."
*set detentions +1
*page_break
*comment ---------------------------------------------------------------- CH05.WEATHERVANE.01
*sid CH05.WEATHERVANE.01
*date 2026-09-25 17:00
*mood dusk
*place P25 weathervane_room
*present kestrel hester familiar
You don't have to go and see the Headmistress. A note arrives at breakfast, folded into the shape of a small bird, which lands on your porridge: [i]Five o'clock. The Weathervane Room. Bring your familiar and a good appetite for cake. I.K.[/i]

The Weathervane Room is at the very top of the central tower, up a stair so narrow you go sideways. It's round, and full of weather. That's the only way to describe it. Barometers and thermometers and rain gauges on every wall. Clocks, dozens of them, all ticking. And weathervanes, indoors, on posts and on shelves and hanging from the ceiling: iron cockerels and brass ships and a copper wren, and all of them turning, slowly, this way and that, as if they're feeling the moods of the castle below instead of the wind. There's a fire. There's a perch by the window with a small hawk asleep on it, a kestrel, grey-headed and rust-backed. There's cake.

And there's a painting over the fireplace: a weather-beaten old woman in an oilskin coat, with a broad brown face and a crooked smile and bright brown eyes, painted in oils so old the varnish has gone the colour of tea.

@kestrel:warm "Sit," says the Headmistress, pouring tea. "Have cake. It's lemon. The kitchens make it for me every Friday, and I can never finish it, and I've been told off for wasting it." She hands you a plate. "Idris Penhallow came to see me at seven o'clock this morning. He was very correct about it. He wouldn't tell me why. He just said you'd be coming, and that I should see you, and that he hoped he was wrong." She sits down opposite you, with her own cup, and looks at you over it. "He isn't wrong. I saw it in Hearth. You looked at Toby Quill with your eyes shut."

"I saw his..." You don't know what to call it.

@kestrel:neutral "His flame," she says. "Yes. Everyone has one. Most of us can learn to glimpse them, if we're very still, after years of practice. Just a warmth. A shape." She puts her cup down. "You see them plainly, don't you. Through walls. And last night, I'm told, a lantern on the main stair went out, and when Mr Tully came round at midnight it was burning white."

You nod. You find your hands are shaking round the cup.

@kestrel:grave "The word," she says, "is [i]Kindler[/i]. Someone who can see flames, and steady them, and, if they're very rare, and very foolish, and very lucky, relight one that's gone out." She's watching you very closely. "It's the rarest gift there is. Hester Wren was one." She nods at the painting over the fire. "That's her. She founded this school because a Kindler's the only person who can see a late flame before it catches, and she saw hundreds of them, all over the country, burning in people who had no idea, and nobody to tell them. So she built a place to tell them."

You look at the painting. The painted old woman looks back.

@kestrel:neutral "There have been a handful since. Six or seven, in four hundred years. We don't really know; they don't always come to us." A pause. "The last one was a long time ago."
*choice
  #"Who was the last one?"
    *set wit +5
    @kestrel:grave She's quiet for a long time. The weathervanes turn. "Someone I was at school with," she says at last. "Here. A long time ago." Her hands are very still in her lap. "He lost his flame. It was an accident, and it was dealt with badly, and I've regretted it every day for forty years." She looks up. "That's all I'm going to say about it tonight. I'm sorry. One day I'll tell you properly. Not today."
  #"Why me?"
    *set heart +5
    @kestrel:warm "Nobody knows why," she says, gently. "Why late. Why anyone. Why a baker's apprentice, and a firefighter, and a nurse, and you." Her eyes crinkle. "My mother used to say the flame knows what it's doing even when we don't. I used to think that was the sort of thing people say to children. I'm seventy-one, and I've begun to think she was right."
  #"Could I relight a person? Not a lantern. A person."
    *set flame +5
    @kestrel:grave The whole room seems to go still. Even the weathervanes pause. "In theory," says the Headmistress, very quietly. "It's been done. Twice, that anyone wrote down, in four hundred years. And it cost the Kindler who did it, both times, a great deal." She leans forward. "Promise me you will never try it. Not until you know exactly what it costs. Not until I've taught you. Promise."

    You promise. You mean it, sitting there with the cake on your knee. You'll remember, later, how much you meant it.

@kestrel:neutral "Every Friday at five, then," she says, briskly, sitting back. "Here. Cake. And I'll teach you what I know, which isn't much, and Hester's journals, which are more, and together we'll work out the rest. You'll learn to see without being dazzled. To steady without hurting yourself. And you'll learn [i]not[/i] to relight things, which is the most important lesson of all." She fixes you with a look. "And you'll tell no one. Not because it's shameful. Because it's precious. And precious things get taken."

"Tell no one at all?"

@kestrel:warm "That's up to you, in the end. It's yours," she says. "But be careful whom you give it to. Once it's said, it can't be unsaid."
*set kindling +10
*set fr_kestrel 2
*meet hester
@hester:neutral It's as you're getting up to go, with {fam_name} and the last of the lemon cake wrapped in a napkin, that the painting over the fireplace speaks.

@hester:neutral "Mind the dark, little wren," it says. The voice is old and rough and salty, like wind off a harbour, and the painted mouth moves, just slightly, under the tea-coloured varnish. "It's always hungriest for the bright ones."

You stare. The painted brown eyes look back at you, very much alive, and then, slowly, go still, and it's just a painting of an old woman in an oilskin coat.

@kestrel:neutral "She doesn't do that often," says the Headmistress quietly, behind you. She's gone rather pale. "Once or twice a year. Usually to me." She opens the door for you. "Goodnight, {name}. Go carefully."
*page_break
*comment ---------------------------------------------------------------- CH05.TELL.01
*sid CH05.TELL.01
*date 2026-09-26 10:00
*mood day
*place P27 glimmer_pitch
*present toby okoro familiar
Saturday morning is bright and blowy and blue, the kind of September day that feels like the last day of summer and knows it. The Glimmer Pitch is noisy with trials: brooms whizzing, whistles, Coach Okoro standing on the water shouting encouragement, the lantern-hoops at each end swinging in the wind, and the stands full of people with flasks.
*if glimmer
  You try out for {@house = "larkspire"|Larkspire|}{@house = "owlcombe"|Owlcombe|}{@house = "heronmere"|Heronmere|}{@house = "rookhallow"|Rookhallow|}. It's the most fun you've ever had while being terrified. You throw the Glim, a ball of warm white light the size of a grapefruit that pulls in your hand like a live thing, through a lantern-hoop from forty feet, and the hoop flares your house's colour, and a noise comes out of you that you didn't know you could make.
  *if (flame >= 40) or (nerve >= 40)
    @okoro:amused "Reserve Chaser!" shouts Coach Okoro, at the end, pointing at you from the middle of the Mere. "You! Reserve! Training's Tuesdays and Thursdays, don't be late, don't fall in!"
    *points +5
  *else
    @okoro:amused "Not this year!" shouts Coach Okoro, not unkindly. "Not bad, though! Keep flying! Try again at Christmas!"
*else
  You watch from the stands, with a flask of tea and a blanket and Toby, and shout for your house, and for everyone else's, and for Toby's friend Jonty, who tries out for Heronmere as a Keeper and simply sits in front of the hoop, enormous and calm, like a wardrobe on a broom, and nothing gets past him.

@toby:neutral At half past eleven, Toby sits down next to you on the bench with two bacon rolls from the kitchens, and gives you one, and looks at you sideways.

@toby:tense "You were out on Thursday night," he says. "I heard you go. And you went to the Headmistress's tower yesterday, everyone saw, Mina had it on the Wireless last night, [i]mystery first-year summoned to the Weathervane Room[/i], she didn't say your name but she did a sound effect." He fiddles with his roll. "You don't have to tell me. I just want to know if you're all right."

You look at him. Toby Quill, who fell on you on Lamplight Row, and sits next to you in every lesson, and has a small orange flame like an oven light that you could see through his cardigan if you let yourself.

[i]Be careful whom you give it to. Once it's said, it can't be unsaid.[/i]
*choice
  #Tell Toby. All of it. He's your best friend, and he asked because he cares.
    *set told_toby true
    *set fr_toby 3
    *set heart +5
    You tell him. The flames through the walls, and the great glow under the castle, and the lantern on the stair, and the Weathervane Room, and the word.

    @toby:scared He listens with his bacon roll forgotten, and his mouth open, and when you've finished he's quiet for so long you start to worry. Then he says, "Can you see mine?"

    "Yes."

    @toby:warm "What's it like?"

    "Like the light in an oven door," you say. "When something's baking."

    @toby:laugh Toby Quill laughs out loud, and then he cries a bit, and then he hugs you so hard you drop your roll. "I won't tell anyone," he says into your shoulder. "Not ever. Not even Priya. [i]Especially[/i] not Priya, I can't talk to Priya about anything, I'd just say [i]oven[/i] at her." He lets go. "Thank you for telling me. I'm going to be really good at keeping it. You'll see."
  #Tell Toby you're fine, and that you'll tell him one day. Not yet.
    *set fr_toby +1
    *set wit +5
    "I'm fine," you say. "I promise. It's something about my flame. The Headmistress is helping. I'll tell you properly one day, when I understand it myself."

    @toby:warm He looks at you for a long moment, and then nods, and bumps his shoulder against yours. "Okay," he says. "One day. I'll hold you to it." And he eats his roll, and doesn't ask again, and you love him a little bit for it.
  *if (st_rowan >= 2) or (st_imogen >= 2) or (st_saoirse >= 2) or (st_noor >= 2) or (st_cas >= 2)
    #Tell Toby you're fine. Then go and find someone else. You know who you want to tell.
      *set fr_toby +1
      "I'm fine," you tell Toby. "Honestly. I'll explain one day." He nods, and doesn't push. But when he's gone back to the Heronmere end of the stand, you get up, because there's someone you want to tell, and you know exactly who.
      *choice
        *if st_rowan >= 2
          #Rowan. He knows what it's like to have something inside you that frightens you.
            *present toby okoro familiar rowan
            *set told_rowan true
            *set st_rowan +1
            You find him on the shingle below the stands, sitting on an upturned boat, and you sit next to him and tell him, all of it, low, while the brooms go past overhead.

            @rowan:warm He listens without saying anything. When you've finished, he looks at his own big hands. "That's what you did," he says. "In Warding. With your hand on my arm." He breathes out. "You saw it. What's in me."

            "It's a bonfire," you say. "It's too big for you. It's frightened."

            @rowan:hurt He doesn't say anything for a long time. Then he says, very quietly, "Yeah. That's about right." And then: "I won't tell a soul. You've got my word." You believe him completely.
        *if st_imogen >= 2
          #Imogen. She'll want to understand it, not just be amazed by it.
            *present toby okoro familiar imogen
            *set told_imogen true
            *set st_imogen +1
            You find her in the Owlcombe stand with the regulations on her knee, and tell her, low. She doesn't interrupt once.

            @imogen:attentive When you've finished, she sits very still. "A Kindler," she says. "Volume nine. The locked one." Her eyes are very bright behind her glasses. "Could you see... could you see someone who'd been hollowed? Could you see if there was anything left?"

            It's a strange question. You don't know why she's asking it. "I don't know," you say. "Why?"

            @imogen:guarded "No reason," says Imogen Sallow, too quickly. And then: "I won't tell anyone. I'm very good at not telling people things." She closes the regulations. "Thank you for trusting me. I'm not used to it."
        *if st_saoirse >= 2
          #Saoirse. She'll laugh, and that's exactly what you need.
            *present toby okoro familiar saoirse
            *set told_saoirse true
            *set st_saoirse +1
            You find her upside down on a broom under the stands, tightening something, and tell her, and she's so surprised she falls off.

            @saoirse:laugh "You can see [i]inside people[/i]," she says, from the shingle, delighted. "That's the best thing I've ever heard. That's better than my beetle. What's mine like? No, don't tell me. Yes, tell me."

            "Like sparks off a grinder."

            @saoirse:warm "[i]Brilliant,[/i]" breathes Saoirse, and then, sitting up, serious for once: "I won't tell. Cross my heart. You can trust me with the important stuff. It's only the rules I'm bad with."
        *if st_noor >= 2
          #Noor. She'll know what to do with something frightening.
            *present toby okoro familiar noor
            *set told_noor true
            *set st_noor +1
            You find her in the Heronmere stand, not watching the trials, reading a book on anatomy that looks older than the castle. You tell her, low.

            @noor:neutral She listens the way she listens to patients: completely still, completely calm. When you've finished, she says, "Does it hurt? When you relight something?"

            Nobody's asked you that. Not even the Headmistress. "My arm aches," you say. "And I'm cold."

            @noor:tired "Then you tell me," says Noor Haddad, "every time you do it. Every single time. So somebody's keeping count." She closes her book. "I won't tell anyone else. But I'll be keeping count."
        *if st_cas >= 2
          #Cas. You don't know why. Maybe because he'd understand being different in a family that isn't.
            *present toby okoro familiar cas
            *set told_cas true
            *set st_cas +1
            You find him alone, as always, at the end of the {@cas_house = "owlcombe"|Owlcombe|Rookhallow} stand, and you sit down next to him, and he looks at you as if you're a wasp. You tell him anyway.

            @cas:guarded He listens with his face perfectly blank. When you've finished, he says, "Why on earth would you tell [i]me[/i]?"

            "I don't know."

            @cas:hurt He looks out at the pitch for a long time. "My family has an old story," he says, at last. "About Kindlers. My grandmother told it to me when I was small. It doesn't end well." He stands up, abruptly. "I won't tell anyone. Obviously. Who would I tell?" But he looks back at you, from the steps, with something in his face you haven't seen there before, and it looks a lot like fear. For you.
  #Tell nobody. Not even Toby. It's yours, and the Headmistress said precious things get taken.
    *set wit +5
    *set nerve +5
    "I'm fine," you say. "Honestly, Toby. Just flame stuff. The Headmistress sorted it."

    @toby:neutral He looks at you for a moment longer than he needs to. Then he nods, and eats his roll. He doesn't ask again. But you notice he doesn't quite believe you, and that he's too kind to say so.

Down on the Mere, somebody throws the Glim through a hoop, and the hoop flares gold, and the stands roar. The sun's out. It's a beautiful day.

You sit in the stand with the flame-sight just behind your eyes, where you can feel it waiting, and you look at the whole bright noisy crowd, a thousand people and a thousand little lights, and you think about a lantern on a stair going out with nobody near it, and a humming in the walls that moved from light to light like a finger along a line.
*journal [b]Chapter 5.[/b] In Hearth, you saw Toby's flame with your eyes shut. That night, out after curfew, you saw every flame in the castle through the walls, and something vast and bright deep under the castle. A humming in the walls put out a lantern on the main stair, and you relit it with your bare hand. Idris Penhallow saw. The Headmistress told you what you are: a [b]Kindler[/b], like Hester Wren. The last one, she said, lost his flame forty years ago. Tell no one. {@told_toby|You told Toby.|}{@told_rowan|You told Rowan.|}{@told_imogen|You told Imogen.|}{@told_saoirse|You told Saoirse.|}{@told_noor|You told Noor.|}{@told_cas|You told Cas.|} Mr Tully gave you a detention.
*page_break
*goto_scene ch06
`);
