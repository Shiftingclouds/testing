NB.scene("ch14", String.raw`
*mood night
*set ch 14
*chapter 14 Candlewake
*comment ---------------------------------------------------------------- CH14.CANDLE.01
*sid CH14.CANDLE.01
*date 2027-02-01 19:00
*place P19 brewing_cellars
*present kovac toby imogen familiar
January is long and dark and cold and full of work, and nobody else is hollowed, and nobody sleeps properly anyway.

The Order stays. The Lamplighters walk the walls at night with their brass lamps, and sit at the ends of the house tables at meals with their greatcoats on, and follow first-years to the Glasshouses and back. You get used to them the way you get used to weather. Jory Penrose, who came back from his Christmas posting with a new scar on his chin that he won't talk about, starts saying hello to you in corridors as if you're old friends. You suppose you are, a bit.

And then it's February, and the snow's still on the ground, and it's Candlewake.

@toby:warm "Festival of first light," says Toby, reading from the notice on the board as if it's a menu. "Every student makes a candle. At dawn on the second, everybody carries their candle across the Mere, on the ice, from the boathouse to the Candlestones jetty, and gives it to somebody." He turns round, glowing. "It means whatever you want it to mean. That's what it says. [i]It means whatever you want it to mean.[/i] That's the most romantic thing I've ever read on a noticeboard."

You make the candles on the night before, in the Brewing Cellars, all of you, in shifts.

It's one of those Wrenfold things you'd never believe if you told anyone. Great copper vats of beeswax bubbling gold over blue fires along the whole length of the vaulted cellar, smelling of honey and summer. Long tables with wicks laid out on them in rows. And Professor Kovač at the far end, thin and pale and still, with the white streak in her black hair pinned back so tight it hurts to look at, saying things once.

@kovac:neutral "Dip the wick. Twelve times. Between each dip, hold it and think of the person it's for. On the twelfth, put a thread of your own flame into the wax." She looks down the cellar at all of you with her unblinking grey eyes. "A thread. Not a flood. Anyone who floods their candle and sets fire to my cellar will spend Candlewake scrubbing my vats."

You dip, and hold, and think. Round you, the whole cellar is doing the same: two hundred people holding white wicks over copper vats with their eyes half shut, thinking about somebody. It's quiet. It's the quietest you've ever heard two hundred people be.

On the twelfth dip, you put a thread of your flame into the wax.

A thread. You're careful. You've been careful since September. But it's [i]your[/i] flame, the white one, and when the candle comes out of the vat, it's lit. By itself. And it isn't burning gold, like Toby's beside you, or rose, like the Larkspire girl's across the table. It's burning white. Pure, clear, steady white, like a star, like the lantern on your first night.

You close your hand round it, fast.

@kovac:neutral Professor Kovač is standing behind you. You didn't hear her come down the cellar. She looks at the white light leaking between your fingers. She looks at your face. "Put it out," she says, quietly. "Relight it at dawn." That's all. She walks on down the tables, and doesn't look back, and never says it again.

@toby:surprised Toby is staring at your hand. "Did yours just..."

"Draught," you say. "Candle caught off the fire."

@toby:neutral "Right," says Toby, slowly. "Draught." He looks at you for a long moment, his round face serious for once. And then he goes back to his own candle, which is lopsided and gold and has a thumbprint in it, and says, in a perfectly normal voice, "Mine's for my mum. I'm going to send it. Is that allowed? I'm going to send it."
*if told_toby
  He knows. You told him. He's just being kind about it in public, which is the most Toby thing possible.

@imogen:tense Imogen is at the end of your table, dipping her candle with fierce precision, twelve times exactly, not thinking about anyone, as far as you can tell, except the song. She's been in the Long Stacks every night since term started. When she sees you, she leans across. "The other voices aren't in the carol book," she says, low. "I've been through it forty times. [i]The others to be found in their places.[/i] It means in her own book. Hester Wren kept a journal. There's a catalogue card for it in the founders' drawer." Her mouth goes thin. "[i]Withdrawn, 1986.[/i] That's all it says. No name. Forty years ago, someone took Hester Wren's journal out of the Long Stacks, and nobody's seen it since."
*choice
  #"Forty years ago. The year Morrow was snuffed."
    *set wit +5
    *set st_imogen +1
    @imogen:grave She stops dipping. "Yes," she says. "I'd noticed." She looks at her candle, and then at you. "Everything goes back to that year. Everything. It's like a hole in the middle of the school that everything's been falling into for forty years."
  #"Then we find out who took it."
    *set nerve +5
    *set st_imogen +1
    @imogen:grave "I'm trying," she says. "Miss Dunne won't talk about it. The card's signed by the Deputy of the day, and he's dead, and his family won't answer letters." She dips her candle, the twelfth time. "Someone in this castle knows. Someone always knows."
*page_break
*comment ---------------------------------------------------------------- CH14.IDRIS.01
*sid CH14.IDRIS.01
*date 2027-02-01 23:30
*place P22 library
*present idris familiar
You can't sleep. You never can, before a festival. You take your unlit white candle in your pocket and go down to the Long Stacks, because it's warm, and because the floor there is one of the places where the warmth comes up through the flagstones, and because sometimes, at night, it's the only place in the castle that's quiet.

It isn't empty.

There's a light at the back of the second gallery, behind the iron grille of the restricted cage, where the Wrenfold Map hangs, where the books are chained. A small lamp. And Idris Penhallow, sitting cross-legged on the floor of the cage, with a cardboard folder open on his knees, reading by it.
*if (st_idris >= 3) and not(b_idris_file) and (hurt_idris < 2)
  @idris:tense He hears you on the gallery stairs and looks up, and his hand goes flat on the folder as if to close it. Then he sees who it is. And he stops. And after a long moment, he takes his hand away. "Come in," he says quietly. "The grille's open. I've got a key. I shouldn't have." He looks down at the folder. "I've been deciding for three months whether to show you this. I think I've decided."
  *choice
    #Go in and sit down next to him.
      *set b_idris_file true
      *set st_idris 4
      *set heart +5
      The cage smells of old paper and dust and the lamp's hot brass. You sit down beside him on the cold floor, shoulder to shoulder, and he turns the folder so you can see.

      It's a school file. Old, buff-coloured, with a Wrenfold wren stamped on the cover in faded red, and a name typed on the label: [b]MORROW, Aldric J. Owlcombe. Entered 1985.[/b]

      Inside, a photograph. A young man, twenty-five, twenty-six, with a long beautiful laughing face and a lot of dark hair and bright, bright eyes, in Owlcombe plum and silver, grinning at the camera as if he's just been told a wonderful joke. You'd never have known him. You'd never have put that face with the grey hooded figure in the stories.

      Under the photograph, reports. [i]Exceptional. The brightest flame this school has seen in a century.[/i] [i]Aldric relit a snuffed candle with his bare hand in his third week. We believe him to be a Kindler, the first since the founder. The Headmaster has asked that this be kept quiet for his own protection.[/i] And then, dated February 1986, a single typed page, half of it blacked out with thick ink:

      [i]Warding exercise, 14 Feb. Incident. A student (name withheld at the request of the Deputy) cast an unsanctioned [redacted] in panic. Aldric Morrow's flame was extinguished. Entirely. All attempts at relighting have failed. He has been sent home to recover. Students are asked not to discuss the matter. The matter is closed.[/i]

      And stamped across the bottom, in red: [b]CLOSED.[/b]
      *clue e11
      @idris:grave "The matter is closed," says Idris, very quietly. "Forty years. They took a Kindler's whole flame, by accident, in a classroom, and wrote [i]the matter is closed[/i] and sent him home." He turns the page back to the photograph, the laughing boy. "I took it out of the Stacks last year, in my first term. Nobody noticed it was gone. Nobody had asked for it in forty years."

      "Why? Why were you even looking?"

      @idris:hurt He doesn't answer for a long time. The lamp hisses. Somewhere below you, the floor is warm.

      @idris:hurt "My mother was hollowed," he says, "when I was seventeen." He says it the way he says everything, precisely, as a fact. But his hands on the folder are very still. "She was a late flame, like us. Kindled at forty-four, in her garden, making the roses bloom in November. She was so happy. For about six weeks." He looks at the photograph. "The Choir came to the house. I was upstairs. I heard the humming and I thought it was the boiler." His voice doesn't change. "She lived two more years. Polite. Grey. Asking me every week what my name was. My father lasted a year after that. The doctors had a word for it. I didn't think much of the word."

      @idris:tense "I started reading about Kindlers the week she was hollowed," he says. "Because the books said a Kindler could relight a hollowed flame. If they got there in time. I thought, if I could find one. Just one." He finally looks at you, through his round wire glasses, with his dark deep-set eyes. "And then, twelve years later, I was in a corridor at night, and you put your hand on a snuffed candle, and it lit."

      "Idris..."

      @idris:grave "It's too late for her. I know that. I've known it for twelve years." He closes the file. "That's not why I kept watching you. At first it was. And then it wasn't." He puts the folder down between you on the floor. "I'm showing you this because everyone in this castle suspects me, and they're right to; I've been creeping round the Stacks at night with a stolen file about a man who takes flames. And because you're the only one who's never asked me why." He swallows. "So I'm telling you. Without being asked. I don't think I've ever done that."
      *choice
        #Put your hand over his, on the file. "Thank you for telling me."
          *set st_idris +1
          @idris:warm He looks down at your hand on his. He doesn't move his. "You're welcome," he says, and it sounds like something he's never said before in his life and isn't sure he's saying right.
        #"If I'd been there. When she was taken. I'd have tried."
          *set st_idris +1
          *set heart +5
          @idris:hurt Something breaks in his face, just for a second, and is mended. "I know," he says. "I know you would. That's..." He stops. "That's the worst of it, and the best. That there's somebody now who'd have tried."
    #Leave him to it. It's his secret; he'll tell you when he's ready.
      *set wit +5
      @idris:neutral He nods, slowly, and something in his face might be relief and might be disappointment. "Soon," he says. "I'll tell you soon." And he bends his head over the folder again, and you go back up the stairs.
*else
  *if b_idris_file
    @idris:warm He looks up and sees you, and doesn't close the folder. "Can't sleep either?" he says. "Come and sit. I'm reading Morrow's reports again. I keep thinking there's something in them I missed." You sit with him in the lamplight till two, not talking much. It's the most comfortable silence you've ever sat in.
  *else
    @idris:tense He hears you on the gallery stairs. His head comes up, fast, and he snaps the folder shut and puts it behind his back, all in one movement, like somebody who's done it before. "It's late," he says, not quite looking at you. "I was just..." He doesn't finish. He doesn't need to. You saw the label on the folder, for a second, in the lamplight, before it vanished. [i]MORROW.[/i]

    You go back to bed. You lie awake, thinking about what Commander Arkwright said: [i]who walks the corridors at night.[/i]
*page_break
*comment ---------------------------------------------------------------- CH14.CANDLE.02
*sid CH14.CANDLE.02
*date 2027-02-02 06:30
*mood dusk
*place P12 mere_frozen
*present toby familiar
At half past six on the morning of the second of February, in the blue dark before dawn, four hundred people walk out onto the frozen Mere carrying candles.

You'll remember it for the rest of your life. The cold, so sharp it makes your teeth ache. The ice under your boots, black and glassy and creaking, with the stars still showing in it. The breath of four hundred people going up in the dark. And the candles: four hundred small flames, gold and rose and green and blue, cupped in four hundred pairs of gloved hands, moving out across the black ice in a long loose river of light, from the boathouse towards the far shore, where the Candlestones jetty is, and the hill, and the sky just starting to go pale behind it.

Nobody talks. It's a rule. You walk in silence, and you carry your candle, and you think about who it's for.

Yours is burning white. You relit it at the boathouse, with your thumb, when nobody was looking. You keep it cupped very close.

You're not walking alone. Nobody walks alone at Candlewake.
*choice
  *if (st_rowan >= 2) and (hurt_rowan < 2)
    #Rowan's walking beside you. His candle is burning so hot the wax is running.
      *present rowan
      *if (st_rowan >= 3) and not(b_rowan_afraid)
        *set b_rowan_afraid true
        *set st_rowan 4
        Halfway across the ice, in the middle of the Mere, Rowan stops walking.

        @rowan:scared You stop too. Round you, the river of candles goes on, parting round the two of you like water round a stone. He's looking at his candle. The wax is pouring down over his gloves, and his gloves are smoking, and the flame is standing up tall and orange and furious, a foot high, and he's holding it out away from himself as if it's something he's afraid will bite.

        @rowan:scared "I can't make it smaller," he whispers. You're not supposed to talk. He's talking. "I've been trying since the boathouse. It won't go down. It keeps getting bigger." His voice cracks. "It's the ice. I keep thinking about the ice. If it gets hot enough, it'll melt through. It'll go through the ice and I'll go through and everyone round me will go through." He looks at you, and his broad face is white, and his eyes are wet. "I'm so frightened. All the time. Since Tanner's Row. Everyone thinks I'm brave. I walk into things because I'm too frightened to stand still and let them get me. I'm frightened of my own hands. I'm frightened of hugging my sister's baby. I'm frightened of [i]this[/i]."
        *choice
          #"Then be frightened. Here. With me. I'm not going anywhere." Put your hands round his, round the candle.
            *set st_rowan +1
            *set heart +5
            You put your hands round his, round the pouring candle. It's hot, much too hot, and you feel your own flame come up to meet it without asking, white against orange, and settle round it, like a hand on a shoulder. [i]Easy. Easy.[/i]

            @rowan:warm And the flame goes down. Not because you pushed it. Because he stops fighting it. You feel him stop. His shoulders drop. His breath goes out, shaking, in a long white cloud. And the candle flame sinks back to a candle flame, gold, ordinary, an inch high, and the wax stops running. He stands there on the ice with your hands round his, crying without any noise, and doesn't let go. "Nobody's ever said that," he says. "Everyone always says [i]don't be[/i]."
          #"You won't melt it. Look down. It's a foot thick. I'll stand here till you believe me."
            *set st_rowan +1
            *set nerve +5
            @rowan:shy He looks down. At the black ice, at the stars in it, at the candle-reflections going away across it in a river of light. You stand there with him until the last walkers have gone past you, in silence, and the sky's gone pink, and very slowly the candle comes back down. "A foot thick," he says. "All right." He laughs, a shaky wet laugh. "All right. Thank you for not telling me not to be scared."
      *else
        @rowan:warm Rowan walks beside you, close enough that your shoulders bump. His candle's too hot, as it always is; the wax is running over his gloves. Halfway across, without a word, he shifts it to his other hand, so that his warm free one can find yours. You walk the rest of the way like that.
        *set st_rowan +1
  *if (st_imogen >= 2) and (hurt_imogen < 2)
    #Imogen's walking beside you. Her candle's perfect, of course. Twelve dips exactly.
      *present imogen
      @imogen:warm Imogen walks beside you with her perfect candle, precise and upright, and halfway across, without a word, she hooks her arm through yours. You feel her shivering. Not from the cold. At the far shore, she looks at you in the first grey light, and you see that she's been crying, all the way across, silently, and hasn't wiped her face because it would mean letting go of your arm.
      *set st_imogen +1
  *if (st_saoirse >= 2) and (hurt_saoirse < 2)
    #Saoirse's walking beside you. Or trying to. Walking slowly is very hard for her.
      *present saoirse
      @saoirse:amused Saoirse lasts about two hundred yards at the pace of the procession before she starts to fidget, and then she catches your eye, and very deliberately slows down. And slower. Until she's walking so slowly that you're the last two on the ice, a hundred yards behind everyone, just the two of you and two candles in the enormous blue dark. She doesn't speed up. She looks at you sideways, with the candle under her chin, and grins, and doesn't say anything, because you're not allowed to.
      *set st_saoirse +1
  *if (st_noor >= 2) and (hurt_noor < 2)
    #Noor's walking beside you. She's carrying a candle and a first-aid bag, because of course she is.
      *present noor
      *if (st_noor >= 3) and not(b_noor_rest)
        *set b_noor_rest true
        *set st_noor 4
        @noor:tired Noor walks beside you with her candle in one hand and her first-aid bag over her shoulder, watching the walkers ahead for anyone who slips, the way she always watches. And then, halfway across, someone ahead of you does slip, a Larkspire first-year, and goes down hard on the ice, and gets up again, laughing, fine; and Noor doesn't move.

        @noor:hurt She's stopped dead. The river of candles parts round you. She's staring at the place where the first-year fell, and her candle's shaking so badly the flame's flickering. "I can't," she says, in a tiny voice. You're not allowed to talk. She's talking. "I can't do it any more. I can't watch everyone all the time in case they fall. There's too many of them. There's four hundred of them and there's one of me and I can't catch them all, I couldn't catch Delphine, I couldn't catch Bram, I couldn't catch Odile Pellow, and I haven't slept properly since September, and I'm so tired, I'm so [i]tired[/i]..."

        @noor:hurt And she sits down. Right there, on the ice, in the middle of the Mere, in the middle of the procession, with her first-aid bag and her candle, and puts her face in her free hand, and sobs.
        *choice
          #Sit down on the ice beside her, and hold her, and let her cry, as long as it takes.
            *set st_noor +1
            *set heart +10
            You sit down on the black ice beside her, and put your arm round her, and she turns her face into your coat and cries. Properly. Ugly, gulping, shaking, the way you cry when you've been not-crying for five months. The procession goes on round you. Nobody stops. Nobody stares. That's Candlewake. You sit there on the frozen Mere with Noor Haddad crying into your coat, and hold her candle for her so it doesn't go out, and the sky behind the Candlestones goes from blue to grey to pink to gold, and you don't say anything at all, because there isn't anything to say, and she doesn't need you to.

            @noor:tired When she's finished, she sits up, blotched and wet and shaking, and looks at you. "I've never done that," she says. "In front of anybody. Ever." She wipes her face with her sleeve. "Nobody's ever just let me."
          #"You don't have to catch them all. Not today. Today someone's catching you." Take her bag.
            *set st_noor +1
            *set nerve +5
            You take the first-aid bag off her shoulder and put it on yours, and she lets you. That's how you know how bad it is: she lets you. You get her up, and you walk the rest of the way across the ice with your arm round her and her bag on your back and both candles in your one hand, slowly, and she cries the whole way, silently, and doesn't try to stop, and at the far shore she says, in a cracked voice, "You'd better give me that bag back before Matron sees," and doesn't take it.
      *else
        @noor:warm Noor walks beside you, watching the ice ahead for anyone who slips, the way she always does. You watch the ice ahead for her, so she doesn't have to. Halfway across, she notices what you're doing, and her face goes soft, and she stops watching, and just walks.
        *set st_noor +1
  *if (st_cas >= 2) and (hurt_cas < 2)
    #Cas is walking beside you. He's holding his candle like a weapon.
      *present cas
      @cas:guarded Cas walks beside you with his candle held out in front of him, stiff-armed, jaw set, as if it's a sword and the Mere is a battlefield. Halfway across, very quietly, so you're the only one who hears, he says: "I don't know who to give it to." He's not supposed to talk. "Every year at home, you gave it to your grandmother. In front of everyone. It was a sort of test." He looks at the candle. "I don't know what it's for, if it isn't a test." You walk the rest of the way in silence, but he walks closer.
      *set st_cas +1
  *if (st_idris >= 2) and (hurt_idris < 2)
    #Idris is walking beside you, looking at your white candle, and not at the ice.
      *present idris
      @idris:attentive Idris walks beside you in silence, watching your candle; not the ice, not the sky, your candle, the white flame cupped in your hands. He nearly walks into a Larkspire boy twice. At the far shore, when the sun comes up over the Candlestones and turns the whole Mere to gold, he looks up from your candle at last, and at you, and something in his face is so open that you have to look away.
      *set st_idris +1
  #Toby's walking beside you, holding his lopsided candle for his mum.
    *set fr_toby +1
    @toby:warm Toby walks beside you in silence, which is a miracle in itself, with his lopsided gold candle held in both hands, so carefully, as if it's a baby bird. Halfway across he starts crying, silently, and doesn't stop, and when you look at him he shakes his head and smiles through it: [i]it's fine. It's good crying.[/i] At the far shore he says, in a whisper, "I'm going to send it to my mum. I don't know how to post a candle. I'll find out."

The sun comes up over the Candlestones as you reach the far shore.

It comes up all at once, the way it does in winter: a line of gold on the hill, and then the whole sky catching, and then the light pouring down over the ring of standing stones and across the frozen Mere and into the four hundred candles, and every candle goes pale in it, and the ice goes gold, and people on the jetty are turning to each other with their candles held out, giving them.

It means whatever you want it to mean.
*choice
  *if (st_rowan >= 2) and (hurt_rowan < 2)
    #Give it to Rowan.
      *set candle "rowan"
      *set st_rowan +1
      *present rowan
      @rowan:surprised He takes it from you with both hands, and it goes on burning white in his big hands, and doesn't flare, doesn't flood. It's the only flame you've ever seen him hold that isn't too hot. He stares at it. "It's not burning me," he says. "Why isn't it burning me?" He looks at you. "Oh," he says, very softly. And holds it very carefully all the way back to the castle.
  *if (st_imogen >= 2) and (hurt_imogen < 2)
    #Give it to Imogen.
      *set candle "imogen"
      *set st_imogen +1
      *present imogen
      @imogen:surprised Imogen looks at the white flame for a long moment without taking it. Then she does, carefully, in both hands. "I was going to give mine to Kit," she says. "I was going to take it to St Ide's on Sunday." She holds out her own, the perfect one, twelve dips exactly. "I'll give him yours instead. If you don't mind. Something white. He'd like something white." And she gives you hers.
  *if (st_saoirse >= 2) and (hurt_saoirse < 2)
    #Give it to Saoirse.
      *set candle "saoirse"
      *set st_saoirse +1
      *present saoirse
      @saoirse:warm Saoirse takes it, and looks at it, and then does something you don't expect: she sits down on the end of the jetty with it in her lap and doesn't get up. Everyone else is going back towards the castle. She stays, looking at the white flame. "I'm going to keep it lit," she says. "As long as I can. I'm going to watch it burn all the way down." She looks up at you. "I've never watched anything all the way to the end."
  *if (st_noor >= 2) and (hurt_noor < 2)
    #Give it to Noor.
      *set candle "noor"
      *set st_noor +1
      *present noor
      @noor:shy Noor takes it without thinking, the way she takes anything anyone hands her, to hold for them. And then she realises it's for her. For her. Not to hold. She looks at it for a long time, and then she puts her face down close to the white flame, so close her eyelashes almost touch it, and closes her eyes, and stands there on the jetty warming her face like a cat in a patch of sun.
  *if (st_cas >= 2) and (hurt_cas < 2)
    #Give it to Cas.
      *set candle "cas"
      *set st_cas +1
      *present cas
      @cas:surprised Cas looks at the candle, and at you, and doesn't take it. "It isn't a test," you tell him. "It isn't anything. It's just for you." He takes it. His hands aren't quite steady. "Nobody's ever given me one," he says, in a voice you've never heard from him. "Not once. In twenty-seven years. I gave mine to my grandmother every year, and she gave hers to my brother." He holds it close. "I don't know what to do with it."
  *if (st_idris >= 2) and (hurt_idris < 2)
    #Give it to Idris.
      *set candle "idris"
      *set st_idris +1
      *present idris
      @idris:warm Idris takes the white candle and holds it up in the gold light, looking at it, the way he looks at everything, the way he's looked at you since September. "A Kindler's candle," he says, very quietly. "Freely given. I've read about them. I never thought I'd..." He stops. He puts it inside his coat, still burning, against his chest, and it doesn't burn him. "Thank you," he says. "I'll keep it lit. I know how."
  #Give it to Toby.
    *set candle "toby"
    *set fr_toby +2
    @toby:surprised Toby looks at the white candle, and at you, and his face crumples, and un-crumples. "Me?" he says. "Oh. Oh, no, I'm going to cry again." He does. He takes it, and gives you his lopsided gold one, which was for his mum; "She'd want you to have it; she'd [i]insist[/i]," and then he holds your white candle all the way back to the castle in both hands, looking at it, as if it's the most precious thing anyone has ever given him. It might be.
  #Send it home to Nana Pearl.
    *set candle "nana"
    *set heart +5
    You find a Lamplighter on the jetty going south with the post, and ask, and he looks at the white flame and doesn't ask any questions and wraps it very carefully in a tin with holes in the lid. Two days later there's a letter: [i]Candle arrived still burning. Have put it on the mantelpiece. It hasn't gone out. Admiral sits next to it all day. Your great-gran had one of these, you know. I'd forgotten till I saw it. N.[/i]
  #Give it to the Headmistress.
    *set candle "kestrel"
    *set fr_kestrel +1
    *present kestrel
    @kestrel:surprised The Headmistress is on the Candlestones jetty in her long coat, as she is every year, and people have been giving her candles for an hour; she's got a basket full of them. When you hold out the white one, she stops. She looks at it for a long moment, and then at you, and her tired face does something you've never seen it do. "Nobody's given me a white one in forty years," she says, very low. "The last one was Aldric's." She takes it, and doesn't put it in the basket. She holds it.
  #Keep it. It's yours. Nobody else can hold it the way you do.
    *set candle "kept"
    *set nerve +5
    You keep it. Round you, people are giving and taking candles, laughing, crying, hugging on the jetty in the sunrise. You stand with your white flame cupped in your hands, and it's warm, and it's yours, and for once you let it burn as bright as it wants to, just for a minute, where nobody's looking.
*page_break
*comment ---------------------------------------------------------------- CH14.HALL.01
*sid CH14.HALL.01
*date 2027-02-02 08:30
*mood day
*place P13 lantern_hall
*present tully grey arkwright toby familiar
Breakfast on Candlewake morning is candles.

Every table in the Lantern Hall is covered in them: all the candles that were given at dawn, set down in front of the people they were given to, burning in rows among the porridge bowls and toast racks, hundreds and hundreds of small flames, so that the whole Hall is gold and warm and smells of honey. Up in the roof, the ten thousand lanterns have gone pale gold too, to match.

At the Heronmere table, in the middle, there's still an empty place. There has been since October. Delphine's. Nobody sits there. And this morning, in front of the empty place, there's one candle, grey-white, plain, burning very steadily.

@grey:neutral You saw who put it there. Professor Grey, before breakfast, when the Hall was nearly empty, walking down the Heronmere table with his scarred hands cupped round a candle, setting it down in front of Delphine's chair, and standing for a moment with his head bowed, and walking away. He's at the staff table now, not eating. He hasn't looked at it since.

@tully:sad Mr Tully has a candle too. He's sitting at the end of the staff table, with a small, old, lopsided candle in front of him, the wax gone yellow; not one of this year's. He's looking at it with his chin on his hand.
*choice
  #Go and sit with Mr Tully for a minute.
    *set fr_tully +1
    *set heart +5
    @tully:warm He looks up and sees you, and his lined face creases into the smile. "Sit, sit," he says. "Look at you. Candlewake." He nods at the old candle. "Maisie made that. Her first year. Twelve dips, and she thought about her old dad the whole time, she said." His finger touches the yellowed wax. "She gave it me on the jetty. I've lit it every Candlewake since. Six years."

    "How is she? Maisie?"

    @tully:sad He's quiet for a moment. "Same," he says. "Every Sunday, I go to St Ide's, and I sit with her, and she asks me what my name is." He turns the candle, very gently. And then, in a strange low voice, not quite to you, as if he's talking to the flame: "But somebody told me she might come back. Imagine that. After six years. Somebody told me there's a way." He looks up, and sees your face, and his own face closes, kindly, like a door. "Silly. An old man's Candlewake. Eat your porridge, {name}." And he gets up, with his bad knees, and picks up Maisie's candle, and goes.
    *clue e09
  #Leave him be. It's his to sit with.
    *set wit +5
    You leave him be. After a while, he picks up the old candle, very carefully, and goes out through the little door behind the staff table, towards the lantern stair. He doesn't come back for breakfast.

@arkwright:neutral At nine, Commander Arkwright stands up at the end of the staff table, in her greatcoat, and the Hall goes quiet.

@arkwright:grave "The Glimmer Cup," she says, "will go ahead." A murmur. "I argued against it. I was overruled." She doesn't look at the Headmistress. The Headmistress doesn't look at her. "Saturday the thirteenth. All four houses. On the pitch, in the snow, in daylight, with every Lamplighter I've got on the stands." She looks round the Hall, at all the candles. "Enjoy it. That's an order." She sits down.

@toby:laugh Toby, beside you, with your white candle or his own or Priya's in front of him, you can't tell which any more, says, "Best order she's given," and the whole Heronmere table laughs, and the Hall's warm, and gold, and full of little flames, and for one more morning it's all right.
*journal [b]Chapter 14.[/b] Candlewake. You made a candle with a thread of your flame, and it lit itself, white. Imogen found that Hester Wren's journal, where the other voices of the Wren's Song should be, was withdrawn from the Long Stacks in 1986, the year Morrow was snuffed. {@b_idris_file|In the restricted cage at midnight, Idris showed you Morrow's school file (a Kindler, snuffed in a Warding exercise in February 1986, the matter closed) and told you why he's studied Kindlers since his mother was hollowed. |}At dawn, four hundred candles crossed the frozen Mere. {@b_rowan_afraid|Rowan told you he's afraid, all the time. |}{@b_noor_rest|Noor sat down on the ice and cried, and let you hold her. |}{@candle = "kept"|You kept your white candle.|You gave your white candle away.} {@e09|Mr Tully said somebody has told him Maisie might come back. |}The Glimmer Cup will go ahead.
*page_break
*goto_scene ch15
`);
