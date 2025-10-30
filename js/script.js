console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=xYnMu6IrefWYgOFIVpsSMpAfAROyFFAo&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

//Retrieve dog gifs
function getDogGif() {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const gifs = data.data.map(g => g.images.original.url);
        console.log(gifs);
    })
    .catch(error => {
        console.error("Error fetching dog gif:", error);
    });
}


//Button event listener
const button = document.getElementById("fetch-gif-btn");
button.addEventListener("click", function() {
    getDogGif();
});

