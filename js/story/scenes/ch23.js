NB.scene("ch23", String.raw`
*mood night
*set ch 23
*chapter 23 The Heartfire
*comment ---------------------------------------------------------------- CH23.ROOT.01
*sid CH23.ROOT.01
*date 2027-06-20 23:50
*place P30 heartfire
*present morrow familiar
The steps beyond the wren door go down further than the castle, further than the Mere, further than anything should.

They're worn into a ramp, and then into a slope, and then they're not steps at all but the rock itself, going down in a long spiral into the dark, and the dark is warm. Warmer and warmer, with every turn. The walls are sweating. The air smells of hot stone and something else, something sweet and old, like beeswax, like a church at Christmas, like Nana Pearl's airing cupboard. And the hum, Hester's hum, the great slow warm note you've heard through the floor since Longnight, gets louder and louder until you're not hearing it any more, you're inside it.

And then the passage opens, and you're in the root of the rock, and there it is.

The Heartfire.
*snapshot heartfire

It's not a fire, exactly. It's not like anything. It's a light, in the middle of a round cave of black rock, hanging in the air a foot above the floor: the size of a person, the shape of a flame, and so bright and so warm and so [i]alive[/i] that your eyes water and your own flame leaps up in you like a dog that's seen its master after a long time away. It's gold and white and rose and green and blue and copper, all of them, every colour, turning slowly round each other. It's been burning here for four hundred years. It's the oldest thing you've ever seen. It's Hester Wren, what's left of her: the fisherwoman who took in Tom Brack and Old Nell from the ferry. And every lantern in Wrenfold, all ten thousand, has a thread going up from it, up through the rock, thin and bright as spider silk, so that the whole cave is full of threads of light going up into the dark like the strings of an enormous harp.

It's beautiful. It's the most beautiful thing you've ever seen. And it wants you. You can feel it wanting you. The way the white candle wanted to burn in your hands at Candlewake.
*meet morrow
@morrow:neutral Aldric Morrow is standing in front of it, with his back to you, looking up at it, in his grey robes, with his long white hair down his back.
*if fought_morrow
  *present toby maisie kestrel
  But the Heartfire's wrong. You see it the moment you look properly. There's a crack in it. Down one side, from the top almost to the floor, a dark line, like a crack in a lamp glass, and the colours are leaking out of it, flickering, and every few seconds the whole flame shudders, and far above you, through the rock, you feel every lantern in the castle flicker with it. He's tried to take it without you. He's put his grey bare hands into it, and it's burned him, and he's cracked it.

  And round the edge of the cave, held up against the black rock by grey threads like cobwebs, like flies in a web, are three people.

  @toby:hollowed Toby, in his Heronmere robes, grey, blank, looking at the Heartfire with polite puzzled eyes.

  @maisie:hollowed Maisie Tully, in a hospital cardigan, grey, blank.

  @kestrel:hurt And the Headmistress. Not hollowed; not yet. Grey to the shoulders, with the threads round her, and her face white and set, and her eyes open and furious. "Don't," she says to you, through her teeth. "Whatever he asks. Don't."
*else
  He's alone. Everything he brought is broken on the stairs above. And inside him, when you look, the stolen flames are guttering, all of them, starving, the Wren's Song still ringing down through the rock and shaking them like wind shakes candles. He's standing very straight, the way very old men stand when it hurts.

@morrow:warm "It's something, isn't it," he says, without turning round. "I came down here once, when I was twenty-five. Hester's door opened for me too, then. I stood where you're standing and I thought: I could carry that. I could lift it out of the rock and carry it and never be afraid of anything again." He turns round. His pale eyes find yours. "And then Lucius Drummond put me out, and the door never opened for me again. Not for forty years. Until tonight."

@morrow:neutral "I'll tell you what I want," he says. "I've always been honest with Absalom and I'll be honest with you. I want you to lift it out of the rock and put it in me. Not all of it; you couldn't, it would kill us both. A piece. A little piece of Hester's fire, in the place where mine was. Enough to burn on for ever. And then I'll never need to take another flame as long as I live." He spreads his grey bare hands. "Think of it. No more Choir. No more hollowed. No more St Ide's. I'll let them all go. Every flame I've got in here, back where it came from, tonight. You'd be saving all of them. All it costs is a piece of a fire that's been burning in the dark for four hundred years, keeping lanterns lit."
*if fought_morrow
  @morrow:hungry "Or," he says, and something in his face goes hungry and terrible, "it breaks. It's cracked; you can see it. By dawn it will have gone out, and every lantern with it, and every ward, and I will take these three with me when I go, and a great many more after." He looks at the three people on the wall. "I don't want to. I want to go home. I've wanted to go home for forty years."
*if b_cas_debt
  *present cas
  @cas:grave There are footsteps on the passage behind you. Fast, then slowing. Cas comes out into the root of the rock, out of breath, with his grandfather's hands at his sides. He followed you down. Of course he did. [i]This is the door. This is where it's owed.[/i]

  @cas:grave He doesn't look at the Heartfire. He looks at Aldric Morrow. "My name's Casimir Drummond," he says. His voice shakes and doesn't break. "Lucius was my grandfather. He wrote you letters. Every year for thirty-one years. He never sent them." He takes a folded paper out of his coat: the last letter. [i]I did it. Not by accident.[/i] He holds it out. "He wanted you to have this. He was too much of a coward to send it. I'm not him."

  @morrow:neutral Aldric Morrow looks at the letter for a long time. He doesn't take it. But something happens in his grey face, something very old, like ice shifting on a lake in spring. "Not by accident," he says, very quietly. "I always knew. It helps, somehow, to hear it said." And for one second, when you look, there's something in the cold place in him that isn't a stolen flame. A flicker. Grey, and cold, and tiny. Like the last coal in a grate.

You look at the Heartfire. At Aldric Morrow. At the threads of light going up into the dark, to every lantern in Wrenfold.
*if not(fought_morrow)
  *choice
    #Stand between him and the Heartfire, and sing. The wren's line. The song above will come down through the rock to meet you.
      *set heartfire_choice "hold"
      *set ending "A"
      *set nerve +10
      You step between him and the fire, and open your mouth, and sing the wren's line, down here in the root of the rock, alone.

      And it isn't alone. Far above, through forty fathoms of stone, the song's still going: the lark and the owl and the heron and the rook, hundreds of voices, and the Heartfire hears them. Every thread of light going up into the dark starts to hum it back, ten thousand strings, and the whole cave rings, and the song comes down the threads like water down a rope, into the root, into you, into the fire.

      @morrow:hungry Aldric Morrow reaches past you for the Heartfire, and the song hits him like a wall. The stolen flames in him gutter, all at once, and go out, one by one, and go [i]home[/i]; you feel them go, up the threads, up through the rock, out into the night, to St Ide's and the Infirmary and wherever they came from, a hundred small lights going home. And he falls to his knees on the black rock, an old grey man, empty, and stays there.

      The Lamplighters come down the passage twenty minutes later, with Commander Arkwright at their head, and find you sitting on the warm rock beside him, still humming, with Hester's fire burning whole and bright behind you both.
    *if ((kindling >= 70) and (chill < 2)) or (b_cas_debt and (kindling >= 55) and (chill < 3))
      #Relight him. Not with Hester's fire. With yours. Find what's left of Aldric Morrow in there and breathe on it.
        *set heartfire_choice "relight_morrow"
        *set ending "B"
        *set chill 3
        *set kindling +10
        You don't go to the Heartfire. You go to him.

        @morrow:surprised He doesn't understand, at first. He thinks you're going to strike him. He puts up his grey hands. And you take them, both of them, cold as the bottom of a well, and close your eyes, and look.

        Past the stolen flames. Past all of them, a hundred of them, Delphine and Bram and Odile and the rest, guttering and starving and crammed in where they don't belong. Down, and down, to the very bottom of him, to the cold swept grate where Aldric Morrow's own flame used to be, forty years ago, before a frightened boy with a black book put it out.

        {@b_cas_debt|And there it is. The flicker. Grey, cold, tiny. It came back when Cas said [i]not by accident[/i].|And there, after a long time, so deep and so faint you nearly miss it: a flicker. Grey, cold, tiny. Forty years, and it's still there.}

        You breathe on it.

        It takes everything. It takes more than Toby did, more than Maisie, more than anything you've ever done; it takes most of what you are. You feel your own white flame going down and down to give his room, until you're cold to the heart, until your lips are grey and you can hear somebody shouting your name from very far away. You don't stop.

        And it catches.

        @morrow:hurt Not white. Not gold. A small clear ordinary blue, like a gas flame, like the flame on a kitchen hob. And as it catches, all the stolen flames crammed round it go out of him at once, like birds out of a cage, up the threads of light, up through the rock, home. You feel them go. A hundred small lights, going home.

        @morrow:hurt Aldric Morrow looks down at his own hands. They're not grey any more. They're an old man's hands, spotted and thin and shaking. There's a candle stub on the rock by his knee, one somebody dropped; he picks it up, and looks at it, and it lights. Blue. A small blue flame. That's all he can do. You can tell, just by looking. Light a candle. That's all.

        @morrow:warm He starts to cry. He cries like a child, like a boy of twenty-five in a Warding Hall who's just asked a Professor his own name. "It's mine," he says. "It's mine. It's so small. It's [i]mine[/i]."
    *if (kindling < 70) or (chill >= 2)
      #Relight him. Find what's left of Aldric Morrow in there and breathe on it, even though you don't know if you've got enough left.
        *set heartfire_choice "escape"
        *set ending "F"
        *set chill +1
        You go to him. You take his cold grey hands and close your eyes and look, past the stolen flames, down, and down, for whatever's left of him.

        You can't find it. Or you find it, and haven't enough to breathe on it with; you'll never be sure which. You go down and down, giving, and the cold comes up to your heart, and there's nothing there to catch.

        @morrow:hungry And Aldric Morrow feels you fail. You feel him feel it. His grey hands close on yours like iron, and he pulls, not at the Heartfire, at you: one hard hungry wrench, and something goes out of you, not your flame, not all of it, but a piece, a warm bright white piece of it, and into him. He staggers back with it burning in his chest like a stolen coal.

        @morrow:neutral "Thank you," he says, softly. "That will do for a while." And he turns, and walks into the dark at the back of the cave, where there's a crack in the rock you hadn't seen, a crack that goes down, and down, towards water. By the time the Lamplighters come down the passage, he's gone: out under the Mere, out into the Fen, with a piece of you burning inside him.
    #Let it go out. If Hester's fire isn't here, there's nothing for him to take. Ever.
      *set heartfire_choice "let_go"
      *set ending "C"
      *set heart +5
      You put your hands into the Heartfire.

      It doesn't burn you. It knows you. It's like putting your hands into warm water. And you don't lift it out; you do the opposite. You tell it, the way you'd tell a tired old woman at the end of a long day: [i]you can stop now. You've done enough. You can rest.[/i]

      @morrow:hungry "[i]No[/i]," says Aldric Morrow, behind you. "No, no, [i]no[/i]..."

      And Hester Wren's fire, after four hundred years, goes out.

      Not all at once. Gently. The colours folding in on each other, gold and rose and green and blue, down and down, like a fire burning down to embers, like the Brightfire at two in the morning. The threads of light going up into the dark go out one by one, and far above, you feel ten thousand lanterns go out with them, and every ward on Wrenfold fall like a curtain, and the castle go dark and cold and ordinary for the first time in four centuries. The stolen flames in Morrow, with nothing to feed on, go out of him like birds out of an opened cage, up through the rock, home.

      And then there's just a round cave of black rock, cooling, in the dark. And an old grey man on his knees in it, starving. And you.
    #Take it yourself. Lift it out of the rock and carry it, the way Hester did. Nobody will ever be afraid of him again. Nobody will ever be afraid of anything.
      *set heartfire_choice "take"
      *set ending "E"
      *set kindling 100
      You put your hands into the Heartfire and lift.

      It comes. That's the terrible thing. It comes so easily, so gladly, out of the rock and into your hands and up your arms and into the middle of you, where your own white flame is, and your flame opens to it like a door, and Hester Wren's four hundred years pour into you like the sea into a cave.

      You've never felt anything like it. Nobody has. You're [i]enormous[/i]. You can feel every lantern in Wrenfold, all ten thousand, hanging off you on their threads. You can feel every flame in the castle, four hundred of them, gold and rose and green and blue, and you could lean on any of them, any of them, and they'd bend. You can feel Aldric Morrow's stolen flames guttering in him, and you could take those too, you could pull them out of him like threads out of cloth.

      @morrow:hungry "Now you know," he says, very softly, looking at your face. And for the first time, he smiles. "Now you know how it feels."

      You do.
*if fought_morrow
  *choice
    #Give it your own. Pour your whole flame into the crack and let Hester's fire use it to mend.
      *set heartfire_choice "give"
      *set ending "D"
      *set kindling 0
      *set chill 3
      You go to the Heartfire, past him, and put both hands flat against the crack.

      It knows you. It's like putting your hands into warm water. And you don't lift, and you don't hold. You give. Everything. The white flame that lit a candle in a corridor in September, and Toby's lantern, and Maisie's spark, and the kitchen at Viaduct Street. All of it. You pour it into the crack like pouring water into a split jug, and the crack drinks it, and drinks it, and you feel it go, all of it, down to the last spark, and you feel yourself go cold, and ordinary, and small.

      And the crack closes.

      Hester's fire flares up whole, gold and white and every colour, and the threads of light going up into the dark blaze bright, and far above, ten thousand lanterns blaze with them. And the Heartfire, whole, wakes all the way up, and sees Aldric Morrow standing in front of it with stolen flames stuffed into him, and simply [i]pulls[/i]: the way the lanterns pull towards the Choir's note, but the other way. Every stolen flame goes out of him at once, up the threads, home. The grey threads holding Toby and Maisie and the Headmistress to the wall snap like cobwebs.

      You don't see what happens next. You're lying on the warm black rock, with your cheek against it, and you're so cold. You can't feel your flame. You can't feel anything where it was. Somewhere very far away, the Headmistress is saying your name, over and over, with her hands on your face.
    *if (kindling >= 80) and (chill < 2)
      #Relight him. Past all the stolen flames, find what's left of Aldric Morrow and breathe on it. It's the only way to stop him that saves all three.
        *set heartfire_choice "relight_morrow"
        *set ending "B"
        *set chill 3
        You go to him. He thinks you're going to strike him. You take his grey hands, and close your eyes, and go down, past the hundred stolen flames, to the bottom of him, where there's a flicker, grey, tiny, forty years cold. And you breathe on it with everything you've got left.

        @morrow:hurt It catches. Blue, small, ordinary, like a gas flame on a kitchen hob. And every stolen flame goes out of him at once, up the threads, home, and the grey threads on the wall snap, and Toby and Maisie and the Headmistress fall to the floor of the cave, gasping, alive. And the Heartfire, with nothing pulling at it, stops shuddering, and the crack in it goes slowly dark, and stays, a scar, but holds.

        @morrow:warm Aldric Morrow sits down on the black rock and looks at his hands, and picks up a candle stub off the floor, and lights it. Blue. That's all he can do. Light a candle. "It's mine," he says, and cries like a child. "It's so small. It's mine."
    #Take it yourself. Lift the cracked fire out of the rock before it breaks, and carry it. Nobody will ever touch it again.
      *set heartfire_choice "take"
      *set ending "E"
      *set kindling 100
      You put your hands into the cracked Heartfire and lift, and it comes, gladly, out of the rock, into you, and the crack in it closes in you like a wound closing, and Hester Wren's four hundred years pour into the middle of you like the sea into a cave.

      You're enormous. You can feel every flame in Wrenfold, and you could lean on any of them. You pull the grey threads off the wall with a thought, and Toby and Maisie and the Headmistress fall free, and you pull the stolen flames out of Aldric Morrow like threads out of cloth, and send them home, and he falls to his knees, empty.

      @morrow:hungry "Now you know," he whispers, looking up at your face. "Now you know how it feels."

      You do.
    #You can't stop him. You can't save all three. Reach for one of them and pull them out of the threads before it breaks.
      *set heartfire_choice "choose"
      You can't do it. You know it, the way you knew it in the high street at Thimble Cross, and on the east stair. You can't hold the Heartfire, and stop him, and save them all. Not tonight. The crack is widening. The cave is shaking. The threads on the wall are pulling tighter.

      You can reach one of them.
      *choice
        #Toby.
          *set saved_one "toby"
          *set ending "G_T"
          You go for Toby. Of course you do. You get your hands on him and your flame round his and you pull, and the grey threads tear, and he falls into your arms, and you're dragging him backwards down the passage as the Heartfire breaks behind you.
        #Maisie Tully.
          *set saved_one "maisie"
          *set ending "G_M"
          You go for Maisie. For a man on a ladder who saw it all forty years ago and said nothing, and has said nothing since, and has sat by a bed three hundred and twelve Sundays. You get your hands on her and pull, and the grey threads tear, and she falls into your arms, and you're dragging her backwards down the passage as the Heartfire breaks behind you.
        #The Headmistress.
          *set saved_one "kestrel"
          *set ending "G_K"
          You go for the Headmistress. She's the one who can still fight. She's the one who'll know what to do after. You get your hands on her and pull, and the grey threads tear, and she falls against you, and she's the one dragging [i]you[/i] backwards down the passage as the Heartfire breaks behind you.

      It breaks like a lamp glass breaking, a long bright shattering sound, and the colours pour out of it into the dark, and Aldric Morrow walks into them, with his arms open, like a man walking into the sea. And gathers what he can. And goes, into the dark at the back of the cave, where there's a crack in the rock that goes down towards water, with the two you didn't reach still held in his grey threads behind him like lanterns on strings.
*page_break
*comment ---------------------------------------------------------------- CH23.DAWN.01
*sid CH23.DAWN.01
*date 2027-06-21 04:40
*mood dusk
*place P12 mere_day
*present familiar
Midsummer dawn comes early over the Mere, the earliest dawn of the year, at twenty to five, pink and gold and enormous.

You're sitting on the end of the jetty. You don't remember how you got there. Somebody's put a blanket round you. {fam_name} is in your lap.
*if ending = "A"
  Behind you, the castle is lit in every window, and the Lantern Hall's ten thousand lanterns are burning gold through the high windows, and people are coming down the lawns towards the water in their night things, in the dawn, laughing and crying and holding on to each other. The Lamplighters took Aldric Morrow up the boathouse steps an hour ago, an old grey man between two of them, walking slowly, not looking back. The Choir sit in rows on the lawn, bewildered, with blankets round them, waking up.
*if ending = "B"
  You're cold. Colder than you've ever been. Cold at the heart, where your flame is, and it's small now, very small, a pilot light. You gave most of it away down there. Behind you, the castle is lit in every window. And on the bench at the end of the jetty, with a blanket round him and a candle stub burning blue in his thin old hands, Aldric Morrow is watching the sun come up over the Mere, and weeping, and can't stop.
*if ending = "C"
  Behind you, the castle is dark. Every window. Every lantern. For the first time in four hundred years, Wrenfold is just a big cold stone house on a hill above a lake, with no wards and no light, and four hundred people coming down the lawns towards the water with candles, lit by hand, in the dawn. The Lamplighters carried Aldric Morrow out of the root an hour ago, starving, silent, and he hasn't said a word since.
*if ending = "D"
  You can't feel your flame. You keep checking, the way you'd keep touching the gap where a tooth was. There's nothing there. The kettle won't boil for you. The candles won't lean. Behind you, the castle is lit in every window, blazing, whole, and the Heartfire's burning bright under it, and you did that, and you can't feel any of it at all.
*if ending = "E"
  You're burning. You can feel every lantern in the castle behind you, hanging off you on threads. You can feel every flame coming down the lawns towards you, four hundred of them, and they're all leaning towards you, the way candles lean towards a bigger fire, and they're frightened, and they don't know why. Nobody sits down beside you on the jetty. Nobody comes near.
*if ending = "F"
  There's a cold place in you, where a piece of your flame was pulled out. Behind you, the castle is lit in every window. Somewhere out there, across the Mere and over the hills, on the Fen, an old grey man is walking with a piece of you burning in him. The Commander's on the jetty beside you, looking south. "We'll find him," she says. "I'll need you." You know already that you'll go.
*if (ending = "G_T") or (ending = "G_M") or (ending = "G_K")
  Behind you, the castle is dim. The Heartfire's broken; not out, but broken, a few pieces of it still guttering in the rock, enough to keep the lanterns burning low and blue and flickering, like candles in a draught. Not enough to hold the wards. {@ending = "G_T"|Toby is asleep on the jetty beside you, wrapped in a blanket, with his head on your shoulder. The Headmistress and Maisie Tully are gone.|}{@ending = "G_M"|Mr Tully is sitting on the jetty beside you with Maisie wrapped in his coat, holding her, rocking. Toby and the Headmistress are gone.|}{@ending = "G_K"|The Headmistress is standing at the end of the jetty with her back to you, looking at the water. Toby and Maisie Tully are gone. She hasn't spoken since the root.|}
*if (st_rowan >= 3) and (hurt_rowan < 2) and (ending != "E")
  *present rowan
  @rowan:tired Rowan sits down beside you, heavily, soot on his face, and doesn't say anything, and puts his warm arm round you. You lean on it.
*elseif (st_noor >= 3) and (hurt_noor < 2) and (ending != "E")
  *present noor
  @noor:tired Noor sits down beside you with her first-aid bag, and takes your pulse without asking, and then leaves her fingers on your wrist long after she's finished counting.
*elseif (st_saoirse >= 3) and (hurt_saoirse < 2) and (ending != "E")
  *present saoirse
  @saoirse:tired Saoirse sits down beside you on the jetty, and doesn't fidget, and doesn't say anything, and watches the sun come up with you.
*elseif (st_imogen >= 3) and (hurt_imogen < 2) and (ending != "E")
  *present imogen
  @imogen:tired Imogen sits down beside you with her notebook shut on her knee, and for once doesn't write anything down.
*elseif (st_cas >= 3) and (hurt_cas < 2) and (ending != "E")
  *present cas
  @cas:tired Cas sits down beside you, in the ruin of his good coat, and leans his shoulder against yours, and doesn't move it.
*elseif (st_idris >= 3) and (hurt_idris < 2) and (ending != "E")
  *present idris
  @idris:tired Idris sits down beside you with his glasses broken and his notebook gone, and says, "I'm not going to write any of this down," and takes your hand.

Out on the Mere, in the first light, you see them: the ghosts, going home. Silvery-blue shapes walking out across the water towards the rising sun, the way they came. Lettice Crane, with her frizzy hair. And a tall man in dark robes, with whole hands, who stops, out on the water, and turns round, and looks back at the castle, and at you on the jetty. And inclines his head, very slightly, the way you'd greet a colleague across a staffroom.

And walks on, into the sun.
*snapshot ghosts
*journal [b]Chapter 23.[/b] The Heartfire, in the root of the rock: Hester Wren's own flame, and Aldric Morrow, asking you to carry a piece of it for him. {@ending = "A"|You stood between him and the fire and sang, and the song came down through the rock, and the stolen flames went home, and the Order took him.|}{@ending = "B"|You relit Aldric Morrow's own flame: small, blue, his. The stolen flames went home. It cost you most of your fire.|}{@ending = "C"|You let Hester's fire go out, so there would be nothing for him to take. Wrenfold is dark, and everyone lives.|}{@ending = "D"|You gave your whole flame to mend the Heartfire. Wrenfold stands. You have no magic left.|}{@ending = "E"|You took the Heartfire yourself.|}{@ending = "F"|You tried to relight him and failed, and he tore a piece of your flame out of you and escaped into the Fen.|}{@ending = "G_T"|You couldn't stop him. You brought Toby out.|}{@ending = "G_M"|You couldn't stop him. You brought Maisie Tully out.|}{@ending = "G_K"|You couldn't stop him. You brought the Headmistress out.|} At dawn the ghosts walked home across the Mere, and Magnus Grey looked back once.
*page_break
*goto_scene ch24
`);
