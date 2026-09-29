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
The week after Midsummer goes by like a week after a funeral, or a wedding, or both: everybody tired, everybody kind, nobody sure what day it is.

People sleep. People sit on the lawns in the sun and don't talk, or talk all at once. The Lamplighters leave a few at a time, by boat, with their greatcoats over their arms in the heat. Trunks appear in the corridors, and then in the entrance hall, and then on the jetty, stacked like bricks. On the Wednesday the exam results go up on the board outside the Hall, and people crowd round it, pushing, and you find your name, and you've passed. Everything. You stand there reading it three times, and it seems to be about somebody else, somebody who sat an exam in another life, a fortnight ago. {fam_name} sleeps in a patch of sun on your bed every afternoon, and you lie beside it with your eyes shut, and don't sleep.

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
  @saoirse:warm Later, when the benches are pushed back, Saoirse drags you out onto the floor for the first dance and then, halfway through it, stops dead in the middle of everybody and just stands there, holding on to you, still, while the whole Hall goes round you both. "Practising," she says. "I'm getting good at it."
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

At midnight, when the band has stopped and the candles are guttering and people are drifting out onto the lawns in twos and threes, you go and stand at the top of the boathouse steps and look at the Mere. It's still light in the north, the midsummer kind of light that never quite goes. Somebody is singing, down by the water, the lark's line, badly, on their own. Nobody tells them to stop.
*page_break
*goto epilogue
*comment ================================================================ fen
*label fen
*place P40 fen_chapel
*present jory familiar
On the night of the Leaving Feast, you're on the Fen, sitting on the upturned boat by the dyke with Jory Penrose, watching the sun go down over nothing.

It takes a long time. It's the last Saturday in June, and the light hangs on and on over the reeds, gold and then green, and the midges come up out of the water in clouds, and the bell in the drowned chapel is silent for once; there's no east wind tonight. Two hundred miles south, or thereabouts, four hundred people are sitting down to the last supper of the year under ten thousand lanterns. You've been thinking about it all day. You've been trying not to.

You've read about Midsummer in the paper.

Not the ordinary paper. The Lamplighters' paper, the [i]Evening Lamp[/i], that comes to the house on the Fen by owl, two days late, folded small. Jory brought it up to your room on the twenty-second with a face like a man bringing bad news, and it was, and it wasn't.

[b]MIDSUMMER AT WRENFOLD: THE CHOIR BROKEN, THE SCHOOL STANDS.[/b] Four hundred students, all four houses, singing a song nobody had sung in four hundred years, led by the Headmistress. The Grey Choir's note broken all through the castle. Forty Lamplighters, and a trap at the boathouse that didn't work, and one that did. Aldric Morrow in the root of the rock under the school, at the Heartfire, and the Headmistress going down after him alone. At the bottom, in small print, the thing they couldn't quite say: the Heartfire cracked, and held, because Imelda Kestrel put her own flame into the crack, all of it. She's alive. She's in the Infirmary. She has no magic left. Morrow is gone, into the Fen, with a stolen flame.

Into the Fen. You looked out of the window at the reeds and the water and the drowned chapel's tower, and wondered how close he went. You're still wondering. Every night since, you've gone to the window before bed and looked.

@jory:neutral "She'd have done it anyway," says Jory, now, out of nowhere, swatting midges. "The Headmistress. If you'd been there. You know that? She'd have gone down first. She'd have put herself in front." He doesn't look at you. "That's what the Commander says. I asked."

@jory:tense "I don't know if that helps," he adds, after a while. "It's meant to."

It does, a bit. Not enough. You don't tell him that. You sit on the boat together while the sun finally goes, and the first star comes out over the chapel tower, and somewhere across the water a bittern booms like somebody blowing across the top of a bottle.

