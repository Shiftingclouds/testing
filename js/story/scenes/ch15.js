NB.scene("ch15", String.raw`
*mood day
*set ch 15
*chapter 15 The Glimmer Cup
*comment ---------------------------------------------------------------- CH15.CUP.01
*sid CH15.CUP.01
*date 2027-02-13 11:00
*place P27 glimmer_pitch_snow
*present rowan saoirse okoro marcus toby jory familiar
The Glimmer Cup final is played on the thirteenth of February, in the snow, and it's Larkspire against Rookhallow, and the whole school has gone mad.

The semi-finals were a fortnight ago, in a blizzard. {@house = "owlcombe"|Owlcombe lost to Larkspire by one hoop, in the last minute, and your whole common room is still in mourning.|}{@house = "heronmere"|Heronmere lost to Rookhallow when their Keeper, Jonty Farthing, fell asleep on his broom, and nobody in your common room has spoken to him since, except to be very kind about it, which is worse.|}{@house = "larkspire"|Larkspire beat Owlcombe by one hoop in the last minute, and your common room hasn't slept since.|}{@house = "rookhallow"|Rookhallow beat Heronmere by a mile when their Keeper fell asleep on his broom, and your common room has been building something in the Undercroft for the final that nobody will tell you about.|} And now it's the final, and the snow's stopped, and the sky's hard and blue, and the pitch is white from shore to shore.

The stands on their stilts over the frozen shallows are packed. Gold and rose on one side, black and copper on the other, and Owlcombe and Heronmere split down the middle according to who they hate least. Flags. Scarves. Rookhallow has built a brass dragon that breathes copper sparks every time they score, and it's already set fire to one Larkspire banner and been told off by three Lamplighters. There are Lamplighters on every stand, in their greatcoats, with their lamps, watching the sky instead of the game.

At each end of the pitch, the three lantern-hoops hang in the cold air, twenty feet across, glowing gold.
*if glimmer and ((house = "larkspire") or (house = "rookhallow"))
  You're not in the stands. Two days ago, a {@house = "larkspire"|Larkspire|Rookhallow} Chaser broke her wrist falling off a greenhouse roof on a dare, and at breakfast yesterday Coach Okoro came and stood behind your chair and said, "Reserve. You're in. Don't fall in." So you're on a broom, at the edge of the pitch, in {@house = "larkspire"|gold and rose|black and copper}, with your heart going like a train, and your wand in your sleeve, and snow blowing off the end of your broom.

  @marcus:amused {@house = "larkspire"|Marcus Oduya, the Larkspire captain, flies past you upside down and slaps your broom handle. "Relax! Throw it at the big glowy things! Try not to die!"|Across the pitch, Marcus Oduya, the Larkspire captain, sees you in Rookhallow colours and points at you, grinning, and draws a finger across his throat.}
*elseif glimmer
  You made reserve for your house in September, and your house is out, so you're in the stands with everyone else, in your team scarf, with a flask of tea and Toby, which honestly is nearly as good.
*else
  You're in the stands, in the front row, with a flask of tea and a blanket and Toby, who has painted his face half gold and half black because he says he can't choose, and Priya, who says he's a coward.

@rowan:tense In front of the Larkspire hoops, big and still in gold and rose, sits the Larkspire Keeper. Rowan. He's not looking at the game. He's looking at the hoops behind him, one after another, frowning, as if something's bothering him. He rubs his gloved hands together. Even from here you can see the snow melting off his broom.

@saoirse:laugh And out in the middle, in black and copper, with her goggles on and her dark hair whipping, Saoirse Maddock is doing loops round the Rookhallow dragon just to annoy it, and laughing.

@okoro:amused Coach Okoro, standing on the ice in the middle of the pitch in a fur hat, blows his whistle, and throws the Glim straight up into the blue, and twelve brooms go for it at once.

It's the best game of Glimmer anyone's seen in years. People will say so afterwards, even after everything. Saoirse scores in the first minute, and the dragon breathes sparks. Marcus scores back, standing up on his broom. The Glim, a ball of white light the size of a grapefruit, leaps and twists and pulls towards the hoops like a dog on a lead, and has to be wrestled, and gets away, and comes back.
*if glimmer and ((house = "larkspire") or (house = "rookhallow"))
  *set nerve +5
  And you're in it. You don't remember deciding to be. One moment you're at the edge of the pitch, frozen, and the next the Glim is coming straight at your face and you've got it, both arms round it, fizzing and struggling, and there's a Harrier's hooked stick coming at you from the left, and you drop under it, and loop, and throw, and the Glim goes through the {@house = "larkspire"|Rookhallow|Larkspire} middle hoop, and the whole hoop flares {@house = "larkspire"|gold|copper}, and the stands [i]scream[/i].
  *points +10

And then, with the score level and the lanterns in the hoops burning down towards the end, the Rookhallow Chasers come down the pitch in a wedge, all three of them, with the Glim, straight at the Larkspire hoops. And the left-hand Larkspire hoop goes grey.

Nobody else notices. Not at first. It's one hoop, twenty feet across, and its lanterns go dim, and then flat, and then grey: dead grey, colourless, like a photograph. You notice. You'd notice that grey anywhere now.

The first Rookhallow Chaser goes through it with the Glim.

@saoirse:scared It's Saoirse. She flies through the grey hoop, and you see her flame, bright and quick and copper-coloured, gutter as she goes through it, like a candle in a door that's just been opened. She wobbles. She drops ten feet, catches herself, just. The Glim falls out of her arms.

The second Chaser goes through after it, and gutters, and drops.

@rowan:scared And Rowan sees. He's the only one on the pitch who does. He sees the grey hoop, and the third Chaser coming at it, a skinny first-year in black and copper who can barely stay on his broom, and he knows what's going to happen, and he does what he always does. He goes. He throws his broom across the mouth of the grey hoop to block it, with his body, and the first-year bounces off him and away, safe, and Rowan goes through the grey.

You see his flame. You see it go. Not out. Down. His big hot furious golden flame, the one that frightens him, the one that walked him through a burning house, sucked down to a blue flicker like a pilot light in a draught.

And he falls.
*snapshot hoop

Forty feet, through the cold blue air, towards the white frozen pitch, with his broom tumbling away above him, not trying to catch himself. Not moving at all.
*choice
  #Wordcraft. [i]Hald[/i]. Hold. Throw the word at him with everything you've got.
    *set wit +5
    *set flame +5
    You don't reach for your wand. There isn't time. You shout it, the Wordcraft word Professor Moth made you say a hundred times in September until your tongue ached: [i]hald[/i]. Hold. And you throw it at Rowan with every scrap of flame you've got.

    It catches him ten feet off the ice. Like a hand. Like a net. He hangs there in the air for one long second, turning slowly, with snow falling round him, and then drops the last ten feet into a snowdrift, gently, and lies still.
  #Go. Get under him. Now.
    *set nerve +10
    *if glimmer and ((house = "larkspire") or (house = "rookhallow"))
      You're on a broom. You go. You go faster than you've ever flown, flat along the handle, straight across the pitch, under the falling shape, and you don't catch him, nobody could catch him, he's twice your size; but you get under him, and he hits you and your broom, and the three of you go down together into the deep snow by the Larkspire posts in a tangle of arms and bristles. You come up spitting snow. He doesn't come up at all.
    *else
      You're over the rail of the stand before you've decided to be, dropping ten feet onto the frozen shallows, running across the ice, slipping, running. You'll never get there in time. You know that. You run anyway. And Coach Okoro, seeing you run, sees where you're running, and turns, and gets his wand up, and slows him, just enough, and Rowan hits the snowdrift at your feet instead of the ice.
  #Reach for his flame as he falls. Don't let it go out.
    *set kindling +10
    *set chill +1
    You close your eyes in the middle of the screaming stands and reach, with the white flame, across forty feet of cold air, and find his: that blue flicker, going down. You get round it. You [i]hold[/i]. You don't try to stop him falling; you can't. You hold his flame, so that whatever happens when he hits the ice, there's still a light in him.

    You feel him land. It goes through you like a blow. But the flicker doesn't go out.

    When you open your eyes, the cold has come up to your elbows, and Rowan is lying in the snowdrift below the Larkspire posts, not moving. And you're still holding.

The whistle's going, over and over. The Lamplighters are shouting. People are pouring out of the stands onto the ice. The grey hoop hangs in the air above the pitch, dead grey, and then, as you watch, it flickers, and goes gold again, as if nothing had happened.

@jory:tense Jory Penrose gets there first, and then Coach Okoro, and then you. Rowan is lying on his back in the snow, with his eyes open, looking at the sky. He's cold. Rowan Ashby is [i]cold[/i]. You've never felt him cold. Snow's settling on his face and not melting.

@rowan:small "Is the kid all right?" he whispers. "The first-year. Did he..."

"He's fine. You stopped him. He's fine."

@rowan:small "Good," says Rowan, and closes his eyes.
*page_break
*comment ---------------------------------------------------------------- CH15.FALL.02
*sid CH15.FALL.02
*date 2027-02-13 13:00
*place P24 infirmary
*present rowan noor holloway familiar
He's not hollowed. That's the first thing Matron Holloway says, and she says it three times, as if she needs to hear it herself.

@holloway:neutral "Not hollowed. Guttered. Down to the wick." She's standing over the bed at the end of the ward, where Rowan's lying under four blankets with a hot-water bottle on his chest and his lips blue. "A hoop that snuffs," she says, in a low furious voice. "On a Glimmer pitch. In front of the whole school." She looks at the door, where two Lamplighters are standing. "Somebody's going to answer for this."

@noor:tense Noor is at his other side, with her hand flat on his chest over the blankets, and her face is grey and set. "It's coming back," she says. "Slowly. Too slowly. It keeps sinking." She looks up at you, across the bed, and her eyes say what she won't in front of Matron: [i]you could.[/i]

You sit down on the edge of the bed. You take his cold hand. You look.

His flame's there. Blue, tiny, flickering, down at the bottom of him like a pilot light, sinking and catching and sinking again. It wants to come up. It doesn't know how. It's forgotten what it's like to be big.

You put yours next to it. Not round it, like on the pitch. Next to it. The way you'd sit next to someone on a step. And you let yours burn, warm, steady, white, and you wait.

It takes twenty minutes. Noor doesn't move her hand. Matron finds something to do at the other end of the ward, very loudly, and doesn't look. And very slowly, the blue flicker leans towards your white one, the way a flame leans to a bigger fire, and catches, and comes up. Gold. And more gold. And his hand gets warmer in yours, and then warm, and then hot, the way it always is, and the blankets start to steam.
*set kindling +5
@rowan:tired He opens his eyes.
*if (st_rowan >= 3) and not(b_rowan_afraid) and (hurt_rowan < 2)
  *set b_rowan_afraid true
  *set st_rowan 4
  @rowan:scared He looks at you. At Noor. At the ceiling. And his face, which you've seen brave and embarrassed and furious and laughing, does something you've never seen it do. It breaks.

  @rowan:scared "I thought I'd gone," he says. His voice is tiny. "When I went through. I felt it go out. Everything. All the heat. And I was so cold, and I thought, this is it, this is what it's like, and I was [i]glad[/i]." He grips your hand so hard it hurts. "For a second. I was glad. Because it was gone and it couldn't hurt anyone any more." He's crying. "What kind of person is glad? I'm so frightened of it. All the time. I've been frightened since Tanner's Row. And I've never told anyone, because I'm the one who goes in. I'm the one who isn't frightened." He shuts his eyes. "I'm frightened all the time."
  *choice
    #"I know. I've seen it. And you went through the hoop anyway. That's not the opposite of frightened. That's what brave actually is."
      *set st_rowan +1
      *set heart +5
      @rowan:hurt He opens his eyes and looks at you for a long time, with the tears running sideways into his hair. "Nobody's ever said it like that," he says. "Everyone just says I'm not scared. As if it's easy." He breathes out. "It's not easy."

      "I know."

      @rowan:warm "Yeah," he says. "You do, don't you." And he doesn't let go of your hand, and he doesn't stop crying for a while, and you don't make him.
    #"Then let's be frightened of it together. You don't have to carry it on your own."
      *set st_rowan +1
      *set nerve +5
      @rowan:warm He laughs, a cracked wet laugh, and wipes his face with the heel of his free hand. "Together," he says. "You'd do that. Sit around being scared with me." He looks at his hand in yours, which is hot again, too hot, and you're not letting go. "All right," he says. "All right. That sounds... yeah."
*else
  *if b_rowan_afraid
    @rowan:tired He looks at you, and his mouth twitches. "I was scared," he says, hoarsely. "Up there. You'd have been proud of me. I was [i]terrified[/i]." And then, more quietly: "Thank you. For coming to get me. Again."
    *set st_rowan +1
  *else
    @rowan:tired He looks at you, and at Noor, and at the blankets steaming. "Did we win?" he croaks. And then, before either of you can answer: "Doesn't matter. Is the kid all right?" And when you tell him yes, again, he closes his eyes and goes to sleep, holding your hand, and doesn't let go of it for an hour.

@noor:warm Noor takes her hand off his chest at last. She looks at you across the bed, and her tired face is full of something that isn't quite relief and isn't quite anything else. "I couldn't have done that," she says. "Nobody could have done that but you." And then, lower: "Be careful. Everybody saw you run to him. Everybody saw you sit here."
*page_break
*comment ---------------------------------------------------------------- CH15.CUP.02
*sid CH15.CUP.02
*date 2027-02-13 16:30
*mood dusk
*place P27 glimmer_pitch_snow
*present tully saoirse familiar
The Glimmer Cup is declared void. Nobody wins. Nobody argues.

By half past four the pitch is empty, and the sun's going down red over the western hills, and the snow's gone pink and then blue, and the stands are dark and silent on their stilts, and the only light is the hoops, still hanging in the air at each end of the pitch, burning low.

And a small lamp, moving along under them. Mr Tully, with his stepladder and his long brass pole, taking the hoop-lanterns down one by one for the night, the way he does after every match.

You go down onto the ice. You don't entirely know why. The grey hoop is the left-hand Larkspire one. It's still up.
*choice
  #Go and look at the grey hoop's lanterns before he takes them down.
    *set wit +5
    @tully:neutral Mr Tully's at the foot of it, unhooking the first lantern with his pole. He sees you coming, and smiles, tired. "Terrible business," he says. "Terrible. Is the lad all right? The Keeper?"

    You tell him yes. You're looking at the lantern in his hands. It's gold now, like the others. But there's something about the wick.

    "Can I see?"

    @tully:neutral He hands it to you without a thought. It's a hoop lantern: brass and paper, with a thick wick in a little well of oil. The oil should be clear and gold, like the oil in every lantern in Wrenfold. It isn't. It's grey. Thin, cloudy, silvery-grey, like water that's had ash in it, and when you lift the lantern to your face it smells of mud and reeds and standing water and something rotten underneath: a marsh, at night.

    {@e01|You've smelled it before. On the grey wick in Delphine's lantern, in October.|You've never smelled anything like it in your life, and you know, at once, that you don't like it.}

    @tully:scared When you look up, Mr Tully's face has gone the colour of the oil. He's staring at the lantern in your hands. "That's Fen oil," he says. His voice has gone strange and thin. "From Saltmarrow. Out on the Fen. They make it in the villages there, for the marsh lamps. We use it for the old boathouse lamps; it burns in the damp." He swallows. "There's no other store of it in Wrenfold. Just the one. In my shed." He takes the lantern out of your hands, very gently, and holds it against his chest. "Somebody's been in my shed," he says. "Somebody's been in my shed."
    *clue e04
    @tully:hurt And he turns, and goes, with the lantern held against his chest, almost running with his bad knees, up the shore path towards his cottage in the dusk. He leaves the stepladder. He leaves the other five hoops still burning.

    You stand on the ice and watch him go, and you don't know what you've just seen: an old man who's frightened because somebody's been in his shed, or an old man who's frightened for some other reason.
  #Leave it. Rowan's all right. That's enough for today.
    *set heart +5
    You watch him from the edge of the ice for a while: the old man on his stepladder in the dusk, with his long brass pole, unhooking the lanterns one by one, gently, as if they're asleep. Then he takes the grey hoop's lanterns down too, and puts them in a separate box, and carries it away up the shore path himself, before the others. You don't think anything of it. You'll remember it later.

@saoirse:guarded When you turn round, Saoirse's at the edge of the pitch, by the boathouse, with her bike.

She's got her flying leathers on still, and her goggles pushed up, and a bruise coming up on her cheekbone from where she nearly came off going through the hoop. The bike's engine is ticking over. There's a letter sticking out of the pocket of her jacket.
*if (st_saoirse >= 3) and not(b_saoirse_run) and (hurt_saoirse < 2)
  *set b_saoirse_run true
  *set st_saoirse 4
  @saoirse:tense "My mam wrote," she says, before you can ask. "{@ch13_way = "stay"|Again. |}She's in Kingsmere. She wants to meet me. She saw my name on some list of the late-kindled. Twenty-one years and she saw my name on a [i]list[/i]." Her voice is too bright, too fast. "And today I went through that hoop and I felt my flame go, and I thought, I'm going to die on a Glimmer pitch in the snow and I'll never know what she wanted to say. So I'm going. Now. Tonight. On the bike." She laughs. It's horrible. "In the dark. Without telling anyone. Just like she did. Funny, that."
  *choice
    #Go after her. Get on the bike behind her before she can go.
      *set nerve +10
      *set st_saoirse +1
      You're across the snow and onto the back of the bike before she can put it in gear. She twists round, furious. "Get off."

      "No."

      @saoirse:hurt "[i]Get off[/i]." Her eyes are wet. "I'm going. You can't stop me."

      "I'm not stopping you. I'm coming with you. In daylight. Next week. We'll tell the Headmistress and Toby and everyone, and we'll go on the train, and I'll sit at the next table in whatever café she picks and pretend to read a paper. And then we'll come back." You put your arms round her waist. "But I'm not getting off."

      @saoirse:sad She sits very still on the idling bike for a long time. Then she reaches down and turns the key, and the engine dies, and in the silence you can hear the last hoop-lanterns hissing. "Next week," she says, in a small voice. "In daylight." She leans back against you, just a little. "Pretend to read a paper. You'd be terrible at it."
    #Let her go. Stand at the edge of the pitch, and wait for her to come back.
      *set heart +10
      *set st_saoirse +1
      You don't say anything. You just stand there on the edge of the frozen pitch in the dusk, where she can see you, and wait.

      She goes. The bike roars off across the ice towards the far shore, headlamp bouncing. You watch the light get smaller. It's so cold. You don't move.

      @saoirse:hurt It stops, a long way out. And sits there, a spark on the black ice, for a long time. And then it turns round, and comes back, slowly, and stops in front of you. She pulls her goggles down. Her face is wet and furious and wrecked. "You just stood there," she says. "You didn't even shout." And then she gets off the bike and walks straight into you and holds on, hard, with her face in your shoulder. "Nobody's ever stood still for me," she says. "I always made sure I went first."
*else
  *if b_saoirse_run
    @saoirse:warm "Mam's written again," she says, and pats the pocket. "Wants to meet. Kingsmere. I've said yes. Next month, in daylight, on the train like a normal person. You're coming. You're sitting at the next table. You promised." She grins, bruised and tired. "I'm not even running. Look at me. I'm just sitting on a bike. Standing still. Like a grown-up."
    *set st_saoirse +1
  *else
    @saoirse:guarded She sees you looking at the letter, and pushes it down into her pocket. "Nothing," she says. "Post." And then, when you don't say anything: "I'm going for a ride. Clear my head. Don't wait up." And she goes, off across the ice, fast, with the headlamp bouncing, and you don't see her again until breakfast.
*journal [b]Chapter 15.[/b] The Glimmer Cup, in the snow. {@glimmer and ((house = "larkspire") or (house = "rookhallow"))|You flew as a reserve and scored. |}A Larkspire hoop went grey, and every player who flew through it guttered. Rowan blocked it with his body to save a first-year, and fell forty feet. He wasn't hollowed; you sat with him in the Infirmary and his flame came back. {@b_rowan_afraid|He told you he's frightened all the time. |}{@e04|The grey hoop's oil was Fen oil, from Saltmarrow; the only store in Wrenfold is in Mr Tully's shed. "Somebody's been in my shed," he said. |}The Cup was declared void.
*page_break
*goto_scene ch16
`);
