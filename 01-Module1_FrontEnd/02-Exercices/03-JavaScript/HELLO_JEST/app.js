const sentence = "Hello World";


function isPalindrom(_word) {
    // return true; //retourner "true" si OK

    //tester si "word" est un palindrome
    // étape 1. On transformer en miniscule la chaine de caractère et on utilise RegExp pour enlever les caractères inutiles.
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    var lowRegWord = _word.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";

    // étape 2. On utilise les méthodes de chainage avec les fonctions intégrées .split(), .reverse(), .join()
    var reverseWord = lowRegWord.split('').reverse().join('');
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";

    // étape 3. On vérifie si reverseStr est strictement égal à lowRegStr et retourne un booléen
    return reverseWord === lowRegWord; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}


const forbiddenWords = ['nuls', 'nul', 'imbécile', 'imbéciles', 'idiots', 'idiot', 'débiles', 'débile'];

function containForbiddenWords(_message) {
    const msg = _message.split(' ');
    let result = [];
    for (let i = 0; i < msg.length; i++) {
        const item = msg[i].toLocaleLowerCase();
        if (forbiddenWords.includes(item)) {
            result.push(item);
        }
    }
    //si le tableau "result" est > 0 alors il y a au moins une cellule de complétée
    if (result.length > 0) {
        return true;
    }
    return false;
}

function changeForbiddenWords(_msg) {
    // return 'vous êtes des XXX';
    //on récupère le résultat de la fonction précèdente
    const hasForbiddenWords = containForbiddenWords(_msg);
    //si tout est OK on retourne la chaîne
    if (!hasForbiddenWords) {
        return _msg;
    }
    //dans le cas ou on doit changer qqch
    const words = _msg.split(' ');
    // console.log('words',words);
    const result = words.map(x => {
        //si le tableau des termes interdits contient le terme de words
        if (forbiddenWords.includes(x.toLocaleLowerCase())) {
            return 'XXX';
        }
        else {
            return x;
        }
    });
    // console.log('result',result);
    return result.join(' ');
}



// //On exporte la variable que l'on doit tester
// module.exports = {
//     sentence,
//     isPalindrom,
//     containForbiddenWords,
//     changeForbiddenWords
// }

//On exporte la variable que l'on doit tester en plugins Babel
export default {
    sentence,
    isPalindrom,
    containForbiddenWords,
    changeForbiddenWords
}