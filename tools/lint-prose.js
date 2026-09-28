#!/usr/bin/env node
// Prose lint for Wrenfold: reads every scene's script as text and checks the words, not the logic.
//   node tools/lint-prose.js [--tics] [--scene night1]
// Errors: unbalanced [i]/[b] tags, leftover TODO markers, banned words (real cities and countries: Wrenfold is placeless).
// Warnings also flag narration that slips into first person (the book is second person, present tense: "you").
// Warnings: doubled words, odd quote counts, overlong paragraphs, stray spaces, mixed spellings.
// --tics prints the most repeated four-word phrases across the book, to spot crutches.
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT, scriptList } = require("./lib");

const args = process.argv.slice(2);
const SHOW_TICS = args.includes("--tics");
const ONLY = args.includes("--scene") ? args[args.indexOf("--scene") + 1] : null;

const BANNED = [/\bLondon\b/, /\bManchester\b/, /\bEngland\b/, /\bBritain\b/, /\bBritish\b/, /\bScotland\b/, /\bNHS\b/, /\bNew York\b/, /\bAmerica\b/, /\bCanada\b/, /\bMontr[eé]al\b/, /\bNuit\b/,
  // Wrenfold is its own world: none of the other one's words
  /\bHogwarts\b/, /\bMuggles?\b/, /\bQuidditch\b/, /\bGryffindor\b/, /\bSlytherin\b/, /\bRavenclaw\b/, /\bHufflepuff\b/, /\bDumbledore\b/, /\bVoldemort\b/, /\bDiagon\b/, /\bHogsmeade\b/, /\bSorting Hat\b/];
const MARKERS = [/\bTODO\b/, /\bFIXME\b/, /\bXXX\b/, /lorem ipsum/i, /\bTK\b/];
// Doubles that are deliberate in this book's voice.
const OK_DOUBLES = new Set(["no", "very", "yes", "down", "round", "again", "on", "go", "sorry", "please", "had", "that", "chéri", "ha", "now", "out", "up", "back", "more", "and", "fire", "home", "long", "wait", "slowly", "tick", "ding", "one", "stop", "far", "run", "sleep", "open", "okay", "bye", "shh", "come", "there", "do"]);
// British/Canadian spelling is the house style; flag the American form.
const SPELLING = [["color", "colour"], ["favorite", "favourite"], ["gray", "grey"], ["realize", "realise"], ["neighbor", "neighbour"],
  ["center", "centre"], ["theater", "theatre"], ["jewelry", "jewellery"], ["honor", "honour"], ["apologize", "apologise"], ["recognize", "recognise"]];
const LONG_PARA = 190;

