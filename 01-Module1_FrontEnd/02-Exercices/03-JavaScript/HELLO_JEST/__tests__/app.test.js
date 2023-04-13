//Récupération de l'objet à tester
// const app = require('../app.js');
import app from '../app.js';


//Décrire le test
describe('nomDuTest', () => {
    it('should retrieve a sentence', () => {
        expect(app.sentence.length).toBeGreaterThan(0);
    });
    it('should have a length of 11 letters', () => {
        expect(app.sentence.length).toEqual(11);
    });
});


//Décrire le test palindrome
describe('Palindrom', () => {
    //test si mot est un palindrome
    it('should be a palindrom', () => {
        expect(app.isPalindrom('Kayak')).toEqual(true);
    });
    //test si mot n'est pas un palindrome
    it('shouldn\'t be a palindrom', () => {
        expect(app.isPalindrom('Mot')).toEqual(false);
    });
});


//Décrire le test termes interdits
describe('Moderator', () => {
    //test si mot est un palindrome
    it('contient des mots interdits', () => {
        expect(app.containForbiddenWords('Vous êtes des nuls')).toEqual(true);
    });
    it('remplacer les mots interdits par XXX', () => {
        expect(app.changeForbiddenWords('Vous êtes des nuls')).toEqual('Vous êtes des XXX');
    });
    it('retourne la même phrase si pas de mot interdit détecté', () => {
        expect(app.changeForbiddenWords('Vous êtes de merveilleux stagiaires')).toEqual('Vous êtes de merveilleux stagiaires');
    });
    it('détecte si la casse est modifiée', () => {
        expect(app.changeForbiddenWords('Vous êtes des imBécILES')).toEqual('Vous êtes des XXX');
    });

    it.todo('test suivant à réaliser');
    it.todo('test à réaliser plus tard');
});