NB.scene("ch19", String.raw`
*mood day
*set ch 19
*chapter 19 The Greening
*comment ---------------------------------------------------------------- CH19.GREEN.01
*sid CH19.GREEN.01
*date 2027-03-20 10:00
*place P20 glasshouses
*present rhys priya familiar
The Greening comes on the twentieth of March, the spring equinox, and Wrenfold keeps it the way it keeps everything, even now: all at once, with too many flowers.

The Glasshouses are thrown open. All of them: the long glass halls down the south side of the castle, the palm house and the fern house and the orchid house and the great domed Winter Garden, doors propped wide, and the warm green air pouring out of them into the cold March morning like breath. The whole school walks through them in the morning, in the green light, with a seed in their hand.

It's a Heronmere festival, really, and Heronmere needs it more than anyone. You plant a seed for somebody. That's all. In the long beds down the middle of the Winter Garden, where the soil's black and warm, you kneel down and make a hole with your finger and put your seed in and say a name. And by Midsummer, Professor Rhys says, there'll be a flower for every name.

@rhys:warm Professor Rhys stands at the door of the Winter Garden in her battered hat with the snail on it and her sea-green apron, handing out seeds from a canvas bag, one to everyone who comes past. Her rosy face is thinner than it was in September. Her eyes are red. She smiles at every single person anyway. "Something growing," she says, to each of you, as she gives you your seed. "Something growing. That's all it is. That's all it ever was."

@priya:sad Priya is kneeling at the end of the long bed, by herself, with a handful of seeds. Not one. A handful. She's planting them in a row, one after another, very carefully, and saying the same name over and over under her breath. You don't have to hear it to know what it is.
*choice
  #Kneel down beside her and plant yours next to hers. Say the same name.
    *set fr_priya +1
    *set heart +5
    @priya:hurt She looks up when you kneel down. She doesn't say anything. She just moves along a little, so there's room, and you plant your seed next to her row, and say his name, out loud, and she makes a small sound and leans her head on your shoulder for a moment, and then goes on planting.
  #Plant yours for Professor Grey.
    *set nerve +5
    You plant yours at the far end of the bed, where it's quiet, and say his name. Magnus Grey. When you look up, Professor Rhys is watching you from the door, and she nods, once, and turns away quickly, and wipes her face on her sleeve.
  #Plant yours for Odile Pellow, and Delphine, and Bram. All the ones who went quiet.
    *set heart +5
    You haven't got enough seeds. Professor Rhys gives you more without being asked. You plant them in a row, one for each, and say their names, and then you go on, because there are more names than that, there are wards and wards of them at St Ide's, and you plant until your knees are wet through and your bag of seeds is empty.

Outside, through the glass, the snow's gone off the lawns at last, and the Mere's blue again, and there are lambs in the fields on the far shore. And in the hedges along the shore path, for the first time since November, you can hear birds.
*page_break
*comment ---------------------------------------------------------------- CH19.OFFER.01
*sid CH19.OFFER.01
*date 2027-03-20 17:00
*mood dusk
*place P25 weathervane_room
*present arkwright kestrel familiar
Commander Arkwright makes her offer that evening, in the Weathervane Room, with the Headmistress standing at the window with her back to both of you.

@arkwright:grave "I'll be plain," she says. "He knows what you are. {@morrow_knows|The Hush saw you at Thimble Cross. |}The hoop at the Glimmer Cup was a test, and the Lanternwarden says his letters have stopped asking for your name and started asking where you sleep." She's standing by the fire in her greatcoat, with her hands behind her back. "He's going to come for you. Here, in this castle, with four hundred students round you. Probably at Midsummer, when every lantern is lit and the whole school's in the Hall for the Proving. That's what I'd do."

@arkwright:grave "So don't be here." She looks at you steadily. "Leave with me. Tonight, or Monday. The Order has houses. There's one on the edge of Saltmarrow Fen, where he came from; we'll take you there, openly, so he knows. And when he comes for you, and he will, he'll come onto ground I've chosen, with every Lamplighter I have waiting, instead of into a Hall full of children." She pauses. "You'd be bait. I won't pretend otherwise. But you'd be bait with forty Lamplighters round you, and the school would be empty of the one thing he wants."

@kestrel:grave "And if he doesn't follow?" says the Headmistress, to the window. "If he knows it's a trap, which he will, because Aldric Morrow was cleverer than anyone in this room at twenty-five and he's had forty years since? Then he comes here anyway, at Midsummer, for the Heartfire, without a Kindler to carry it. And he'll try it anyway. And he'll break it trying." She turns round. Her arm's out of the sling now, but she holds it stiffly. "I'm not going to tell you what to do. I've never told you what to do. But I'll tell you this: I'd rather have you here, where I can see you, than on a fen with Sabine's people and a lot of good intentions."

@arkwright:neutral "That's your answer to everything, Imelda," says the Commander, not unkindly. "Keep them close."

@kestrel:grave "It's the only answer I've got."

They both look at you.
*if tully_fate = "silent"
  You think about the letter in your coat, the one Mr Tully gave you on the train. The one you haven't told either of them about yet.
*choice
  #"I'm staying. This is my school. I'm not going to hide on a fen while it's attacked without me."
    *set order_offer "stay"
    *set nerve +10
    *set fr_kestrel +1
    @arkwright:grave The Commander looks at you for a long moment. Then she nods, slowly. "I thought you'd say that," she says. "I'd have said the same, at your age. I'd have been wrong, too, probably." She picks up her hat. "Then I'll bring my people here, for Midsummer. All of them. And we'll do it the hard way."

    @kestrel:warm When she's gone, the Headmistress comes and stands in front of you and puts her good hand on your shoulder, and doesn't say anything at all for a long time. "Thank you," she says at last. "For staying. I know what it costs."
  #"I'll go. If it keeps him away from the school, I'll go."
    *set order_offer "leave"
    *set nerve +5
    @kestrel:grave The Headmistress closes her eyes. She doesn't argue. She doesn't say anything at all for a long time. "Then go," she says at last, very quietly. "And come back." She turns back to the window. "Monday. The morning train. Say your goodbyes."

    @arkwright:neutral "You're doing the right thing," says the Commander. She doesn't sound as sure as she did.
*if order_offer = "leave"
  *goto leave
*page_break
*comment ---------------------------------------------------------------- CH19.TOBY.01
*sid CH19.TOBY.01
*date 2027-03-21 22:00
*mood night
*place P24 infirmary
*present toby priya noor familiar
You try to relight Toby on Sunday night, when the Infirmary's quiet, with the lamps turned down.

You've thought about nothing else for two weeks. Not since Maisie Tully, and the spark at the bottom of her like the last coal in a grate. You've read everything Idris has, and everything Hester wrote, which isn't much. [i]A Kindler may relight what is guttered, and what is low. What is gone, no Kindler can bring back, for there is nothing to kindle.[/i] That's what she wrote. Nothing to kindle.

But Hester also took her own flame out of herself and left it in a rock. So.

@toby:hollowed Toby is sitting up in bed with the hare, Custard, on his knees. He's been moved to the end of the ward, by the window, where he can see the Mere. He watches it all day, Noor says. Politely. When you sit down on the edge of the bed, he looks at you and smiles his round polite smile.

@toby:hollowed "Hello," he says. "You came yesterday. And the day before. You've got a kind face."

@priya:tense Priya is in the chair on his other side, where she always is. She knows what you're going to try. You told her. She said yes before you'd finished asking.

@noor:tense Noor has drawn the curtains round the bed. She's standing at the foot of it with her arms folded and her face set. "If I tell you to stop," she says, "you stop. I mean it. I'm not losing two of you."
*if candle = "toby"
  On the bedside table, in its jam jar, your white Candlewake candle is still burning. Seven weeks. It's never gone out. It's burning a little brighter tonight, as if it knows.

You take his hands. They're cold. You close your eyes and look.

Nothing. You knew it would be nothing; you looked on the night of the Quiet, and every day since. Where Maisie had a spark, Toby has nothing at all. Taken whole, in one song. The place where his flame was is just a place: clean and cold and empty, like a grate that's been swept.

So you give him one of yours.

It's the hardest thing you've ever done. Harder than holding Odile, or Rowan, or anyone. You don't know how to do it; nobody does; Hester wrote one line about it. You just reach down into the white flame in the middle of you, and take hold of a piece of it, and pull. And it [i]hurts[/i]. It's like pulling out a tooth that goes all the way down to your heart. The cold comes rushing into the gap it leaves, up from your feet, and you're shaking, and somewhere far away you can hear Noor saying your name.

You put the piece of your flame into the swept grate at the bottom of Toby Quill. And you hold it there. And you wait.
*set chill +1
*if (chill < 3) and ((kindling >= 50) or ((candle = "toby") and (kindling >= 40)))
  *set toby_lit true
  *set kindling +10
  For a long time, nothing.

  And then it catches.

  Not your colour. That's what you'll remember. You put in white, and what catches is gold: warm, ordinary, slightly lopsided gold, with a flicker in it like somebody laughing. His colour. Toby's. As if the place remembered what it was supposed to hold, and just needed something to start it.
  *if candle = "toby"
    On the bedside table, the white candle in the jam jar flares, once, bright, and goes out, as if it's finished its job.

  @toby:tired He blinks.

  He looks down at the hare on his knees. At his hands, in yours. At Priya, in the chair, with her hands over her mouth. At you.

  @toby:tired "Oh," says Toby Quill. His voice is hoarse, as if he hasn't used it properly in a fortnight. "Oh, I had the worst dream. There was a cake." He frowns. "Was there a cake? I made a cake. It didn't catch fire." He looks at you, and his round face does something slow and bewildered and wonderful. "{name}," he says. "You're {name}. Why are you crying? Why's everyone crying? Did the cake catch fire in the end?"

  @priya:hurt Priya makes a sound you'll never forget and throws herself across the bed on top of him, hare and all, and Custard, squashed, bites her, and nobody minds at all.

  @noor:warm Noor, at the foot of the bed, sits down very suddenly on the floor, with her back against the wall and her face in her hands, and laughs, and laughs, until it turns into something else.
  *achieve relit_toby
*else
  For a long time, nothing.

  And then, for one second, it catches. You feel it. A flicker, gold, in the swept grate. And Toby's eyes, the fog-coloured eyes, go wide, and for one second he looks at you, really looks, and his lips move, and he says "[i]{name}?[/i]"

  And it goes out.

  It just goes out. There's nothing for it to hold on to. You feel it go, the piece of your own flame, guttering and dying in the cold place at the bottom of him, and you try to hold it, and you can't, and it's gone.

  @noor:scared "Stop," says Noor. Her hands are on your shoulders, pulling. "Stop. [i]Stop.[/i] You're grey. Your lips are grey. Let go."

  You let go.

  @toby:hollowed Toby is looking at you, politely, puzzled. "Are you all right?" he says. "You look cold." He strokes the hare. "I had a funny feeling just then. Like somebody said my name." He smiles. "It's gone now."

  @priya:hurt Priya takes your cold hand across the bed. She's crying. "He said your name," she says. "He said your [i]name[/i]. I heard him." She holds on hard. "Not yet. That's all. Not yet."

You don't remember getting back to your bed. Noor says you walked. You don't remember. You sleep for fourteen hours, and when you wake up, you're cold in a way you've never been cold before, deep down, where your flame lives, and it doesn't go away all day. Something's been spent that doesn't come back.
*page_break
*comment ---------------------------------------------------------------- CH19.ROUTE.01
*sid CH19.ROUTE.01
*date 2027-03-22 21:00
*place P21 observatory
*present familiar
On Monday night, you go up to the Observatory roof, because it's the highest place in the castle and the coldest, and you want to see if the cold out there is worse than the cold in you. It isn't. But the stars are out, all of them, the whole spring sky, and the Mere's black and still below, and it's the first clear night in a month.

You're not alone for long.
*if (b_rowan_fire and b_rowan_afraid and (hurt_rowan < 2)) or (b_imogen_kit and b_imogen_order and (hurt_imogen < 2)) or (b_saoirse_still and b_saoirse_run and (hurt_saoirse < 2)) or (b_cas_family and b_cas_debt and (hurt_cas < 2)) or (b_noor_carry and b_noor_rest and (hurt_noor < 2)) or (b_idris_file and b_idris_suspect and (hurt_idris < 2))
  You hear footsteps on the Observatory stair. You know whose, before they reach the top.
  *choice
    *if b_rowan_fire and b_rowan_afraid and (hurt_rowan < 2)
      #Rowan. The stair's getting warmer as he climbs.
        *present rowan
        *set b_rowan_want true
        @rowan:shy He comes out onto the roof in his shirtsleeves, because he's never cold, and stops, a few feet away, and stands there with his big hands at his sides, and you can feel the heat coming off him in the frosty air. He doesn't say anything for a long time. And then he says it, all at once, looking at the stars, not at you.

        @rowan:shy "I've spent my whole life being the one who goes in," he says. "Into the fire, into the water, in front of the kid. Because if I'm busy being brave, I don't have to stand still and want anything." He breathes out, white. "And I want something. I want to stop. I want to stand still, with somebody, and be warm, and be frightened, and not have to be brave about it." He finally looks at you. "I want it to be you. I think I've wanted it to be you since the Mere, at Candlewake. Since you told me to be frightened." His voice cracks. "So. That's it. That's what I want."
        *choice
          #"I want that too. With you."
            *set st_rowan 5
            *set final_rel "rowan"
            @rowan:warm He crosses the roof in two strides. {@steam|And then he kisses you, very carefully, as if you might break, with his big warm hands on either side of your face, and it's like standing too close to a fire on a winter night, and you don't step back.|And then he's holding you, very carefully, as if you might break, and it's like standing too close to a fire on a winter night, and you don't step back.} And the cold in the middle of you, the new cold, the one that came when you gave a piece of yourself to Toby, goes, just for a moment, all the way down.
          #"Not yet. I'm not ready. But don't go anywhere."
            *set heart +5
            @rowan:warm He nods. He doesn't look hurt. He looks, if anything, relieved to have said it. "I'm not going anywhere," he says. "I'm terrible at going anywhere, it turns out. I just stand in doorways." And he sits down beside you on the cold roof, close, warm as a hearth, and you watch the stars together until midnight.
    *if b_imogen_kit and b_imogen_order and (hurt_imogen < 2)
      #Imogen. Her footsteps are precise and quick, and then they stop halfway, and start again.
        *present imogen
        *set b_imogen_want true
        @imogen:shy She comes out onto the roof with her coat buttoned wrong and no notebook in her hands, which is how you know something's badly wrong. She stops at the rail. "I don't have a plan," she says. "I always have a plan. I've been walking round the castle for an hour trying to make a plan for this and I can't."

        @imogen:shy "Everything I've done since Kit was for Kit," she says. "Every book, every list, every argument, the Order, everything. I don't know how to want anything that isn't for him." She looks at you, and her quick dark eyes behind her glasses are very bright. "And I want you. Not for him. Not as part of anything. Just for me." She swallows. "It's the first thing I've wanted just for me in three years. I don't know what to do with it. So I'm telling you, and you can decide."
        *choice
          #"Then want me. I want you too."
            *set st_imogen 5
            *set final_rel "imogen"
            @imogen:warm She makes a small sound, a laugh or a sob, and then she steps forward and {@steam|kisses you, fast and fierce and a little clumsy, as if she's been planning it for weeks and forgotten every step, and then again, slower, as if she's decided to stop planning|takes both your hands in both of hers, fast and fierce, as if she's been planning it for weeks and forgotten every step, and holds on}. "That's not a plan," she says, into your collar. "That's not a plan at all."
          #"Not yet. But I'm glad you told me."
            *set heart +5
            @imogen:warm She nods, quickly, several times. "Good," she says. "Good. That's... good. That's a reasonable answer." And then, unexpectedly, she laughs, and sits down on the roof beside you. "I told you. That's the main thing. I actually told somebody something that wasn't evidence." She leans her shoulder against yours. "Stay a bit."
    *if b_saoirse_still and b_saoirse_run and (hurt_saoirse < 2)
      #Saoirse. Nobody else takes a spiral stair that fast.
        *present saoirse
        *set b_saoirse_want true
        @saoirse:shy She comes out onto the roof at a run, and stops dead, and then does something you've never seen her do: she stands absolutely still, in the middle of the roof, with her hands at her sides, and doesn't fidget, and doesn't laugh, and doesn't look away.

        @saoirse:shy "I'm stopping," she says. "Look. I'm stopping. I'm not going anywhere. I'm standing right here." Her voice shakes. "I met my mam. Last week. In a café in Kingsmere. She talked for an hour, and she cried, and she said sorry, and the whole time, the whole [i]time[/i], I kept thinking: I want to get back. To the castle. To you. That's who I want to stand still with." She takes a breath. "So. I'm standing still. For you. That's it. That's the whole thing."
        *choice
          #Walk across the roof to her, and stand still with her.
            *set st_saoirse 5
            *set final_rel "saoirse"
            @saoirse:warm {@steam|She meets you halfway. Of course she does; she can't help it. And she kisses you, standing still in the middle of the Observatory roof, with the whole spring sky going round and round above you, and for once in her life, Saoirse Maddock doesn't move at all.|She meets you halfway. Of course she does; she can't help it. And she holds on, standing still in the middle of the Observatory roof, with the whole spring sky going round and round above you, and for once in her life, Saoirse Maddock doesn't move at all.}
          #"Not yet. But stay. Just stand here with me a bit."
            *set heart +5
            @saoirse:warm She laughs, shakily. "Standing's the hard part," she says. "The rest's easy." And she comes and stands beside you at the rail, very close, and doesn't fidget, and watches the stars with you until she's shivering, and even then doesn't go.
    *if b_cas_family and b_cas_debt and (hurt_cas < 2)
      #Cas. His footsteps stop at the top of the stair for a long time before he comes out.
        *present cas
        *set b_cas_want true
        @cas:shy He comes out onto the roof in his black coat with his hands in his pockets and his chin up and the sneer ready, and then he looks at you, and it goes, all of it, like a mask coming off, and underneath it he just looks tired and young and frightened.

        @cas:shy "I've been rehearsing," he says. "On the stairs. Something clever. Something that wouldn't cost me anything if you laughed." He takes his hands out of his pockets. "I haven't got anything clever. I've spent my whole life with people who only wanted me if I was the right sort of Drummond. And you know exactly what sort of Drummond I am. You know what my family did. You stood next to me at St Ide's." His voice is very quiet. "And you're still here. So I want you. That's all. I want you, and I'm not going to pretend I don't to save my pride. My pride's done enough damage."
        *choice
          #"Good. Because I want you too."
            *set st_cas 5
            *set final_rel "cas"
            @cas:warm He stares at you as if you've said something in a language he's never been taught. And then {@steam|he kisses you, very carefully and very thoroughly, like someone who was taught to do everything properly and has finally found something worth doing properly|he laughs, a real laugh, startled out of him, and takes your face in his grandfather's hands, very carefully, as if it's the first thing they've ever been allowed to hold}. "Well," he says, not quite steadily. "That went better than the rehearsal."
          #"Not yet. But I'm not going anywhere, Cas."
            *set heart +5
            @cas:warm He nods, slowly. The sneer doesn't come back. "Not yet is more than I've ever had," he says. "I'll take not yet." And he leans on the rail beside you, shoulder to shoulder, and you watch the Mere together until the cold drives you in.
    *if b_noor_carry and b_noor_rest and (hurt_noor < 2)
      #Noor. She's out of breath; she's run up from the Infirmary.
        *present noor
        *set b_noor_want true
        @noor:shy She comes out onto the roof in her uniform with her cardigan over it, and stands at the top of the stair, and looks at you, and her face does something complicated. "I've never asked for anything," she says. "Not once. Not for myself. I didn't know how. I always thought, if I needed something, I'd manage without it, and somebody else would need it more."

        @noor:shy "I'm asking," she says. "I'm asking for something for myself. For the first time in my life." Her voice is shaking. "I want you. I want to be looked after by you, and I want to look after you, and I want it to be the thing I get to have that isn't work. You. That's what I'm asking for." She stops. "You can say no. I'll be all right. I'm always all right."
        *choice
          #"You don't have to be all right. Yes."
            *set st_noor 5
            *set final_rel "noor"
            @noor:warm She crosses the roof and {@steam|kisses you, softly, carefully, with her cold hands on your face, the way she'd touch a patient she was afraid of hurting, and then again, not carefully at all|puts her arms round you, softly, carefully, the way she'd hold a patient she was afraid of hurting, and then tighter, not carefully at all}. And then she laughs, into your shoulder, a little wet. "I asked," she says. "I actually asked. And you said yes."
          #"Not yet. But you can ask me for anything. Always."
            *set heart +5
            @noor:warm She lets out a long breath. "Anything," she repeats, as if she's testing the word. And then, with a small shaky smile: "Then sit with me. Up here. For an hour. And don't let me go back down to the ward till I've finished looking at the stars." You do.
    *if b_idris_file and b_idris_suspect and (hurt_idris < 2)
      #Idris. His footsteps are slow and deliberate, as if he's counting them.
        *present idris
        *set b_idris_want true
        @idris:shy He comes out onto the roof, and stops, and takes his glasses off, and puts them in his pocket, which he never does. "I can't see you properly now," he says. "I did that on purpose. I've been studying you since September. Every day. I've got three notebooks." A breath. "I want to stop studying you."

        @idris:shy "I don't want to know you the way I know Kindlers," he says. "From the outside, in notes, in files. I want to know you the other way. The way you only know somebody if they let you." He's looking at you without his glasses, slightly out of focus, completely open. "I'm asking you to let me. That's what I want. I've never wanted anything I couldn't find in a book before."
        *choice
          #"Put your glasses back on. I want you to see me say yes."
            *set st_idris 5
            *set final_rel "idris"
            @idris:warm He does. His hands aren't steady. He looks at you through them, and you say it, and he sees you say it. {@steam|And then he kisses you, slowly, seriously, the way he does everything, as if he's committing it to memory, and you think he is.|And then he takes your hand, slowly, seriously, the way he does everything, as if he's committing it to memory, and you think he is.} "That," he says afterwards, a little breathless, "is not in any of the books."
          #"Not yet. But I'm not a book. You can ask me things."
            *set heart +5
            @idris:warm He laughs, very quietly, and puts his glasses back on. "Then I'll ask," he says. "One question a day. Slowly. I'm very patient." He sits down beside you on the cold roof. "First question. Are you cold? You look cold." You are. He gives you his scarf.
    #Nobody. You'd rather be alone tonight. Let the footsteps go back down.
      *set nerve +5
      You call down the stair: [i]not tonight.[/i] And after a moment, the footsteps go back down, slowly. You sit on the roof alone, with the whole spring sky, and your cold, and think about Toby, and about Midsummer, and about what you're going to have to do.
*else
  *if (st_rowan >= 3) or (st_imogen >= 3) or (st_saoirse >= 3) or (st_cas >= 3) or (st_noor >= 3) or (st_idris >= 3)
    Somebody comes up the stair after a while, and sits down beside you without a word, and you sit together on the cold roof watching the stars. Nobody says anything that matters. It's enough. It's a lot, actually.
  *else
    Priya comes up the stair after a while, with two mugs of tea and a blanket, and sits down beside you without a word. "Toby would've come," she says. "So I came." You drink the tea and watch the stars.
*goto after
*comment ================================================================ leave
*label leave
*comment ---------------------------------------------------------------- CH19.LEAVE.01
*sid CH19.LEAVE.01
*date 2027-03-22 09:00
*mood day
*place P11 platform_nought
*present arkwright jory familiar
On Monday morning, you leave Wrenfold.

You pack your trunk. Your robes, your books, your wand, the white candle{@candle = "kept"|, still burning|}. You don't pack your house scarf; you leave it on your bed, for when you come back. You go down to the boats at eight with {fam_name} and two Lamplighters, and the Mere is blue, and the castle behind you is enormous and grey and full of faces at the windows, watching you go.

At Platform Nought, the Lantern Train is waiting, and Commander Arkwright, and Jory Penrose, holding your trunk.

@jory:neutral "It's a good house," he says, anxiously. "On the Fen. Old. Draughty. But good. There's a cat." He hefts the trunk. "And there's forty of us. Forty. I counted."
*if (st_rowan >= 3) and (hurt_rowan < 2)
  *present rowan
  @rowan:hurt Rowan came. He's standing at the far end of the platform, where you didn't see him at first, with his hands in his pockets and his jaw set. He doesn't come over until the whistle goes. Then he does, and says, "Come back. That's all. Come back," and turns round and walks away very fast before you can see his face.
*elseif (st_noor >= 3) and (hurt_noor < 2)
  *present noor
  @noor:hurt Noor came, in her uniform, on her break. She's brought you a bag of things: plasters, a hot-water bottle, tea, a jumper that isn't yours. "You'll forget to eat," she says. "You'll forget to sleep. Don't." And she hugs you so hard it hurts, and goes back to the boats without looking back.
*elseif (st_saoirse >= 3) and (hurt_saoirse < 2)
  *present saoirse
  @saoirse:hurt Saoirse came, on the bike, which is illegal on the platform. She doesn't get off it. She just sits there, engine running, watching you get on the train, and when it starts to move, she rides alongside it down the whole length of the platform, and at the end, where the platform stops, she stops, and stands up on the footrests, and waves until you can't see her.
*elseif (st_imogen >= 3) and (hurt_imogen < 2)
  *present imogen
  @imogen:hurt Imogen came, with a notebook. She gives it to you: the Wren's Song, all five voices, copied out in her precise pencil hand. "In case," she says. "In case you need it and we're not there." She doesn't cry. She stands on the platform with her arms folded until the train's gone.
*elseif (st_cas >= 3) and (hurt_cas < 2)
  *present cas
  @cas:hurt Cas came, in his black coat. He stands by the carriage door and says, stiffly, "This is idiotic. You're the only one of us who can do what needs doing and you're going to sit in a bog." And then, lower: "Come back. I don't have anyone else who knows."
*elseif (st_idris >= 3) and (hurt_idris < 2)
  *present idris
  @idris:hurt Idris came. He gives you a notebook: his notes on Kindlers, all of them, three years' worth. "You'll need them more than I will," he says. And then, as the whistle goes: "I'll write. Every day. Answer some of them."
*else
  Nobody came. That's all right. You said your goodbyes last night, in the common room, and people hugged you and said [i]come back[/i], and you said you would.

@arkwright:neutral The Commander puts a hand on your shoulder as you climb aboard. "Right decision," she says. And then, quieter, looking back at the castle across the water: "I hope."
*label after
*journal [b]Chapter 19.[/b] The Greening: a seed for everyone, in the Glasshouses. Commander Arkwright offered to take you out of Wrenfold, to the Fen, as bait. {@order_offer = "leave"|You went with the Order.|You stayed.}{@toby_lit| You gave Toby a piece of your own flame, and it caught, gold, his colour, and he came back, and asked if the cake caught fire.|}{@(order_offer = "stay") and not(toby_lit)| You tried to relight Toby. There was nothing left in him to kindle, so you gave him a piece of your own flame; it caught for one second, and he said your name, and it went out. Not yet.|}{@final_rel = "rowan"| On the Observatory roof, Rowan told you what he wanted. You said yes.|}{@final_rel = "imogen"| On the Observatory roof, Imogen told you what she wanted, for herself. You said yes.|}{@final_rel = "saoirse"| On the Observatory roof, Saoirse stood still for you. You said yes.|}{@final_rel = "cas"| On the Observatory roof, Cas said it without a sneer. You said yes.|}{@final_rel = "noor"| On the Observatory roof, Noor asked for something for herself. You said yes.|}{@final_rel = "idris"| On the Observatory roof, Idris stopped studying you. You said yes.|}
*page_break
*goto_scene ch20
`);
