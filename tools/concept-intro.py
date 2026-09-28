#!/usr/bin/env python3
"""Draws the very basic concept frames for the opening film (docs/04-intro-storyboard.md): composition and timing only.
ChatGPT paints the real frames. Each frame is drawn at 320x180 and saved doubled (640x360) to art/concept/intro-NN.png;
they're also copied to art/cinematic/ as placeholders until the finished art replaces them.
  python3 tools/concept-intro.py
"""
import math
import os
import random
import shutil
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H = 320, 180
OUT = os.path.join(ROOT, "art", "concept")
CIN = os.path.join(ROOT, "art", "cinematic")

BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def vgrad(img, top, bottom, y0=0, y1=H, steps=6):
    """Dithered vertical gradient in a few bands, the pixel-art way."""
    px = img.load()
    for y in range(y0, y1):
        t = (y - y0) / max(1, y1 - y0 - 1)
        for x in range(W):
            tt = t + (BAYER[y % 4][x % 4] / 16 - 0.5) / steps
            q = max(0, min(1, round(tt * steps) / steps))
            px[x, y] = lerp(top, bottom, q)


def stars(d, n, seed, y1=110, bright=(235, 230, 255)):
    r = random.Random(seed)
    for _ in range(n):
        x, y = r.randrange(W), r.randrange(y1)
        c = bright if r.random() < 0.3 else (150, 150, 200)
        d.point((x, y), fill=c)
    d.point((250, 22), fill=(255, 255, 255))
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        d.point((250 + dx, 22 + dy), fill=(200, 200, 255))


def moon(d, x, y, r, sky):
    d.ellipse((x - r, y - r, x + r, y + r), fill=(245, 240, 215))
    d.ellipse((x - r + 4, y - r - 2, x + r + 4, y + r - 2), fill=sky)


def hills(d, base, amp, col, seed, freq=0.03):
    r = random.Random(seed)
    ph = r.random() * 6
    pts = [(0, H)]
    for x in range(0, W + 1, 2):
        y = base + math.sin(x * freq + ph) * amp + math.sin(x * freq * 2.7 + ph) * amp * 0.4
        pts.append((x, int(y)))
    pts.append((W, H))
    d.polygon(pts, fill=col)


