NB.scene("ch01", String.raw`
*mood night
*set ch 1
*chapter 1 The Letter
*comment ---------------------------------------------------------------- CH01.KITCHEN.01
*sid CH01.KITCHEN.01
*date 2026-09-10 23:59
*place P01 home_kitchen
The letter is heavier than paper has any right to be.

You're standing in your own kitchen at one minute to midnight with it open in both hands, and the wall where the calendar used to hang is humming. Not buzzing, the way the fridge buzzes, or ticking, the way the pipes tick when the heating remembers it exists. Humming, low and warm, like a choir holding one long note in the next room.

It's a small kitchen. You've always known that, but you know it better now, with something so large happening in it. There's the lino that curls up by the back door, and the table with one short leg that you've wedged with a folded beer mat, and the window over the sink that looks out on the backs of the houses on Viaduct Street and, above them, the viaduct itself, black against a sky the colour of a bruise. A train goes over while you stand there, the last one to Kingsmere, a lit caterpillar of windows with nobody in them. The glasses on the draining board chime against each other as it passes, the way they always do. It's the most ordinary sound in the world. It doesn't help at all.

There's a line of gold drawn in the wallpaper. It goes up from the skirting board, round in a tall curve at the top, and down again, exactly the shape of a door, as if someone had traced one with a pen made of sunlight. Inside the line, where the faded flowers of the wallpaper ought to be, there's a street.

You've looked three times now. It hasn't stopped being true.

Crooked houses lean towards each other over wet cobbles. Lamps hang from brackets on every wall, in colours lamps don't come in: rose, and sea-green, and a blue so deep it's nearly violet. An owl sits on a gutter, eating something you'd rather not see. Somebody on that street is making toffee. You can smell it from here, over the microwave lasagne you didn't finish and the birthday card on the table with a foil balloon on the front that says [b]25[/b] in a font that's trying too hard.

It isn't a picture. That's what you keep coming back to. Pictures don't have weather. On the other side of that gold line a thin rain is falling, catching the lamplight as it comes down, and a gutter somewhere is running over with a sound like someone pouring tea, and the air that comes through, when it comes, is cold and wet and full of chimney smoke. Your own kitchen smells of lasagne and washing-up liquid. The two smells meet over the lino and don't seem to know what to make of each other.

On the counter the kettle is steaming, although you didn't switch it on. It's been doing that since March.

You look back down at the letter.

It's cream, and thick, and very slightly warm, like something that's been lying in the sun. The broken seal on the table is red wax pressed with a small fat bird, a wren, with its tail cocked up as if it's about to tell you off. The handwriting is the kind people used to learn at school with a fountain pen and a ruler. The first line says [i]Dear[/i], and then nothing: a small dash of ink where your name should be, waiting.

As you watch, the dash lifts one end, like a cat lifting its head.

It's waiting for you to tell it who you are.
*input_text name Your first name is:
The ink runs, neat and quick, and writes it for you in a hand that isn't yours: [i]Dear {name}.[/i]

It's strange, seeing it there. You've written your own name ten thousand times, on forms and birthday cards and the backs of envelopes, and it has never once looked like this: like something somebody else had been keeping for you, carefully, in a drawer.

Further down, the letter says [i]one witch or wizard in every four[/i], and the words shimmer a little under your thumb, as if they'd like to be more specific. As if they're asking.
*choice
  #[i]Witch.[/i] It's always going to be witch.
    *set mc_kind "witch"
    *set they "she"
    *set them "her"
    *set their "her"
    *set theyre "she's"
    *set look_form 0
    The shimmer settles. [i]One witch in every four[/i], it says now, as if it had always said so, and somewhere in the humming wall a note shifts, satisfied.

    Witch. You say it under your breath, to the kitchen. It sounds like a word you've been saving.
  #[i]Wizard.[/i] Obviously wizard.
    *set mc_kind "wizard"
    *set they "he"
    *set them "him"
    *set their "his"
    *set theyre "he's"
    *set look_form 1
    The shimmer settles. [i]One wizard in every four[/i], it says now, as if it had always said so, and somewhere in the humming wall a note shifts, satisfied.

    Wizard. You say it under your breath, to the kitchen, and try very hard not to picture a hat.
  #Neither word fits. [i]Mage[/i] will do.
    *set mc_kind "mage"
    *set they "they"
    *set them "them"
    *set their "their"
    *set theyre "they're"
    *set look_form 0
    The shimmer thinks about it. Then the line rearranges itself, briskly, like a clerk who's seen everything: [i]one of us in every four[/i]. In the margin, very small, in the same neat hand: [i]mage, then. Noted.[/i]

    You laugh, once, out loud, in your empty kitchen at midnight. It's the first time you've laughed all week.

Twelve hours ago you were at work, which feels like a thing that happened to somebody else.

You can still feel it on you, a little, the way you can feel the sea on your skin after a day at the beach: the tiredness in your feet, the voice you use for strangers, the particular ache between your shoulders that belongs to one job and no other.
*choice
  #On the phones at Brindle Mutual, saying [i]I completely understand your frustration[/i] to people you completely understood.
    *set job "calls"
    *set heart +10
    Brindle Mutual: home, car and pet insurance, a strip-lit floor above a carpet warehouse, forty headsets and a leaderboard. You're good at it, which is the worst part. You can hear, under the words, what someone's actually ringing about: the flood isn't the flood, it's the photographs that were in the bottom drawer. You've been making people feel better about terrible afternoons for three years, eight hours a day, at nineteen pounds a month above minimum wage. Dev sits two headsets down and keeps you alive with biscuits and terrible impressions of the callers, and on bad days he's the only reason you go in.

    Today, a man shouted at you about his conservatory for twenty minutes, and every light on the call-centre floor flickered in time with his voice, and your supervisor Glossop came out of his glass box to look up at the ceiling as if it had personally let him down.
  #On the front desk at Wrexley General A&E, the one they send the drunks and the frightened to first.
    *set job "nurse"
    *set nerve +5
    *set heart +5
    Wrexley General, A&E reception: the plastic chairs, the vending machine that only takes exact change, the whiteboard with the waiting time on it that you rub out and write again, and again, and again. You're not a nurse. You're the person people see before the nurse, which some nights is the more important job. Glossop runs the front desk from a back office and a spreadsheet, and Dev pushes a porter's trolley past your window forty times a shift and pulls a different face every time.

    Today, a little boy with a cut on his head stopped crying the second he looked at you, and stared at your hands instead, and said [i]they're shining[/i], and his mum laughed and said he had concussion. The doctor said he didn't.
  #In the kitchen at the Pie & Pint, eleven till eleven, on the grill and the fryers and the steam.
    *set job "cook"
    *set flame +5
    *set wit +5
    The Pie & Pint is a pub by the canal with a quiz on Tuesdays and a kitchen the size of a lift, and for four years you've been the one keeping it running while the chef, who's called Chef, smokes in the yard. You can plate sixty covers on a Sunday. You can tell by the sound when the fryer oil's about to turn. Glossop, the landlord, counts the chips. Dev, behind the bar, steals them.

    Today the gas went out on all six rings at once, halfway through service, and you swore at them, and all six came back on at the same moment, blue and roaring and much too high, and Chef came in from the yard and looked at you and went back out again.
  #On the returns desk at Harker's, the department store that's been closing down for three years.
    *set job "shop"
    *set wit +10
    Harker's has had a sign in the window saying [i]EVERYTHING MUST GO[/i] since before the pandemic, and nothing ever has. You work the returns desk on the second floor between the curtains and the cafe: receipts, refunds, a woman who's brought back the same toaster four times. You know every item in the building and exactly where it's been since 2019. Glossop, the floor manager, walks the second floor twice an hour with his hands behind his back like minor royalty. Dev, on Electricals, rings you on the internal phone to warn you when he's coming.

    Today, a stack of cardboard boxes fell off the top shelf in the stockroom, right over your head, and stopped. In the air. For about a second. Then fell to the side, all at once, very neatly, as if someone had moved them. There was nobody there but you.
  #At the counter of Wrexley Library, stamping, shelving, and chasing teenagers out of the local-history room.
    *set job "library"
    *set wit +10
    Wrexley Library is a red-brick building with a green dome, cut to three days a week and kept alive by you, Mrs Okafor-Bell, and a volunteer called Stan who's ninety. You know which regulars want to talk and which want to be left alone with the newspapers. You know the smell of every section. Glossop, from the council, visits once a month to look sadly at the heating bill. Dev does the computers, for the library and half the town hall, and eats his lunch in the local-history room because nobody else goes in.

    Today, the old globe in the reading room began to turn on its own while you were dusting it, slowly, and stopped under your hand on a place where there's nothing but blue, and the whole room smelled, for a second, of cold lake water.
  #On a bike for Swift Couriers, twelve hours a day in the rain, all over Wrexley and back.
    *set job "courier"
    *set nerve +10
    Swift Couriers is a depot, a van, a WhatsApp group and nine lunatics on bikes, and you're one of them: parcels, documents, the odd emergency birthday cake. You know every shortcut in Wrexley, including the three that are technically illegal. You're fast, and you don't fall off, and you don't get lost. Glossop runs the depot. Dev runs the radio, and talks you through the traffic like a man commentating on a horse race.

    Today, a lorry turned left across you at the lights on Station Road without looking, and you should have been under its wheels. Instead there was a sound like a sheet being shaken out, and you were on the other side of the junction, still on your bike, with no idea how you'd got there. The lorry driver got out and was sick in the gutter.

You'd told yourself it was nothing, afterwards. You've been telling yourself that about a lot of things this year. Tired, you'd said. Stressed. The time of year. You'd gone home and put the telly on and not looked at your hands.

The kitchen window is black with night, and gives you back to yourself: tired, twenty-five, in yesterday's jumper, holding a letter that's warm in your hands, lit gold down one side by a door in the wall that shouldn't be there.
*look
*set look_done true
*commit_stats
*page_break
*comment ---------------------------------------------------------------- CH01.KITCHEN.02
*sid CH01.KITCHEN.02
*date 2026-09-11 00:10
*present dev
The clock on the oven says ten past midnight, so it's true, then. It's tomorrow.

Nothing else has changed. The doorway is still there, humming. The kettle has stopped steaming and started ticking as it cools. Next door's telly is on through the wall, somebody laughing on a chat show at a joke you can't hear, and the tap drips once into the washing-up bowl, and the whole ordinary kitchen carries on around the gold line in the wallpaper as if it hasn't noticed, or has noticed and has decided it would be rude to say.

You sit down at the kitchen table, because your knees would like you to, and you read the letter again, properly this time, out loud and very quietly, the way you'd read something from the council to make sure it really said what you thought it did.
*letter invitation
You read the last paragraph twice. Then a third time, with your finger under the words, like a child.

[i]What you have noticed this year, and how it has made you feel.[/i]

Well.

It started in January, you think, although you only noticed in March. The bulbs, first. Three in a week in the hall, then the one over the bathroom mirror, which exploded while you were brushing your teeth and left glitter-fine glass in the sink. The kettle, from March: switched off at the wall and boiling anyway, whenever you were upset about something, until you started unplugging it before you rang your landlord. The basil plant on the windowsill that turned its leaves to follow you round the kitchen like a dog. Clocks stopping at midnight. Your hands warm in December, so warm that people you shook hands with looked down at them.

You'd searched for it once, at two in the morning: [i]why do lights flicker when I'm angry[/i]. The internet had suggested your wiring, your blood pressure, and a prayer group. You'd closed the laptop and not tried again.

How it made you feel. That's the harder half of the question. Frightened, mostly, if you're honest. Frightened the way you are when you find a lump, or a letter from the bank you haven't opened: a low cold hum of a fright that you carry round all day under everything else. You'd started to think you were ill. Some nights you'd started to think you were going mad, quietly, in a way nobody else could see.

Only that isn't quite all of it, is it. Under the fright, some mornings, there was something else. Something that stood up in you when the candles leaned, and felt, for one wild second, [i]seen[/i].

Then there's the one thing that frightened you more than all the rest.
*choice
  #Nana Pearl's eighty-second birthday: the candles on the cake, leaning towards you.
    *set heart +5
    All twenty candles (she said eighty-two would set the smoke alarm off) leaned towards you while everyone sang, every flame bending the same way, as if they were listening. Nana blew them out before anyone else noticed. She gave you a look over the cake, sharp and soft at once, the look she used to give you when you were small and had said something truer than you meant to. Then she said [i]who wants a corner[/i], and nobody mentioned it again. You've thought about that look every day since.
  #The dream. The same one, every night since June: a black lake, a castle, lanterns.
    *set wit +5
    Every night since the solstice, the same dream. A long black lake between hills, and an island, and on the island a castle with lit windows, and over it, rising slowly into a sky full of stars, hundreds of little paper lanterns: gold, rose, green, blue. You wake up with your face wet and no idea why. You've started keeping a notebook by the bed, and on the last page of it, last week, in your own handwriting, from a night you don't remember waking, it says [i]Wrenfold[/i].
  #The night in August when you were angry, and every light on Viaduct Street went out at once.
    *set flame +5
    You'd had the call from the landlord about the rent going up. You stood at the front window and you were so angry you couldn't see straight, and the streetlamp outside went out. Then the next one. Then every window on the street, one after another, as if something were walking up the terrace blowing out candles. The power company said it was a fault at the substation. You stood in the dark and felt it, whatever it was, go back into you like a breath.

You put the letter down on the table. Then you pick it up again, because you don't want to not be holding it.

Your phone buzzes on the counter.

It makes you jump so badly you nearly drop the letter. Of course it's Dev. Nobody else texts you after midnight, and Dev never sleeps before one: he says it's his brain, and his mum says it's his phone, and they've been arguing about it for twenty-six years.
*text dev u alive?? glossop was asking where the rota went. I said you ate it
*text dev also happy birthday for tuesday again. did the balloon survive. I bought the balloon
You look at the balloon, which is leaning a bit now, tired out by its long week of celebrating. It's the kind of thing Dev does: forgets your birthday until the morning of, then panics and overcompensates with foil.
*text me it survived. dev can I ask you something weird
*text dev its midnight, all my questions are weird. go
You look at the doorway. The lamps on the other side of it swing gently in a wind you can't feel. The owl has finished whatever it was eating and is cleaning its face with one foot.

You type [i]there's a door in my kitchen[/i], and look at it, and delete it. You type [i]I think I might be magic[/i], and look at that for even longer, and delete it too.
*text me if something happened that meant I had to go away for a year. suddenly. tomorrow. would you think I was mad
The three little dots come up, and go away, and come up again. You watch them the way you'd watch a pan about to boil over.
*text dev I'd think you'd finally robbed the place. I'd help
*text dev ...are you ok though?? serious
*text me I think so. I think I'm really ok actually
*text dev then go. whatever it is. I'll cover. send a postcard
You put the phone face down on the counter and sit with your hand on it for a second, feeling your heart go.

That's Dev all over. He's never once asked you a question he could tell you didn't want to answer. You picture him on the night bus home, long legs folded up against the seat in front, lanyard still round his neck because he always forgets to take it off, typing [i]I'll cover[/i] with both thumbs and meaning it. You're going to miss him more than you've let yourself think about. You put that thought somewhere safe, to take out later.

The letter said dawn. Dawn in September is somewhere around half six. That's six hours. You could spend them sleeping on it, if you could sleep, which you can't. You could spend them packing.

Or you could ring the one person in the world who ought to hear it from you first, even at midnight. [i]Especially[/i] at midnight: Nana Pearl hasn't slept before two in the morning since 1987.
*choice
  #Ring Nana Pearl.
    *set told_nana true
    *goto nana_phone
  #Go and see her. Now. There's a taxi rank on Station Road that never closes.
    *set told_nana true
    *goto nana_visit
  #Don't wake her. Pack.
    *goto door
*comment ---------------------------------------------------------------- CH01.NANA.01
*label nana_phone
*sid CH01.NANA.01
*date 2026-09-11 00:20
*present nana
*meet nana
You take the phone out into the hall to ring her, and then come straight back again, because you find you don't want to be out of sight of the door. So you stand by the fridge with the phone at your ear and your eyes on the lamplit street, listening to it ring in a bungalow on the other side of Wrexley.

You can picture it exactly. The gas fire on low. The budgie under his cover. Nana in her chair with her feet on the pouffe and a cup of tea going cold at her elbow, watching snooker she's seen before, because she likes knowing how it ends.

@nana:neutral She answers on the second ring. "If this is about the snooker, I've seen it."

"Nana, it's me."

@nana:warm "I know it's you, love, it says on the telly." (She has her phone plugged into her television so that the calls come up on the screen. Your cousin did it for her at Christmas and she's never forgiven him, because now she can't pretend she didn't see who was ringing.) "What's wrong? It's midnight. Is it the landlord?"

You open your mouth to explain, and discover you have no idea how. Every way of starting sounds mad. [i]Nana, there's a street in the wall.[/i] [i]Nana, the kettle's been boiling itself since March.[/i] [i]Nana, I think I'm a[/i]... what? So you say the only thing in the letter that you can bear to say out loud.

"I've had a letter."

There's a silence on the line, so long you check the screen to see if she's still there. On her end, very faintly, you can hear the snooker commentator saying something respectful about a red.

@nana:neutral "What sort of letter," says Nana Pearl, very carefully, "at midnight?"

"The sort with a wax seal," you say. "With a bird on it."

@nana:warm You hear her put her tea down: the small china click of the cup on its saucer, which she still uses, because mugs are for builders. Then, to your complete astonishment, you hear her laugh: a little shaky, but a real laugh. "Oh, love," she says. "Oh, my love. A wren?"

"How do you know it's a wren?"

@nana:neutral "Because my mother had one," she says. "Your great-gran Ivy. In nineteen fifty-three, when she was twenty-eight, a letter came under her door at midnight with a wren on it, and she went away for a year, and she came back quieter. She could make the kettle sing, after. Actually sing, a little tune. She used to do it to make me laugh." A pause. "She told me they'd come for one of us again one day. I always thought it'd be your mother. It never was. Then this year, the candles on my cake..." Another pause. "I've been waiting for you to ring."

You sit down on the kitchen floor with your back against the cupboards, because it's where your legs take you.

"You knew?"

@nana:warm "I didn't [i]know[/i]. I hoped. And I worried, a bit, because Mum never said much about it, only that it was hard and it was worth it, and that you came back different." Her voice goes softer. "Is there a door?"

You look at it. The gold line, the lamplit street, the rain still falling softly on the other side. "There's a door."

@nana:neutral "What's through it?"

"A street," you say. "Houses. Lamps, all different colours. There's an owl on a gutter. Somebody's making toffee."

@nana:warm Nana Pearl makes a small sound you've never heard her make before, as if someone's handed her back something she lost a long time ago. "Toffee," she says. "She used to say that. She said the whole street smelled of toffee and it put her off it for life." Then she clears her throat, briskly, the way she does at funerals. "Then you go through it, {name}. Don't you dare stay here for me. I've got the budgie and the snooker and your auntie Carol ringing every Sunday to tell me about her feet. I'll be fine. You ring me when you get there, if they've got phones."

"I think they have owls."

@nana:warm "Then send me an owl," she says. "And bring me back a stick of rock or whatever it is they have."

"I love you, Nana."

@nana:warm "I know you do," says Nana Pearl. "I love you too. Now get off the phone, it's costing me a fortune, and go and pack something warm."

When you put the phone down, you sit on the floor a bit longer, and you cry, a bit, the good kind. The kettle, switched off at the wall, sings you a little tune. Three notes, going up. It's never done that before.

You laugh, wetly, into your sleeve. Somewhere across town, you'd bet the rent, Nana Pearl is sitting in front of the snooker with her hand over her mouth, doing exactly the same.
*set heart +5
*set fr_nana 3
*goto door
*comment ---------------------------------------------------------------- CH01.NANA.02
*label nana_visit
*sid CH01.NANA.02
*date 2026-09-11 00:45
*place P02 nana_pearl
*present nana
*meet nana
The taxi driver on Station Road doesn't ask why you're crossing Wrexley at half past twelve in a jumper with a letter in your pocket, and you don't tell him. The town goes by in orange and black: the shut chip shops, the canal, the Harker's sign still saying [i]EVERYTHING MUST GO[/i] to nobody. The viaduct stands over all of it like something asleep.

It's strange to see it all tonight. You've lived in Wrexley your whole life, and you've never looked at it the way you're looking at it now: the wet shine on the pavements, the lit window of the all-night garage, a fox trotting along the canal towpath as if it has somewhere to be. It looks small, and dear, and a bit shabby, like a coat you've had for years. You find you're memorising it without meaning to.

Nana Pearl's bungalow is the only lit house on Laburnum Close. She opens the door before you knock.

@nana:neutral She's in her quilted dressing gown and her red glasses, and her hair is in its night-time net, and she has a plate of toast in one hand, because she always has a plate of toast in one hand after eleven. She looks at your face. She looks at the corner of cream envelope sticking out of your pocket. She doesn't say [i]what on earth are you doing here[/i], or [i]is it the landlord[/i]. She says: "Is it a wren?"

You stand on her doorstep with your mouth open.

@nana:warm "Come in," she says. "You'll let the heat out. Admiral, it's {name}."

The budgie, Admiral, says something rude from under his cover. The telly's on with the sound down: snooker, a repeat. The front room smells the way it has your whole life, of lavender and toast and the gas fire, and there are photographs of you on every surface at every age, including the one from when you were nine with the bowl haircut that you've asked her to take down every Christmas for sixteen years.

You sit on the sofa. She sits in her chair. You give her the letter, and she reads it all the way through with her lips moving slightly, and then she takes her glasses off and wipes them on her dressing gown and puts them back on and reads it again.

The gas fire ticks. On the telly, somebody pots a long red to no applause at all. You find you're holding your breath, the way you did when you were small and had brought her a school report.

@nana:neutral "My mother had one of these," she says. "Your great-gran Ivy. Nineteen fifty-three. She was twenty-eight and she worked at the mill, and it came under the door at midnight with a wren on it, and she went away for a year. When she came back she was quieter. She never talked about it. But she could make the kettle sing, after. A little tune. She'd do it to make me laugh when I was poorly."

"You never told me."

@nana:warm "You never asked why your kettle boils on its own." She peers at you over her glasses. "I noticed, you know. At my birthday. The candles. I've been waiting all summer for you to turn up on my doorstep in the middle of the night."

"Why didn't you say something?"

@nana:neutral "And say what, love? [i]I think you might be a witch, like your great-gran, pass the gravy[/i]?" She shakes her head. "Mum always said you can't hurry it. It comes when it comes. If it didn't come, I'd have filled your head with nonsense for nothing, and you'd have spent your life waiting for a letter." She puts her toast down. "I didn't want that for you. I've watched people wait for things."

She gets up, slowly, the way she gets up now, and goes to the sideboard, and comes back with something small in her closed hand.

@nana:warm "She left me this," she says. "She said to give it to whichever one of us got the letter next. I thought it would be your mother." She opens her hand. It's a thimble: old silver, worn thin at the top, and stamped round the rim with a tiny cocked-tailed bird. "She said it was from the school."

It's warm when she puts it in your palm. Warmer than her hand. It fits your middle finger exactly. When you turn it to the lamp, the little wren on the rim catches the light, and for a second you'd swear it flicks its tail.

@nana:warm "There," says Nana Pearl, very quietly. "She'd have liked you. She'd have liked you ever so much."

You sit together for a while without saying anything, the way you used to on Sunday afternoons when you were small, with the snooker on and the gas fire ticking. She pushes the plate of toast towards you. You eat a slice, because she'd be hurt if you didn't, and because it turns out you're starving.

@nana:warm "Now you go home," says Nana Pearl, at last, "and you go through that door, whatever it is, and you don't stay here a single extra day on my account. I've got Admiral and the snooker and your auntie Carol ringing every Sunday about her feet. You send me an owl."

"How do you know they have owls?"

@nana:warm "Because my mother had one," she says, and her mouth twitches, "and it bit the milkman."

She hugs you on the doorstep, hard, the way she hasn't since you were a teenager and wouldn't let her. She smells of lavender and toast. She's smaller than she used to be. When she lets go, she straightens your collar, and pats it, and says "Well," and goes in and shuts the door before either of you can say anything else.

The taxi driver's waited. On the way back across Wrexley, you hold the thimble so tightly it leaves a ring in your palm.
*set heart +5
*set fr_nana 3
*set thimble true
*goto door
*comment ---------------------------------------------------------------- CH01.DOOR.01
*label door
*sid CH01.DOOR.01
*date 2026-09-11 02:10
*place P01 home_kitchen
*present
It's ten past two before you've finished not-packing.

The letter said to bring nothing but yourself, and it turns out that's harder than it sounds. You fill a rucksack, and empty it again. You put in socks and take them out, because what if they have magic socks, and put them back in, because what if they don't. You write a note for your landlord and a cheque for October that will probably bounce, and a note for Dev that just says [i]I meant it about the postcard[/i]. You water the basil, which turns its leaves to watch you do it.

All the while the door hums in the wall behind you, patient as a cat by a fridge. Every time you go past it you slow down. On the other side the rain has stopped, and the cobbles are shining, and somebody's opened a window above a shop and is playing an accordion, badly, something slow and sad and cheerful at once. You catch yourself humming along to a tune you don't know.

You go round the house the way you'd go round it before a holiday, turning things off. The immersion. The telly at the wall. The bathroom light, which flickers when you touch the switch, as if to say goodbye. You stand in the doorway of your bedroom for a minute and look at the unmade bed and the pile of washing on the chair and the damp patch on the ceiling shaped like a dog, and you feel something you weren't expecting: not sad, exactly. Fond. Like leaving a friend who's always been a bit disappointing and never meant any harm.

In the end, the rucksack holds clothes, a toothbrush, your charger (you're not sure why), the jumper you're wearing and the one you're not. There's room for one more thing. One thing that matters.
*choice
  #The photo of you and Nana Pearl from the pier, both squinting, both laughing.
    *set brought "photo"
    *set heart +5
    It's from the summer you were eleven: the two of you on the end of the pier at Saltby in a gale, both squinting, both laughing at something neither of you can remember now, her headscarf nearly off. You take it out of its frame and put it in the inside pocket of your coat, where you'll be able to feel it.
  #Grandad's old transistor radio. It still works. Mostly.
    *set brought "radio"
    *set wit +5
    It's older than you: a red leather transistor with a dial you turn by hand and a smell of warm dust when it's been on a while. Grandad used to listen to the shipping forecast on it in the shed. It picks up stations it shouldn't, some nights, and lately it's been picking up music you've never heard, very faint, like a choir a long way off. You wrap it in a jumper.
  #Your toolkit: the small one, screwdrivers and pliers and electrical tape.
    *set brought "tools"
    *set flame +5
    Whatever they teach at Wrenfold, you have a feeling something there is going to need fixing. Your toolkit's a red canvas roll that's been with you since your first flat: screwdrivers, pliers, a multimeter, and the electrical tape that has held together at least three phones and one car. You roll it tight and put it in the side pocket.
  #The book you've read so many times the spine's gone white.
    *set brought "book"
    *set wit +5
    It's a book of old stories, fairy tales and folk tales from all over, that Nana gave you when you were seven: the one about the girl who spun straw, the one about the lantern-maker's daughter, the one about the bird who carried fire. You've read it so many times the spine's gone white and the pages fall open by themselves. You'd feel stupid bringing it. You bring it anyway.
  #Grandad's penknife. You've carried it every day since he died.
    *set brought "knife"
    *set nerve +5
    You don't need to pack it: it's in your pocket already, where it always is, a heavy old thing with a horn handle and a blade he kept sharp enough to shave with. You've carried it every day for six years. You put your hand on it now, through your jeans, and feel steadier.
  #Nothing. The letter said nothing, and you're going to trust it.
    *set brought "nothing"
    *set flame +5
    You leave everything that matters where it is: the photographs, the radio, the book, all of it. If you're coming back, it'll be here. If you're not, well. The letter said [i]nothing but yourself[/i]. You'd like, for once in your life, to find out if that's enough.

You stand in front of the doorway with your rucksack on one shoulder{@thimble| and great-gran Ivy's thimble on your finger|}, and you look at it properly for the first time.

Up close the gold line isn't paint. It's light, drawn into the wall as if the wall were paper and someone had held it up to the sun. It's warm, the way the letter was warm: when you hold your hand out towards it, it's like standing near an oven door. The street on the other side is darker now, and busier. People are walking past, as if two o'clock in the morning were the middle of the afternoon: a woman in a long green coat with a cat on her shoulder; two old men arguing over a map; somebody pushing a barrow full of what look like jars of light. None of them looks your way. It's as if the door is a window, and you're on the dark side of it.

The humming in the wall rises, very slightly. Not impatient. Just: [i]here I am.[/i]

You think about your kitchen. The kettle. The basil. The lasagne. The rent. Glossop, and the rota, and the life you've been living for seven years like someone walking to the shop in the rain with their head down, getting there, getting back, not looking up.

{@told_nana|You think about Nana Pearl, who's been waiting all summer for exactly this.|You think about Nana Pearl, asleep across town, and promise her an owl.}

It occurs to you, standing there, that you could still say no. The letter said so. The doorway will close at dawn, and they won't trouble you again, and in the morning you'll go back to work and tell Dev it was a joke, and the kettle will go on boiling by itself, and the candles will go on leaning, and you'll go on not looking at your hands. You could. People must.

You put your hand flat on the edge of the light.

It's like putting your hand into warm water. It's like the first sip of tea on a cold morning, if the tea were inside your ribs. Something behind your breastbone that's been restless all year, all year, leaning towards candles and blowing out streetlights, turns towards the door the way the basil turns towards you, and goes [i]yes[/i].

You take one last look over your shoulder: the table, the balloon, the birthday card, the light over the cooker you've left on so the house won't be dark. Then you step through.
*snapshot doorway
*achieve kindled
*journal [b]Chapter 1.[/b] At midnight on the tenth of September, a letter came under your door in Wrexley: your magic has begun, late, and a place has been kept for you at Wrenfold, the school for the late-kindled. {@told_nana|You told Nana Pearl. Her own mother, your great-gran Ivy, had the same letter in 1953.|You didn't tell anyone but Dev, and not even him, really.} At ten past two in the morning, you stepped through a doorway of light in your kitchen wall.
*page_break
*goto_scene ch02
`);
