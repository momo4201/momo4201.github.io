# Images

## Blog covers — add your own photos

The two blog articles are set up for **your own cover photos**. Each article shows a
labeled drop-zone ("Add your cover image at …") until you add the file. To fill it in:

1. Put your photo in this `images/` folder with the exact name below.
2. That's it — refresh the page and the cover appears. No HTML editing needed.

| Add this file | Fills the cover for |
|---|---|
| `images/blog-thoughtviz.jpg` | Blog → "Reproducing ThoughtViz" |
| `images/blog-sleep.jpg` | Blog → "Reading sleep in two signals at once" |

Use a landscape photo around 1200×600 (2:1) for the cleanest fit. JPG or PNG are both
fine — if you prefer PNG, name it `blog-thoughtviz.png` and update the matching
`<img src>` in `index.html`. If a cover file is missing, the drop-zone placeholder
shows instead of a broken image.

## Activity banners (placeholders you can replace)

These ship as banners so the Activities section is never empty. Swap any for a real photo
by dropping a file in `images/` and pointing the matching `<img src>` in `index.html` at it.

| File | Used by |
|---|---|
| `activity-neurogati.svg` | Activities → Neurogati Summer School post |
| `activity-gian.svg` | Activities → GIAN course post |
| `activity-conference.svg` | Activities → Bioengineering Conference post |

## The EEG chart is not an image

The EEG trace in the first blog article is an inline SVG drawn directly in `index.html`,
so it recolors itself for light and dark mode. It stays as-is — edit it there if you
want to change it.
