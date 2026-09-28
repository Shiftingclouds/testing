NB.scene("ch08", String.raw`
*mood ember
*set ch 8
*chapter 8 Emberfall
*comment ---------------------------------------------------------------- CH08.EMBER.01
*sid CH08.EMBER.01
*date 2026-10-31 18:30
*place P13 lantern_hall_emberfall
*present kestrel toby priya familiar
On the last night of October, every lantern in the Lantern Hall burns red.

Not all at once. It starts at dusk, at the far end of the Hall, the High Table end: one lantern, then the next, then the next, turning from gold to amber to orange to a deep, glowing, ember red, the colour of the last coals in a grate at two in the morning. It spreads down the Hall like a blush. By the time the doors open for the feast, all ten thousand are burning red, drifting low and slow over the tables, and the whole Hall looks like the inside of a banked fire. It's the most beautiful thing you've ever seen, and it's frightening, and it's meant to be both.

Emberfall. The night the veil thins. The night, the second-years have been telling you all week in lowered voices, when the dead come back to Wrenfold for a few hours and walk the cloisters as if they'd never left.

Everybody's in masks. That's the tradition. They've been on sale at a stall outside the Hall all week, run by the Heronmere second-years in aid of the Infirmary: papier-mâché and paint and feathers, animals and leaves and stars, and you had to choose one.
*choice
  #A fox mask, russet and white, with pointed ears.
    *set mask "fox"
    *set wit +5
    The fox. It fits as if it were made for you. Toby says you look like you're about to steal a chicken. You tell him that's the point.
  #A stag, with little antlers of real twigs.
    *set mask "stag"
    *set nerve +5
    The stag, with its small branching antlers of real twigs that catch in doorways. You feel taller in it. You feel like something that lives in the Whispering Wood and isn't afraid of anything that lives there too.
  #A pale green moth, with eye-spots on the wings.
    *set mask "moth"
    *set heart +5
    The moth, pale green, with great soft wings spreading out from your temples and eye-spots on them like watchful faces. {@familiar = "moth"|{fam_name} lands on it, delighted, and sits on your forehead all evening like a brooch.|It makes you feel drawn to the light, which you already are.}
  #A crown of autumn leaves, red and gold, with berries.
    *set mask "leaves"
    *set heart +5
    Not a mask exactly: a crown of autumn leaves, red and gold and brown, with rowan berries and a half-mask of woven leaves over your eyes. People keep smiling at you in the corridors.
  #A plain black domino mask. Nothing else.
    *set mask "domino"
    *set flame +5
    A plain black domino, silk, just over your eyes. Everyone else is a fox or a badger or a moon. You look like a highwayman. It turns out that in a Hall full of animals, the plain black mask is the one everybody looks at twice.

The feast is apples. Everything is apples. Apple soup and pork with apples and apple dumplings and toffee apples and apple cake with cream, and a hot cider that tastes like somebody bottled October. In the great fireplaces down both sides of the Hall, Mrs Pettigrew's kitchen staff are roasting apples on long iron forks, and every so often one of the apples bursts into flame, not smoke and char but real flame, blue and gold, opening out like a flower, and everybody cheers. Apple-fire. You catch one, when a second-year throws it to you, and it doesn't burn your hand; it just blooms, cool as a petal, and goes out.

@kestrel:neutral At nine o'clock, the Headmistress stands, in a mask like a silver owl pushed up on her head, and raises her cup, and the red Hall goes quiet.

@kestrel:grave "Tonight," she says, "the dead come home. The ones who went before us, who sat at these tables, who learned to hold their flames here, and grew old, and died. We say welcome to them." A pause. Her eyes go, for a moment, to the Heronmere table, to the empty place in the middle of it. "And we remember the ones who went quiet. Who are still with us, and not. Delphine. And the others." She lifts her cup. "To the ones who went before. And the ones who went quiet."

"The ones who went before," says the Hall, four hundred voices, "and the ones who went quiet."

@kestrel:neutral "The Mere at nine," she says. "Bring a lantern. Bring someone to hold your hand."

@toby:warm Toby, at your elbow, in a mask like a very round hedgehog, is holding hands with Priya under the table and pretending he isn't. He catches your eye and goes pink. So that's him sorted.

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

At the water's edge, Mr Tully is waiting with his brass taper. He's not wearing a mask. He lights each lantern as it comes to him, one at a time, with a word for everyone, the way he did on the first night, and you watch him do four hundred without once getting a name wrong.

@tully:warm "{name}," he says, when it's you, and lights yours. It flares white again, briefly, and he blinks, and smiles. "Knew it'd be you. Mind how you go."

You kneel at the edge of the black water and set your lantern on it, and let it go.

It drifts out. They're all drifting out: four hundred small lights on the black Mere, gold and rose and green and blue, turning slowly, spreading out across the water towards the dark middle of the lake, where the dead are supposed to be. People have written names on them, in ink, on the paper. Some people are crying. Most people are just quiet, kneeling on the stones, watching their light go. Up on the hill behind you, the castle windows glow red.

@tully:sad Mr Tully floats one last. It's lopsided, and old, and the paper's gone yellow, and you recognise it: the one from the photograph over his stove. Maisie's first lantern. He kneels on the wet stones with his bad knees and sets it on the water as gently as if it were a sleeping bird. "She's not dead," he says, to nobody. "I know that. But she's gone somewhere I can't follow." He watches it drift. "Same thing, some nights."
*if ember_with = "rowan"
  *present toby priya tully rowan familiar
  @rowan:neutral Rowan kneels beside you with his lantern, and when he lets it go, the water round his hand steams. He doesn't write a name on it. He watches it for a long time, and then he looks back up the shore, to where a great bonfire is being lit on the shingle, the apple-fire, for later. "Come and stand by the fire with me," he says. "I want to see if it... I want to see something."
*if ember_with = "imogen"
  *present toby priya tully imogen familiar
  @imogen:guarded Imogen kneels beside you with her lantern, and you see the name she's written on the paper in her tiny precise hand: [i]KIT SALLOW[/i]. She sets it on the water very carefully and watches it go, with her face under her owl mask absolutely still.
  *if st_imogen >= 3
    "Who's Kit?" you ask. Very quietly.

    @imogen:hurt She doesn't answer for a long time. The lantern drifts out among the others. "My brother," she says at last. "He's not dead. That's the stupid thing. You're supposed to write the names of the dead." Her voice doesn't shake. Her hands do. "Three years ago. He kindled late, like us. He was twenty-four. He was walking home from the Tube in Kingsmere, his first term, before he'd even got his letter, and they took him. In a subway. Hollowed. He's at St Ide's." She takes her mask off and holds it in her lap. "I visit him every month. He says [i]hello, Immy[/i], like I'm someone he met once at a party."

    @imogen:tense "Nobody's ever been relit," she says. "Not once. Not in three hundred years of the Order. Nobody even [i]tries[/i]." She wipes her face with the back of her hand, furiously. "That's why the Order. That's why I read the whole handbook. That's why I've been in the library every night since Delphine. I'm going to find out why nobody tries. And then I'm going to try."

    You look at her, and at the little lantern with her brother's name on it, drifting out onto the black water, and you think about a candle on a stair, and your bare hand, and the Headmistress saying [i]promise me you will never try it[/i].
    *set b_imogen_kit true
    *set st_imogen 4
    *choice
      #"I'll help you. Whatever you find."
        *set heart +5
        @imogen:warm She looks at you. For once, she doesn't have anything precise to say. She just nods, and puts her mask back on, and when you both stand up, she puts her hand through your arm, very lightly, as if it's something she read about once and wanted to try.
      *if told_imogen
        #"You asked me once if I could see if there's anything left in someone hollowed. I'll look. When I can. I promise."
          *set kindling +5
          @imogen:hurt Her breath catches. "You'd do that?"

          "When I know how. When it won't hurt him."

          @imogen:warm She doesn't say thank you. She doesn't say anything. She just takes your hand, on the wet stones, and holds it so hard it hurts, and you let her.
      #Don't say anything. Just stay, and watch his lantern with her until it's out of sight.
        *set nerve +5
        You stay. You watch his lantern with her until it's a speck among specks, and then gone. She doesn't let go of your sleeve the whole time.
*if ember_with = "saoirse"
  *present toby priya tully saoirse familiar
  @saoirse:neutral Saoirse kneels beside you in her magpie mask and sets her lantern on the water without writing anything on it. "For my mam," she says. "She's not dead. She's in Portree, I think. Or she was. She just went." She pushes it out with one finger. "It's stupid."

  "It's not stupid."

  @saoirse:warm She leans her shoulder against yours on the wet stones, just for a moment, and doesn't say anything else, and you don't either.
*if ember_with = "noor"
  *present toby priya tully noor familiar
  @noor:tired Noor floats both her lanterns, one after the other. Then she takes a folded piece of paper out of her pocket and reads it by the light of the lanterns on the water, moving her lips. It's a list of names. A long one. "Everyone I've lost," she says, quietly, when she's finished. "In A and E. Seven years. I say them every year. Nobody else knows them." She folds it up again. "Now you've heard them. So that's two of us."
*if ember_with = "cas"
  *present toby priya tully cas familiar
  @cas:guarded Cas kneels on the stones well away from everyone else, and you kneel beside him, and he pretends you haven't. He's written two names on his lantern. One is [i]Delphine[/i]. The other one he's covered with his thumb. When he lets it go, you see it: [i]Lucius Drummond[/i].

  @cas:hurt "My grandfather," he says, not looking at you. "Died last year. I don't know if I'm sorry." He watches the lantern drift. "He was a great man. Everyone said so. He sat on every committee. He had his portrait painted three times." A pause. "He never once looked at me after I kindled. Not once. As if I'd done it to spite him." He stands up, abruptly. "I don't know why I wrote it. It doesn't matter."
*if ember_with = "idris"
  *present toby priya tully idris familiar
  @idris:neutral Idris sets his lantern on the water, and on it, in small careful letters, he's written a list: names you don't recognise, with dates beside them going back centuries. [i]Hester Wren. Tobias Marle. Anne Crossley.[/i] Seven of them. "The Kindlers," he says, quietly. "The ones I know of. Somebody should remember them." You look at the last name on the list. The ink's been smudged, as if he wrote it and then tried to rub it out. You can just make out an [i]A[/i].

  @idris:tense "Who's the last one?"

  "Nobody," says Idris, too quickly. "A mistake." And he watches the lantern go, and doesn't look at you.
*if ember_with = "toby"
  @toby:laugh Toby and Priya float their lanterns together, holding hands, and Toby's goes out immediately because he's so nervous it's wobbling, and Priya relights it with the tip of her bow, which you didn't know you could do with a bow, and then she kisses him on the cheek, very quickly, and Toby falls in the Mere.

  It's only up to his knees. You help him out. Priya laughs so much she has to sit down. Toby stands there dripping, in his hedgehog mask, with the lanterns going out across the water behind him, and says, "Worth it," with enormous dignity.
*if ember_with = "alone"
  You float yours alone. You write a name on it: your grandad's, who taught you to listen to the shipping forecast in the shed and died six years ago this winter. You watch it go out onto the black water among four hundred others, and you think about him, and about Nana Pearl across the country in her bungalow with the snooker on, and you feel very far from home, and entirely where you're meant to be.
*if ember_with = "rowan"
  *goto fire
*goto ghosts
*comment ---------------------------------------------------------------- CH08.FIRE.01
*label fire
*sid CH08.FIRE.01
*date 2026-10-31 22:00
*place P12 mere_night
*present rowan familiar
The apple-fire on the shingle is a proper bonfire, taller than a man, and it burns in every colour: gold and blue and green, and every so often a shower of sparks goes up that turn into tiny red lanterns in the air and drift away over the water. People are dancing round it in masks. Somebody's playing a fiddle.

@rowan:tense Rowan stands at the edge of the firelight, and then walks forward, into the heat, closer than anyone else is standing. Closer. His lion mask is pushed up on his head. The fire's roaring six feet from him, and then four, and the heat's so fierce the people behind him are stepping back, shielding their faces.

And the fire leans towards him.

It's like the candles in Pellow's shop, leaning towards you. The whole bonfire bends, slowly, its great flames reaching out towards Rowan like a dog towards its master. People stop dancing to watch. He puts out one hand, and the nearest flame curls round his fingers like a cat round a leg, and doesn't burn him.

@rowan:hurt "That's what it does," he says to you, over his shoulder, very quietly, under the noise. "Every fire. Since June. It knows me."
*if (st_rowan >= 3) and not(b_rowan_fire)
  @rowan:hurt And there, in front of the apple-fire, with half the school watching and not hearing, he tells you about the house on Tanner's Row. The little girl in the wardrobe. The stairs that weren't there. Walking through the fire like rain. The commendation, and the sheets smoking in the night, and his sister's baby crying because he was too hot to hold. "One day it's going to get out," he says, "and it's going to be somebody I love, and I won't be able to walk it back."
  *set b_rowan_fire true
  *set st_rowan 4
*choice
  #Walk into the heat and stand beside him. If it knows him, it can know you too.
    *set nerve +10
    *set st_rowan +1
    You walk forward into the heat. It's like walking into an oven. Your eyes stream. And then you're next to him, and the heat's gone, as if you've stepped into the eye of it, and the fire's leaning round both of you, gold and blue, not touching.

    @rowan:warm He looks down at you, astonished. "It's not burning you."

    "It's with you," you say. "So it's with me."

    @rowan:laugh Rowan Ashby laughs, a big helpless laugh, in the middle of a bonfire, and the fire leaps up round you both in a great gold column of sparks that turn into lanterns, and half the school cheers without knowing why.
  #Call him back. Gently. He's too close, and he knows it.
    *set heart +5
    *set st_rowan +1
    "Rowan," you say. "Come and stand with me."

    @rowan:neutral He looks at you, and at the fire leaning towards him, and he takes his hand out of the flame, and steps back, and back, until he's beside you at the edge of the light. The fire straightens slowly, as if disappointed. "Thanks," he says, and his voice is rough. "Sometimes I forget I can step back."
*goto ghosts
*comment ---------------------------------------------------------------- CH08.GHOST.01
*label ghosts
*sid CH08.GHOST.01
*date 2026-10-31 23:30
*place P32 corridor_night
*present familiar
At half past eleven, the dead come home.

You're walking back up through the castle with the others, damp and cold and happy, when the air in the corridor changes. The lanterns in their brackets, still burning red, dim to embers. The temperature drops. {fam_name} stops dead.

And then there are people in the cloister.

The cloister is a square of stone arches round a garden in the middle of the castle, and it's full. People are walking in it, slowly, round and round, the way you'd walk round a garden on a summer evening: young people, mostly, your age, in school robes of every century. A woman in a ruff. A man in a frock coat and a powdered wig, reading. Two girls in 1920s bobs, arm in arm, laughing without sound. A boy in a flying helmet and goggles. All of them silver-blue, and faint, and see-through; you can see the stone arches through them, and the frost on the grass. They don't make any sound at all. They just walk, and talk to each other, and laugh, and look up at the lit windows of the castle, as if they've come home after a very long time away.

Students are standing in all the doorways, watching, in their masks. Nobody's frightened. It's too gentle to be frightened of. Somebody's crying. Somebody's waving to a woman in a Victorian bonnet, and she's waving back.

And then one of the ghosts stops walking.
*meet lettice
*present lettice familiar
@lettice:ghost She's young, twenty-five perhaps, with a round sweet face and big grey eyes and a frizzy perm, in school robes with enormous shoulders, and she's looking straight at you. She walks across the frosted garden, not round it, through it, and the other ghosts turn their heads to watch her go, and she stops in front of you, under the arch, so close you can feel the cold coming off her like a fridge door.

@lettice:ghost "You're the one," she says. Her voice is very faint, like a radio in another room. "Aren't you. The one with the light in your hands. I can see it. We all can." She tilts her head. "It's very bright. It's like looking at a lamp."

You can't speak. The whole cloister has gone quiet, the students in the doorways and the ghosts on the grass. Everyone's looking at you.

@lettice:ghost "Lettice," she says. "Lettice Crane. I was here in nineteen eighty-six. Heronmere." She smiles, sadly. "He's coming back, you know. For what he lost. And you have it."
*clue e05
*choice
  #"Who's coming back?"
    *set wit +5
    @lettice:ghost "Aldric," she says. The name falls into the cold like a stone into a well. "Aldric Morrow. The boy with the light in his hands. Like yours." Her grey eyes are very far away. "We were in the same year. He was the brightest thing I'd ever seen. And they put him out, in the Warding Hall, one Thursday in February, and sent him home in the dark, and told us all not to talk about it." She looks at you. "He came back for me first. Years after. I was the first one he took. Because I was there, and I didn't say anything." Her face flickers. "He's been hungry ever since. For forty years."
  #"What did he lose?"
    *set heart +5
    @lettice:ghost "His light," she says. "His flame. Everything. They took it from him in the Warding Hall, in our first year, by accident, and they were so ashamed they sent him home and pretended he'd never been. He was the brightest thing I ever saw." Her voice drops to almost nothing. "And he never stopped wanting it back. He's been taking other people's, ever since, to keep warm. He took mine."
  #"What do I have? What does he want?"
    *set nerve +5
    @lettice:ghost She reaches out one faint silver hand and holds it over your chest, not touching, just where your flame is, and you feel the cold of her go right through you. "The same thing he had," she says. "The light in your hands. The thing that can put a flame back." She takes her hand away. "He can't do it anymore. He needs someone who can." Her grey eyes fix on yours. "Keep it close, little light. Keep it very, very close."

@lettice:ghost And then the clock in the central tower begins to strike midnight, and she smiles at you, and fades, all at once, like breath on a window. They all do. The whole cloister of silver-blue people, the ruff and the wig and the flying helmet, gone in the space of twelve strokes, and there's only frost on the grass, and students in masks in the doorways, and you.

Everyone's looking at you.
*page_break
*comment ---------------------------------------------------------------- CH08.AFTER.01
*sid CH08.AFTER.01
*date 2026-11-01 00:30
*mood ember
*place P13 lantern_hall_emberfall
*present toby kestrel familiar
The lanterns in the Hall turn back to gold at half past midnight, slowly, from the High Table end, the red draining out of them like colour from a cheek.

@toby:warm Toby finds you sitting on the end of the Heronmere bench with your mask in your lap. He's soaking wet from the knees down{@ember_with = "toby"| (you know why)| (he fell in the Mere; of course he did)}, and his hedgehog mask is on the back of his head, and he's glowing like a lantern himself.

@toby:laugh "She kissed me," he says, in a whisper, sitting down next to you. "Priya. On the actual... on the face. On the Mere. And then I fell in. And then she kissed me [i]again[/i]. Because I fell in, she said, which I don't understand at all, but I'm not going to question it." He stops. He looks at your face properly. "What's wrong? Everyone's saying a ghost talked to you. Mina's already got it on the Wireless."
*if told_toby
  You tell him. Lettice. The boy with the light in his hands. [i]He's coming back for what he lost, and you have it.[/i]

  @toby:scared His face goes from pink to white. "That's you," he says. "She means you. The flame thing. She knows." He grabs your hand. "You have to tell the Headmistress. Right now."
*else
  "Nothing," you say. "Just a ghost. Saying ghost things."

  @toby:neutral He looks at you for a long moment. He doesn't believe you. But he doesn't push. He just sits closer, so your shoulders touch, wet cardigan and all, and stays.

@kestrel:grave The Headmistress is standing in the great doorway of the Hall. She's taken off her silver owl mask. She's looking at you, across the length of the Hall, over the heads of everyone.

She's heard. Of course she has.

@kestrel:grave She comes down the Hall, not fast, between the tables, and stops beside you, and puts one hand on your shoulder, very lightly. "Ghosts say things," she says, quietly, so that only you and Toby can hear. "Some of them are true. Some of them are only what they're afraid of, still, after forty years." Her hand tightens, just a fraction. "Friday. Five o'clock. We'll talk about it."

"She said a name," you say.

@kestrel:grave "I know she did," says Imelda Kestrel. And for the first time since you met her, she looks every one of her seventy-one years. "Go to bed. Both of you. And keep it close."
*set kindling +5
*journal [b]Chapter 8.[/b] At Emberfall every lantern burned red, and everyone floated lanterns on the Mere for the dead and the lost. {@ember_with = "imogen"|Imogen's lantern said KIT SALLOW: her brother, hollowed three years ago, at St Ide's.|}{@ember_with = "rowan"|The apple-fire leaned towards Rowan like a dog towards its master.|}{@ember_with = "cas"|Cas floated a lantern for his grandfather, Lucius Drummond.|}{@ember_with = "idris"|Idris floated a lantern with the names of every Kindler he knows of, and one he'd rubbed out.|} At midnight, the ghost of Lettice Crane, hollowed forty years ago, told you: [i]he's coming back for what he lost, and you have it.[/i] The Headmistress knows the name she meant.
*page_break
*goto_scene ch09
`);
