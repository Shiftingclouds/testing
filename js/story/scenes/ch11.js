NB.scene("ch11", String.raw`
*mood day
*set ch 11
*chapter 11 Thimble Cross
*comment ---------------------------------------------------------------- CH11.VILLAGE.01
*sid CH11.VILLAGE.01
*date 2026-12-05 10:00
*place P34 thimble_cross_snow
*present toby priya jory odile familiar
It snows on the first Friday in December, all night, without stopping, and on Saturday morning the whole world is white and the Mere has frozen at the edges, and the school is allowed into the village.

Nobody was sure it would be. There was a notice on the board in the Lantern Hall for a week that said [i]Village weekend: under review[/i] in the Headmistress's green ink, and people stood in front of it every morning as if it might change while they watched. On Thursday night it did. Somebody had crossed out [i]under review[/i] and written, in the same green ink, [i]Wrap up warm. Stay in pairs. Be back by dark.[/i]

So at ten o'clock on Saturday, four hundred students in scarves and boots and bobble hats go crunching down the shore path round the south end of the Mere, in the snow, laughing, throwing snowballs, with their familiars riding on their shoulders or bounding ahead through the drifts, and {fam_name} {@(familiar = "owl") or (familiar = "raven") or (familiar = "moth")|riding in the hood of your coat, complaining|ploughing through the snow ahead of you, delighted with it}, towards Thimble Cross.

It's the prettiest place you've ever seen. You didn't know places like this were allowed to exist. One crooked high street going up a hill, with the shops leaning together over it like old friends gossiping, all bow windows and bottle glass and crooked chimneys, with snow on every roof and a lantern hanging outside every door. A village green at the top with a stone market cross, and a stall on it with a striped awning. Bunting. Chestnuts roasting somewhere. Smoke going straight up from a hundred chimneys into a sky the colour of pearl.

And on every corner, in long lamp-black greatcoats with the snow settling on their shoulders, a Lamplighter with a brass lamp on a pole, watching.

@toby:warm "Look at it," says Toby, beside you, with snow in his eyelashes and Priya's mittened hand in his, turning round and round in the middle of the street. "[i]Look at it[/i]. It's like the inside of a biscuit tin. I want to live here. I want to die here. Not today. Eventually."

@priya:amused "You'd get lost," says Priya. "It's got one street."

@toby:laugh "I'd find a way."

@jory:tense Jory Penrose is on the corner by the post office, in a greatcoat still too big for him, with his nose gone red and his lamp held very straight. He sees you and brightens, and then remembers he's on duty and un-brightens. "Morning," he says. "Stay in pairs, please. Back by dark. Don't wander off the high street." He lowers his voice. "Don't go up to the Candlestones. We can't see the Candlestones from here."

"How many of you are there?"

@jory:tense He hesitates. "Enough," he says, which is how you know it isn't.

The stall on the green has a hand-painted sign swinging from the awning: [b]PELLOW'S. WANDS POLISHED, MENDED & LISTENED TO. WINTER HOURS.[/b] And under the awning, behind a trestle table covered in green baize and little pots and brushes and rags, in a sheepskin coat with a pencil through her bun and a leather apron over the top, is Odile Pellow.

@odile:warm "The one who couldn't choose," she says, when she sees you. She doesn't smile, exactly; her wide mouth goes up at one corner. "Come on, then. Give it here. Let's see what you've done to it."

You give her your {wand_wood} wand. She holds it across both palms, the way she did on Letter Night, and closes her eyes, and listens to it.

@odile:neutral "Hm," she says. "Runs hot. Hotter than I made it." She opens one eye. "What have you been doing with it?"

*choice
  #"Nothing I'd want to explain on a village green."
    *set wit +5
    @odile:warm "Good answer," says Odile Pellow. "Don't explain it to anyone on a green." She uncorks a little pot of something that smells of beeswax and pine, and starts to work it into the wood with a soft rag, in long slow strokes.
  #"Honestly? I don't know. Things keep happening round me."
    *set heart +5
    *set fr_odile +1
    @odile:warm "Things always happen round a good wand," she says. "It's the ones nothing happens round you want to worry about." She uncorks a little pot of something that smells of beeswax and pine, and starts to work it into the wood with a soft rag, in long slow strokes.

While she works, she hums.

It's an odd tune. Old. Not the kind of tune you hum without thinking; the kind with a shape to it, that goes up and turns round and comes back down, like a bird going round a chimney. Some of the notes don't seem to go with each other. It sounds, if you're honest, like half of something.

"What's that?"

@odile:neutral "Hm? Oh." She doesn't stop polishing. "Something my gran used to sing, when the nights drew in. For keeping the cold out, she said." The rag goes up and down the wood. "There's more to it than this. It's meant for a lot of people. One person on their own, it sounds like this: like somebody waiting for the rest of the choir to turn up." She holds your wand up to the pearl-coloured light, squints down it, and hands it back. It's gleaming. It feels warm and awake in your hand, and a little bit pleased with itself. "There. No charge. First-years' first village day, it's tradition." And then, as you turn to go, quietly, not looking up: "Mind how you go, today. It's too quiet. The birds haven't been singing."

You hadn't noticed. You notice now. The whole snowy village is full of noise, students and shopkeepers and chestnut-sellers, and not one bird.

@toby:neutral "Presents," says Toby, arriving at your elbow with Priya and a paper bag of chestnuts. "Longnight's in a fortnight. Everybody splits up. You can't buy anyone's present with them watching. That's the rule." He looks round at the high street, at the crowd, at the students scattering in twos and threes into the crooked shops. "Who are you going with?"
*choice
  *if (st_rowan >= 2) and (hurt_rowan < 2)
    #Rowan. He's outside the bakery, trying to decide between two identical buns.
      *set village_with "rowan"
      *set st_rowan +1
      *present rowan
      @rowan:amused Rowan looks up as you crunch over, and holds out both buns. "Help," he says. "They're exactly the same. I've been here ten minutes."
  *if (st_imogen >= 2) and (hurt_imogen < 2)
    #Imogen. She has a list. Of course she has a list.
      *set village_with "imogen"
      *set st_imogen +1
      *present imogen
      @imogen:neutral Imogen is standing under the post office lantern with a list in her glove, ticking things off already. "Oh good," she says, when you appear, as if you'd been scheduled. "You can carry things."
  *if (st_saoirse >= 2) and (hurt_saoirse < 2)
    #Saoirse. She's already halfway up a lamppost for a better view.
      *set village_with "saoirse"
      *set st_saoirse +1
      *present saoirse
      @saoirse:laugh Saoirse drops off the lamppost into a snowdrift at your feet and comes up laughing, white from head to foot. "There's a shop that sells [i]only string[/i]," she says. "Come on. Come on."
  *if (st_noor >= 2) and (hurt_noor < 2)
    #Noor. She's standing very still in the middle of the street, looking as if she's forgotten how to have a day off.
      *set village_with "noor"
      *set st_noor +1
      *present noor
      @noor:shy Noor looks up when you touch her sleeve, and lets out a breath. "I don't know what to do," she admits. "Nobody's ill. I keep looking for somebody who's ill."
  *if (st_cas >= 2) and (hurt_cas < 2)
    #Cas. He's reading the window of the bookshop as if it's personally insulted him.
      *set village_with "cas"
      *set st_cas +1
      *present cas
      @cas:guarded Cas doesn't look round when you stop beside him. "Seven books about my family in that window," he says, "and every one of them's wrong in the flattering direction." Then, after a pause: "Fine. Yes. Come on."
  *if (st_idris >= 2) and (hurt_idris < 2)
    #Idris. He's standing in the snow outside the stationer's, writing in his notebook.
      *set village_with "idris"
      *set st_idris +1
      *present idris
      @idris:attentive Idris closes his notebook when you arrive, which he never does. "I was writing down the birds," he says. "There aren't any. That's all I've got so far." He puts it away. "Presents. Yes. I'm told that's the point."
  #Toby and Priya. You've been waiting all term to see Toby let loose in a sweetshop.
    *set village_with "toby"
    *set fr_toby +1
    @toby:laugh Toby punches the air. "Sugar & Sorcery," he says. "Now. Before it sells out of everything."
  #Nobody. You'd like a few minutes on your own in the prettiest place you've ever seen.
    *set village_with "alone"
    *set nerve +5
    Toby looks at you, and then at the Lamplighter on the corner, and then nods. "Pairs," he says. "Technically. I'll say you were with us." He squeezes your arm. "Back by dark."
*page_break
*comment ---------------------------------------------------------------- CH11.SWEETS.01
*sid CH11.SWEETS.01
*date 2026-12-05 11:30
*place P35 sweetshop
*present ombree familiar
Sugar & Sorcery is so full of sweets that you have to turn sideways to get in.

Jars to the ceiling, on shelves that lean, with a ladder on wheels to get at the high ones. Fizzing moonstones that glow faintly blue in their jar. Liquorice bootlaces that tie themselves in knots if you stare at them. Toffee in slabs, broken with a little silver hammer. Chocolate wrens in a glass case, which flutter against the glass when you lean close, and settle when you don't. It smells of sugar and mint and hot chocolate and something like bonfire, and it's warm as an oven, and your glasses, if you had glasses, would steam up at once.

*meet ombree
@ombree:neutral Behind the counter, in a striped bow tie, with his waxed white moustache and his pink bald head shining under the lamp, Mr Ombree is weighing out sherbet on a brass scale with the concentration of a surgeon. "Welcome, welcome, welcome," he says, without looking up. "Nothing that hums, I'm afraid. Not this year."

There's an empty jar at the end of the counter with a label on it in curly writing: [i]Humming Humbugs, the Original![/i] And under that, stuck on, a square of card: [i]Discontinued until further notice.[/i]

@ombree:neutral He sees you looking at it. "Forty years I've sold those," he says, quietly, and his cheerful voice goes a bit thin. "Every first-year buys a bag. They hum in your mouth. Little tune. Harmless." He tips the sherbet into a paper twist, and twists it. "Last month, I opened a new jar, and they were humming the wrong tune. Low. Long." He puts the twist on the counter. "I threw the lot in the Mere. Don't tell anyone. Bad for trade."
*if village_with = "rowan"
  *present rowan
  @rowan:tense Rowan's hand, which had been reaching for a slab of treacle toffee, stops in mid-air. He looks at you. Then, very deliberately, he picks up the toffee anyway. "We're buying presents," he says, to you, low. "We're having a nice day. He doesn't get that as well."
*if village_with = "imogen"
  *present imogen
  @imogen:guarded Imogen writes it down. You see her do it, on the back of her list, under [i]Nana's jam?[/i]: [i]Humbugs, wrong tune, Nov.[/i] She catches you looking, and doesn't apologise. "Everything's evidence," she says. "Until it isn't."
*if village_with = "saoirse"
  *present saoirse
  @saoirse:neutral Saoirse has gone quiet, which is so unusual that Mr Ombree looks at her. She picks up a chocolate wren out of the case, very gently, and it sits in her palm and fluffs its chocolate feathers. "I'd have thrown them in the Mere as well," she says. "Good for you." She buys the wren.
*if village_with = "noor"
  *present noor
  @noor:tense Noor goes straight to the counter. "Has anybody who ate one been ill? Cold hands? Nightmares?" And when Mr Ombree, startled, says he doesn't think so, she makes him write down her name, and the Infirmary, in case.
*if village_with = "cas"
  *present cas
  @cas:neutral Cas, who's been looming by the liquorice pretending not to enjoy himself, puts down the bootlaces. "Good," he says, to Mr Ombree, surprisingly. "You did right." Mr Ombree blinks at him, and at his {@cas_house = "owlcombe"|plum-and-silver|black-and-copper} scarf, and at his face, and seems to decide not to ask.
*if village_with = "idris"
  *present idris
  @idris:attentive Idris has his notebook out again before Mr Ombree has finished. "Which day last month?" he asks. "Please. It matters." And when Mr Ombree tells him, the fourteenth, the morning Bram was found on the Rookery stair, Idris writes it down, and underlines it twice, and doesn't say anything for a long time.
*if village_with = "toby"
  *present toby priya
  @toby:sad Toby, who had come in at a run, has stopped just inside the door with his hat in his hand, staring at the empty jar. "I was going to get those," he says. "I always wanted to try those. My mum said..." He shakes it off. "Doesn't matter. Look. They've got wrens."
*if village_with = "alone"
  On your own, in the warm crowded shop, you stand looking at the empty jar for longer than you mean to, and nobody notices, and after a while you shake yourself and go and look at the chocolate wrens instead.

Presents, though. You've come for presents, and there's nothing the Grey Choir can do about that.
*choice
  #A tin of Mr Ombree's best toffee for Nana Pearl, with a snow scene painted on the lid that actually snows.
    *set gift_for "nana"
    *set heart +5
    @ombree:neutral "For your gran?" says Mr Ombree, wrapping it in brown paper and string. "Tell her it's the good stuff. Tell her Ombree says so." You'll post it tomorrow, by owl, and she'll write back: [i]Toffee was LOVELY. Tin is doing something peculiar. Have put it in the airing cupboard.[/i]
  #A chocolate wren for Toby, who wanted to try the humbugs.
    *set gift_for "toby"
    *set fr_toby +1
    @ombree:neutral Mr Ombree picks the liveliest wren out of the case for you, and boxes it, with holes in the lid. "They go still after a day or so," he says. "Eat it before then. It's kinder." You hide it at the bottom of your bag, under your scarf.
  *if (st_rowan >= 3) and (hurt_rowan < 2)
    #Something for Rowan. A bag of cinder toffee, the kind that's warm right through.
      *set gift_for "rowan"
      *set st_rowan +1
      @ombree:neutral "Cinder toffee," says Mr Ombree approvingly, filling a bag. "Stays hot for a week. Good for somebody who feels the cold." You don't say that Rowan hasn't felt the cold since he was twelve. It isn't the point.
  *if (st_imogen >= 3) and (hurt_imogen < 2)
    #Something for Imogen. A notebook bound in green leather, from the stationer's next door, with a pencil that never blunts.
      *set gift_for "imogen"
      *set st_imogen +1
      The stationer next door wraps it in green paper. The pencil, the stationer promises you, will never blunt, never break, and never write anything you don't mean.
  *if (st_saoirse >= 3) and (hurt_saoirse < 2)
    #Something for Saoirse. A tiny brass bell from the string shop that rings when something's about to fall.
      *set gift_for "saoirse"
      *set st_saoirse +1
      The woman in the string shop, who is extremely old and wears nine pairs of spectacles on chains round her neck, wraps the little bell in tissue paper. "It'll ring before anything falls," she says. "Anything. Chairs. Shelves. People." She looks at you over the spectacles. "It rings a lot, for some."
  *if (st_noor >= 3) and (hurt_noor < 2)
    #Something for Noor. Not medicine. A pair of fur-lined gloves that stay warm, and a tin of good tea.
      *set gift_for "noor"
      *set st_noor +1
      @ombree:neutral Mr Ombree hasn't got gloves, but he knows who has, and sends you to Hask & Needle two doors up, and adds the tea himself, free, when you tell him who it's for. "The Nightingale girl?" he says. "Everybody knows her. Tell her to sit down."
  *if (st_cas >= 3) and (hurt_cas < 2)
    #Something for Cas. From the bookshop: the one book in the window about his family that isn't flattering.
      *set gift_for "cas"
      *set st_cas +1
      The bookseller wraps it without comment. It's called [i]The Drummonds of Hollin Ferry: A Harder History[/i], and it's the only one of the seven with a plain brown cover. You think Cas will either throw it at you or keep it for the rest of his life.
  *if (st_idris >= 3) and (hurt_idris < 2)
    #Something for Idris. A new notebook, and a very small brass lantern for reading by at night.
      *set gift_for "idris"
      *set st_idris +1
      The stationer next door finds you the lantern, the size of a thumb, which lights when you open the book you've clipped it to. You think of Idris in the Long Stacks at two in the morning, and pay for it without looking at the price.
*page_break
*comment ---------------------------------------------------------------- CH11.LANTERN.01
*sid CH11.LANTERN.01
*date 2026-12-05 13:00
*place P36 crooked_lantern
*present moll jory familiar
The Crooked Lantern is the oldest building in Thimble Cross, which means it's the one leaning furthest. You go down two steps to get in, and duck under a beam, and then you're inside the warmest room in the world: low ceiling, black beams hung with hops and horse-brasses and a hundred little lanterns, a fire in a fireplace as big as a shed, students crammed onto every bench and settle and window-seat, and the air thick with woodsmoke and the sweet-spiced smell of hearthale.
*meet moll
@moll:neutral "In you come, in you come, shut that door, you're letting the snow in!" roars the landlady, a huge red-faced woman with brawny arms and grey hair piled up on her head like a cottage loaf. She's carrying six tankards in each hand. "Hearthale? Course you want hearthale. Sit. Anywhere. Sit on the dog if you have to, he won't mind."

The hearthale comes in a pewter tankard, hot, foaming, the colour of dark honey. It tastes of ginger and caramel and something like a bonfire on a cold night, and when you drink it, a warmth goes right down to your boots and settles there, and for a minute you forget everything that's happened this term.
*if village_with = "rowan"
  *present rowan
  @rowan:warm Rowan sits across the little table from you by the fire, with his big hands wrapped round his tankard, and his flame, which you can see without trying now, is burning low and steady and golden, like a hearth banked for the night. He looks happy. You realise you've hardly ever seen him look happy. "Can we just stay here?" he says. "The rest of the year? I'll pay."
  *choice
    #"Tell me something you like. Not something you're guarding. Something you like."
      *set st_rowan +1
      *set heart +5
      @rowan:shy He thinks about it for a long time. "Bread," he says finally. "Baking it. My dad used to. Before." He turns the tankard. "You get up at four and it's dark and the whole house is asleep and it's just you and the oven. Nobody needs you to be brave at four in the morning. They just need the bread." He looks up. "I haven't done it since. I think I'd like to again."
    #"You'd get bored. You'd end up guarding the fireplace."
      *set wit +5
      @rowan:laugh He laughs, properly, the big startled laugh you don't hear often enough, and half the pub looks round. "Probably," he admits. "It does look like it's up to something."
*if village_with = "imogen"
  *present imogen
  @imogen:tired Imogen's list is on the table between you, all ticked off, and she's staring at it as if she's not sure what to do now it's finished. "I don't know how to just sit," she says. "Kit could. Kit could sit in a pub all day and talk to anyone. I used to be so annoyed by it." She turns the tankard round and round. "I'd give anything to be annoyed by it now."
  *choice
    #"Tell me something annoying he did. The most annoying thing."
      *set st_imogen +1
      *set heart +5
      @imogen:laugh She looks at you, startled, and then, to her own surprise, she laughs. "He used to sing," she says. "In the bath. The same three lines of the same song, over and over, for an hour. Every single night. For [i]nineteen years[/i]." She wipes her eyes. "I'd give anything," she says again, but differently.
    #"Then sit. I'll time you. Five minutes, no plans."
      *set wit +5
      *set st_imogen +1
      @imogen:amused She lasts two minutes and forty seconds before she gets out a pencil. But it's two minutes and forty seconds.
*if village_with = "saoirse"
  *present saoirse
  @saoirse:neutral Saoirse sits on the settle with her boots up on the fender, steaming, with the chocolate wren from Ombree's sitting on her knee, fluffing itself. She's been talking non-stop since the sweetshop, and then, all at once, halfway through a sentence about string, she stops, and watches the fire, and doesn't start again.
  *choice
    #Don't say anything. Just sit with her.
      *set st_saoirse +1
      *set heart +5
      @saoirse:warm After a while, she leans her head back against the settle, beside yours. "This is nice," she says, very quietly, as if she's admitting to a crime. "Don't tell anyone I sat still."
    #"You all right?"
      *set st_saoirse +1
      @saoirse:guarded "Fine," she says, too quickly. "Brilliant. Why?" And then, after a bit: "It's the birds. The birds not singing. I can't stop listening for them."
*if village_with = "noor"
  *present noor
  @noor:tired Noor falls asleep. You'd been talking about nothing, about the terrible string shop and the old lady with nine pairs of spectacles, and she'd laughed, and taken her boots off, and put her feet up by the fire, and closed her eyes for a second, and now she's asleep, with her head against the high back of the settle and her mouth slightly open and her tankard tipping gently in her hand.
  *choice
    #Take the tankard out of her hand, put your scarf round her, and let her sleep.
      *set st_noor +1
      *set heart +5
      She sleeps for an hour and a quarter. Moll Dunmore, passing, sees her, and you, and puts a finger to her lips, and turns the whole pub down to a murmur with one look. When Noor wakes, she doesn't know where she is, and then she does, and she looks at your scarf round her shoulders for a long moment, and doesn't take it off.
    #Wake her gently, before she spills it.
      *set st_noor +1
      @noor:shy She wakes with a jerk, mortified. "I wasn't asleep." She was. "I was resting my eyes." But she smiles, and doesn't let go of your sleeve for a while.
*if village_with = "cas"
  *present cas
  @cas:guarded Cas sits with his back to the wall, in the corner, where he can see the door, and drinks his hearthale in small precise sips, and every few minutes someone at another table looks over at him, at his face, at his {@cas_house = "owlcombe"|plum-and-silver|black-and-copper} scarf, and whispers. He pretends not to notice. His jaw says he notices.
  *choice
    #Move so you're sitting between him and the room.
      *set st_cas +1
      *set heart +5
      @cas:surprised He notices. Of course he notices. He doesn't say anything, and you don't say anything, but after a while his shoulders come down half an inch, and he starts to actually taste the hearthale. "Thank you," he says, eventually, to the tankard.
    #"Let them look. You're the best-dressed person in here."
      *set wit +5
      *set st_cas +1
      @cas:amused His mouth twitches. "That," he says, "is the lowest possible bar. There's a man over there wearing a tea cosy." There is. It's working on him, though; you can tell.
*if village_with = "idris"
  *present idris
  @idris:neutral Idris spends the first ten minutes looking at the fire, and the next ten looking at you, which you're more or less used to by now, and then he says, abruptly, "I don't come to places like this. I didn't, at home. There wasn't anyone to come with."
  *choice
    #"Well. There is now."
      *set st_idris +1
      *set heart +5
      @idris:shy He looks at you for a long moment, and his dark face does something complicated, and then he looks back at the fire, and you think his ears have gone slightly darker. "Yes," he says. "I've noticed."
    #"What did you do instead?"
      *set st_idris +1
      *set wit +5
      @idris:neutral "Read," he says. "Mostly about people who'd died. They're easier." He considers. "You're harder. I'm finding I don't mind."
*if village_with = "toby"
  *present toby priya
  @toby:laugh Toby has had half a tankard of hearthale and is telling the whole table about the time his dad set fire to a Christmas pudding and then the curtains and then himself, slightly, doing all the voices, with Priya laughing so hard she's crying into her scarf. You laugh till your ribs hurt. For a whole hour, it's just a pub in the snow.
*if village_with = "alone"
  You get the last seat, a tiny three-legged stool in the chimney corner, practically inside the fireplace, and sit with your hearthale and {fam_name} {@(familiar = "cat") or (familiar = "hare")|curled on your boots|on your knee}, and watch the room: four hundred people's worth of flames, all burning bright and gold and warm in the firelight. Nobody's hollowed. Nobody's hurt. You let yourself just look at them for a while.

The door bangs open, and the snow comes in, and so does Jory Penrose.

@jory:tense He's blue. Actually blue, round the lips. He's been standing on the corner by the post office for four hours. He tries to stand straight, and his teeth chatter, and Moll Dunmore takes one look at him and puts a tankard of hearthale into his hands and physically sits him down on a bench by the fire.

@moll:neutral "Drink that," she says. "All of it. Then you can go back out and be brave again."

@jory:tense "I'm on duty."

@moll:neutral "You're a Lamplighter icicle. Drink."

He drinks. You go and sit next to him. The colour comes back into his face in patches.

*choice
  #"Where's everyone else? The Commander?"
    *set wit +5
    @jory:tense "St Ide's," he says, low. "With Bram. The Commander thinks..." He stops. Starts again. "She thinks if they come for anyone, they'll come back for the ones they've already opened. To finish it. So she's there. And there's six of us here." He looks at the window, at the snow, at the whole crooked village full of students. "Six. For four hundred of you. She said she'd rather have twelve. There isn't twelve. There isn't anyone."
  #"Are you all right?"
    *set heart +5
    *set fr_jory +1
    @jory:tense He looks at you in surprise, as if nobody's asked him that since he put the coat on. "No," he says. And then, because he's twenty-four and honest: "There's six of us. For four hundred of you. The Commander's at St Ide's with Bram, because she thinks they'll come back for the ones they've already opened. There isn't anyone else. There's just us." He wraps both hands round the tankard. "I keep thinking about what I'd do. If they came. And I don't know."

@jory:neutral He finishes the hearthale. He stands up, and buttons the too-big coat, and picks up his lamp. "Stay on the high street," he says, trying to sound like a Lamplighter again. "Back by dark."

And he goes out into the snow.
*page_break
*comment ---------------------------------------------------------------- CH11.CHOIR.01
*sid CH11.CHOIR.01
*date 2026-12-05 14:30
*place P34 thimble_cross_snow
*present odile corliss jory mina toby familiar
It starts with the snow.

You come out of the Crooked Lantern at half past two, into the high street, full of hearthale and warm to your boots, and the snow is falling, big soft flakes, the way it's been falling all day. And then, halfway down to the pavement, every single flake stops.

They just hang there. Millions of them. All the way up the street and all the way up into the pearl-grey sky, perfectly still, like a painting of snow. Somebody laughs, uncertainly, and pokes one with a finger, and it doesn't move.

And the light goes flat.

You know that light. You've seen it on Lamplight Row, and on the Rookery stair. All the colour draining out of things. The lanterns outside every door going dim, and then dimmer, and then blue, and then grey. The red of the post box going grey. The bunting going grey. Your own gloves.

And then the hum.

Low. Long. It comes from everywhere at once: out of the stones of the street and the windows of the shops and the frozen snow hanging in the air. You feel it in your teeth. You feel it in your chest, in the place where your flame is, like a cold thumb pressing. {fam_name} makes a sound you've never heard {@(familiar = "moth")|it|{fam_name}} make, and presses against your neck.

They come down the hill from the green. In daylight. Twelve of them, in grey robes with the hoods up, walking slowly, in step, down the middle of the high street, between the crooked shops, through the hanging snow. Not hurrying. They don't need to hurry. And at the front, a tall woman with a shaved head and her hood pushed back and her pale severe face perfectly calm, with her lips closed, humming.
*meet corliss
@corliss:neutral The Hush. Corliss Fane. You'll learn her name later. You don't need it now. Her eyes are rimmed with grey, and they move over the students frozen in the street the way you'd look along a shelf of jam jars, choosing.

All down the street, students are stopping. Not frozen, exactly. Slowing. Their hands going to their chests. Their faces going puzzled, and then blank, and then puzzled again, as if they've walked into a room and forgotten why. A group of first-years outside the post office, six of them, in Owlcombe blue, have stopped dead in a huddle in the middle of the pavement, holding onto each other, with their faces going grey. One of them is Mina Achebe.

@mina:scared "I can't feel my hands," she says, in a small puzzled voice. "Why can't I feel my hands?"

@jory:scared Jory Penrose is running up the street towards them with his lamp held up in front of him, shouting something, a ward, a Lamplighter's word, and the brass lamp flares white and then gutters, and then goes out, and Jory goes down on one knee in the snow with both hands over his ears.

The Hush turns her head, slowly, and looks at the first-years outside the post office.

And Odile Pellow steps out from under her striped awning, and walks down the hill, and stands in front of them.

@odile:neutral She's still got her leather apron on over the sheepskin coat. She's still got the pencil through her bun. She doesn't take out her wand. She plants her boots in the snow between the six grey-faced first-years and the Grey Choir, and she lifts her chin, and she opens her mouth, and she sings.

It's the tune. The one she was humming this morning over your wand. Her gran's tune, for keeping out the cold. But she's not humming it now; she's [i]singing[/i] it, in a big rough strong voice that fills the high street from one end to the other, in words you don't know, old words, words that sound like the Wordcraft ones: [i]lume[/i] in them somewhere, and [i]hald[/i]. Up, and round, and back down, like a bird going round a chimney.

And the hum [i]falters[/i].

You feel it go. The cold thumb on your chest lifts, a little. All down the street, students gasp, and blink, and look at their hands. The snow in the air trembles. Mina Achebe, behind Odile's back, grabs the first-year next to her and starts pulling.

@corliss:neutral The Hush stops walking. She looks at Odile Pellow with a kind of mild interest. Then she lifts one bare grey hand, and the eleven behind her step forward, and they hum [i]together[/i]: all twelve of them, one note, low and long and enormous, and it rolls down the high street like a wave, and Odile's voice staggers under it like somebody walking into a gale.

She keeps singing. But it's one voice against twelve. And you can hear it now, what she told you this morning: [i]it's meant for a lot of people. One person on their own sounds like somebody waiting for the rest of the choir to turn up.[/i]

You've got about ten seconds, and you know it.
*choice
  #Sing with her. You don't know the words. You know the tune. Stand beside her and sing.
    *set sang_odile true
    *set nerve +10
    *set heart +5
    *set fr_odile +1
    You're beside her before you've decided to be. You don't know the words, so you sing the tune, the way she hummed it over your wand, up and round and back down, and your voice is thin and shaky and nowhere near as strong as hers.

    But it's [i]two[/i].

    You feel it. You feel the difference two makes: the hum pressing down on you both and not being able to find the place where your voices meet. Odile turns her head, very slightly, still singing, and looks at you, and her dark eyes are fierce and glad.

    And then someone else joins in. Toby. Toby Quill, from the door of the sweetshop, in his bobble hat, who doesn't know the tune at all and is getting it wrong, loudly. And one of the first-years. And then, for four bars, maybe five, the high street is full of the sound of something that isn't quite a song yet, a dozen voices trying to find each other.

    And the Hush stops humming, and looks at you.

    Not at Odile. At you. For one long second, with her grey-rimmed eyes. And then, deliberately, she turns her whole Choir on the one voice that knows all the words.
  #Get the first-years out. Mina's pulling one; there are five more.
    *set nerve +10
    *set fr_mina +1
    You go low, under the hum, the way you'd go under smoke. You grab the two nearest first-years by the backs of their coats and haul, and Mina's got another, and between the two of you, you drag four of them, stumbling, grey-lipped, round the corner into the alley by the post office and out of the Choir's line of sight, and go back for the last two.

    When you come back the second time, you can hear Odile's voice going.

    Not stopping. [i]Going[/i]. Thinning, like a rope fraying strand by strand. She's still standing. She's still singing. She hasn't moved one inch from where she planted her boots, between the Choir and where the first-years were, because as long as she stands there, they can't see past her to the alley.

    You get the last two out. Mina Achebe, white-faced, shaking, counts them: six. All six.

    @mina:scared "She's still out there," says Mina. "She's still singing. Why is she still singing? We're gone. We're [i]gone[/i]."

    You know why. You don't say it. She's still singing so they'll keep looking at her.
  #Reach for your flame. You held Toby's on the Mere. You can hold hers.
    *set kindling +10
    *set chill +1
    *set morrow_knows true
    You don't think. You close your eyes, there in the grey street, and reach, the way you did in the boathouse: not with your hands, with the other thing, with the white flame in the middle of you.

    And you see her. Odile Pellow's flame, blazing, huge and gold and rough and bright, like a forge, pouring out of her in the song. And twelve grey threads, reaching for it through the air, thin as cobwebs, hungry, pulling. You get your flame round hers, like cupping your hands round a match in the wind, and [i]hold[/i].

    For about four seconds, it works.

    The grey threads slide off. Odile's voice surges, huge, and the hum staggers. Somebody down the street cheers.

    And then the cold comes up your arms like water rising in a well. You feel it in your fingers, and your wrists, and your elbows. Something's pulling back. Something's noticed. And when you open your eyes, the Hush isn't looking at Odile any more.

    She's looking at you. Straight at you. At the white flame in the middle of you, which you've just lit up in the middle of the high street like a lighthouse. And for the first time, the closed lips curve, very slightly, into something that isn't a smile.

    She's seen you. He'll know by tonight.

It isn't enough.

Whatever you do, it isn't enough. Twelve voices together, one note, low and long, bearing down on one strong rough voice singing half a song meant for a hundred. You hear it go. You'll hear it for the rest of your life, some nights: not a scream, not a crash. Just a woman's voice, singing, and then singing a little less, and then the tune going on for two more notes without her, in your own head, because you know how it goes now.

And then silence.

The snow starts falling again.

The light comes back. The colour. The red post box. The lanterns outside every door, flickering back to gold. The Choir is walking away up the hill, not hurrying, twelve grey backs in the falling snow, and by the time Jory Penrose gets up off his knees and relights his lamp with shaking hands and runs after them, they're gone over the green and into the white, and there's nothing on the hill but footprints, and then not even those.

@odile:hollowed Odile Pellow is standing in the middle of the high street, where she planted her boots. She's grey. She turns round, slowly, and looks at you, at all of you, with eyes the colour of fog, politely. "Hello," she says. "I'm sorry. I think I was in the middle of something." She looks down at her leather apron, at the wand-wood shavings on it, and frowns. "I'm sorry. I don't know what I do."

There's a hole in her. Where the forge was. You don't need the flame-sight to see it. Everybody in the high street can see it.
*if sang_odile
  @toby:hurt Toby is standing beside you in his bobble hat with tears running down his face, still with his mouth open, as if he's still singing and has just noticed nobody else is. "We were doing it," he says. "We were [i]doing[/i] it. There just weren't enough of us."
*page_break
*comment ---------------------------------------------------------------- CH11.AFTER.01
*sid CH11.AFTER.01
*date 2026-12-05 18:00
*mood night
*place P36 crooked_lantern
*present odile arkwright kestrel moll familiar
By six o'clock, the Crooked Lantern is a first-aid post.

Moll Dunmore has pushed all the tables against the walls and put every blanket in the village on the benches, and hum-sick students are sitting in rows by the fire with their cold hands wrapped round mugs of her hearthale, which she's decided is medicine and nobody's arguing. Matron Holloway and Noor came down from the castle on the first boat. The windows are black. Outside, in the snow, Lamplighters, more of them now, with their brass lamps, walking up and down the high street, far too late.

@odile:hollowed Odile Pellow is sitting by the fire. Somebody's taken her apron off, and folded it, and put it on the bench beside her, and she keeps looking at it. She's holding a mug of hearthale she hasn't drunk. When people come over to her, and they do, all evening, shopkeepers and villagers and students whose wands she polished, she smiles at them politely and says "Hello," and doesn't know who they are.

@arkwright:grave Commander Arkwright arrived at four, by broom, from St Ide's, with snow in her cropped grey hair and her scarred face set like a wall. She went up the high street and down it. She talked to Jory Penrose for ten minutes in the alley by the post office, and when he came back in, he'd been crying, and she hadn't shouted at him, and that was worse. Now she's standing at the bar, not drinking, looking at Odile Pellow.

@arkwright:grave "I was at St Ide's," she says. Not to you. To no one. "Guarding the ones who'd already been taken. I thought they'd come back to finish them." A muscle in her jaw moves. "They came to the village in daylight, with four hundred students in it, and six of mine." She turns the brass lamp badge on her greatcoat, round and round. "I can't be everywhere. I've never been able to be everywhere. I just used to be able to pretend."
*if morrow_knows
  @arkwright:grave She looks at you then. Hard. "The Hush saw you," she says, very low, so only you hear. "Didn't she. Whatever you did out there." It isn't a question. "Then he knows. Not guesses. [i]Knows[/i]." She holds your eyes. "From now on, you're not out of my sight. I don't care what the Headmistress says."

@kestrel:grave The Headmistress is sitting on the bench beside Odile. She's been there an hour. She's holding Odile's hand, the one without the mug, and Odile's letting her, politely, the way you'd let a stranger on a train.

@kestrel:grave "Her gran was a Pellow too," says Imelda Kestrel, when you sit down on Odile's other side. "They've made wands on Lamplight Row for three hundred years. Her gran taught her the song. I used to hear her humming it in the shop, when I went in for repairs." She looks at the fire. "I didn't think anyone still knew it all the way through."

"What is it? The song."

@kestrel:grave "The Wren's Song." She says it quietly. "Hester Wren wrote it. The founder. Not in the histories; there's hardly anything of Hester in the histories. But she wrote it. The Choir had a note, even then, even three hundred years ago; this was the answer to it. A counter-song." She turns Odile's cold grey hand over in hers, and looks at the palm, scarred and calloused from forty years of wand-wood. "It doesn't work if you sing it alone. It was never meant to. That's the whole point of it. Hester wrote it for a lot of voices, singing together, so that the Choir's note can't find the gap between them." She closes her eyes. "Odile knew that. She sang it anyway."
*clue e13
*if sang_odile
  @kestrel:warm She opens her eyes, and looks at you. "Jory says you sang with her," she says. "And Toby Quill, and a first-year from Heronmere nobody can name, and some others. For about five bars." Her mouth moves. "I've been Headmistress of this school for eleven years. Nobody has sung that song in the high street of Thimble Cross in my lifetime." She lets go of Odile's hand, and puts hers, for a moment, on your shoulder. "Five bars. Remember what it felt like. You may need it again."

@odile:hollowed Odile Pellow looks up at you both. "That's a pretty name," she says, politely. "The Wren's Song. Is it one of yours?" She looks down at her mug. "I used to know a song. I think. I've got a feeling I used to know a song." She frowns, a tiny puzzled frown. "It's gone now. It doesn't matter."

And she takes a sip of the hearthale, finally, and smiles at nothing, and says, "This is nice," to nobody at all.
*if village_with = "rowan"
  *present rowan
  @rowan:grave Rowan walks you back to the boats, afterwards, in the dark, in the snow, closer than he needs to. His flame is burning so hot you can feel it through both your coats. "I wanted to set them on fire," he says, in a low shaking voice. "All twelve. I could feel it in my hands. I wanted to so much." He breathes out, and it steams. "I didn't. I don't know if that was right."
*if village_with = "imogen"
  *present imogen
  @imogen:grave Imogen sits beside you in the boat going back, with her ticked-off list crushed in her fist. "It's a song," she says, very quietly. "They've been taking people for forty years and the answer was a [i]song[/i], and nobody wrote it down properly, and now the last person who knew it all the way through doesn't know her own name." She looks at the black water. "I'm going to find it. Every word. If it's in that library, I'll find it."
*if village_with = "saoirse"
  *present saoirse
  @saoirse:sad Saoirse is standing on the jetty when the boats come in, looking back at the village, with the chocolate wren from Ombree's cupped in both her hands. It's gone still. They go still after a day or so; Mr Ombree said. It's been six hours. "I thought it'd last longer," she says, and doesn't move, and you stand with her until the last boat.
*if village_with = "noor"
  *present noor
  @noor:tired Noor comes over to you at the end, when the last hum-sick student has been sent up to the castle, and stands in front of you, and looks at you, and then very quietly puts your scarf back round your neck, the one you put round her in the afternoon. "You'll get cold," she says. And then her face crumples, just for a second, and she smooths it out again, and goes to help Matron with the blankets.
*if village_with = "cas"
  *present cas
  @cas:grave Cas stays by the door all evening, where he can see the high street, with his wand in his hand, not saying anything. When people look at him now, it's different. Somebody saw him, in the street, get between the Choir and a Larkspire second-year he's never spoken to. You didn't see it. You hear about it, three times, before the boats. He doesn't mention it at all.
*if village_with = "idris"
  *present idris
  @idris:grave Idris sits on the other side of the fire with his notebook open on his knee and doesn't write anything in it, all evening. When you go over, he shows you the page. It's the one he started this morning, about the birds. At the bottom, in his neat cramped hand, he's written: [i]Birds stopped singing 14 Nov. = Bram. They know before we do.[/i] And under it, crossed out, and then written again: [i]Should have told someone.[/i]
*if village_with = "toby"
  *present toby priya
  @toby:sad Toby doesn't say anything all the way back to the boats, which you've never known him do. At the jetty, he takes your hand, suddenly, the way he held Priya's this morning, and squeezes it hard, and lets go.
*if village_with = "alone"
  You walk back to the boats on your own, in the snow, in the dark, in a line of students walking in pairs, with the Lamplighters' brass lamps swinging all along the shore path. Nobody talks. Behind you, Thimble Cross is lit up in every window, the prettiest place you've ever seen, and there isn't a single bird.
*if gift_for = "toby"
  In your bag, at the bottom, under your scarf, the chocolate wren you bought for Toby is still moving in its box, a tiny flutter against the holes in the lid, like a heartbeat.
*journal [b]Chapter 11.[/b] The first village weekend at Thimble Cross, in the snow. {@village_with = "alone"|You went round the shops on your own.|}{@village_with = "toby"|You spent the day with Toby and Priya.|}{@village_with = "rowan"|You spent the day with Rowan.|}{@village_with = "imogen"|You spent the day with Imogen.|}{@village_with = "saoirse"|You spent the day with Saoirse.|}{@village_with = "noor"|You spent the day with Noor.|}{@village_with = "cas"|You spent the day with Cas.|}{@village_with = "idris"|You spent the day with Idris.|} The Grey Choir walked into the high street in daylight, led by the Hush. Odile Pellow stood in front of the first-years and sang the [b]Wren's Song[/b], Hester Wren's counter-song, alone, until they hummed her out. {@sang_odile|You sang with her, and for five bars there were a dozen voices.|} The song can't be sung alone. The Order can't be everywhere.{@morrow_knows| The Hush saw your flame. Morrow knows.|}
*page_break
*goto_scene ch12
`);
