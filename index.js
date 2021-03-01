const submitButton = document.getElementById("submit-button");
const sectionResults = document.getElementById("section-results");
const header = document.querySelector(".header");
if(!header) {
    submitButton.removeEventListener("click", headerShrink);
}

const displayResults = function(res) {
    let dogFrame = document.createElement("div");
    let dogPic = document.createElement("img");
    dogFrame.classList.add("image__container");
    if (res.status === "error") {
        sectionResults.appendChild(dogFrame).innerHTML = 
        '<h1>Something went wrong <i class="fas fa-paw"></i></h1>'
    } else {
        sectionResults.appendChild(dogFrame).appendChild(dogPic);
        dogPic.src = res.message;
        dogPic.alt = 'picture of the dog';
    }
};

const headerShrink = function() {
    console.log(header);
    const headerTitle = document.querySelector(".header__title");
    const headerDes = document.querySelector(".header__description");
    const form = document.getElementById("form");
    if (header.classList.contains("header")) {
        header.classList.remove("header");
        header.classList.add("header--small");
        headerTitle.classList.remove("header__title");
        headerTitle.classList.add("header__title--small");
        headerDes.classList.remove("header__description");
        headerDes.classList.add("header__description--small");
        form.style.display = "flex";

    }
    
};

const clearContents = function(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

submitButton.addEventListener("click", headerShrink);

