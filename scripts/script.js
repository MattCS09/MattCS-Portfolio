window.onload = function () {
    setLanguage();
    initializeSlideshows();
};

function setLanguage() {
    let language = document.documentElement.lang;

    loadLocalization(language).then(localizedText => {
        for (let key in localizedText) {
            const elements = document.querySelectorAll(`[localization-key="${key}"]`);
            elements.forEach(element => {
                let originalText = localizedText[key];
                let htmlText = DOMPurify.sanitize(originalText, { ADD_ATTR: ['target'] });
                element.innerHTML = htmlText;
            });
        }
    });

}

function loadLocalization(language) {
    return fetch(`./resources/localization/${language}.json`)
        .then(response => response.json())
        .catch(error => console.error('Error loading localization:', error));
}

function toggleLang() {
    if (document.getElementById('language-toggle').checked) {
        document.documentElement.setAttribute("lang", 'en');
    }
    else {
        document.documentElement.setAttribute("lang", 'es');
    }

    setLanguage();
}


// Fill with as many elements as slideshows in the page
var slideIndex = [1, 1, 1];
var slideId = ["slides1", "slides2", "slides3"]

function initializeSlideshows() {
    for(let i = 0; i < slideId.length; i++) showSlides(1, i)
}

function changeSlide(slideshowNum, slideNum) {
    showSlides(slideIndex[slideNum] += slideshowNum, slideNum);
}

function showSlides(slideshowNum, slideNum) {
    var i;
    var x = document.getElementsByClassName(slideId[slideNum]);
    if (slideshowNum > x.length) { slideIndex[slideNum] = 1 }
    if (slideshowNum < 1) { slideIndex[slideNum] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[slideNum] - 1].style.display = "block";
}