There was a letter, too. It came with the paper. You've read it so many times the folds have gone soft.
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
*label epilogue
*comment ---------------------------------------------------------------- CH24.EPILOGUE.01
*sid CH24.EPILOGUE.01
*date 2028-06-26 20:00
*mood dusk
*comment ---- the anchor: one per ending
*if ending = "A"
  *place P13 lantern_hall
  A year on, you're in the Lantern Hall again, at the Leaving Feast, a second-year, sitting at the end of your house table with your back to the wall, watching somebody else's last night.

  Last Sunday was the Proving. You watched the new first-years light their lanterns, one by one, and go up among the ten thousand, and every one of them looked up to the very top of the Hall first, to see if the white one was still there. It is. You came back in September. Most of you did. Second year is quieter, and harder, and better; you know where the stairs go now. You teach the wren's line to the first-years in the Old Cloisters on Thursday nights, and they get it wrong, and so did you. Every Midsummer from now on, the whole school will sing the Wren's Song at the Proving, all five voices. The Headmistress has made it a rule. Hester's portrait, over the Weathervane Room fire, has said three words since, all of them [i]louder[/i].

  Aldric Morrow is in the Order's keeping, in a quiet house in Kingsmere, an old grey man who can't take anything any more. The Commander says he sits by the window and doesn't speak. The flames he stole went home on Midsummer night, and at St Ide's that summer, they started, slowly, to wake: Delphine, and Bram, and Odile Pellow, who reopened her stall on the green at Thimble Cross at Christmas and polished your wand and hummed the whole song, all five voices, under her breath.
*if ending = "B"
  *place P39 st_ides
  A year on, you're at St Ide's, on a Monday, with Idris, as you are every Monday.

  The ward is long and quiet and full of light. The blinds are up. They weren't, the first time you came; they'd been down for years, and the nurses had stopped noticing. You have a list. Idris keeps it, in his cramped tiny hand. Every name in every ward. Every week, the two of you sit down beside one more bed, and you take someone's cold hands, and look, and find the spark, and breathe on it. It takes you a whole day, now; you haven't much fire left, and it comes back slowly, and afterwards you sleep for twelve hours with a hot-water bottle. But one a week is fifty-two a year, and the wards at St Ide's are getting quieter, and emptier, and every Monday evening somebody walks out of the front door who came in on a stretcher.

  Aldric Morrow lives in a cottage on the edge of Thimble Cross that the Headmistress found for him. He can light a candle. That's all. He sits in his window at night with a candle burning blue, and people from the village leave him bread, and some days he walks down to St Ide's with a bag of oranges and sits by the beds of the people he took, and says their names, and asks them to forgive him, and some of them do.
*if ending = "C"
  *place P34 thimble_cross
  A year on, you're on the green at Thimble Cross, on the night of the Leaving Feast, because the school has come back for it: one night, with trestle tables on the grass and bunting between the chestnut trees and every candle in the village lit.

  Wrenfold lives in a borrowed house on the cliffs above the sea now, a draughty old manor with too many chimneys, and every lantern in it is lit by hand, every night, by whoever's on the rota. You're on the rota on Tuesdays. It takes two hours. You go round with a brass taper like Mr Tully's, lighting them one by one, and you know every one of them, and you think of him every time. It isn't the same. It's colder. There are no wards, only people: Lamplighters on the cliff path, and students who take turns sitting up at night, and the Wren's Song, which everybody knows, and sings, at the slightest excuse.

  From the green you can see it across the Mere: the old castle, dark, a big stone house on a hill. The Order walled up the root. Aldric Morrow died in their keeping in the first week of July, starving, with nothing left to take. At the end he asked to be taken back down to the root, and they let him, and he died there, sitting against the cold rock where the Heartfire had been, looking up. Nobody else died. Everybody lived. That's what you chose. You'd choose it again.
*if ending = "D"
  *place P01 home_kitchen
  A year on, you're in the kitchen at 7 Viaduct Street, with the yellow light, and the wobbly chair, and the eight-fifteen shaking the cups on their hooks.

  You got your old job back. Glossop never asked. Dev knew better than to. Your kettle doesn't boil on its own any more. The candles don't lean. You remember everything: the Lantern Hall, and the Mere at Candlewake, and the Heartfire in the root of the rock, and your hands on the crack. You remember it every day. Some days that's worse than forgetting would be. Most days it isn't.

  Tonight is the Leaving Feast. You know because you've had the date on the calendar by the fridge all year, circled, and because at seven o'clock you caught yourself standing at the sink, listening, as if you might hear four hundred people cheer from however many miles away they are. You didn't. You made tea.

  And they come. That's the thing nobody told you would happen. On the first Saturday of every month, the doorbell goes, and there's somebody on the step: Toby, with a cake that hasn't caught fire; Nana Pearl's been teaching him scones. Or a Lamplighter with a letter. Or the Headmistress herself, once, in her long coat, on your doorstep in Wrexley, holding a white candle in a jam jar. "The Heartfire's burning bright," she said. "Every lantern. You did that." She came in, and sat on the wobbly chair, and drank your tea, and stayed till midnight.