def rooftops(d, base, col, lit, seed, density=1.0):
    r = random.Random(seed)
    x = 0
    while x < W:
        w = r.randrange(10, 22)
        h = r.randrange(8, 20)
        top = base - h
        d.rectangle((x, top, x + w, H), fill=col)
        # pitched roof
        d.polygon([(x - 1, top), (x + w // 2, top - r.randrange(3, 8)), (x + w + 1, top)], fill=col)
        if r.random() < 0.5:
            d.rectangle((x + w - 5, top - 9, x + w - 3, top - 2), fill=col)  # chimney
        for wy in range(top + 3, base + 10, 6):
            for wx in range(x + 2, x + w - 2, 5):
                if r.random() < 0.18 * density:
                    d.rectangle((wx, wy, wx + 1, wy + 2), fill=lit)
        x += w + r.randrange(0, 3)


def viaduct(d, y, col, arch_col, x0=-10, x1=W + 10, span=26):
    d.rectangle((x0, y, x1, y + 8), fill=col)
    for ax in range(x0, x1, span):
        d.rectangle((ax, y + 8, ax + 6, H), fill=col)
        d.ellipse((ax + 6, y + 4, ax + span, y + 22), fill=arch_col)
        d.rectangle((ax + 6, y + 13, ax + span, H), fill=arch_col)


def lantern(d, x, y, col, s=3):
    d.rectangle((x - s, y - s - 1, x + s, y + s + 1), fill=col)
    d.line((x - s, y - s - 2, x + s, y - s - 2), fill=(60, 40, 30))
    d.point((x, y + s + 2), fill=(255, 240, 180))
    hi = lerp(col, (255, 255, 230), 0.5)
    d.rectangle((x - s + 1, y - s, x - s + 1, y + s), fill=hi)


def save(img, n):
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(CIN, exist_ok=True)
    big = img.resize((W * 2, H * 2), Image.NEAREST)
    p = os.path.join(OUT, f"intro-{n:02d}.png")
    big.save(p, optimize=True)
    shutil.copy(p, os.path.join(CIN, f"intro-{n:02d}.png"))


def shot1():
    img = Image.new("RGB", (W, H))
    sky = (18, 14, 48)
    vgrad(img, (10, 8, 30), (52, 36, 96))
    d = ImageDraw.Draw(img)
    stars(d, 140, 1, y1=H)
    moon(d, 70, 40, 10, (20, 16, 52))
    for i, (cx, cy) in enumerate(((120, 120), (230, 90), (40, 150))):
        d.ellipse((cx - 30, cy - 5, cx + 30, cy + 5), fill=(44, 34, 82))
    save(img, 1)


def shot2():
    img = Image.new("RGB", (W, H))
    vgrad(img, (14, 10, 40), (70, 50, 110), 0, 120)
    d = ImageDraw.Draw(img)
    d.rectangle((0, 120, W, H), fill=(20, 16, 40))
    stars(d, 90, 2, y1=80)
    moon(d, 260, 30, 8, (22, 16, 50))
    hills(d, 95, 8, (38, 30, 70), 3)
    hills(d, 118, 6, (28, 22, 54), 4)
    viaduct(d, 104, (40, 34, 62), (24, 20, 48))
    # the train, lit windows
    d.rectangle((150, 96, 230, 104), fill=(30, 26, 44))
    for wx in range(153, 228, 6):
        d.rectangle((wx, 98, wx + 3, 101), fill=(255, 214, 120))
    d.rectangle((226, 94, 232, 104), fill=(30, 26, 44))
    rooftops(d, 158, (16, 14, 32), (255, 200, 90), 5, 0.9)
    # spire
    d.polygon([(90, 150), (95, 118), (100, 150)], fill=(16, 14, 32))
    # canal glint
    d.rectangle((0, 166, W, H), fill=(14, 12, 30))
    for x in range(0, W, 3):
        if (x // 3) % 2:
            d.point((x, 172), fill=(90, 90, 150))
    save(img, 2)


def shot3():
    img = Image.new("RGB", (W, H))
    vgrad(img, (12, 10, 34), (40, 30, 70), 0, 70)
    d = ImageDraw.Draw(img)
    stars(d, 30, 6, y1=40)
    # one huge arch of the viaduct overhead
    d.rectangle((0, 0, W, 22), fill=(34, 30, 54))
    d.ellipse((30, 6, 290, 150), fill=(22, 18, 40))
    vgrad_img = Image.new("RGB", (W, H))
    # terrace
    d.rectangle((0, 70, W, 140), fill=(58, 46, 64))
    for x in range(0, W, 40):
        d.line((x, 70, x, 140), fill=(44, 34, 50))
        d.rectangle((x + 8, 80, x + 18, 96), fill=(30, 26, 40))
        d.rectangle((x + 24, 100, x + 32, 124), fill=(40, 30, 38))  # doors
    # your window, lit
    d.rectangle((168, 80, 178, 96), fill=(255, 210, 110))
    d.line((173, 80, 173, 96), fill=(160, 110, 50))
    # glow
    for rr in range(18, 4, -4):
        d.ellipse((173 - rr, 88 - rr, 173 + rr, 88 + rr), outline=(90, 70, 70))
    # cobbles
    d.rectangle((0, 140, W, H), fill=(30, 28, 44))
    r = random.Random(7)
    for _ in range(260):
        x, y = r.randrange(W), r.randrange(141, H)
        d.point((x, y), fill=(52, 50, 72))
    # streetlamp
    d.rectangle((60, 90, 61, 140), fill=(20, 18, 28))
    d.rectangle((56, 86, 65, 91), fill=(255, 220, 140))
    # fox on the wall
    d.rectangle((250, 132, 300, 140), fill=(50, 40, 50))
    d.polygon([(268, 132), (278, 124), (286, 132)], fill=(210, 110, 50))
    d.polygon([(278, 124), (280, 119), (282, 124)], fill=(210, 110, 50))
    d.line((262, 130, 268, 132), fill=(210, 110, 50), width=2)
    # rain
    for _ in range(80):
        x, y = r.randrange(W), r.randrange(H)
        d.line((x, y, x - 1, y + 3), fill=(90, 90, 130))
    save(img, 3)


def kitchen(d, wrong=False):
    d.rectangle((0, 0, W, 120), fill=(120, 96, 64))  # wallpaper
    for x in range(6, W, 16):
        for y in range(6, 120, 16):
            d.point((x, y), fill=(140, 112, 76))
            d.point((x + 8, y + 8), fill=(104, 84, 58))
    d.rectangle((0, 120, W, H), fill=(70, 52, 40))  # floor
    # window with night outside and a plant + candle
    d.rectangle((210, 20, 270, 70), fill=(30, 26, 60))
    d.rectangle((210, 20, 270, 70), outline=(200, 190, 170))
    d.line((240, 20, 240, 70), fill=(200, 190, 170))
    d.rectangle((208, 70, 272, 74), fill=(200, 190, 170))
    lean = 4 if wrong else 0
    d.rectangle((222, 60, 230, 70), fill=(150, 80, 60))  # pot
    d.polygon([(226, 60), (218 + lean * 2, 46), (226, 52), (232 + lean * 2, 44)], fill=(70, 130, 60))
    d.rectangle((256, 60, 258, 70), fill=(240, 230, 210))  # candle
    d.polygon([(257, 55 + (0 if not wrong else 1)), (255 - lean, 59), (259 - lean, 59)], fill=(255, 200, 80))
    # clock
    d.ellipse((140, 16, 160, 36), fill=(240, 230, 210), outline=(60, 40, 30))
    d.line((150, 26, 150, 18), fill=(40, 30, 30))
    d.line((150, 26, 149 if not wrong else 150, 19), fill=(40, 30, 30))
    # light bulb
    d.line((110, 0, 110, 10), fill=(30, 20, 20))
    bulb = (255, 240, 170) if not wrong else (130, 120, 90)
    d.ellipse((106, 10, 114, 18), fill=bulb)
    # counter + kettle
    d.rectangle((0, 84, 90, 120), fill=(90, 70, 50))
    d.rectangle((0, 80, 90, 84), fill=(180, 170, 150))
    d.rectangle((20, 66, 36, 80), fill=(200, 60, 50))
    if wrong:
        for i in range(5):
            d.point((28 + (i % 2), 62 - i * 3), fill=(230, 230, 240))
    # table, laptop, card
    d.rectangle((110, 110, 230, 116), fill=(150, 110, 70))
    d.rectangle((118, 116, 122, 150), fill=(120, 86, 56))
    d.rectangle((218, 116, 222, 150), fill=(120, 86, 56))
    d.rectangle((150, 96, 180, 110), fill=(60, 64, 80))
    d.rectangle((152, 98, 178, 108), fill=(150, 200, 230))
    d.polygon([(190, 110), (196, 98), (202, 110)], fill=(240, 200, 220))
    d.text((193, 100), "25", fill=(200, 60, 100))
    # you, from behind
    d.ellipse((160, 78, 178, 96), fill=(40, 30, 30))
    d.rectangle((156, 94, 184, 130), fill=(80, 90, 120))
    d.rectangle((150, 130, 190, 150), fill=(60, 50, 50))  # chair


def shot4():
    img = Image.new("RGB", (W, H))
    kitchen(ImageDraw.Draw(img))
    save(img, 4)


def shot5():
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    kitchen(d, wrong=True)
    # dim everything a bit (flicker)
    img = Image.blend(img, Image.new("RGB", (W, H), (20, 16, 30)), 0.25)
    save(img, 5)


def shot6():
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    d.rectangle((0, 0, W, 110), fill=(60, 44, 34))  # the door
    for x in range(40, W, 60):
        d.rectangle((x, 10, x + 40, 100), outline=(44, 32, 26))
    d.rectangle((0, 108, W, 112), fill=(255, 220, 150))  # streetlight under the gap
    d.rectangle((0, 112, W, H), fill=(92, 66, 46))  # boards
    for y in range(118, H, 10):
        d.line((0, y, W, y), fill=(76, 54, 38))
    d.rectangle((40, 140, 200, 170), fill=(110, 40, 40))  # mat
    # envelope, glowing
    ex, ey = 150, 118
    for rr in range(10, 0, -3):
        d.rectangle((ex - 30 - rr, ey - rr // 2, ex + 30 + rr, ey + 20 + rr // 2), outline=(150, 120, 70))
    d.rectangle((ex - 30, ey, ex + 30, ey + 20), fill=(240, 228, 200))
    d.line((ex - 30, ey, ex, ey + 11), fill=(200, 186, 160))
    d.line((ex + 30, ey, ex, ey + 11), fill=(200, 186, 160))
    d.ellipse((ex - 5, ey + 7, ex + 5, ey + 16), fill=(170, 30, 40))
    save(img, 6)


def shot7():
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    d.rectangle((0, 0, W, H), fill=(110, 80, 56))  # table
    for y in range(0, H, 12):
        d.line((0, y, W, y), fill=(96, 70, 48))
    d.rectangle((70, 10, 250, 172), fill=(242, 232, 206))  # parchment
    d.rectangle((70, 10, 250, 172), outline=(200, 184, 150))
    # the page stays blank: the game writes the invitation onto it
    # broken seal halves
    d.pieslice((140, 2, 158, 20), 90, 270, fill=(170, 30, 40))
    d.pieslice((162, 2, 180, 20), 270, 90, fill=(170, 30, 40))
    # hands
    d.ellipse((40, 120, 86, 176), fill=(206, 160, 120))
    d.ellipse((234, 120, 280, 176), fill=(206, 160, 120))
    save(img, 7)


def shot8():
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    kitchen(d)
    # the doorway being drawn: a gold arch outline, half done
    cx, top, bot, hw = 70, 20, 118, 26
    d.arc((cx - hw, top, cx + hw, top + hw * 2), 180, 300, fill=(255, 220, 120), width=2)
    d.line((cx - hw, top + hw, cx - hw, bot), fill=(255, 220, 120), width=2)
    # papers lifting
    for (x, y) in ((140, 90), (170, 70), (120, 60)):
        d.polygon([(x, y), (x + 8, y - 3), (x + 10, y + 5), (x + 2, y + 8)], fill=(240, 236, 226))
    save(img, 8)


def shot9():
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    kitchen(d)
    img = Image.blend(img, Image.new("RGB", (W, H), (255, 200, 110)), 0.25)
    d = ImageDraw.Draw(img)
    cx, top, bot, hw = 160, 14, 150, 44
    # beyond: Lamplight Row
    beyond = Image.new("RGB", (W, H))
    vgrad(beyond, (20, 16, 50), (60, 40, 90), 0, H)
    bd = ImageDraw.Draw(beyond)
    rooftops(bd, 130, (40, 30, 50), (255, 200, 100), 11, 2.0)
    for i, c in enumerate(((255, 190, 80), (240, 110, 150), (110, 200, 150), (120, 160, 255))):
        lantern(bd, 120 + i * 24, 40 + (i % 2) * 12, c)
    bd.rectangle((0, 130, W, H), fill=(70, 56, 60))
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    md.ellipse((cx - hw, top, cx + hw, top + hw * 2), fill=255)
    md.rectangle((cx - hw, top + hw, cx + hw, bot), fill=255)
    img.paste(beyond, (0, 0), mask)
    d.arc((cx - hw, top, cx + hw, top + hw * 2), 180, 360, fill=(255, 236, 170), width=3)
    d.line((cx - hw, top + hw, cx - hw, bot), fill=(255, 236, 170), width=3)
    d.line((cx + hw, top + hw, cx + hw, bot), fill=(255, 236, 170), width=3)
    # you, silhouette
    d.ellipse((150, 96, 168, 114), fill=(30, 20, 26))
    d.rectangle((146, 112, 172, 170), fill=(30, 20, 26))
    d.line((172, 118, 196, 104), fill=(30, 20, 26), width=4)
    save(img, 9)


def shot10():
    img = Image.new("RGB", (W, H))
    vgrad(img, (255, 244, 210), (255, 214, 140))
    d = ImageDraw.Draw(img)
    r = random.Random(10)
    cols = ((250, 180, 70), (240, 120, 150), (100, 190, 140), (110, 150, 250))
    for _ in range(40):
        lantern(d, r.randrange(10, W - 10), r.randrange(10, H - 10), cols[r.randrange(4)], r.choice((2, 3, 4)))
    save(img, 10)


def shot11():
    img = Image.new("RGB", (W, H))
    vgrad(img, (10, 8, 34), (48, 34, 92), 0, 120)
    d = ImageDraw.Draw(img)
    stars(d, 110, 12, y1=100)
    hills(d, 104, 10, (26, 22, 52), 13, 0.02)
    d.rectangle((0, 128, W, H), fill=(8, 8, 22))  # the Mere
    # island + castle
    d.ellipse((90, 112, 250, 140), fill=(18, 20, 32))
    base = 118
    for (x, w, h, spire) in ((110, 16, 30, 1), (130, 34, 22, 0), (164, 14, 44, 1), (178, 30, 26, 0), (208, 12, 34, 1)):
        d.rectangle((x, base - h, x + w, base + 6), fill=(34, 32, 52))
        if spire:
            d.polygon([(x - 2, base - h), (x + w // 2, base - h - 14), (x + w + 2, base - h)], fill=(28, 26, 44))
        for wy in range(base - h + 4, base, 6):
            d.point((x + w // 2, wy), fill=(255, 210, 120))
    # reflections
    for x in range(110, 220, 4):
        d.point((x, 146), fill=(80, 70, 60))
        d.point((x + 2, 152), fill=(60, 50, 60))
    r = random.Random(14)
    cols = ((250, 180, 70), (240, 120, 150), (100, 190, 140), (110, 150, 250))
    for _ in range(26):
        lantern(d, r.randrange(80, 260), r.randrange(10, 100), cols[r.randrange(4)], 2)
    save(img, 11)


if __name__ == "__main__":
    for f in (shot1, shot2, shot3, shot4, shot5, shot6, shot7, shot8, shot9, shot10, shot11):
        f()
    print("wrote art/concept/intro-01..11.png (and placeholders in art/cinematic/)")
