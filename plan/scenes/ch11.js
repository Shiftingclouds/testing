// CH11 Thimble Cross — Saturday 5 December. The first village weekend, and the Choir in daylight.
"use strict";
module.exports = [
  {
    id: "CH11.VILLAGE.01", date: "2026-12-05", time: "10:00", place: "P34", cast: ["MC", "C07", "C20", "C34", "C30"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "Snow, the high street, Lamplighters on every corner. Odile Pellow's winter stall at the market cross: she polishes your wand and hums an old tune that needs more than one voice. Whom you go present-shopping with.",
    next: "CH11.SWEETS.01"
  },
  {
    id: "CH11.SWEETS.01", date: "2026-12-05", time: "11:30", place: "P35", cast: ["MC", "C41"], maybe: ["C20", "C01", "C02", "C03", "C04", "C05", "C06", "C07"], kind: "common",
    purpose: "Sugar & Sorcery. Mr Ombree has stopped selling humming humbugs this year. A Longnight present, and for whom.",
    next: "CH11.LANTERN.01"
  },
  {
    id: "CH11.LANTERN.01", date: "2026-12-05", time: "13:00", place: "P36", cast: ["MC", "C40", "C34"], maybe: ["C20", "C01", "C02", "C03", "C04", "C05", "C06", "C07"], kind: "common",
    purpose: "The Crooked Lantern, hearthale by the fire. Jory comes in blue with cold: six Lamplighters for the whole village; the Commander is at St Ide's with Bram. The Order can't be everywhere.",
    next: "CH11.CHOIR.01"
  },
  {
    id: "CH11.CHOIR.01", date: "2026-12-05", time: "14:30", place: "P34", cast: ["MC", "C30", "C36", "C34", "C27", "C07"], kind: "common",
    purpose: "The Grey Choir walks into the high street in daylight. Odile steps in front of the first-years and sings the old counter-song, alone, until they hum her out. What you do: sing with her, get the first-years out, or reach with your flame.",
    next: "CH11.AFTER.01"
  },
  {
    id: "CH11.AFTER.01", date: "2026-12-05", time: "18:00", place: "P36", cast: ["MC", "C30", "C33", "C08", "C40"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C20"], kind: "common", allowHollowed: true,
    purpose: "The Crooked Lantern turned into a first-aid post. Odile by the fire, hollowed and polite. The Headmistress names the song: the Wren's Song, Hester Wren's, which can't be sung alone.",
    next: "CH12.FROST.01"
  }
];
