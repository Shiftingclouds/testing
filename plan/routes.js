// Wrenfold: the six routes. Open to any player, whatever they are; entirely optional. Stages instead of scores:
// 1 met, 2 friendly, 3 friends, 4 close, 5 something more, 6 together. A beat lifts the ceiling a relationship can climb
// to by small steps; each beat can happen in at least two scenes wherever the story branches.
// Something more (5) needs both stage-4 beats and your own choice; Together (6) only at Brightfire or after, by mutual
// choice. Nobody announces an orientation; attraction shows in ordinary ways, to you.
"use strict";

const routes = [
  {
    lead: "rowan", id: "C01",
    wants: "To stop being the brave one for a minute. He's been warm since the fire and it frightens him.",
    beats: [
      { flag: "b_rowan_lamp", stage: 2, at: ["CH02.ALLEY.01", "CH02.LADLE.01"], needs: "", what: "You stand beside him when he steps in front of Toby, or ask him about it after." },
      { flag: "b_rowan_heat", stage: 3, at: ["CH04.WARDING.01", "CH05.NIGHT.01"], needs: "st_rowan >= 2", what: "His flame flares as heat; you steady it, or see it and don't flinch." },
      { flag: "b_rowan_fire", stage: 4, at: ["CH07.MATCH.02", "CH08.FIRE.01"], needs: "st_rowan >= 3", what: "He tells you about the house on Tanner's Row." },
      { flag: "b_rowan_afraid", stage: 4, at: ["CH15.FALL.02", "CH14.CANDLE.02"], needs: "st_rowan >= 3", what: "He admits he's afraid. What you say back matters." },
      { flag: "b_rowan_want", stage: 5, at: ["CH19.ROUTE.01", "CH21.BRIGHT.02"], needs: "b_rowan_fire and b_rowan_afraid and (hurt_rowan < 2)", what: "He says what he wants. You choose what you want back." }
    ]
  },
  {
    lead: "imogen", id: "C02",
    wants: "To get Kit back. Everything else is in the way, until you aren't.",
    beats: [
      { flag: "b_imogen_handbook", stage: 2, at: ["CH02.LADLE.01", "CH03.TRAIN.01"], needs: "", what: "You take her handbook facts seriously, and ask the next question." },
      { flag: "b_imogen_study", stage: 3, at: ["CH04.BREW.01", "CH06.EVENING.01"], needs: "st_imogen >= 2", what: "Studying together; you're the only person who keeps up and doesn't compete." },
      { flag: "b_imogen_kit", stage: 4, at: ["CH08.EMBER.02", "CH10.ORDER.02"], needs: "st_imogen >= 3", what: "She tells you about Kit, and St Ide's." },
      { flag: "b_imogen_order", stage: 4, at: ["CH10.ORDER.02", "CH16.FILE.02"], needs: "st_imogen >= 3", what: "She wants to use your secret to get into the Order. You tell her no, or yes, honestly." },
      { flag: "b_imogen_want", stage: 5, at: ["CH19.ROUTE.01", "CH21.BRIGHT.02"], needs: "b_imogen_kit and b_imogen_order and (hurt_imogen < 2)", what: "She says what she wants that isn't a plan. You choose." }
    ]
  },
  {
    lead: "saoirse", id: "C03",
    wants: "To never be still long enough to be left. Somebody who sits with her anyway.",
    beats: [
      { flag: "b_saoirse_bike", stage: 2, at: ["CH02.NEST.01", "CH02.ROBES.01"], needs: "", what: "You help her smuggle the bike, or laugh at the right moment." },
      { flag: "b_saoirse_build", stage: 3, at: ["CH04.FLIGHT.01", "CH07.PARTY.01"], needs: "st_saoirse >= 2", what: "You build something ridiculous together, and it works." },
      { flag: "b_saoirse_still", stage: 4, at: ["CH07.PARTY.02", "CH09.MAP.02"], needs: "st_saoirse >= 3", what: "Afterwards, sitting still with her, you hear why she never does." },
      { flag: "b_saoirse_run", stage: 4, at: ["CH13.STAY.02", "CH15.CUP.02"], needs: "st_saoirse >= 3", what: "She tries to run from something; you go after her, or let her go and wait." },
      { flag: "b_saoirse_want", stage: 5, at: ["CH19.ROUTE.01", "CH21.BRIGHT.02"], needs: "b_saoirse_still and b_saoirse_run and (hurt_saoirse < 2)", what: "She stops. She says it. You choose." }
    ]
  },
  {
    lead: "cas", id: "C04",
    wants: "To be forgiven for his family by someone who knows exactly what they did.",
    beats: [
      { flag: "b_cas_spar", stage: 2, at: ["CH03.TRAIN.01", "CH04.BREW.01"], needs: "", what: "You answer his sneer with something better than a sneer." },
      { flag: "b_cas_kind", stage: 3, at: ["CH06.HALL.01", "CH10.ORDER.01"], needs: "st_cas >= 2", what: "You catch him being kind, or stand up for him when he's accused." },
      { flag: "b_cas_family", stage: 4, at: ["CH12.DANCE.02", "CH16.FILE.02"], needs: "st_cas >= 3", what: "He tells you what a late flame cost him in that family." },
      { flag: "b_cas_debt", stage: 4, at: ["CH16.HONORIA.01", "CH18.TULLY.03"], needs: "st_cas >= 3", what: "He learns what his grandfather did to Morrow, with you beside him." },
      { flag: "b_cas_want", stage: 5, at: ["CH19.ROUTE.01", "CH21.BRIGHT.02"], needs: "b_cas_family and b_cas_debt and (hurt_cas < 2)", what: "He says what he wants, without a sneer to hide behind. You choose." }
    ]
  },
  {
    lead: "noor", id: "C05",
    wants: "To be looked after, once, without having to ask.",
    beats: [
      { flag: "b_noor_sit", stage: 2, at: ["CH04.INFIRMARY.01", "CH03.FEAST.01"], needs: "", what: "She sits with you; you notice she hasn't eaten." },
      { flag: "b_noor_shift", stage: 3, at: ["CH06.DAWN.01", "CH07.SHIFT.01"], needs: "st_noor >= 2", what: "You work beside her through something bad, and she lets you." },
      { flag: "b_noor_carry", stage: 4, at: ["CH07.SHIFT.02", "CH10.ORDER.03"], needs: "st_noor >= 3", what: "You carry something for her without being asked." },
      { flag: "b_noor_rest", stage: 4, at: ["CH17.AFTER.01", "CH14.CANDLE.02"], needs: "st_noor >= 3", what: "She falls apart, and lets you see it." },
      { flag: "b_noor_want", stage: 5, at: ["CH19.ROUTE.01", "CH21.BRIGHT.02"], needs: "b_noor_carry and b_noor_rest and (hurt_noor < 2)", what: "She asks for something for herself. You choose." }
    ]
  },
  {
    lead: "idris", id: "C06",
    wants: "To be trusted by the one person he can't stop studying.",
    beats: [
      { flag: "b_idris_saw", stage: 2, at: ["CH05.NIGHT.01", "CH05.IDRIS.01"], needs: "", what: "He sees you relight the candle, and keeps it to himself." },
      { flag: "b_idris_stacks", stage: 3, at: ["CH05.IDRIS.01", "CH09.MAP.01"], needs: "st_idris >= 2", what: "Night in the Long Stacks: what he knows about Kindlers, and what he doesn't say." },
      { flag: "b_idris_file", stage: 4, at: ["CH14.IDRIS.01", "CH16.FILE.01"], needs: "st_idris >= 3", what: "He shows you Morrow's file, and why he's been studying Kindlers." },
      { flag: "b_idris_suspect", stage: 4, at: ["CH10.ORDER.01", "CH18.TULLY.01"], needs: "st_idris >= 3", what: "Everyone suspects him. You don't, and you say so." },
      { flag: "b_idris_want", stage: 5, at: ["CH19.ROUTE.01", "CH21.BRIGHT.02"], needs: "b_idris_file and b_idris_suspect and (hurt_idris < 2)", what: "He stops studying you and says it. You choose." }
    ]
  }
];

module.exports = { routes };
