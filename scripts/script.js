window.onload = function () {
    setLanguage();
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

