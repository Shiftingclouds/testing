NB.scene("ch21", String.raw`
*mood dusk
*set ch 21
*chapter 21 Brightfire
*if order_offer = "leave"
  *goto away
*comment ---------------------------------------------------------------- CH21.BRIGHT.01
*sid CH21.BRIGHT.01
*date 2027-05-01 20:00
*place P37 candlestones
*present toby priya kestrel familiar
Brightfire is the first of May, and it's the last good night.

You don't know that yet. Or you do, a bit, the way you know the last day of a holiday is the last day while you're still standing in the sea. Seven weeks to Midsummer. Everybody knows what Midsummer is now. The whole school walks up the hill above Thimble Cross anyway, at sunset, in a long bright line, carrying may branches and ribbons and baskets of food, to the ring of standing stones called the Candlestones, where the Brightfire burns.

You cross the Mere in the boats with everyone else, in the gold evening, with the water so still the castle hangs upside down in it. On the far shore the lane climbs between hawthorn hedges so thick with blossom they look snowed on, and the smell of it is sweet and heavy and faintly wrong, like a church full of lilies. There are lambs in the fields, bawling. The swallows are back, cutting low over the grass. Somebody behind you is playing a tin whistle, badly, and somebody else is telling them to stop, and they don't. {fam_name} comes too, of course, keeping close in the crush, bristling at every dog in the village.

The Candlestones are older than the school. Twelve grey stones in a ring on the top of the hill, leaning together like old women sharing gossip, each one worn at the top into a shallow cup where somebody, a very long time ago, used to keep a flame. Tonight there's a candle in every cup. From up here you can see the whole valley: the village roofs, the Mere going from gold to pewter, and the castle on its rock across the water, small as a toy.

The Brightfire is enormous. A bonfire in the middle of the ring, built by Rookhallow over a week, taller than the stones, and when the Headmistress lights it, with a word and a flick of her good hand, it goes up with a roar you feel in your chest. The sparks climb into the violet sky until you can't tell them from the first stars. There's a band on a hay cart: a fiddle, a drum, an accordion held together with tape. There's a maypole with four hundred ribbons. There are garlands of may blossom and cowslips on everybody's heads, and bread and cheese and pies in the baskets, and potatoes pushed into the edge of the embers to bake, and a cauldron of something hot and spiced that Heronmere swear is only apple. There's dancing, round and round the fire in one great ring, then in smaller rings inside it, and people leap the embers at the edge of the fire for luck, screaming.
*if toby_lit
  @toby:laugh Toby leaps the embers four times. He's thinner than he was, and paler, and his flame is small and lopsided and gold, but he leaps them four times, shouting, with a garland of cowslips slipping over one eye. Priya screams at him every single time. He lands every single time. On the fourth he turns round in the firelight and finds you, and shouts, "It's all going to be all right!" and you almost believe him.

  @priya:warm Afterwards Priya thumps him on the arm, hard, and then holds on to the arm she's thumped and doesn't let go of it for the rest of the night. "Four," she says to you, over his head. "Four times. He can't get up the Infirmary stairs without sitting down halfway." She's laughing. Her eyes are wet. "Don't you dare tell him to stop."

  You don't. You watch him eat a baked potato with his fingers, burning them, swearing, blowing on them, alive, and it's better than the fire.
*else
  @priya:warm Priya leaps the embers once, for Toby. She does it with his lopsided Candlewake candle held up in one hand, lit, and she lands, and stands there on the far side of the fire with it, not crying.

  Toby isn't here. He's in the Infirmary, by the window, where he could see the fire on the hill if he looked, and doesn't know to. Custard the hare has come instead, in a basket by the maypole, with a garland of cowslips round her neck, and a Heronmere first-year is feeding her dandelions one at a time. When Priya comes back round the fire, she sits down on the grass by the basket, and sets the candle in the cup of the nearest stone, and leaves it there, burning, among all the others.
*if maisie_lit
  *present tully maisie
  @tully:warm Mr Tully is sitting on a stone at the edge of the ring, with a blanket over his knees. Next to him, with her own blanket, thin and pale and wide-eyed, looking at the fire as if she's never seen fire before, is Maisie. She's holding his hand. Every so often she says something to him, and he laughs, and you realise you've never heard him laugh before. Not properly.

  @maisie:neutral When you pass, she looks up at you. Her eyes aren't foggy any more. They're her father's, pale and blue and startled. "It's so loud," she says, delighted, as if loud were a present somebody had given her.

@kestrel:warm The Headmistress stands at the edge of the firelight with her arms folded, watching. She's put a sprig of may in her braid. When you pass her, she says, without looking round, "Go and dance. That's an order. I'm told I'm allowed to give those now."

You dance. Round the fire in the great ring, with your garland falling off, with everybody: with people from your own house and people from the other three, with a Larkspire prefect who treads on your feet and apologises every time, with a Rookhallow second-year who knows the steps and shouts them at you and gets them wrong. The fiddle goes faster. The ring goes faster. You dance until your lungs hurt and your feet hurt and you're laughing so much you can't stand up, and then you sit down in the grass with a hot potato in your hands and your back against a warm stone and your heart going like the drum.

It's the best night of your life. It might really be. You'll never be sure.
*page_break
*comment ---------------------------------------------------------------- CH21.BRIGHT.02
*sid CH21.BRIGHT.02
*date 2027-05-01 23:30
*mood night
*present familiar
Later, when the fire's burned down to a great red heart of embers and the band's playing slow, you walk out between the standing stones, away from the light.

It's dark out there, and cool, and the grass is wet enough to soak through your shoes. The noise of the fire goes soft behind you all at once, the way noise does when you step out of a warm pub into the street. Your face is hot on the side that was turned to the flames. Your hair smells of woodsmoke and may. Below you the whole valley's spread out in the moonlight: the Mere, silver and still, and the castle on its hill beyond, every window lit.

You stand there and look at it. Seven weeks.
*snapshot brightfire
*if final_rel = "rowan"
  *present rowan
  @rowan:warm Rowan finds you. He was always going to. He comes out between the stones with his garland crooked and his shirt smelling of woodsmoke and stands beside you, warm as the fire behind you, and looks at the castle. The wet grass round his boots is steaming faintly.

  @rowan:shy "Six weeks," he says. "Since the roof. Best six weeks I've had. Frightened the whole time." He almost laughs. "Seven more, and then whatever happens." He doesn't look at you. "I don't want to wait seven weeks to find out what we are, after. Whether this lasts past Midsummer, or it's a thing we did because we were both scared. I want to know now. Tonight. So that whatever happens, we were this first."
*if final_rel = "imogen"
  *present imogen
  @imogen:warm Imogen finds you. She's got a garland of cowslips on, lopsided, which {@kit_lit|Kit put on her head, laughing, when he came up for the day|Priya put on her head}, and she hasn't taken it off. She stands beside you in the wet grass and looks at the castle, and for a while she doesn't say anything, which isn't like her.

  @imogen:shy "I made a plan," she says at last. "For tonight. I know. I'm sorry. I made a plan for what to say, and I've forgotten it." She takes a breath. "So. On the roof, you said yes. I've been happy since, which I'm not used to, and I keep waiting for the catch. I don't want to wait for Midsummer to find out what this is. I want to know now. Whether it goes on, after. Or whether it's a thing I made up because I was frightened."
*if final_rel = "saoirse"
  *present saoirse
  @saoirse:warm Saoirse finds you. She comes out between the stones at a run, and stops, and stands beside you in the wet grass, and doesn't fidget. She's got soot on her face from the bonfire and may blossom in her hair, and she's breathing hard from the dancing.

  @saoirse:shy "I'm standing still," she says. "Look. Still here. Six weeks since the roof and I'm still standing still. That's a record. Somebody should write it down." She looks at the castle, not at you. "So I want to know. Now, before Midsummer. Whether it's you and me. Properly. After. Whatever happens."
*if final_rel = "cas"
  *present cas
  @cas:warm Cas finds you. He's lost his coat somewhere, and there's a garland of may on his head that someone put there, and he hasn't taken it off, which you'd never have believed in September. He stands beside you and looks at the castle, turning his signet ring round and round on his finger.

  @cas:shy "My grandmother wrote," he says. "Properly, this time. Four sides. She asked if there was anyone." He's not looking at you. "I didn't know what to tell her. I know what we said on the roof. I don't know what we are after Midsummer, or whether there's an after. I'd like to know what to tell her. Before whatever happens."
*if final_rel = "noor"
  *present noor
  @noor:warm Noor finds you. She's not in her uniform, for once. She's in a dress, with may in her plait, and she's been dancing, you can tell; her cheeks are pink, and she's lost a shoe and hasn't gone back for it. She stands beside you in the wet grass and looks at the castle.

  @noor:shy "I asked for something once," she says. "On the roof. I'm going to ask for something again. It's getting easier. That's frightening." She takes your hand. "I want to know what we are, after. Not just till Midsummer. So that whatever happens, I had that. I knew."
*if final_rel = "idris"
  *present idris
  @idris:warm Idris finds you. He's got his glasses in his pocket again, and a garland of cowslips somebody forced on him, and the look of a man who's been thinking about one thing since the roof, which he has. He stands beside you and looks at the castle, slightly out of focus.

  @idris:shy "I've been researching," he says. "Don't laugh. There's nothing useful in the Long Stacks about this; I've looked." He turns to you. "So I'll ask. On the roof you said yes. Yes to what, after Midsummer? What are we? I'd like to know before whatever happens. I'd like to know without having to work it out."
*if final_rel = ""
  *if (b_rowan_fire and b_rowan_afraid and (hurt_rowan < 2)) or (b_imogen_kit and b_imogen_order and (hurt_imogen < 2)) or (b_saoirse_still and b_saoirse_run and (hurt_saoirse < 2)) or (b_cas_family and b_cas_debt and (hurt_cas < 2)) or (b_noor_carry and b_noor_rest and (hurt_noor < 2)) or (b_idris_file and b_idris_suspect and (hurt_idris < 2))
    You hear someone behind you, among the stones, footsteps slow in the wet grass. You know who, before you turn.
    *choice
      *if b_rowan_fire and b_rowan_afraid and (hurt_rowan < 2)
        #Rowan.
          *present rowan
          *set b_rowan_want true
          *set st_rowan 5
          *set final_rel "rowan"
          @rowan:shy "I said it once," he says, "on the roof. And you said not yet." He stands close, warm as the fire, with his big hands shoved in his pockets so they won't do anything without him. "It's still true. I want to stand still with you and be frightened and not be brave about it. I want it to be you. I'm asking again. That's all. You can say not yet again. I'll live."
      *if b_imogen_kit and b_imogen_order and (hurt_imogen < 2)
        #Imogen.
          *present imogen
          *set b_imogen_want true
          *set st_imogen 5
          *set final_rel "imogen"
          @imogen:shy "I want you," she says, very fast, as if she's afraid she'll stop. "Not as a plan. For me. I've wanted it since Candlewake. I'm telling you because we've got seven weeks, and I'm not wasting them being sensible." She pushes her glasses up her nose. "That's the whole speech. There were supposed to be three points."
      *if b_saoirse_still and b_saoirse_run and (hurt_saoirse < 2)
        #Saoirse.
          *present saoirse
          *set b_saoirse_want true
          *set st_saoirse 5
          *set final_rel "saoirse"
          @saoirse:shy She stops in front of you and stands absolutely still, soot on her face, may in her hair, her hands clenched at her sides with the effort of it. "I'm standing still," she says. "For you. I want it to be you. That's the whole thing."
      *if b_cas_family and b_cas_debt and (hurt_cas < 2)
        #Cas.
          *present cas
          *set b_cas_want true
          *set st_cas 5
          *set final_rel "cas"
          @cas:shy "No clever line," he says. He's lost his coat, and his ring's going round and round on his finger. "I've stopped rehearsing. I want you. I'm not going to pretend otherwise to save my pride. My pride's had a long year; it can manage."
      *if b_noor_carry and b_noor_rest and (hurt_noor < 2)
        #Noor.
          *present noor
          *set b_noor_want true
          *set st_noor 5
          *set final_rel "noor"
          @noor:shy She's lost a shoe dancing and hasn't gone back for it. She stands in the wet grass in one stockinged foot and looks at you steadily. "I'm asking for something for myself," she says. "You. That's what I'm asking for."
      *if b_idris_file and b_idris_suspect and (hurt_idris < 2)
        #Idris.
          *present idris
          *set b_idris_want true
          *set st_idris 5
          *set final_rel "idris"
          @idris:shy He takes his glasses off, and folds them, and puts them in his pocket, so that you're a blur to him and he can say it. "I want to stop studying you," he says, "and start knowing you. The other way. If you'll let me."
      #Nobody. You'd rather watch the castle alone tonight.
        *set final_rel "single"
*if (final_rel != "") and (final_rel != "single")
  *choice
    #"Together. Whatever happens at Midsummer, we were this first."
      *set final_shape "together"
      *if final_rel = "rowan"
        *set st_rowan 6
        @rowan:warm He lets out a breath like somebody putting down something heavy he's carried for years. {@steam|He kisses you, there among the standing stones, with the fire behind him and the whole valley below, and he's shaking, and so are you, and neither of you minds.|He holds you, there among the standing stones, with the fire behind him and the whole valley below, and he's shaking, and so are you, and neither of you minds.} "Together," he says into your hair. "All right. Together. I'm terrified." He laughs. "I'm so happy I'm terrified."

        @rowan:warm You stay like that until the cold comes up through your wet shoes, which takes a while, standing next to Rowan. He tells you about his sisters, all four of them, and what each of them is going to say when they find out, and does the voices. "Our eldest'll want to know your intentions," he says. "In writing. She's the worst. You'll love her."
      *if final_rel = "imogen"
        *set st_imogen 6
        @imogen:warm She takes her glasses off, and puts them on again, and takes them off. "Right," she says. "Good. That's... yes." Then she stops trying to say anything at all, and {@steam|kisses you, among the stones, fiercely, with her garland falling off|holds on to you, among the stones, fiercely, with her garland falling off}, and when she lets go she's laughing. "No plan," she says. "Look at me. No plan at all."

        @imogen:warm She picks the garland up out of the wet grass and puts it back on, crooked, and then puts her hand in yours as if she's been doing it for years. "I'm going to make one tomorrow," she warns you. "A plan. With us in it. You'll have to read it." She considers. "There'll be footnotes."
      *if final_rel = "saoirse"
        *set st_saoirse 6
        @saoirse:warm She doesn't move. She stands absolutely still, and lets you come to her, the whole way, and {@steam|when you kiss her she's laughing and crying at once, with soot on her face and may in her hair|when you reach her she's laughing and crying at once, with soot on her face and may in her hair, and holds on}. "Together," she says. "I'm not going anywhere. Watch me not go anywhere."

        @saoirse:warm You watch her not go anywhere for a good while, out there among the stones. It's the stillest you've ever seen her. At one point a spark from the fire drifts over your heads, and she follows it with her eyes the whole way up, and doesn't chase it.
      *if final_rel = "cas"
        *set st_cas 6
        @cas:warm He closes his eyes for a second. "I'm going to tell her," he says. "My grandmother. I'm going to write it down properly, in ink, and she can put it in the book." Then {@steam|he kisses you, among the standing stones, carefully and thoroughly and without any pride at all|he takes your hands in his grandfather's hands, among the standing stones, and holds on, without any pride at all}.

        @cas:warm "She'll want to know about your people," he says afterwards, not quite steadily. "Your family. How many generations of wand." You tell him about Nana Pearl. He listens to the whole thing with his head on one side, and then laughs, properly, the way he never did in September. "She'll hate it," he says. "I love it. Tell me again about the budgie."
      *if final_rel = "noor"
        *set st_noor 6
        @noor:warm She laughs, a small astonished laugh. "Together," she says. "I get to have that." {@steam|She kisses you, among the stones, softly, and then not softly at all|She puts her arms round you, among the stones, softly, and then not softly at all}. "I'm keeping it," she says. "I'm not giving it to anyone who needs it more."

        @noor:warm Then, being Noor, she looks down at your feet. "Your shoes are soaked," she says. "You'll catch a chill. Come back to the fire." You point out that she's only got one shoe. She looks at her own stockinged foot as if it belongs to somebody else, and starts laughing again, and can't stop.
      *if final_rel = "idris"
        *set st_idris 6
        @idris:warm He puts his glasses back on to see your face, as he did on the roof. "Together," he repeats, as if he's writing it down in his head, in ink, underlined. {@steam|Then he kisses you, among the stones, slowly and seriously, as if it's the most important thing he's ever studied.|Then he takes your hand, among the stones, slowly and seriously, as if it's the most important thing he's ever studied.} "Not in any of the books," he says. "Good."

        @idris:warm "I'm going to ask you one question a day," he says, as you walk back towards the fire, "from now on. For the rest of the year. Possibly longer." He considers. "Today's has been asked. You'll have to wait till tomorrow for the next one."
    #"Not like this. Not with Midsummer coming. I can't promise you anything."
      *set final_shape "parting"
      *set heart +5
      *if final_rel = "rowan"
        @rowan:hurt Rowan hears it. You watch him hear it. He doesn't argue. He nods, slowly, with his jaw set, the way he nodded in the Warding Hall in September when he was told to stand back from everyone. "Yeah," he says. "Yeah. That's fair." He stands beside you a while longer in the wet grass, warm, not touching you. Then he goes back to the fire.
      *if final_rel = "imogen"
        @imogen:hurt Imogen hears it. She takes her glasses off and polishes them on her sleeve, very thoroughly, for much longer than they need. "That's sensible," she says. "That's what I'd have said. If I were being sensible." She puts them back on. She stands beside you a while longer, and then goes back to the fire, and you see her take the garland off on the way.
      *if final_rel = "saoirse"
        @saoirse:hurt Saoirse hears it. She stays standing still, which is the worst part; you can see what it costs her. "Right," she says. "Right. Course." She lasts nearly a minute. Then she's gone, back between the stones at a run, and a moment later you hear her by the fire arguing with someone about the maypole, too loudly.
      *if final_rel = "cas"
        @cas:hurt Cas hears it. Something goes over his face, and then the old look comes down over it, the September one, the one that was always a door being shut. It doesn't fit him any more. "Of course," he says. "Very wise." He turns his ring once. "I'll tell her there wasn't anyone. She'll believe it. She always does." He goes back to the fire without his coat.
      *if final_rel = "noor"
        @noor:hurt Noor hears it. She nods, as if you've told her a patient's blood pressure. "All right," she says. "Thank you for telling me straight." She lets go of your hand. She stands with you a while longer, in her one shoe, and then goes back to the fire to look for the other one.
      *if final_rel = "idris"
        @idris:hurt Idris hears it. He puts his glasses back on to look at you, and then takes them off again, as if he'd rather not see. "That's an answer," he says quietly. "I asked for one. I'm grateful for it." He stands beside you a while longer, and then goes back to the fire.

      You stay out among the stones and watch the castle, and wonder if you've been brave or only frightened. You don't know. You'll have to find out.
*if final_rel = ""
  *set final_rel "single"
*if final_rel = "single"
  You stand out among the stones on your own, and it's all right.

  Behind you, the fire, and four hundred people you know, singing something rude about Rookhallow to the tune of a hymn. Below you, the castle, every window lit. {fam_name} finds you in the dark and settles close. An owl goes over, low, and then a bat, and the moon comes out from behind the only cloud. You made it this far. You've got friends on that hill who'd go into the dark for you, and you'd go for them. It's enough. It's more than enough.

  After a while, you go back to the fire. Somebody hands you a cup of something hot. Somebody else puts a garland on your head. You dance till two.
*page_break
*comment ---------------------------------------------------------------- CH21.PLAN.01
*sid CH21.PLAN.01
*date 2027-05-02 11:00
*mood day
*place P25 weathervane_room
*present kestrel arkwright tully hester familiar
The morning after Brightfire, in the Weathervane Room, with the windows open and the smell of woodsmoke still in everybody's hair, you make the plan.

The castle is slow this morning. Half the school's still asleep; the other half is at breakfast in the Hall, eating toast with the dazed faces of people who danced till two. You climb the sideways stair to the top of the central tower with your legs aching and grass stains on your knees. Up here it's bright and breezy. The clocks are ticking, all of them, slightly out of step. The weathervanes, the iron cockerels and brass ships and the copper wren, have swung round in the night to point the same way: south-west, down the valley, at nothing you can see. The little hawk on its perch by the window has its head under its wing.

They're already there. The Headmistress, by the window, in her long coat. Commander Arkwright, standing, because she always stands, with her hands behind her back and her greatcoat buttoned to the neck. Mr Tully, in his best coat, holding his cap, sitting very upright on a hard chair by the door, as if he's waiting to be sent for. And you. And over the fireplace, in the tea-coloured varnish, Hester Wren, watching.

Nobody offers anyone cake. That's how you know.

@arkwright:grave "He's told us what he's going to do," says the Commander. "That's the one advantage we've got. He trusts the Lanternwarden." She looks at Mr Tully, and her face doesn't soften, quite. "Midsummer Eve. The Proving. Every student in the Hall, every lantern lit. At eleven, Mr Tully leaves the boathouse ward open, as asked. The Choir comes in through it. And my people are waiting."

@arkwright:grave "Forty of them," she goes on. "Every Lamplighter I can spare and some I can't. In the boats, in the rafters, behind the doors. He'll walk up that slipway into more light than he's seen in forty years."

@kestrel:grave "And then Aldric goes down to the root," says the Headmistress quietly, to the window. "Because that's what he's come for. With the Kindler or without. You won't stop him at the boathouse, Sabine. I knew him. Nobody ever stopped him at the first door." She turns round. "Somebody has to be there when he gets to the last one."

@arkwright:neutral The Commander's jaw tightens. She doesn't argue. That's new, too.

@tully:tense Mr Tully clears his throat. Everyone looks at him.
*if maisie_lit
  @tully:grave "I'll do it," he says. "Whatever you want. I'll leave the ward. I'll take him down to the root myself, if you want him taken, and I'll tell him to his face." His hands are steady on his cap. "He's got nothing left to give me. She's in the Infirmary eating toast. She asked for marmalade this morning. Marmalade." His voice cracks. "He promised me my girl back for three years, and you gave her me in an afternoon. I'll do whatever you want."

  @kestrel:warm The Headmistress crosses the room and puts her good hand on his shoulder, just for a moment. He covers it with his own oily fingers, and then lets go, embarrassed, and looks at his cap.
*else
  @tully:grave "I'll do it," he says. His voice isn't steady. "Whatever you want. I'll leave the ward. I'll tell him what you want told." He looks at his hands. "He'll say she'll wake by morning. He'll say it to my face. And part of me will want to believe him till the day I die." He looks up. "But I lit Toby Quill's lantern the first night. I'll do whatever you want."

  @kestrel:warm Nobody says anything to that. After a moment the Headmistress crosses the room and puts her good hand on his shoulder, and he sits there under it with his eyes shut.

@kestrel:neutral "Then there are three places that matter," says the Headmistress. She goes to the table and unrolls a plan of the castle, old and brown at the edges, and weighs the corners down with a barometer and two teacups. "The Hall, where the song must be sung, or every flame in the room is his for the taking." Her finger on the Hall. "The Old Cloisters, at the wren door, which is the only way down to the root." Her finger on a small drawn door, deep under everything. "And the boathouse, where he comes in." Her finger on the water's edge.

@kestrel:grave She looks up at you. "Sabine wants you at the boathouse, where he'll see you first. I want you in the Hall, leading the song. Somebody has to hold the wren door." She pauses. "You've done more than anyone should ask. So I'm asking. Where do you want to stand?"

You look at the map. At the three places. At the little drawn door. A weathervane behind you creaks round, and stops.
*choice
  #The Hall. Lead the song. That's what it needs, and it's what you're for.
    *set plan22 "hall"
    *set heart +5
    @kestrel:warm The Headmistress nods, slowly. "The wren's line," she says. "Good. I'll stand beside you." She rolls the map up, and something in her shoulders comes down, a very little. "I've wanted to hear you lead it in that Hall since the first rehearsal. I'm sorry it has to be like this."

    @arkwright:neutral The Commander doesn't like it. You can see her not liking it. "Then he'll come looking for you," she says. "Through four hundred people. Keep singing when he does."
  #The Old Cloisters. Hold the wren door. If he goes down, he goes past you.
    *set plan22 "cloisters"
    *set nerve +5
    @kestrel:grave The Headmistress is quiet. The clocks tick. "Magnus held a stair," she says at last, very low. "I'll put Idris and the Order's best with you. And the song will have to lead itself." She glances at the painting over the fire. "Or I'll lead it. I know the wren's line. I can't hear flames the way you can. I'll have to sing it blind."

    @arkwright:grave "The door, then," says the Commander. "Six of mine. The best I have." She looks at you properly, for the first time this morning. "Don't stand in front of him, if he comes. Stand beside the door. Let the lamps do the work."
  #The boathouse. Where he comes in. Look him in the face first.
    *set plan22 "boathouse"
    *set nerve +10
    @arkwright:grave "Good," says the Commander, and means it. "Stand next to me. When he sees you, he'll come to you. And then we'll have him." For the first time since you've known her, she very nearly smiles. "You'll be the brightest thing on that slipway. He won't look anywhere else."

    @kestrel:grave The Headmistress says nothing at all. She looks up at the painting over the fireplace, as if she's asking it something. Whatever she's asking, it doesn't answer her.

@hester:neutral It answers you. The painted old woman in the oilskin coat, over the fire, with her crooked smile and her bright wren-brown eyes, says, in her voice like wind in a sail: "Sing loud."

Nobody knows what to say to that. So nobody says anything.

Afterwards you go down the sideways stair into a Sunday castle full of sleepy people and the smell of bacon, and out onto the lawn, where somebody's hung their Brightfire garland on the sundial. The Mere is blue. The hawthorn's out along the shore. Seven weeks, and a plan on a brown map, and a painting that told you to sing loud. You stand in the sun for a while, with {fam_name}, and then you go and find somebody to have breakfast with.
*journal [b]Chapter 21.[/b] Brightfire on the Candlestones: the bonfire, the maypole, the embers leapt for luck. The last good night. {@final_shape = "together"|Among the standing stones, you chose to be together, whatever happens at Midsummer.|}{@final_shape = "parting"|Among the standing stones, you said not like this.|}{@final_rel = "single"|You watched the castle from among the stones, alone, and it was enough.|} The plan: Mr Tully will leave the boathouse ward open at eleven on Midsummer Eve, as Morrow asked, and the Order will be waiting. You'll stand {@plan22 = "hall"|in the Lantern Hall, leading the Wren's Song|}{@plan22 = "cloisters"|at the wren door in the Old Cloisters, the only way down to the root|}{@plan22 = "boathouse"|at the boathouse, beside the Commander, where he comes in|}. Hester's portrait said: [i]Sing loud.[/i]
*page_break
*goto_scene ch22
*comment ================================================================ away
*label away
*comment ---------------------------------------------------------------- CH21.AWAY.01
*sid CH21.AWAY.01
*date 2027-05-01 21:00
*mood night
*place P40 fen_chapel
*present jory familiar
On the Fen, Brightfire is a small fire on a muddy bank, and Jory Penrose, and the cat.

It's been a fortnight since the boats went back across the Fen with the Commander and her forty Lamplighters in them. The house is very quiet without them. You've learned its noises: the slates lifting in the wind, the pipes knocking, the back door that won't shut unless you kick it. Jory cooks, badly, from a book with the pages stuck together. You read. {fam_name} has made an uneasy peace with the cat, which consists of both of them pretending the other one isn't there. In the afternoons you walk along the dyke with the wind in your face and the larks going up out of the reeds, and in the evenings you sit in the upstairs window where you sat for four weeks being bait, and nothing comes. Nothing's coming now either. Nobody's hunting you any more. That's almost worse.

Tonight Jory has built a fire himself, with driftwood and reeds, because he said you couldn't let the first of May go by without a fire; it was bad luck; his gran said so. It smokes. It keeps going out. The cat sits as close to it as a cat can sit without catching light, and {fam_name} keeps to your other side, as far from the cat as possible, and the sky over the Fen goes from green to navy to black, enormous, without a hill anywhere to stop it. Out on the black water, the drowned chapel's bell is ringing in the east wind, slow, like somebody counting.

@jory:neutral "They'll be on the Candlestones now," says Jory, poking the fire. "The whole school. Big fire. Maypole. Everybody leaping the embers." He's quiet for a while. "I went, my year. Leapt it three times. Burnt my eyebrows off. Took till Midsummer to grow back." He smiles. Then he doesn't. "Seven weeks," he says. "And he'll go to Wrenfold, and the Commander'll be there with forty of us, and the Headmistress, and the students with their song. And us here with a cat."

You don't answer. There isn't anything to say that you haven't both said already, at the kitchen table, every night for a fortnight.

@jory:neutral He hands you a potato out of the edge of the fire, black on the outside, raw in the middle. "Sorry," he says. "Gran made it look easy." You eat it anyway. It's the best thing you've eaten on the Fen.

He looks at you across the smoky fire.

@jory:tense "I'm under orders," he says. "To keep you here. Somewhere he isn't." He pokes the fire again. It goes out, and he blows on it until it catches. "But I'm also under orders to keep you safe. And I've been thinking. I'm not supposed to think; it's not in my job description; I checked. But the safest place in the world on Midsummer Eve might be the one place with four hundred people singing." He doesn't look at you now. "If somebody took the Lantern Train south on the nineteenth of June. With a Lamplighter. Nobody'd stop a Lamplighter."
*choice
  #"Then we go back. For Midsummer. Whatever the Commander says."
    *set order_offer "returned"
    *set plan22 "hall"
    *set nerve +10
    @jory:laugh Jory Penrose breaks into the biggest grin you've ever seen on him. "I was hoping you'd say that," he says. "I've already bought the tickets." He pulls them out of his too-big greatcoat. Two. Crumpled. Nineteenth of June. "She's going to kill me," he says happily.

    @jory:neutral Then he sobers, a bit. "You'll have to learn the wren's line properly," he says. "Out here. On your own. They'll need you leading it the minute you walk in." He looks out at the reeds. "I can't sing. But I can listen. I'll tell you when you're flat."

    You practise that night, by the dying fire, with the bell out on the water keeping time. You're flat. He tells you. You laugh so much the cat leaves.
  #"No. She put me here for a reason. I'll stay."
    *set ending "H"
    *set heart +5
    @jory:neutral Jory nods, slowly. "That's all right," he says. "That's all right. That's brave too." He puts another reed on the fire. It goes out. "Different kind of brave."

    @jory:neutral He folds the tickets up small and puts them back in his coat, and doesn't mention them again. After a while he goes in to put the kettle on, and you sit by the smoking fire with {fam_name} and the cat, and look south, where there's nothing but the dark and the reeds and the wind, and try to see a fire on a hill a long way off.

    You can't, of course. You look anyway.
*journal [b]Chapter 21.[/b] Brightfire on the Fen: a smoky fire on a muddy bank with Jory Penrose and a cat, and the drowned chapel's bell. {@order_offer = "returned"|You're going back to Wrenfold for Midsummer, against the Commander's orders, on the Lantern Train on the nineteenth of June, with Jory.|You're staying on the Fen, where you were put.}
*page_break
*if order_offer = "returned"
  *goto_scene ch22
*goto_scene ch24
`);
