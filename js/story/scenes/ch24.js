NB.scene("ch24", String.raw`
*mood day
*set ch 24
*chapter 24 The Last Lantern
*comment ---------------------------------------------------------------- CH24.FEAST.01
*sid CH24.FEAST.01
*date 2027-06-26 19:00
*if ending = "H"
  *goto fen
*place P13 lantern_hall
*present kestrel familiar
*comment the rest of each house's year, which you didn't see: your own house's points are yours
*if house != "larkspire"
  *set pts_larkspire +32
*if house != "owlcombe"
  *set pts_owlcombe +30
*if house != "heronmere"
  *set pts_heronmere +34
*if house != "rookhallow"
  *set pts_rookhallow +28
*set house_lantern "larkspire"
*if pts_owlcombe > pts_larkspire
  *set house_lantern "owlcombe"
*if (house_lantern = "larkspire") and (pts_heronmere > pts_larkspire)
  *set house_lantern "heronmere"
*if (house_lantern = "owlcombe") and (pts_heronmere > pts_owlcombe)
  *set house_lantern "heronmere"
*if (house_lantern = "larkspire") and (pts_rookhallow > pts_larkspire)
  *set house_lantern "rookhallow"
*if (house_lantern = "owlcombe") and (pts_rookhallow > pts_owlcombe)
  *set house_lantern "rookhallow"
*if (house_lantern = "heronmere") and (pts_rookhallow > pts_heronmere)
  *set house_lantern "rookhallow"
On the Wednesday after Midsummer, the exam results go up.

They're pinned on the board outside the Lantern Hall at nine in the morning, four long sheets in Miss Dunne's copperplate, and by five past there are two hundred people in front of them, pushing, in the heat, still half asleep. Nobody has slept properly since Sunday. The Lamplighters are leaving a few at a time, by boat, with their greatcoats over their arms; trunks are stacked in the entrance hall like bricks; somebody's familiar has got into the kitchens and nobody has the energy to get it out. You stand at the back of the crowd with {fam_name} and wait for it to thin.

Somebody at the front turns round and finds you and shouts your name, and points at the board, and grins.

You get to the front in the end. You find your name. You've passed. Everything. You stand there and read the line three times, with people jostling past you, crying and laughing and hugging each other, and it seems to be about somebody else, somebody who sat an exam in another life, a fortnight ago, before Midsummer. You wait to feel something. What you feel, mostly, is tired.

*page_break

Then somebody hugs you from behind without asking, and you don't even look round to see who, and that's when you feel it.

It comes up from somewhere under your ribs, all at once, like a laugh or a sob, and turns out to be both. You stand there in front of the board with somebody's arms round you and your face wet and your name on the list in Miss Dunne's copperplate, [i]passed[/i], and you laugh until you have to hold on to the arms to stay upright. Whoever it is laughs too, into the back of your neck. Then they let go, and are gone into the crowd, and you never do find out who it was. You decide not to try. It seems right, somehow, that it could have been anyone.

{fam_name} has been sitting on your feet the whole time, and now gets up, and shakes itself, as if to say that's quite enough of that, and leads you out into the sun.

*page_break

The days after that go strangely, slow and fast at once, the way the last days of anything do.

On Thursday you pack your trunk. It takes all afternoon, because you keep stopping. Here's the scarf you wore to the Glimmer Cup, still smelling faintly of snow. Here's the stub of your Candlewake candle, wrapped in a handkerchief, and a note somebody passed you in Warding with a joke on it you've forgotten the end of. Here's a pebble from the Mere shore that you picked up in September and carried in your pocket for a week for no reason. You hold it in your hand for a long while, and then put it in the trunk, wrapped in a sock, because you can't think what else to do with it.

On Friday the last of the Lamplighters go, in two boats, after breakfast. Half the school goes down to the jetty to see them off, which nobody planned. The Lamplighters stand in the boats in their greatcoats, looking awkward and pleased, and somebody starts clapping, and then everyone is, and one of the older ones, a woman with a white plait, lifts her lamp to the castle as the boats pull away, and holds it up until they're round the point.

On Saturday the castle smells of polish and roses and roasting meat from first light, and the kitchen staff, three cheerful women from Thimble Cross and a boy who can carry six plates on one arm, chase everybody out of the Hall twice before noon.

*page_break

The Leaving Feast is on the last Saturday in June, and it's the last night of the year, and nobody knows how to behave.

*if ending = "C"
  The Lantern Hall is dark. It's been dark since Midsummer; there's no Heartfire now to light it, and the ten thousand paper lanterns hang cold and grey under the roof like a flock of sleeping birds. So the school has lit it by hand. Candles on every table, hundreds, in jam jars and saucers and bottles. Rushlights in the window bays. A fire in both great hearths. It's the most beautiful you've ever seen it, and it's the last time anyone will eat in it. The wards are gone. The Order says Wrenfold can't be defended without them. In September, the school moves, lanterns and all, to a borrowed house on the coast, and starts again.

  All week people have been taking the cold lanterns down, one at a time, off Mr Tully's ladder, and packing them in straw in tea chests with their names on. Nobody's taken yours. It's still up there at the very top, grey now like all the others. You find you can't look at it for long.
*elseif (ending = "G_T") or (ending = "G_M") or (ending = "G_K")
  The lanterns under the roof burn low and blue and flickering, on the broken pieces of the Heartfire, like candles in a draught. Half of them don't burn at all. There are two more empty places in the Hall than there were on Midsummer Eve; you don't need to count them. You know them.
*else
  The ten thousand lanterns under the roof burn gold, all of them, low and warm, and among them, right at the top, one white one.

  The long windows are open. It's still light outside at seven, and will be for hours; the evening sun comes in across the tables in long bars full of dust. The house tables are laid with the best cloths, the ones with the birds embroidered at the corners, and there are roses in jugs, and strawberries, and a whole salmon on every table with a cucumber-scale coat, and nobody's quite hungry and everybody eats anyway.
*if ending = "A"
  Morrow is in the Order's keeping, in Kingsmere. The Choir members they took off the stairs are in the Infirmary, most of them, being given soup and blankets and their own names back, one at a time. Two of them came to the Hall tonight, grey-faced and shy, and sat at the end of the Heronmere table, and nobody asked them to leave.
*if ending = "B"
  You're still cold. You're always cold now, a little, at the heart. You sit close to the candles without meaning to, and people notice, and move the candles closer. Morrow is in a room in the Infirmary with the door unlocked; he could leave, and he doesn't. Somebody said he asked for a candle and a box of matches, and sits all day lighting the candle and blowing it out, and lighting it again.

You sit where you've sat all year, at your own house table, on the same stretch of bench, with {fam_name} under it. The wood's worn smooth there in a shallow dip, from four hundred years of other people sitting in exactly the same place; you noticed it your first night and haven't thought about it since, and tonight you can't stop running your thumb along it. Across from you somebody's crying already, before the soup, and laughing at themselves for crying, and the person next to them is passing them a napkin without looking, the way you'd pass the salt.

The noise is the strangest thing. It's not the noise of a feast. It starts out like one, loud and bright, and then keeps dropping, table by table, for no reason, into odd little silences, as if everybody keeps remembering something at the same moment. Then somebody says something, anything, and it comes back up. You find yourself listening for the silences. You find yourself in them, more than once, with your spoon halfway to your mouth, looking up.

*page_break
*if (ending = "G_T") or (ending = "G_M")
  *present bassani
  @bassani:sad The Headmistress doesn't stand at the top table when the plates are cleared. She isn't there. Imelda Kestrel is gone, into the dark under the Mere with Aldric Morrow and {@ending = "G_T"|Maisie Tully|Toby Quill}. Professor Bassani stands in her place, grey-faced, with his magnificent moustache drooping, and raises her cup for her, and can't speak for a long time. The flower in his buttonhole tonight is a white one. It hasn't changed all week.
  *if ending = "G_T"
    Toby woke on the Wednesday, in the Infirmary, after you'd sat with him three nights running, and asked what day it was, and then asked for Priya. He's thin and grey still round the edges, and he tires in minutes. He's {@house = "heronmere"|sitting next to you on the Heronmere bench|come over from the Heronmere table to squeeze in next to you, and nobody's told him he can't}, alive, and he holds your hand under the table the whole time Bassani is trying to speak.
  *else
    At the end of the staff table, Mr Tully sits with Maisie beside him, holding her hand, and doesn't look up. Every so often she leans over and says something to him, and he nods, and his mouth works, and he doesn't look up.

  @bassani:sad "This year," he says at last, "was not a year like other years. We lost people. Some we will get back. She said that to me, on Midsummer Eve, before the song: [i]some we will get back.[/i] I am going to believe her. Twice, if necessary." He lifts the cup. "To the ones who went quiet. And to the ones who sang."

  "To the ones who sang," says the Hall.

  @bassani:neutral "The House Lantern," he says, "goes to {@house_lantern = "larkspire"|Larkspire|}{@house_lantern = "owlcombe"|Owlcombe|}{@house_lantern = "heronmere"|Heronmere|}{@house_lantern = "rookhallow"|Rookhallow|}." He doesn't say it twice.
*else
  @kestrel:warm The Headmistress stands at the top table, when the plates are cleared, and raises her cup.
  *if ending = "G_K"
    @kestrel:grave She's thinner. She looks ten years older than she did on Midsummer Eve. Toby's place at the Heronmere table is empty, and Priya sits beside it with a hare in her lap, and the Headmistress looks at the empty place before she speaks, and keeps looking.
  *if ending = "E"
    @kestrel:grave She looks at you before she speaks. Everyone does, now. Nobody sits within three places of you{@final_shape = "together"|, except one, who has sat beside you every day since Midsummer and will not be moved|}. Every candle on the table leans towards you, and everyone sees it, and nobody says anything.
  *if ending = "D"
    @kestrel:grave She looks at you before she speaks. It's not the look people have been giving you all week, the careful one, the one for somebody who's been ill. It's the look she gave you in the Weathervane Room in September, across the fire. As if you were the most interesting thing she's seen in forty years. You didn't know how much you needed it until it came.

  @kestrel:grave "This year," she says, "was not a year like other years." The Hall is silent. "We lost people. Some of them we'll get back, and some of them we won't. We lost Magnus Grey, who was braver than any of us knew. We found out things about this school, and about ourselves, that we'd hidden for forty years." She looks round the Hall. "And we learned a song. All of us. Every house. Four hundred voices. I have been a teacher for thirty years and I have never seen anything like it, and I never will again." She lifts the cup. "To the ones who went quiet. And to the ones who sang."

  "To the ones who sang," says the Hall.

  @kestrel:neutral "The House Lantern," she says, "for the most points this year, goes to..." and for the first time in a year, she almost smiles. "{@house_lantern = "larkspire"|Larkspire.|}{@house_lantern = "owlcombe"|Owlcombe.|}{@house_lantern = "heronmere"|Heronmere.|}{@house_lantern = "rookhallow"|Rookhallow.|}"

*page_break
*if house_lantern = house
  Your table goes up like the Brightfire. People are standing on the benches. Somebody lifts you onto their shoulders. High over the top table, the {@house = "larkspire"|gold and rose|}{@house = "owlcombe"|plum and silver|}{@house = "heronmere"|sea-green and pearl|}{@house = "rookhallow"|black and copper|} lantern flares so bright it lights the whole Hall.
  *achieve house_lantern
*else
  The {@house_lantern = "larkspire"|Larkspire|}{@house_lantern = "owlcombe"|Owlcombe|}{@house_lantern = "heronmere"|Heronmere|}{@house_lantern = "rookhallow"|Rookhallow|} table goes up like the Brightfire, and you cheer for them anyway, as loud as anyone, because they sang.
*if (final_shape = "together") and (final_rel = "rowan")
  *present rowan
  @rowan:warm Later, when the benches are pushed back and the band from the Brightfire is tuning up on the dais, Rowan comes over from the Larkspire table and sits down beside you without asking, as if he's always sat there. He's warm as a banked fire. He puts his arm along the back of the bench behind you and leaves it there. "My mum wants to meet you," he says. "All of them do. I've told them you're shy. You're going to have to be shy. There's no other way to survive it."
*if (final_shape = "together") and (final_rel = "imogen")
  *present imogen
  @imogen:warm Later, when the benches are pushed back, Imogen finds you with a folded sheet of paper in her hand. "The plan," she says. "For the summer. With us in it." She watches you read it. There are footnotes. The last line, underlined twice, says [i]no more plans after this one[/i]. "That's a lie," she says. "But I meant it when I wrote it."
*if (final_shape = "together") and (final_rel = "saoirse")
  *present saoirse
  @saoirse:warm Later, when the benches are pushed back, Saoirse drags you out onto the floor for the first dance and then, halfway through it, stops dead among everybody and just stands there, holding on to you, still, while the whole Hall goes round you both. "Practising," she says. "I'm getting good at it."
*if (final_shape = "together") and (final_rel = "cas")
  *present cas
  @cas:warm Later, when the benches are pushed back, Cas comes over from his own table with a letter in his hand, on thick cream paper, and gives it to you without a word. It's from his grandmother. It's addressed to you. It says she'll expect you for tea in August, and lists what you should and shouldn't wear, and at the bottom, in a different ink, as if added later: [i]He sounds happy. Thank you.[/i] Cas pretends he hasn't read it. He has. You can tell from his ears.
*if (final_shape = "together") and (final_rel = "noor")
  *present noor
  @noor:warm Later, when the benches are pushed back, Noor comes and sits beside you with two plates of pudding and puts one in front of you. "Eat," she says. Then she eats hers, all of it, slowly, with her feet up on the bench opposite, which you've never once seen her do. "Matron's covering the Infirmary," she says. "I asked her. I asked for a night off." She looks astonished at herself. "I keep doing that."
*if (final_shape = "together") and (final_rel = "idris")
  *present idris
  @idris:warm Later, when the benches are pushed back, Idris sits down beside you with his notebook shut on the table in front of him, and his hand flat on top of it, as if to stop it opening by itself. "I've finished my second year," he says. "Officially. They've given me a certificate. There's a spelling mistake in it; I'm choosing not to mind." He looks at you. "Question of the day. Where will you be in September?"
*if ending = "D"
  You watch it all from your seat, and you can't feel any of it. Not the lanterns, not the flames, not the warm slow pulse under the floor. You can see it. You can't feel it. People keep coming up to you all evening and holding your hands and not knowing what to say. On Monday you'll get the Lantern Train south, and the ordinary train to Wrexley, and walk from the station with your trunk bumping behind you on its little wheels. The Headmistress says you'll always have a place here. You know you will. You also know you won't come.
*if ending = "F"
  At the end of the feast, Commander Arkwright finds you at the doors, in her greatcoat. "Monday," she says. "The Fen. He's out there with a piece of you in him, and you're the only one who can feel where it is." You nod. You already knew. You've felt it all week, like a toothache, somewhere to the north.


The band from the Brightfire starts up on the dais, the fiddle and the drum and the accordion held together with tape, and plays the first slow thing badly and the second fast thing well, and then the benches are pushed back against the walls with a great scraping and the floor is full.
*if ending = "E"
  Nobody asks you to dance. You stand by the wall in the shadow of a window bay and watch the floor fill, and along the wall beside you the candles in their sconces lean towards you, one after another, as far as flames can lean, and you keep your hands in your pockets and your eyes on the dancers and tell them no, quietly, over and over, all night. People dance past you and don't look. One or two do, and smile, quickly, bravely, and look away. You find you're grateful for every one of them. At ten the kitchens send up more strawberries, and at eleven, for reasons nobody can explain, a second whole salmon.
*elseif ending = "D"
  People keep pulling you up to dance, and in the end you let them, and it turns out you can still do that; your feet don't need a flame. You dance with people from your own house and from the other three, with a Heronmere girl who cries the whole way through a reel and won't stop dancing, with a Larkspire prefect who is surprisingly light on his feet and apologises every time he spins you. Somebody's familiar gets loose among the dancers and has to be chased. Nobody minds. At ten the kitchens send up more strawberries, and at eleven, for reasons nobody can explain, a second whole salmon.
*else
  You dance. Everybody does. You dance with people from your own house and from the other three, with a Heronmere girl who cries the whole way through a reel and won't stop dancing, with a Larkspire prefect who is surprisingly light on his feet and apologises every time he spins you. Somebody's familiar gets loose among the dancers and has to be chased. Nobody minds. At ten the kitchens send up more strawberries, and at eleven, for reasons nobody can explain, a second whole salmon.

Every so often, between dances, you look up. You can't help it. Everybody does it, all evening: stops in the middle of something and looks up at the lanterns under the roof, as if to check they're still there.

*page_break

At midnight, when the band has stopped and the candles are guttering and people are drifting out onto the lawns in twos and threes, you go and stand at the top of the boathouse steps and look at the Mere. It's still light in the north, the midsummer kind of light that never quite goes. Somebody is singing, down by the water, the lark's line, badly, on their own. Nobody tells them to stop.

The air smells of cut grass and the Mere and the last of the roses. Behind you the castle's still loud: a door bangs, somebody shrieks with laughter on a stair, a window goes up and somebody shouts a name across the lawn and somebody else shouts back. In front of you the water is perfectly still, pale as milk under the pale sky, with the boats pulled up in a row on the shingle and the boathouse a black shape against it. You can see the far shore, and the line of the hills, and the Candlestones on the top of their hill, a small grey ring.

A year ago you didn't know this place was here. You stand at the top of the steps and try to remember what that was like, not knowing, and can't, quite. It's like trying to remember what your own name sounded like before you learned it.

{fam_name} comes and sits against your leg. Down by the water the singer reaches the end of the lark's line and, after a pause, starts it again from the beginning, still badly, and this time, from somewhere up on the lawn, somebody joins in with the owl.

*page_break
*goto epilogue
*comment ================================================================ fen
*label fen
*place P40 fen_chapel
*present jory familiar
On the night of the Leaving Feast, you're on the Fen, sitting on the upturned boat by the dyke with Jory Penrose, watching the sun go down over nothing.

It takes a long time. It's the last Saturday in June, and the light hangs on and on over the reeds, gold and then green, and the midges come up out of the water in clouds, and the bell in the drowned chapel is silent for once; there's no east wind tonight. Two hundred miles south, or thereabouts, four hundred people are sitting down to the last supper of the year under ten thousand lanterns. You've been thinking about it all day. You've been trying not to.

On Midsummer Eve itself you didn't sleep. Neither did Jory. Neither of you said so; you just both happened to be in the kitchen at half past ten, in your coats, and he put the kettle on, and you sat at the table with the window open on the reeds and the long blue light that wouldn't go, and listened to nothing. The clock on the dresser ticked loudly. You'd never noticed it before. At a quarter to eleven he got up and went and stood at the back door, looking south, with his mug going cold in his hand.

*page_break

At eleven o'clock, out on the black water, the drowned chapel's bell rang.

There was no wind. The reeds were dead still. It rang once, and then again, and then went on ringing, slow and steady, the way it rings in an east wind, for as long as it takes to sing a song through twice. Then it stopped. Jory didn't turn round from the door. You didn't get up from the table. The lamp on the dresser, which had been burning low and steady all evening, leaned, very slightly, south, and stayed leaning until the bell stopped, and then straightened.

@jory:tense "Was that them?" Jory said, eventually, without turning round.

You told him you didn't know. It was true. You sat up till the sky went pale, and nothing else happened, and in the morning neither of you mentioned it.

*page_break

You found out what happened at Midsummer on the Tuesday, from a newspaper.

@jory:tense Jory came up the stairs two at a time and then stopped dead in your doorway, as if he'd run into glass. He had the [i]Evening Lamp[/i] in his hand, the Lamplighters' paper, folded small, still damp from the owl that brought it. He didn't give it to you. "It's all right," he said. "Mostly. It's mostly all right. Read the top first."

You read the top first.

[b]MIDSUMMER AT WRENFOLD: THE CHOIR BROKEN, THE SCHOOL STANDS.[/b]

You sat down on the bed. You hadn't known you were holding your breath until it went.

Underneath, in smaller type: [i]four hundred students of all four houses, in a counter-song not heard within living memory, led by the Headmistress...[/i] Led by the Headmistress. You read that line twice. It was supposed to be you, and it was her, and it held. You didn't know what to feel, so you went on reading.

*page_break

@jory:neutral "Page two says the boathouse didn't work," said Jory, reading upside down over your shoulder. "Forty of us and a trap, and he walked straight through it." He winced. "She'll hate that they printed that."

[i]...Aldric Morrow reached the root of the rock beneath the school, where the founding flame is kept. The Headmistress went down after him alone...[/i]

"Alone?"

@jory:tense "Keep going," said Jory, very quietly.

It was at the bottom of the column, in the smallest print on the page, as if they hadn't quite known how to say it. [i]The Heartfire was cracked, and held. Imelda Kestrel is understood to have given her own flame to close the crack. All of it. She is alive, and resting in the school Infirmary. She will not practise again.[/i]

You read it three times. The words didn't change.

"She's got no magic," you said.

@jory:neutral "No." Jory sat down on the end of the bed. "She's alive, though. It says. Look. Alive." He pointed, as if you could argue with the print.

The last line was on its own, under a little drawn lamp. [i]The man Morrow is believed to have escaped by water into Saltmarrow Fen, carrying a stolen flame. The public are asked not to approach.[/i]

Into the Fen. Neither of you said anything. Jory got up, and went to the window, and stood there with his back to you looking out at the reeds and the water and the drowned chapel's tower, for a long while, with his hand on the frame. Then he went downstairs and checked the locks on every door in the house, twice. You heard him doing it. You've heard him do it every night since.

*page_break

@jory:neutral "She'd have done it anyway," says Jory, now, out of nowhere, swatting midges. "The Headmistress. If you'd been there. You know that? She'd have gone down first. She'd have put herself in front." He doesn't look at you. "That's what the Commander says. I asked."

@jory:tense "I don't know if that helps," he adds, after a while. "It's meant to."

It does, a bit. Not enough. You don't tell him that. You sit on the boat together while the sun finally goes, and the first star comes out over the chapel tower, and somewhere across the water a bittern booms like somebody blowing across the top of a bottle.

There was a letter, too, in the same bag as the paper, in handwriting you knew. You've read it so many times since that the folds have gone soft.
*if (st_rowan >= 3) and (hurt_rowan < 2)
  [i]We held it. We sang and we held it. I sang the lark's line and I wasn't brave at all, I was terrified the whole time, and I did it anyway, and I thought about you the whole time. Come back in September. Please. R.[/i]
*elseif (st_imogen >= 3) and (hurt_imogen < 2)
  [i]I wrote it all down. Every minute. You'll want to read it. I kept a space in the notes where you should have been; it's blank. Come back and fill it in. I. S.[/i]
*elseif (st_saoirse >= 3) and (hurt_saoirse < 2)
  [i]We did it. I stood still the whole song. Four minutes. Longest I've ever stood still in my life. Wish you'd seen. S.[/i]
*elseif (st_noor >= 3) and (hurt_noor < 2)
  [i]The Headmistress is going to be all right. I've been sitting with her. She asks about you. So do I. Eat something. N.[/i]
*elseif (st_cas >= 3) and (hurt_cas < 2)
  [i]I went down to the door. I couldn't get through; it had shut behind her. I stood outside it all night. Whatever it costs, I said. It turns out it costs standing outside a door all night. C.[/i]
*elseif (st_idris >= 3) and (hurt_idris < 2)
  [i]Question of the day: would you have gone down? I think you would. I think that's why she sent you away. I've stopped being angry about it. Mostly. I. P.[/i]
*else
  [i]We sang it. All of us. It was the most beautiful thing I've ever heard. We missed you. Custard misses you. Toby would have got it all wrong and nobody would have minded. P. M.[/i]

You take it out again now, in the last of the light, and read it once more, and put it back in your pocket. {fam_name} climbs up onto the boat beside you. Jory goes in to put the kettle on. The reeds whisper. It's the last night of the school year, and you're a long way from school.

*page_break

The dark comes, eventually, the thin midsummer kind, green at the edges. The bittern booms again, nearer. You can hear Jory in the kitchen, through the open window, clattering cups and singing something under his breath, very flat; after a moment you realise it's the heron's line, or what he thinks the heron's line is, and he's got the third note wrong. You don't go in and tell him. You sit on the boat and listen to him get it wrong, again and again, all the way through, with a kind of ache that isn't quite unhappiness.

{fam_name} is a warm weight against your side. Across the water the chapel tower stands up black against the green, with the first star over it. Somewhere very far south, on a lit hill, four hundred people are dancing, and somebody's singing the lark's line badly by the water, and nobody's telling them to stop. You can't see it. You can't hear it. You find, sitting there, that you can almost feel it anyway, the way you'd feel a fire in another room: a warmth at the edge of things, a long way off, that has nothing to do with you any more, and that you're glad of.

@jory:neutral "Tea," says Jory, at the window. "Come in. You'll get eaten alive out there." You get up, stiff from the boat, and go in.

*page_break
*label epilogue
*comment ---------------------------------------------------------------- CH24.EPILOGUE.01
*sid CH24.EPILOGUE.01
*date 2028-06-26 20:00
*mood dusk
*comment ---- the anchor: one per ending
*if ending = "A"
  *place P13 lantern_hall
  *present kestrel
  A year on, you're in the Lantern Hall again, at the Leaving Feast, a second-year, sitting at the end of your house table with your back to the warm wall, watching somebody else's last night.

  The Hall is loud. The lanterns are low and gold. Up at the very top, where they always are, one white one. A first-year from your own house, a woman with grey in her hair and a baker's burn on her wrist, leans across the bench to you in the middle of the pudding and asks, the way they all do sooner or later, whose it is. You tell her it's yours. She looks at you, and up at it, and back at you, and doesn't ask anything else. Last Thursday, in the Old Cloisters, you taught her the wren's line. She got it wrong. So did you, once.

  It's a warm night. The long windows are open again, the way they were a year ago, and the swifts are screaming round the towers in the last of the light, and the smell of cut grass comes in across the tables. The second-years have their own end of the bench now, by the wall, and their own jokes, and their own way of not looking at the first-years crying into their trifle, which is to pass them the cream without comment. You've been a second-year all year and you're still not used to being the one who knows where the spoons are kept.

  @kestrel:warm The Headmistress stops behind you on her way down the Hall, with her cup in her hand, and bends to say it in your ear. "Every Midsummer," she says. "From now on. The whole school, all five voices, at the Proving. I've made it a rule. I've never made a rule I liked so much." She straightens. "Hester's portrait has spoken three times this year, you know. The same word every time." She's smiling. "[i]Louder.[/i]"

  *page_break

  Odile Pellow reopened her stall on the green at Thimble Cross at Christmas. You went, in the snow, and put your wand down on her counter, and she polished it without a word, and hummed while she did it: the whole song, all five voices at once somehow, under her breath. The flames Aldric Morrow stole went home on Midsummer night, and at St Ide's they've been waking all year, slowly, one by one: Delphine, and Bram, and her. Morrow himself sits by a window in a quiet house in Kingsmere, in the Order's keeping. The Commander says he doesn't speak. You think about him sometimes. Not tonight. Somebody passes you the cream, and you pass it on.

  Later, when the Hall's emptying, you slip out by the side door and go down the east stair, round and round, to the Old Cloisters. It's cool down there, as it always is, and smells of damp and candle-wax, and the carved wrens look down from the capitals. The wren door is shut. It's warm when you put your palm flat on it, warm as a hand, and under your palm, very faintly, you feel the hum: Hester's hum, slow and steady, the way it's been every night since Midsummer.

  You hum back. Just the first bar. Under your hand, the door changes its note, very slightly, to match.

  You stand there for a while with your hand on the warm wood and your forehead nearly touching it, not thinking anything, and then you go back up to bed.
*if ending = "B"
  *place P39 st_ides
  *present idris
  A year on, you're at St Ide's, on a Monday, with Idris, as you are every Monday.

  It's a twenty-minute walk from the station, uphill, past a row of shops and a church and a park with a bandstand, and you've done it so many Mondays now that your feet know it without you. Idris always stops at the same newsagent for the same paper, which he never reads, and the same bag of lemon sherbets, which he does. The woman at the desk at St Ide's knows you both by name. She doesn't ask what you do. She's seen what you do; she just buzzes you through, and says, "Ward Six today, is it?" and you say yes, and she says, "Good luck, loves," and means it.

  *page_break

  The ward is long and quiet and full of evening light. The blinds are up. They weren't, the first time you came; they'd been down for years, and nobody had noticed. Idris has the list open on his knee, in his cramped tiny hand, every name in every ward, and a pencil behind his ear. Today's name has a line under it.

  You sit down on the edge of the bed. She's forty, perhaps. Grey, polite, blank. You take her cold hands, and close your eyes, and go down, and down, and there it is, at the bottom of her, like the last coal in a grate. You breathe on it. It takes everything you've got this week. It always does now.

  @idris:attentive "Well?" says Idris, very quietly, when you open your eyes. He always asks. He always knows.

  You don't answer. You don't need to. The woman in the bed is looking at her own hands, and the grey is going out of them, from the fingertips, like frost going off a window. She looks at you. She opens her mouth, and doesn't know yet what she wants to say, and starts to cry instead.

  *page_break

  @idris:warm Idris takes the pencil from behind his ear and draws a neat line through her name. Then he puts his hand on the back of your neck, where you're coldest, and leaves it there. "Fifty-one," he says. "Home by Christmas, at this rate. All of them." He isn't writing that down. He doesn't need to.

  On the way out, in the corridor, you pass an old man with a paper bag of oranges, walking slowly, stopping at every door. Aldric Morrow comes most weeks now, from the cottage at Thimble Cross that the Headmistress found for him. He sits by the beds of the people he took, and says their names, and asks them to forgive him. Some of them do. He nods to you. He's got a candle stub in his coat pocket; you can feel it, a small blue flame, his.

  You walk back down the hill to the station in the dusk, slowly, because you're always slow after. You're cold, the way you're always cold now; you wear a scarf in June, and people stare, and you've stopped minding. Idris walks on your cold side without being asked. Halfway down he gives you a lemon sherbet out of the bag, and then, after a moment, the whole bag. At the bottom of the hill the streetlamps are coming on, one after another, down the long road towards the station, and every one of them leans towards you a little as you pass, the way they used to, and then straightens, and you smile at them, tired, the way you'd smile at a dog that's pleased to see you.
*if ending = "C"
  *place P34 thimble_cross
  *present tully
  A year on, you're on the green at Thimble Cross, on the night of the Leaving Feast, because the school has come back for it: one night, with trestle tables on the grass and bunting between the trees and every candle in the village lit.

  There are tables on the green, borrowed from the church hall and the pub and three farms, with paper cloths weighted down with jam jars. There's a band, the Brightfire band, on a hay cart under the oak. There's the whole school, all four houses, in their best, eating pies off paper plates and standing about in the long gold evening with drinks in their hands, looking across the Mere at the hill, and then looking away, and then looking again. Nobody planned that. Everyone does it.

  *page_break

  There are lanterns strung along the high street, and somebody has to light them. It's you tonight. You go along the row with a long brass taper, one at a time, the way you do every Tuesday on the rota at the new house on the cliffs, and when you get to the end of the row Mr Tully is there, sitting on the churchyard wall, watching you do it.

  @tully:warm "Wrist," he says. "Less wrist. You're lighting it, not stirring it." He takes the taper off you and does the last one himself, with one small flick, and gives it back. "They're colder, the new ones. I know. You get used to it." He looks at the taper, not at you. "I never thought I'd see them all lit by hand. Every one. Four hundred people with tapers." He almost smiles. "It's a lot of lanterns."

  From the green you can see it across the Mere: the old castle, dark, a big stone house on a hill. No lights. The Order walled up the root in July.

  *page_break

  @tully:sad "He asked to go back down, at the end," says Mr Tully, looking at it. "Aldric. The first week of July. Starving. He asked the Commander, and she let him, and I went with him. I held the lamp." He's quiet. "He sat against the rock where it used to be. He looked up. That's all. He didn't take anything. There wasn't anything to take." He puts his cap back on. "Everybody else lived. You know that. Everybody."

  You know that. That's what you chose. You'd choose it again. You sit on the wall beside him, and look at the dark castle, and hum, and after a while, so does he.

  Behind you on the green, the band strikes up something fast, and somebody whoops, and the dancing starts. The new lanterns you lit sway on their string along the high street, cold and yellow and ordinary, every one lit by hand. Up the road, under one of them, two first-years who've never seen the old castle lit are trying to light a candle with a match in the wind, and failing, and laughing, and trying again. One of them gets it. They both cheer as if they've done something enormous, and you suppose they have.

  @tully:warm "Wrist," says Mr Tully, beside you, very quietly, watching them. "Less wrist." He doesn't get up to tell them. He just sits on the wall and says it, to nobody, with his cap on his knee, smiling.
*if ending = "D"
  *place P01 home_kitchen
  *present kestrel
  A year on, you're in the kitchen at 7 Viaduct Street, with the yellow light, and the wobbly chair, and the eight-fifteen shaking the cups on their hooks.

  You got your old job back. Glossop never asked. Dev knew better than to. Your kettle doesn't boil on its own any more. The candles don't lean. You remember everything: the Lantern Hall, and the Mere at Candlewake, and your hands on the crack. Tonight is the Leaving Feast. You've had it circled on the calendar by the fridge all year, and at seven o'clock you caught yourself standing at the sink, listening, as if you might hear four hundred people cheer from however many miles away they are. You didn't. You made tea.

  You still listen for it. The hum. Some nights you wake at three and lie there in the dark with the trains going over, listening for a sound you used to hear through a floor a long way from here, and the flat is silent, and the fridge ticks, and that's all. You've stopped crying about it. Mostly. You keep a candle on the windowsill, a white one, and you don't light it, and you don't throw it away.

  *page_break

  At nine the doorbell goes.

  They come. That's the thing nobody told you would happen. Toby, most months, with a cake that hasn't caught fire; Nana Pearl's been teaching him scones. A Lamplighter with a letter. But tonight, when you open the door, it's the Headmistress, in her long coat, on your doorstep in Wrexley, under the streetlamp, holding a white candle in a jam jar.

  @kestrel:warm "I left early," she says. "Bassani's giving the speech. He'll say everything twice; they won't miss me." She holds out the jar. The candle's lit. "The Heartfire's burning bright. Every lantern. The first-years looked up at the top of the Hall tonight to see if yours was still there. It is." She looks past you, into the kitchen. "May I?"

  She comes in. She sits on the wobbly chair as if she's sat on it all her life, and you put the kettle on, and wait for it, the ordinary way, and she doesn't say anything about that at all.

  *page_break

  @kestrel:warm She tells you about the year. Not the big things; the small ones. A Rookhallow first-year who turned the Undercroft boiler into a very large and very angry swan. Bassani's buttonhole, which went tartan for a week in February and nobody knows why. The new wren's-line leader, a quiet Heronmere boy who reminds her, she says, of someone. She makes you laugh twice. She drinks two cups of tea and admires the eight-fifteen when it goes over, rattling the cups on their hooks, as if it's been laid on specially for her.

  @kestrel:grave At eleven, she puts her cup down and looks at you across the kitchen table, under the yellow light, the way she looked at you across the fire in the Weathervane Room a long time ago. "I wanted you to know," she says, "that it's still there. All of it. The lanterns, and the song, and the castle. Every night. Because of you." She folds her good hand over her scarred one. "That's all. I didn't want you to have to wonder."

  She stays till midnight. When she goes, she leaves the candle in its jam jar on your windowsill, next to the white one you've never lit. It burns there all night. You sit up and watch it.

*if ending = "E"
  *place P37 candlestones
  A year on, you're on the Candlestones, alone, on the night of the Leaving Feast, burning.

  Down across the Mere, the castle's lit in every window, and you can feel every one of them from here, the way you'd feel a crowd behind a door. There's a candle in the cup of the stone beside you. You didn't light it. It's leaning towards you anyway, as far as a flame can lean, and you put your hand over it, very gently, and tell it no, and it straightens, and you take your hand away. That's what your life is now. Every flame in the valley, in the village, in every person who walks past you in the street: you could lean on any of them, and they'd bend. And you don't. Not once. Every day, not.

  You left Wrenfold in July. People had started to be afraid.

  It wasn't anything anybody said. That was the worst of it. Nobody was unkind. Nobody asked you to go. It was just that conversations stopped when you came into a room, and started again too brightly. It was just that people sat a little further off at meals, without seeming to notice they were doing it, and that first-years flinched when you passed them on the stairs, and didn't know why, and apologised. It was the candles in the Hall, every one of them, leaning towards you at supper, and four hundred people watching them lean and pretending not to.

  *page_break
  *if final_shape = "together"

    There's one flame that has never leaned towards you. Not once, not even at the start. It's the one you go home to. You don't understand it, and you've stopped trying to, and it's the only thing that lets you sleep.

  Aldric Morrow died in the Order's keeping in the autumn. Before he died, he asked to see you. You didn't go. Jory Penrose, who still climbs this hill to find you when {@final_shape = "together"|hardly anyone else will|nobody else will}, brought the message up in his pocket instead, and stood well back while you read it. [i]Now you know,[/i] it said. [i]I'm sorry. I'm sorry you know.[/i]

  You go down the hill at midnight, the long way, by the lane between the hawthorns, where the may has long since gone over and the hedges are thick and green and full of small sleeping things. You can feel every one of them, every bird, every vole, every fox in its earth, small flames in the dark on either side of you. You walk down the middle of the lane with your hands in your pockets and don't touch any of them. At the bottom, in Thimble Cross, a dog barks at you from a garden, and then stops, and whines, and goes and lies down, as if it's been told.

  *page_break

  Hester's fire is warm in you. It's the loneliest thing in the world.
*if ending = "F"
  *place P40 fen_chapel
  A year on, you're on the Fen, with the Lamplighters, still hunting.

  The Order's house on the edge of the marsh is a long low brick thing with a slate roof that leaks in two places, and a kitchen that's always full of greatcoats drying in front of the range, and a map of the Fen on the wall of the front room so covered in pins and string and pencilled dates that you can barely see the Fen under it. You've lived in it since August. You know which stair creaks, and which tap runs brown for the first minute, and that the Commander takes her tea black and stands to drink it, even here, even at midnight.

  *page_break

  You're sitting in the upstairs window of the Order's house on the edge of the marsh, with {fam_name} and a mug of tea gone cold, and you can feel him. That's why they need you. The piece of your flame he tore out burns in him like a coal, and you can feel where it is the way you feel the sun on the side of your face with your eyes shut. Tonight it's east, and far, and still. Twice this year you've been close enough to see him, a tall grey figure on a causeway at dusk, turning to look back at you. Twice he's gone into the water.

  *page_break

  You've learned the Fen this year. You didn't want to. You know the dykes and the droves now, and which causeways go under at a spring tide, and where the old eel-traps are, and how to walk across a reed bed at night without a lamp by feeling for the small cold flames of the things asleep in it. You know the drowned chapel's bell by heart. You can tell an east wind from a north-east one by the note.

  Downstairs, Jory Penrose, who's your partner now, is telling someone in the kitchen that you'll have him by Christmas. The Commander, at the table, says nothing. Somewhere a long way south, they're holding the Leaving Feast without you, and you find you don't mind as much as you thought you would. Out on the black water, the drowned chapel's bell rings in the east wind. The coal in the dark moves, a little, south. You put the mug down and reach for your boots.

  Jory's at the bottom of the stairs before you've got the second one laced, with his greatcoat on and two lamps lit and a flask of tea under his arm. He doesn't ask. He never asks now. He just raises his eyebrows, [i]south?[/i], and you nod, and he grins, the way he grinned on a smoky bank with two crumpled train tickets, a long time ago, and holds the door.

  The Commander doesn't look up from the table as you go past. She lifts her mug an inch off the table, which is as close as she ever comes to a blessing, and puts it down again, and goes back to her map.
*if ending = "G_T"
  *place P16 heronmere
  *present toby
  A year on, after the Leaving Feast, you're sitting on the edge of the pool in the Heronmere cloister with your feet in the cold water and the fish nosing at your toes, and Toby Quill comes out of the kitchens with the last of the cake on a tray.

  It's late, and the cloister's empty, the way it only ever is after a feast, when everybody's gone up to bed or out onto the lawns. The lanterns along the colonnade burn low and blue, the way all the lanterns burn now, and the blue light lies on the water of the pool and on the pale stone and on the fish going round under your feet, slowly, like thoughts. It's quiet enough to hear the fountain at the far end, which has a drip in it that nobody's ever fixed, and a moth batting at a lantern, and, from the kitchen passage, Toby, whistling, badly, the heron's line.

  *page_break

  He made it. He bakes in the kitchens now, at four in the morning, the way he always wanted to, and nothing he makes catches fire. He sits down beside you and puts his feet in the water too, and yelps, and doesn't take them out.

  @toby:warm "Lemon," he says, handing you a slice. "Priya says it's too sharp. Priya's wrong." He eats his own in three bites. Then he's quiet for a while, looking at the water, at the lanterns reflected in it, burning low and blue. "I'd have chosen her, you know," he says. "The Headmistress. If it'd been me. She'd have known what to do."

  You don't say anything. You've known for a year that he'd say it one day.

  @toby:sad "I'm glad you didn't," he says, to the water. "I'm sorry I'm glad. But I am." He bumps your shoulder with his. He never says it again.

  *page_break

  For a while neither of you says anything. The fish nose at your toes. Toby wipes lemon off his fingers onto his trousers, the way he always has, and Priya always tells him not to, and he always does. He's thinner than he was. He gets tired in the evenings, still, and has to sit down on stairs, and some mornings his hands go grey at the tips and he has to hold them under the hot tap in the kitchens until they remember. He doesn't talk about that either.

  @toby:warm "Priya's making me do the Proving again," he says eventually. "Next week. Light a lantern, in front of everyone. She says I've earned a second go." He kicks the water, gently. "I'm going to set fire to it. I know I am. Four hundred people watching." He looks at you sideways. "You'll come? Stand at the front? So I've got someone to look at?"

  You tell him you'll be there. He nods, as if that settles it, and eats the last slice of cake that was meant to be yours, and you let him.

  The Order is still looking, under the Mere, on the Fen, for an old grey man with two lanterns on strings. Wrenfold burns low and blue on what's left of Hester's fire. You sit by the water until the cake's gone.
*if ending = "G_M"
  *place P28 tully_cottage
  *present tully
  A year on, after the Leaving Feast, you walk down to the Lanternwarden's cottage by the boathouse for cocoa, the way you do most Saturdays, and Maisie Tully opens the door with flour on her hands.

  The cottage is warm and low and smells of paraffin and cocoa and the oil Mr Tully uses on his ladder, and tonight, under all of it, faintly, of something burning. The kettle's on the range. The cat's on the kettle-shelf. There's a lantern hanging in the window, the way there's always been, burning low and blue on what's left of Hester's fire, and beside it, on the sill, in a jam jar, a white candle that Maisie lit with her hand.

  *page_break

  She came back from the root with her spark relit and her memory mostly whole. She's taking her Burning Year again, seven years late, in the first-year classes, with people half her age, and she's good. She lights the high lanterns on her father's round with her hand, the ones he can't reach any more. Her exam results are framed on the wall over the stove. She put them there herself.

  @tully:warm "She framed them," says Mr Tully, behind her, pretending to be embarrassed. "I said you don't frame exam results. She said watch me." He can't finish. He takes his cap off and turns it in his hands. He can't talk about her without crying, still, and he can't talk about the rest of it at all.

  *page_break

  The Headmistress is gone, and Toby Quill, into the dark with Aldric Morrow. Tomorrow is Sunday, and on Sundays now Mr Tully goes to the edge of the Mere and stands there with his cap in his hands, the way he used to stand by Maisie's bed. You go with him, sometimes. Neither of you says anything. Tonight, though, there's cocoa, and Maisie burns the milk, and her father laughs until he has to sit down.

  You stay late. Maisie shows you her Turning homework, which is a matchbox that's supposed to be a beetle and is mostly still a matchbox, with legs. Mr Tully falls asleep in his chair by the range with his cap over his face. When you go, at midnight, she walks you to the door, and stands in it with the light behind her, and thanks you, very seriously, the way her father says [i]mind the step[/i]. Before you can say anything she shakes her head. She knows who else was down there. She looks past you at the dark Mere for a moment, and says she's going to be worth it, that's all, and goodnight, and shuts the door gently, and you hear her laughing at something her father's said in his sleep.
*if ending = "G_K"
  *place P25 weathervane_room
  *present kestrel
  A year on, after the Leaving Feast, you climb the sideways stair to the Weathervane Room, and the Headmistress is already there, as she is every night, with the maps.

  The stair turns its sideways turn and leaves you, as it always does, slightly further along than you meant to go, outside the door of the Weathervane Room. You can hear the clocks through it, ticking out of step, and the scratch of a pencil, and the creak of a weathervane coming round. You don't knock. You haven't knocked since September.

  *page_break

  They're on every wall now. Maps of the Fen, of the Mere, of the passages under the rock, pinned over the barometers, with pencilled lines and dates and question marks. Hester's journal is open on the desk. The weathervanes, all of them, point the same way: down. She made her speech tonight, and came straight back up here, and so did you.

  @kestrel:grave "Sit," she says, without looking round. You sit in the chair across the fire, where you sit most evenings, and pick up the book you were reading last night. She hasn't slept a whole night since Midsummer. Toby. Maisie Tully. She has turned the whole of Wrenfold, and the Order, and everything she has, towards getting them back.

  @kestrel:tired After a while she puts her pencil down. "You were right," she says. "To choose me. I've wanted to say that properly for a year." She looks at the fire. "Not because I mattered more. I didn't. Because I'm the one who won't stop."

  *page_break

  You don't answer that. There isn't an answer. You turn a page of your book instead, and she picks up her pencil, and for a long while there's only the clocks, and the fire, and the creak of the weathervanes all pointing down. Out of the window, the Mere is dark and still, and somewhere under it, a long way down, under the rock, out towards the Fen, are two people you know, held on grey threads. She's drawn a line on the big map towards where she thinks they are. It's in pencil. It's been rubbed out and drawn again so many times that the paper's gone thin.

  At midnight she looks up and says, "Go to bed," and you say, "In a minute," and neither of you moves.

  On the mantelpiece, Hester's portrait watches the two of you, and says nothing. Tomorrow is Sunday, and Priya will come up with Custard the hare, and sit with you both, and not ask.
*if ending = "H"
  *place P01 home_street_night
  A year on, you're back at Viaduct Street, and you don't know if you'll ever go back to Wrenfold.

  It's a warm night, the end of June, and the street smells of hot tarmac and somebody's barbecue and the river. Kids are playing out late on their bikes under the streetlamps, shouting, the way you did once. The chip shop on the corner has its door propped open. A train goes over the viaduct at the end of the road, every ten minutes, rattling the windows, the way it always has.


  They wrote. They all wrote, all summer: come back in September. The Headmistress wrote herself, in green ink, from the Infirmary, with no magic left: [i]A place is kept for you. It always will be.[/i] The letter's on your mantelpiece still. You didn't go. You're not sure why. Because the first time it mattered, you weren't there. Because the song was sung without you and it held, and you can't decide if that's the best thing that ever happened or the worst.

  You went back to work in September. {@told_nana|You told Nana Pearl you needed time. She said you could have all the time you wanted, and then put a sandwich in your coat pocket every morning for a month without saying anything, which was her way.|You told Dev you'd been abroad. He said, "Where?" and you said, "North," and he said, "Fair," and didn't ask again.} The year went by. Buses, shifts, the eight-fifteen over the viaduct. The kettle boils when you switch it on and not before. Most days, it's fine. Some days you catch yourself watching a candle in a shop window, waiting for it to lean.

  *page_break

  Tonight is the Leaving Feast. You go out after dark and walk to the end of the street, under the arches of the viaduct, where the streetlamps buzz and the pavements are still warm from the day, and hum the wren's line under your breath. A train goes over, shaking the arches. The streetlamp over your head leans towards you, very slightly, the way it did before the letter came, before any of it, and this time you let it. You stand there a long while, thinking about the road not taken, and whether it's still there.

*page_break
*comment ---- supporting consequences
*if ending != "G_M"
  *if (ending = "G_T") or (ending = "G_K")
    Mr Tully still does the round every night, with his long brass taper, on lanterns that burn low and blue now, and never quite catch. He doesn't talk much. On Sundays he takes a boat out to the middle of the Mere, over the place where the rock goes down, and sits there with the oars shipped and his cap in his hands until it gets dark. Nobody asks him in.

    You went out with him once, in October, without asking. He didn't say anything when you got into the boat; he just moved along the thwart to make room, and handed you an oar. You sat out there together over the deep place, with the castle behind you and the light going, and the water was so still you could see the low blue lanterns of Wrenfold reflected in it, upside down, flickering. When it was dark he rowed you back and said, "Mind the step," at the jetty, as he always does, and that was all, and it was a great deal.
  *elseif maisie_lit
    Mr Tully still does the round every night, with his long brass taper, and Maisie does it with him; she lights the high ones with her hand. {@tully_fate = "exposed"|The Order never charged him. Arkwright said he'd paid.|The Headmistress never told the Order all of it. She said he'd paid.} He knows every student's name. He says [i]mind the step[/i]. On Candlewake, Maisie gave him a new candle, twelve dips, and he's lit it every night since.

    You see them sometimes on the round, at dusk, the two of them going along the corridors with the long brass taper and the ladder: him on the ground, steadying it, and her at the top, lighting the high ones with a touch of her hand, both of them arguing the whole way about whose turn it is to carry the oil. At the end of the round, every night, he takes his cap off to the last lantern, the way he always has. She's started doing it too. Neither of them seems to know the other one does it.
  *else
    Mr Tully still does the round every night, with his long brass taper, and goes to St Ide's every Sunday, and sits by Maisie's bed, and says [i]Absalom. I'm your dad, love.[/i] {@(ending = "A") or (ending = "B") or (ending = "C") or (ending = "D") or (ending = "E")|But the spark's brighter now. You went with him in the spring and looked. One more Sunday, you think. Maybe two.|The spark's still there. He writes and tells you so, every month, in his careful capitals: one more Sunday, maybe two.}

    He's started bringing her things. A pebble from the Mere shore. A sprig of may in May. A paper lantern, unlit, which the nurses let him hang over her bed, and which, one Sunday in March, all on its own, glowed for a moment, very faintly, gold, and went dark again. He doesn't tell anyone about that except you. He doesn't need to tell you what it meant to him. You saw his face.
*if ending != "G_T"
  *if (ending = "G_M") or (ending = "G_K")
    Toby's hare, Custard, lives with Priya now. Priya still plants a row of seeds every Greening, and says the same name over each one, and one of these years, she says, he'll be there to see them come up.

    Custard has opinions about this. She sits in the middle of the seed bed every spring and refuses to move, and Priya has to plant round her. Priya says that's Toby's influence. She says it fondly, and then has to go inside for a minute. When she comes back out she's always got flour on her hands from somewhere, as if she's been baking, and she hasn't, and nobody asks.
  *elseif toby_lit or (ending = "A") or (ending = "B") or (ending = "C") or (ending = "D") or (ending = "E")
    Toby bakes. Of course he does. He got an apprenticeship in the Wrenfold kitchens in the summer, and nothing he makes catches fire, and every Friday he brings a Victoria sponge to whoever needs one most. He and Priya are getting married at Brightfire. He's asked you to hold the rings. "Don't drop them," he said. "Or do. It'd be funny."

    He bakes you a cake on the anniversary of Midsummer, without being asked: a lemon one, a bit too sharp, with a wren piped on top in icing that looks more like a pigeon. He knows it looks like a pigeon. He's told you it's a pigeon, on purpose, so that you'll laugh, so that the day will have something stupid and sweet in it. You laugh. You eat two slices. He watches you eat them with his chin on his hands, looking enormously pleased, and that's the day done.
  *else
    Toby's still at St Ide's, by the window, with the hare on his knees. Priya goes every Sunday. So do you, when you can. You sit on the end of the bed and he tells you, very gently, that you've got a kind face, and one day, you tell yourself, you'll have enough fire to give him again.

    Priya's started bringing him things to smell: bread, oranges, a sprig of rosemary, the inside of a tin of rock buns. She says she read somewhere that smell goes deepest, that it's the last thing to go and the first thing to come back. Most days he smiles at them kindly and says they're lovely. Once, at Christmas, with the rock buns, he frowned, just for a second, as if he were trying to remember a word. Priya hasn't stopped talking about it since.

*page_break
*if told_nana
  Nana Pearl knows everything. "From the beginning," she said, the first night you were home, in her kitchen, and put the cover over the budgie's cage so he wouldn't interrupt, and you started with the letter under the door. She stopped you at Magnus Grey. She got up and stood at the sink with her back to you for a while. "Go on," she said, not turning round. When you got to the jetty, and the ghosts walking home across the water, she turned round at last, with her glasses off, and said, "Well. Your great-gran would be proud," and put the kettle on. She's learned the underneath of the Wren's Song properly now, all of it. She sings it at the washing-up. The toffee tin is still snowing in her airing cupboard. On Sundays she rings you, wherever you are, at six o'clock exactly, and asks if you're eating, and whether it's cold up there, and if anybody's been unkind to you, because if they have she knows a song now, and she isn't afraid to use it.
*else
  Dev still texts you at midnight. [i]u alive?? glossop asking about the overtime sheet again. I said you ate it.[/i] He's never asked where you went. He never will. At Christmas, he gave you a mug that says WORLD'S MOST MYSTERIOUS COLLEAGUE, and you laughed so hard you cried, and he watched you, and grinned, and didn't ask.

  You use the mug every day, wherever you are. When you're home in Wrexley, you and Dev get chips on a Friday from the place by the station and eat them on the wall outside, the way you always did, and he tells you about Glossop and the overtime sheet and his cousin's wedding, and you tell him nothing, and he doesn't mind. Once, in the spring, a streetlamp over the wall leaned towards you while he was mid-sentence, quite noticeably, and he looked up at it, and then at you, and then went on with the story about his cousin without missing a beat. You love him very much for that. You've never told him. You will.

  Nana Pearl sends parcels: socks, toffee, a newspaper cutting about a man in Wrexley who grew a marrow the size of a dog. You keep the cutting on the wall. You don't know why. It makes you happy.

*page_break
*comment ---- the relationship, or the life you chose

*if (final_rel = "rowan") and (final_shape = "together")
  *present rowan
  @rowan:warm And Rowan. Rowan, who stood still. He bakes bread now, on Sundays, at four in the morning, the way his dad taught him, in whatever kitchen you're both in, and he's frightened of the oven every single time, and he tells you so, and does it anyway. He's warm all the time. You've stopped noticing. Some nights you fall asleep against him on the sofa and wake up with the blanket steaming. He says it's the best thing that's ever happened to him. He says it most days. He means it every time.
*if (final_rel = "rowan") and (final_shape != "together")
  Rowan writes, sometimes. He's gone back to the fire service, in Kingsmere, where they have a unit now for people like him, who walk into fires and come out. He's still frightened. He says so, in every letter, at the end, like a signature. [i]Still frightened. Still going in. R.[/i] You keep them all.
*if (final_rel = "imogen") and (final_shape = "together")
  *present imogen
  @imogen:warm And Imogen. Imogen, who made no plan. She's making plans again now, of course; she can't help it; but the plans have you in them, in pencil, underlined, and she shows you them before she's finished, which she never used to do for anyone. {@kit_lit|Kit comes to Sunday lunch, and sings in the bath, the same three lines, and she pretends to be annoyed.|She still goes to St Ide's every other Sunday, and you go with her, and she talks to Kit about the weather.} She sleeps. That's the main thing. She sleeps now.
*if (final_rel = "imogen") and (final_shape != "together")
  Imogen joined the Order in the end. Arkwright took her in September without being asked twice. She writes in precise pencil, once a month, and at the bottom of every letter there's a line she's crossed out, and you can never quite read what it said.
*if (final_rel = "saoirse") and (final_shape = "together")
  *present saoirse
  @saoirse:warm And Saoirse. Saoirse, who stood still. She hasn't, much, since; she's built eleven things this year, and finished nine, which she says is a world record. But at the end of every day she stops. Every day. She sits down beside you and goes still, completely still, and says, "Look. I'm not going anywhere," and every day she means it, and every morning she's still there.
*if (final_rel = "saoirse") and (final_shape != "together")
  Saoirse's in Cardiff, near her dad, and her mam, now, too; they have Sunday dinner, all of them, once a month, which she describes in her postcards as "a war crime" and "actually quite nice". She's building a boat. She says when it's finished she'll sail it up the coast and knock on your door. You believe her, mostly.
*if (final_rel = "cas") and (final_shape = "together")
  *present cas
  @cas:warm And Cas. Cas, who said it without a sneer. His grandmother wrote back. She put your name in the family book, in ink, next to his, and sent you a photograph of the page, and a pot of jam, and a list of instructions for handling Drummonds that runs to four sides. He laughed so hard when he read it that he had to sit down. He laughs a lot now. People still stare at him. He's stopped noticing. He only ever looks at you.
*if (final_rel = "cas") and (final_shape != "together")
  Cas went back to Hollin Ferry in the end. Not to the family; to the house. He's turning it into something, a school or a hospital or a place for late flames whose families took their names out of the book; he's not sure yet. He writes. At the end of every letter: [i]Whatever it costs. C.[/i]
*if (final_rel = "noor") and (final_shape = "together")
  *present noor
  @noor:warm And Noor. Noor, who asked. She still works too hard. She still says [i]in a minute[/i]. But at the end of every shift, she comes home, and sits down, and lets you make her tea, and put her feet up, and she says, every single time, as if it's still a surprise: "You did that without me asking." You always will.
*if (final_rel = "noor") and (final_shape != "together")
  Noor runs the Infirmary at Wrenfold now; Matron Holloway retired at Christmas and put her name forward before anyone could argue. She sends you notes on the back of prescription pads, wherever you are; they turn up in your coat pockets and under your door. [i]Eat something. Sleep. I'm all right. I mean it this time. N.[/i]
*if (final_rel = "idris") and (final_shape = "together")
  *present idris
  @idris:warm And Idris. Idris, who stopped studying you. He hasn't written a word about you in a year; he says so, proudly, often. He writes about everything else. In the evenings he reads to you, from whatever he's reading, in his quiet exact voice, and asks you one question a day, and you've never once run out of answers.
*if (final_rel = "idris") and (final_shape != "together")
  Idris writes a book, in the end: [i]The Kindlers: A History[/i]. There's a chapter about Aldric Morrow, and a chapter about Hester Wren, and a last chapter with no name in it, about someone who lit a candle in a corridor in their first term. He sends you the first copy. On the flyleaf, in his cramped hand: [i]Question of the day. I. P.[/i]
*if (final_rel = "single") or (final_rel = "")
  And you. Just you, and it's enough. Friends on every side of your life, in both your worlds: Nana's letters, and Dev's texts at midnight, and post with a wren on the stamp. People who'd go into the dark for you, and have, and people you'd go for. Nobody at the centre of it but you. You chose that. You'd choose it again.
*comment ---- the last image
*if ending != "D"
  At the end of the night, wherever the night has found you, you take one paper lantern, and hold it in your hands, and don't use your wand. It lights. {@ending = "E"|It burns every colour at once, too bright to look at, and you let it go quickly, before anyone sees.|It burns white, the way it did the first night, the way it always will.} You let it go, and it rises, turning slowly, up into the dark, and you watch it until it's a star among stars.
*else
  At the end of the night, somebody puts a lit candle into your hands. You can't light them any more. But somebody always lights one for you. It burns white, the way yours used to, and you hold it until it's burned right down, and it's enough.

*if ending = "A"
  *ending A
*elseif ending = "B"
  *ending B
*elseif ending = "C"
  *ending C
*elseif ending = "D"
  *ending D
*elseif ending = "E"
  *ending E
*elseif ending = "F"
  *ending F
*elseif ending = "G_T"
  *ending G_T
*elseif ending = "G_M"
  *ending G_M
*elseif ending = "G_K"
  *ending G_K
*else
  *ending H
`);
