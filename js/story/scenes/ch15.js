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

It's been building for a fortnight. Ever since Candlewake, the castle has talked about nothing else: in the corridors, at meals, in lessons, until Professor Kovač threatens to brew the next person who says the word [i]Glim[/i] in her cellar into something with legs. Wrenfold Wireless has run a countdown every night. There are scarves on every banister. Larkspire has been training at dawn in the dark, and Rookhallow at midnight, which is against every rule, and everybody knows, and nobody stops them.

The semi-finals were a fortnight ago, in a blizzard. {@house = "owlcombe"|Owlcombe lost to Larkspire by one hoop, in the last minute, and your whole common room is still in mourning.|}{@house = "heronmere"|Heronmere lost to Rookhallow when their Keeper, Jonty Farthing, fell asleep on his broom, and nobody in your common room has spoken to him since, except to be very kind about it, which is worse.|}{@house = "larkspire"|Larkspire beat Owlcombe by one hoop in the last minute, and your common room hasn't slept since.|}{@house = "rookhallow"|Rookhallow beat Heronmere by a mile when their Keeper fell asleep on his broom, and your common room has been building something in the Undercroft for the final that nobody will tell you about.|} And now it's the final, and the snow's stopped, and the sky's hard and blue, and the pitch is white from shore to shore.

The morning is so cold the air hurts your teeth, and so bright off the snow you have to screw your eyes up. The whole school walks down to the Mere together after breakfast, four hundred people in every scarf they own, stamping their feet and blowing on their hands, with flasks and blankets and banners and familiars in knitted hats; Jonty Farthing has been busy. You can smell woodsmoke from the braziers along the shore, and roasting chestnuts, and the cold, clean, metal smell of the ice.

The stands on their stilts over the frozen shallows are packed. Gold and rose on one side, black and copper on the other, and Owlcombe and Heronmere split down the middle according to who they hate least. Flags. Scarves. Rookhallow has built a brass dragon that breathes copper sparks every time they score, and it's already set fire to one Larkspire banner and been told off by three Lamplighters. There are Lamplighters on every stand, in their greatcoats, with their lamps, watching the sky instead of the game.

At each end of the pitch, the three lantern-hoops hang in the cold air, twenty feet across, glowing gold.
*if glimmer and ((house = "larkspire") or (house = "rookhallow"))
  You're not in the stands. Two days ago, a {@house = "larkspire"|Larkspire|Rookhallow} Chaser broke her wrist falling off a greenhouse roof on a dare, and at breakfast yesterday Coach Okoro came and stood behind your chair and said, "Reserve. You're in. Don't fall in." So you're on a broom, at the edge of the pitch, in {@house = "larkspire"|gold and rose|black and copper}, with your heart going like a train, and your wand in your sleeve, and snow blowing off the end of your broom.

  @marcus:amused {@house = "larkspire"|Marcus Oduya, the Larkspire captain, flies past you upside down and slaps your broom handle. "Relax! Throw it at the big glowy things! Try not to die!"|Across the pitch, Marcus Oduya, the Larkspire captain, sees you in Rookhallow colours and points at you, grinning, and draws a finger across his throat.}
*elseif glimmer
  You made reserve for your house in September, and your house is out, so you're in the stands with everyone else, in your team scarf, with a flask of tea and Toby, which honestly is nearly as good.
*else
  You're in the stands, in the front row, with a flask of tea and a blanket and Toby, who has painted his face half gold and half black because he says he can't choose, and Priya, who says he's a coward.

@rowan:tense In front of the Larkspire hoops, big and still in gold and rose, sits the Larkspire Keeper. Rowan. He's not watching the game. He's watching the hoops behind him, one after another, frowning, as if something's bothering him. He rubs his gloved hands together. Even from here you can see the snow melting off his broom.

@saoirse:laugh Out in the middle, in black and copper, with her goggles on and her dark hair whipping, Saoirse Maddock is doing loops round the Rookhallow dragon just to annoy it, and laughing.

@okoro:amused Coach Okoro, standing on the ice in the middle of the pitch in a fur hat, puts his whistle in his teeth and looks round at the stands, at all four hundred of you, with the grin of a man who has waited all winter for this. "Clean game!" he roars. "Hands off the broom tails! Nobody fall in!" Then he blows the whistle, and throws the Glim straight up into the blue, and twelve brooms go for it at once.

It's the best game of Glimmer anyone's seen in years. People will say so afterwards, even after everything. Saoirse scores in the first minute, and the dragon breathes sparks. Marcus scores back, standing up on his broom. The Glim, a ball of white light the size of a grapefruit, leaps and twists and pulls towards the hoops like a dog on a lead, and has to be wrestled, and gets away, and comes back. The Harriers go after the Chasers with their hooked sticks, and the Chasers duck and roll and drop like stones and pull up a foot off the ice. The noise from the stands is like weather. Every time a hoop flares, gold or copper, half the stilts shake.

Rowan is magnificent. You'd forgotten. He fills the mouth of the Larkspire hoops like a door, and every time the Glim comes at him he's there, broad and fast and fearless-looking, knocking it away with his forearm or his broom or once, memorably, his head. But between saves, every time, you see him look back over his shoulder at the hoops. Frowning.
*if glimmer and ((house = "larkspire") or (house = "rookhallow"))
  *set nerve +5
  You're in it. You don't remember deciding to be. One moment you're at the edge of the pitch, frozen, and the next the Glim is coming straight at your face and you've got it, both arms round it, fizzing and struggling, and there's a Harrier's hooked stick coming at you from the left, and you drop under it, and loop, and throw, and the Glim goes through the {@house = "larkspire"|Rookhallow|Larkspire} middle hoop, and the whole hoop flares {@house = "larkspire"|gold|copper}, and the stands [i]scream[/i].
  *points +10

  {@house = "larkspire"|Marcus Oduya goes past you roaring, both arms in the air, and nearly falls off.|Saoirse goes past you upside down, whooping, and the brass dragon breathes a sheet of copper sparks so big it sets fire to its own tail.}

Then, with the score level and the lanterns in the hoops burning down towards the end, the Rookhallow attack comes down the pitch in a wedge, straight at the Larkspire hoops, Chasers in front and the youngest Harrier trailing behind, with the Glim. And the left-hand Larkspire hoop goes grey.
*if glimmer and (house = "rookhallow")
  You should be on the end of that wedge. You're not: a Larkspire Harrier has your broom tail hooked on the far side of the pitch, and by the time you've shaken her off you're forty yards behind, and all you can do is watch.

Nobody else notices. Not at first. It's one hoop, twenty feet across, and its lanterns go dim, and then flat, and then grey: dead grey, colourless, like a photograph. You notice. You'd notice that grey anywhere now. It's the grey of Delphine's lantern wick. It's the grey of Viaduct Street, or of the high street in Thimble Cross, of every bad night since October.

The first Rookhallow Chaser goes through it with the Glim.

@saoirse:scared It's Saoirse. She flies through the grey hoop, and you see her flame, bright and quick and copper-coloured, gutter as she goes through it, like a candle in a door that's just been opened. She wobbles. She drops ten feet, catches herself, just. The Glim falls out of her arms.

The second Chaser goes through after it, and gutters, and drops.

@rowan:scared Rowan sees. He's the only one on the pitch who does. He sees the grey hoop, and the third Rookhallow flier coming at it, a skinny first-year Harrier in black and copper who made the team last week and can barely stay on his broom, and he knows what's going to happen, and he does what he always does. He goes. He throws his broom across the mouth of the grey hoop to block it, with his body, and the first-year bounces off him and away, safe, and Rowan goes through the grey.

You see his flame. You see it go. Not out. Down. His big hot furious golden flame, the one that frightens him, the one that walked him through a burning house, sucked down to a blue flicker like a pilot light in a draught.

He falls.
*snapshot hoop

Forty feet, through the cold blue air, towards the white frozen pitch, with his broom tumbling away above him, not trying to catch himself. Not moving at all. The stands haven't understood yet. Someone's still cheering. It takes a whole second, a whole terrible second, for the noise to turn into a scream.
*choice
  #Wordcraft. [i]Hald[/i]. Hold. Throw the word at him with everything you've got.
    *set wit +5
    *set flame +5
    You don't reach for your wand. There isn't time. You shout it, the Wordcraft word Professor Moth made you say a hundred times in September until your tongue ached: [i]hald[/i]. Hold. And you throw it at Rowan with every scrap of flame you've got.

    It catches him ten feet off the ice. Like a hand. Like a net. He hangs there in the air for one long second, turning slowly, with snow falling round him, and then drops the last ten feet into a snowdrift, gently, and lies still.

    Your legs go. You sit down hard, wherever you are, and your throat's raw, and your hands are shaking, and somewhere in the back of your head you can hear Professor Moth squeaking with joy.
  #Go. Get under him. Now.
    *set nerve +10
    *if glimmer and ((house = "larkspire") or (house = "rookhallow"))
      You're on a broom. You go. You go faster than you've ever flown, flat along the handle, straight across the pitch, under the falling shape, and you don't catch him, nobody could catch him, he's twice your size; but you get under him, and he hits you and your broom, and the three of you go down together into the deep snow by the Larkspire posts in a tangle of arms and bristles. You come up spitting snow. He doesn't come up at all.
    *else
      You're over the rail of the stand before you've decided to be, dropping ten feet onto the frozen shallows, running across the ice, slipping, running. You'll never get there in time. You know that. You run anyway. Coach Okoro, seeing you run, sees where you're running, and turns, and gets his wand up, and slows him, just enough, and Rowan hits the snowdrift at your feet instead of the ice.
  #Reach for his flame as he falls. Don't let it go out.
    *set kindling +10
    *set chill +1
    You close your eyes in the middle of the screaming stands and reach, with the white flame, across forty feet of cold air, and find his: that blue flicker, going down. You get round it. You hold. You don't try to stop him falling; you can't. You hold his flame, so that whatever happens when he hits the ice, there's still a light in him.

    You feel him land. It goes through you like a blow. But the flicker doesn't go out.

    When you open your eyes, the cold has come up to your elbows, and Rowan is lying in the snowdrift below the Larkspire posts, not moving. And you're still holding.

The whistle's going, over and over. The Lamplighters are shouting. People are pouring out of the stands onto the ice. The grey hoop hangs in the air above the pitch, dead grey, and then, as you watch, it flickers, and goes gold again, as if nothing had happened.

@jory:tense Then Jory Penrose is there, skidding on his knees in the snow, and Coach Okoro behind him, and you, somehow, although you don't remember crossing the ice. Rowan is lying on his back in the drift, with his eyes open, looking at the sky. He's cold. Rowan Ashby is cold. You've never felt him cold. Snow's settling on his face and not melting.

@rowan:small "Is the kid all right?" he whispers. "The first-year. Did he..."

"He's fine. You stopped him. He's fine."

@rowan:small "Good," says Rowan, and closes his eyes.

@okoro:neutral Coach Okoro has his coat off and over Rowan before anyone can stop him. The grin's gone; you've never seen his face without it, and it looks like somebody else's. "Stretcher!" he bellows at the stands, at the Lamplighters, at the sky. "Now! And somebody take those hoops down! [i]All[/i] of them!"
*page_break
*comment ---------------------------------------------------------------- CH15.FALL.02
*sid CH15.FALL.02
*date 2027-02-13 13:00
*place P24 infirmary
*present rowan noor holloway familiar
He's not hollowed. That's the first thing Matron Holloway says, and she says it three times, as if she needs to hear it herself.

The Infirmary is long and white and hushed, with its tall windows full of snow light and its row of iron beds with the blankets pulled tight, and it smells of carbolic and camphor and, from the little kitchen at the end, beef tea. Outside the door the corridor is packed: Larkspires, Rookhallows, half the Glimmer team still in their kit and their snow, all trying to see in. Two Lamplighters are keeping them back, not unkindly. Every so often somebody's familiar gets through their legs and has to be carried out again.

@holloway:neutral "Not hollowed. Guttered. Down to the wick." She's standing over the bed at the end of the ward, where Rowan's lying under four blankets with a hot-water bottle on his chest and his lips blue. "A hoop that snuffs," she says, in a low furious voice. "On a Glimmer pitch. In front of the whole school." She looks at the door, at the two Lamplighters. "Somebody's going to answer for this."

@noor:tense Noor is at his other side, with her hand flat on his chest over the blankets, and her face is grey and set. She hasn't taken her coat off. There's still snow on her boots. "It's coming back," she says. "Slowly. Too slowly. It keeps sinking." She looks up at you, across the bed, and her eyes say what she won't in front of Matron: [i]you could.[/i]

You sit down on the edge of the bed. You take his cold hand. It's the strangest thing, holding Rowan's hand and it being cold; it's like putting your hand on a radiator in August. You look.

His flame's there. Blue, tiny, flickering, down at the bottom of him like a pilot light, sinking and catching and sinking again. It wants to come up. It doesn't know how. It's forgotten what it's like to be big.

You put yours next to it. Not round it, like on the pitch. Next to it. The way you'd sit next to someone on a step. And you let yours burn, warm, steady, white, and you wait.

It takes twenty minutes. They're very long minutes. The Infirmary clock ticks. Noor doesn't move her hand. Matron finds something to do at the other end of the ward, very loudly, involving a great many bedpans, and doesn't look. Somewhere outside, somebody in the corridor starts to cry and is hushed. The cold creeps up your arm to the elbow and stops there, and you let it. Very slowly, the blue flicker leans towards your white one, the way a flame leans to a bigger fire, and catches, and comes up. Gold. And more gold. His hand gets warmer in yours, and then warm, and then hot, the way it always is, and the blankets start to steam.
*set kindling +5
@rowan:tired He opens his eyes.
*if (st_rowan >= 3) and not(b_rowan_afraid) and (hurt_rowan < 2)
  *set b_rowan_afraid true
  *set st_rowan 4
  @rowan:scared He looks at you. At Noor. At the ceiling. His face, which you've seen brave and embarrassed and furious and laughing, does something you've never seen it do. It breaks.

  @rowan:scared "I thought I'd gone," he says. His voice is tiny. "When I went through. I felt it go out. Everything. All the heat. And I was so cold, and I thought, this is it, this is what it's like, and I was glad." He grips your hand so hard it hurts. "For a second. I was glad. Because it was gone and it couldn't hurt anyone any more." He's crying. "What kind of person is glad? I'm so frightened of it. All the time. I've been frightened since Tanner's Row. And I've never told anyone, because I'm the one who goes in. I'm the one who isn't frightened." He shuts his eyes. "I'm frightened all the time."

  @noor:neutral Noor, on the other side of the bed, very quietly takes her hand off his chest, and gets up, and goes to help Matron with the bedpans, and doesn't come back for a while.
  *choice
    #"I know. I've seen it. And you went through the hoop anyway. That's not the opposite of frightened. That's what brave actually is."
      *set st_rowan +1
      *set heart +5
      @rowan:hurt He opens his eyes and holds yours, with the tears running sideways into his hair. "Nobody's ever said it like that," he says. "Everyone just says I'm not scared. As if it's easy." He breathes out. "It's not easy."

      "I know."

      @rowan:warm "Yeah," he says. "You do, don't you." He doesn't let go of your hand, and he doesn't stop crying for a while, and you don't make him. When he finally does, he wipes his face on the blanket and says, thickly, "Don't tell Marcus. He'll make me captain out of pity."
    #"Then let's be frightened of it together. You don't have to carry it on your own."
      *set st_rowan +1
      *set nerve +5
      @rowan:warm He laughs, a cracked wet laugh, and wipes his face with the heel of his free hand. "Together," he says. "You'd do that. Sit around being scared with me." He looks at his hand in yours, which is hot again, too hot, and you're not letting go. "All right," he says. "All right. That sounds... yeah."

      @rowan:warm He lies back on the pillow and stares at the ceiling for a bit, breathing. "My mum's going to kill me," he says, eventually. "All four of my sisters are going to kill me. In turn. They'll have a rota."
*else
  *if b_rowan_afraid
    @rowan:tired He looks at you, and his mouth twitches. "I was scared," he says, hoarsely. "Up there. You'd have been proud of me. I was [i]terrified[/i]." Then, more quietly: "Thank you. For coming to get me. Again."
    *set st_rowan +1
  *else
    @rowan:tired He looks at you, and at Noor, and at the blankets steaming. "Did we win?" he croaks. Then, before either of you can answer: "Doesn't matter. Is the kid all right?" When you tell him yes, again, he closes his eyes and goes to sleep, holding your hand, and doesn't let go of it for an hour.

@noor:warm Later, when Rowan's dozing, Noor stands at the foot of the bed and puts two fingers on his wrist out of habit, and then looks at you across the bed, and her tired face is full of something that isn't quite relief and isn't quite anything else. "I couldn't have done that," she says. "Nobody could have done that but you." Then, lower, with a glance at the door and the crowd behind it: "Be careful. People saw what happened on that pitch. And they'll have seen you come in here and sit down, and seen him wake up."
*page_break
*comment ---------------------------------------------------------------- CH15.CUP.02
*sid CH15.CUP.02
*date 2027-02-13 16:30
*mood dusk
*place P27 glimmer_pitch_snow
*present tully saoirse familiar
The Glimmer Cup is declared void. Nobody wins. Nobody argues.

The news goes round the castle at lunch, and nobody even groans. The brass dragon is wheeled back up to the Undercroft in silence. The banners come down. Arkwright's Lamplighters walk the length of the pitch in a line, slowly, with their lamps held out in front of them like men looking for something dropped in the grass, and find nothing, and walk it again.

By half past four the pitch is empty, and the sun's going down red over the western hills, and the snow's gone pink and then blue, and the stands are dark and silent on their stilts, and the only light is the hoops, still hanging in the air at each end of the pitch, burning low. Your breath smokes. The ice creaks and settles as the cold comes down. Across the Mere, the castle windows are lighting up one by one.

A small lamp is moving along under the hoops. Mr Tully, with his stepladder and his long brass pole, taking the hoop-lanterns down one by one for the night, the way he does after every match.

You go down onto the ice. You don't entirely know why. You've been sitting with Rowan for three hours and your hand still feels cold, and you wanted air, and your feet brought you here. The grey hoop is the left-hand Larkspire one. It's still up.
*choice
  #Go and look at the grey hoop's lanterns before he takes them down.
    *set wit +5
    @tully:neutral Mr Tully's at the foot of it, unhooking the first lantern with his pole. He sees you coming, and smiles, tired. "Terrible business," he says. "Terrible. Is the lad all right? The Keeper?"

    You tell him yes. That he's awake, and warm, and asking about the first-year every ten minutes. Mr Tully nods, and nods, and says "good lad, good lad," but you're not listening to him any more. You're looking at the lantern in his hands. It's gold now, like the others. But there's something about the wick.

    "Can I see?"

    @tully:neutral He hands it to you without a thought. It's a hoop lantern: brass and paper, with a thick wick in a little well of oil. The oil should be clear and gold, like the oil in every lantern in Wrenfold. It isn't. It's grey. Thin, cloudy, silvery-grey, like water that's had ash in it, and when you lift the lantern to your face it smells of mud and reeds and standing water and something rotten underneath: a marsh, at night.

    {@e01|You've smelled it before. On the grey wick in Delphine's lantern, in October.|You've never smelled anything like it in your life, and you know, at once, that you don't like it.}

    @tully:tense When you look up, Mr Tully's face has gone the colour of the oil. He's staring at the lantern in your hands. "That's Fen oil," he says. His voice has gone strange and thin. "From Saltmarrow. Out on the Fen. They make it in the villages there, for the marsh lamps. We use it for the old boathouse lamps; it burns in the damp." He swallows. "There's no other store of it in Wrenfold. Just the one. In my shed." He takes the lantern out of your hands, very gently, and holds it against his chest. "Somebody's been in my shed," he says. "Somebody's been in my shed."
    *clue e04
    @tully:sad He turns, and goes, with the lantern held against his chest, almost running with his bad knees, up the shore path towards his cottage in the dusk. He leaves the stepladder. He leaves the other five hoops still burning.

    You stand on the ice and watch him go, and you don't know what you've just seen: an old man who's frightened because somebody's been in his shed, or an old man who's frightened for some other reason.

    You take down the other five hoops yourself, with his long brass pole, one lantern at a time, because somebody ought to and he's left them. The oil in every one of them is clear and gold.
  #Leave it. Rowan's all right. That's enough for today.
    *set heart +5
    You watch him from the edge of the ice for a while: the old man on his stepladder in the dusk, with his long brass pole, unhooking the lanterns one by one, gently, as if they're asleep. He hums to himself as he works, something tuneless and kind. He takes the grey hoop's lanterns down too, and puts them in a separate box, and carries it away up the shore path himself, before the others. You don't think anything of it. You'll remember it later.

@saoirse:guarded When you turn round, Saoirse's at the edge of the pitch, by the boathouse, with her bike.

She's got her flying leathers on still, and her goggles pushed up, and a bruise coming up on her cheekbone from where she nearly came off going through the hoop. The bike's engine is ticking over. Its headlamp makes a long yellow cone across the blue snow. There's a letter sticking out of the pocket of her jacket.
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

      @saoirse:sad She sits very still on the idling bike. The engine ticks. The last hoop-lanterns hiss. You can feel her breathing against your arms, too fast, and then slowing. Then she reaches down and turns the key, and the engine dies, and in the silence you can hear the ice settling all the way across the Mere. "Next week," she says, in a small voice. "In daylight." She leans back against you, just a little. "Pretend to read a paper. You'd be terrible at it."

      "I'd be brilliant at it."

      @saoirse:amused "You'd hold it upside down," says Saoirse. "You'd hold it upside down and stare at her over the top." She sniffs, hard, and wipes her nose on her glove. "Fine. Next week. Get off my bike."
    #Let her go. Stand at the edge of the pitch, and wait for her to come back.
      *set heart +10
      *set st_saoirse +1
      You don't say anything. You just stand there on the edge of the frozen pitch in the dusk, where she can see you, and wait.

      She goes. The bike roars off across the ice towards the far shore, headlamp bouncing. You watch the light get smaller. It's so cold. The sun goes down behind the hills and the blue goes to grey and the grey to dark, and you don't move.

      @saoirse:hurt It stops, a long way out. It sits there, a spark on the black ice, for what feels like an hour. Then it turns round, and comes back, slowly, and stops in front of you. She pulls her goggles down. Her face is wet and furious and wrecked. "You just stood there," she says. "You didn't even shout." Then she gets off the bike and walks straight into you and holds on, hard, with her face in your shoulder. "Nobody's ever stood still for me," she says. "I always made sure I went first."

      @saoirse:sad She stays like that for a long time, in the dark, with the bike ticking as it cools. "Next week," she says, into your coat. "I'll go next week. In daylight. You can come. If you want." A pause. "You'll have to stand still in a café. You're good at that, apparently."
*else
  *if b_saoirse_run
    @saoirse:warm "Mam's written again," she says, and pats the pocket. "Wants to meet. Kingsmere. I've said yes. Next month, in daylight, on the train like a normal person. You're coming. You're sitting at the next table. You promised." She grins, bruised and tired. "I'm not even running. Look at me. I'm just sitting on a bike. Standing still. Like a grown-up."
    *set st_saoirse +1

    @saoirse:warm She reaches over and turns the engine off, as if to prove it, and the headlamp fades, and the two of you sit in the blue dark on the edge of the empty pitch, with the castle windows lit across the ice, and she tells you what she's going to wear.
  *else
    @saoirse:guarded She sees you looking at the letter, and pushes it down into her pocket. "Nothing," she says. "Post." Then, when you don't say anything: "I'm going for a ride. Clear my head. Don't wait up." She goes, off across the ice, fast, with the headlamp bouncing, and you don't see her again until breakfast.

    You stand on the edge of the pitch till the headlamp's gone. Then you walk back up to the castle on your own, in the dark, with the empty hoops hanging behind you over the ice.
*journal [b]Chapter 15.[/b] The Glimmer Cup, in the snow. {@glimmer and ((house = "larkspire") or (house = "rookhallow"))|You flew as a reserve and scored. |}A Larkspire hoop went grey, and every player who flew through it guttered. Rowan blocked it with his body to save a first-year, and fell forty feet. He wasn't hollowed; you sat with him in the Infirmary and his flame came back. {@b_rowan_afraid|He told you he's frightened all the time. |}{@e04|The grey hoop's oil was Fen oil, from Saltmarrow; the only store in Wrenfold is in Mr Tully's shed. "Somebody's been in my shed," he said. |}The Cup was declared void.
*page_break
*goto_scene ch16
`);
