// protocols
const protocols = ["https", "http", "file"];
const searchbar = document.getElementById("searchbar");

function loadURL() {
    var page = document.getElementById("searchbar").value;
    if (shouldAutocomplete(page)) {
        document.querySelector(
            ".current"
        ).src = `https://duckduckgo.com/?q=${page}`;
    } else {
        document.querySelector(".current").src = page;
    }
    removeChildren(suggestionsEl);
}

// add listeners
searchbar.addEventListener("keydown", (e) => {
    if (e.code === "Enter") loadURL();
});