NB.scene("ch17", String.raw`
*mood night
*set ch 17
*chapter 17 The Quiet
*comment ---------------------------------------------------------------- CH17.EVE.01
*sid CH17.EVE.01
*date 2027-03-05 20:00
*place P16 heronmere
*present toby priya familiar
The first Friday in March is mild and wet, and the snow's going at last, and the Mere is breaking up into grey plates of ice that knock together in the dark like bells, and Toby has baked a cake.

@toby:laugh "It didn't catch fire," he says. He's standing in the middle of the Heronmere cloister holding it out in front of him on a plate like a man holding a baby he's been told is his. "It didn't catch fire. Look at it. It's a cake. It's a Victoria sponge. It's [i]risen[/i]. I've been trying since September. Every single thing I've baked since September has caught fire, and this didn't." His round face is pink with joy. "I did it in the kitchens. Mrs Pettigrew let me. I held the flame down the whole time, the way you showed me, and it didn't flare once, and look, [i]look[/i]."

The Heronmere cloister is half underwater: the lake laps against the lower arches, and the green light comes up through the windows set below the waterline, and at night, with the lamps lit, it's like sitting at the bottom of a pond in a dream. Toby's familiar, a big brown hare called Custard, is asleep on the warm stones by the fire with her ears flat. Priya is curled up in the window seat with her feet tucked under her, watching Toby with a face so soft it's almost unbearable.

@priya:warm "He's been talking about it for three days," she says to you. "He's been practising on scones. The scones all caught fire. Mrs Pettigrew's eyebrows have only just grown back."

You eat the cake. It's the best cake you've ever eaten. You tell him so, and he goes pinker, and has two slices himself, and gets jam on his jumper.
*if candle = "toby"
  On the mantelpiece, in a jam jar, your white Candlewake candle is still burning. It's been burning for a month. He hasn't let it go out once.

@toby:neutral Later, when the fire's burning down and Priya's asleep in the window seat, Toby pulls a folded piece of paper out of his back pocket and smooths it out on his knee. It's music. A copy, in Imogen's precise pencil hand, of the first voice of the Wren's Song. The wren's line.

@toby:shy "Imogen's been giving it out," he says. "To anybody who wants it. She says the more people know it, the better." He hums a bit. Flat. Off. Nowhere near. "I'm terrible. I've been practising in the bath. Priya says it sounds like a goose being sat on." He folds it up again, carefully. "But I thought, after Thimble Cross... if they ever come here. Somebody should know it. Even if they're terrible."

He looks at you in the green lamplight. His round face is serious for once.

@toby:neutral "It's going to be all right," he says. "Isn't it. At the end. Whatever happens." And then, before you can answer, he grins. "Course it is. You're here."
*choice
  #"Course it is. Eat another slice of your cake."
    *set fr_toby +1
    @toby:laugh He does. He gets jam on his jumper again. It's the last thing you'll remember clearly about that night, before everything: Toby Quill, laughing, with jam on his jumper and a sleeping hare at his feet, in the green light at the bottom of the lake.
  #"Toby. If they come. Don't stand in front. Promise me."
    *set fr_toby +1
    @toby:neutral He looks at you for a long moment. "Can't promise that," he says, gently. "You'd not keep it either." He puts the music back in his pocket. "Rowan's rubbing off on me." And then he laughs, and gets jam on his jumper, and it's the last thing you'll remember clearly about that night, before everything: Toby Quill, laughing, with jam on his jumper and a sleeping hare at his feet, in the green light at the bottom of the lake.
*page_break
*comment ---------------------------------------------------------------- CH17.QUIET.01
*sid CH17.QUIET.01
*date 2027-03-05 23:30
*place P32 corridor_night
*present familiar
You wake up because {fam_name} is standing on your chest.

Not scratching. Not calling. Standing, rigid, with every hair or feather on end, staring at the door. And the room is grey. The lantern that always burns low by the door all night, gold, is grey. The fire in the grate is grey. The strip of light under the door is grey.

And the walls are humming.

Not far away. Not the faint hum you heard in September, deep in the stone, that nobody else could hear. Close. Inside. In the corridor outside your door, and the corridor beyond that, and up the stairs and down them, everywhere at once, low and long and lonely, so loud you feel it in your teeth, in your ribs, in the place where your flame is.

They're inside. The Grey Choir is inside Wrenfold.

You're in the corridor before you've properly got your boots on. Doors are opening all down the passage, faces looking out, grey-lit, frightened. Somewhere far below, a bell is ringing, the great bell in the gatehouse, over and over, and nobody's ever heard it ring before. Somewhere else, someone's screaming. And under it all, the hum, from everywhere, from inside the walls, from inside the lanterns, from inside the stone.
*if (st_rowan >= 3) and (hurt_rowan < 2)
  *present rowan
  @rowan:tense Rowan comes round the corner at a run, in a Larkspire T-shirt and bare feet, with his hands blazing orange, lighting the corridor like a torch. The grey shrinks back from him. "Heronmere," he gasps. "They're at Heronmere. The lake door's open. Go. I've got the Larkspire stair." And he's gone.
*if (st_saoirse >= 3) and (hurt_saoirse < 2)
  *present saoirse
  @saoirse:scared Saoirse comes past you going the other way, towards the Undercroft, with a wrench in one hand and her wand in the other and her face white. "They're coming up through the lake cloister," she shouts. "Heronmere! Somebody get to Heronmere!"
*if (st_cas >= 3) and (hurt_cas < 2)
  *present cas
  @cas:tense Cas is on the landing, in a dressing gown like a duke's, standing in front of a knot of crying first-years with his wand up and the most frightening expression you've ever seen on a human face. "Go," he says, when he sees you. "I've got these. [i]Go[/i]."

You know where you're going. You knew before you were awake.

Heronmere. Toby.
*page_break
*comment ---------------------------------------------------------------- CH17.QUIET.02
*sid CH17.QUIET.02
*date 2027-03-05 23:45
*place P16 heronmere
*present toby priya corliss familiar
You run.

Down the east stair, three at a time. Along the corridor behind the kitchens. Down the long slope to the lake cloister, where the passage goes under the water and the windows go green. Except they're not green. They're grey. And the humming gets louder with every step, until you're running through it like running through deep water.

The lake door is open. The big iron door at the end of the Heronmere cloister, the one that opens straight onto the Mere, the one that's been locked and warded for four hundred years, is standing open, and the grey water's lapping in over the threshold, and the cold's coming in with it, and the hum.

And in the middle of the cloister, in the grey light, there are eight of them. Grey robes. Hoods. And at the front, bare-headed, with her shaved head and her closed mouth, the Hush.

And between them and a huddle of Heronmere first-years in the corner by the fireplace, with Priya on the floor at the back of the huddle, holding them, stands Toby Quill.

@toby:scared He's in his pyjamas. He's got jam on the front of them still. He's got his wand out, and it's shaking so badly you can see it from across the cloister. Custard, the big brown hare, is pressed against his legs. And he's singing.

The wren's line. The first voice. Up, and round, and back down, like a bird going round a chimney. Off-key. Flat. Wavering. Like a goose being sat on.

And the Choir is standing still.
*snapshot toby

It's working. It's working a little. He's holding them, the way Odile held them in the high street: eight of them, just standing there, humming, unable to take the last step, because one terrible off-key voice is singing the wren's line in their faces. The first-years are crawling behind him, one by one, along the wall, towards the passage, towards you. Priya's pushing them. Two gone. Three.

@corliss:neutral The Hush lifts her bare grey hand. The eight hum together, one note, low and long and enormous.

@toby:scared And Toby's voice staggers. You hear it. It goes thin. And he sees you, in the doorway, and his eyes go wide, and he doesn't stop singing, but with his free hand he points: [i]them. Get them. The kids.[/i]
*choice
  #Sing with him. Two voices. Like Nana. Like the kitchen.
    *set nerve +10
    *set heart +5
    You sing. You're across the cloister, beside him, shoulder to shoulder, and you sing the wren's line with him, and for four bars, five, two voices, the grey light shudders, and the Choir's hum breaks and wavers and can't find the gap, and the last of the first-years are out into the passage, and Priya's up, and pulling at Toby's arm.

    But it's the same line. The same voice. You're both singing the wren's line, the first voice; there's nobody singing the underneath. Two people singing the same part aren't two voices. They're one voice, twice. And the Hush knows it. You see her know it.

    She turns the whole Choir on Toby. Not you. Toby.
  #Get the first-years out. That's what he's asking. Do what he's asking.
    *set nerve +10
    *set fr_priya +1
    You do what he's asking. You go along the wall, low, under the hum, and grab first-years by their collars, their sleeves, their hands, and push them out into the passage, one, two, three, and shout at them to run, and they run. Priya comes last, stumbling, grey-faced, with Custard the hare in her arms, and you shove her out after them.

    And you turn round, and Toby is on his own.
  #Reach for his flame. Hold it. Hold it the way you held Nana's, Odile's, Rowan's.
    *set kindling +10
    *set chill +1
    You reach. You find him: Toby's flame, gold and warm and flickering, and eight grey threads pulling at it. You get round it. You hold. And it's not like Odile's, or Rowan's. It's not one thread, or two. It's eight, and the Hush's, and they've been waiting, and they're ready, and they don't slide off. They pull. And you hold, and they pull, and the cold comes up your arms to your shoulders, and you hold, and you feel your own flame start to go grey at the edges, and you hold.

    @toby:scared "Let go," says Toby. He's still singing, and he's saying it at the same time, somehow, in the gap. "Let go. They'll take you too. [i]Let go.[/i]"

It isn't enough.

You'll try to tell yourself, for months, that there was something else you could have done. There wasn't. Late flames in their Burning Year can be taken whole, in one song. That's what the Choir does. That's all it does. And eight of them, and the Hush, all singing one note at one boy in his pyjamas singing the wren's line off-key, is one song.

You hear his voice go. Not stop. Go. Thinner, and thinner, and then the tune going on for two more notes in your own head, because you know how it goes.

And then silence.

The Choir turns, and walks out through the lake door into the Mere, into the dark, grey robes going into the grey water up to their knees, their waists, their shoulders, and under, without a ripple, and gone. The door swings in the wind off the water.

The lamps come back. Green. The green light at the bottom of the lake.

@toby:hollowed Toby Quill is standing in the middle of the Heronmere cloister in his pyjamas, with jam on them, with his wand hanging from his fingers. He's grey. He turns round, slowly, and looks at you, with eyes the colour of fog, and smiles politely.

@toby:hollowed "Hello," he says. "Sorry. Do I know you?"

There's a hole in him. Where the cake was. Where the jam and the pink face and [i]course it is, you're here[/i] was. You put your hands on him and look and it's gone, all of it, not guttered, not low, gone; not even a spark to hold. You can't. Not tonight. Not like this.

Somewhere up above, through the stone, you hear the east stair. Shouting. And the hum, again, still, more of them.
*page_break
*comment ---------------------------------------------------------------- CH17.QUIET.03
*sid CH17.QUIET.03
*date 2027-03-05 23:55
*place P32 corridor_night
*present grey familiar
The east stair is the only way down from the first-years' dormitories to the Lantern Hall, and it's narrow and steep and spirals round, and there are six of them on it.

Six grey robes, coming up. Humming. Slowly, step by step, round and round, towards the top landing, where forty first-years from all four houses are crammed together in their nightclothes, crying, with nowhere to go, because the only other way down is the way the Choir came.

And on the stair, three steps below the top landing, between the six and the forty, is Professor Grey.

@grey:neutral He's in his dark robes. He's got no wand out; he doesn't seem to need one. He's standing with his feet planted on the narrow step and his scarred hands held out in front of him, palms forward, and there's something coming off them, a shimmer, a heat-haze, like the air over a road in summer, and the Choir's hum is hitting it and breaking round it, the way water breaks round a stone. They can't get past him. Six of them, and they can't get past him.

But his hands are shaking. And the scars on them, the old scars, the frost-and-burn scars that go up past his wrists, are going grey.
*snapshot stair

@grey:neutral He hears you on the landing behind him. He doesn't turn round. "Take them down," he says. His voice is perfectly calm. "The back stair. Behind the tapestry of the heron. It opens if you tell it [i]stille[/i]. Take them all down to the Hall. The Headmistress is there." A pause. "Now, please."
*choice
  #"I can hold them with you. I'm a Kindler. Let me help."
    *set heart +5
    @grey:neutral "I know what you are," says Professor Grey. "I've known since your first Warding lesson, when I hummed their note and your flame came up like a lighthouse." The shimmer round his hands wavers, and holds. "That's why you're going down the back stair with forty children. Because if you stay, you'll use it. And the Hush will see it, and she'll tell him, and he'll know exactly where you are and what you are and how to reach you." He breathes in. "Six years I sang with them. Six years, so the Order would know what the Choir knows. I know what he'll do if he gets you. You are going down the stair."
  #"Professor. Were you ever one of them?"
    *set wit +5
    *if accused_grey
      You asked him that before, at the wren door. He didn't answer.
    @grey:neutral "Six years," says Professor Grey, without turning round. "Nineteen ninety-eight to two thousand and four. I sang with them. I learned their note. I hummed in their choir and took nobody, and every week I wrote down everything they knew and sent it to the Order." The shimmer round his hands wavers, and holds. "They found out. That's where the hands came from." A breath. "I've never been one of them. I've only ever sounded like it. Now take the children down the back stair."
  #Don't argue. Go. Do what he says.
    *set nerve +5
    @grey:neutral You don't argue. You turn. And behind you, very quietly, as you go, he says: "Thank you."

You take them down.

Forty first-years, through the tapestry of the heron, which opens when you say [i]stille[/i], down a back stair so narrow they have to go single file in the dark, crying, holding each other's nightclothes. You go last. You count them at every turn. Forty. Forty. Forty. At the bottom, the stair comes out behind the staff table in the Lantern Hall, and the Hall is full of people and wands and grey light and shouting, and the Headmistress is there in the middle of it with blood on her face, and Lamplighters, and you push the first-years through to them, all forty, and turn round, and go back up.

You go back up because he's still up there. You go back up because you can still hear the hum on the east stair, and under it, something that isn't a hum. A voice. Low and rough and tired, singing. The wren's line. Up, and round, and back down.

He's on the step where he was. He hasn't moved. The six are still below him, and they still haven't passed him. But the shimmer round his hands is gone, and his hands are grey to the elbow, and he's sitting down now, on the step, with his back against the wall, singing, very quietly, as if to himself.

@grey:neutral He sees you on the landing. He stops singing. "Forty?" he says.

"Forty. All of them."

@grey:neutral "Good." He closes his colourless eyes. "Good." And then, very low, so you have to lean down to hear: "Tell the Headmistress it was the boathouse ward. The old one, under the water. Opened from inside. On the round." A breath. "Tell her I'm sorry I didn't see who. I was watching the wrong man."

His head goes back against the stone.

The six on the stair below him stop humming. They look up at him. And then they turn, all six, and go back down the east stair, slowly, not hurrying, round and round, and are gone.

And the lanterns on the east stair come back, gold, one by one, from the bottom up, until the whole stair is lit, and warm, and ordinary, and Professor Magnus Grey is sitting on the third step from the top with his scarred hands in his lap and his eyes closed, and he isn't breathing.

He's not hollowed. You look. There's no hole. There's nothing at all. He gave it. All of it. He held the stair with his own flame until there was nothing left to hold it with, and then he sang.
*if accused_grey
  You think about the wren door, at Christmas, and what you said to him. [i]How do I know you're not the one letting it in?[/i] And what he said. [i]You don't. That's rather the point of me.[/i]
*page_break
*comment ---------------------------------------------------------------- CH17.AFTER.01
*sid CH17.AFTER.01
*date 2027-03-06 10:00
*mood day
*place P24 infirmary
*present noor toby priya kestrel familiar
In the morning, the Infirmary is full of the hollowed.

Not just Toby. Four others: two Heronmere second-years and a Rookhallow girl and a boy from Owlcombe you didn't know, who went to see what the bell was. They're in a row of beds by the window, sitting up, in clean pyjamas, with their hands folded on the blankets, looking out at the grey rain on the Mere. Politely. When anyone speaks to them, they smile.

@toby:hollowed Toby is in the end bed. Someone's washed the jam off his face. Custard the hare is on the blanket over his knees, pressed against him, not moving, the only thing in the room that won't leave him alone. He's stroking her. Slowly. Carefully. As if he's not sure what she is.

@toby:hollowed "She's nice," he says, when you sit down. "Is she mine? Somebody said she's mine." He looks at you, with fog-coloured eyes, and smiles his round polite smile. "Sorry. I'm sure I should know you. You've got a kind face."

@priya:hurt Priya's in the chair on his other side. She's been there all night. She's holding his free hand, and he's letting her, politely, the way Odile let the Headmistress hold hers. Her face is swollen from crying and then from not crying.

@kestrel:grave The Headmistress is at the far end of the ward, in a chair, with her left arm strapped across her chest and a dressing on the side of her face and her grey hair loose. She fought four of them in the Lantern Hall, alone, for twenty minutes, before the Lamplighters got down from the walls. She shouldn't be up. Matron's told her so four times. She's watching the row of beds by the window, and her face is the face of someone watching a building burn.
*if candle = "toby"
  On Toby's bedside table, in its jam jar, somebody's brought your white Candlewake candle down from the Heronmere mantelpiece. It's still burning. He looks at it sometimes, and frowns, as if it reminds him of something.

@noor:tired Noor's been on her feet since midnight. You watch her go down the row of hollowed beds, checking pulses, checking temperatures, tucking blankets, saying each of their names to them, gently, clearly, the way you'd say it to someone waking from an anaesthetic. [i]Toby. You're in the Infirmary. You're safe.[/i] [i]Toby. I'm Noor.[/i] He smiles at her politely every time.
*if (st_noor >= 3) and not(b_noor_rest) and (hurt_noor < 2)
  *set b_noor_rest true
  *set st_noor 4
  @noor:hurt And then, at the end of the row, at Toby's bed, with the thermometer in her hand, she stops. She stands there. And the thermometer starts to shake.

  @noor:hurt "I can't fix it," she says. Not to you. To no one. Her voice is flat and strange. "I've fixed everything. My whole life. Bleeds and breaks and burns and hearts. I've had my hands inside people. I can fix [i]anything[/i]. And there's nothing to fix. There's nothing wrong with him. His pulse is perfect. His temperature's perfect. He's just not [i]there[/i]." Her hand's shaking so badly the thermometer rattles against the bed rail. "And I can't... I can't..."
  *choice
    #Take the thermometer out of her hand. Take her out of the ward. Now.
      *set st_noor +1
      *set heart +10
      You take the thermometer out of her hand, and put it down, and take her by the arm, and walk her out of the ward, through the double doors, into the little linen room at the end of the corridor, and shut the door. And in the dark, among the shelves of folded sheets, Noor Haddad falls apart.

      She doesn't make much noise. She slides down the shelves to the floor and puts her arms round her knees and shakes, and shakes, and you sit down on the floor with her and hold on. She says things. Toby's name. Delphine's. Bram's. Odile's. The names of patients from before, from her old life, in A&E, people you've never heard of, a boy on a motorbike, a woman in a red coat. She says, "I'm so tired. I'm so tired. I'm so tired." You hold on.

      @noor:tired After a long time, she stops. She sits against the shelves with her face wet and swollen and her plait coming down, and looks at you. "Nobody's ever seen me do that," she says. "Not once. Not my mum. Not anyone." She wipes her face on a pillowcase off the shelf. "I didn't know I could, in front of someone. I thought I'd die of it."

      "You didn't."

      @noor:warm "No." She almost laughs. "I didn't." And she leans her head on your shoulder, in the dark, among the sheets, and stays there, and doesn't go back to the ward for a whole hour, and Matron doesn't come looking.
    #Put your hands over hers, round the thermometer, and hold them still.
      *set st_noor +1
      *set heart +5
      You put your hands over hers, round the thermometer, and hold them, and they stop shaking. She looks down at your hands. Then up at you. And then her face crumples, completely, all at once, there at the end of Toby's bed, in front of the whole ward, and she cries, and you hold her hands, and she lets you. Matron sees, from the office. She comes out and draws the curtain round the two of you, very quietly, and goes away again.
*elseif b_noor_rest
  @noor:tired At the end of the row she stops, and looks up, and finds you. She doesn't say anything. She just comes and sits down on the edge of the bed next to you, for one minute, with her shoulder against yours, and closes her eyes. Then she gets up and goes on.
  *set st_noor +1
*else
  She doesn't stop. She doesn't sit down. She goes down the row, and back up it, and down it again, and when Matron tells her to go to bed she says [i]in a minute[/i], the way she did in November.

@toby:hollowed Toby looks up at you from his pillows. "Are you all right?" he asks, politely. "You look sad." He strokes the hare. "I don't know why, but I feel like I ought to know why."
*page_break
*comment ---------------------------------------------------------------- CH17.AFTER.02
*sid CH17.AFTER.02
*date 2027-03-07 19:00
*mood night
*place P13 lantern_hall_dark
*present arkwright kestrel familiar
On Sunday night the whole school is in the Lantern Hall, and half the lanterns are dark.

Nobody knows why. They went out on the night of the Quiet, when the Choir came in, and they haven't come back: great patches of darkness up under the roof, like holes in a net, where a thousand lanterns hang cold and grey and won't light, no matter what Mr Tully does with his taper. The Hall feels like a mouth with teeth missing. The four house tables are full, and silent, and the empty places at them are worse than the dark.

The Heronmere table has five. And at the staff table, one.

Professor Grey's chair is empty. Somebody's put a candle in front of it, grey-white, plain. The same kind he put in front of Delphine's place at Candlewake.

@arkwright:grave Commander Arkwright stands up. She's not wearing her greatcoat. She's in a plain black jacket, with the brass lamp badge on it, and she looks older than she did on Friday.

@arkwright:grave "Magnus Grey," she says, and her voice carries to the back of the Hall without trying, "was a Lamplighter." A murmur, all round the Hall. She waits for it to stop. "For six years, from nineteen ninety-eight to two thousand and four, he lived inside the Grey Choir. He learned their note. He sang in their choir. He took nobody. Every week, he sent us everything they knew. Most of what the Order knows about the Choir, we know because of him." She looks at the empty chair. "They found out. They did that to his hands. He never talked about it. He came here, afterwards, to teach you to ward yourselves against the thing he'd learned." Her jaw works. "Some of you thought he was one of them. So did some of mine. He knew. He let you think it. He thought it made him more useful."
*if accused_grey
  You think of the wren door. [i]That's rather the point of me.[/i] You can't look at the candle.

@arkwright:grave "He held the east stair on Friday night against six of them," she says, "for twenty-five minutes, without a wand, while forty first-years went down the back stair to safety. Every one of those forty is sitting in this Hall tonight." She looks round at them, at the first-years at every table. "He was the bravest man I ever served with. I'd like you to stand."

Four hundred people stand up, in the half-dark Hall, in silence.

@kestrel:grave After, when everyone's sitting again, the Headmistress gets up. Slowly, with her arm strapped across her chest. "The Choir came in through the boathouse ward," she says. "The old one, under the water. It was opened." She pauses. "From inside."

She doesn't say anything else. She doesn't need to. The Hall goes cold, table by table.

Someone inside Wrenfold opened a door, and Toby Quill went grey, and Magnus Grey died on a stair. And whoever it was is sitting in this Hall tonight.

You look along the staff table. At Professor Bassani, grey-faced, with his moustache drooping. Professor Kovač, as still as stone. Professor Crook, with her pipe unlit. Matron. Miss Dunne. And at the end, in his old brown coat, with his taper across his knees, looking up at the dark patches in the roof with an expression on his lined old face you can't read, Mr Tully. The Lanternwarden. Whose round it was, on Friday night.
*if e08
  You think of the Wrenfold Map in November, and the ward lines, and which ones had been opened. All along the Lanternwarden's nightly round.
*journal [b]Chapter 17.[/b] The Quiet. On Friday night the Grey Choir came inside Wrenfold, through the old boathouse ward under the water, opened from inside. Toby stood in front of Priya and the Heronmere first-years and sang the wren's line, off-key, alone, until the Hush hummed him out. [b]Toby is hollowed.[/b] Professor Grey held the east stair against six singers while you took forty first-years down the back stair, and died there, having given everything. He was the Order's man inside the Choir for six years. His last words: [i]it was the boathouse ward, opened from inside, on the round. I was watching the wrong man.[/i] {@b_noor_rest|Noor fell apart, and let you see it. |}Half the lanterns in the Hall are dark.
*page_break
*goto_scene ch18
`);
