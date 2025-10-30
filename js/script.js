console.log("script.js loaded");

const userInput = document.getElementById("search-input");
const gifContainer = document.querySelector("#gif-container");
const gifButton = document.getElementById("fetch-gif-btn");

// Retrieve GIFs based on user input
function getDogGif() {
    const query = userInput.value.trim() || "dogs"; // fallback to "dogs" if empty
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=k7DMmi7LcEJLIZLGbldeaOW5qjEkX0Q9&q=${encodeURIComponent(query)}&limit=25&offset=0&rating=g&lang=en`;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const gifs = data.data.map(g => g.images.original.url);
            console.log(gifs);

            gifContainer.innerHTML = ""; // clear previous GIFs

            for (const url of gifs) {
                gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3 img-fluid" alt="${query} GIF">`;
            }
        })
        .catch(error => {
            console.error("Error fetching GIF:", error);
        });
}

// Button event listener
gifButton.addEventListener("click", getDogGif);
