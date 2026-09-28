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

You don't know that yet. Or you do, a bit, the way you know the last day of a holiday is the last day while you're still in the sea. Seven weeks to Midsummer. Everybody knows what Midsummer is now. And the whole school walks up the hill above Thimble Cross anyway, at sunset, in a long bright line, carrying may branches and ribbons and baskets of food, to the ring of standing stones called the Candlestones, where the Brightfire burns.

It's enormous. A bonfire in the middle of the ring, built by Rookhallow for a week, taller than the stones, and when the Headmistress lights it, with a word and a flick of her good hand, it goes up with a roar you feel in your chest, and the sparks go up and up into the violet sky until they're indistinguishable from the first stars. There's a band. There's a maypole with four hundred ribbons. There are garlands of may blossom and cowslips on everybody's heads. There's dancing, round and round the fire, in a great ring, and then in smaller rings inside it, and people leap the embers at the edge of the fire for luck, screaming.
*if toby_lit
  @toby:laugh Toby leaps the embers four times. He's thinner than he was, and paler, and his flame is small and lopsided and gold, but he leaps the embers four times, shouting, with a garland of cowslips falling over one eye, and Priya screams at him every single time, and he lands every single time, and on the fourth he turns round in the firelight and finds you and shouts, "[i]It's all going to be all right![/i]" and you almost believe him.
*else
  @priya:warm Priya leaps the embers once, for Toby, with his lopsided Candlewake candle held up in one hand, lit, and lands, and stands there on the far side of the fire with it, not crying. Custard the hare is in a basket by the maypole, with a garland round her neck, and a Heronmere first-year is feeding her cowslips.
*if maisie_lit
  *present tully maisie
  @tully:warm Mr Tully is sitting on a stone at the edge of the ring, with a blanket over his knees, and next to him, with her own blanket, thin and pale and wide-eyed, looking at the fire as if she's never seen fire before, is Maisie. She's holding his hand. Every so often she says something to him, and he laughs, and you realise you've never heard him laugh before. Not properly.

@kestrel:warm The Headmistress stands at the edge of the firelight with her arms folded, watching. When you pass her, she says, without looking round, "Go and dance. That's an order. I'm told I'm allowed to give those now."

You dance. Round and round the fire, in the great ring, with your garland falling off, with everybody, until your lungs hurt and your feet hurt and you're laughing so much you can't stand up. It's the best night of your life. It might really be. You'll never be sure.
*page_break
*comment ---------------------------------------------------------------- CH21.BRIGHT.02
*sid CH21.BRIGHT.02
*date 2027-05-01 23:30
*mood night
*present familiar
Later, when the fire's burned down to a great red heart of embers and the band's playing slow, you walk out between the standing stones, away from the light, where it's dark and cool and the grass is wet, and the whole valley's spread out below you: the Mere, silver under the moon, and the castle on its hill beyond, every window lit.
*snapshot brightfire
*if final_rel = "rowan"
  *present rowan
  @rowan:warm Rowan finds you. He was always going to. He comes out between the stones with his garland crooked and his shirt smelling of woodsmoke and stands beside you, warm as the fire behind you, and looks at the castle.

  @rowan:shy "Seven weeks," he says. "And then whatever happens." He doesn't look at you. "I don't want to wait seven weeks to find out what we are. I want to know now. Tonight. I want to know that whatever happens at Midsummer, we were this first."
*if final_rel = "imogen"
  *present imogen
  @imogen:warm Imogen finds you. She's got a garland of cowslips on, lopsided, which {@kit_lit|Kit put on her head, laughing, when he came up for the day|Priya put on her head}, and she hasn't taken it off. She stands beside you in the wet grass and looks at the castle.

  @imogen:shy "I made a plan," she says. "For tonight. I know. I'm sorry. I made a plan for what to say, and I've forgotten it." She takes a breath. "So: I don't want to wait for Midsummer. I want to know now. What we are. Whether this is a thing, or a thing I made up because I was frightened."
*if final_rel = "saoirse"
  *present saoirse
  @saoirse:warm Saoirse finds you. She comes out between the stones at a run, and stops, and stands beside you in the wet grass, and doesn't fidget. She's got soot on her face from the bonfire and may blossom in her hair.

  @saoirse:shy "I'm standing still," she says. "Look. Still here. Seven weeks and I'm still standing still." She looks at the castle. "So I want to know. Now. Whether it's you and me. Properly. Whatever happens."