*if ending = "E"
  *place P37 candlestones
  A year on, you're on the Candlestones, alone, on the night of the Leaving Feast, burning.

  Down across the Mere, the castle's lit in every window, and you can feel every one of them. You left Wrenfold in July. You had to. Every flame in the castle leaned towards you, and people started to be afraid, and you couldn't stop it. You can feel everything. Every lantern in the valley. Every candle in Thimble Cross. Every flame in every person who walks past you in the street, and you could lean on any of them, and they'd bend, and you never do. Not yet. Not once. Every day you don't. That's what your life is now: every day, not.
  *if final_shape = "together"

    There's one flame that has never leaned towards you. Not once, not even at the start. It's the one you go home to. You don't understand it, and you've stopped trying to, and it's the only thing that lets you sleep.

  Aldric Morrow died in the Order's keeping in the autumn, an old grey man with nothing left. Before he died, he asked to see you. You didn't go. He sent a message instead, by Jory Penrose, who still comes to see you when {@final_shape = "together"|hardly anyone else will|nobody else will}. [i]Now you know,[/i] it said. [i]I'm sorry. I'm sorry you know.[/i]

  Hester's fire is warm in you. It's the loneliest thing in the world.
*if ending = "F"
  *place P40 fen_chapel
  A year on, you're on the Fen, with the Lamplighters, still hunting.

  You can feel him. That's why they need you. The piece of your flame he tore out burns in him like a coal, and you can feel where it is, the way you can feel the sun on the side of your face with your eyes shut: south, or east, or close, or far. Twice this year you've been close enough to see him, a tall grey figure on a causeway at dusk, turning to look back at you. Twice he's gone into the water. Jory Penrose, who's your partner now, says you'll have him by Christmas. The Commander says nothing.

  Tonight, somewhere a long way south, they're holding the Leaving Feast without you. You don't mind as much as you thought you would. You sit in the upstairs window of the Order's house on the edge of the Fen, with {fam_name} and a mug of tea gone cold. Out on the black water, the drowned chapel's bell rings in the east wind, and you count the strokes, and wait.
*if ending = "G_T"
  *place P16 heronmere
  A year on, after the Leaving Feast, you're sitting on the edge of the pool in the Heronmere cloister with your feet in the cold water and the fish nosing at your toes, and Toby Quill comes out of the kitchens with the last of the cake on a tray.

  He made it. He bakes in the kitchens now, at four in the morning, the way he always wanted to, and nothing he makes catches fire, and he brings you the first of everything.

  He doesn't remember much of the root. You don't tell him. He knows the Headmistress is gone, and Maisie Tully, and he knows you chose, and once, at the Frost Market, lying on the ice looking up at the lanterns, he said: "I'd have chosen her. The Headmistress. You know that. She'd have known what to do." And then: "I'm glad you didn't." He never said it again. The Order is still looking, under the Mere, on the Fen, for an old grey man with two lanterns on strings. Wrenfold burns low and blue on what's left of Hester's fire.
*if ending = "G_M"
  *place P28 tully_cottage
  A year on, Maisie Tully lives with her father in the Lanternwarden's cottage by the boathouse, and helps him with the round, and lights the high lanterns, the ones he can't reach, with her hand.

  She came back from the root with her spark relit and her memory mostly whole. She's learning. She's taking her Burning Year again, seven years late, in the first-year classes, with people half her age, and she's good. Mr Tully is so proud of her that he can't talk about it without crying. He can't talk about the rest of it at all. The Headmistress is gone, and Toby Quill, into the dark with Aldric Morrow, and every Sunday now Mr Tully goes to the edge of the Mere and stands there with his cap in his hands, the way he used to stand by Maisie's bed. You go with him, sometimes. Neither of you says anything.

  Tonight, after the Leaving Feast, you walk down with them to the cottage for cocoa, and Maisie shows you her exam results, which she's framed, and her father pretends to be embarrassed, and isn't.
