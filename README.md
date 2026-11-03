# VuloForm website (HTML, CSS and jQuery)

The VuloForm marketing site as plain static files. There's no build step and no framework.

```
index.html                 home page
compare/index.html         comparison overview
compare/<plugin>/index.html  one page per plugin
blog/index.html            blog list
blog/<post>/index.html     one page per post
assets/css/style.css       all styles (Tailwind output, plus the animation helpers at the end)
assets/js/main.js          all interactions, written in jQuery
assets/js/jquery.min.js    jQuery 3.7.1
assets/js/lenis.min.js     smooth scrolling (same as the original site)
assets/fonts/              Nunito font files
assets/images/             logo and icons
```

## See it on your computer

Download the repo (**Code › Download ZIP**), unzip it, and double-click `index.html`. Every link works offline.

## See it online

GitHub Pages serves it straight from `main` at https://buddhadebroy.github.io/VuloForm-website/

## Editing

- **Text:** open the page's `index.html` in any editor and change the words.
- **Colours:** at the top of `assets/css/style.css`, under `:root` (`--navy`, `--mint`, `--ink`, ...).
- **Interactions:** `assets/js/main.js`. Elements are found by `data-*` attributes. For example, FAQ items use `data-faq-q`, tabs use `data-tab` and `data-panel`, and the scroll-driven builder demo uses `data-steps` / `data-show`.
- Elements with `data-on` / `data-off` switch between those two sets of classes when their state changes.
