from PIL import Image
import os

src = os.path.join(os.path.dirname(__file__), '..', 'public', 'rehdogg-logo.png')
out = os.path.join(os.path.dirname(__file__), '..', 'public')
img = Image.open(src).convert('RGBA')

sizes = {
    'favicon-16x16.png': (16,16),
    'favicon-32x32.png': (32,32),
    'android-chrome-192x192.png': (192,192),
    'android-chrome-512x512.png': (512,512),
    'apple-touch-icon.png': (180,180),
}

for name, size in sizes.items():
    im = img.copy()
    im.thumbnail(size, Image.LANCZOS)
    # create transparent background for correct size
    canvas = Image.new('RGBA', size, (255,255,255,0))
    canvas.paste(im, ((size[0]-im.width)//2, (size[1]-im.height)//2), im)
    canvas.save(os.path.join(out, name))

# generate favicon.ico containing 16x16 and 32x32
ico_sizes = [(16,16),(32,32)]
icons = []
for s in ico_sizes:
    im = img.copy()
    im.thumbnail(s, Image.LANCZOS)
    canvas = Image.new('RGBA', s, (255,255,255,0))
    canvas.paste(im, ((s[0]-im.width)//2, (s[1]-im.height)//2), im)
    icons.append(canvas)

icons[0].save(os.path.join(out, 'favicon.ico'), format='ICO', sizes=ico_sizes)

# create social preview 1200x630
sp = img.copy()
sp.thumbnail((1200,630), Image.LANCZOS)
canvas = Image.new('RGBA', (1200,630), (0,0,0,255))
# center with padding
x = (1200 - sp.width)//2
y = (630 - sp.height)//2
canvas.paste(sp, (x,y), sp)
canvas.save(os.path.join(out, 'social-preview.png'))

print('Icons generated')