*if final_rel = "cas"
  *present cas
  @cas:warm Cas finds you. He's lost his coat somewhere and there's a garland of may on his head that someone put there, and he hasn't taken it off, which you'd never have believed in September. He stands beside you and looks at the castle.

  @cas:shy "My grandmother wrote," he says. "Properly, this time. She asked if there was anyone." He's not looking at you. "I didn't know what to tell her. I'd like to know what to tell her. Before Midsummer. Before whatever happens."
*if final_rel = "noor"
  *present noor
  @noor:warm Noor finds you. She's not in her uniform. She's in a dress, with may in her plait, and she's been dancing, you can tell, her cheeks are pink. She stands beside you in the wet grass and looks at the castle.

  @noor:shy "I've asked for something once," she says. "On the roof. I'm going to ask for something again. It's getting easier. That's frightening." She takes your hand. "I want to know what we are. Before Midsummer. So that whatever happens, I had that."
*if final_rel = "idris"
  *present idris
  @idris:warm Idris finds you. He's got his glasses in his pocket again, and a garland of cowslips somebody forced on him, and a look on his face as if he's thought about this for a long time, which he has. He stands beside you and looks at the castle.

  @idris:shy "One question a day," he says. "That was the arrangement." He turns to you, slightly out of focus. "Today's question. What are we? I'd like to know before Midsummer. I'd like to know without having to work it out."
*if final_rel = ""
  *if (b_rowan_fire and b_rowan_afraid and (hurt_rowan < 2)) or (b_imogen_kit and b_imogen_order and (hurt_imogen < 2)) or (b_saoirse_still and b_saoirse_run and (hurt_saoirse < 2)) or (b_cas_family and b_cas_debt and (hurt_cas < 2)) or (b_noor_carry and b_noor_rest and (hurt_noor < 2)) or (b_idris_file and b_idris_suspect and (hurt_idris < 2))
    You hear someone behind you, among the stones. You know who, before you turn.
    *choice
      *if b_rowan_fire and b_rowan_afraid and (hurt_rowan < 2)
        #Rowan.
          *present rowan
          *set b_rowan_want true
          *set st_rowan 5
          *set final_rel "rowan"
          @rowan:shy "I said it once," he says, "on the roof. And you said not yet." He stands close, warm as the fire. "It's still true. I want to stand still with you and be frightened and not be brave about it. I want it to be you. I'm asking again. That's all."
      *if b_imogen_kit and b_imogen_order and (hurt_imogen < 2)
        #Imogen.
          *present imogen
          *set b_imogen_want true
          *set st_imogen 5
          *set final_rel "imogen"
          @imogen:shy "I want you," she says, very fast, as if she's afraid she'll stop. "Not as a plan. For me. I've wanted it since Candlewake. I'm telling you because we've got seven weeks, and I'm not wasting them being sensible."
      *if b_saoirse_still and b_saoirse_run and (hurt_saoirse < 2)
        #Saoirse.
          *present saoirse
          *set b_saoirse_want true
          *set st_saoirse 5
          *set final_rel "saoirse"
          @saoirse:shy She stops in front of you and stands absolutely still. "I'm standing still," she says. "For you. I want it to be you. That's the whole thing."
      *if b_cas_family and b_cas_debt and (hurt_cas < 2)
        #Cas.
          *present cas
          *set b_cas_want true
          *set st_cas 5
          *set final_rel "cas"
          @cas:shy "No clever line," he says. "I've stopped rehearsing. I want you. I'm not going to pretend otherwise to save my pride."
      *if b_noor_carry and b_noor_rest and (hurt_noor < 2)
        #Noor.
          *present noor
          *set b_noor_want true
          *set st_noor 5
          *set final_rel "noor"
          @noor:shy "I'm asking for something for myself," she says. "You. That's what I'm asking for."
      *if b_idris_file and b_idris_suspect and (hurt_idris < 2)
        #Idris.
          *present idris
          *set b_idris_want true
          *set st_idris 5
          *set final_rel "idris"
          @idris:shy "I want to stop studying you," he says, "and start knowing you. The other way. If you'll let me."
      #Nobody. You'd rather watch the castle alone tonight.
        *set final_rel "single"
