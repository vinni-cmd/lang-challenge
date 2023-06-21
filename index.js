const franc = require('franc');
const langs = require('langs');

function guessTheLang(phrase) {
    if (phrase) {
        const langCode = franc(phrase , {minLength: 3});
        if (langCode) {
            const language = langs.where("3",langCode);
            if (language) {
                console.log(language.name);
                return
            }
        }
    }
    console.log('unknown phrase. Try something longer');
}

const input = process.argv[2]
guessTheLang(input)