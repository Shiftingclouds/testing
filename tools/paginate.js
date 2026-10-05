#!/usr/bin/env node
// Splits long passages into pages of about one screen, so a scene is read as a run of page turns rather than one long
// scroll. Inserts "*page_break" between two prose paragraphs at the same indentation once a page has reached the target
// length, as long as at least a short page's worth of prose follows before the next natural stop (a choice, a page
// break, a new scene, the end of a branch). Existing page breaks are kept and counted. Safe to re-run.
//   node tools/paginate.js [--target 200] [--min-tail 110] [--dry] [chNN ...]
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf("--" + n); return i < 0 ? d : Number(args[i + 1]); };
const TARGET = opt("target", 200), MIN_TAIL = opt("min-tail", 110), DRY = args.includes("--dry");
const only = args.filter((a) => /^ch\d\d$/.test(a));
const dir = path.join(ROOT, "js/story/scenes");

const words = (s) => s.replace(/\{@[^|}]*\|/g, "").replace(/\[\/?[ib]\]/g, "").replace(/^@\w+(:\w+)?\s+/, "").split(/\s+/).filter(Boolean).length;
const indentOf = (l) => /^\s*/.exec(l)[0].length;
const isText = (l) => l.trim() && !/^\s*[*#]/.test(l) && !/^NB\.scene|^`\);/.test(l.trim());
// commands that end a page or a stretch of reading on their own
const HARD = /^\s*\*(page_break|choice|fake_choice|sid|goto|goto_scene|label|finish|ending|input_text|look|chapter)\b/;

let total = 0;
for (const f of fs.readdirSync(dir).filter((f) => /^ch\d\d\.js$/.test(f)).sort()) {
  if (only.length && !only.includes(f.slice(0, 4))) continue;
  const L = fs.readFileSync(path.join(dir, f), "utf8").split("\n");
  // words of prose from line i onwards at indentation >= ind, until a hard stop or a dedent below ind
  const tail = (i, ind) => {
    let w = 0;
    for (let j = i; j < L.length; j++) {
      const l = L[j];
      if (!l.trim()) continue;
      if (indentOf(l) < ind) break;
      if (HARD.test(l) || /^\s*\*(if|elseif|else)\b/.test(l) || /^\s*#/.test(l)) break;
      if (isText(l) && indentOf(l) === ind) w += words(l);
    }
    return w;
  };
  const out = [];
  const count = new Map(); // indentation -> words on the current page within that block
  let added = 0;
  for (let i = 0; i < L.length; i++) {
    const l = L[i];
    if (!l.trim()) { out.push(l); continue; }
    const ind = indentOf(l);
    // leaving deeper blocks: their pages don't carry over (they were alternatives)
    for (const k of [...count.keys()]) if (k > ind) count.delete(k);
    if (HARD.test(l)) { for (const k of [...count.keys()]) if (k >= ind) count.set(k, 0); if (/^\s*\*(choice|fake_choice)\b/.test(l)) count.set(ind + 2, 0); out.push(l); continue; }
    if (/^\s*#/.test(l) || /^\s*\*(if|elseif|else)\b/.test(l)) { count.set(ind + 2, count.get(ind) || 0); if (/^\s*#/.test(l)) count.set(ind + 2, 0); out.push(l); continue; }
    if (!isText(l)) { out.push(l); continue; }
    let c = count.has(ind) ? count.get(ind) : 0;
    // the previous non-blank line must be prose at the same indentation: only break between two paragraphs
    let p = out.length - 1;
    while (p >= 0 && !out[p].trim()) p--;
    const prevProse = p >= 0 && isText(out[p]) && indentOf(out[p]) === ind;
    if (prevProse && c >= TARGET && tail(i, ind) >= MIN_TAIL) {
      // keep a blank line, then the break, then a blank line, at this indentation
      if (out.length && out[out.length - 1].trim()) out.push("");
      out.push(" ".repeat(ind) + "*page_break");
      out.push("");
      c = 0; added++;
    }
    count.set(ind, c + words(l));
    out.push(l);
  }
  total += added;
  console.log(`${f}: ${added} page breaks added`);
  if (!DRY && added) fs.writeFileSync(path.join(dir, f), out.join("\n"));
}
console.log(`${DRY ? "would add" : "added"} ${total} page breaks (target ${TARGET} words a page)`);