*if (final_rel != "") and (final_rel != "single")
  *choice
    #"Together. Whatever happens at Midsummer, we were this first."
      *set final_shape "together"
      *if final_rel = "rowan"
        *set st_rowan 6
        @rowan:warm He lets out a breath like somebody putting down something heavy he's carried for years. {@steam|And he kisses you, there among the standing stones, with the fire behind him and the whole valley below, and he's shaking, and so are you, and neither of you minds.|And he holds you, there among the standing stones, with the fire behind him and the whole valley below, and he's shaking, and so are you, and neither of you minds.} "Together," he says into your hair. "All right. Together. I'm terrified." He laughs. "I'm so happy I'm terrified."
      *if final_rel = "imogen"
        *set st_imogen 6
        @imogen:warm She takes her glasses off, and puts them on again, and takes them off. "Right," she says. "Good. That's... yes." And then she stops trying to say anything at all, and {@steam|kisses you, among the stones, fiercely, with her garland falling off|holds on to you, among the stones, fiercely, with her garland falling off}, and when she lets go she's laughing. "No plan," she says. "Look at me. No plan at all."
      *if final_rel = "saoirse"
        *set st_saoirse 6
        @saoirse:warm She doesn't move. She stands absolutely still, and lets you come to her, the whole way, and {@steam|when you kiss her she's laughing and crying at once, with soot on her face and may in her hair|when you reach her she's laughing and crying at once, with soot on her face and may in her hair, and holds on}. "Together," she says. "I'm not going anywhere. Watch me not go anywhere."
      *if final_rel = "cas"
        *set st_cas 6
        @cas:warm He closes his eyes for a second. "I'm going to tell her," he says. "My grandmother. I'm going to write it down properly, in ink, and she can put it in the book." And then {@steam|he kisses you, among the standing stones, carefully and thoroughly and without any pride at all|he takes your hands in his grandfather's hands, among the standing stones, and holds on, without any pride at all}.
      *if final_rel = "noor"
        *set st_noor 6
        @noor:warm She laughs, a small astonished laugh. "Together," she says. "I get to have that." {@steam|And she kisses you, among the stones, softly, and then not softly at all|And she puts her arms round you, among the stones, softly, and then not softly at all}. "I'm keeping it," she says. "I'm not giving it to anyone who needs it more."
      *if final_rel = "idris"
        *set st_idris 6
        @idris:warm He puts his glasses back on to see your face, as he did on the roof. "Together," he repeats, as if he's writing it down in his head, in ink, underlined. {@steam|And then he kisses you, among the stones, slowly and seriously, as if it's the most important thing he's ever studied.|And then he takes your hand, among the stones, slowly and seriously, as if it's the most important thing he's ever studied.} "Not in any of the books," he says. "Good."
    #"Not like this. Not with Midsummer coming. I can't promise you anything."
      *set final_shape "parting"
      *set heart +5
      They hear it. You watch them hear it. They don't argue; they nod, slowly, and stand beside you a while longer in the wet grass, and then go back to the fire, and you stay out among the stones and watch the castle, and wonder if you've been brave or only frightened. You don't know. You'll have to find out.
*if final_rel = ""
  *set final_rel "single"
*if final_rel = "single"
  You stand out there among the stones on your own for a long time, and it's all right. Behind you the fire, and four hundred people you know. Below you the castle, every window lit. You made it this far. You've got friends on that hill who'd go into the dark for you, and you'd go for them. It's enough. It's more than enough. After a while, you go back to the fire, and somebody hands you a cup of something hot, and somebody else puts a garland on your head, and you dance till two.
*page_break
*comment ---------------------------------------------------------------- CH21.PLAN.01
*sid CH21.PLAN.01
*date 2027-05-02 11:00
*mood day
*place P25 weathervane_room
*present kestrel arkwright tully hester familiar
The morning after Brightfire, in the Weathervane Room, with the windows open and the smell of woodsmoke still in everybody's hair, you make the plan.

The Headmistress. Commander Arkwright. Mr Tully, in his best coat, holding his cap, sitting very upright on a hard chair by the door. And you. And, over the fireplace, in the tea-coloured varnish, Hester Wren, watching.

@arkwright:grave "He's told us what he's going to do," says the Commander. "That's the one advantage we've got. He trusts the Lanternwarden." She looks at Mr Tully, and her face doesn't soften, quite. "Midsummer Eve. The Proving. Every student in the Hall, every lantern lit. At eleven, Mr Tully leaves the boathouse ward open, as asked. The Choir comes in through it. And my people are waiting."

@kestrel:grave "And then Aldric goes down to the root," says the Headmistress quietly. "Because that's what he's come for. With the Kindler or without. And somebody has to be there when he gets there."

@tully:tense Mr Tully clears his throat. Everyone looks at him.
*if maisie_lit
  @tully:grave "I'll do it," he says. "Whatever you want. I'll leave the ward. I'll take him down to the root myself, if you want him taken, and I'll tell him to his face." His hands are steady on his cap. "He's got nothing left to give me. She's in the Infirmary eating toast. She asked for marmalade this morning. Marmalade." His voice cracks. "He promised me my girl back for three years, and you gave her me in an afternoon. I'll do whatever you want."
*else
  @tully:grave "I'll do it," he says. His voice isn't steady. "Whatever you want. I'll leave the ward. I'll tell him what you want told." He looks at his hands. "He'll say she'll wake by morning. He'll say it to my face. And part of me will want to believe him till the day I die." He looks up. "But I lit Toby Quill's lantern the first night. I'll do whatever you want."

@kestrel:neutral "Then there are three places that matter," says the Headmistress. "The Hall, where the song must be sung, or every flame in the room is his for the taking. The Old Cloisters, at the wren door, which is the only way down to the root. And the boathouse, where he comes in." She looks at you. "Sabine wants you at the boathouse, where he'll see you first. I want you in the Hall, leading the song. Somebody has to hold the wren door." She pauses. "You've done more than anyone should ask. So I'm asking. Where do you want to stand?"
*choice
  #The Hall. Lead the song. That's what it needs, and it's what you're for.
    *set plan22 "hall"
    *set heart +5
    @kestrel:warm The Headmistress nods, slowly. "The wren's line," she says. "Good. I'll stand beside you."
  #The Old Cloisters. Hold the wren door. If he goes down, he goes past you.
    *set plan22 "cloisters"
    *set nerve +5
    @kestrel:grave The Headmistress looks at you for a long moment. "Magnus held a stair," she says quietly. "I'll put Idris and the Order's best with you. And the song will have to lead itself."
  #The boathouse. Where he comes in. Look him in the face first.
    *set plan22 "boathouse"
    *set nerve +10
    @arkwright:grave "Good," says the Commander, and means it. "Stand next to me. When he sees you, he'll come to you. And then we'll have him."

    @kestrel:grave The Headmistress says nothing at all. She looks up at the painting over the fireplace, as if she's asking it something.

@hester:neutral And the painted old woman in the oilskin coat, over the fire, with her crooked smile and her bright wren-brown eyes, says, in her voice like wind in a sail: "Sing loud."

Nobody knows what to say to that. So nobody says anything.
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

He built it himself, with driftwood and reeds, because he said you couldn't let the first of May go by without a fire, it was bad luck, his gran said so. It smokes. It keeps going out. The cat sits as close to it as a cat can sit without catching light. Out on the black water, the drowned chapel's bell is ringing in the east wind, slow, like somebody counting.

@jory:neutral "They'll be on the Candlestones now," says Jory, poking the fire. "The whole school. Big fire. Maypole. Everybody leaping the embers." He's quiet for a while. "I went, my year. Leapt it three times. Burnt my eyebrows off." He smiles. Then he doesn't. "Seven weeks," he says. "And he'll go to Wrenfold, and the Commander'll be there with forty of us, and the Headmistress, and the students with their song. And us here with a cat."

He looks at you across the smoky fire.

@jory:tense "I'm under orders," he says. "To keep you here. Somewhere he isn't." He pokes the fire again. "But I'm also under orders to keep you safe. And I've been thinking. The safest place in the world on Midsummer Eve might be the one place with four hundred people singing." He doesn't look at you now. "If somebody took the Lantern Train south on the nineteenth of June. With a Lamplighter. Nobody'd stop a Lamplighter."
*choice
  #"Then we go back. For Midsummer. Whatever the Commander says."
    *set order_offer "returned"
    *set plan22 "hall"
    *set nerve +10
    @jory:laugh Jory Penrose breaks into the biggest grin you've ever seen on him. "I was hoping you'd say that," he says. "I've already bought the tickets." He pulls them out of his too-big greatcoat. Two. Crumpled. Nineteenth of June. "She's going to kill me," he says happily.
  #"No. She put me here for a reason. I'll stay."
    *set ending "H"
    *set heart +5
    @jory:neutral Jory nods, slowly. "That's all right," he says. "That's all right. That's brave too." He puts another reed on the fire. It goes out. "Different kind of brave."
*journal [b]Chapter 21.[/b] Brightfire on the Fen: a smoky fire on a muddy bank with Jory Penrose and a cat, and the drowned chapel's bell. {@order_offer = "returned"|You're going back to Wrenfold for Midsummer, against the Commander's orders, on the Lantern Train on the nineteenth of June, with Jory.|You're staying on the Fen, where you were put.}
*page_break
*if order_offer = "returned"
  *goto_scene ch22
*goto_scene ch24
`);
