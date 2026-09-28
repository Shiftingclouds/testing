NB.scene("ch04", String.raw`
*mood day
*set ch 4
*chapter 4 First Lessons
*comment ---------------------------------------------------------------- CH04.WORD.01
*sid CH04.WORD.01
*date 2026-09-14 09:00
*place P18 classroom
*present moth toby familiar
The Wordcraft Gallery is a long room on the second floor with windows down one side full of Mere and sky, and forty-odd desks carved with four hundred years of initials, and a blackboard that writes on itself when nobody's looking. When you arrive on Monday morning, it's written [i]WELCOME, LATECOMERS[/i] in large friendly chalk, and underneath, smaller, [i]please don't set fire to me, I've only just been painted[/i].

There's a stack of books at the front of the room. On top of the books is Professor Moth.
*meet moth
@moth:amused He's the smallest grown man you've ever seen: about the height of a nine-year-old, round and pink, with enormous white eyebrows like two cats asleep on his forehead, round spectacles that make his eyes huge, and a fluffy white beard with chalk in it. His robes are lavender and dusty. He's standing on the books so he can see over the desk, and he's bouncing very slightly on his toes, the way a child bounces on Christmas morning. "Good morning, good [i]morning[/i]!" he squeaks. "Oh, look at you all. Look at you! Forty-three of you. Forty-three brand-new flames. Sit, sit, sit."

You sit. {fam_name} settles {@(familiar = "owl") or (familiar = "raven")|on the back of your chair|under your desk}. Toby sits next to you, as he now does everywhere, as if you're a lifeboat.

@moth:neutral "Wordcraft," says Professor Moth, "is the oldest craft of all. Before there were wands, there were words. Before there were words, I suppose, there was pointing and shouting, but we don't talk about that." He beams. "The words are very old. Older than the languages you speak. They're not Latin. People always think they're Latin. They're [i]older[/i] than Latin, and much ruder. Every word does one thing. You say it with your flame behind it, through your wand, and the world, if you've said it properly, does the thing." He holds up a candle. "Today's word is [i]lume[/i]. It lights things. Say it with me. [i]Lume.[/i]"

Forty-three grown adults say [i]lume[/i] in the tone of people who've been asked to say [i]cheese[/i].

@moth:amused "Oh, [i]terrible[/i]," says Professor Moth happily. "Again. Mean it this time. You're not asking the candle. You're reminding it."

There's a candle on every desk. You spend twenty minutes failing to light it. Everyone does. The woman in front of you makes hers go briefly cold. The man with the lanyard, whose name turns out to be Kwame and who was an accountant until August, makes his wick grow two inches. Toby makes his melt into a puddle and then, in a panic, makes the puddle smell of vanilla.

You say it. [i]Lume.[/i] Nothing. [i]Lume.[/i] Nothing. You think about Professor Moth saying [i]you're not asking[/i], and you think about the candles on Nana's birthday cake, leaning towards you, and the ones in Pellow's shop, and you point your wand and say [i]lume[/i] as if you're telling an old friend something they already know.

Your candle lights.

So does Toby's. So does the one in front of you, and the one behind, and every candle on every desk in the Gallery, all forty-three of them at once, and the two on Professor Moth's desk, and a candle-end in a drawer somewhere that sets a stack of blotting paper smouldering, and the candles in the chandelier, which nobody's lit since 1974 and which are now burning merrily above everyone's heads.

There's a silence.

@moth:amused Professor Moth has gone very still on top of his books. Then he makes a noise like a kettle coming to the boil, a high, delighted, rising squeak, and claps both his small hands together. "Oh!" he says. "Oh, [i]splendid![/i] Oh, that's the most splendid thing I've seen in [i]years![/i] Ten points to {@house = "larkspire"|Larkspire|}{@house = "owlcombe"|Owlcombe|}{@house = "heronmere"|Heronmere|}{@house = "rookhallow"|Rookhallow|}! Ten! Somebody put out the blotting paper."
*points +10
*set flame +5
@toby:amused "Show-off," says Toby, under his breath, delighted, and puts out the blotting paper with his ink pot.
*page_break
*comment ---------------------------------------------------------------- CH04.BREW.01
*sid CH04.BREW.01
*date 2026-09-15 10:00
*place P19 brewing_cellars
*present kovac imogen cas toby familiar
*meet kovac
Brewing is in the cellars, which are exactly what you'd expect: low stone vaults, blue flames under black cauldrons, shelves of jars with things floating in them that you decide not to look at closely, and a smell like a chemist's shop that's been struck by lightning.

@kovac:neutral Professor Kovač is thin and pale and very still, with sharp cheekbones and a single white streak in her black hair, pinned back so tightly it looks painful, and grey eyes that don't blink enough. She waits at the front of the cellar until the last of you has stopped talking, which takes a while, and then a while longer, because she doesn't ask anyone to stop. She just waits. It's the most frightening thing you've ever seen a teacher do.

@kovac:neutral "Stillwater tonic," she says, when it's silent. "You will take it weekly until June. It steadies a late flame. It will not make you safe. It will make you less likely to explode. Instructions are on the board. I will not say them again." She doesn't. "Partners."

She doesn't say anything else. People start looking round for partners in the panicked way people do at weddings when the band says [i]and now a slow one[/i].

@imogen:neutral Imogen has already come to stand at your cauldron, with her sleeves rolled up and her handbook in her pocket, and the air of a woman who has read the instructions twice on the way down the stairs.

@cas:neutral Casimir Drummond is standing alone by the far wall with his arms folded, because nobody has come to stand at his.

@toby:tense And Toby's looking at you with the expression of a man in a lifeboat who's just seen the lifeboat getting further away.
*choice
  #Partner with Imogen. She's clearly going to get it right.
    *set wit +5
    *if st_imogen >= 2
      *set b_imogen_study true
      *set st_imogen 3
    *else
      *set st_imogen +1
    You do the Stillwater tonic with Imogen, and it's like working with a very sharp, very fast, very quiet machine. She reads, you measure. She stirs, you count. Seven times widdershins, a heron feather, three silver leaves, river water at exactly the heat where it starts to sing. You're the only pair in the cellar whose tonic goes the colour it's supposed to: a pale clear blue, like a winter sky.

    @imogen:warm "You're good at this," she says, sounding surprised, and then, quickly: "I mean it as a compliment. I don't give many. People always want to [i]compete[/i]. You just... keep up."

    @kovac:attentive Professor Kovač comes past, and looks into your cauldron for a long time, and says nothing. Then she makes a tiny mark in a black book. Imogen looks as if she's been knighted.
    *points +5
  #Go and stand at Casimir Drummond's cauldron. Somebody has to.
    *set heart +5
    *if b_cas_spar
      *set st_cas 3
    *else
      *set b_cas_spar true
      *set st_cas 2
    @cas:guarded He looks at you as if you're a bill he wasn't expecting. "I don't need charity."

    "Good," you say. "I don't do charity. You do the silver leaves, I'll count."

    @cas:tense For a moment you think he's going to walk out. Then he rolls up his sleeves, precisely, and does the silver leaves. He's brilliant at it, it turns out; his hands are quick and certain, and he knows things about river water that aren't on the board. He doesn't say a word the whole lesson. But when your tonic goes a clear pale blue, and Professor Kovač makes a small mark in her black book, he lets out a breath you don't think he knew he was holding.

    @cas:amused "Adequate," he says, not looking at you. And then, even more quietly: "Thank you."
  #Partner Toby. He's going to set the cellar on fire otherwise.
    *set fr_toby +1
    *set heart +5
    @toby:warm You go and stand at Toby's cauldron, and Toby nearly cries with relief, and then, to everyone's astonishment including his own, the two of you make an excellent Stillwater tonic. It turns out that brewing is a lot like baking: you measure, you watch the heat, you know by the smell when it's turning. Toby knows by the smell. He knows before the board does.

    @toby:laugh "It's just custard," he whispers, stirring widdershins, eyes shining. "It's just very magic custard. I can [i]do[/i] custard."

    @kovac:attentive Professor Kovač looks into your cauldron, and at Toby, for a long time, and then makes a mark in her black book. Toby floats out of the cellar at the end of the lesson as if he's been given a medal.
    *points +5
*page_break
*comment ---------------------------------------------------------------- CH04.TURN.01
*sid CH04.TURN.01
*date 2026-09-16 11:00
*place P18 classroom
*present bassani saoirse rowan familiar
@bassani:amused "Turning!" cries Professor Bassani, throwing open his arms, in the same Gallery the next morning with the chandelier still lit. "[i]Turning![/i] The hardest subject! The noblest subject! The subject in which you will fail, and fail, and fail, and fail, and then one day, [i]one glorious day[/i], you will turn a button into a beetle, and it will be the proudest moment of your life, the proudest moment of your life!"

He says everything twice. You'd been warned. You hadn't been warned how much you'd enjoy it.

The word is [i]wende[/i]: to turn. The button in front of you is plain and brown and very much a button. After an hour, yours has grown six small legs and is walking in circles, still, somehow, a button, which Professor Bassani describes as [i]promising, promising[/i]. Rowan's is smoking slightly. He's frowning at it as if it's a building he's been asked to go into.

@saoirse:laugh Saoirse's button turns into a beetle on the first try. Not a beetle, exactly. A little brass beetle, with cogs visible through its wing-cases, and a tiny key in its back that turns by itself as it walks, and when it gets to the edge of the desk it opens its wings with a whirr and flies off round the Gallery, ticking.

@bassani:amused There's a stunned silence. Professor Bassani watches the brass beetle circle the chandelier. "Magnificent," he says, at last, faintly. "Magnificent. Also completely against the rules of Turning. Completely against the rules! Five points to Rookhallow, and you will stay behind and explain to me how you did it, how you did it."
*points rookhallow +5
@saoirse:amused "Honestly, sir," says Saoirse, "I just thought about what a beetle [i]should[/i] be."
*page_break
*comment ---------------------------------------------------------------- CH04.FLIGHT.01
*sid CH04.FLIGHT.01
*date 2026-09-16 15:00
*place P27 glimmer_pitch
*present okoro toby saoirse rowan cas familiar
*meet okoro
@okoro:amused Coach Okoro has a whistle in his teeth, a shaved head, a grin like a lighthouse, and a flight jacket covered in patches from teams you've never heard of, and he's standing on the water. Not on a boat. On the actual shallows of the Mere, at the south end of the island, where the Glimmer Pitch floats: tall timber stands on stilts, house banners snapping, and three great hoops of lanterns hanging in the air at each end. "Brooms up!" he shouts, without taking the whistle out. "Brooms up, first-years! This is the fun one!"

The school brooms are old, and have names burned into their handles: [i]Nancy[/i], [i]Old Tom[/i], [i]Persistence[/i], [i]DO NOT[/i]. Yours is called [i]Sparrow[/i] and has a kink in the middle. You stand beside it, on the shingle, like everyone else, and hold your hand out, and say [i]up[/i], feeling ridiculous.

It comes up into your hand like a dog that's been waiting for its walk.

Flying is... you don't have a word for it. It's like the first time you rode a bike downhill without brakes. It's like being nine. You hover six feet over the water with your heart in your mouth and the whole Mere spread out below you, glittering, and the castle behind you, and Coach Okoro shouting [i]lean, LEAN, you're not a sack of potatoes[/i], and you lean, and [i]Sparrow[/i] goes, and you laugh out loud.

@rowan:laugh Rowan flies like he's done it all his life, big and steady and easy. Saoirse flies like a lunatic, upside down half the time. Casimir Drummond flies beautifully, of course, low and fast and elegant, with his robes streaming, and doesn't look at anyone.

@toby:scared And Toby Quill can't stay up.

He tries. He goes up, and wobbles, and tilts, and slides off [i]Persistence[/i] sideways into the shallows with a splash. And again. And again. The fourth time, he comes up spluttering with weed on his head, and the broom floating away, and a few people laugh, the way people do.

@cas:amused Casimir Drummond, passing overhead, laughs louder than the rest. "It's not [i]baking[/i], Quill," he calls down. "You can't make it rise by staring at it."

@saoirse:tense Saoirse's already landed on the shingle next to Toby's broom, frowning at it. "It's not him," she says to you, as you come down beside her. "It's the broom. Look at it. It's warped. Bristles are all one side. It'd tip anyone." She pulls a bootlace out of her pocket and a spoon out of the other one, because of course she has a spoon. "If we lash a keel on it here, like on a boat..."
*choice
  #Help Saoirse rig Toby's broom with the bootlace and the spoon.
    *set wit +5
    *if st_saoirse >= 2
      *set b_saoirse_build true
      *set st_saoirse 3
    *else
      *set st_saoirse +1
    You kneel on the shingle and hold the broom steady while Saoirse lashes the spoon under the handle as a keel, and you think of something: [i]stille[/i], the word you saw in the back of the Wordcraft book, the one that steadies things. You say it into the bristles. The broom shivers, and straightens, and hums.

    @saoirse:laugh "You beauty," says Saoirse, to you or the broom, it's not clear. "Toby! Get on!"

    @toby:warm Toby gets on. He goes up six feet and stays there, wobbling, astonished, and then, very slowly, he flies a whole circle of the shallows without falling off. The people who laughed stop. Somebody claps. Toby comes down with tears and Mere water running down his face together, and hugs you both, soaking wet.

    @saoirse:warm "We make a good team," says Saoirse, grinning at you over his head, and it's the second time she's said it, and she sounds like she means it more.
    *points +5
  #Fly after Casimir Drummond and tell him exactly what you think of that.
    *set nerve +10
    You kick [i]Sparrow[/i] up and go after him, and it turns out that when you're angry, [i]Sparrow[/i] is fast. You come up level with him over the middle of the pitch.

    "He's trying," you say. "That's more than you were doing on the train."

    @cas:tense He looks at you, sideways, wind whipping his pale hair. For a second you think he's going to sneer. Then he looks down at Toby, climbing out of the water again, and something in his face goes tight. "My grandmother," he says, "didn't let me touch a broom until I'd kindled. Twenty-seven years." And he banks away, fast, before you can answer, and doesn't laugh at anyone again all lesson.
    *set st_cas +1
  #Go and fetch Toby's broom out of the water, and fly beside him low over the shallows till he gets it.
    *set heart +10
    *set fr_toby +1
    You wade in and fetch [i]Persistence[/i], and give it back to him, and fly beside him low over the shallows, a foot from the water, so that when he falls he just gets his feet wet. He falls six more times. The seventh time, he doesn't. By the end of the lesson he can go the length of the pitch, very slowly, with his tongue sticking out.

    @toby:warm "Nobody's ever been that patient with me," he says, afterwards, wringing out his cardigan. "Not even Mr Pargeter, and he gave me my job back three times."
@okoro:amused "Not bad, first-years!" roars Coach Okoro, blowing his whistle, standing on the water. "Not bad at all! Trials for house teams are Saturday week! Anybody who didn't fall in, come and see me!" He pauses. "Anybody who did fall in, also come and see me, because you'll have learned more."
*page_break
*comment ---------------------------------------------------------------- CH04.WARDING.01
*sid CH04.WARDING.01
*date 2026-09-17 14:00
*place P23 warding_hall
*present grey rowan toby familiar
*meet grey
The Warding Hall is a stone barn of a room in the west wing, scorched black up to the rafters by four hundred years of practice spells. There are circles cut into the floor, and shields on the walls, some of them dented. It's cold. It smells of old smoke.

@grey:neutral Professor Grey is standing in the middle of it when you come in, and he doesn't move or speak until every one of you is standing in a circle round him. He's big and heavy, with a craggy face and a broken nose and grey stubble, and eyes of a tired pale blue. His hands are scarred, both of them, from the fingertips to the wrists, shiny and puckered, as if he once held them in a fire for a long time. He's wearing plain charcoal robes with no house colours at all.

@grey:grave "Warding," he says. His voice is low and rough and very quiet. You have to lean in. "Shields. Counters. How to not die." He looks round the circle, at every face. "Some of you met the Choir on the Row. Hands up."

Hands go up. Yours. Toby's. Rowan's. A few others.

@grey:grave He nods. "Good. Then you know what it feels like. Some of you don't. You need to." And before anybody can ask what he means, he closes his mouth and hums.

It's the note. The same note. Low and long and lonely, from somewhere under his breastbone, and it comes up through the stone floor like cold water, and every lamp in the Warding Hall leans away from him, all at once, flat in their glasses, and the warm thing behind your breastbone grabs hold of itself and [i]pulls[/i] against it, hard...

He stops after two seconds. It feels like two minutes. Somebody's crying. Toby's grabbed your sleeve.

@grey:grave "That," says Professor Grey, very quietly, "is the Quiet Art. When you hear it, you don't fight, you don't argue, you don't try a spell you read about. You run. You shout. You don't stop running and shouting till you reach a lit room full of people. Understand?"

Nobody answers. He doesn't seem to need them to. But you're looking at the lamps, which are slowly straightening, and you're thinking: [i]how does a teacher know how to do that so well?[/i]

And then the thing in your chest, which has been pulling against the hum, doesn't stop when the hum stops. It keeps going. It rebounds, like a spring let go, up and out, and every lamp in the Warding Hall, still leaning away from Grey, whips upright and flares white. Blinding white. So bright people shout. So bright you see the bones of your own hand against it.

And beside you, Rowan Ashby's heat breaks loose.

It rolls off him in a wave you feel on your face like an opened oven, and the practice dummy in front of him goes black and starts to smoke, and his robes are steaming, and he's standing rigid with his hands out from his sides and his eyes shut, and the shimmer round him isn't a shimmer now, it's a haze you can hardly see him through. People are backing away. {fam_name} makes a frightened sound.

@rowan:flare "Get back," he's saying, through his teeth. "Get back, get back, get back, I can't..."
*choice
  #Don't get back. Put your hand on his arm, and think [i]steady[/i], as hard as you can.
    *set kindling +5
    *set nerve +5
    *if st_rowan >= 2
      *set b_rowan_heat true
      *set st_rowan 3
    *else
      *set st_rowan +1
    You don't think. You put your hand on his forearm, bare where his sleeve's pushed up. It's hot as a kettle. It should burn. It doesn't.

    You think [i]steady[/i]. You don't know why. You think it at him the way you'd think it at a horse, or a child, or yourself on a bad night: [i]steady, steady, it's all right, steady[/i]. And for a second, under your hand, you feel something that isn't skin. It's like holding a candle flame in your fingers without it burning: something bright and huge and frightened, thrashing, inside him. It feels your hand. It goes still.

    The heat drops like a stone. The haze clears. Rowan opens his eyes and looks down at your hand on his arm, and then at you, with his face grey under the freckles.

    @rowan:warm "What did you do?" he says, hoarsely.

    "Nothing," you say, and you have no idea if it's true.
  #Get everyone else back. Clear the space round him so he isn't frightened of hurting anyone.
    *set heart +10
    *set st_rowan +1
    You turn your back on him and spread your arms and walk everyone else back, Toby and the woman in scrubs and Kwame the accountant, until there's a clear ring of stone round him. "He's fine," you say, loudly, not knowing if it's true. "Give him room. He's fine."

    @rowan:tense It helps. You can see it help: with nobody near enough to burn, the thing in him stops thrashing, and the heat drops, slowly, slowly, until he's standing in a ring of scorched floor in steaming robes, breathing hard, and it's over.
  #Say [i]hald[/i], the shield word from the board, and put a shield between him and Toby.
    *set flame +10
    You point your wand at the space between Rowan and Toby and say [i]hald[/i], the word from the board, the one you read ten minutes ago, and something bright and hard as glass jumps out of the end of your wand and stands in the air between them. The heat hits it and rolls off it like water off a window.

    @grey:attentive Across the circle, Professor Grey has turned his head to look at you.

@grey:neutral Professor Grey waits until it's over. Then he walks across the scorched floor to Rowan and puts one of his ruined hands on his shoulder, very briefly, and says something to him too low for anyone else to hear, and Rowan nods, and nods again.

@grey:grave Then he turns and looks at you, for a long moment, with those tired pale eyes, and you can't tell at all what he's thinking.

@grey:neutral "Infirmary," he says. "You're grey. Go." And then, even quieter, as you pass him: "Whatever that was. Keep it close."
*page_break
*comment ---------------------------------------------------------------- CH04.INFIRMARY.01
*sid CH04.INFIRMARY.01
*date 2026-09-17 16:00
*place P24 infirmary
*present holloway noor familiar
*meet holloway
The Infirmary is a long white room with iron beds in rows, screens on wheels, a fire at one end and a desk at the other, and bottles on every shelf that glow faintly, like jars of fireflies.

@holloway:neutral "Flame-surge," says Matron Holloway, before you've even sat down. She's broad and brisk and square, with apple cheeks and a starched white cap and small shrewd eyes that go over you like a checklist. "Grey round the mouth, shaky hands, headache behind the eyes. Sit. Drink this. Don't argue. Everybody argues."

You drink it. It tastes of burnt sugar and ice, and the headache you didn't know you had goes away. You lie back on the bed and close your eyes.

@noor:neutral "Pupils?" says a calm voice, and a small torch shines briefly in each of your eyes, and when you open them it's Noor, the nurse from the feast, in sea-green robes with the sleeves rolled up and an apron over them. Her watch is still pinned upside down on her chest. She's taking your pulse with two fingers, looking at the watch. "Fine. You're fine. Bit fast."

"You work here?"

@noor:amused "No," says Noor. "I'm a first-year. Same as you." She lets go of your wrist. "I just came up to see if Matron needed a hand, on Monday, and she did, and I came back on Tuesday, and..." She shrugs. "It's where I know what I'm doing."

@holloway:neutral "She's been here every afternoon this week," says Matron, from her desk, not looking up, in a voice that could mean anything. "Without being asked. Nobody asked her. I've told her to go and have a life."

@noor:tired Noor doesn't say anything to that. She just starts rolling bandages, very fast, very neatly, the way people roll bandages when they've rolled ten thousand.
*choice
  #"Have you eaten today?"
    *set heart +5
    *if st_noor >= 2
      *set st_noor 3
    *else
      *set b_noor_sit true
      *set st_noor 2
    @noor:tense Her hands stop. She looks at you. "What?"

    "Have you eaten today? You didn't at the feast. You were cutting your chicken into smaller and smaller bits."

    @noor:amused For a moment she looks as if she's going to tell you off for noticing. Then something gives, just slightly, at the corner of her mouth. "No," she says. "I haven't. I forget. On shift you eat a biscuit standing up at four in the morning and that's your day."

    "You're not on shift."

    @noor:warm "Apparently not." She puts the bandages down. "If I go and get toast, will you stay lying down?"

    "If you bring me some."

    @noor:warm She laughs, properly, a short surprised laugh, and goes to get toast. Matron, at her desk, gives you a very small nod.
  #"Tell me how you kindled. You said you stopped a bleed with your hands."
    *set wit +5
    *set st_noor +1
    @noor:neutral She rolls three bandages before she answers. "Friday night in May," she says. "A lad came in on a trolley with a knife wound under his arm, and it was arterial, and we couldn't get a clamp on it, and he was going. I put my hands on it. I don't know why. Just pressure. And it stopped." She looks at her hands. "Not slowed. Stopped. Like I'd told it to. And I felt it go out of me, into him, and the whole resus bay smelled like cut grass." She puts the bandage down. "He lived. I went home and I couldn't stop shaking. I haven't been back."

    "Do you miss it?"

    @noor:tired "Every minute," says Noor Haddad. "That's the problem."
  #Close your eyes and let her do her job. She looks like she needs to.
    *set nerve +5
    *set st_noor +1
    You close your eyes and let her fuss: pulse, temperature, a cool cloth on your forehead, a blanket. You can hear, in her hands, how much better it makes her feel to have someone to look after. You lie there and let her, and it's quite nice, actually.

    @noor:warm "Thank you," she says, very quietly, after a while, when she thinks you're asleep. "For being ill. It's been a long week."
*page_break
*comment ---------------------------------------------------------------- CH04.FRIDAY.01
*sid CH04.FRIDAY.01
*date 2026-09-18 20:00
*place P13 lantern_hall
*present toby priya rowan imogen saoirse cas noor marcus familiar
By Friday night, you've been at Wrenfold one week, and you've stopped getting lost on the stairs, mostly, and started getting lost on purpose.

The Lantern Hall after dinner on a Friday is the best room in the world. The tables have been cleared, and people have pulled benches into clumps and stayed. Somebody's playing cards. Somebody's doing homework. Somebody's familiar, a peacock, is stalking up and down the Owlcombe table being rude to people. The lanterns drift low and warm, humming, and every so often one comes down to hover over someone's shoulder, like a reading lamp that wants to see what they're doing.

High over the High Table hang the four House Lanterns: huge paper globes, one in each house's colours, and they burn brighter or dimmer according to the points. Under each, in floating gold numbers that look like writing on the air, is the week's total. {@house = "larkspire"|Larkspire's lantern is|}{@house = "owlcombe"|Owlcombe's lantern is|}{@house = "heronmere"|Heronmere's lantern is|}{@house = "rookhallow"|Rookhallow's lantern is|} burning a little brighter than it did on Monday. You're fairly sure a candle-end in a drawer in the Wordcraft Gallery had something to do with it.

*meet marcus
@marcus:amused "Trials, Saturday week!" booms Marcus Oduya, standing on the Larkspire bench with a sheaf of paper. "House Glimmer teams! Every house, every position! If you can stay on a broom and throw a ball, sign up! If you can't, sign up anyway, we need people to fall on!"
*choice
  #Sign up for Glimmer trials. You liked flying more than anything this week.
    *set glimmer true
    *set nerve +5
    You sign up. Your name goes on the list in gold ink under your house's banner, and glows there, and you feel, for a second, nine years old and completely unafraid.
  #Don't sign up. You'd rather watch, with a flask of tea, from the stands.
    *set heart +5
    You don't sign up. Some people are meant to fly and some people are meant to sit in the stands with a flask and shout. You know which you are, and it's a noble calling.

You write to Nana Pearl that night, on a sheet of thick cream paper from the Owlcombe stationery drawer that Imogen swears is free, with a pen that corrects your spelling as you go.

You tell her about the train, and the Mere, and the lanterns, and the singing pudding, and {fam_name}. You tell her about Toby, who falls off things, and Rowan, who walked out of a fire, and Saoirse, and Imogen, and a nurse called Noor who forgets to eat. You tell her you lit forty-three candles and a chandelier by accident, and got ten points for it. You don't tell her about three grey hoods in an alley, or a hum that took hold of the thing in your chest and pulled, or a teacher with scarred hands who could hum it too.

You give it to {fam_name}, who looks at it with enormous disdain, and then, to your astonishment, takes it{@(familiar = "owl") or (familiar = "raven")| in its beak and goes out of the Hall's great round window into the dark, towards Wrexley|, and disappears with it round the corner of the Hall, and comes back five minutes later without it, looking extremely pleased with itself}. Mr Tick did say they'd find anyone anywhere.

@toby:warm Toby, at your elbow, has been quiet for a while. He's been watching the Heronmere table, where a tall young woman with a high glossy ponytail and a violin case beside her is laughing at something, with her head thrown back.

@toby:warm "That's Priya," he says, in the voice of a man describing the northern lights. "Priya Menon. Heronmere. She plays violin for the Hall on Sundays. She was a session musician, she's played on [i]records[/i]. She lent me a pencil in Herbwork on Wednesday." A pause. "I still have the pencil."
*meet priya
@priya:warm And then, as if she heard her name, Priya Menon looks up across the Hall, straight at Toby, and smiles, and waves. Just a small wave. Friendly.

@toby:scared Toby goes the colour of a Larkspire banner and slides very slowly down the bench until only his eyes are above the table.

"She waved at you."

@toby:scared "She waved at the general area," says Toby, from under the table. "People wave at the general area."

@toby:laugh But he's smiling. He's smiling so hard it looks like it hurts. And above you, as if they know, the lanterns turn a little warmer.
*journal [b]Chapter 4.[/b] First week of lessons. You lit every candle in the Wordcraft Gallery at once, and Professor Moth squeaked. Professor Kovač says nothing twice. Professor Grey, whose hands are scarred, hummed the Choir's note to teach it; your flame surged back so hard every lamp in the Warding Hall flared white, and Rowan's heat broke loose. Noor Haddad volunteers in the Infirmary every afternoon, and forgets to eat. Toby is in love with Priya Menon, who plays the violin.
*page_break
*goto_scene ch05
`);
