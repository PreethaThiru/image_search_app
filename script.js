const accesskey = "1Lnc8sP03Yq7aLsxSjW8a_Qpx31p4xazZOgLouGuq2c";
const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value; // Corrected to .value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`; // Use backticks for template literals
    const response = await fetch(url);
    const data = await response.json();

    if(page===1){
        searchresult.innerHTML="";
    }

    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchresult.appendChild(imageLink); // Corrected to .appendChild
    })
    showmorebtn.style.display="block";
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

