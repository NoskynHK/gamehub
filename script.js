const translations = {
    it: {
        title: "Esplora i progetti creati da Noskyn",
        join: "Unisciti alla community su Discord!"
    },
    en: {
        title: "Explore projects created by Noskyn",
        join: "Join the community on Discord!"
    },
    de: {
        title: "Entdecke von Noskyn erstellte Projekte",
        join: "Tritt der Community auf Discord bei!"
    }
};

function changeLang(lang) {
    // Cambia titoli principali
    document.getElementById('main-title').innerText = translations[lang].title;
    document.getElementById('join-us').innerText = translations[lang].join;

    // Cambia descrizioni card
    const descriptions = document.querySelectorAll('.desc');
    descriptions.forEach(d => {
        d.innerText = d.getAttribute(`data-${lang}`);
    });
}

// Imposta lingua iniziale
window.onload = () => changeLang('it');

// Funzione per aprire e chiudere il pannello
function toggleWidget() {
    const panel = document.getElementById('widgetPanel');
    panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
}

// Traduzioni per il Widget
const widgetTrans = {
    it: { title: "Invia un'idea", name: "Tuo Nickname", opt: "Seleziona gioco", msg: "Descrivi idea...", btn: "Invia ora" },
    en: { title: "Send an idea", name: "Your Nickname", opt: "Select game", msg: "Describe idea...", btn: "Send now" },
    de: { title: "Idee senden", name: "Dein Nickname", opt: "Spiel wählen", msg: "Idee beschreiben...", btn: "Senden" }
};

// Aggiungi questo pezzo alla tua funzione changeLang(lang)
function updateWidgetLang(lang) {
    document.getElementById('panel-title').innerText = widgetTrans[lang].title;
    document.getElementById('field-name').placeholder = widgetTrans[lang].name;
    document.getElementById('opt-select').innerText = widgetTrans[lang].opt;
    document.getElementById('field-msg').placeholder = widgetTrans[lang].msg;
    document.getElementById('btn-send').innerText = widgetTrans[lang].btn;
}
