/* WRENFOLD — letters, notes and cards (shown with *letter id; kept in the journal; kind: letter | card | note),
 * snapshots (illustrated moments; bg is the place picture shown until ChatGPT paints the moment), and the words on
 * the ending screen. Filled in as the chapters are written. */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});

  NB.LETTERS = {
    invitation: {
      kind: "letter",
      head: "Heavy cream parchment, sealed with red wax and a wren · under your front door, midnight",
      html: "<p class=\"center\"><i>Wrenfold School for Late Magic</i><br><small>The Weathervane Room, Wrenfold, by the Mere</small></p>" +
        "<p>Dear {name},</p>" +
        "<p>Something has happened to you this year. You have probably noticed. The kettle, the lights, the way the candles lean. You may have thought you were ill, or tired, or losing your mind. You are not. You are kindling.</p>" +
        "<p>Your magic has begun, late, as it does for one witch or wizard in every four, and it will burn very brightly for a year and then either settle or burn you out. We would like it to settle.</p>" +
        "<p>A place has been kept for you at Wrenfold since the day you were born, as one is kept for everyone. Term begins tomorrow evening. A doorway will open in your home at midnight and will stay open until dawn; it leads to Lamplight Row, where Mr Fitch at the Wren's Nest will see you are equipped. You need bring nothing but yourself, although most people bring a jumper.</p>" +
        "<p>You may, of course, decline. The doorway will close at dawn, and we will not trouble you again. We would ask you to consider, before you do, what you have noticed this year, and how it has made you feel.</p>" +
        "<p>With every good wish, and some excitement,</p>",
      sign: "<i>Imelda Kestrel</i><br>Headmistress<br><small>P.S. Keep your flame close.</small>"
    }
  };

  NB.SNAPSHOTS = {};

  NB.ENDING_TEXT = {};
})(typeof window !== "undefined" ? window : globalThis);
