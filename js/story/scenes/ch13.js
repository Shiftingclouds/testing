NB.scene("ch13", String.raw`
*mood night
*set ch 13
*chapter 13 Home Between
*if ch13_way = "stay"
  *goto stay
*comment ---------------------------------------------------------------- CH13.HOME.01
*sid CH13.HOME.01
*date 2026-12-23 19:00
*place P01 home_kitchen
*present dev familiar
7 Viaduct Street is exactly where you left it, and it's the strangest thing you've ever seen.

The Lantern Train takes you to Kingsmere and an ordinary train, a grubby two-carriage stopping service with a broken heater, takes you home to Wrexley, and you walk from the station in the dark with your trunk bumping behind you on its little wheels and {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|inside your coat, peering out at the traffic in disbelief|in a cat basket you had to buy in Kingsmere, making its feelings known}. Under the viaduct. Past the chip shop and the launderette and the bookie's. Your street. Your door, with the draught under it. Your key, which still fits.

It's so small.

That's the first thing. The kitchen, with its yellow light and its one wobbly chair, is about the size of the Weathervane Room's fireplace. The ceiling's so low. There are no lanterns. There's a strip light that buzzes, and a calendar on the wall still on September, and the tomato plant in the back yard, which you forgot about, which is dead. And when the eight-fifteen goes over the viaduct, the whole house shakes, and the cups rattle on their hooks, and you realise you've been hearing that sound every night of your life and never noticed it until you'd been away from it.

It's so small, and so ordinary, and you love it so much you have to sit down on the wobbly chair for a minute.

Your kettle boils on its own when you look at it. It always did. You just know why, now.

At half past seven, someone bangs on the front door with the flat of their hand, and shouts "[i]Delivery for the missing person![/i]" through the letterbox, and it's Dev.
*meet dev
@dev:amused He's exactly the same. Lanky, in a hoodie, with his lanyard still round his neck because he's come straight from work, with a carrier bag of cans in one hand and a bag of chips in the other and his long face split in the biggest grin you've ever seen. "Look at you," he says. "[i]Look[/i] at you. You're alive. Glossop owes me a fiver." And he hugs you, cans and chips and all, and he smells of chip fat and the office and the bus, and of home.

He comes in. He sits on the wobbly chair, which you let him have because he's the guest, and it wobbles, and he opens two cans, and he tells you everything. Glossop's divorce. The new girl who cried in the stationery cupboard. The Christmas party, at which someone did something to the photocopier that's being investigated by head office. And he doesn't ask where you've been. He's very carefully, very obviously, not asking.

@dev:neutral And then, halfway through the second can, he stops, and looks at you across the kitchen table, properly, and his grin goes a bit quieter.

@dev:neutral "You look different," he says. "Not bad different. Just..." He waves a chip. "You used to look tired all the time. Like, all the time. For years. And you don't. You look like somebody switched you on." He eats the chip. "Where've you been, mate? For real. You don't have to tell me. But you can."
*choice
  #"A school. For people like me. Who found something out about themselves late." True, and not the whole truth.
    *set heart +5
    *set fr_dev +1
    @dev:warm He looks at you for a long time. "People like you," he says. "Right." And then he nods, slowly, as if something's been confirmed that he's suspected for years. "Good," he says. "Good. You should've gone years ago." He raises his can. "To people like you." And he never asks again, and you love him for it.
  #"Training course. Up north. Very boring. Lots of forms." Keep him safe from it.
    *set wit +5
    @dev:amused "Lots of forms," says Dev, gravely. "Right. Course." He clearly doesn't believe a word of it. He clearly doesn't mind. "Well, the forms suit you," he says, and clinks his can against yours, and changes the subject to the photocopier, and doesn't look at the kettle, which is steaming gently on its own on the counter behind you.

At eleven, at the door, with his hood up against the drizzle, he turns back.

@dev:neutral "Glossop says your desk's still there," he says. "If you want it. After." He shrugs. "I said you wouldn't. I said you'd found something better." He looks at you in the yellow light from the kitchen. "Have you?"

You tell him yes. And he grins, and goes off up Viaduct Street under the orange streetlights, whistling, and you stand at the door till he's round the corner.
*page_break
*comment ---------------------------------------------------------------- CH13.HOME.02
*sid CH13.HOME.02
*date 2026-12-25 13:00
*mood day
*place P02 nana_pearl
*present nana familiar
Nana Pearl's bungalow on Christmas Day smells of turkey and sprouts and lavender and toast, and it's so hot you have to take your jumper off in the hall.

The turkey is, in fact, the size of a small dog. Nana has cooked it anyway, and it's perfect, and there are roast potatoes and pigs in blankets and bread sauce and three kinds of stuffing, because she couldn't decide, and a trifle in a cut-glass bowl that's older than you. The telly's on, quietly, in the corner, the way it's always on. Admiral the budgie is sitting on top of his cage, eyeing {fam_name} with deep suspicion, and {fam_name} is eyeing Admiral right back.

*meet nana
@nana:warm "Don't you dare," says Nana Pearl, to {fam_name}, pointing a serving spoon. "He's eleven. He's got a heart condition." She sits down in her paper crown, with her red glasses on and her pink lipstick on and her pearls on, and looks at you across the table. "Right," she says. "Now tell me everything. Start with the castle. Is it a proper castle? Towers? Moat?"

You tell her everything.

Not quite everything. You tell her about the castle and the Lantern Hall and the ten thousand lanterns. About your house, and the Nesting. About Toby, and flying, and the Frost Market, and the Longnight Dance under the hanging snow. About {fam_name}. She laughs so much at Professor Bassani that she has to take her glasses off. She cries, a bit, at the lanterns on the Mere at Emberfall.

You don't tell her about the Choir. Or Delphine, or Bram, or Odile Pellow standing in the high street singing.

@nana:neutral But she's eighty-two, and she raised you, and she's been reading your face since before you could talk. When you've finished, and the trifle's gone, and the crackers are pulled, she takes her paper crown off and folds it up neatly on the tablecloth, and says, quietly, "And what aren't you telling me?"
*choice
  #Tell her the truth. All of it. She's the only person you've never lied to.
    *set heart +10
    *set told_nana true
    You tell her. The grey people and the humming. The hole where a flame should be. What you are, and what you can do, and what the Headmistress said in the room full of weather. The name: Aldric Morrow.

    @nana:neutral She listens to all of it without interrupting, with her small hands folded on the tablecloth. When you've finished, she's quiet for a long time. The telly murmurs. Admiral shuffles on his cage.

    @nana:warm "Right," she says, at last. "Well." She reaches across the table and takes your hand in both of hers, the way she did when you were six and had nightmares. "Then I'm glad you're there, and not here. Because there's a whole castle round you, and a headmistress, and a lake, and all those lanterns. And here, there'd only be me and Admiral." She squeezes. "And I'd fight them, love. You know I would. But I'm eighty-two."
  #"Nothing, Nana. It's all good. Honestly." Some things you carry so she doesn't have to.
    *set nerve +5
    @nana:neutral She looks at you over her red glasses for a long, long moment. "All right," she says. "Keep it, then. If it's yours to keep." She pats your hand. "But you know where I am. And I'm tougher than I look. I have to be. I've got your auntie Carol."

Nana's boiler breaks down on Boxing Day, spectacularly, with a bang and a smell of burning and a small flood in the airing cupboard, where the toffee tin you sent her is still, faintly, snowing. The man can't come till the fourth. So Nana Pearl packs a bag and her toast rack and Admiral in his travelling cage and comes to stay with you at Viaduct Street, and sleeps in your bed, and you sleep on the sofa, and it's the best week you've had in years.

On the third night, she does the washing-up, and you dry, and she hums.

You almost drop the plate.

@nana:neutral "What?" she says, turning round with her yellow gloves on. "What's the matter?"

"That tune. Where did you learn that tune?"

@nana:neutral "This?" She hums a bit more. Up, and round, and back down, like a bird going round a chimney. "My mother used to sing it. Your great-gran Ivy. At the washing-up, every night of my life, till she died. She said it was for keeping the cold out." She frowns at you. "Why?"

It's the Wren's Song. The first voice. Exactly the way Odile sang it on the green. Exactly the way it's written in the carol book on page ninety-one.

@nana:warm "She used to say there was another bit," says Nana Pearl, turning back to the sink, "that went underneath. She taught it me when I was little. Said I had to sing it with her, or it didn't work. I never knew what she meant by [i]work[/i]." She hands you a dripping gravy boat. "I haven't sung the underneath bit in sixty years. I expect I've forgotten it."

You look at her, at her small back and her yellow gloves and her pouf of white hair, and you think of Odile Pellow saying [i]it's meant for a lot of people[/i], and of the carol book: [i]the others to be found in their places.[/i]

"Nana. Would you sing it for me? The underneath bit?"

@nana:amused She laughs. "Now?" But she tries. She hums, uncertainly, and stops, and starts again. It's lower. It goes a different way, down where the first tune goes up, and round the other way, like a second bird going round the chimney in the opposite direction. She gets about four bars before she loses it. "No," she says. "That's all I've got. Sixty years." She shakes her head and pulls the plug out of the sink. "What a thing to remember."

You hum the four bars over and over under your breath all night, on the sofa, in the dark, so you won't forget them.
*page_break
*comment ---------------------------------------------------------------- CH13.HOME.03
*sid CH13.HOME.03
*date 2026-12-29 23:30
*mood night
*place P01 home_street_night
*present nana corliss jory familiar
On the twenty-ninth of December, at half past eleven at night, the trains stop.

You notice because you don't notice. You're lying on the sofa under a blanket, not asleep, and the eleven-forty should go over the viaduct and shake the house, and it doesn't. And then you realise the fridge has stopped humming. And then you realise the fridge has stopped humming because something else is humming instead, and it's so low and so everywhere that it's taken your ears this long to find it.

{fam_name} is on the windowsill, rigid, staring out through the gap in the curtains at the street.

You get up. You look out.

The streetlights on Viaduct Street are going grey. One by one, from the far end, from the bridge, coming this way. Orange, and then dim, and then grey, dead grey, the colour of ash. The Christmas lights in the windows of the houses opposite, the flashing reindeer at number twelve, the little white stars at number fifteen: grey. Grey. Grey. Coming down the street like a tide.

And under the viaduct, in the dark between two of the great brick arches, standing perfectly still, a tall figure in a grey robe with the hood pushed back and a shaved head, humming.

The Hush.

They came. The Headmistress said the Choir had never yet come looking for a student in their own house. They've come.
*if morrow_knows
  She saw you in Thimble Cross. She's come for you.
*else
  You don't know how they found you. It doesn't matter.

@nana:scared "{name}?" Nana Pearl is in the kitchen doorway in her quilted dressing gown and her hairnet, holding the edge of the door. Her face is grey in the grey light, and her hands are shaking. "{name}, love, my hands have gone cold. My hands have gone all cold."

You can see her flame. You don't have to try. Small and bright and warm and stubborn, like a pilot light that's been burning in the same boiler for eighty-two years. And a grey thread, thin as a cobweb, coming through the window glass towards it.

@corliss:neutral Out in the street, under the viaduct, the Hush lifts her head, and looks straight at your window, and hums.

You've got about ten seconds. You know it. You knew it in Thimble Cross.
*choice
  #Sing. The first voice, the way Odile sang it. And ask Nana for the underneath.
    *set heart +10
    *set nerve +5
    *set sang_odile true
    You open your mouth and sing. The Wren's Song, the first voice, up and round and back down, loud, into the grey kitchen, the way Odile Pellow sang it on the green with her boots planted in the snow.

    And the grey thread coming through the glass stops.

    It doesn't break. It stops. Wavers. Like a cobweb in a draught. But it's one voice. You can feel the hum pushing back, pressing on you, looking for the gap.

    "Nana! The underneath! Sing the underneath!"

    @nana:scared She doesn't understand. She can't possibly understand. But she's Nana Pearl, and when you were six and had nightmares she sat on the end of your bed and sang till they went away, and she opens her mouth, shaking, in her hairnet, and sings the four bars she remembers. Low. The other way round the chimney.

    And the kitchen [i]rings[/i].
  #Get between her and the window, and reach for your flame. Hold hers the way you held Toby's.
    *set kindling +10
    *set chill +1
    You put yourself between Nana and the window and close your eyes and reach, with the white flame in the middle of you, and get it round hers: small and bright and stubborn, eighty-two years old. You cup it like a match in a gale. You [i]hold[/i].

    The grey thread hits your flame and slides off. And comes again. And again. And every time, it's colder, and you're colder, and you can feel it now, the Hush's patience, the way she's leaning on it, like somebody leaning on a door they know will open eventually. You can't do this all night.

    @nana:scared And behind you, Nana Pearl, shaking, in her hairnet, with no idea what's happening, does the only thing she's ever done when someone she loves is frightened in the dark. She starts to sing. Great-gran Ivy's washing-up song. The underneath part. Four bars, low, the other way round the chimney.

    And without thinking, holding her flame, you sing the first voice over the top.

    And the kitchen [i]rings[/i].

That's the only word for it. Two voices, going round the chimney in opposite directions, and where they cross, something happens: a note that isn't either of them, high and clear and bright, like a finger run round the rim of a glass. You feel it in your chest. You feel it in the floor. On your finger{@thimble|, great-gran Ivy's silver thimble, which you've worn every day since September, goes warm, and then hot, and the tiny cocked-tailed wren on the rim seems, for a second, to|, where you'd wear a ring if you wore one, something seems, for a second, to} shine.

And the grey thread shrivels, like a hair held to a candle, and is gone.

@corliss:neutral Out under the viaduct, the Hush stops humming. For the first time, her closed mouth opens. Not to sing. In surprise.

You don't stop. Nana doesn't stop. She loses the four bars and goes back to the beginning, and you go back with her, and you sing them over and over, the two of you, in the kitchen at Viaduct Street at a quarter to midnight in your pyjamas, with the budgie shrieking in his cage, and you [i]hold[/i].

It's not enough to drive her off. Two voices aren't. But it's enough that she can't get in.

And then, at the far end of Viaduct Street, a light: brass, and bright, and swinging, coming at a run.
*meet jory
@jory:tense Jory Penrose. In his too-big greatcoat, with his lamp held up high in front of him, running flat out down the middle of the street between the parked cars, shouting a Lamplighter's word at the top of his lungs, "[i]LUME! LUME![/i]", and the brass lamp blazing white.

@corliss:neutral The Hush looks at him. Looks back at your window, one more time, a long flat grey look. And then she steps backwards, into the dark under the arch, and she's gone.

The streetlights come back on. Orange. The reindeer at number twelve starts flashing again. The eleven-forty, forty minutes late, goes thundering over the viaduct, and the whole house shakes, and the cups rattle on their hooks, and you've never been so glad to hear anything.

@jory:tense Jory is on your doorstep, bent double, gasping. "Headmistress," he wheezes. "Sent birds. To everyone. Who went home." He straightens up. "Every Lamplighter we've got is standing in some street somewhere tonight. I got you." He looks past you, at Nana Pearl in the kitchen doorway in her hairnet with her yellow washing-up gloves still on, holding the door frame. "Is she all right? Are you all right? What did you [i]do[/i]? I felt that from the end of the road."

@nana:neutral Nana Pearl lets go of the door frame. She's still shaking. She looks at Jory, and at his lamp, and at his greatcoat, and at you. And then she draws herself up to her full four foot eleven.

@nana:warm "Young man," she says. "You look frozen. Come in and have a cup of tea." And then, to you, in a completely different voice, very quietly: "That was the underneath bit, wasn't it. That's what it was for."
*page_break
*comment ---------------------------------------------------------------- CH13.HOME.04
*sid CH13.HOME.04
*date 2027-01-03 16:00
*place P11 platform_nought
*present nana toby familiar
Nana Pearl insists on seeing you off.

Nobody from outside is supposed to be able to find Platform Nought. Nana finds it anyway, in the grey afternoon, in her good coat and her church hat, holding onto your arm, by walking straight through the wall between Platforms Four and Five at Kingsmere Central as if she's done it all her life. On the other side, the Lantern Train is waiting in a cloud of silver steam, long and dark and gleaming, with every window lit gold, and the platform's full of students and trunks and cages and hugging families, and Nana Pearl stands in the middle of it all and looks round with her mouth open.

@nana:warm "Oh," she says. "Oh, my mother was right. She said you never forget it." She squeezes your arm. "I've been waiting seventy years to see this."

@toby:laugh "[i]{name}![/i]" Toby comes barrelling down the platform with his trunk in one hand and a tin of his mum's mince pies in the other, and hugs you, and sees Nana Pearl, and goes pink, and shakes her hand very formally. "Mrs Pearl. Hello. I'm Toby. I've heard so much about you. Is it true you once hit a man with a handbag?"

@nana:amused "Twice," says Nana Pearl, delighted. "Same man."

The guard blows his whistle. Nana Pearl turns to you. She's not crying. She's absolutely not crying. She's got her chin up, the way Odile Pellow had her chin up on the green.
*if told_nana
  @nana:warm "You be careful," she says. "And you find the rest of that song. All of it. Every voice. You hear me?" She holds your face in her small cold hands. "And when you've found it, you come home and teach it me."
*else
  @nana:warm "You be careful," she says. "I don't know what that was, in the kitchen. I'm not asking. But you find out, and you be careful, and you come home." She holds your face in her small cold hands. "And you take this with you." She hums, very softly, the four bars. The underneath. "Don't forget it. I don't know why. Just don't."

You get on the train. You lean out of the window. She stands on the platform in her church hat, getting smaller, waving, until the Lantern Train goes into the dark and the gold windows are the only light, and all the way north, across the wild country, in the dark, you hum four bars under your breath, so you won't forget.
*goto after
*comment ================================================================ stay
*label stay
*comment ---------------------------------------------------------------- CH13.STAY.01
*sid CH13.STAY.01
*date 2026-12-24 19:00
*place P13 lantern_hall_longnight
*present saoirse idris noor kestrel tully familiar
Wrenfold at Christmas, with forty people in it, is a different castle.

The snow comes on the twenty-third and doesn't stop. It piles up on the battlements and in the courtyards and against the doors, and the Mere freezes solid right across, and the boats can't run, and the castle is snowed in, and it's wonderful. The corridors are empty and echoing. The house common rooms are empty, and you can have the best chair by the fire every night. The ten thousand lanterns in the Lantern Hall have gone soft gold again, and they drift low and slow over the one long table the kitchens have laid down the middle of the Hall for everyone who stayed.

Forty people. Six Lamplighters, who take turns eating, with their greatcoats on. The Headmistress, at the head of the table in a paper crown, which is somehow the most frightening thing you've ever seen. Mr Tully, carving. And whoever else stayed, and why.
@saoirse:laugh Saoirse, because she never goes home. "Home's my dad's flat in Cardiff and my dad's girlfriend's three terriers," she says, pulling a cracker with you so hard it explodes in a shower of sparks and a paper hat that's actually on fire. "I love my dad. I love him from a distance of about two hundred miles." She puts the burning hat on anyway.

@idris:neutral Idris, because he doesn't have anyone to go home to. He says it quite simply, as a fact, passing the potatoes. "My parents died when I was nineteen. I spent last Christmas here. It's quieter than it sounds." And then, looking round the table at the forty of you in your paper hats: "This is the loudest one I've been to."

@noor:tired Noor, because the Infirmary's still got three hum-sick first-years in it, and she won't leave them, and Matron's given up arguing. She comes to dinner for exactly forty minutes, in her uniform, and eats a whole plate of turkey without stopping, and falls asleep at the table with a sprout on her fork.
*if b_cas_family
  *present cas
  @cas:guarded And Cas. You didn't know he'd stayed until he walks into the Hall on Christmas Eve, late, with snow on his shoulders and his grandmother's Longnight letter still unopened in his coat pocket; you can see the corner of it. He sits down opposite you without a word. After a while, he says, not looking up from his plate, "I took your advice. Don't mention it." You don't. He pulls a cracker with you. He gets the hat that's on fire, and wears it, gravely, all the way through pudding.

@kestrel:warm The Headmistress, at the head of the table, stands at nine o'clock, in her paper crown, and raises her glass. "To those who stayed," she says. "And to those who went home. And to those who couldn't do either." She looks down the long table, at forty faces in the candlelight. "Merry Christmas, Wrenfold."

@tully:warm Mr Tully, carving, lifts his knife in salute. His lined face is rosy in the firelight. But when the others drink, he doesn't. You notice him put his glass down untouched, and look up at the lanterns drifting over the table, one by one, as if he's counting them.
*page_break
*comment ---------------------------------------------------------------- CH13.STAY.02
*sid CH13.STAY.02
*date 2026-12-27 22:00
*place P12 mere_frozen
*present saoirse familiar
On the twenty-seventh, a letter comes for Saoirse, by a thin grey pigeon that's clearly never flown this far north before and collapses on the breakfast table.

She reads it. She reads it again. Then she folds it up very small, and puts it in the pocket of her overalls, and says, "Right," in a bright hard voice, and gets up, and goes, and nobody sees her all day.

You find out what it said from the pigeon's return label, which she left on the table. It's from Kingsmere. It's addressed in a woman's handwriting. And there's a name on the back, over the sender's address, in the same handwriting: [i]Mrs A. Maddock.[/i]

Her mam. Twenty-one years since a Tuesday, since a packed bag, and now a letter.

At ten o'clock at night, you're at your window, and you see a single light come out of the boathouse onto the frozen Mere. A headlamp. Moving fast. And you hear it, even from here: the roar of a motorbike engine, a motorbike that shouldn't exist, that shouldn't be able to run on ice, heading straight out across the black frozen lake towards the far shore, towards the south, towards Thimble Cross and the road and the train and away.

You're at the boathouse in four minutes.
*if st_saoirse >= 3
  She's stopped. She's a quarter of a mile out on the ice, a tiny black shape in the headlamp's cone with the engine idling, sitting astride the bike, not moving. As if she got that far and her body forgot what came next.
  *choice
    #Go after her. Across the ice. On foot, in the dark.
      *set b_saoirse_run true
      *set st_saoirse 4
      *set nerve +10
      It takes you twenty minutes to reach her, slipping and sliding across a quarter of a mile of black ice in the dark, with the cold burning your lungs and the stars enormous overhead. The whole way, you think she'll go. Every step, you expect to hear the engine roar and see the headlamp swing away. She doesn't go.

      @saoirse:hurt When you finally get there, gasping, she's still sitting on the bike with the engine running and her goggles pushed up on her head and tears frozen on her face. "She wants to meet me," she says. "My mam. She's in Kingsmere. She saw my name on a list somewhere; they print the names of late-kindled, did you know that, in some paper? She saw my name. She wants to meet me. After twenty-one years. And I was going. I was going to go right now, in the dark, on the bike, without telling anyone, and just [i]turn up[/i]." She laughs, horribly. "And then I got out here, and I thought: that's what she did. Just went. In the dark. Without telling anyone." She wipes her face with an oily glove. "I'm doing it. I'm doing exactly what she did."
      *choice
        #"Then don't. Not like this. Go in daylight, and tell us, and come back."
          *set st_saoirse +1
          @saoirse:sad She looks at you for a long time, in the headlamp glow, with the engine ticking over. Then she reaches down, and turns the key, and the engine dies, and the silence on the frozen Mere is enormous. "In daylight," she says. "And tell people. And come back." She says it like a spell she's learning. "Will you come with me? When I go?" And when you say yes: "Then I'll go." She gets off the bike. "Help me push this back. It's a long way. I'm not riding it. I don't trust myself."
        #Don't say anything. Just get on the back of the bike, and wait.
          *set st_saoirse +1
          *set heart +5
          @saoirse:warm She feels the bike dip as you get on behind her. She goes very still. You put your arms round her waist and don't say anything, and wait, and you can feel her breathing, fast and then slower and then slow. After a long time she says, "I could go. Right now. With you on the back." And then: "I'm not going to." And she turns the bike round, very slowly, on the ice, and takes you both home at about four miles an hour, the whole quarter mile, without once speeding up.
    #Let her go. Sit on the end of the jetty in the cold, and wait for her to come back.
      *set b_saoirse_run true
      *set st_saoirse 4
      *set heart +10
      You sit down on the end of the jetty, in the snow, with your arms round your knees, and watch the tiny headlamp out on the ice, and wait.

      It's one of the hardest things you've ever done. It's so cold your face goes numb, and then your hands, and then your feet. You don't move. Twice the engine roars, and the headlamp swings towards the far shore, and your heart stops. Twice it stops again.

      After an hour and ten minutes, the headlamp turns round, and comes slowly back across the ice, and stops at the foot of the jetty. Saoirse turns the engine off. She looks up at you, sitting there in the snow, with frost in your eyebrows.

      @saoirse:hurt "You waited," she says. Her voice cracks. "You just... waited. You didn't come after me. You didn't shout. You just sat there in the freezing cold and [i]waited[/i]." She gets off the bike and comes up the jetty steps and stands in front of you, shaking. "Nobody's ever done that. Nobody's ever been the one standing still when I went. I always made sure I was the one going." She sits down beside you in the snow, hard, and puts her head on your shoulder. "It's my mam," she says. "She wants to meet me. I'll tell you. Give me a minute. I'll tell you everything."
*else
  But she's already gone. The headlamp's a spark on the far shore, and then it's gone over the rise towards Thimble Cross, and there's nothing on the black ice but a thin bright track in the frost.

  You stand on the jetty for a long time. Then you go and wake up the Lamplighter on the boathouse door, and tell him, and he swears, and sends a bird.

  @saoirse:tired She comes back at four in the morning, on her own, pushing the bike across the ice, and puts it away in the boathouse, and goes to bed without a word to anyone. At breakfast she's bright and loud and brittle, and she doesn't mention it, and neither does anyone else.
*page_break
*comment ---------------------------------------------------------------- CH13.STAY.03
*sid CH13.STAY.03
*date 2026-12-30 23:00
*place P29 old_cloisters
*present grey familiar
Ever since Longnight, the floor's been warm.

Not all of it. Not all the time. But in certain places, at certain hours of the night, when the castle is asleep and you're walking back from the Infirmary or the common room, you'll step on a flagstone and feel it through your shoes: a warmth, a faint slow pulse, like putting your hand on the flank of a sleeping animal. And your flame will lift its head and lean towards it.

On the thirtieth, at eleven at night, you follow it.
*if (st_idris >= 2) and (hurt_idris < 2)
  *present idris
  @idris:attentive Idris comes with you. You didn't ask him; he was in the corridor outside the Long Stacks when you came past, with his notebook, and he took one look at your face and fell into step beside you without a word. "You're following something," he says quietly, after a while. "I've seen you stop on the same flagstones three nights running. I've been writing them down." He shows you. A map of the castle, in his cramped careful hand, with dots on it. The dots make a line. The line goes down.

Down the east stair. Along the corridor behind the kitchens, where it's always warm anyway. Through the door you and Toby found in November, the one that's supposed to be sealed, which opens for you now the way it did then, as if it's been waiting. And down, into the Old Cloisters.

It's dark down here, and cold, and old. The pillars are carved with birds, wrens, hundreds of them, worn smooth. Your breath smokes. The Watchman isn't here; or he is, and he's quiet, and watching. And the warmth under your feet gets stronger and stronger with every step, until you're following it the way you'd follow the smell of bread through a strange town, round a corner, down a flight of steps so worn they're more like a ramp, to the end of a passage you've never seen.

There's a door.

It's small, and round-topped, and very old, older than anything else down here, made of black oak bound with iron. There's no handle. No keyhole. Just, carved deep into the middle of it, a wren. A single small bird, with its tail cocked, like the one on your letter. Like the one on {@thimble|great-gran Ivy's thimble|the school crest}.

You put your hand flat on it.

It's warm. Warm as a hearthstone. Warm as a hand. And your flame goes up in you like a bird taking off, and you have to hold it down, hard, to keep it from going through your palm into the wood.

And behind the door, far away, deep down, something is humming.

Not the warm lantern-hum you've heard every day since September. Not quite. And not the Choir's hum either, the low long lonely one, not quite. Something in between. A great slow warm note, like a hive, like a heart, like a fire that's been burning for three hundred years. And, underneath it, very faint, so faint you'd miss it if you didn't know it, a thinner sound. Low. Long. Like a draught under a door.

As if something is getting in.
*if (st_idris >= 2) and (hurt_idris < 2)
  @idris:tense Idris has his hand on the door too, beside yours. He's gone very still. "I can hear it," he says, in a whisper. "Not the way you can. But I can hear it." He takes his hand away, slowly. "That's it. Isn't it. That's what the margin meant."

@grey:neutral "Go back to bed."

You nearly jump out of your skin. Professor Grey is standing at the top of the worn steps behind you, in the dark, in his dark robes, with no light. You didn't hear him come. You have no idea how long he's been there. His scarred hands are folded in front of him and his colourless eyes are on the door, not on you.

"Professor, there's something behind..."

@grey:neutral "I know what's behind it." His voice is quiet and flat and very tired. "I've known for longer than you've been alive. Go back to bed, and don't come down here again, and don't tell anyone you found it. Not your friends. Not the Order." A pause. "Not the Lanternwarden."
*choice
  #"Why not the Lanternwarden?"
    *set wit +5
    @grey:neutral Something moves in his face, and is gone. "Because I asked you not to," says Professor Grey. "Go to bed." And he stands aside on the steps, and waits, and doesn't say another word, and you have to walk past him, close enough to see the scars on his hands, which go all the way up past his wrists, like burns, like frost.
  #"How do I know you're not the one letting it in?"
    *set nerve +10
    *set accused_grey true
    @grey:neutral He looks at you then. For a long moment, in the dark, with those pale colourless eyes. "You don't," he says. "That's rather the point of me." And he stands aside on the steps, and waits, and you have to walk past him, close enough to see the scars on his hands. When you look back from the corner, he's standing in front of the wren door, with one scarred hand flat on it, where yours was, and his head bowed, like a man at a grave.
*page_break
*comment ---------------------------------------------------------------- CH13.STAY.04
*sid CH13.STAY.04
*date 2027-01-03 17:00
*place P13 lantern_hall
*present toby familiar
The thaw comes on the second of January, and on the third the boats run, and the school comes home.

You're on the jetty when the first boats come in out of the dusk, lanterns bobbing at their prows, packed with students and trunks and cages, everybody shouting, and the first person off the first boat, falling off it, practically, onto the ice-crusted boards, is Toby Quill, with a tin of his mum's mince pies under one arm.

@toby:laugh "I missed you," he says, into your shoulder, hugging you so hard your ribs creak. "I missed everything. My sisters put a cracker in my bed. My mum cried at the pudding. I told everyone at the chip shop I go to a school up north for gifted bakers." He lets you go and looks at you, and his round face goes serious. "What happened? Something happened. You've got a face."

The Lantern Hall fills up again that night. Four long tables, four hundred voices, ten thousand lanterns drifting gold under the roof. It's so loud after a fortnight of forty people that it hurts your ears, and you love it, and you sit in the middle of it with Toby's mince pies and let it wash over you.

But every so often, under the noise, under the long tables, you feel it through the soles of your shoes. The warmth. The slow pulse. And, very faint, under that, the draught under the door.
*label after
*journal [b]Chapter 13.[/b] {@ch13_way = "home"|You went home to Wrexley for Christmas. Dev didn't ask. Nana Pearl knew great-gran Ivy's washing-up song, and it was the Wren's Song, with a second voice, the underneath. On the twenty-ninth the Hush came to Viaduct Street, and you and Nana sang both voices in the kitchen, and it rang, and she couldn't get in, until Jory Penrose came running with his lamp. Two voices aren't enough. But the song works.|You stayed at Wrenfold, snowed in with forty others.}{@b_saoirse_run and (ch13_way = "stay")| Saoirse's mam wrote to her after twenty-one years, and she tried to run, across the frozen Mere in the dark; and didn't.|}{@ch13_way = "stay"| Following the warmth under the floor, you found a small black door deep in the Old Cloisters, with a wren carved on it, warm as a hand, and something humming behind it; and under the hum, a draught, as if something's getting in. Professor Grey found you there, and told you to tell no one, not even the Lanternwarden.|}
*page_break
*goto_scene ch14
`);