*if ending = "G_K"
  *place P25 weathervane_room
  A year on, the Headmistress hasn't slept a whole night since Midsummer, and she has turned the whole of Wrenfold, and the Order, and everything she has, towards one thing: getting them back.

  Toby. Maisie Tully. Taken into the dark with Aldric Morrow. She has maps of the Fen on every wall of the Weathervane Room, and Hester's journal open on the desk, and you, most evenings, in the chair across the fire, reading. Tonight was the Leaving Feast; she made her speech, and came straight back up the sideways stair, and so did you. "You were right," she said to you once, in the autumn. "To choose me. Not because I mattered more. Because I'm the one who won't stop." Priya comes up to the Weathervane Room every Sunday with Custard the hare, and sits with you both, and doesn't ask. Hester's portrait, over the fire, watches the three of you, and says nothing.
*if ending = "H"
  *place P01 home_street_night
  A year on, you're back at Viaduct Street, and you don't know if you'll ever go back to Wrenfold.

  They wrote. They all wrote, all summer: come back in September. The Headmistress wrote herself, in green ink, from the Infirmary, with no magic left: [i]A place is kept for you. It always will be.[/i] You didn't go. You're not sure why. Because the first time it mattered, you weren't there. Because the song was sung without you and it held, and you can't decide if that's the best thing that ever happened or the worst. The kettle still boils on its own when you look at it.

  Tonight is the Leaving Feast. You go out after dark and walk to the end of the street, under the arches of the viaduct, where the streetlamps buzz and the pavements are still warm from the day, and hum the wren's line under your breath. A train goes over. The streetlamp over your head leans towards you, very slightly, and you let it. You think about the road not taken, and whether it's still there.
*comment ---- supporting consequences
*if ending != "G_M"
  *if (ending = "G_T") or (ending = "G_K")
    Mr Tully still does the round every night, with his long brass taper, on lanterns that burn low and blue now, and never quite catch. He doesn't talk much. On Sundays he takes a boat out to the middle of the Mere, over the place where the rock goes down, and sits there with the oars shipped and his cap in his hands until it gets dark. Nobody asks him in.
  *elseif maisie_lit
    Mr Tully still does the round every night, with his long brass taper, and Maisie does it with him; she lights the high ones with her hand. {@tully_fate = "exposed"|The Order never charged him. Arkwright said he'd paid.|The Headmistress never told the Order all of it. She said he'd paid.} He knows every student's name. He says [i]mind the step[/i]. On Candlewake, Maisie gave him a new candle, twelve dips, and he's lit it every night since.
  *else
    Mr Tully still does the round every night, with his long brass taper, and goes to St Ide's every Sunday, and sits by Maisie's bed, and says [i]Absalom. I'm your dad, love.[/i] {@(ending = "A") or (ending = "B") or (ending = "C") or (ending = "D") or (ending = "E")|But the spark's brighter now. You went with him in the spring and looked. One more Sunday, you think. Maybe two.|The spark's still there. He writes and tells you so, every month, in his careful capitals: one more Sunday, maybe two.}
*if ending != "G_T"
  *if (ending = "G_M") or (ending = "G_K")
    Toby's hare, Custard, lives with Priya now. Priya still plants a row of seeds every Greening, and says the same name over each one, and one of these years, she says, he'll be there to see them come up.
  *elseif toby_lit or (ending = "A") or (ending = "B") or (ending = "C") or (ending = "D") or (ending = "E")
    Toby bakes. Of course he does. He got an apprenticeship in the Wrenfold kitchens in the summer, and nothing he makes catches fire, and every Friday he brings a Victoria sponge to whoever needs one most. He and Priya are getting married at Brightfire. He's asked you to hold the rings. "Don't drop them," he said. "Or do. It'd be funny."
  *else
    Toby's still at St Ide's, by the window, with the hare on his knees. Priya goes every Sunday. So do you, when you can. You sit on the end of the bed and he tells you, very gently, that you've got a kind face, and one day, you tell yourself, you'll have enough fire to give him again.
*if told_nana
  Nana Pearl knows everything. She made you tell her all of it, in her kitchen, with the budgie listening, and she cried at Magnus Grey, and at the end she said, "Well. Your great-gran would be proud," and put the kettle on. She's learned the underneath of the Wren's Song properly now, all of it. She sings it at the washing-up. The toffee tin is still snowing in her airing cupboard.
*else
  Dev still texts you at midnight. [i]u alive?? glossop asking about the overtime sheet again. I said you ate it.[/i] He's never asked where you went. He never will. At Christmas, he gave you a mug that says WORLD'S MOST MYSTERIOUS COLLEAGUE, and you laughed so hard you cried, and he watched you, and grinned, and didn't ask.
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
