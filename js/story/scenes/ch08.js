NB.scene("ch08", String.raw`
*mood ember
*set ch 8
*chapter 8 Emberfall
*comment ---------------------------------------------------------------- CH08.EMBER.01
*sid CH08.EMBER.01
*date 2026-10-31 18:30
*place P13 lantern_hall_emberfall
*present kestrel toby priya familiar
The last three weeks of October go by in fog and woodsmoke.

The trees on the island turn all at once, the way they do in the hills: one week green, the next every shade of copper and rust and gold, and the Whispering Wood goes from a dark wall across the water to a bonfire that hasn't been lit. Every morning the Mere steams. Every afternoon the light goes a little earlier. You learn the word for warmth in Wordcraft and use it on your own feet, which Professor Moth says is a perfectly respectable use of magic and he does it himself. You go up to the Weathervane Room every Friday at five and eat lemon cake and practise looking at a candle flame without letting it swallow you, and the Headmistress says you're getting better, and you mostly believe her. Nobody else is hollowed. The lanterns in the Hall hum again at every meal. People start, carefully, to laugh in corridors.

The whole castle begins to smell of apples. There are barrels of them in the kitchen passage, and baskets of them outside the Hall, and a crate of them in the Rookery that the ravens have been at. Mrs Pettigrew's goat eats eleven and has to lie down.

*page_break

On the last night of October, every lantern in the Lantern Hall burns red.

Not all at once. It starts at dusk, at the High Table end: one lantern, then the next, then the next, turning from gold to amber to orange to a deep, glowing, ember red, the colour of the last coals in a grate at two in the morning. It spreads down the Hall like a blush. By the time the doors open for the feast, all ten thousand are burning red, drifting low and slow over the tables, and the Hall looks like the inside of a banked fire. It's the most beautiful thing you've ever seen, and it's frightening, and it's meant to be both.

*page_break

Emberfall. The night the veil thins. The night, the second-years have been telling you all week in lowered voices, when the dead come back to Wrenfold for a few hours and walk the cloisters as if they'd never left.

"Do they talk to you?" you asked one of them, on Tuesday, a Rookhallow woman in the queue for porridge. She thought about it. "Not usually," she said. "They're not here for us. They're just visiting." Then, as an afterthought: "Don't stand in the cloister doorways at midnight, though. It's rude."

Everybody's in masks. That's the tradition. They've been on sale at a stall outside the Hall all week, run by the Heronmere second-years in aid of the Infirmary: papier-mâché and paint and feathers, animals and leaves and stars, laid out on a trestle table under a sign that says [i]BE SOMEONE ELSE (ONE NIGHT ONLY)[/i]. You had to choose one.
*choice
  #A fox mask, russet and white, with pointed ears.
    *set mask "fox"
    *set wit +5
    The fox. It fits as if it were made for you. Toby says you look as if you're about to steal a chicken. You tell him that's the point. You find, wearing it, that you walk differently, a little lighter on your feet, a little more inclined to look round corners.
  #A stag, with little antlers of real twigs.
    *set mask "stag"
    *set nerve +5
    The stag, with its small branching antlers of real twigs that catch in doorways. You feel taller in it. You feel like something that lives in the Whispering Wood and isn't afraid of anything that lives there too. By the end of the evening you've learned to duck without thinking about it.
  #A pale green moth, with eye-spots on the wings.
    *set mask "moth"
    *set heart +5
    The moth, pale green, with great soft wings spreading out from your temples and eye-spots on them like watchful faces. {@familiar = "moth"|{fam_name} lands on it, delighted, and sits on your forehead all evening like a brooch.|It makes you feel drawn to the light, which you already are.}
  #A crown of autumn leaves, red and gold, with berries.
    *set mask "leaves"
    *set heart +5
    Not a mask exactly: a crown of autumn leaves, red and gold and brown, with rowan berries and a half-mask of woven leaves over your eyes. It smells of the Wood after rain. People keep smiling at you in the corridors, and a first-year from Larkspire asks, very shyly, if you're a real dryad.
  #A plain black domino mask. Nothing else.
    *set mask "domino"
    *set flame +5
    A plain black domino, silk, just over your eyes. Everyone else is a fox or a badger or a moon. You look like a highwayman. It turns out that in a Hall full of animals, the plain black mask is the one everybody looks at twice.

The feast is apples. Everything is apples. Apple soup and pork with apples and apple dumplings and toffee apples and apple cake with cream, and a hot cider that tastes as if somebody bottled October. In the great fireplaces down both sides of the Hall, Mrs Pettigrew's kitchen staff are roasting apples on long iron forks, and every so often one of the apples bursts into flame: not smoke and char but real flame, blue and gold, opening out like a flower, and everybody cheers. Apple-fire. You catch one, when a second-year throws it to you, and it doesn't burn your hand; it just blooms, cool as a petal, and goes out, and leaves your palm smelling of cinnamon.

The noise is tremendous. Masks everywhere: owls and hares and suns and a whole table of Rookhallow crows, cawing at the Larkspire larks, who sing back, badly, on purpose. Somebody's familiar has been given a tiny mask of its own and is very unhappy about it. The red light makes everyone look flushed and firelit and slightly strange, like people in a painting of a party, and every face you know is half hidden and half new.

@kestrel:neutral At half past eight, the Headmistress stands, in a mask like a silver owl pushed up on her head, and raises her cup, and the red Hall goes quiet.

*page_break

@kestrel:grave "Tonight," she says, "the dead come home. The ones who went before us, who sat at these tables, who learned to hold their flames here, and grew old, and died. We say welcome to them." A pause. Her eyes go, for a moment, to the Heronmere table, to the empty place halfway down it, where someone has put a single red apple. "And we remember the ones who went quiet. Who are still with us, and not. Delphine. And the others." She lifts her cup. "To the ones who went before. And the ones who went quiet."

"The ones who went before," says the Hall, four hundred voices, "and the ones who went quiet."

The words hang there in the red light. Somebody at the Heronmere table is crying, quietly. Up among the lanterns, nothing moves at all.

@kestrel:neutral "The Mere at nine," she says, more gently. "Bring a lantern. Bring someone to hold your hand."

@toby:warm Toby, at your elbow, in a mask like a very round hedgehog, is holding hands with Priya under the table and pretending he isn't. He catches your eye and goes pink behind the prickles. So that's him sorted.

The question is who you're going to walk down to the water with.
*choice
  *if (st_rowan >= 2) and (hurt_rowan < 2)
    #Rowan. He's standing by the fireplace, too close, watching the apples burn.
      *set ember_with "rowan"
      *set st_rowan +1
  *if (st_imogen >= 2) and (hurt_imogen < 2)
    #Imogen. She's holding a lantern with something written on it, and she's alone.
      *set ember_with "imogen"
      *set st_imogen +1
  *if (st_saoirse >= 2) and (hurt_saoirse < 2)
    #Saoirse. She's in a mask like a magpie, and she's actually standing still.
      *set ember_with "saoirse"
      *set st_saoirse +1
  *if (st_noor >= 2) and (hurt_noor < 2)
    #Noor. She's got a lantern in each hand and a list folded in her pocket.
      *set ember_with "noor"
      *set st_noor +1
  *if (st_cas >= 2) and (hurt_cas < 2)
    #Cas. He's leaving by the side door, alone, with a lantern he's pretending not to carry.
      *set ember_with "cas"
      *set st_cas +1
  *if st_idris >= 2
    #Idris. He's not wearing a mask. He's got a lantern and a notebook.
      *set ember_with "idris"
      *set st_idris +1
  #Toby and Priya. Somebody has to make sure he doesn't fall in.
    *set ember_with "toby"
    *set fr_toby +1
  #Nobody. Go down on your own. Some lanterns are for floating alone.
    *set ember_with "alone"
    *set nerve +5
*page_break
*comment ---------------------------------------------------------------- CH08.EMBER.02
*sid CH08.EMBER.02
*date 2026-10-31 21:00
*mood night
*place P12 mere_night
*present toby priya tully familiar
The whole school goes down to the Mere in the dark, in masks, carrying unlit lanterns: a long line of animals and moons and leaves going down the stone stair through the rock to the boathouse and out along the shore, with the castle glowing red behind them.

It's cold. Properly cold, for the first time this year: your breath smokes, and the shingle crunches with frost at the edges, and the stars are out hard and bright over the hills. Nobody talks much. There's just the crunch of four hundred pairs of feet, and the lap of the water, and now and then a nervous laugh from somewhere down the line, quickly hushed. Prefects stand at intervals along the shore with their wands lit, watching the trees, not the water. Right at the far end, by the boathouse, alone, there's a big dark shape that you realise is Professor Grey. Nobody goes near him.

At the water's edge, Mr Tully is waiting with his brass taper. He's not wearing a mask. He lights each lantern as it comes to him, one at a time, with a word for everyone, the way he did on the first night, and you watch him do four hundred without once getting a name wrong.

@tully:warm "{name}," he says, when it's you, and lights yours. It flares white again, briefly, and he blinks, and smiles. "Knew it'd be you. Mind how you go."

*page_break

You kneel at the edge of the black water and set your lantern on it, and let it go.

It drifts out. They're all drifting out: four hundred small lights on the black Mere, gold and rose and green and blue, turning slowly, spreading out across the water towards the dark middle of the lake, where the dead are supposed to be. People have written names on them, in ink, on the paper. Some people are crying. Most are just quiet, kneeling on the stones, watching their light go. Up on the hill behind you, the castle windows glow red.

The water's so still that every lantern has a twin, upside down, underneath it. From the shore it looks as if there are two lakes of lights, one floating on top of the other, and the dark between them is where the dead are. You kneel there with your knees going numb and watch yours until you can't tell it from the others.
*snapshot emberfall

@tully:sad Mr Tully floats one last. It's lopsided, and old, and the paper's gone yellow, and you recognise it: the one from the photograph over his stove. Maisie's first lantern. He must have taken it down from the Hall for tonight. He kneels on the wet stones with his bad knees and sets it on the water as gently as if it were a sleeping bird. "She's not dead," he says, to nobody. "I know that. But she's gone somewhere I can't follow." He watches it drift. "Same thing, some nights."

He stays kneeling after it's gone out among the others, with the taper burning low in his hand, looking at the water. Nobody goes near him. You think, not for the first time, that he's the loneliest person you've ever met.
*if ember_with = "rowan"
  *present toby priya tully rowan familiar
  @rowan:neutral Rowan kneels beside you with his lantern, and when he lets it go, the water round his hand steams. He doesn't write a name on it. He watches it a long while, and then he looks back up the shore, to where a great bonfire is being lit on the shingle, the apple-fire, for later. "Come and stand by the fire with me," he says. "I want to see if it... I want to see something."
*if ember_with = "imogen"
  *present toby priya tully imogen familiar
  @imogen:guarded Imogen kneels beside you with her lantern, and you see the name she's written on the paper in her tiny precise hand: [i]KIT SALLOW[/i]. She sets it on the water very carefully and watches it go, with her face under her owl mask absolutely still.
  *if st_imogen >= 3
    "Who's Kit?" you ask. Very quietly.

    *page_break

    @imogen:hurt She doesn't answer at first. The lantern drifts out among the others. "My brother," she says at last. "He's not dead. That's the stupid thing. You're supposed to write the names of the dead." Her voice doesn't shake. Her hands do.

    You wait. Out on the water, a lantern bumps against another and they turn together, slowly, like two people dancing.

    @imogen:guarded "He kindled late," she says. "Like us. Twenty-four. It was his first term, three years ago. He'd gone home for his birthday. I made him a cake. It was a bad cake." She stops, and starts again somewhere else, the way you'd step round a hole. "He was walking back from the tram. There's a subway under the ring road. He always went through it. I always told him not to."

    "Imogen..."

    @imogen:hurt "They took him in the subway." Very flat. As if she's reading it off a form. "Hollowed. He's at St Ide's." She takes her mask off, and holds it in her lap, and looks at it instead of at you. "I visit him every month. He's very polite. He says [i]hello, Immy[/i]." Her mouth does something. "Like I'm someone he met once at a party. Somebody's friend. He's always pleased to see me. He's never once asked who I am."

    You don't say anything. You don't think there's anything to say. You kneel next to her on the cold stones and wait.

    *page_break

    @imogen:tense "Nobody's ever been relit," she says. "Not once. Not in three hundred years of the Order. Nobody even [i]tries[/i]." She wipes her face with the back of her hand, furiously, as if it's disobeyed her. "That's why the Order. That's why I read the whole handbook. That's why I've been in the library every night since Delphine. I'm going to find out why nobody tries. And then I'm going to try."

    You look at her, and at the little lantern with her brother's name on it, drifting out onto the black water, and you think about a lantern on a stair, and your bare hand, and the Headmistress saying [i]promise me you will never try it[/i].
    *set b_imogen_kit true
    *set st_imogen 4
    *choice
      #"I'll help you. Whatever you find."
        *set heart +5
        @imogen:warm She looks at you. For once, she doesn't have anything precise to say. She just nods, and puts her mask back on, and when you both stand up, she puts her hand through your arm, very lightly, as if it's something she read about once and wanted to try.

        @imogen:neutral "I'll hold you to that," she says, as you walk. "I'll probably draw up terms." A pause. "I'm joking. Mostly."
      *if told_imogen
        #"You asked me once if I could see if there's anything left in someone hollowed. I'll look. When I can. I promise."
          *set kindling +5
          @imogen:hurt Her breath catches. "You'd do that?"

          "When I know how. When it won't hurt him."

          @imogen:warm She doesn't say thank you. She doesn't say anything. She just takes your hand, on the wet stones, and holds it so hard it hurts, and you let her.

          @imogen:neutral When she lets go, finally, she puts her mask back on with great care, straightening it, as if composure were a thing you could fasten with a ribbon. "When you know how," she repeats. "Not before. I'm not having you hurt either. That's a condition."
      #Don't say anything. Just stay, and watch his lantern with her until it's out of sight.
        *set nerve +5
        You stay. You watch his lantern with her until it's a speck among specks, and then gone. She doesn't let go of your sleeve the whole time. When at last she stands up, she brushes the frost off her knees very thoroughly, and doesn't look at you, and says, "Thank you for not saying anything. People always say something."
*if ember_with = "saoirse"
  *present toby priya tully saoirse familiar
  @saoirse:neutral Saoirse kneels beside you in her magpie mask and sets her lantern on the water without writing anything on it. "For my mam," she says. "She's not dead. She's up the coast somewhere, I think. Or she was. She just went." She pushes it out with one finger. "It's stupid."

  "It's not stupid."

  @saoirse:warm She leans her shoulder against yours on the wet stones, just for a moment, and doesn't say anything else, and you don't either.

  @saoirse:amused Then, because she can't help it, she flicks a pebble after the lantern, and it skips four times across the black water between the lights, and she says "Ha," very softly, pleased, and stands up and holds out her hand to pull you up after her.
*if ember_with = "noor"
  *present toby priya tully noor familiar
  @noor:tired Noor floats both her lanterns, one after the other. Then she takes a folded piece of paper out of her pocket and reads it by the light of the lanterns on the water, moving her lips. It's a list of names. A long one. "Everyone I've lost," she says, quietly, when she's finished. "In A and E. Seven years, counting training. I say them every year. Nobody else knows them." She folds it up again. "Now you've heard them. So that's two of us."

  "Why two lanterns?"

  @noor:neutral "One for them," says Noor. "One for the ones I got back." She watches them drift apart on the water, one going left, one going right. "You have to do both. Otherwise you only remember the half that goes wrong."
*if ember_with = "cas"
  *present toby priya tully cas familiar
  @cas:guarded Cas kneels on the stones well away from everyone else, and you kneel beside him, and he pretends you haven't. He's written two names on his lantern. One is [i]Delphine[/i]. The other he's covered with his thumb. When he lets it go, you see it: [i]Lucius Drummond[/i].

  *page_break

  @cas:hurt "My grandfather," he says, not looking at you. "Died last year. I don't know if I'm sorry." He watches the lantern drift. "He was a great man. Everyone said so. He sat on every committee. He had his portrait painted three times." A pause. "He never once looked at me after I kindled. Not once. As if I'd done it to spite him." He stands up, abruptly. "I don't know why I wrote it. It doesn't matter."

  But he doesn't walk away. He stands on the shingle with his hands in his pockets and watches the lantern until it's gone, and then a while after that, and you stand beside him, and he lets you.
*if ember_with = "idris"
  *present toby priya tully idris familiar
  @idris:neutral Idris sets his lantern on the water, and on it, in small careful letters, he's written a list: names you don't recognise, with dates beside them going back centuries. [i]Hester Wren. Tobias Marle. Anne Crossley.[/i] Seven of them. "The Kindlers," he says, quietly. "The ones I know of. Somebody should remember them." You look at the last name on the list. The ink's been smudged, as if he wrote it and then tried to rub it out. You can just make out an [i]A[/i].

  "Who's the last one?"

  @idris:tense "Nobody," says Idris, too quickly. "A mistake." He watches the lantern go, and doesn't look at you.

  @idris:neutral After a moment he opens his notebook, and writes something in it, very small, by the light of the lanterns on the water, and closes it again. You'd give a great deal to know what. You don't ask. He seems to know that you don't, and to be grateful.
*if ember_with = "toby"
  @toby:laugh Toby and Priya float their lanterns together, holding hands, and Toby's goes out immediately because he's so nervous it's wobbling, and Priya relights it with the tip of her bow, which you didn't know you could do with a bow, and then she kisses him on the cheek, very quickly, and Toby falls in the Mere.

  It's only up to his knees. You help him out. Priya laughs so much she has to sit down. Toby stands there dripping, in his hedgehog mask, with the lanterns going out across the water behind him, and says, "Worth it," with enormous dignity.

  @priya:warm "You're ridiculous," Priya tells him, wiping her eyes. Then she kisses him again, on the other cheek, to make it even, and he nearly goes back in.
*if ember_with = "alone"
  You float yours alone. You write a name on it: your grandad's, who taught you to listen to the shipping forecast in the shed and died six years ago this winter. You watch it go out onto the black water among four hundred others, and you think about him, and about Nana Pearl in her bungalow in Wrexley with the snooker on, and you feel very far from home, and entirely where you're meant to be.

  {fam_name} comes close against you on the cold stones, and stays there, and you're glad of the company. You find you can still hear the sea areas in his voice, the whole slow list of them, in order. You'd forgotten you knew them.
*if ember_with = "rowan"
  *goto fire
*goto ghosts
*comment ---------------------------------------------------------------- CH08.FIRE.01
*label fire
*sid CH08.FIRE.01
*date 2026-10-31 22:00
*place P12 mere_night
*present rowan familiar
The apple-fire on the shingle is a proper bonfire, taller than a man, built out of driftwood and old apple boughs and the broken crates from the kitchens, and it burns in every colour: gold and blue and green, and every so often a shower of sparks goes up that turn into tiny red lanterns in the air and drift away over the water. People are dancing round it in masks. Somebody's playing a fiddle, fast and a bit out of tune, and somebody else is keeping time on an upturned bucket. The heat of it reaches thirty yards down the shore, and the frost on the shingle has gone to wet round it in a wide dark ring.

You walk up the beach towards it with Rowan beside you, and you can feel him changing as you get closer: his shoulders going tight, his steps slowing, the way someone walks towards a dog they aren't sure of.

@rowan:tense Rowan stands at the edge of the firelight, and then walks forward, into the heat, closer than anyone else is standing. Closer. His lion mask is pushed up on his head. The fire's roaring six feet from him, and then four, and the heat's so fierce that the people behind him are stepping back, shielding their faces.

*page_break

The fire leans towards him.

It's like the candles in Pellow's shop, leaning towards you. The whole bonfire bends, slowly, its great flames reaching out towards Rowan like a dog towards its master. People stop dancing to watch. The fiddle falters. He puts out one hand, and the nearest flame curls round his fingers like a cat round a leg, and doesn't burn him.

@rowan:hurt "That's what it does," he says to you, over his shoulder, very quietly, under the noise. "Every fire. Since June. It knows me."

You can see it in the flame-sight, too: the bonfire on the shingle and the bonfire in his chest, leaning towards each other, red-gold and red-gold, like two people who recognise each other across a room.
*if (st_rowan >= 3) and not(b_rowan_fire)
  @rowan:hurt He doesn't take his hand out of the flame. He looks at it, curled round his fingers, gold and blue. "Last time I was this close to a fire," he says, "it was a house."

  *page_break

  You wait. Behind you the fiddle has found its tune again, and somebody whoops, and the dancing starts back up, round the far side of the fire, where the heat's bearable.

  @rowan:tense "Tanner's Row. June. Top floor gone up by the time we got there." He says it the way you'd give an address to a taxi, flat, all the facts in a line, as if that's the only way it'll come out. "Mum on the pavement in her nightie. Screaming. She'd got the baby out and she'd got the boy out and she couldn't find the girl." He swallows. "Seven. She was seven."

  "Rowan. You don't have to..."

  @rowan:hurt "I know." He still doesn't look at you. "Ladder was two minutes out. She didn't have two minutes. So I went in the front door." A breath. "It should've killed me. The hall was fire, floor to ceiling. I walked through it. It parted. Like I was..." He shakes his head. "Like walking through a bead curtain. It didn't want to touch me."

  "Where was she?"

  @rowan:small "In the wardrobe." Very quietly. "They always hide. Kids. You learn that, first year on the job: check the wardrobes, check under the beds, they think it's safe in there. She had her hands over her ears." His fingers close, slowly, and the flame in them closes too, like a flower at dusk. "I carried her down the stairs. Only there weren't any stairs by then. I just walked down where they'd been. And the fire got out of our way the whole way down, and she didn't get a mark on her. Not one."

  *page_break

  The bonfire leans closer. He doesn't seem to notice.

  @rowan:hurt "They gave me a medal," he says. "I've never taken it out of the box. I couldn't go back to work. I kept waking up with the sheets smoking." He laughs, not really a laugh. "My sister's baby screamed when I held him. At the christening. I was too hot. Everyone laughed. I went and sat in the car." Now he looks at you, and his eyes in the firelight are wet and very frightened. "It came into me in that house, and it never went out. One day it's going to get out. And it's going to be somebody I love. And I won't be able to walk it back."
  *set b_rowan_fire true
  *set st_rowan 4
*choice
  #Walk into the heat and stand beside him. If it knows him, it can know you too.
    *set nerve +10
    *set st_rowan +1
    You walk forward into the heat. It's like walking into an oven. Your eyes stream. The skin on your face tightens and your mask's paper edge starts to curl. Then you're next to him, and the heat's gone, as if you've stepped into the eye of it, and the fire's leaning round both of you, gold and blue, not touching.

    @rowan:warm He looks down at you, astonished. "It's not burning you."

    "It's with you," you say. "So it's with me."

    @rowan:laugh Rowan Ashby laughs, a big helpless laugh, inside a bonfire, and the fire leaps up round you both in a great gold column of sparks that turn into lanterns, and half the school cheers without knowing why.

    @rowan:warm You stand there together inside the fire a moment longer than you need to, with the sparks going up round you and the whole world gold and roaring and not hurting at all. "I've never done this with anyone," he says, low, under the roar. "Never had anyone who could stand here." When you walk back out of it, side by side, the fire straightens up behind you as if it's sorry to see you go, and the fiddle starts again, and somebody hands you both a cup of cider.
  #Call him back. Gently. He's too close, and he knows it.
    *set heart +5
    *set st_rowan +1
    "Rowan," you say. "Come and stand with me."

    @rowan:neutral He looks at you, and at the fire leaning towards him, and he takes his hand out of the flame, and steps back, and back, until he's beside you at the edge of the light. The fire straightens slowly, as if disappointed. "Thanks," he says, and his voice is rough. "Sometimes I forget I can step back."

    @rowan:warm He stands next to you for the rest of the dance, at the edge of the light, close enough that your sleeves touch. He doesn't go near the fire again. Every so often he looks at it, and then at you, and breathes out, long and slow, and you realise he's counting to six.
*goto ghosts
*comment ---------------------------------------------------------------- CH08.GHOST.01
*label ghosts
*sid CH08.GHOST.01
*date 2026-10-31 23:30
*place P32 corridor_night
*present familiar
At half past eleven, the dead come home.

You're walking back up through the castle with the others, damp and cold and happy, with frost on your shoes and the smell of woodsmoke in your hair. People are yawning. Somebody ahead of you is still singing the fiddle tune, badly. Your mask's pushed up on your head, and your cheeks are stiff with cold, and you're thinking about nothing more than your bed.

Then the air in the corridor changes. The lanterns in their brackets, still burning red, dim to embers. The temperature drops so fast your breath comes out white. The singing stops mid-line. {fam_name} stops dead.

There are people in the cloister.

The cloister is a square of stone arches round a garden at the heart of the castle, and it's full. People are walking in it, slowly, round and round, the way you'd walk round a garden on a summer evening: young people, mostly, your age, in school robes of every century. A woman in a ruff. A man in a frock coat and a powdered wig, reading. Two girls in 1920s bobs, arm in arm, laughing without sound. A boy in a flying helmet and goggles. All of them silver-blue, and faint, and see-through; you can see the stone arches through them, and the frost on the grass. They don't make any sound at all. They just walk, and talk to each other, and laugh, and look up at the lit windows of the castle, as if they've come home after a very long time away.

*page_break

You look at them with the flame-sight, without meaning to, and there's nothing there. No flames at all. Only a faint silver shimmer, like moonlight on water, where each of their hearts should be. It isn't like Delphine. It isn't a hole. It's more like the place a candle's been, after it's been carried out of the room: still warm, still lit, in a way, by the memory of it.

Students are standing in all the doorways, watching, in their masks. Nobody's frightened. It's too gentle to be frightened of. Somebody's crying. Somebody's waving to a woman in a Victorian bonnet, and she's waving back.

One of the ghosts stops walking.
*meet lettice
*present lettice familiar
@lettice:ghost She's young, twenty-five perhaps, with a round sweet face and big grey eyes and a frizzy perm, in school robes with enormous shoulders, and she's looking straight at you. She walks across the frosted garden, not round it, through it, leaving no footprints, and the other ghosts turn their heads to watch her go. She stops in front of you, under the arch, so close you can feel the cold coming off her like an open fridge door.

@lettice:ghost "You're the one," she says. Her voice is very faint, like a radio in another room. "Aren't you. The one with the light in your hands. I can see it. We all can." She tilts her head. "It's very bright. It's like looking at a lamp."

*page_break

You can't speak. The whole cloister has gone quiet, the students in the doorways and the ghosts on the grass. Everyone's looking at you. {fam_name} has gone rigid against your legs, but not, you notice, with fear. With attention.

"Who are you?" It comes out as a whisper. It's all you've got.

@lettice:ghost "Lettice," she says, as if she's pleased to be asked; as if nobody has, for a long time. "Lettice Crane. Heronmere." She looks round at the cloister, the arches, the lit windows, the way you'd look round a kitchen you grew up in. "I was here in nineteen eighty-six. I had a room over the water. You could hear the fish at night, if you were quiet." Her smile goes, slowly, like a lamp being turned down. "Is it still cold, the Heronmere corridor? It was always cold."

You nod. You can't do anything else.

@lettice:ghost "Good," she says. "Some things should stay." Then her grey eyes come back to yours, and hold, and the cold coming off her deepens, as if a door has opened somewhere behind her onto winter. "He's coming back, you know," she says. "For what he lost." A pause, very gentle. "And you have it."
*clue e05
*choice
  #"Who's coming back?"
    *set wit +5
    @lettice:ghost She opens her mouth to tell you, and nothing comes. You watch her try. Her lips shape the start of something, and stop, and shape it again. "We weren't to say it," she says, at last, puzzled, like someone patting their pockets for a key. "They told us. Don't talk about it, don't say his name, it'll only upset people. And I didn't. I never did." Her face flickers, like a picture on a bad television. "Forty years of not saying it, and now I can't find it."

    "What was he like?"

    @lettice:ghost That, she can find. "He lit the candles at dinner," she says. "By looking at them. Every night, the whole Hall, to make the new ones gasp. The brightest thing I ever saw." Her hand drifts up towards your chest and stops short. "Like yours. The light in the hands." Then, lower: "He came for me first. After they sent him home. I was walking back from the village, and it went so cold, and there was a humming, and he was so [i]sorry[/i]." She looks at you, and her grey eyes are very far away. "He's been hungry ever since."
  #"What did he lose?"
    *set heart +5
    @lettice:ghost "His light," she says. "All of it. They put it out." She says it simply, the way you'd say someone lost a glove.

    "Who did?"

    @lettice:ghost Her eyes slide away from yours, across the frosted garden, towards the dark arches on the far side of the cloister, and stay there. "I was there," she says. "We all were. The whole year. And nobody said anything, afterwards, and they sent him home, and we let them." She's very faint now. You can see an arch through her shoulder. "He never stopped wanting it back. He's been taking other people's ever since, to keep warm." She touches her own chest, where the silver shimmer is. "He took mine. I think he thought it was fair."
  #"What do I have? What does he want?"
    *set nerve +5
    @lettice:ghost She reaches out one faint silver hand and holds it over your chest, not touching, just where your flame is, and you feel the cold of her go right through you. "The same thing he had," she says. "The light in your hands. The thing that can put a flame back." She takes her hand away. "He can't do it anymore. He needs someone who can." Her grey eyes fix on yours. "Keep it close, little light. Keep it very, very close."

The cold's in your bones now. Your hands are shaking. Behind you, somebody in the doorway whispers your name, and somebody else hushes them.

@lettice:ghost The clock in the central tower begins to strike midnight, and Lettice smiles at you, and fades, all at once, like breath on a window. They all do. The whole cloister of silver-blue people, the ruff and the wig and the flying helmet, gone in the space of twelve strokes, and there's only frost on the grass, and students in masks in the doorways, and you.

The lanterns in their brackets come slowly back up to red. Somewhere a door bangs. The warmth creeps back into the corridor like water into a footprint, and people start to breathe again, and move, and whisper.

Everyone's looking at you.
*page_break
*comment ---------------------------------------------------------------- CH08.AFTER.01
*sid CH08.AFTER.01
*date 2026-11-01 00:30
*mood ember
*place P13 lantern_hall_emberfall
*present toby kestrel familiar
You don't go to bed. You can't. You go where half the school goes, back into the Hall, because it's warm and lit and full of people, and the Headmistress told you all, weeks ago, that that's where you go when you're frightened.

The Hall's half empty and littered with the end of the feast: apple cores, cider cups, a hare mask trodden flat under a bench, a paper crown of leaves someone's hung on a candle bracket. The fires have burned down to red caves. People sit in knots along the benches, still in their masks or holding them, talking in low voices, and every so often somebody glances at you, and away.

The lanterns in the Hall turn back to gold at half past midnight, slowly, from the High Table end, the red draining out of them like colour from a cheek.

@toby:warm Toby finds you sitting on the end of the Heronmere bench with your mask in your lap. He's soaking wet from the knees down{@ember_with = "toby"| (you know why)| (he fell in the Mere, he tells you, as if it were a medal)}, and his hedgehog mask is on the back of his head, and he's glowing like a lantern himself.

*page_break

@toby:laugh "She kissed me," he says, in a whisper, sitting down next to you. "Priya. On the actual... on the face. On the Mere. And then I fell in. And then she kissed me [i]again[/i]. Because I fell in, she said, which I don't understand at all, but I'm not going to question it." He stops. He looks at your face properly, for the first time, and the glow goes out of him. "What's wrong? Everyone's saying a ghost talked to you. Mina's already got it on the Wireless."

"Already?"

@toby:neutral "She did it from the cloister doorway. Into a jam jar. I don't know how the jam jar works." He peers at you. "You've gone a funny colour. You're freezing. Here." He puts his cardigan round your shoulders, damp hem and all. It smells of cider and lake water and, underneath, very faintly, of bread.
*if told_toby
  You tell him. You don't mean to, and then you do, low, with your heads together over the end of the bench, while the red drains out of the lanterns above you.

  *page_break

  "She came straight across the grass. Right up to me. She said she could see it. The light in my hands."

  @toby:tense He goes still. "In front of everyone?"

  "She said we all can. She meant all of them. The ghosts." You rub your cold hands together, and they don't warm. "And then she said somebody's coming back. For what he lost. And that I've got it."

  @toby:tense "Who? Who's coming back?"

  "She didn't say. She couldn't, or she wouldn't. Then the clock struck, and she went."

  @toby:scared His face goes from pink to white. "That's you," he says. "She means you. The flame thing. She knows." He grabs your hand. His fingers are cold and wet from the Mere, and holding on hard. "You have to tell the Headmistress. Right now. Tonight."

  "She was there. Everyone was there."

  @toby:scared "Then she knows," says Toby. "Good. Good. She'll know what to do." He doesn't let go of your hand. "She will, won't she?"
*else
  "Nothing," you say. "Just a ghost. Saying ghost things."

  @toby:neutral He studies you, the way he looks at a loaf he isn't sure is done. He doesn't believe you. But he doesn't push. He just sits closer, so your shoulders touch, wet cardigan and all, and stays.

  @toby:warm "Ghosts are rubbish anyway," he says, after a while, loyally. "Coming round, saying things. Not even bringing anything."

  You laugh, despite yourself. It comes out shaky. He looks pleased with himself.

@kestrel:grave The Headmistress is standing in the great doorway of the Hall. She's taken off her silver owl mask. She's looking at you, across the length of the Hall, over the heads of everyone.

*page_break

She's heard. Of course she has.

@kestrel:grave She comes down the Hall, not fast, between the tables, and the low talk stops as she passes and starts again behind her. She stops beside you, and puts one hand on your shoulder, very lightly. "Ghosts say things," she says, quietly, so that only you and Toby can hear. "Some of them are true. Some of them are only what they're afraid of, still, after forty years." Her hand tightens, just a fraction. "Friday. Five o'clock. We'll talk about it."

"She said he's coming back," you say. "Whoever he is."

@kestrel:grave "I know what she said," says Imelda Kestrel. For the first time since you met her, she looks every one of her seventy-one years. Her hand stays on your shoulder a moment longer, and you can feel, through it, how still she's holding herself. "Go to bed. Both of you. And keep it close."

@toby:neutral You go up together, Toby dripping on every stair. At the top he stops, and doesn't say goodnight, just squeezes your arm, hard. You go on to bed with {fam_name}, and lie awake looking at the ceiling, and it's nearly dawn before you stop hearing, in the quiet, a very faint voice like a radio in another room.
*set kindling +5
*journal [b]Chapter 8.[/b] At Emberfall every lantern burned red, and everyone floated lanterns on the Mere for the dead and the lost. {@ember_with = "imogen"|Imogen's lantern said KIT SALLOW: her brother, hollowed three years ago, at St Ide's.|}{@ember_with = "rowan"|The apple-fire leaned towards Rowan like a dog towards its master.|}{@ember_with = "cas"|Cas floated a lantern for his grandfather, Lucius Drummond.|}{@ember_with = "idris"|Idris floated a lantern with the names of every Kindler he knows of, and one he'd rubbed out.|} At midnight, the ghost of Lettice Crane, hollowed forty years ago, told you: [i]he's coming back for what he lost, and you have it.[/i] The Headmistress knows who she meant.
*page_break
*goto_scene ch09
`);
