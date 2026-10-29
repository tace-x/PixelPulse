# PixelPulse

PixelPulse is a simple image search page built with plain HTML, CSS, and
JavaScript. Search Wikimedia Commons and browse matching images in a responsive
card grid.

## Run locally

1. Open `index.html` in a modern web browser.
2. Enter a search term, such as `new york`, and select **Search**.

No frameworks, dependencies, or build tools are required. An internet
connection is needed to retrieve search results and images.

## Features

- Searches Wikimedia Commons for image files.
- Encodes search terms so multi-word queries work.
- Displays image cards with captions and a result count.
- Replaces the previous results when a new search is submitted.
- Ignores blank searches.

## Project files

- `index.html` — search form and results page structure.
- `style.css` — responsive layout and card styling.
- `script.js` — Wikimedia Commons API request and result rendering.

## Image licensing

Images are served by Wikimedia Commons. Each image may have its own license
and attribution requirements; check the individual file page before reusing an
image.
