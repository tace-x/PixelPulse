// 1. Get references to key DOM elements
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("results");
const status = document.getElementById("status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  try {
    const items = await fetchImages(query);
    const resultCount = renderResults(items);
    status.textContent = resultCount
      ? `Showing ${resultCount} results for "${query}".`
      : `No image results found for "${query}".`;
  } catch (error) {
    console.error("Failed to fetch or render images:", error);
  }
});

async function fetchImages(query) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query" +
    "&generator=search&gsrsearch=" +
    encodeURIComponent(query) +
    "&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data.query ? Object.values(data.query.pages) : [];
}

function renderResults(items) {
  results.innerHTML = "";
  let resultCount = 0;

  items.forEach((item) => {
    const imageInfo = item.imageinfo && item.imageinfo[0];
    if (!imageInfo || !imageInfo.thumburl) return;

    const card = document.createElement("article");
    card.className = "result-card";

    const image = document.createElement("img");
    image.src = imageInfo.thumburl;
    image.alt = item.title;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const caption = document.createElement("h2");
    caption.textContent = item.title;

    cardBody.appendChild(caption);
    card.appendChild(image);
    card.appendChild(cardBody);
    results.appendChild(card);
    resultCount += 1;
  });

  return resultCount;
}