const files = scriptList().filter((f) => /js\/story\/scenes\//.test(f));
const errors = [];
const warnings = [];
const grams = new Map();
let paras = 0, words = 0;

for (const f of files) {
  const src = fs.readFileSync(path.join(ROOT, f), "utf8");
  const m = /NB\.scene\(\s*"([^"]+)"\s*,\s*String\.raw`([\s\S]*)`\s*\)/.exec(src);
  if (!m) continue;
  const scene = m[1];
  if (ONLY && scene !== ONLY) continue;
  const lines = m[2].split("\n");
  let para = [];
  let paraStart = 0;
  const flushPara = () => {
    if (!para.length) return;
    const text = para.join(" ");
    const where = `${scene}:${paraStart}`;
    paras++;
    const n = text.split(/\s+/).filter(Boolean).length;
    words += n;
    if (n > LONG_PARA) warnings.push(`${where}: paragraph of ${n} words`);
    const q = (text.match(/"/g) || []).length;
    if (q % 2) warnings.push(`${where}: odd number of quote marks: ${text.slice(0, 70)}…`);
    // four-word phrases for the tic report
    const toks = text.replace(/\[\/?[ib]\]|\{[^}]*\}/g, "").toLowerCase().match(/[a-zà-ÿ']+/g) || [];
    for (let i = 0; i + 3 < toks.length; i++) {
      const g = toks.slice(i, i + 4).join(" ");
      grams.set(g, (grams.get(g) || 0) + 1);
    }
    para = [];
  };
  lines.forEach((raw, idx) => {
    const lineNo = idx + 1;
    const trimmed = raw.trim();
    let text = null;
    if (!trimmed) { flushPara(); return; }
    if (trimmed.startsWith("*")) {
      flushPara();
      // prose carried by commands: page_break labels, remember, text, chapter titles
      const cm = /^\*(page_break|remember\s+\S+|text\s+\S+|chapter\s+\S+)\s+(.+)$/.exec(trimmed);
      if (cm) text = cm[2];
      // options: *if (...) #Text, *selectable_if (...) #Text
      const om = /#(?:@\w+\s+)?(.+)$/.exec(trimmed);
      if (!text && om && /^\*(if|selectable_if|hide_reuse|elseif)\b/.test(trimmed)) text = om[1];
      if (!text) return;
    } else if (trimmed.startsWith("#")) {
      flushPara();
      text = trimmed.replace(/^#(?:@\w+\s+)?/, "");
    } else {
      if (!para.length) paraStart = lineNo;
      para.push(trimmed);
      text = trimmed;
    }
    const where = `${scene}:${lineNo}`;
    for (const tag of ["i", "b"]) {
      const open = (text.match(new RegExp("\\[" + tag + "\\]", "g")) || []).length;
      const close = (text.match(new RegExp("\\[/" + tag + "\\]", "g")) || []).length;
      if (open !== close) errors.push(`${where}: unbalanced [${tag}] (${open} open, ${close} close)`);
    }
    for (const re of BANNED) if (re.test(text)) errors.push(`${where}: banned word ${re}: ${text.slice(0, 80)}`);
    for (const re of MARKERS) if (re.test(text)) errors.push(`${where}: leftover marker ${re}`);
    const plain = text.replace(/\[\/?[ib]\]/g, "");
    const dm = /(?<![A-Za-zÀ-ÿ'-])([A-Za-zÀ-ÿ']{2,})\s+\1(?![A-Za-zÀ-ÿ'-])/i.exec(plain);
    if (dm && !OK_DOUBLES.has(dm[1].toLowerCase())) {
      // allow echoes across sentence punctuation ("Go. Go.") — the regex only matches plain spaces
      warnings.push(`${where}: doubled word '${dm[0]}'`);
    }
    // second person: narration outside quotes shouldn't say "I" (dialogue, thoughts in [i] and letters are fine)
    const narration = /^\*text\b/.test(trimmed) ? "" : text.replace(/\[i\][\s\S]*?\[\/i\]/g, "").replace(/“[^”]*”|"[^"]*"/g, "");
    if (/(^|[.!?]\s+|\s)I\s+(am|walk|go|feel|see|look|say|turn|open|take|hear|know|think|was|have|can't|don't)\b/.test(narration) || /(^|[.!?]\s+)(My|Me)\s/.test(narration)) warnings.push(`${where}: narration slips into first person: ${narration.slice(0, 70)}`);
    if (/\s[,.;:!?](?!\.)/.test(plain.replace(/\s\.\.\./g, ""))) warnings.push(`${where}: space before punctuation: ${plain.slice(0, 70)}`);
    if (/\S {2,}\S/.test(plain)) warnings.push(`${where}: double space`);
    for (const [us, uk] of SPELLING) {
      const re = new RegExp("(?<![A-Za-zÀ-ÿ])" + us + "(s|d|ed|ing|es)?(?![A-Za-zÀ-ÿ])", "i");
      if (re.test(plain) && !new RegExp("\\b" + uk, "i").test(plain)) warnings.push(`${where}: American spelling '${us}' (house style: ${uk})`);
    }
  });
  flushPara();
}

for (const e of errors) console.log("ERROR   " + e);
for (const w of warnings) console.log("warning " + w);
if (SHOW_TICS) {
  const STOP = /^(and|the|a|of|to|in|it|he|she|you|i|is|on|at|for|with|his|her|your|that|was|as|but|it's|like)$/;
  const top = [...grams.entries()].filter(([g, n]) => n >= 12 && !g.split(" ").every((w) => STOP.test(w))).sort((a, b) => b[1] - a[1]).slice(0, 40);
  console.log("\nMost repeated four-word phrases:");
  for (const [g, n] of top) console.log(String(n).padStart(5) + "  " + g);
}
console.log(`\n${files.length} scene files, ${paras} paragraphs, ~${words.toLocaleString("en")} words of prose: ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
