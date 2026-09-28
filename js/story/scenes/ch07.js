NB.scene("ch07", String.raw`
*mood day
*set ch 7
*chapter 7 An Evening Already Promised
*comment ---------------------------------------------------------------- CH07.MORNING.01
*sid CH07.MORNING.01
*date 2026-10-10 08:30
*place P13 lantern_hall
*present toby priya familiar
On Saturday morning, Toby Quill eats nothing, drinks four cups of tea, goes to the bathroom three times, and at twenty-five to nine stands up at the Heronmere table with the expression of a man walking out onto a high wire.

@toby:scared "Right," he says to you. "Right. I'm going. I'm going now. Don't look."

You look. Everyone at the Heronmere table looks. Priya Menon is at the other end of it, with her ponytail up and her violin case beside her, eating toast and reading a letter from home. Toby walks down the bench towards her like it's the length of a runway.
*choice
  #Scribble a line on your napkin and slide it into his hand as he goes. Something he can read off if his mind goes blank.
    *set fr_toby +1
    *set wit +5
    You grab a napkin and a pen and write, fast: [i]Would you like to float a lantern with me at Emberfall?[/i] And underneath, smaller: [i]Breathe out for six.[/i] You push it into his hand as he passes. He looks down at it, and back at you, and you see him breathe out for six.
  #Get up and walk down the bench beside him, as far as the sugar bowl.
    *set fr_toby +1
    *set heart +5
    You get up and walk down the bench beside him, as if you both just happened to need the sugar. At the sugar bowl, you stop. He keeps going. He looks back at you once, like someone looking back at the shore.
  #Let him do it on his own. He needs to know he can.
    *set nerve +5
    You stay where you are. He needs to know he can. You watch him go, and you breathe out for six on his behalf.

@toby:scared "Hello," he says to Priya. "Hi. Hello. Morning. It's me. Toby. I've got your pencil. I mean, I've still got your pencil, from Herbwork, I didn't mean I've [i]brought[/i] it, I mean, it's safe, I've been keeping it safe, not in a weird way, in a normal pencil way..."

@priya:warm Priya puts down her letter. She looks up at him with her bright dark eyes, and her mouth twitches at the corner.

@toby:scared "Would you like to float a lantern with me at Emberfall?" says Toby, all in one breath, very loudly, and the whole Heronmere table goes silent.

@priya:warm Priya Menon looks at him for a long moment. Then she smiles, the smile she smiled across the Hall on your first Friday, and says, "I was going to ask you. I've been trying to ask you for a week. You kept running away."

@toby:laugh Toby opens his mouth. Nothing comes out. He closes it. Then he sits down very suddenly on the bench beside her, and she laughs, and hands him a piece of toast, and he eats it, and the whole Heronmere table bursts into applause.

He comes back to you twenty minutes later floating about six inches off the ground. You're not sure it's a figure of speech. {fam_name} watches his feet suspiciously.

The day goes by in a blur of sun and wind. The castle's full of the usual Saturday noise. But by six o'clock the sky over the Mere has turned red and gold, and you're standing at the bottom of the main stair with your coat on, and there are three places you could be tonight, and you promised one of them.
*choice
  #Go to the Glimmer Pitch. The match starts at seven, under the lanterns.{@promise7 = "rowan"| You promised Rowan.|}
    *set ch07_way "match"
    *if promise7 = "rowan"
      *set kept7 true
    *goto match
  #Go down to the Undercroft. The party starts at ten, and there's a sofa that flies.{@promise7 = "saoirse"| You promised Saoirse.|}
    *set ch07_way "party"
    *if promise7 = "saoirse"
      *set kept7 true
    *goto party
  #Go up to the Infirmary. The night shift starts at eight, and it's twelve hours of quiet.{@promise7 = "noor"| You promised Noor.|}
    *set ch07_way "shift"
    *if promise7 = "noor"
      *set kept7 true
    *goto shift
*comment ---------------------------------------------------------------- CH07.MATCH.01
*label match
*sid CH07.MATCH.01
*date 2026-10-10 19:00
*mood dusk
*place P27 glimmer_pitch
*present rowan marcus okoro saoirse familiar
*if cas_house = "rookhallow"
  *present rowan marcus okoro saoirse cas familiar
The first Glimmer match of the year is always played at dusk, under the lanterns, and it's the most beautiful thing you've ever seen.

The stands on their stilts over the shallows are packed and roaring, flags and scarves in every house colour, flasks and blankets and people on each other's shoulders. The sun's going down red behind the western hills and the Mere's gone to copper under it. And over the pitch, as the light fails, lanterns come drifting out from the castle by the hundred, gold and rose and green and blue, and hang in the air over the water in a great glowing roof, so that the whole match is played in a cathedral of light.

At each end of the pitch hang the three hoops: great rings of lanterns in the air, twenty feet across. Six players a side, on brooms: three Chasers who carry and throw the Glim, two Harriers with long hooked sticks who knock it out of other people's hands, and a Keeper, who guards the hoops. The Glim is a ball of white light the size of a grapefruit, and it's alive, sort of; it pulls towards the nearest hoop like a dog on a lead, and it has to be wrestled. When it goes through a hoop, the hoop flares that house's colour and the whole crowd screams. And the match doesn't stop at a time or a score; it stops when the hoop lanterns burn down, about an hour, and whoever's ahead when the last one gutters wins.

@marcus:amused Marcus Oduya does a lap of honour before the start, standing up on his broom, which is illegal, and nobody stops him.

@rowan:tense And in front of the Larkspire hoops, big and still in gold and rose, sitting his broom as if it's a fire engine, is Rowan. He's looking at the stands. Looking for someone.
*if promise7 = "rowan"
  When he sees you, front row, Larkspire end, just where you said, his whole big frame loosens, like a knot coming undone. He raises one gauntleted hand. You raise yours back.
*else
  When he sees you, he looks surprised. Then pleased. He raises one gauntleted hand, uncertainly, as if he's not sure it's you. You raise yours back.

@okoro:amused Coach Okoro, standing on the water in the middle of the pitch, blows his whistle and throws the Glim straight up, and twelve brooms go for it at once.

It's chaos. It's glorious. Saoirse is chasing for Rookhallow, upside down half the time, screaming with laughter, and she scores in the first minute with a throw from behind her own back that makes Coach Okoro blow his whistle out of sheer admiration.{@cas_house = "rookhallow"| Casimir Drummond is Rookhallow's other Chaser, cold and fast and perfect, and he scores twice without changing his expression.|} Marcus scores for Larkspire. Rookhallow score again. The Harriers crack their sticks together over your head. The lanterns overhead brighten every time a hoop flares, as if they're cheering too.

And Rowan keeps goal like a man holding a door shut in a fire. He's not elegant. He's not fast. But he's big, and brave, and when the Glim comes at him he doesn't flinch, he just gets his body in front of it and holds on. Three times. Four. Once, the Glim hits him so hard it knocks him off his broom, and he hangs off it by one hand, twenty feet over the water, and the crowd screams, and he swings back up and throws the Glim back out to Marcus as if nothing's happened.

With a minute left on the last lantern, it's Larkspire fifty, Rookhallow forty, and Saoirse has the Glim, alone, in front of Rowan, and the whole Mere goes quiet.
*choice
  #Stand up and shout his name.
    *set nerve +5
    *set st_rowan +1
    You're on your feet before you know it. "[i]Rowan![/i]"

    He hears you. You see him hear you: his head turns, just a fraction, and then back to Saoirse, and the shimmer comes off him in a wave that makes the air over the hoops ripple like water. Saoirse throws. Rowan doesn't dive. He just opens his arms, and the Glim goes into them like a bird into a nest, and he folds round it and holds on.
  #Shout for Saoirse. She's brilliant and she deserves it.
    *set st_saoirse +1
    You're on your feet. "[i]Go on, Saoirse![/i]"

    She hears you. She grins, the chipped-tooth grin, and throws, a beautiful looping throw with spin on it, and Rowan dives, full stretch off his broom into thin air, and gets one hand to it, and knocks it wide. He falls. Four Larkspire players catch him. The Glim bounces off the rim of the hoop and drops into the Mere, and fizzes.
  #Don't shout. Just watch. Hold your breath with everyone else.
    *set heart +5
    You hold your breath. Everyone does: two thousand people on stilts over a lake, silent.

    Saoirse throws. Rowan moves, just a little, not a dive, just a lean, and the Glim hits him square in the chest and he closes his arms round it and it's over.

The last lantern on the hoops gutters, and goes out.

Larkspire fifty. Rookhallow forty.

The noise is enormous. The Larkspire end of the stands collapses onto the pitch; people are flying out onto the water on brooms, and Marcus is doing another lap standing up, and Saoirse, who's lost, is laughing so hard she has to be held onto her broom by her own team. Above it all, the lantern-roof flares gold, all at once, from end to end.
*points larkspire +20
*points rookhallow +5
*comment ---------------------------------------------------------------- CH07.MATCH.02
*sid CH07.MATCH.02
*date 2026-10-10 21:30
*place P27 glimmer_pitch
*present rowan familiar
Much later, when the stands have emptied and the lanterns have drifted home and the Mere's gone black and quiet again, you find Rowan sitting on his own at the top of the Larkspire stand, still in his kit, with his gauntlets off beside him, looking at the water.

@rowan:warm "You came," he says, when you sit down next to him. His voice is hoarse from shouting. "{@kept7|You said you would. You did.|You did come. I didn't think you would, after... you didn't say you would, I mean.}"

He's steaming very slightly in the cold. It's the first time you've seen him sit still since the match.
*if st_rowan >= 3
  @rowan:tense He doesn't say anything for a long time. Then he says, to the water: "Do you want to know? About the fire?"

  "Only if you want to tell me."

  @rowan:tense "Tanner's Row," he says. "In Kingsmere. June. Terraced house, top floor gone up, family out on the pavement in their nightclothes, the mum screaming that her little girl was still inside. Seven years old. Stair had gone. We had the ladder coming, but it was two minutes out, and she didn't have two minutes." He looks at his hands. "So I went in. Through the front. Through it. It was all fire, the whole hall, floor to ceiling, and I walked through it like it was rain. It didn't touch me. It didn't even singe my hair. I went up the stairs that weren't there, and got her out of the wardrobe she was hiding in, and walked back down with her through all of it, and she didn't get a mark on her either. Like it was scared of me."

  @rowan:hurt "They gave me a commendation." He laughs, not really a laugh. "I couldn't go back. I couldn't stop being warm. I'd wake up with the sheets smoking. I held my sister's baby at the christening and he started crying because I was too hot." His big hands are shaking. "It's in me. The fire. It came into me in that house and it never went out. And one day it's going to get out, and it's going to be somebody I love, and I won't be able to walk it back."

  You look at him with the flame-sight: the bonfire, huge and red-gold and frightened, far too big for the man it's in.
  *set b_rowan_fire true
  *set st_rowan 4
  *choice
    #"It didn't hurt that little girl. It could have. It didn't. It went where you told it."
      *set heart +5
      @rowan:warm He turns his head and looks at you. For a long moment he doesn't say anything. Then: "Nobody's said that," he says. "Everyone says [i]you were so brave[/i]. Nobody's said it did what I told it." He breathes out for six. You watch the bonfire settle, a little, like a dog that's been told it's good.
    #Put your hand on his arm, the way you did in the Warding Hall, and steady it.
      *set kindling +5
      You put your hand on his arm. He's hot as a kettle. You think [i]steady[/i], and you feel the bonfire hear you, and settle, and burn low and red, like coals in a grate on a winter night.

      @rowan:warm "There," he says quietly, looking at your hand. "That. Whatever that is. That's the only time it's quiet."
    #Don't say anything. Just stay.
      *set nerve +5
      You don't say anything. You just stay, next to him, at the top of the empty stand, while the stars come out over the Mere. After a while he leans, very slightly, so that his shoulder's against yours. He's warm. He's so warm. You don't move.
*else
  @rowan:amused He talks about his family instead: four sisters, all older, all loud, all furious that he walked into a burning building without telling them first. His mum sends parcels of flapjack. His dad sends newspaper cuttings about fire safety. He misses them so much it's a physical thing, like a stitch. "I'm glad you came," he says again, at the end. "Really."
  *set st_rowan +1
*goto late
*comment ---------------------------------------------------------------- CH07.PARTY.01
*label party
*sid CH07.PARTY.01
*date 2026-10-10 22:00
*mood night
*place P17 rookhallow
*present saoirse hamish familiar
The Rookhallow Undercroft on a Saturday night is the loudest place you've ever been, and you once worked a hen party at {@job = "cook"|the Pie & Pint|a pub in Wrexley} on the night of a cup final.

There's music coming out of a gramophone that's playing itself, and changing its own records, and turning up its own volume every time somebody turns it down. There are fairy lights strung between the forges, except they aren't fairy lights, they're jars of the same pulsing golden things you saw in the wheelbarrow on Lamplight Row. There's a cauldron of something hot and spiced and orange that Hamish Galbraith says is punch and Mina Achebe says is a crime. There are forty people from every house, dancing badly on the warm flagstones, and a ferret wearing a party hat, and a brass beetle flying ticking circles round the beams.

*meet hamish
@hamish:amused "Our guest of honour!" roars Hamish, spotting you, and presses a mug of punch into your hand. "Welcome to the finest party this castle has seen since the Great Custard Incident of 1987! Mind your own!"

@saoirse:laugh "You came!" Saoirse erupts out of the crowd in a flying jacket with the sleeves torn off and goggles on her forehead, and grabs both your hands. "{@kept7|You said you would and you did and I love you, come here, come and see her|You're here! I didn't know you'd come! Come and see her}!"

"Her" is a sofa.

It's a big old red leather Chesterfield, cracked and buttoned, that Saoirse found in a cellar. She's fitted it with six broomsticks, lashed underneath like the legs of a spider, and a car steering wheel on a pole, and two headlamps from what you strongly suspect was Professor Bassani's bicycle, and on the back, painted in wobbly copper letters, [i]THE CHESTERFIELD. RESPECT HER.[/i]

@saoirse:amused "She flies," says Saoirse, with enormous pride. "I've tested her. Well. I've tested her in the Undercroft. At a height of about a foot. Tonight's her maiden voyage." She climbs into the driver's seat and pats the cushion beside her. "Co-pilot. You're in charge of the brakes."

"Where are the brakes?"

@saoirse:laugh "That's the spirit," says Saoirse, and pulls a lever, and the Chesterfield leaps into the air.
*choice
  #Grab the lever marked HEIGHT? and take her out through the kitchens and up into the Hall.
    *set nerve +10
    *if (st_saoirse >= 2) and not(b_saoirse_build)
      *set b_saoirse_build true
      *set st_saoirse 3
    *else
      *set st_saoirse +1
    You grab the lever marked [i]HEIGHT?[/i] and haul on it, and the Chesterfield goes up through the Undercroft's arched ceiling-hatch into the kitchens at thirty miles an hour, over Mrs Pettigrew's table, where Mrs Pettigrew's goat looks up from a cabbage with an expression of profound disbelief, through the double doors, up the back stairs, and out into the Lantern Hall.

    It's empty. It's midnight. And every one of the ten thousand lanterns turns to watch you as the Chesterfield comes screaming out of the kitchen passage and up, and up, into the dark under the roof that nobody's ever seen, with Saoirse whooping and you holding the steering wheel's pole with both hands and laughing so hard you can't breathe.

    You go all the way up. Higher than the roosts. Higher than any lantern. Up into the dark where the roof should be. And there isn't a roof. There's sky: real sky, stars, a cold wind, and the whole castle and the black Mere below you, and the lanterns rising round you like sparks from a bonfire.

    @saoirse:warm "Oh," says Saoirse, very quietly, for once, looking down. "Oh, would you [i]look[/i] at that."

    You bring her down, eventually, very carefully, into the middle of the Undercroft party, to a cheer that shakes the forges. Neither of you mentions that you broke about eleven rules. Professor Bassani, the next morning, will mention it for you, twice.
    *points -10
    *set detentions +1
  #Talk her into a gentle loop of the Undercroft first. At a foot off the ground. Safety first.
    *set wit +5
    *set st_saoirse +1
    "Once round the room," you say. "At a foot. Then we see."

    @saoirse:amused "Coward," says Saoirse, fondly. But she takes the Chesterfield once round the Undercroft at a foot off the flagstones, very slowly, to tremendous applause, weaving between the forges and the dancers, while the gramophone plays something triumphant. Then twice. Then, when nobody's looking, you both nod at the same moment, and she takes it once round at ten feet, and you both scream.
*comment ---------------------------------------------------------------- CH07.PARTY.02
*sid CH07.PARTY.02
*date 2026-10-11 01:30
*present saoirse familiar
By half past one the party's thinning out. The gramophone's playing something slow and scratchy to itself. The punch is gone. Hamish is asleep under a workbench with his ferret on his chest.

@saoirse:neutral You find Saoirse sitting on the floor by the big forge, with her back against the warm stone and her knees drawn up and her goggles in her lap, looking into the fire. She's not doing anything. You realise you've never seen her not doing anything before.

"You all right?"

@saoirse:amused "Yeah." She pats the floor beside her. "Just stopped. I don't, usually. Stop." She laughs a bit. "You noticed."
*if st_saoirse >= 3
  You sit down beside her. The forge is warm on your faces. The gramophone scratches.

  @saoirse:tense "My mam left when I was seven," she says, after a long time, still looking at the fire. "Just went. Tuesday. Packed a bag while I was at school. Dad was all right, he was lovely, he's still lovely, but..." She turns the goggles over in her hands. "I think I decided, that day, that if I kept moving, I'd never be the one left standing still when somebody went. So I never stop. Bikes, engines, the sofa. Twelve projects on the go and I'll never finish one. Twelve jobs in ten years. Never a..." She stops. "Anyone. Long enough to leave."

  @saoirse:hurt "Sorry," she says. "Punch talking. Ignore me."
  *set b_saoirse_still true
  *set st_saoirse 4
  *choice
    #"I'm not going to ignore you. And I'm not going anywhere. I'll sit here till you've finished stopping."
      *set heart +5
      @saoirse:warm She looks at you. The fire's in her grey-green eyes. "You're a menace," she says, softly. And she leans her head back against the warm stone, and closes her eyes, and stays still. For a whole hour. You sit next to her the whole time, and neither of you says anything, and it's the best hour of the week.
    #"Finish one. The sofa. Finish the sofa. Properly. I'll help."
      *set wit +5
      @saoirse:laugh She laughs, surprised, a real laugh. "The sofa's finished. The sofa [i]flies[/i]."

      "It hasn't got brakes."

      @saoirse:warm She looks at you for a long moment. "Brakes," she says. "All right. Brakes. You're on." And she holds out her oily hand, and you shake it, and it feels like signing something.
*else
  You sit down beside her anyway, and look at the fire, and let her not talk. After a while she puts her head on your shoulder, for about ten seconds, and then gets up and says she's going to wake Hamish up by putting his ferret in his beard, and does.
  *set st_saoirse +1
*goto late
*comment ---------------------------------------------------------------- CH07.SHIFT.01
*label shift
*sid CH07.SHIFT.01
*date 2026-10-10 20:00
*mood night
*place P24 infirmary
*present noor holloway familiar
The Infirmary at night is a different place.

The long white room is dim, the lamps turned down to a glow, the fire banked. The bottles on the shelves glow like jars of fireflies. There are five beds occupied: two second-years with flame-burns on their hands from a Turning lesson that went wrong, a first-year from Owlcombe who's grown the ears of a hare and is being very brave about it, a Larkspire boy with a broken arm from Glimmer practice, and, in the bed at the very end, behind a screen, nobody. Delphine's bed. She's gone to St Ide's. Nobody's taken the sheets off.

@holloway:neutral "Eight till eight," says Matron Holloway, putting on her coat. "Obs every two hours, the chart's on the desk, the potions are labelled, don't give the hare-boy anything with carrots in, he's sensitive about it. Wake me if anything's on fire." She looks at Noor, and then at you, and her small shrewd eyes soften, just slightly. "{@kept7|Good. She said you'd come.|Well. You're here. Good.}" And she goes to bed.

@noor:neutral Noor's already at the desk, in her apron, with the chart. {@kept7|She looks up when you come in, and something in her face that's been tight all week lets go, just a little. "You came," she says. As if she'd been bracing for you not to.|She looks up when you come in, surprised. "You came," she says. "I didn't think... you didn't say you would." She looks at you a moment longer. "Thank you."}

It's the quietest twelve hours of your life, and the hardest.

You learn how to take a pulse without looking at a watch. You learn how to change a dressing on a burn without the patient noticing. You learn how to walk down a ward in the dark without making a sound. You learn that the hardest thing about a night shift isn't the work, it's the quiet in between: sitting at the desk under the one lamp, listening to five people breathing, waiting for something to go wrong.

At eleven, something does. The Owlcombe boy with the hare's ears wakes up screaming. [i]Humming,[/i] he's shouting, [i]I can hear humming, it's in the walls, it's coming[/i]...
*choice
  #Go to him with Noor. Do what she does.
    *set heart +5
    *if (st_noor >= 2) and not(b_noor_shift)
      *set b_noor_shift true
      *set st_noor 3
    *else
      *set st_noor +1
    You go with her. She sits on the edge of his bed and takes his hand and talks to him low and steady, the way you'd talk to a horse in a storm, and you sit on the other side and hold his other hand, and after a while you realise you're breathing in for four and out for six, and so is he, and so is she.

    It was a nightmare. There's no humming. There's just the lanterns in the corridor, gold and sleepy, and the fire, and the three of you. He goes back to sleep holding both your hands.

    @noor:warm "You're good at this," says Noor, afterwards, at the desk, very quietly. "The quiet bit. Most people can't do the quiet bit."
  #Check the walls. Use the flame-sight. Make sure it really is a nightmare.
    *set kindling +5
    *set st_noor +1
    While Noor sits with him, you stand in the middle of the ward and close your eyes and look, through the walls, with the flame-sight. Five sleeping flames in the beds. Noor's, bright and steady and tired, a lamp that's been burning all night. Matron's, asleep next door. The lanterns in the corridor, gold, their threads going down, down, to the great glow under the castle, all of them whole.

    No humming. No holes. It's a nightmare.

    "It's all right," you tell the hare-boy, and you're sure enough of it that he believes you.
*comment ---------------------------------------------------------------- CH07.SHIFT.02
*sid CH07.SHIFT.02
*date 2026-10-11 03:00
*present noor familiar
At three o'clock in the morning, Noor falls asleep mid-sentence.

She's sitting at the desk with the chart, telling you about the worst night she ever had in A&E, a Saturday in December with a bus crash, and she stops halfway through a word and her head goes down onto her folded arms on the chart, and she's gone. Just like that. You've seen people fall asleep like that before, at the end of doubles at {@job = "nurse"|the hospital|work}. It's what happens when someone's been awake for a week and has finally, for one second, felt safe.

The three o'clock obs are due. The chart's under her arms.
*if st_noor >= 3
  *choice
    #Slide the chart out from under her arms, very carefully, and do the three o'clock round yourself. Let her sleep.
      *set b_noor_carry true
      *set st_noor 4
      *set heart +5
      You slide the chart out from under her arms, a millimetre at a time. She doesn't stir. You put your own coat round her shoulders. And you do the three o'clock round on your own, bed by bed, the way she showed you: pulse, breathing, temperature, dressings, a sip of water for the Larkspire boy, a check on the hare-boy's ears. You write it all on the chart in your best handwriting. It takes forty minutes. When you come back to the desk, she's still asleep.

      You sit down across from her and do the five o'clock round too, when it comes. And the seven o'clock.

      @noor:tense She wakes at half past seven with the chart under her face and your coat round her and the whole night done, and she's furious. "You should have woken me," she says. "That's not your job. That's my job. I'm the one who..."

      Then she reads the chart. All three rounds. In your best handwriting.

      @noor:hurt She doesn't say anything for a long time. Then she puts her face in her hands. "Nobody's ever done that," she says, through her fingers. "Nobody. Ever. Carried a shift for me." When she takes her hands away, her eyes are wet. "I don't know what to do with it."

      "You don't have to do anything with it," you say. "You just have to have had some sleep."

      @noor:warm Noor Haddad laughs, wetly, and takes your coat off her shoulders, and holds it in her lap for a while, and doesn't give it back.
    #Wake her gently. She'd want to do it herself.
      *set st_noor +1
      You touch her shoulder. She's awake instantly, the way nurses wake, already reaching for the chart. "Obs," she says. "Three o'clock. Sorry." And she does them, and you help, and neither of you mentions it. But afterwards she makes you both a cup of tea, and sits beside you instead of across, and at five o'clock you both fall asleep for ten minutes with your heads together on the desk.
*else
  You let her sleep, and do the three o'clock round with her careful notes beside you, and wake her at half past four so she can do the next one herself. She's cross with you for about a minute. Then she makes you tea.
  *set st_noor +1
*goto late
*comment ---------------------------------------------------------------- CH07.LATE.01
*label late
*sid CH07.LATE.01
*date 2026-10-11 10:30
*mood day
*place P13 lantern_hall
*present toby familiar
Sunday morning in the Lantern Hall is sleepy and golden and smells of bacon.
*if kept7
  You kept your promise. You find out, over the course of the morning, how much that mattered. It's in small things.
  *if promise7 = "rowan"
    *present toby rowan familiar
    @rowan:warm Rowan sits down next to you at breakfast without asking, as if it's where he's always sat, and puts two of his mum's flapjacks on your plate, and doesn't say anything about it, and doesn't need to.
    *set st_rowan +1
  *if promise7 = "saoirse"
    *present toby saoirse familiar
    @saoirse:amused Saoirse comes past the table and ruffles your hair and says "co-pilot" in passing, like it's your name now, and keeps walking.
    *set st_saoirse +1
  *if promise7 = "noor"
    *present toby noor familiar
    @noor:warm Noor, who's slept for eleven hours, comes into the Hall looking like a different person, and sits down across from you with a plate piled high with eggs, and eats all of it, and smiles at you over the top of her tea.
    *set st_noor +1
*else
  You didn't go where you promised. You find out, over the course of the morning, what that cost. It's in small things.
  *if promise7 = "rowan"
    *present toby rowan familiar
    @rowan:hurt Rowan says "morning" to you at breakfast, perfectly friendly, and sits at the other end of the Larkspire table. He looked for you in the stands. You know he did. He doesn't mention it. That's worse.
    *set hurt_rowan +1
  *if promise7 = "saoirse"
    *present toby saoirse familiar
    @saoirse:hurt Saoirse waves at you across the Hall, cheerfully, too cheerfully, and doesn't come over. Hamish, passing, mutters that she took the sofa up on her own in the end, and nearly went into the Mere.
    *set hurt_saoirse +1
  *if promise7 = "noor"
    *present toby noor familiar
    @noor:tired Noor isn't at breakfast. Matron tells you, in passing, not unkindly, that she sat up alone all night, and went to bed at eight without eating, and that she'd said you might come. "She didn't expect you to," says Matron. "That's the bit that'd worry me, if I were you."
    *set hurt_noor +1

@toby:laugh And Toby Quill comes into the Hall at ten past eleven, late, with his cardigan on inside out and a smile on his face so wide it looks like it hurts, and sits down beside you, and says: "We went for a walk. Me and Priya. Round the Mere. Last night. For three hours." He puts his head down on the table. "She held my hand. For [i]three hours.[/i]"

"How was it?"

@toby:warm He lifts his head. "My hand's still warm," he says, in wonder, and looks at it, as if it belongs to someone luckier. And then, because he's Toby, he looks up at you, suddenly anxious. "How was yours? Your night? Was it good? Tell me everything."

You tell him. Above you, the lanterns drift and hum, warm and gold, and it's Sunday, and nobody's been hollowed this week, and for one morning, everything's all right.
*journal [b]Chapter 7.[/b] Toby asked Priya to float a lantern with him at Emberfall. She said she'd been trying to ask him for a week. {@ch07_way = "match"|You watched Larkspire beat Rookhallow under the lanterns, with Rowan in goal.|}{@ch07_way = "party"|You co-piloted Saoirse's flying sofa, the Chesterfield, at the Undercroft party.|}{@ch07_way = "shift"|You sat the night shift in the Infirmary with Noor.|} {@kept7|You kept your promise.|You broke your promise, and somebody noticed.}
*page_break
*goto_scene ch08
`);
